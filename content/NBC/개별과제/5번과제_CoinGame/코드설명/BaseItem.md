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
#include "GameFramework/Actor.h"  
#include "ItemInterface.h"  
#include "BaseItem.generated.h"  
  
class USphereComponent;  
  
UCLASS()  
class COINGAME_API ABaseItem : public AActor, public IItemInterface  
{  
    GENERATED_BODY()  
    public:   
    ABaseItem();  
  
protected:  
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Item")  
    FName ItemType;
    
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Item|Component")  
    USceneComponent* Scene;
    
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Item|Component")  
    USphereComponent* Collision;
    
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Item|Component")  
    UStaticMeshComponent* StaticMesh;
    
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Item|Effects")  
    UParticleSystem* PickupParticle;
    
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Item|Effects")  
    USoundBase* PickupSound;
    
    virtual void OnItemOverlap(  
          UPrimitiveComponent* OverlappedComp,  
          AActor* OtherActor,  
          UPrimitiveComponent* OtherComp,  
          int32 OtherBodyIndex,  
          bool bFromSweep,  
          const FHitResult& SweepResult) override;
          
    virtual void OnItemEndOverlap(  
          UPrimitiveComponent* OverlappedComp,  
          AActor* OtherActor,  
          UPrimitiveComponent* OtherComp,  
          int32 OtherBodyIndex) override;
          
    virtual void ActivateItem(AActor* Activator) override;
    
    virtual FName GetItemType() const override;
    
    void DestroyItem();
    
};

```

.cpp
```cpp

#include "BaseItem.h"  
#include "Components/SphereComponent.h"  
#include "Kismet/GameplayStatics.h"  
#include "Particles/ParticleSystemComponent.h"  
  
ABaseItem::ABaseItem()  
{  
	PrimaryActorTick.bCanEverTick = true;  
    
    Scene = CreateDefaultSubobject<USceneComponent>(TEXT("Scene"));  
    SetRootComponent(Scene);  
    
    Collision = CreateDefaultSubobject<USphereComponent>(TEXT("Collision"));  
    Collision->SetCollisionProfileName(TEXT("OverlapAllDynamic"));  
    Collision->SetupAttachment(Scene);  
    
	    StaticMesh = CreateDefaultSubobject<UStaticMeshComponent>(TEXT("StaticMesh"));  
	    StaticMesh->SetupAttachment(Collision);  

	Collision->OnComponentBeginOverlap.AddDynamic(this, &ABaseItem::OnItemOverlap);  
	Collision->OnComponentEndOverlap.AddDynamic(this, &ABaseItem::OnItemEndOverlap);  
}  
  
void ABaseItem::OnItemOverlap(  
    UPrimitiveComponent* OverlappedComp,  
    AActor* OtherActor,  
    UPrimitiveComponent* OtherComp,  
    int32 OtherBodyIndex,  
    bool bFromSweep,  
    const FHitResult& SweepResult)
{  
       if (OtherActor && OtherActor->ActorHasTag("Player"))  
       {
	       ActivateItem(OtherActor);  
       }
}  
  
void ABaseItem::OnItemEndOverlap(  
    UPrimitiveComponent* OverlappedComp,  
    AActor* OtherActor,  
    UPrimitiveComponent* OtherComp,  
    int32 OtherBodyIndex)  
{  
}  
  
void ABaseItem::ActivateItem(AActor* Activator)  
{  
    UParticleSystemComponent* Particle = nullptr;  
      
    if (PickupParticle)  
    {        
		Particle = UGameplayStatics::SpawnEmitterAtLocation(  
		    GetWorld(),  
		    PickupParticle,  
	        GetActorLocation(),  
	        GetActorRotation(),  
	        true  
        );  
    }  
    if (PickupSound)  
    {
	    UGameplayStatics::PlaySoundAtLocation(  
		    GetWorld(),  
		    PickupSound,  
		    GetActorLocation()  
		);    
	}  
    if (Particle)  
    {
	    FTimerHandle DestroyParticleTimerHandle;  
	    
	    GetWorld()->GetTimerManager().SetTimer(  
	        DestroyParticleTimerHandle,
	        [Particle]()  
	        {  
			    Particle->DestroyComponent();  
	        },
		    2.0f,  
	        false  
        );  
    }
}

FName ABaseItem::GetItemType() const
{
	return ItemType;  
}
 
void ABaseItem::DestroyItem()  
{
	Destroy();  
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
