
CoinItem.h
```cpp
// CoinItem 헤더
// BaseItem을 기반으로 "점수 획득 아이템(코인)" 기능을 구현한 클래스

#pragma once

// UE 기본 타입 (FString, UObject 등)
#include "CoreMinimal.h"

// 모든 아이템의 공통 기반 클래스
#include "Actor/BaseItem.h"

// UHT가 생성하는 리플렉션 코드 (항상 마지막 include)
#include "CoinItem.generated.h"

// =========================
// 코인 아이템 클래스
// =========================
// BaseItem을 상속받아 "점수 기능"을 추가한 아이템
UCLASS()

class COINGAME_API ACoinItem : public ABaseItem
{
	GENERATED_BODY()

public:
	// 생성자 (기본 점수 초기화)
	ACoinItem();

protected:
	// =========================
	// 코인 점수 값
	// =========================

	// 플레이어가 코인을 먹었을 때 얻는 점수
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Item")
	int32 PointValue;

	// =========================
	// 아이템 획득 로직
	// =========================

	// BaseItem의 ActivateItem을 재정의하여
	// 점수 추가 기능을 구현
	virtual void ActivateItem(AActor* Activator) override;
};

```

CoinItem.cpp
```cpp
// CoinItem 구현 파일
// 플레이어가 획득하면 점수를 증가시키는 기본 코인 로직

#include "Actor/CoinItem.h"

// World 접근 (GameState 가져오기용)
#include "Engine/World.h"

// 게임 진행 상태 관리 (점수, 레벨, 코인 수 등)
#include "Gamemode/SpartaGameState.h"

// =========================
// 생성자
// =========================
// 코인의 기본 값 초기화
ACoinItem::ACoinItem()
{
	// 기본 점수 (하위 클래스에서 override 가능)
	PointValue = 0;

	// 아이템 타입 식별용 문자열
	ItemType = "DefaultCoin";
}

// =========================
// 코인 획득 처리
// =========================
void ACoinItem::ActivateItem(AActor* Activator)
{
	// =========================
	// 1. 플레이어 검증
	// =========================
	// Activator가 존재하고 Player 태그를 가진 경우만 처리
	if (Activator && Activator->ActorHasTag("Player"))
	{
		// =========================
		// 2. GameState 접근
		// =========================
		if (UWorld* World = GetWorld())
		{
			// 현재 월드의 GameState를 SpartaGameState로 캐스팅
			if (ASpartaGameState* GameState =
				World->GetGameState<ASpartaGameState>())
			{
				// =========================
				// 3. 점수 처리
				// =========================
				// 코인 점수 추가
				GameState->AddScore(PointValue);

				// 코인 수집 처리 (레벨 종료 조건 체크 포함)
				GameState->OnCoinCollected();
			}
		}

		// =========================
		// 4. 아이템 삭제
		// =========================
		DestroyItem();
	}
}
```