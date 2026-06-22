
SpartaCharacter.h
```cpp
// 플레이어 캐릭터 헤더
// 이동, 카메라, 체력, 입력 처리를 담당하는 핵심 클래스

#pragma once

// UE 기본 타입(FString, UObject 등) 사용을 위한 핵심 헤더
#include "CoreMinimal.h"

// Character 기본 기능(이동, 점프 등 제공)
#include "GameFramework/Character.h"

// UHT가 생성하는 리플렉션 코드 포함 헤더 (항상 마지막 include)
#include "SpartaCharacter.generated.h"

// 전방 선언 (헤더 의존성 줄이기)
// 실제 헤더 include 없이 포인터만 사용할 때 사용
class USpringArmComponent;
class UCameraComponent;
class UWidgetComponent;

// Enhanced Input 구조체 (입력 값 전달용)
struct FInputActionValue;

// =========================
// 캐릭터 클래스
// =========================
UCLASS()

// ACharacter 기반 플레이어 캐릭터
// 이동 + 카메라 + UI + 체력 시스템 담당
class COINGAME_API ASpartaCharacter : public ACharacter
{
	GENERATED_BODY()

public:
	// 생성자 (컴포넌트 초기화 담당)
	ASpartaCharacter();

	// =========================
	// 1. 카메라 시스템
	// =========================

	// 캐릭터 뒤에 따라오는 스프링암 (카메라 거리 유지)
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Camera")
	USpringArmComponent* SpringArmComp;

	// 실제 카메라 컴포넌트
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Camera")
	UCameraComponent* CameraComp;

	// 캐릭터 머리 위 UI (체력 등 표시)
	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "UI")
	UWidgetComponent* OverheadWidget;

	// =========================
	// 2. 체력 시스템 (Blueprint 접근용)
	// =========================

	// 현재 체력 반환
	UFUNCTION(BlueprintPure, Category = "Health")
	float GetHealth() const;

	// 체력 증가/회복
	UFUNCTION(BlueprintCallable, Category = "Health")
	void AddHealth(float Amount);

protected:
	// =========================
	// 3. 체력 데이터
	// =========================

	// 최대 체력
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "health")
	float MaxHealth;

	// 현재 체력
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "health")
	float Health;

	// =========================
	// 4. 엔진 이벤트 함수
	// =========================

	// 게임 시작 시 호출
	virtual void BeginPlay() override;

	// 입력 바인딩 설정
	virtual void SetupPlayerInputComponent(class UInputComponent* PlayerInputComponent) override;

	// 데미지 처리 함수 오버라이드
	virtual float TakeDamage(
		float DamageAmount,
		struct FDamageEvent const& DamageEvent,
		AController* EventInstigator,
		AActor* DamageCauser) override;

	// =========================
	// 5. 입력 함수 (Enhanced Input)
	// =========================

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

	// =========================
	// 6. 내부 로직 함수
	// =========================

	void OnDeath();              // 사망 처리
	void UpdateOverheadHP();     // 머리 위 체력 UI 업데이트

private:
	// 기본 이동 속도
	float NormalSpeed;

	// 스프린트 배율
	float SprintSpeedMultiplier;

	// 실제 스프린트 속도
	float SprintSpeed;
};

```

SpartaCharacter.cpp
```cpp
// 플레이어 캐릭터 구현 파일
// 이동, 점프, 카메라, 스프린트, 체력, 입력 처리 전반 로직

#include "Character/SpartaCharacter.h"

// PlayerController (입력 액션 제공)
#include "SpartaPlayerController.h"

// Enhanced Input 시스템
#include "EnhancedInputComponent.h"

// 카메라 컴포넌트
#include "Camera/CameraComponent.h"

// 스프링암 (카메라 거리 유지용)
#include "GameFramework/SpringArmComponent.h"

// 캐릭터 이동 컴포넌트 (속도/이동 제어)
#include "GameFramework/CharacterMovementComponent.h"

// 기본 Actor 기능
#include "GameFramework/Actor.h"

// 월드 유틸 (GameInstance, GameState 접근 등)
#include "Kismet/GameplayStatics.h"

// GameState (게임 진행/종료 처리)
#include "Gamemode/SpartaGameState.h"

// UI 컴포넌트 (월드 공간 UI)
#include "Components/WidgetComponent.h"

// UI 텍스트 블록
#include "Components/TextBlock.h"

// =========================
// 생성자
// =========================
// 컴포넌트 초기화 + 기본 이동/체력 설정
ASpartaCharacter::ASpartaCharacter()
{
	// Tick 비활성화 (성능 최적화: 매 프레임 업데이트 필요 없음)
	PrimaryActorTick.bCanEverTick = false;

	// =========================
	// 카메라 시스템 구성
	// =========================

	// 스프링암 생성 (카메라 거리 유지)
	SpringArmComp = CreateDefaultSubobject<USpringArmComponent>(TEXT("SpringArm"));
	SpringArmComp->SetupAttachment(RootComponent);

	// 카메라 거리 설정
	SpringArmComp->TargetArmLength = 300.0f;

	// 컨트롤러 회전에 따라 카메라 회전
	SpringArmComp->bUsePawnControlRotation = true;

	// 카메라 생성
	CameraComp = CreateDefaultSubobject<UCameraComponent>(TEXT("Camera"));
	CameraComp->SetupAttachment(SpringArmComp, USpringArmComponent::SocketName);

	// 카메라는 컨트롤러 회전을 직접 사용하지 않음 (SpringArm이 담당)
	CameraComp->bUsePawnControlRotation = false;

	// =========================
	// 머리 위 UI 설정
	// =========================

	OverheadWidget = CreateDefaultSubobject<UWidgetComponent>(TEXT("OverheadWidget"));
	OverheadWidget->SetupAttachment(GetMesh());

	// UI를 월드가 아니라 화면 기준으로 표시
	OverheadWidget->SetWidgetSpace(EWidgetSpace::Screen);

	// =========================
	// 이동 속도 설정
	// =========================

	NormalSpeed = 600.0f;              // 기본 이동 속도
	SprintSpeedMultiplier = 1.7f;      // 스프린트 배율
	SprintSpeed = NormalSpeed * SprintSpeedMultiplier;

	// 실제 캐릭터 이동 속도 적용
	GetCharacterMovement()->MaxWalkSpeed = NormalSpeed;

	// =========================
	// 체력 초기화
	// =========================

	MaxHealth = 100.0f;
	Health = MaxHealth;
}

// =========================
// 게임 시작
// =========================
void ASpartaCharacter::BeginPlay()
{
	Super::BeginPlay();

	// 머리 위 HP UI 초기화
	UpdateOverheadHP();
}

// =========================
// 입력 바인딩
// =========================
void ASpartaCharacter::SetupPlayerInputComponent(UInputComponent* PlayerInputComponent)
{
	Super::SetupPlayerInputComponent(PlayerInputComponent);

	// Enhanced Input으로 캐스팅
	if (UEnhancedInputComponent* EnhancedInput = Cast<UEnhancedInputComponent>(PlayerInputComponent))
	{
		// PlayerController에서 Input Action 가져옴
		if (ASpartaPlayerController* PlayerController = Cast<ASpartaPlayerController>(GetController()))
		{
			// =========================
			// Move 입력
			// =========================
			if (PlayerController->MoveAction)
			{
				EnhancedInput->BindAction(
					PlayerController->MoveAction,
					ETriggerEvent::Triggered,
					this,
					&ASpartaCharacter::Move
				);
			}

			// =========================
			// Jump 입력
			// =========================
			if (PlayerController->JumpAction)
			{
				EnhancedInput->BindAction(
					PlayerController->JumpAction,
					ETriggerEvent::Triggered,
					this,
					&ASpartaCharacter::StartJump
				);

				EnhancedInput->BindAction(
					PlayerController->MoveAction, // (주의: 코드상 MoveAction인데 StopJump로 보임)
					ETriggerEvent::Completed,
					this,
					&ASpartaCharacter::StopJump
				);
			}

			// =========================
			// Look 입력
			// =========================
			if (PlayerController->LookAction)
			{
				EnhancedInput->BindAction(
					PlayerController->LookAction,
					ETriggerEvent::Triggered,
					this,
					&ASpartaCharacter::Look
				);
			}

			// =========================
			// Sprint 입력
			// =========================
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

// =========================
// 이동 처리
// =========================
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

// 점프 시작
void ASpartaCharacter::StartJump(const FInputActionValue& value)
{
	if (value.Get<bool>())
	{
		Jump();
	}
}

// 점프 종료
void ASpartaCharacter::StopJump(const FInputActionValue& value)
{
	if (!value.Get<bool>())
	{
		StopJumping();
	}
}

// 카메라 회전
void ASpartaCharacter::Look(const FInputActionValue& value)
{
	FVector2D LookInput = value.Get<FVector2D>();

	AddControllerYawInput(LookInput.X);
	AddControllerPitchInput(LookInput.Y);
}

// 스프린트 시작
void ASpartaCharacter::StartSprint(const FInputActionValue& value)
{
	if (GetCharacterMovement())
	{
		GetCharacterMovement()->MaxWalkSpeed = SprintSpeed;
	}
}

// 스프린트 종료
void ASpartaCharacter::StopSprint(const FInputActionValue& value)
{
	if (GetCharacterMovement())
	{
		GetCharacterMovement()->MaxWalkSpeed = NormalSpeed;
	}
}

// =========================
// 체력 시스템
// =========================

// 현재 체력 반환
float ASpartaCharacter::GetHealth() const
{
	return Health;
}

// 체력 증가
void ASpartaCharacter::AddHealth(float Amount)
{
	Health = FMath::Clamp(Health + Amount, 0.0f, MaxHealth);
	UpdateOverheadHP();
}

// =========================
// 데미지 처리
// =========================
float ASpartaCharacter::TakeDamage(
	float DamageAmount,
	struct FDamageEvent const& DamageEvent,
	AController* EventInstigator,
	AActor* DamageCauser)
{
	float ActualDamage = Super::TakeDamage(DamageAmount, DamageEvent, EventInstigator, DamageCauser);

	// 체력 감소
	Health = FMath::Clamp(Health - DamageAmount, 0.0f, MaxHealth);
	UpdateOverheadHP();

	// 사망 체크
	if (Health <= 0.0f)
	{
		OnDeath();
	}

	return ActualDamage;
}

// =========================
// 사망 처리
// =========================
void ASpartaCharacter::OnDeath()
{
	ASpartaGameState* SpartaGameState =
		GetWorld() ? GetWorld()->GetGameState<ASpartaGameState>() : nullptr;

	if (SpartaGameState)
	{
		SpartaGameState->OnGameOver();
	}
}

// =========================
// 머리 위 HP UI 갱신
// =========================
void ASpartaCharacter::UpdateOverheadHP()
{
	if (!OverheadWidget) return;

	UUserWidget* OverheadWidgetInstance =
		OverheadWidget->GetUserWidgetObject();

	if (!OverheadWidgetInstance) return;

	if (UTextBlock* HPText =
		Cast<UTextBlock>(OverheadWidgetInstance->GetWidgetFromName(TEXT("OverHeadHP"))))
	{
		HPText->SetText(
			FText::FromString(
				FString::Printf(TEXT("%.0f / %.0f"), Health, MaxHealth)
			)
		);
	}
}
```