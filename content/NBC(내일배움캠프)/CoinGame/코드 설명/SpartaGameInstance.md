
SpartaGameInstance.h
```cpp
// GameInstance 헤더
// 게임 전체 생명주기 동안 유지되는 전역 데이터 저장 공간
// (레벨이 바뀌어도 값이 유지됨)

#pragma once

// UE 기본 타입(FString, UObject 등)을 사용하기 위한 핵심 헤더
#include "CoreMinimal.h"

// GameInstance 기본 기능 제공 클래스
#include "Engine/GameInstance.h"

// UHT(언리얼 헤더 툴) 생성 코드 포함 헤더
#include "SpartaGameInstance.generated.h"

// 리플렉션 시스템에 등록되는 GameInstance 클래스 선언
UCLASS()

// 커스텀 GameInstance
// 게임 전체 데이터(점수, 레벨 상태 등)를 유지하는 역할
class COINGAME_API USpartaGameInstance : public UGameInstance
{
	GENERATED_BODY()

public:
	// 생성자: 기본 값 초기화 용도
	USpartaGameInstance();

	// =========================
	// 1. 게임 전체 누적 점수
	// =========================
	UPROPERTY(VisibleAnywhere, BlueprintReadWrite, Category = "GameData")
	int32 TotalScore;

	// =========================
	// 2. 현재 레벨 인덱스
	// =========================
	// GameState에서도 관리 가능하지만,
	// 레벨 전환 후에도 유지해야 하는 데이터이므로 GameInstance에도 저장
	UPROPERTY(VisibleAnywhere, BlueprintReadWrite, Category = "GameData")
	int32 CurrentLevelIndex;

	// =========================
	// 3. 점수 증가 함수
	// =========================
	UFUNCTION(BlueprintCallable, Category = "GameData")
	// Amount 만큼 TotalScore에 누적
	void AddToScore(int32 Amount);
};
```


SpartaGameInstance.cpp
```cpp
// GameInstance 구현 파일
// 전역 데이터(점수, 레벨 인덱스 등)를 실제로 초기화하고 관리하는 로직

#include "GameInstance/SpartaGameInstance.h"

// =========================
// 생성자
// =========================
// 게임 시작 시 1회 호출되며 GameInstance 초기값 설정 담당
USpartaGameInstance::USpartaGameInstance()
{
	// 누적 점수 초기화 (게임 시작 시 0점)
	TotalScore = 0;

	// 현재 레벨 인덱스 초기화 (첫 레벨)
	CurrentLevelIndex = 0;
}

// =========================
// 점수 증가 함수
// =========================
// 특정 행동(코인 획득 등) 발생 시 점수를 누적하는 함수
void USpartaGameInstance::AddToScore(int32 Amount)
{
	// 기존 총 점수에 전달된 점수(Amount)를 누적
	TotalScore += Amount;

	// 디버그 출력 (콘솔 로그)
	// 현재 총 점수를 출력하여 정상 동작 확인
	UE_LOG(LogTemp, Warning, TEXT("Total Score Updated: %d"), TotalScore);
}
```

