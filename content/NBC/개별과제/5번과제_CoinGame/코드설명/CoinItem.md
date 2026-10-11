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
#include "BaseItem.h"  
#include "CoinItem.generated.h"  
  
UCLASS()  
class COINGAME_API ACoinItem : public ABaseItem  
{  
    GENERATED_BODY()  
  
public:  
    ACoinItem();  
  
protected:  
    // 코인 획득 시 플레이어에게 줄 점수  
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Item")  
    int32 PointValue;  
  
    // 부모 클래스에서 상속받은 ActivateItem 함수를 오버라이드  
    virtual void ActivateItem(AActor* Activator) override;  
};

```

.cpp
```cpp

#include "CoinItem.h"  
#include "Engine/World.h"  
#include "SpartaGameState.h"  
  
ACoinItem::ACoinItem()  
{  
    PointValue = 0;  
    ItemType = "DefaultCoin";  
}  
  
void ACoinItem::ActivateItem(AActor* Activator)  
{  
    if (Activator && Activator->ActorHasTag("Player"))  
    {
	    if (UWorld* World = GetWorld())  
	    {
		    if (ASpartaGameState* GameState = World->GetGameState<ASpartaGameState>())  
	        {
		        GameState->AddScore(PointValue);
			    GameState->OnCoinCollected();  
		    }
		}
		DestroyItem();  
    }
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
