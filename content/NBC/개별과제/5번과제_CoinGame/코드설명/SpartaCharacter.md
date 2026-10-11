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
#include "GameFramework/Character.h"  
#include "SpartaCharacter.generated.h"  
  
class USpringArmComponent;  
class UCameraComponent;  
class UWidgetComponent;  
struct FInputActionValue;  
  
UCLASS()  
class COINGAME_API ASpartaCharacter : public ACharacter  
{  
    GENERATED_BODY()  
  
public:  
    ASpartaCharacter();  
  
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Camera")  
    USpringArmComponent* SpringArmComp;
     
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Camera")  
    UCameraComponent* CameraComp;
    
    UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "UI")  
    UWidgetComponent* OverheadWidget;
    
    UFUNCTION(BlueprintPure, Category = "Health")  
    float GetHealth() const;
    
    UFUNCTION(BlueprintCallable, Category = "Health")  
    void AddHealth(float Amount);
    
protected:  
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "health")  
    float MaxHealth;
    
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "health")  
    float Health;
    
	virtual void BeginPlay() override;
    
    virtual void SetupPlayerInputComponent(class UInputComponent* PlayerInputComponent) override;
    
	virtual float TakeDamage(
	    float DamageAmount,
	    struct FDamageEvent const& DamageEvent,  
	    AController* EventInstigator,  
	    AActor* DamageCauser) override;  
  
    UFUNCTION()  
    void Move(const FInputActionValue& value);
    
    UFUNCTION()  
    void StartJump(const FInputActionValue& value);
    
    UFUNCTION()  
    void StopJump(const FInputActionValue& value);
    
    UFUNCTION()  
    void Look(const FInputActionValue& value);
    
    UFUNCTION()  
    void StartSprint(const FInputActionValue& value);
    
    UFUNCTION()  
    void StopSprint(const FInputActionValue& value);
  
    void OnDeath();  
    void UpdateOverheadHP();  
  
private:  
    float NormalSpeed;  
    float SprintSpeedMultiplier;  
    float SprintSpeed;  
};

```

.cpp
```cpp

#include "SpartaCharacter.h"  
#include "SpartaPlayerController.h"  
#include "SpartaGameState.h"  
#include "EnhancedInputComponent.h"  
#include "Camera/CameraComponent.h"  
#include "GameFramework/SpringArmComponent.h"  
#include "GameFramework/CharacterMovementComponent.h"  
#include "Components/WidgetComponent.h"  
#include "Components/TextBlock.h"  
  
ASpartaCharacter::ASpartaCharacter()  
{  
	PrimaryActorTick.bCanEverTick = false;  
	SpringArmComp = CreateDefaultSubobject<USpringArmComponent>(TEXT("SpringArm"));  
	
	SpringArmComp->SetupAttachment(RootComponent);  
    SpringArmComp->TargetArmLength = 300.0f;  
    SpringArmComp->bUsePawnControlRotation = true;  
    
    CameraComp = CreateDefaultSubobject<UCameraComponent>(TEXT("Camera"));  
    CameraComp->SetupAttachment(SpringArmComp, USpringArmComponent::SocketName);  
    CameraComp->bUsePawnControlRotation = false;  
    
    OverheadWidget = CreateDefaultSubobject<UWidgetComponent>(TEXT("OverheadWidget"));  
    OverheadWidget->SetupAttachment(GetMesh());  
	OverheadWidget->SetWidgetSpace(EWidgetSpace::Screen);  
    
    NormalSpeed = 600.0f;  
    SprintSpeedMultiplier = 1.7f;
    SprintSpeed = NormalSpeed * SprintSpeedMultiplier;  
    
    GetCharacterMovement()->MaxWalkSpeed = NormalSpeed;  
    
    MaxHealth = 100.0f;  
	Health = MaxHealth;  
}  
  
void ASpartaCharacter::BeginPlay()  
{  
	Super::BeginPlay();  
	
	UpdateOverheadHP();  
}  
  
void ASpartaCharacter::SetupPlayerInputComponent(UInputComponent* PlayerInputComponent)  
{  
	Super::SetupPlayerInputComponent(PlayerInputComponent);  
    
	if (UEnhancedInputComponent* EnhancedInput = Cast<UEnhancedInputComponent>(PlayerInputComponent))  
    {
	    if (ASpartaPlayerController* PlayerController = Cast<ASpartaPlayerController>(GetController()))  
        {
	        if (PlayerController->MoveAction)  
	        {
		        EnhancedInput->BindAction(  
	                PlayerController->MoveAction,  
	                ETriggerEvent::Triggered,  
                    this,  
                    &ASpartaCharacter::Move  
                );  
            }
            if (PlayerController->JumpAction)  
            {
	            EnhancedInput->BindAction(  
			        PlayerController->JumpAction,  
                    ETriggerEvent::Triggered,  
                    this,  
                    &ASpartaCharacter::StartJump  
                );  
		        EnhancedInput->BindAction(  
                    PlayerController->MoveAction,  
                    ETriggerEvent::Completed,  
                    this,  
                    &ASpartaCharacter::StopJump  
                );  
            }
            if (PlayerController->LookAction)  
            {
				EnhancedInput->BindAction(  
	                PlayerController->LookAction,  
	                ETriggerEvent::Triggered,  
	                this,  
	                &ASpartaCharacter::Look  
                );
            }
            if (PlayerController->SprintAction)  
            {
	            EnhancedInput->BindAction(  
	                PlayerController->SprintAction,  
                    ETriggerEvent::Triggered,  
                    this,  
                    &ASpartaCharacter::StartSprint  
                );  
		        EnhancedInput->BindAction(  
                    PlayerController->SprintAction,  
                    ETriggerEvent::Completed,  
                    this,  
	                &ASpartaCharacter::StopSprint  
                );  
            }
	    }
	}
}  
  
void ASpartaCharacter::Move(const FInputActionValue& value)  
{
	if (!Controller) return;  
    
    const FVector2D MoveInput = value.Get<FVector2D>();  
    
    if (!FMath::IsNearlyZero(MoveInput.X))  
    {
	    AddMovementInput(GetActorForwardVector(), MoveInput.X);  
    }
    if (!FMath::IsNearlyZero(MoveInput.Y))  
    {
	    AddMovementInput(GetActorRightVector(), MoveInput.Y);  
    }
}  
  
void ASpartaCharacter::StartJump(const FInputActionValue& value)  
{
	if (value.Get<bool>())
	{
		Jump();  
    }
}  
  
void ASpartaCharacter::StopJump(const FInputActionValue& value)  
{
	if (!value.Get<bool>())  
	{
		StopJumping();  
    }
}  
  
void ASpartaCharacter::Look(const FInputActionValue& value)  
{
	FVector2D LookInput = value.Get<FVector2D>();  
    AddControllerYawInput(LookInput.X);
    AddControllerPitchInput(LookInput.Y);  
}  
  
void ASpartaCharacter::StartSprint(const FInputActionValue& value)  
{
	if (GetCharacterMovement())
	{
		GetCharacterMovement()->MaxWalkSpeed = SprintSpeed;  
    }
}  
  
void ASpartaCharacter::StopSprint(const FInputActionValue& value)  
{
	if (GetCharacterMovement())
	{
		GetCharacterMovement()->MaxWalkSpeed = NormalSpeed;  
    }
}  
  
float ASpartaCharacter::GetHealth() const  
{  
	return Health;  
}  
  
void ASpartaCharacter::AddHealth(float Amount)  
{
	Health = FMath::Clamp(Health + Amount, 0.0f, MaxHealth);  
	UpdateOverheadHP();  
}  
  
float ASpartaCharacter::TakeDamage(  
    float DamageAmount,  
    struct FDamageEvent const& DamageEvent,  
    AController* EventInstigator,  
    AActor* DamageCauser)  
{
	float ActualDamage = Super::TakeDamage(DamageAmount, DamageEvent, EventInstigator, DamageCauser);	
	Health = FMath::Clamp(Health - DamageAmount, 0.0f, MaxHealth);  
	UpdateOverheadHP();  
	if (Health <= 0.0f)  
	{
		OnDeath();  
	}
	return ActualDamage;  
}
  
void ASpartaCharacter::OnDeath()  
{  
	ASpartaGameState* SpartaGameState = GetWorld() ? GetWorld()->GetGameState<ASpartaGameState>() : nullptr;
	if (SpartaGameState)  
	{
		SpartaGameState->OnGameOver();  
    }
}  
  
void ASpartaCharacter::UpdateOverheadHP()  
{
	if (!OverheadWidget) return;
	UUserWidget* OverheadWidgetInstance = OverheadWidget->GetUserWidgetObject();  
	
	if (!OverheadWidgetInstance) return;  
    
    if (UTextBlock* HPText = Cast<UTextBlock>(OverheadWidgetInstance->GetWidgetFromName(TEXT("OverHeadHP"))))  
    {
	    HPText->SetText(FText::FromString(FString::Printf(TEXT("%.0f / %.0f"), Health, MaxHealth)));  
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
