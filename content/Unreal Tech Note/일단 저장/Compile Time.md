---
date: 2026-06-20
---

## 컴파일 타임(Compile Time)이란?

> **작성한 C++ 코드가 컴파일러에 의해 기계어(실행 파일)로 변환되는 시점**

쉽게 말하면

```text
코드 작성
 ↓
컴파일 ← 여기
 ↓
실행
 ↓
종료
```

컴파일 타임은 **게임을 실행하기 전** 단계이다.

---

# 컴파일 타임에 하는 일

컴파일러는 이 시점에

### 문법 검사

```cpp
int Num = 10
```

세미콜론(`;`) 누락 확인

---

### 타입 검사

```cpp
int Num = "Hello";
```

자료형이 맞는지 확인

---

### 함수 존재 여부 확인

```cpp
Attack();
```

Attack 함수가 선언되어 있는지 확인

---

### 클래스 존재 여부 확인

```cpp
AMonster* Monster;
```

AMonster 클래스가 정의되어 있는지 확인

---

### 헤더 포함 확인

```cpp
#include "Monster.h"
```

필요한 헤더가 있는지 확인

---

# 컴파일 타임 에러 예시

## 문법 오류

```cpp
int Num = 10
```

에러

```text
expected ';'
```

---

## 타입 오류

```cpp
int Num = "Hello";
```

에러

```text
cannot convert from 'const char*' to 'int'
```

---

## 함수 없음

```cpp
Attack();
```

에러

```text
identifier "Attack" is undefined
```

---

## 클래스 없음

```cpp
AMonster* Monster;
```

에러

```text
unknown type name
```

---

# 언리얼에서 자주 보는 컴파일 타임 에러

## GENERATED_BODY 누락

```cpp
UCLASS()
class AMyActor : public AActor
{
};
```

에러

```text
Missing GENERATED_BODY()
```

---

## generated.h 위치 오류

```cpp
#include "MyActor.generated.h"
#include "Engine/World.h"
```

에러

```text
generated.h must be the last include
```

---

## 전방 선언 누락

```cpp
UPROPERTY()
UBoxComponent* BoxComp;
```

에러

```text
unknown type UBoxComponent
```

---

# 컴파일 타임 vs 런타임

| 구분    | 컴파일 타임  | 런타임        |
| ----- | ------- | ---------- |
| 시점    | 빌드 중    | 실행 중       |
| 발견 주체 | 컴파일러    | 프로그램       |
| 결과    | 빌드 실패   | 크래시, 버그    |
| 예시    | 세미콜론 누락 | nullptr 접근 |

---

### 컴파일 타임이란?

> 소스 코드가 실행 파일로 변환되는 과정에서 컴파일러가 문법, 타입, 함수, 클래스 등의 오류를 검사하는 시점이다.

---

### 컴파일 타임 에러 예시

```cpp
int Num = "Hello";
```

> 타입이 맞지 않아 컴파일 단계에서 오류가 발생한다.

---

### 런타임 에러 예시

```cpp
AActor* Actor = nullptr;
Actor->Destroy();
```

> 컴파일은 성공하지만 실행 중 nullptr 접근으로 크래시가 발생한다.

---

# 한 줄 정리

- **컴파일 타임** → 코드 검사를 하는 시간
- **런타임** → 프로그램이 실제로 실행되는 시간

언리얼 관점에서는:

> `UCLASS`, `UPROPERTY`, `UFUNCTION` 등을 UHT가 분석하는 것도 
>  컴파일 타임 과정에 포함된다고 이해하면 된다.