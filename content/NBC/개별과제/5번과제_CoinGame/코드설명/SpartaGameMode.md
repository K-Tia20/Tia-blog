---
date: 2026-06-25
date&time: 2026-06-25T22:38:00
---
---
### 작성 코드

.h
```cpp

#pragma once  
  
#include "CoreMinimal.h"  
#include "GameFramework/GameMode.h"  
#include "SpartaGameMode.generated.h"  
  
UCLASS()  
class COINGAME_API ASpartaGameMode : public AGameMode  
{  
    GENERATED_BODY()  
  
public:  
    ASpartaGameMode();  
};

```

.cpp
```cpp

#include "SpartaGameMode.h"  
#include "SpartaCharacter.h"  
#include "SpartaPlayerController.h"  
#include "SpartaGameState.h"  
  
ASpartaGameMode::ASpartaGameMode()  
{  
    PlayerControllerClass = ASpartaPlayerController::StaticClass();  
    DefaultPawnClass = ASpartaCharacter ::StaticClass();  
    // 우리가 만든 GameState로 설정  
    GameStateClass = ASpartaGameState::StaticClass();  
}

```

---
### 자세한 설명

.h
```cpp



```

.cpp
```cpp



```

---
