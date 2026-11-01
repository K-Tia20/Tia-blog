---
date: 2026-06-20
---

### GetTimerRemaining()

> `FTimerManager`에 등록된 타이머의 **남은 시간(초)** 을 반환하는 함수

---

### 사용 예시

```cpp
float RemainingTime = GetWorldTimerManager().GetTimerRemaining(TimerHandle);
````

---

### 의미

- 지정한 `TimerHandle` 기준으로
    
- 타이머가 종료되기까지 남은 시간을 `float`으로 반환
    

---

### 반환값

```text
float (초 단위)
```

|상태|반환값|
|---|---|
|타이머 진행 중|남은 시간|
|타이머 종료됨|0 또는 음수(상황에 따라)|
|타이머 없음|0|

---

### 동작 흐름

```text
SetTimer(10초)
   ↓
3초 경과
   ↓
GetTimerRemaining()
   ↓
7.0f 반환
```

---

### 활용 예시

#### HUD 타이머 표시

```cpp
float Remaining = GetWorldTimerManager().GetTimerRemaining(LevelTimerHandle);

TimeText->SetText(
    FText::FromString(
        FString::Printf(TEXT("Time: %.1f"), Remaining)
    )
);
```

---

### 필요한 Include

```cpp
#include "TimerManager.h"
```

(`FTimerManager` 및 관련 함수 사용 시 권장)

---

### 한 줄 정리

> `GetTimerRemaining()`은 지정된 타이머가 종료되기까지 남은 시간을 초 단위로 반환하는 함수이다.