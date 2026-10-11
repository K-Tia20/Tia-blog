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
#include "ItemSpawnRow.h"  
#include "GameFramework/Actor.h"  
#include "SpawnVolume.generated.h"  
  
class UBoxComponent;  
  
UCLASS()  
class COINGAME_API ASpawnVolume : public AActor  
{  
    GENERATED_BODY()  
    public:   
    ASpawnVolume();  
  
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Spawning")  
    USceneComponent* Scene;  
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Spawning")  
    UBoxComponent* SpawningBox;  
    UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "Spawning")  
    UDataTable* ItemDataTable;  
  
    UFUNCTION(BlueprintCallable, Category = "Spawning")  
    AActor* SpawnRandomItem(); // 리턴 형식을 AActor* 로 변경  
  
    FItemSpawnRow* GetRandomItem() const;  
    AActor* SpawnItem(TSubclassOf<AActor> ItemClass);  
    FVector GetRandomPointInVolume() const;  
};

```

.cpp
```cpp

#include "SpawnVolume.h"  
#include "Components/BoxComponent.h"  
  
ASpawnVolume::ASpawnVolume()  
{  
    PrimaryActorTick.bCanEverTick = false;  
      
    Scene = CreateDefaultSubobject<USceneComponent>(TEXT("Scene"));  
    SetRootComponent(Scene);  
    
    SpawningBox = CreateDefaultSubobject<UBoxComponent>(TEXT("SpawningBox"));  
    SpawningBox->SetupAttachment(Scene);  
    
    ItemDataTable = nullptr;  
}  
  
AActor* ASpawnVolume::SpawnRandomItem()  
{  
    if (FItemSpawnRow* SelectedRow = GetRandomItem())  
    {
	    if (UClass* ActualClass = SelectedRow->ItemClass.Get())  
	    {            
		    // 여기서 SpawnItem()을 호출하고, 스폰된 AActor 포인터를 리턴  
	        return SpawnItem(ActualClass);  
        }
    }
    return nullptr;  
}  
  
FItemSpawnRow* ASpawnVolume::GetRandomItem() const  
{  
    if (!ItemDataTable) return nullptr;  
  
    TArray<FItemSpawnRow*> AllRows;  
    static const FString ContextString(TEXT("ItemSpawnContext"));  
    ItemDataTable->GetAllRows(ContextString, AllRows);
    
    if (AllRows.IsEmpty()) return nullptr;
    
    float TotalChance = 0.0f;  
    for (const FItemSpawnRow* Row : AllRows)  
    {
	    if (Row)  
        {
	        TotalChance += Row->SpawnChance;  
        }
    }  
    const float RandValue = FMath::FRandRange(0.0f, TotalChance);  
    float AccumulateChance = 0.0f;
    
    for (FItemSpawnRow* Row : AllRows)  
    {
	    AccumulateChance += Row->SpawnChance;  
	    if (RandValue <= AccumulateChance)
	    {
		    return Row;  
        }
    }  
    return nullptr;  
}  
  
FVector ASpawnVolume::GetRandomPointInVolume() const  
{  
    FVector BoxExtent = SpawningBox->GetScaledBoxExtent();  
    FVector BoxOrigin = SpawningBox->GetComponentLocation();  
  
    return BoxOrigin + FVector(  
        FMath::FRandRange(-BoxExtent.X, BoxExtent.X),  
        FMath::FRandRange(-BoxExtent.Y, BoxExtent.Y),  
        FMath::FRandRange(-BoxExtent.Z, BoxExtent.Z)  
    );  
}  
  
AActor* ASpawnVolume::SpawnItem(TSubclassOf<AActor> ItemClass)  
{  
    if (!ItemClass) return nullptr;  
    // SpawnActor가 성공하면 스폰된 액터의 포인터가 반환됨  
    AActor* SpawnedActor = GetWorld()->SpawnActor<AActor>(  
	    ItemClass,
	    GetRandomPointInVolume(),  
        FRotator::ZeroRotator  
    );  
	return SpawnedActor;  
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
