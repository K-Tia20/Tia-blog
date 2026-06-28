---
date: 2026-06-20
---

### ClearTimer()  
  
> `FTimerManager`에 등록된 타이머를 **즉시 제거(중단)** 하는 함수  
  
---  
  
### 사용 예시  
  
```cpp
GetWorldTimerManager().ClearTimer(TimerHandle);
```

---
### 의미
- 해당 `TimerHandle`로 등록된 타이머를 삭제
- 예약된 함수 실행이 아직 안 됐더라도 **실행 자체가 취소됨**

---
### 매개변수

```cpp
ClearTimer(FTimerHandle& Handle)
```

| 매개변수        | 설명               |
| ----------- | ---------------- |
| TimerHandle | 제거할 타이머를 식별하는 핸들 |

---
### 동작 흐름

```text
SetTimer로 등록
   ↓
대기 중
   ↓
ClearTimer 호출
   ↓
타이머 삭제 (함수 실행 안 됨)
```

---
### 예시 상황
#### 1. 폭발 취소

```cpp
GetWorldTimerManager().ClearTimer(ExplosionTimerHandle);
```

→ 지뢰가 폭발하기 전에 제거하면 폭발 취소

---
#### 2. 레벨 종료

```cpp
GetWorldTimerManager().ClearTimer(LevelTimerHandle);
```

→ 시간 제한 타이머 중단

---
### SetTimer와 관계

|함수|역할|
|---|---|
|SetTimer|타이머 생성|
|ClearTimer|타이머 삭제|

---

Timer 관련 함수는 전부 `TimerManager.h`에 의존하므로, 
간접 include에 기대지 말고 
(ex:  include "GameFramework/GameState.h", include "GameFramework/Actor.h")
항상 직접 포함하는 것이 표준이다.

---
### 한 줄 정리

> `ClearTimer()`는 `FTimerHandle`로 등록된 타이머를 제거하여 예약된 함수 실행을 취소하는 함수이다.