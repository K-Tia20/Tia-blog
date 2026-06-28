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
#include "MovingActor.generated.h"  
  
UCLASS()  
class COINGAME_API AMovingActor : public AActor  
{  
    GENERATED_BODY()

public:   
    AMovingActor();  
  
protected:  
    virtual void BeginPlay() override;
    
    virtual void Tick(float DeltaTime) override;
    
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Components")  
    USceneComponent* SceneRoot;
    
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Components")  
    UStaticMeshComponent* StaticMeshComp;
    
public:
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Control")  
    float MoveSpeed;
    
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Control")  
    float MaxRange;
    
private:  
    FVector StartLocation;
    int32 MoveDirection;
    
};

```

.cpp
```cpp

#include "MovingActor.h"  
  
AMovingActor::AMovingActor()  
{  
    PrimaryActorTick.bCanEverTick = true;  
  
    SceneRoot = CreateDefaultSubobject<USceneComponent>(TEXT("SceneRoot"));  
    SetRootComponent(SceneRoot);  
  
    StaticMeshComp = CreateDefaultSubobject<UStaticMeshComponent>(TEXT("StaticMesh"));  
    StaticMeshComp->SetupAttachment(SceneRoot);  
    MoveSpeed = 200.0f;  
    MaxRange = 500.0f;  
    MoveDirection = 1;  
}  
  
void AMovingActor::BeginPlay()  
{  
    Super::BeginPlay();  
    StartLocation = GetActorLocation();  
}  
  
void AMovingActor::Tick(float DeltaTime)  
{  
    Super::Tick(DeltaTime);  
  
    float FrameMovement = MoveSpeed * MoveDirection * DeltaTime;
      
    FVector CurrentLocation = GetActorLocation();
      
    FVector MovementVector = FVector(FrameMovement, 0.0f, 0.0f);
      
    FVector NextLocation = CurrentLocation + MovementVector;
      
    SetActorLocation(NextLocation);
      
    float DistanceMoved = FVector::Dist(StartLocation, NextLocation);  
    
    if (DistanceMoved >= MaxRange)  
    {
	    MoveDirection *= -1;  
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
