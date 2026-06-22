
BigCoinItem.h
```cpp
// BigCoinItem 헤더
// CoinItem을 상속받아 "큰 코인" 기능을 확장한 클래스

#pragma once

// UE 기본 타입(FString, UObject 등)
#include "CoreMinimal.h"

// 기본 코인 클래스 (부모)
#include "Actor/CoinItem.h"

// UHT 생성 코드 포함 (항상 마지막 include)
#include "BigCoinItem.generated.h"

// =========================
// 큰 코인 아이템
// =========================
// ACoinItem을 상속받아 점수/효과를 강화한 아이템
UCLASS()

class COINGAME_API ABigCoinItem : public ACoinItem
{
	GENERATED_BODY()

public:
	// 생성자 (기본 설정 초기화)
	ABigCoinItem();

	// =========================
	// 아이템 사용(획득) 로직 재정의
	// =========================
	// 부모 CoinItem의 동작을 override하여
	// 더 높은 점수 또는 추가 효과 부여
	virtual void ActivateItem(AActor* Activator) override;
};
```

BigCoinItem.cpp
```cpp
// BigCoinItem 구현 파일
// 일반 코인보다 높은 점수를 주는 "큰 코인" 아이템

#include "Actor/BigCoinItem.h"

// =========================
// 생성자
// =========================
// 부모(CoinItem)의 기본 설정을 덮어쓰는 초기화 구간
ABigCoinItem::ABigCoinItem()
{
	// =========================
	// 점수 값 변경
	// =========================
	// CoinItem에 정의된 기본 점수(PointValue)를 50으로 변경
	// → 일반 코인보다 높은 보상
	PointValue = 50;

	// =========================
	// 아이템 타입 설정
	// =========================
	// 식별용 문자열 (디버그 / 로직 분기용)
	ItemType = "BigCoin";
}

// =========================
// 아이템 활성화(획득) 처리
// =========================
void ABigCoinItem::ActivateItem(AActor* Activator)
{
	// =========================
	// 1. 부모 로직 실행
	// =========================
	// ACoinItem의 기본 처리:
	// - 점수 추가
	// - 이펙트 재생
	// - 아이템 제거 등
	Super::ActivateItem(Activator);

	// =========================
	// 2. 추가 확장 지점
	// =========================
	// BigCoin만의 특수 효과를 넣는 위치
	// 예:
	// - 더 큰 파티클
	// - 추가 점수 UI
	// - 사운드 변경
}
```