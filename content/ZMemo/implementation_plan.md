# CoinGame 기획 반영 C++ 코드 수정 계획서

본 문서는 C++ 소스 파일의 핵심 변경 부분을 상세히 규정합니다. 기존 코드를 최대한 보존하면서 요청하신 레벨/웨이브 시스템, 100점 달성 클리어, 3D 위젯 클릭 상호작용, 아이템 실시간 셔플 기능을 추가하는 코드 변경 계획입니다.

---

## User Review Required

> [!IMPORTANT]
> **마우스 입력 모드 전환 (GameAndUI)**
> 마우스 클릭으로 3D 위젯/아이템을 상호작용하기 위해 게임 중에도 마우스 커서가 나타납니다.
> 조작의 편의성을 위해 **"기본 조작은 마우스 드래그로 시선 카메라를 돌리고, 클릭으로 아이템을 상호작용"** 하도록 입력 모드를 `FInputModeGameAndUI`로 전환합니다.
>
> **머리 위 HP 위젯 컴포넌트**
> C++ 코드에서 `HPProgressBar`와 `OverHeadHP`를 직접 찾아서 세팅하므로, 에디터 상에서 제작될 머리 위 HP 위젯의 변수 이름이 C++에서 매핑한 문자열과 일치해야 합니다.

---

## Proposed Changes

### Component 1: `GameState` (레벨, 웨이브, 셔플 및 클리어 관리)

#### [MODIFY] [SpartaGameState.h](file:///c:/Users/20ori/Desktop/TestProject/CoinGame/Source/CoinGame/Public/Gamemode/SpartaGameState.h)
* **웨이브 구조체 `FWaveConfig` 선언** 및 웨이브 배열, 타이머, 현재 점수 변수 추가.

```cpp
#pragma once

#include "CoreMinimal.h"
#include "GameFramework/GameState.h"
#include "SpartaGameState.generated.h"

// [NEW] 레벨/웨이브 설정 구조체
USTRUCT(BlueprintType)
struct FWaveConfig
{
	GENERATED_BODY()

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Wave")
	int32 LevelIndex;
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Wave")
	int32 WaveIndex;
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Wave")
	int32 SpawnCount;
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Wave")
	float LimitTime;
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Wave")
	bool bSpawnDebuff;
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Wave")
	bool bHasObstacles;
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Wave")
	float ShuffleInterval;
};

UCLASS()
class COINGAME_API ASpartaGameState : public AGameState
{
	GENERATED_BODY()

public:
	ASpartaGameState();
	
	virtual void BeginPlay() override;
	
	UPROPERTY(VisibleAnyWhere, BlueprintReadWrite, Category = "Score")
	int32 Score;
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Coin")
	int32 SpawnedCoinCount;
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Coin")
	int32 CollectedCoinCount;
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Level")
	float LevelDuration;
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Level")
	int32 CurrentLevelIndex;
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Level")
	int32 MaxLevels;
	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "Level")
	TArray<FName> LevelMapNames;

	// [NEW] 웨이브 관련 추가 상태 변수
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Wave")
	int32 CurrentWaveIndex; // 0, 1, 2 (1, 2, 3웨이브)
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Wave")
	int32 WaveScore; // 현재 웨이브에서 획득한 포인트 (100포인트 달성 체크용)
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Wave")
	TArray<FWaveConfig> WaveConfigs; // 에디터에서 설정할 레벨/웨이브 조건 배열

	FTimerHandle LevelTimerHandle;
	FTimerHandle HUDUpdateTimerHandle;
	FTimerHandle ShuffleTimerHandle; // [NEW] 아이템 셔플용 타이머
	
	UFUNCTION(BlueprintPure, Category = "Score")
	int32 GetScore() const;
	UFUNCTION(BlueprintCallable, Category = "Score")
	void AddScore(int32 Amount);
	UFUNCTION(BlueprintCallable, Category = "Level")
	void OnGameOver();
	
	void StartLevel();
	void OnLevelTimeUp();
	void OnCoinCollected();
	void EndLevel();
	void UpdateHUD();

	// [NEW] 웨이브 제어 관련 신규 함수
	void StartWave();
	void OnWaveTimeUp();
	void ShuffleItems();
	void CheckWaveClearCondition();
	void GoToNextWave();
};
```

#### [MODIFY] [SpartaGameState.cpp](file:///c:/Users/20ori/Desktop/TestProject/CoinGame/Source/CoinGame/Private/Gamemode/SpartaGameState.cpp)
* `StartWave()`, 100점 달성 클리어, 타이머 세팅, 3초/5초마다 아이템 위치를 변경하는 `ShuffleItems()` 구현.

```cpp
#include "Gamemode/SpartaGameState.h"
#include "GameInstance/SpartaGameInstance.h"
#include "SpartaPlayerController.h"
#include "Actor/SpawnVolume.h"
#include "Actor/CoinItem.h"
#include "Actor/BaseItem.h"
#include "Actor/MineItem.h"
#include "Kismet/GameplayStatics.h"
#include "Components/TextBlock.h"
#include "Blueprint/UserWidget.h"

ASpartaGameState::ASpartaGameState()
{
	Score = 0;
	SpawnedCoinCount = 0;
	CollectedCoinCount = 0;
	LevelDuration = 60.0f;
	CurrentLevelIndex = 0;
	MaxLevels = 3;
	CurrentWaveIndex = 0;
	WaveScore = 0;

	// [NEW] 기획 기본 세팅 구성 (C++에서 기본 지정 가능, 에디터에서도 수정 가능)
	// 레벨 1 (인덱스 0)
	WaveConfigs.Add({0, 0, 40, 60.0f, false, false, 0.0f}); // 1-1: 3회(40개씩 스폰), 60초
	WaveConfigs.Add({0, 1, 40, 45.0f, true, false, 0.0f});  // 1-2: 2회, 45초, 디버프 추가
	WaveConfigs.Add({0, 2, 40, 30.0f, true, true, 0.0f});   // 1-3: 1회, 30초, 디버프, 장애물
	// 레벨 2 (인덱스 1)
	WaveConfigs.Add({1, 0, 40, 60.0f, true, true, 0.0f});   // 2-1: 3회, 60초, 디버프
	WaveConfigs.Add({1, 1, 40, 45.0f, true, true, 0.0f});   // 2-2: 2회, 45초, 디버프, 장애물
	WaveConfigs.Add({1, 2, 40, 30.0f, true, true, 5.0f});   // 2-3: 1회, 30초, 디버프, 장애물, 5초셔플
	// 레벨 3 (인덱스 2)
	WaveConfigs.Add({2, 0, 40, 60.0f, true, true, 0.0f});   // 3-1: 3회, 60초, 디버프, 장애물
	WaveConfigs.Add({2, 1, 40, 45.0f, true, true, 5.0f});   // 3-2: 2회, 45초, 디버프, 장애물, 5초셔플
	WaveConfigs.Add({2, 2, 40, 30.0f, true, true, 3.0f});   // 3-3: 1회, 30초, 디버프, 장애물, 3초셔플
}

void ASpartaGameState::BeginPlay()
{
	Super::BeginPlay();
	
	// GameInstance에서 현재 레벨 인덱스를 로드
	if (UGameInstance* GameInstance = GetGameInstance())
	{
		if (USpartaGameInstance* SpartaGameInstance = Cast<USpartaGameInstance>(GameInstance))
		{
			CurrentLevelIndex = SpartaGameInstance->CurrentLevelIndex;
		}
	}

	CurrentWaveIndex = 0; // 레벨 시작 시 1웨이브(인덱스 0)부터 시작
	StartWave();
	
	GetWorldTimerManager().SetTimer(
		HUDUpdateTimerHandle,
		this,
		&ASpartaGameState::UpdateHUD,
		0.1f,
		true
	);
}

void ASpartaGameState::StartWave()
{
	// 셔플 타이머 클리어
	GetWorldTimerManager().ClearTimer(ShuffleTimerHandle);
	GetWorldTimerManager().ClearTimer(LevelTimerHandle);

	WaveScore = 0;
	CollectedCoinCount = 0;
	SpawnedCoinCount = 0;

	// 기존 맵에 남아있는 모든 아이템 정리
	TArray<AActor*> OldItems;
	UGameplayStatics::GetAllActorsOfClass(GetWorld(), ABaseItem::StaticClass(), OldItems);
	for (AActor* Item : OldItems)
	{
		if (Item) Item->Destroy();
	}

	// 현재 레벨 및 웨이브에 해당하는 설정 찾기
	FWaveConfig* ActiveConfig = nullptr;
	for (FWaveConfig& Config : WaveConfigs)
	{
		if (Config.LevelIndex == CurrentLevelIndex && Config.WaveIndex == CurrentWaveIndex)
		{
			ActiveConfig = &Config;
			break;
		}
	}

	if (!ActiveConfig) return;

	LevelDuration = ActiveConfig->LimitTime;

	// 아이템 스폰 로직
	TArray<AActor*> FoundVolumes;
	UGameplayStatics::GetAllActorsOfClass(GetWorld(), ASpawnVolume::StaticClass(), FoundVolumes);

	if (FoundVolumes.Num() > 0)
	{
		ASpawnVolume* SpawnVolume = Cast<ASpawnVolume>(FoundVolumes[0]);
		if (SpawnVolume)
		{
			// SpawnCount 횟수만큼 아이템 스폰
			for (int32 i = 0; i < ActiveConfig->SpawnCount; i++)
			{
				AActor* SpawnedActor = SpawnVolume->SpawnRandomItem();
				if (SpawnedActor)
				{
					// 만약 디버프 금지 웨이브인데 스폰된 것이 지뢰라면 지뢰 파괴 후 코인으로 재스폰
					if (!ActiveConfig->bSpawnDebuff && SpawnedActor->IsA(AMineItem::StaticClass()))
					{
						SpawnedActor->Destroy();
						// CoinItem 강제 스폰 (SpawnItem 활용)
						// (지뢰 제외 처리를 간단하게 스포너에서 안전한 코인 종류로 대체)
						SpawnedActor = SpawnVolume->SpawnItem(ACoinItem::StaticClass());
					}

					if (SpawnedActor && SpawnedActor->IsA(ACoinItem::StaticClass()))
					{
						SpawnedCoinCount++;
					}
				}
			}
		}
	}

	// 셔플 주기 설정이 활성화되어 있다면 타이머 구동
	if (ActiveConfig->ShuffleInterval > 0.0f)
	{
		GetWorldTimerManager().SetTimer(
			ShuffleTimerHandle,
			this,
			&ASpartaGameState::ShuffleItems,
			ActiveConfig->ShuffleInterval,
			true
		);
	}

	// 웨이브 시간 타이머 설정
	GetWorldTimerManager().SetTimer(
		LevelTimerHandle,
		this,
		&ASpartaGameState::OnWaveTimeUp,
		LevelDuration,
		false
	);
}

void ASpartaGameState::OnWaveTimeUp()
{
	// 시간 내에 100점을 못 모았을 경우 실패 처리 -> 게임 오버
	OnGameOver();
}

void ASpartaGameState::AddScore(int32 Amount)
{
	Score += Amount;
	WaveScore += Amount; // 현재 웨이브 획득 점수도 누적

	if (UGameInstance* GameInstance = GetGameInstance())
	{
		USpartaGameInstance* SpartaGameInstance = Cast<USpartaGameInstance>(GameInstance);
		if (SpartaGameInstance)
		{
			SpartaGameInstance->AddToScore(Amount);
		}
	}

	CheckWaveClearCondition();
}

void ASpartaGameState::CheckWaveClearCondition()
{
	// 100 포인트 달성 시 웨이브 클리어
	if (WaveScore >= 100)
	{
		GoToNextWave();
	}
}

void ASpartaGameState::GoToNextWave()
{
	GetWorldTimerManager().ClearTimer(LevelTimerHandle);
	GetWorldTimerManager().ClearTimer(ShuffleTimerHandle);

	CurrentWaveIndex++;

	if (CurrentWaveIndex >= 3) // 3웨이브까지 완료했다면 다음 레벨로
	{
		EndLevel();
	}
	else
	{
		StartWave(); // 다음 웨이브 진행
	}
}

void ASpartaGameState::ShuffleItems()
{
	TArray<AActor*> ActiveItems;
	UGameplayStatics::GetAllActorsOfClass(GetWorld(), ABaseItem::StaticClass(), ActiveItems);

	TArray<AActor*> FoundVolumes;
	UGameplayStatics::GetAllActorsOfClass(GetWorld(), ASpawnVolume::StaticClass(), FoundVolumes);

	if (FoundVolumes.Num() > 0 && ActiveItems.Num() > 0)
	{
		ASpawnVolume* SpawnVolume = Cast<ASpawnVolume>(FoundVolumes[0]);
		if (SpawnVolume)
		{
			for (AActor* Item : ActiveItems)
			{
				if (Item)
				{
					// 아이템 위치를 스폰 볼륨 내 랜덤 포인트로 셔플
					FVector NewLocation = SpawnVolume->GetRandomPointInVolume();
					Item->SetActorLocation(NewLocation);
				}
			}
		}
	}
}

void ASpartaGameState::EndLevel()
{
	GetWorldTimerManager().ClearTimer(LevelTimerHandle);
	GetWorldTimerManager().ClearTimer(ShuffleTimerHandle);

	if (UGameInstance* GameInstance = GetGameInstance())
	{
		USpartaGameInstance* SpartaGameInstance = Cast<USpartaGameInstance>(GameInstance);
		if (SpartaGameInstance)
		{
			CurrentLevelIndex++;
			SpartaGameInstance->CurrentLevelIndex = CurrentLevelIndex;

			if (CurrentLevelIndex >= MaxLevels)
			{
				OnGameOver();
				return;
			}

			if (LevelMapNames.IsValidIndex(CurrentLevelIndex))
			{
				UGameplayStatics::OpenLevel(GetWorld(), LevelMapNames[CurrentLevelIndex]);
			}
			else
			{
				OnGameOver();
			}
		}
	}
}

void ASpartaGameState::UpdateHUD()
{
	if (APlayerController* PlayerController = GetWorld()->GetFirstPlayerController())
	{
		ASpartaPlayerController* SpartaPlayerController = Cast<ASpartaPlayerController>(PlayerController);
		if (SpartaPlayerController)
		{
			if (UUserWidget* HUDWidget = SpartaPlayerController->GetHUDWidget())
			{
				if (UTextBlock* TimeText = Cast<UTextBlock>(HUDWidget->GetWidgetFromName(TEXT("Time"))))
				{
					float RemainingTime = GetWorldTimerManager().GetTimerRemaining(LevelTimerHandle);
					TimeText->SetText(FText::FromString(FString::Printf(TEXT("Time: %.1f"), RemainingTime)));
				}

				if (UTextBlock* ScoreText = Cast<UTextBlock>(HUDWidget->GetWidgetFromName(TEXT("Score"))))
				{
					ScoreText->SetText(FText::FromString(FString::Printf(TEXT("Wave Score: %d / 100"), WaveScore)));
				}

				if (UTextBlock* LevelIndexText = Cast<UTextBlock>(HUDWidget->GetWidgetFromName(TEXT("Level"))))
				{
					LevelIndexText->SetText(FText::FromString(FString::Printf(TEXT("Level: %d - Wave: %d"), CurrentLevelIndex + 1, CurrentWaveIndex + 1)));
				}
			}
		}
	}
}

// 미사용 레거시 함수들 래핑
void ASpartaGameState::StartLevel() {}
void ASpartaGameState::OnLevelTimeUp() {}
void ASpartaGameState::OnCoinCollected() {}
int32 ASpartaGameState::GetScore() const { return Score; }
void ASpartaGameState::OnGameOver()
{
	if (APlayerController* PlayerController = GetWorld()->GetFirstPlayerController())
	{
		if (ASpartaPlayerController* SpartaPlayerController = Cast<ASpartaPlayerController>(PlayerController))
		{
			SpartaPlayerController->SetPause(true);
			SpartaPlayerController->ShowMainMenu(true);
		}
	}
}
```

---

### Component 2: `BaseItem` (3D 공간 위젯 표시 및 마우스 클릭 획득)

#### [MODIFY] [BaseItem.h](file:///c:/Users/20ori/Desktop/TestProject/CoinGame/Source/CoinGame/Public/Actor/BaseItem.h)
* 3D 안내를 띄울 `UWidgetComponent` 선언 및 마우스 클릭 이벤트용 델리게이트 함수 추가.

```cpp
#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "Interface/ItemInterface.h"
#include "Components/WidgetComponent.h" // [NEW] 추가
#include "BaseItem.generated.h"

class USphereComponent;

UCLASS()
class COINGAME_API ABaseItem : public AActor, public IItemInterface
{
	GENERATED_BODY()
	
public:	
	ABaseItem();

protected:
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Item")
	FName ItemType;
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Item|Component")
	USceneComponent* Scene;
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Item|Component")
	USphereComponent* Collision;
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Item|Component")
	UStaticMeshComponent* StaticMesh;
	
	// [NEW] 3D 공간 상호작용 안내 위젯 컴포넌트
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Item|Component")
	UWidgetComponent* InteractionWidget;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Item|Effects")
	UParticleSystem* PickupParticle;
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Item|Effects")
	USoundBase* PickupSound;
	
	virtual void OnItemOverlap(
			UPrimitiveComponent* OverlappedComp,
			AActor* OtherActor,
			UPrimitiveComponent* OtherComp,
			int32 OtherBodyIndex,
			bool bFromSweep,
			const FHitResult& SweepResult) override;
	virtual void OnItemEndOverlap(
			UPrimitiveComponent* OverlappedComp,
			AActor* OtherActor,
			UPrimitiveComponent* OtherComp,
			int32 OtherBodyIndex) override;
	virtual void ActivateItem(AActor* Activator) override;
	virtual FName GetItemType() const override;
	
	void DestroyItem();

	// [NEW] 마우스 클릭 상호작용 델리게이트 수신부
	UFUNCTION()
	void OnItemClicked(AActor* TouchedActor, FKey ButtonPressed);
};
```

#### [MODIFY] [BaseItem.cpp](file:///c:/Users/20ori/Desktop/TestProject/CoinGame/Source/CoinGame/Private/Actor/BaseItem.cpp)
* `InteractionWidget` 생성 및 초깃값 세팅, 델리게이트 바인딩, 플레이어 접근 시 위젯 표시 토글 및 클릭 시 획득 로직 구현.

```cpp
#include "Actor/BaseItem.h"
#include "Components/SphereComponent.h"
#include "Kismet/GameplayStatics.h"
#include "Particles/ParticleSystemComponent.h"

ABaseItem::ABaseItem()
{
	PrimaryActorTick.bCanEverTick = false;
	
	Scene = CreateDefaultSubobject<USceneComponent>(TEXT("Scene"));
	SetRootComponent(Scene);
	
	Collision = CreateDefaultSubobject<USphereComponent>(TEXT("Collision"));
	Collision->SetCollisionProfileName(TEXT("OverlapAllDynamic"));
	Collision->SetupAttachment(Scene);
	
	StaticMesh = CreateDefaultSubobject<UStaticMeshComponent>(TEXT("StaticMesh"));
	StaticMesh->SetupAttachment(Collision);

	// [NEW] Interaction Widget 설정
	InteractionWidget = CreateDefaultSubobject<UWidgetComponent>(TEXT("InteractionWidget"));
	InteractionWidget->SetupAttachment(Collision);
	InteractionWidget->SetWidgetSpace(EWidgetSpace::Screen); // 화면 상의 3D 투영으로 설정
	InteractionWidget->SetVisibility(false); // 처음에는 숨김
	
	Collision->OnComponentBeginOverlap.AddDynamic(this, &ABaseItem::OnItemOverlap);
	Collision->OnComponentEndOverlap.AddDynamic(this, &ABaseItem::OnItemEndOverlap);

	// [NEW] 액터 클릭 델리게이트 등록 (PlayerController의 Click Event 활성화 필요)
	OnClicked.AddDynamic(this, &ABaseItem::OnItemClicked);
}

void ABaseItem::OnItemOverlap(
	UPrimitiveComponent* OverlappedComp,
	AActor* OtherActor,
	UPrimitiveComponent* OtherComp,
	int32 OtherBodyIndex,
	bool bFromSweep,
	const FHitResult& SweepResult)
{
	if (OtherActor && OtherActor->ActorHasTag("Player"))
	{
		// 플레이어 접근 시 안내 위젯 표시
		InteractionWidget->SetVisibility(true);
	}
}

void ABaseItem::OnItemEndOverlap(
	UPrimitiveComponent* OverlappedComp,
	AActor* OtherActor,
	UPrimitiveComponent* OtherComp,
	int32 OtherBodyIndex)
{
	if (OtherActor && OtherActor->ActorHasTag("Player"))
	{
		// 플레이어 퇴장 시 안내 위젯 숨김
		InteractionWidget->SetVisibility(false);
	}
}

void ABaseItem::OnItemClicked(AActor* TouchedActor, FKey ButtonPressed)
{
	// 플레이어가 overlap 범위 내에 있을 때만 마우스 클릭 상호작용 인정
	APlayerController* PC = GetWorld()->GetFirstPlayerController();
	if (PC)
	{
		AActor* PlayerPawn = PC->GetPawn();
		if (PlayerPawn && Collision->IsOverlappingActor(PlayerPawn))
		{
			ActivateItem(PlayerPawn);
		}
	}
}

void ABaseItem::ActivateItem(AActor* Activator)
{
	UParticleSystemComponent* Particle = nullptr;

	if (PickupParticle)
	{
		Particle = UGameplayStatics::SpawnEmitterAtLocation(
			GetWorld(),
			PickupParticle,
			GetActorLocation(),
			GetActorRotation(),
			true
		);
	}

	if (PickupSound)
	{
		UGameplayStatics::PlaySoundAtLocation(
			GetWorld(),
			PickupSound,
			GetActorLocation()
		);
	}

	if (Particle)
	{
		FTimerHandle DestroyParticleTimerHandle;
	
		GetWorld()->GetTimerManager().SetTimer(
			DestroyParticleTimerHandle,
			[Particle]()
			{
				Particle->DestroyComponent();
			},
			2.0f,
			false
		);
	}

	// 획득 시 위젯 숨김
	InteractionWidget->SetVisibility(false);
}

FName ABaseItem::GetItemType() const { return ItemType; }
void ABaseItem::DestroyItem() { Destroy(); }
```

---

### Component 3: `PlayerController` (마우스 클릭 모드 및 인터랙션 모드 활성화)

#### [MODIFY] [SpartaPlayerController.cpp](file:///c:/Users/20ori/Desktop/TestProject/CoinGame/Source/CoinGame/Private/SpartaPlayerController.cpp)
* `ShowGameHUD()`를 통해 게임 진행 모드로 들어갈 때, 마우스 커서를 보이고 클릭과 마우스 오버 이벤트를 감지할 수 있도록 입력 설정을 수정합니다.

```cpp
void ASpartaPlayerController::ShowGameHUD()
{
	if (HUDWidgetInstance)
	{
		HUDWidgetInstance->RemoveFromParent();
		HUDWidgetInstance = nullptr;
	}

	if (MainMenuWidgetInstance)
	{
		MainMenuWidgetInstance->RemoveFromParent();
		MainMenuWidgetInstance = nullptr;
	}

	if (HUDWidgetClass)
	{
		HUDWidgetInstance = CreateWidget<UUserWidget>(this, HUDWidgetClass);
		if (HUDWidgetInstance)
		{
			HUDWidgetInstance->AddToViewport();

			// [MODIFY] 마우스 클릭 상호작용 및 조작이 모두 가능하도록 변경
			bShowMouseCursor = true;
			bEnableClickEvents = true;
			bEnableMouseOverEvents = true;

			// 마우스 드래그 시 카메라를 돌리고, 클릭으로 월드 위젯과 상호작용하도록 입력 설정
			FInputModeGameAndUI InputMode;
			InputMode.SetLockMouseToViewportBehavior(EMouseLockMode::DoNotLock);
			InputMode.SetWidgetToFocus(nullptr);
			SetInputMode(InputMode);
		}

		ASpartaGameState* SpartaGameState = GetWorld() ? GetWorld()->GetGameState<ASpartaGameState>() : nullptr;
		if (SpartaGameState)
		{
			SpartaGameState->UpdateHUD();
		}
	}
}
```

---

### Component 4: `Character` (머리 위 3D 위젯 컴포넌트 ProgressBar 갱신 연동)

#### [MODIFY] [SpartaCharacter.cpp](file:///c:/Users/20ori/Desktop/TestProject/CoinGame/Source/CoinGame/Private/Character/SpartaCharacter.cpp)
* 캐릭터 머리 위에 3D 위젯 컴포넌트(`HPProgressBar`)가 배치되었을 때, `UpdateOverheadHP`에서 텍스트 수치뿐만 아니라 Progress Bar의 Percent율도 함께 반영하도록 변경합니다.

```cpp
#include "Components/ProgressBar.h" // [NEW] 추가

void ASpartaCharacter::UpdateOverheadHP()
{
	if (!OverheadWidget) return;
	
	UUserWidget* OverheadWidgetInstance = OverheadWidget->GetUserWidgetObject();
	if (!OverheadWidgetInstance) return;
	
	// 기존 텍스트 위젯 갱신
	if (UTextBlock* HPText = Cast<UTextBlock>(OverheadWidgetInstance->GetWidgetFromName(TEXT("OverHeadHP"))))
	{
		HPText->SetText(FText::FromString(FString::Printf(TEXT("%.0f / %.0f"), Health, MaxHealth)));
	}

	// [NEW] ProgressBar 위젯 갱신
	if (UProgressBar* HPBar = Cast<UProgressBar>(OverheadWidgetInstance->GetWidgetFromName(TEXT("HPProgressBar"))))
	{
		if (MaxHealth > 0.0f)
		{
			HPBar->SetPercent(Health / MaxHealth);
		}
	}
}
```

---

## Verification Plan

### Automated/Build Verification
- C++ 빌드가 정상적으로 완료되는지 확인합니다.

### Manual Verification (언리얼 에디터)
1. **위젯 블루프린트 연동**:
   * 캐릭터 3D 위젯(`WBP_HPBar`)을 에디터에서 만들고 `HPProgressBar`(ProgressBar)와 `OverHeadHP`(TextBlock) 변수를 구성한 뒤 머리 위 컴포넌트에 할당합니다.
   * 아이템 안내 위젯(`WBP_Interaction`)을 생성하고 이를 `BP_BaseItem`의 `InteractionWidget` 클래스 설정으로 연동합니다.
2. **웨이브 매개변수 테스트**:
   * 게임 플레이 시 HUD에 `Wave Score: 0 / 100` 및 현재 웨이브 `Level: 1 - Wave: 1`이 정상 노출되는지 확인합니다.
   * 100점을 모았을 때 즉시 다음 웨이브(2웨이브)로 가며, 아이템이 리셋되고 다시 스폰되는지 검증합니다.
   * 마우스 클릭을 통해 아이템을 클릭해 획득할 수 있는지 확인합니다.
   * 2레벨 3웨이브 및 3레벨 2/3웨이브 시 3초/5초마다 아이템들이 볼륨 내에서 셔플되는지 테스트합니다.
