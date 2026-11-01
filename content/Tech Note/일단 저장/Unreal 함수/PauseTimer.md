---
date: 2026-06-20
---

### PauseTimer()

> `FTimerManager`에 등록된 타이머를 **일시 정지**하는 함수

---

### 사용 예시

```cpp
GetWorldTimerManager().PauseTimer(TimerHandle);
````

---

### 의미

- 실행 중인 타이머를 멈춤
    
- 남은 시간은 유지됨
    
- 이후 `UnPauseTimer()`로 재개 가능
    

---

### 동작 흐름

```text
SetTimer(10초)
   ↓
5초 경과
   ↓
PauseTimer 호출
   ↓
타이머 정지 (남은 시간 5초 유지)
```

---

### 재개

```cpp
GetWorldTimerManager().UnPauseTimer(TimerHandle);
```

```text
정지 상태(5초 남음)
   ↓
UnPauseTimer
   ↓
다시 5초부터 카운트 진행
```

---

### 활용 예시

#### 게임 일시정지

```cpp
GetWorldTimerManager().PauseTimer(LevelTimerHandle);
```

→ 레벨 타이머 멈춤

---

#### UI 열기 / 메뉴 진입

```cpp
GetWorldTimerManager().PauseTimer(HUDUpdateTimerHandle);
```

→ HUD 업데이트 중지

---

### 관련 함수 비교

|함수|역할|
|---|---|
|SetTimer|타이머 시작|
|ClearTimer|타이머 삭제|
|PauseTimer|타이머 일시정지|
|UnPauseTimer|타이머 재개|

---

### 필요한 Include

```cpp
#include "TimerManager.h"
```

---

### 한 줄 정리

> `PauseTimer()`는 실행 중인 타이머를 중단시키되 남은 시간을 유지하는 일시정지 함수이다.