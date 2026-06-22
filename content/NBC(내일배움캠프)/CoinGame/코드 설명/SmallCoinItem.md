
SmallCoinItem.h
```cpp
// SmallCoinItem 헤더
// 기본 코인보다 낮은 점수를 주는 작은 코인 아이템

#pragma once

// UE 기본 타입 (FString, UObject 등)
#include "CoreMinimal.h"

// 코인 기본 클래스
#include "CoinItem.h"

// UHT 리플렉션 코드 (항상 마지막 include)
#include "SmallCoinItem.generated.h"

// =========================
// 작은 코인 아이템
// =========================
// ACoinItem을 상속하여 낮은 점수 또는 별도 효과를 주는 변형 클래스
UCLASS()

class COINGAME_API ASmallCoinItem : public ACoinItem
{
	GENERATED_BODY()

public:
	// 생성자 (기본 값 초기화)
	ASmallCoinItem();

	// =========================
	// 아이템 획득 로직 재정의
	// =========================
	// 부모 CoinItem의 ActivateItem을 override하여 동작 변경 가능
	virtual void ActivateItem(AActor* Activator) override;
};
```


SmallCoinItem.cpp
```cpp
// SmallCoinItem 구현 파일
// 기본 코인보다 낮은 점수를 주는 작은 코인 아이템

#include "Actor/SmallCoinItem.h"

// =========================
// 생성자
// =========================
// SmallCoinItem의 기본 속성 초기화
ASmallCoinItem::ASmallCoinItem()
{
	// =========================
	// 점수 설정
	// =========================
	// 일반 코인보다 낮은 점수
	PointValue = 10;

	// =========================
	// 아이템 타입 설정
	// =========================
	ItemType = "SmallCoin";
}

// =========================
// 아이템 활성화 (획득 처리)
// =========================
void ASmallCoinItem::ActivateItem(AActor* Activator)
{
	// =========================
	// 1. 부모 로직 실행
	// =========================
	// ACoinItem의 기본 동작:
	// - 점수 추가
	// - GameState 처리
	// - 아이템 삭제
	Super::ActivateItem(Activator);

	// =========================
	// 2. 확장 지점
	// =========================
	// SmallCoin 전용 효과 추가 가능
	// 예: 사운드 변경, UI 효과 등
}
```