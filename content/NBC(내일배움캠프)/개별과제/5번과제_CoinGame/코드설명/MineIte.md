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
#include "MineItem.generated.h"  
  
UCLASS()  
class COINGAME_API AMineItem : public ABaseItem  
{  
    GENERATED_BODY()  
  
public:  
    AMineItem();
    
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Item|Component")
    USphereComponent* ExplosionCollision;
     
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Item|Effects")
    UParticleSystem* ExplosionParticle;
    
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Item|Effects")
    USoundBase* ExplosionSound;
    
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Item")
    float ExplosionDelay;
    
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Item")
    float ExplosionRadius;
    
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Item")
    int32 ExplosionDamage;
    
    bool bHasExploded;
    
    FTimerHandle ExplosionTimerHandle;
    
    virtual void ActivateItem(AActor* Activator) override;
    
    void Explode();
    
};

```

.cpp
```cpp

#include "MineItem.h"  
#include "Components/SphereComponent.h"  
#include "Kismet/GameplayStatics.h"  
#include "Particles/ParticleSystemComponent.h"  
  
AMineItem::AMineItem()  
{  
    ExplosionDelay = 5.0f;  
    ExplosionRadius = 300.0f;  
    ExplosionDamage = 30.0f;  
    ItemType = "Mine";  
    bHasExploded = false;
    
    ExplosionCollision = CreateDefaultSubobject<USphereComponent>(TEXT("ExplosionCollision"));  
    ExplosionCollision->InitSphereRadius(ExplosionRadius);  
    ExplosionCollision->SetCollisionProfileName(TEXT("OverlapAllDynamic"));  
    ExplosionCollision->SetupAttachment(Scene);  
}  
  
void AMineItem::ActivateItem(AActor* Activator)  
{  
    if (bHasExploded) return;  
    Super::ActivateItem(Activator);  
    GetWorld()->GetTimerManager().SetTimer(  
	    ExplosionTimerHandle,  
	    this,  
	    &AMineItem::Explode,  
	    ExplosionDelay,  
		false  
    );
    bHasExploded = true;  
}  
  
void AMineItem::Explode()  
{  
    UParticleSystemComponent* Particle = nullptr;  
    if (ExplosionParticle)  
	{
		Particle = UGameplayStatics::SpawnEmitterAtLocation(  
            GetWorld(),  
            ExplosionParticle,  
            GetActorLocation(),  
	        GetActorRotation(),  
	        false  
       );  
    }    
    if (ExplosionSound)  
    {
	    UGameplayStatics::PlaySoundAtLocation(  
		    GetWorld(),  
             ExplosionSound,  
             GetActorLocation()  
       );    
    }    
    TArray<AActor*> OverlappingActors;  
    
    ExplosionCollision->GetOverlappingActors(OverlappingActors);  
    
    for (AActor* Actor : OverlappingActors)  
    {    
	    if (Actor && Actor->ActorHasTag("Player"))  
	    {
			UGameplayStatics::ApplyDamage(  
	            Actor,
	            ExplosionDamage,
	            nullptr,
                this,
                UDamageType::StaticClass()
	        );
		}
	}
	DestroyItem();

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
