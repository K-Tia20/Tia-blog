---
date: 2026-06-20
---

### GetWorldTimerManager()

> 현재 월드(World)의 타이머 관리자(`FTimerManager`)를 반환하는 함수

타이머를 생성, 실행, 정지, 조회할 때 사용한다.

### GetTimerManager()

> `UWorld` 객체가 가지고 있는 타이머 매니저를 가져오는 함수

---

### 사용 예시

```cpp
GetWorldTimerManager().SetTimer(
    TimerHandle,
    this,
    &AMyActor::MyFunction,
    3.0f,
    false
);
```

3초 후 `MyFunction()` 실행

---

### 자주 사용하는 기능

1.타이머 시작
```cpp
SetTimer(...)
```

2.타이머 제거
```cpp
ClearTimer(...)
```

3.남은 시간 확인
```cpp
GetTimerRemaining(...)
```

4.타이머 일시정지
```cpp
PauseTimer(...)
```

---

보통 액터 계열 클래스라면
```cpp
#include "CoreMinimal.h"
```
만 있어도 사용할 수 있습니다.

다만 `FTimerHandle`을 직접 사용할 때는
```cpp
#include "TimerManager.h"
```
를 추가하는 경우가 있습니다.

---

| 기능                     | Include                       |
| ---------------------- | ----------------------------- |
| GetWorldTimerManager() | 보통 추가 필요 없음 (`CoreMinimal.h`) |
| FTimerHandle           | `TimerManager.h` 권장           |
| FTimerManager          | TimerManager.h                |

---
### 관계

사실 아래 두 코드는 동일합니다.

```
GetWorldTimerManager().SetTimer(...);
```

↓

```
GetWorld()->GetTimerManager().SetTimer(...);
```

---
### 언제 사용?

액터 클래스라면 보통
```cpp
GetWorldTimerManager()
```
를 더 많이 사용합니다.

반면 액터가 아닌 곳에서는
```cpp
GetWorld()->GetTimerManager()
```
를 사용하기도 합니다.



---
### 한 줄 정리

> `GetWorldTimerManager()`는 현재 월드의 타이머 관리자(`FTimerManager`)를 가져와 일정 시간 후 함수 실행, 타이머 정지, 남은 시간 조회 등을 수행할 때 사용하는 함수이다.