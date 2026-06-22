
> 부모 타입의 객체를 실제 자식 타입으로 안전하게 변환하는 언리얼 형변환 함수

---

### 사용 목적

부모 클래스 포인터로는 접근할 수 없는 자식 클래스의 변수나 함수를 사용하기 위해 사용한다.

---

### 사용 예시

```cpp
AActor* OtherActor;

ASpartaCharacter* Player =
    Cast<ASpartaCharacter>(OtherActor);
```

---

### Cast 성공

실제 객체가 `ASpartaCharacter` 타입이면

```cpp
Player != nullptr
```

---

### Cast 실패

실제 객체가 다른 타입이면

```cpp
Player == nullptr
```

을 반환한다.

---

### 필요한 헤더

`Cast<>` 자체는

```cpp
#include "CoreMinimal.h"
```

에 포함되어 있어 별도 Include가 필요 없다.

다만 캐스팅 대상 클래스는 Include 해야 한다.

예시

```cpp
#include "SpartaCharacter.h"
```

```cpp
ASpartaCharacter* Player =
    Cast<ASpartaCharacter>(OtherActor);
```

---

### 한 줄 정리

> `Cast<>`는 객체의 실제 타입을 확인한 후 안전하게 형변환하는 언리얼 함수이며,
> 실패 시 `nullptr`을 반환한다.



---

# 추가 정리

### 1. 상황 설정

```cpp
A* ObjA = ...;
```

- `A` = 부모 클래스 (기본 타입)
- `B` = 자식 클래스 (확장된 타입)

```cpp
class B : public A
```

---
### 2. 실제 상황

A 타입 포인터 하나 있음
근데 실제로는 B 객체가 들어있음
##### 코드로 보면
```cpp
A* ObjA = new B();
```

👉 겉보기 타입: A  
👉 실제 타입: B

---
### 3. 문제 상황

A 타입으로는 B 기능을 못 씀

```cpp
ObjA->B전용함수(); // ❌ A에는 없음
```

---
### 4. 해결 = Cast

```cpp
B* ObjB = Cast<B>(ObjA);
```

---
### 5. Cast가 하는 일

```text
"너 A처럼 보이는데 실제로 B 맞아?"
```

확인하는 과정

---
### 6. 결과 2가지

#### (1) 성공 케이스

```cpp
A* ObjA = new B();

B* ObjB = Cast<B>(ObjA);
```

👉 실제 B라서 성공

```text
ObjB = B 포인터로 변환됨
```

---

#### (2) 실패 케이스

```cpp
A* ObjA = new A();

B* ObjB = Cast<B>(ObjA);
```

👉 실제는 A라서 실패

```text
ObjB = nullptr
```

---
### 7. Unreal Cast 특징

```cpp
Cast<B>(ObjA)
```

이건 내부적으로:

```text
"진짜 B 맞아?"
맞으면 변환
틀리면 nullptr
```

---

### 8. 코드 예시

```cpp
UGameInstance* GameInstance = GetGameInstance();

USpartaGameInstance* SpartaGameInstance =
    Cast<USpartaGameInstance>(GameInstance);
```

#### 의미 (A/B/C로 변환)

```text
A = UGameInstance (기본 클래스)
B = USpartaGameInstance (내가 만든 확장 클래스)
```

#### 과정

```text
GameInstance (A)
   ↓
"이거 사실 SpartaGameInstance(B)야?"
   ↓ Cast
맞으면 B로 사용
틀리면 nullptr
```

---

### 9. 왜 Cast를 쓰냐?

A는 기본 기능만 있음:

```cpp
A->기본기능()
```

하지만 B는 추가 기능 있음:

```cpp
B->AddToScore()
```

그래서:

```cpp
Cast<B>(A) 해야 B 기능 사용 가능
```

---

### 10. 핵심 한 줄

> Cast는 “부모 타입(A)을 실제 자식 타입(B)으로 안전하게 바꿀 수 있는지 확인하고 변환하는 과정”이다.

---

# static_cast vs dynamic_cast vs Unreal Cast 차이

#### static_cast

> “그냥 바꿔 (너 책임)”

#### dynamic_cast

> “진짜 맞아? 검사하고 바꿔”

#### Unreal Cast

> “UE 시스템으로 안전하게 검사하고 바꿔”

|구분|static_cast|dynamic_cast|Unreal Cast|
|---|---|---|---|
|검사|없음|있음|있음|
|속도|빠름|느림|중간|
|안전성|낮음|높음|높음|
|UE 사용|거의 X|거의 X|표준|
|기반|컴파일 타임|RTTI|Reflection|
C++은 타입 안전성을 위해 자동 캐스팅을 막고, 개발자가 명시적으로 변환 방식을 선택하게 만든다. Unreal에서는 Reflection 기반의 Cast<>가 표준 안전 캐스팅 방식이다.



##### Unreal Cast
```cpp
USpartaGameInstance* SpartaGameInstance =
    Cast<USpartaGameInstance>(GameInstance);
```
"이 GameInstance 진짜 SpartaGameInstance 맞아?"  
맞으면 변환 아니면 nullptr

##### static_cast
```cpp
USpartaGameInstance* SpartaGameInstance =
    static_cast<USpartaGameInstance*>(GameInstance);
```
"난 무조건 SpartaGameInstance라고 믿는다"

dynamic_cast
```cpp
USpartaGameInstance* SpartaGameInstance =
    dynamic_cast<USpartaGameInstance*>(GameInstance);
```
"진짜 SpartaGameInstance인지 검사해보고 맞으면 변환"