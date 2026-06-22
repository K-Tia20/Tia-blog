*ItemInterface.cpp는 내용 없음

ItemInterface.h
```cpp
// 헤더 파일이 여러 번 포함되는 것을 방지하는 전처리기 지시문
#pragma once

// 언리얼 엔진의 기본 타입(FString, UObject 등)을 사용하기 위한 핵심 헤더
#include "CoreMinimal.h"

// 인터페이스(UInterface)를 사용하기 위한 헤더
#include "UObject/Interface.h"

// Unreal Header Tool(UHT)이 자동 생성하는 코드가 들어가는 헤더
// 반드시 마지막 include로 위치해야 함
#include "ItemInterface.generated.h"

// 언리얼 리플렉션 시스템에서 사용할 인터페이스 클래스 선언
// UINTERFACE는 블루프린트 및 언리얼 내부 시스템이 인식하는 인터페이스 역할
// `MinimalAPI`는 필요한 최소한의 심볼만 다른 모듈에 공개해라
UINTERFACE(MinimalAPI)

// UInterface를 상속받는 인터페이스용 UObject 클래스
// 실제 기능은 없고 언리얼의 리플렉션 시스템에 등록하기 위한 용도
class UItemInterface : public UInterface
{
	GENERATED_BODY() // 언리얼이 필요한 코드를 자동 생성
};

// 실제 C++ 레벨에서 사용할 함수 원형(시그니처)를 정의
// 게임 로직은 이 인터페이스 클래스에 작성
class COINGAME_API IItemInterface
{
	GENERATED_BODY() // 인터페이스 관련 코드 자동 생성

public:

	// 언리얼 리플렉션 시스템에 등록되는 함수
	// 오버랩(충돌 시작) 시 호출될 함수 선언
	UFUNCTION()

	// 순수 가상 함수(=0)
	// 인터페이스를 구현하는 클래스가 반드시 구현해야 함
	virtual void OnItemOverlap(

			// 충돌이 발생한 컴포넌트
			UPrimitiveComponent* OverlappedComp,

			// 충돌한 상대 액터
			AActor* OtherActor,

			// 상대 액터의 충돌 컴포넌트
			UPrimitiveComponent* OtherComp,

			// 충돌한 바디의 인덱스
			int32 OtherBodyIndex,

			// Sweep 이동 중 발생한 충돌인지 여부
			bool bFromSweep,

			// 충돌 위치, 노멀 등의 상세 정보
			const FHitResult& SweepResult) = 0;

	// 오버랩 종료 시 호출될 함수
	UFUNCTION()
	virtual void OnItemEndOverlap(

			// 오버랩이 종료된 컴포넌트
			UPrimitiveComponent* OverlappedComp,

			// 오버랩이 끝난 상대 액터
			AActor* OtherActor,

			// 상대 액터의 충돌 컴포넌트
			UPrimitiveComponent* OtherComp,

			// 충돌 바디 인덱스
			int32 OtherBodyIndex) = 0;

	// 아이템을 실제로 사용하는 함수
	// 예: 코인 획득, 체력 회복, 버프 적용 등
	// Activator는 아이템을 사용한 액터
	virtual void ActivateItem(AActor* Activator) = 0;

	// 아이템의 종류를 반환하는 함수
	// 예: Coin, Heal, Buff 등
	// const는 멤버 변수를 변경하지 않는 함수임을 의미
	virtual FName GetItemType() const = 0;
};

```
---
### 인터페이스(Interface)란?

> **"이 기능을 반드시 구현해야 한다"는 규칙(설계도)을 정의하는 클래스**

---

예시

```cpp
class IItemInterface
{
public:
    virtual void ActivateItem(AActor* Activator) = 0;
};
```

이 인터페이스를 상속받으면

```cpp
class ACoinItem : public AActor, public IItemInterface
{
public:
    virtual void ActivateItem(AActor* Activator) override;
};
```

반드시 `ActivateItem()`을 구현해야 한다.

---

### 왜 사용할까?

아이템 종류가 달라도 같은 방식으로 사용할 수 있게 하기 위해

```cpp
CoinItem
HealItem
BuffItem
```

모두

```cpp
ActivateItem()
```

을 가지고 있다고 보장할 수 있다.

---
### 한 줄 정리

> **인터페이스는 클래스가 반드시 구현해야 하는 함수들을 정의하는 규칙(계약서)이다.**

---
### 언리얼 인터뷰용 한 줄

> 인터페이스를 사용하면 서로 다른 클래스들을 동일한 방식으로 다룰 수 있으며,
> 특정 기능의 구현을 강제할 수 있습니다.

---

`= 0`은 **순수 가상 함수(Pure Virtual Function)** 를 의미합니다.

즉,

> **"이 함수는 여기서 구현하지 않을 테니, 이 인터페이스를 상속받는 클래스가 반드시 구현해라"**

라는 뜻입니다.

### 한 줄 정리

> `= 0`은 해당 함수를 **순수 가상 함수(Pure Virtual Function)** 로 만드는 문법이다.
> 해당 함수를 자식 클래스에서 반드시 구현하도록 강제하기 위해 사용한다.

---

> 순수 가상 함수(`= 0`)는 구현이 없는 가상 함수로, 
> 상속받는 클래스가 반드시 해당 함수를 구현하도록 강제하며 
> 주로 인터페이스를 구현할 때 사용한다.