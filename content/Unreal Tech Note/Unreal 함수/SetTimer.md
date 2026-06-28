---
date: 2026-06-20
---

### SetTimer()

> `FTimerManager`에 타이머를 등록하여 일정 시간이 지난 후 특정 함수를 실행하는 함수

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

### 매개변수

```cpp
SetTimer(
    TimerHandle,
    this,
    &AMyActor::MyFunction,
    3.0f,
    false
);
```

| 매개변수                  | 설명          |
| --------------------- | ----------- |
| TimerHandle           | 타이머를 관리할 핸들 |
| this                  | 함수를 호출할 객체  |
| &AMyActor::MyFunction | 실행할 함수      |
| 3.0f                  | 대기 시간(초)    |
| false                 | 반복 여부       |
#### `SetTimer` 함수의 5대 매개변수
1. **`FTimerHandle` (타이머 핸들)**
    - **개념**: 실행할 타이머를 가리키는 **고유 식별자(영수증)**입니다.
    - **용도**: 이 식별자를 보관해 두고 있어야, 나중에 타이머가 끝나기 전에 취소(`ClearTimer`)하거나 일시 정지할 수 있습니다.
2. **`this` (객체 주소)**
    - **개념**: 호출할 멤버 함수가 **어떤 객체(인스턴스) 내부에서 실행될지** 지정합니다. 여기서는 지뢰 자기 자신(`this`)이 실행 주체가 됩니다.
3. **`&AMineItem::Explode` (실행할 함수 주소)**
    - **개념**: 딜레이가 만료되었을 때 **실제로 호출할 함수의 메모리 주소**를 가리킵니다.
    - **제약**: 이 방식으로 묶을 함수는 매개변수가 없고, 반환 타입이 `void`인 함수여야 합니다.
4. **`ExplosionDelay` (대기 시간)**
    - **개념**: 몇 초 후에 함수를 실행할지 지정하는 `float` 타입의 시간 단위 값입니다.
5. **`bLoop` (반복 여부)**
    - **개념**: `true`이면 지정한 시간이 지날 때마다 함수를 무한 반복해서 호출하고, `false`이면 딱 한 번만 실행하고 타이머가 종료됩니다.
    - _예시: 지뢰 폭발은 한 번만 일어나야 하므로 `false`를 지정합니다._
    
---

### 반복 실행

```cpp
GetWorldTimerManager().SetTimer(
    TimerHandle,
    this,
    &AMyActor::UpdateHUD,
    0.1f,
    true
);
```

```text
0.1초
↓
함수 실행
↓
0.1초
↓
함수 실행
↓
반복
```

---

### 필요한 Include

```cpp
#include "TimerManager.h"
```

(`FTimerHandle`, `FTimerManager` 사용 시 권장)

```cpp
#include "GameFramework/GameState.h"
```
가 있으면 
`GameState.h`가 간접적으로 `TimerManager.h`를 포함하고 있어서 컴파일 되지만

```cpp
#include "TimerManager.h"
```
직접 추가하는 것이 권장된다.

---

### 한 줄 정리

> `SetTimer()`는 일정 시간이 지난 뒤 특정 함수를 실행하거나, 일정 주기로 반복 실행하도록 타이머를 등록하는 함수이다.