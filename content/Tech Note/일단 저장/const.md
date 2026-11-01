---
date: 2026-06-20
---

## const (C++ 기준)

> 값을 **변경하지 못하게 제한하는 키워드**

언리얼 C++에서도 동일하게 “읽기 전용” 의미로 사용된다.

---

# 1. 함수 뒤 const

```cpp
int32 GetScore() const
```

### 의미

이 함수 안에서는
- 멤버 변수 변경 금지
- 상태 변경 금지

---

### 예시

```cpp
int32 GetScore() const
{
    Score = 100; // ❌ 에러
    return Score;
}
```

---

### 허용되는 것

```cpp
int32 GetScore() const
{
    return Score; // ⭕ 가능 (읽기만)
}
```

---

### 핵심

```text
const = "이 함수는 객체 상태를 바꾸지 않는다"
```

---

# 2. 포인터 const (자주 헷갈리는 부분)

## (1) 값 변경 금지

```cpp
const int32* Ptr;
```

👉 값 변경 불가

```cpp
*Ptr = 10; // ❌
```

---

## (2) 포인터 자체 변경 금지

```cpp
int32* const Ptr;
```

👉 주소 변경 불가

```cpp
Ptr = 다른주소; // ❌
```

---

## (3) 둘 다 금지

```cpp
const int32* const Ptr;
```

👉 값도 못 바꾸고, 주소도 못 바꿈

---

# 3. 함수 매개변수 const

```cpp
void PrintName(const FString& Name)
```

### 의미
- 복사 안 함 (효율)
- 값 수정 금지

```cpp
Name = "Test"; // ❌
```

---

# 4. const를 쓰는 이유

### 1) 안전성

```text
실수로 값 변경 방지
```

---

### 2) 의도 표현

```text
이 함수는 읽기 전용이다
```

---

### 3) 최적화 도움

```text
컴파일러 최적화 가능
```

---

# 한 줄 정리

> `const`는 “이 값/함수는 변경하지 않는다”는 의미로,
>  함수 뒤에 붙으면 객체 상태 변경을 금지하는 읽기 전용 함수가 된다.