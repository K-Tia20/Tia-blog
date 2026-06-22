
HealingItem.h
```cpp
// HealingItem 헤더
// 플레이어 체력을 회복시키는 아이템 클래스

#pragma once

// UE 기본 타입 (FString, UObject 등)
#include "CoreMinimal.h"

// 모든 아이템의 공통 기반 클래스
#include "Actor/BaseItem.h"

// UHT 리플렉션 코드 포함 (항상 마지막 include)
#include "HealingItem.generated.h"

// =========================
// 회복 아이템
// =========================
// BaseItem을 상속하여 체력 회복 기능을 추가한 클래스
UCLASS()

class COINGAME_API AHealingItem : public ABaseItem
{
	GENERATED_BODY()

public:
	// 생성자 (기본 회복량 초기화)
	AHealingItem();

protected:
	// =========================
	// 회복량 설정
	// =========================

	// 이 아이템을 획득했을 때 회복되는 체력 값
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Healing")
	int32 HealAmount;

	// =========================
	// 아이템 사용 로직
	// =========================

	// BaseItem의 ActivateItem을 재정의하여
	// 체력 회복 기능을 구현
	virtual void ActivateItem(AActor* Activator) override;
};
```

HealingItem.cpp
```cpp
// HealingItem 구현 파일
// 플레이어 체력을 회복시키는 아이템 로직

#include "Actor/HealingItem.h"

// 플레이어 캐릭터 클래스 (체력 함수 호출용)
#include "Character/SpartaCharacter.h"

// =========================
// 생성자
// =========================
// 회복량 및 아이템 타입 초기화
AHealingItem::AHealingItem()
{
	// =========================
	// 회복량 설정
	// =========================
	// 이 아이템을 먹으면 회복되는 체력 값
	HealAmount = 20.0f;

	// =========================
	// 아이템 타입 지정
	// =========================
	ItemType = "Healing";
}

// =========================
// 아이템 활성화 (획득 처리)
// =========================
void AHealingItem::ActivateItem(AActor* Activator)
{
	// =========================
	// 1. 플레이어 검증
	// =========================
	// Activator가 존재하고 Player 태그를 가진 경우만 처리
	if (Activator && Activator->ActorHasTag("Player"))
	{
		// =========================
		// 2. 캐릭터 캐스팅
		// =========================
		// Activator를 실제 플레이어 캐릭터 타입으로 변환
		if (ASpartaCharacter* PlayerCharacter =
			Cast<ASpartaCharacter>(Activator))
		{
			// =========================
			// 3. 체력 회복
			// =========================
			PlayerCharacter->AddHealth(HealAmount);
		}

		// =========================
		// 4. 아이템 제거
		// =========================
		DestroyItem();
	}
}
```