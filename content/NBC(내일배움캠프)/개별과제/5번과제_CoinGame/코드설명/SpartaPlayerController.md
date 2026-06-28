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
#include "GameFramework/PlayerController.h"  
#include "SpartaPlayerController.generated.h"  
  
class UInputMappingContext;  
class UInputAction;  
  
UCLASS()  
class COINGAME_API ASpartaPlayerController : public APlayerController  
{  
    GENERATED_BODY()  
  
public:  
    ASpartaPlayerController();  
  
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Input")  
    UInputMappingContext* InputMappingContext;  
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Input")  
    UInputAction* MoveAction;  
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Input")  
    UInputAction* JumpAction;  
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Input")  
    UInputAction* LookAction;  
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Input")  
    UInputAction* SprintAction;  
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "HUD")  
    TSubclassOf<UUserWidget> HUDWidgetClass;  
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "HUD")  
    UUserWidget* HUDWidgetInstance;  
    // 메뉴 UI    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Menu")  
    TSubclassOf<UUserWidget> MainMenuWidgetClass;  
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Menu")  
    UUserWidget* MainMenuWidgetInstance;  
  
    UFUNCTION(BlueprintPure, Category = "HUD")  
    UUserWidget* GetHUDWidget() const;  
    // HUD 표시  
    UFUNCTION(BlueprintCallable, Category = "HUD")  
    void ShowGameHUD();  
    // 메인 메뉴 표시  
    UFUNCTION(BlueprintCallable, Category = "Menu")  
    void ShowMainMenu(bool bIsRestart);  
    // 게임 시작  
    UFUNCTION(BlueprintCallable, Category = "Menu")  
    void StartGame();  
  
protected:  
    virtual void BeginPlay() override;  
};

```

.cpp
```cpp

#include "SpartaPlayerController.h"  
#include "SpartaGameState.h"  
#include "SpartaGameInstance.h"  
#include "EnhancedInputSubsystems.h"  
#include "Blueprint/UserWidget.h"  
#include "Kismet/GameplayStatics.h"  
#include "Components/TextBlock.h"  
  
ASpartaPlayerController::ASpartaPlayerController()  
    : InputMappingContext(nullptr),  
    MoveAction(nullptr),  
    JumpAction(nullptr),  
    LookAction(nullptr),  
    SprintAction(nullptr),  
    HUDWidgetClass(nullptr),  
    HUDWidgetInstance(nullptr),  
    MainMenuWidgetClass(nullptr),  
    MainMenuWidgetInstance(nullptr)  
{  
}  
  
void ASpartaPlayerController::BeginPlay()  
{  
    Super::BeginPlay();  
  
    if (ULocalPlayer* LocalPlayer = GetLocalPlayer())  
    {
	    if (UEnhancedInputLocalPlayerSubsystem* Subsystem = LocalPlayer->GetSubsystem<UEnhancedInputLocalPlayerSubsystem>())  
		{
			if (InputMappingContext)  
		    {
				Subsystem->AddMappingContext(InputMappingContext, 0);  
		    }
		}
	}  
	FString CurrentMapName = GetWorld()->GetMapName();  
	if (CurrentMapName.Contains("MenuLevel"))  
	{
		ShowMainMenu(false);  
	}
}  
  
UUserWidget* ASpartaPlayerController::GetHUDWidget() const  
{  
	return HUDWidgetInstance;  
}  
  
void ASpartaPlayerController::ShowMainMenu(bool bIsRestart)  
{  
	if (HUDWidgetInstance)  
    {
	    HUDWidgetInstance->RemoveFromParent();  
	    HUDWidgetInstance = nullptr;  
    }  
    if (MainMenuWidgetInstance)  
    {
	    MainMenuWidgetInstance->RemoveFromParent();  
	    MainMenuWidgetInstance = nullptr;  
    }
    if (MainMenuWidgetClass)  
    {
	    MainMenuWidgetInstance = CreateWidget<UUserWidget>(this, MainMenuWidgetClass);  
	    if (MainMenuWidgetInstance)  
	    {
		    MainMenuWidgetInstance->AddToViewport();
	        bShowMouseCursor = true;  
	        SetInputMode(FInputModeUIOnly());
	    }  
	    if (UTextBlock* ButtonText = Cast<UTextBlock>(MainMenuWidgetInstance->GetWidgetFromName(TEXT("StartButtonText"))))  
	    {
		    if (bIsRestart)  
	        {
		        ButtonText->SetText(FText::FromString(TEXT("Restart")));  
	        }
	        else  
	        {  
		        ButtonText->SetText(FText::FromString(TEXT("Start")));  
	        }
	    }
	    if (UTextBlock* EndBtnText = Cast<UTextBlock>(MainMenuWidgetInstance->GetWidgetFromName(TEXT("endButtonText"))))  
		{
			if (bIsRestart)  
		    {
			    // 게임 오버 상태일 때  
			    EndBtnText->SetText(FText::FromString(TEXT("Menu")));  
		    }
		    else
		    {  
			    // 처음 시작 메뉴일 때  
			    EndBtnText->SetText(FText::FromString(TEXT("End")));  
		    }
		}  
		if (bIsRestart)  
		{
			UFunction* PlayAnimFunc = MainMenuWidgetInstance->FindFunction(FName("PlayGameOverAnim"));  
		    if (PlayAnimFunc)  
		    {
			    MainMenuWidgetInstance->ProcessEvent(PlayAnimFunc, nullptr);  
		    }
		    if (UTextBlock* TotalScoreText = Cast<UTextBlock>(MainMenuWidgetInstance->GetWidgetFromName("TotalScoreText")))  
		    {
			    if (USpartaGameInstance* SpartaGameInstance = Cast<USpartaGameInstance>(UGameplayStatics::GetGameInstance(this)))  
				{
				    TotalScoreText->SetText(FText::FromString(  
			        FString::Printf(TEXT("Total Score: %d"), SpartaGameInstance->TotalScore)));
			    }
			}
		}    
	}
}  
  
void ASpartaPlayerController::ShowGameHUD()  
{  
    if (HUDWidgetInstance)  
    {
	    HUDWidgetInstance->RemoveFromParent();  
	    HUDWidgetInstance = nullptr;  
    }  
    
    if (MainMenuWidgetInstance)  
    {
	    MainMenuWidgetInstance->RemoveFromParent();  
	    MainMenuWidgetInstance = nullptr;  
    }  
    if (HUDWidgetClass)  
    {
	    HUDWidgetInstance = CreateWidget<UUserWidget>(this, HUDWidgetClass);  
	    
	    if (HUDWidgetInstance)  
		{
			HUDWidgetInstance->AddToViewport();
			
			bShowMouseCursor = false;  
	        SetInputMode(FInputModeGameOnly());  
		}  
	    
	    ASpartaGameState* SpartaGameState = GetWorld() ? GetWorld()->GetGameState<ASpartaGameState>() : nullptr;  
	    
	    if (SpartaGameState)  
	    {
		    SpartaGameState->UpdateHUD();  
	    }
	}
}  
  
void ASpartaPlayerController::StartGame()  
{  
	if (USpartaGameInstance* SpartaGameInstance = Cast<USpartaGameInstance>(UGameplayStatics::GetGameInstance(this)))  
	{
		SpartaGameInstance->CurrentLevelIndex = 0;  
	    SpartaGameInstance->TotalScore = 0;  
    }  
    UGameplayStatics::OpenLevel(GetWorld(), FName("BasicLevel"));  
    SetPause(false);  
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
