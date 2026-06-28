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
#include "CoinItem.h"  
#include "SmallCoinItem.generated.h"  
  
UCLASS()  
class COINGAME_API ASmallCoinItem : public ACoinItem  
{  
    GENERATED_BODY()  
  
public:  
    ASmallCoinItem();  
  
    virtual void ActivateItem(AActor* Activator) override;  
    virtual void Tick(float DeltaTime) override;  
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Control")  
    float RotationSpeed;  
};

```

.cpp
```cpp

#include "SmallCoinItem.h"  
  
ASmallCoinItem::ASmallCoinItem()  
{  
    PointValue = 10;  
    ItemType = "SmallCoin";  
    //회전속도추가함  
    RotationSpeed = 90.0f;  
}  
  
void ASmallCoinItem::ActivateItem(AActor* Activator)  
{  
    // 부모의 기본 점수 획득 로직 사용  
    Super::ActivateItem(Activator);  
  
    // 스몰 코인만의 별도 동작은 여기에 추가  
}  
  
//회전기능추가함  
void ASmallCoinItem::Tick(float DeltaTime)  
{  
    Super::Tick(DeltaTime);  
  
    if (!FMath::IsNearlyZero(RotationSpeed))  
    {
	    AddActorLocalRotation(FRotator(0.0f, RotationSpeed * DeltaTime, 0.0f));  
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
