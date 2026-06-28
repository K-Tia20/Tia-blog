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
#include "HealingItem.generated.h"  
  
UCLASS()  
class COINGAME_API AHealingItem : public ABaseItem  
{  
    GENERATED_BODY()  
  
public:  
    AHealingItem();  
  
protected:  
    // 회복량  
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Healing")  
    int32 HealAmount;  
  
    virtual void ActivateItem(AActor* Activator) override;  
};

```

.cpp
```cpp

#include "HealingItem.h"  
#include "SpartaCharacter.h"  
  
AHealingItem::AHealingItem()  
{  
	HealAmount = 20.0f;  
    ItemType = "Healing";  
}  
  
void AHealingItem::ActivateItem(AActor* Activator)  
{  
    if (Activator && Activator->ActorHasTag("Player"))  
	{
		if (ASpartaCharacter* PlayerCharacter = Cast<ASpartaCharacter>(Activator))
		{   
			// 캐릭터의 체력을 회복  
			PlayerCharacter->AddHealth(HealAmount);  
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
