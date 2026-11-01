---
date: 2026-06-20
---

### Super란?

> **현재 클래스의 부모 클래스(기반 클래스)를 가리키는 언리얼 전용 별칭(Alias)**

---

예시

```cpp
class ASpartaPlayerController : public APlayerController
```

여기서

```cpp
Super
```

는

```cpp
APlayerController
```

를 의미한다.

---

### 사용 예시

```cpp
void ASpartaPlayerController::BeginPlay()
{
    Super::BeginPlay();
}
```

의 의미는

```cpp
APlayerController::BeginPlay();
```

와 같다.

즉, 부모 클래스의 `BeginPlay()`를 호출하는 코드이다.

---

### 왜 사용할까?

자식 클래스에서 함수를 재정의(Override)했더라도,

부모가 수행하는 기존 기능을 함께 실행하기 위해 사용한다.

```cpp
Super::BeginPlay();
```

↓

부모 BeginPlay 실행

↓

내 BeginPlay 코드 실행

---

### 한 줄 정리

> **Super는 현재 클래스의 부모 클래스를 가리키는 언리얼 전용 별칭이며, 
> 부모 클래스의 함수나 기능을 호출할 때 사용한다.**