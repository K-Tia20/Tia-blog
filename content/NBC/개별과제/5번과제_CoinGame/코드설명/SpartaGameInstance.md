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
#include "Engine/GameInstance.h"  
#include "SpartaGameInstance.generated.h"  
  
UCLASS()  
class COINGAME_API USpartaGameInstance : public UGameInstance  
{
    GENERATED_BODY()  

public:  
    USpartaGameInstance();  
    // 게임 전체 누적 점수  
    UPROPERTY(VisibleAnywhere, BlueprintReadWrite, Category = "GameData")  
    int32 TotalScore;  
    // 현재 레벨 인덱스 (GameState에서도 관리할 수 있지만, 맵 전환 후에도 살리고 싶다면 GameInstance에 복제할 수 있음)  
    UPROPERTY(VisibleAnywhere, BlueprintReadWrite, Category = "GameData")  
    int32 CurrentLevelIndex;  
    UFUNCTION(BlueprintCallable, Category = "GameData")  
    void AddToScore(int32 Amount);
    
};

```

.cpp
```cpp

#include "SpartaGameInstance.h"  
  
USpartaGameInstance::USpartaGameInstance()  
{  
    TotalScore = 0;  
    CurrentLevelIndex = 0;  
}  
  
void USpartaGameInstance::AddToScore(int32 Amount)  
{  
    TotalScore += Amount;  
	UE_LOG(LogTemp, Warning, TEXT("Total Score Updated: %d"), TotalScore);  
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
