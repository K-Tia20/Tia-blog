
ASpartaGameState.h
```cpp
// 헤더 파일이 여러 번 포함되는 것을 방지
#pragma once

// 언리얼 엔진의 기본 타입과 기능 사용
#include "CoreMinimal.h"

// GameState 클래스 사용
#include "GameFramework/GameState.h"

// UHT가 생성하는 코드 포함
// 반드시 마지막 include에 위치해야 함
#include "SpartaGameState.generated.h"

// 언리얼 리플렉션 시스템에 등록되는 클래스
UCLASS()

// 게임 진행 상태(점수, 레벨, 시간 등)를 관리하는 GameState 클래스
class COINGAME_API ASpartaGameState : public AGameState
{
	GENERATED_BODY()

public:

	// 생성자
	ASpartaGameState();

	// 게임 시작 시 호출
	virtual void BeginPlay() override;

	// ------------------------
	// 점수 관련 변수
	// ------------------------

	// 현재 레벨의 점수
	UPROPERTY(VisibleAnywhere, BlueprintReadWrite, Category = "Score")
	int32 Score;

	// ------------------------
	// 코인 관련 변수
	// ------------------------

	// 현재 레벨에서 생성된 코인 개수
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Coin")
	int32 SpawnedCoinCount;

	// 현재 레벨에서 획득한 코인 개수
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Coin")
	int32 CollectedCoinCount;

	// ------------------------
	// 레벨 관련 변수
	// ------------------------

	// 레벨 제한 시간(초)
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Level")
	float LevelDuration;

	// 현재 진행 중인 레벨 번호
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Level")
	int32 CurrentLevelIndex;

	// 게임의 최대 레벨 수
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Level")
	int32 MaxLevels;

	// 레벨 이동 시 사용할 맵 이름 목록
	// 예:
	// BasicLevel
	// Level2
	// Level3
	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "Level")
	TArray<FName> LevelMapNames;

	// ------------------------
	// 타이머 핸들
	// ------------------------

	// 레벨 제한 시간 관리용 타이머
	FTimerHandle LevelTimerHandle;

	// HUD 자동 갱신용 타이머
	FTimerHandle HUDUpdateTimerHandle;

	// ------------------------
	// 점수 관련 함수
	// ------------------------

	// 현재 점수 반환
	UFUNCTION(BlueprintPure, Category = "Score")
	int32 GetScore() const;

	// 점수 추가
	UFUNCTION(BlueprintCallable, Category = "Score")
	void AddScore(int32 Amount);

	// ------------------------
	// 게임 종료 관련 함수
	// ------------------------

	// 게임 오버 처리
	UFUNCTION(BlueprintCallable, Category = "Level")
	void OnGameOver();

	// ------------------------
	// 레벨 진행 관련 함수
	// ------------------------

	// 레벨 시작
	void StartLevel();

	// 제한 시간 종료 시 호출
	void OnLevelTimeUp();

	// 코인 획득 시 호출
	void OnCoinCollected();

	// 레벨 종료
	void EndLevel();

	// HUD 정보 갱신
	void UpdateHUD();
};
```

ASpartaGameState.cpp
```cpp
#include "Gamemode/SpartaGameState.h"
#include "GameInstance//SpartaGameInstance.h"
#include "SpartaPlayerController.h"
#include "Actor//SpawnVolume.h"
#include "Actor/CoinItem.h"
#include "Kismet/GameplayStatics.h"
#include "Components/TextBlock.h"
#include "Blueprint/UserWidget.h"

// 생성자
// 게임 진행에 필요한 기본값 초기화
ASpartaGameState::ASpartaGameState()
{
	Score = 0;
	SpawnedCoinCount = 0;
	CollectedCoinCount = 0;
	LevelDuration = 30.0f;
	CurrentLevelIndex = 0;
	MaxLevels = 3;
}

// 게임 시작 시 호출
// 레벨 시작 및 HUD 갱신 타이머 등록
void ASpartaGameState::BeginPlay()
{
	Super::BeginPlay();

	// 현재 레벨 시작
	// 현재 레벨에 필요한 데이터 초기화 및 아이템 생성
	StartLevel();

	// 0.1초마다 HUD 갱신
	// 타이머 매니저를 통해 Explode 함수를 ExplosionDelay초 후에 실행하도록 예약
	//
	GetWorldTimerManager().SetTimer(
		HUDUpdateTimerHandle,         // 1. 타이머를 제어할 핸들 (영수증)
		this,                         // 2. 함수를 실행할 주체 (객체)
		&ASpartaGameState::UpdateHUD, // 3. 실행할 함수의 메모리 주소
		0.1f,                         // 4. 대기 시간 (초 단위)
		true                          // 5. 반복 여부 (true = 무한 반복)
	);
}

// 현재 점수 반환
//const 이 함수 안에서는 멤버 변수를 변경하지 않겠다
int32 ASpartaGameState::GetScore() const
{
	return Score;
}

// GameInstance에 점수 누적 (레벨이 바뀌어도 유지되는 총 점수 저장)
void ASpartaGameState::AddScore(int32 Amount)
{
	// 현재 월드에 연결된 GameInstance 객체를 가져옴
	// (게임 전체에서 1개만 존재하는 전역 데이터 저장소)
	if (UGameInstance* GameInstance = GetGameInstance())
	{
		// 기본 GameInstance를 
		// 우리가 만든 커스텀 GameInstance(USpartaGameInstance)로 안전하게 형변환
		// Cast 실패 시 nullptr 반환 (타입이 다르면 아래 코드 실행 안됨)
		if (USpartaGameInstance* SpartaGameInstance =
			Cast<USpartaGameInstance>(GameInstance))
		{
			// 실제 점수 증가 로직 호출
			// Amount 만큼 TotalScore에 누적됨
			SpartaGameInstance->AddToScore(Amount);
		}
	}
}

// 레벨 시작 전체 로직: HUD 표시 → 레벨 데이터 로드 → 코인 생성 → 타이머 시작
void ASpartaGameState::StartLevel()
{
	// 현재 월드의 PlayerController를 가져옴 (플레이어 입력/카메라/UI 담당)
	if (APlayerController* PlayerController =
		GetWorld()->GetFirstPlayerController())
	{
		// 기본 APlayerController를 커스텀 컨트롤러로 안전하게 캐스팅
		if (ASpartaPlayerController* SpartaPlayerController =
			Cast<ASpartaPlayerController>(PlayerController))
		{
			// HUD UI를 화면에 표시하도록 요청
			SpartaPlayerController->ShowGameHUD();
		}
	}

	// 현재 게임 인스턴스 가져오기 (레벨이 바뀌어도 유지되는 데이터 저장소)
	if (UGameInstance* GameInstance = GetGameInstance())
	{
		// 커스텀 GameInstance로 캐스팅 (레벨 인덱스 등 접근 목적)
		if (USpartaGameInstance* SpartaGameInstance =
			Cast<USpartaGameInstance>(GameInstance))
		{
			// 이전에 저장된 현재 레벨 인덱스를 가져와 반영
			CurrentLevelIndex =
				SpartaGameInstance->CurrentLevelIndex;
		}
	}

	// 현재 레벨의 코인 관련 상태 초기화 (새 레벨 시작이므로 초기화 필요)
	SpawnedCoinCount = 0;      // 생성된 코인 수 초기화
	CollectedCoinCount = 0;    // 획득한 코인 수 초기화

	// 맵에 존재하는 SpawnVolume 액터들을 모두 검색
	TArray<AActor*> FoundVolumes;
	UGameplayStatics::GetAllActorsOfClass(
		GetWorld(),
		ASpawnVolume::StaticClass(),
		FoundVolumes
	);

	// 이번 레벨에서 생성할 아이템 총 개수
	const int32 ItemToSpawn = 40;

	// SpawnVolume이 존재하는 경우에만 아이템 생성 진행
	if (FoundVolumes.Num() > 0)
	{
		// 첫 번째 SpawnVolume을 가져와서 사용
		ASpawnVolume* SpawnVolume =
			Cast<ASpawnVolume>(FoundVolumes[0]);

		// 캐스팅 성공한 경우에만 실행
		if (SpawnVolume)
		{
			// 지정된 개수만큼 반복하여 아이템 생성
			for (int32 i = 0; i < ItemToSpawn; i++)
			{
				// SpawnVolume 내부 로직으로 랜덤 아이템 생성
				AActor* SpawnedActor =
					SpawnVolume->SpawnRandomItem();

				// 생성된 액터가 존재하고, 코인 타입인지 확인
				if (SpawnedActor &&
					SpawnedActor->IsA(
						ACoinItem::StaticClass()))
				{
					// 코인일 경우 생성 카운트 증가
					SpawnedCoinCount++;
				}
			}
		}
	}
	// 레벨 제한 시간 타이머 시작 (LevelDuration 후 OnLevelTimeUp 호출)
	GetWorldTimerManager().SetTimer(
		LevelTimerHandle,              // 타이머를 제어할 핸들
		this,                          // 실행 대상 객체 (현재 GameState)
		&ASpartaGameState::OnLevelTimeUp, // 시간 종료 시 호출할 함수
		LevelDuration,                 // 제한 시간 (초)
		false                          // 반복 여부 (false = 1회 실행)
	);
}

// 제한 시간 종료 시 호출
void ASpartaGameState::OnLevelTimeUp()
{
	EndLevel();
}

// 코인 획득 시 호출
void ASpartaGameState::OnCoinCollected()
{
	CollectedCoinCount++;

	// 모든 코인을 획득했으면 레벨 종료
	if (SpawnedCoinCount > 0 &&
		CollectedCoinCount >= SpawnedCoinCount)
	{
		EndLevel();
	}
}

// 레벨 종료 처리: 타이머 정리 → 점수 저장 → 다음 레벨 이동 or 게임 종료
void ASpartaGameState::EndLevel()
{
	// 현재 진행 중인 레벨 제한 타이머를 제거 (시간 종료 로직 중단)
	GetWorldTimerManager().ClearTimer(LevelTimerHandle);

	// GameInstance 가져오기 (레벨 간 유지되는 데이터 접근용)
	if (UGameInstance* GameInstance = GetGameInstance())
	{
		// 커스텀 GameInstance로 캐스팅 (점수/레벨 정보 접근)
		if (USpartaGameInstance* SpartaGameInstance =
			Cast<USpartaGameInstance>(GameInstance))
		{
			// 현재 레벨에서 얻은 점수를 전체 점수에 누적
			AddScore(Score);

			// 다음 레벨로 인덱스 증가
			CurrentLevelIndex++;

			// GameInstance에도 현재 레벨 정보를 저장 (레벨 전환 시 유지)
			SpartaGameInstance->CurrentLevelIndex =
				CurrentLevelIndex;

			// 마지막 레벨을 초과했는지 확인 (게임 클리어 조건)
			if (CurrentLevelIndex >= MaxLevels)
			{
				// 게임 종료 처리 실행
				OnGameOver();

				// 이후 로직 실행 방지 (중요)
				return;
			}

			// 다음 레벨 맵 이름이 유효한지 검사
			if (LevelMapNames.IsValidIndex(CurrentLevelIndex))
			{
				// 해당 레벨 맵으로 전환
				UGameplayStatics::OpenLevel(
					GetWorld(),
					LevelMapNames[CurrentLevelIndex]
				);
			}
			else
			{
				// 맵 정보가 없으면 게임 종료 처리
				OnGameOver();
			}
		}
	}
}

// 게임 종료 처리: 입력 중단 + UI 전환 (Game Over 화면 표시)
void ASpartaGameState::OnGameOver()
{
	// 현재 월드의 PlayerController 가져오기 (플레이어 입력/화면/UI 제어 담당)
	if (APlayerController* PlayerController =
		GetWorld()->GetFirstPlayerController())
	{
		// 기본 PlayerController를 커스텀 컨트롤러로 캐스팅
		if (ASpartaPlayerController* SpartaPlayerController =
			Cast<ASpartaPlayerController>(PlayerController))
		{
			// 게임 전체 일시정지 (Tick, 입력 등 대부분 정지 상태로 전환)
			SpartaPlayerController->SetPause(true);

			// 메인 메뉴 UI 표시 (true = Game Over 상태 UI)
			SpartaPlayerController->ShowMainMenu(true);
		}
	}
}

// HUD UI 갱신: 시간 / 점수 / 레벨 정보를 화면에 실시간 반영
void ASpartaGameState::UpdateHUD()
{
	// 현재 플레이어 컨트롤러 가져오기 (UI 접근 경로 확보)
	if (APlayerController* PlayerController =
		GetWorld()->GetFirstPlayerController())
	{
		// 커스텀 PlayerController로 캐스팅 (HUD 위젯 접근 목적)
		ASpartaPlayerController* SpartaPlayerController =
			Cast<ASpartaPlayerController>(PlayerController);

		// HUD 위젯 인스턴스 가져오기
		if (UUserWidget* HUDWidget =
			SpartaPlayerController->GetHUDWidget())
		{
			// =========================
			// 1. 남은 시간 UI 갱신
			// =========================
			if (UTextBlock* TimeText =
				Cast<UTextBlock>(
					HUDWidget->GetWidgetFromName(TEXT("Time"))))
			{
				// 현재 타이머에서 남은 시간 계산
				float RemainingTime =
					GetWorldTimerManager()
					.GetTimerRemaining(LevelTimerHandle);

				// UI 텍스트로 변환 후 적용
				TimeText->SetText(
					FText::FromString(
						FString::Printf(
							TEXT("Time: %.1f"),
							RemainingTime
						)
					)
				);
			}

			// =========================
			// 2. 총 점수 UI 갱신
			// =========================
			if (UTextBlock* ScoreText =
				Cast<UTextBlock>(
					HUDWidget->GetWidgetFromName(TEXT("Score"))))
			{
				// GameInstance에서 누적 점수 가져오기
				if (UGameInstance* GameInstance =
					GetGameInstance())
				{
					if (USpartaGameInstance* SpartaGameInstance =
						Cast<USpartaGameInstance>(GameInstance))
					{
						// 점수 UI 업데이트
						ScoreText->SetText(
							FText::FromString(
								FString::Printf(
									TEXT("Score: %d"),
									SpartaGameInstance->TotalScore
								)
							)
						);
					}
				}
			}

			// =========================
			// 3. 현재 레벨 UI 갱신
			// =========================
			if (UTextBlock* LevelIndexText =
				Cast<UTextBlock>(
					HUDWidget->GetWidgetFromName(TEXT("Level"))))
			{
				// 레벨 인덱스는 0부터 시작하므로 +1 해서 표시
				LevelIndexText->SetText(
					FText::FromString(
						FString::Printf(
							TEXT("Level: %d"),
							CurrentLevelIndex + 1
						)
					)
				);
			}
		}
	}
}

```


---
