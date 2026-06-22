
SpartaPlayerController.h
```cpp

// 헤더 파일이 여러 번 포함되는 것을 방지
#pragma once

// 언리얼 엔진의 기본 타입과 기능을 사용하기 위한 핵심 헤더
#include "CoreMinimal.h"

// 플레이어 입력 및 화면 제어를 담당하는 APlayerController 클래스 헤더
#include "GameFramework/PlayerController.h"

// UHT(Unreal Header Tool)가 생성한 코드가 포함되는 헤더
// 반드시 마지막 include에 위치해야 함
#include "SpartaPlayerController.generated.h"

// 전방 선언(Forward Declaration)
// 헤더 의존성을 줄여 컴파일 속도를 향상시킴

// Enhanced Input의 입력 매핑 정보를 담는 클래스
class UInputMappingContext;

// Enhanced Input의 개별 입력 액션 클래스
class UInputAction;

// UI 위젯의 부모 클래스
class UUserWidget;

// 언리얼 리플렉션 시스템에 등록되는 클래스
UCLASS()

// 플레이어의 입력과 UI를 관리하는 컨트롤러 클래스
class COINGAME_API ASpartaPlayerController : public APlayerController
{
	GENERATED_BODY() // UHT가 생성한 리플렉션 관련 코드 삽입

public:

	// 생성자
	ASpartaPlayerController();

	// ------------------------
	// Input 설정
	// ------------------------

	// 사용할 Input Mapping Context
	// 어떤 입력 액션들을 사용할지 정의한 데이터
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Input")
	UInputMappingContext* InputMappingContext;

	// 이동 입력 액션(WASD 등)
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Input")
	UInputAction* MoveAction;

	// 점프 입력 액션(Space Bar 등)
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Input")
	UInputAction* JumpAction;

	// 카메라 회전 입력 액션(Mouse Move 등)
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Input")
	UInputAction* LookAction;

	// 달리기 입력 액션(Shift 등)
	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "Input")
	UInputAction* SprintAction;

	// ------------------------
	// HUD UI
	// ------------------------

	// 생성할 HUD 위젯 클래스
	// 예: WBP_HUD
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "HUD")
	TSubclassOf<UUserWidget> HUDWidgetClass;

	// 실제 생성된 HUD 위젯 인스턴스
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "HUD")
	UUserWidget* HUDWidgetInstance;

	// ------------------------
	// 메인 메뉴 UI
	// ------------------------

	// 생성할 메인 메뉴 위젯 클래스
	// 예: WBP_MainMenu
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Menu")
	TSubclassOf<UUserWidget> MainMenuWidgetClass;

	// 실제 생성된 메인 메뉴 위젯 인스턴스
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Menu")
	UUserWidget* MainMenuWidgetInstance;

	// 현재 생성된 HUD 위젯을 반환하는 함수
	// BlueprintPure는 값을 반환만 하고 상태를 변경하지 않는 함수
	UFUNCTION(BlueprintPure, Category = "HUD")
	UUserWidget* GetHUDWidget() const;

	// 게임 HUD를 화면에 표시하는 함수
	UFUNCTION(BlueprintCallable, Category = "HUD")
	void ShowGameHUD();

	// 메인 메뉴를 화면에 표시하는 함수
	// bIsRestart가 true면 재시작 메뉴로 동작할 수 있음
	UFUNCTION(BlueprintCallable, Category = "Menu")
	void ShowMainMenu(bool bIsRestart);

	// 게임 시작 처리 함수
	// 버튼 클릭 시 호출될 수 있음
	UFUNCTION(BlueprintCallable, Category = "Menu")
	void StartGame();

protected:

	// 게임 시작 시 한 번 호출되는 함수
	// UI 생성 및 초기화 작업을 수행하는 경우가 많음
	virtual void BeginPlay() override;
};
```

SpartaPlayerController.cpp
```cpp
  
// SpartaPlayerController 헤더 포함  
#include "SpartaPlayerController.h"  
// Enhanced Input 시스템 사용을 위한 헤더
#include "EnhancedInputSubsystems.h"  
// Enhanced Input 컴포넌트 사용 헤더
#include "EnhancedInputComponent.h"  
// UUserWidget 사용 헤더
#include "Blueprint/UserWidget.h"  
// 게임 상태(GameState) 접근용 헤더
#include "Gamemode/SpartaGameState.h"  
// 게임 인스턴스(GameInstance) 접근용 헤더
#include "GameInstance/SpartaGameInstance.h"  
// 레벨 이동, 게임 인스턴스 획득 등의 유틸리티 함수 제공
#include "Kismet/GameplayStatics.h"  
// UMG TextBlock 사용 헤더
#include "Components/TextBlock.h"  
  
//> PlayerController 객체가 생성될 때 호출되는 생성자
ASpartaPlayerController::ASpartaPlayerController()  
    : 
    //입력 매핑 컨텍스트를 nullptr로 초기화
    InputMappingContext(nullptr),  
    //각 입력 액션 포인터를 nullptr로 초기화
    MoveAction(nullptr),  
    JumpAction(nullptr),  
    LookAction(nullptr),  
    SprintAction(nullptr),  
    //HUD 위젯 클래스와 인스턴스를 nullptr로 초기화
    HUDWidgetClass(nullptr),  
    HUDWidgetInstance(nullptr),  
    //메인 메뉴 위젯 클래스와 인스턴스를 nullptr로 초기화
    MainMenuWidgetClass(nullptr),  
    MainMenuWidgetInstance(nullptr)  
{  
}  

//게임 시작 시 한 번 호출되는 함수
void ASpartaPlayerController::BeginPlay()  
{  
	//부모 클래스의 BeginPlay 실행 -> APlayerController 실행
    Super::BeginPlay();  
	  //현재 플레이어 정보를 가져옴
    if (ULocalPlayer* LocalPlayer = GetLocalPlayer())
    {
			//Enhanced Input 기능을 관리하는 서브시스템을 가져온다.
			//이 서브시스템은 입력 액션 등록, 입력 매핑 적용 등의 기능을 담당
	    if (UEnhancedInputLocalPlayerSubsystem* Subsystem =
	        LocalPlayer->GetSubsystem<UEnhancedInputLocalPlayerSubsystem>())  
       {
		    if (InputMappingContext)  
			{   //입력 매핑 컨텍스트 등록
				//두 번째 인자인 `0`은 우선순위(Priority)
				
			    Subsystem->AddMappingContext(InputMappingContext, 0);  
		    }       
		}    
	}
	
	//현재 맵 이름 가져오기
    FString CurrentMapName = GetWorld()->GetMapName();  
    
    //현재 맵이 MenuLevel인지 확인
    //Contains() 문자열 안에 특정 문자열이 포함되어 있는지 확인하는 함수
    if (CurrentMapName.Contains("MenuLevel"))
    {
	    //메뉴 레벨이면 메인 메뉴 UI 표시
	    ShowMainMenu(false);
    }
}  
  
UUserWidget* ASpartaPlayerController::GetHUDWidget() const  
{  
	//현재 생성된 HUD 위젯 반환
    return HUDWidgetInstance;
}  
  
void ASpartaPlayerController::ShowMainMenu(bool bIsRestart)  
{
	////`HUDWidgetInstance`가 nullptr이 아니면 실행해라
    if (HUDWidgetInstance)
    {   
	    //기존 HUD 제거    
	    HUDWidgetInstance->RemoveFromParent();  
	    
	    HUDWidgetInstance = nullptr;  
    }
    
    //`MainMenuWidgetInstance`가 nullptr이 아니면 실행해라
    if (MainMenuWidgetInstance)  
    {       
	    //> 기존 메뉴 제거
	    MainMenuWidgetInstance->RemoveFromParent();  
	    MainMenuWidgetInstance = nullptr;  
    }
    
    //`MainMenuWidgetClass`가 nullptr이 아니면 실행해라
    if (MainMenuWidgetClass)  
    {   
	    //메인 메뉴 위젯 생성
	    MainMenuWidgetInstance =
			CreateWidget<UUserWidget>(
			    this,
			    MainMenuWidgetClass
		    );
		    
	    if (MainMenuWidgetInstance)  
	    {
		    //화면에 UI 추가
			MainMenuWidgetInstance->AddToViewport();  
			//마우스 커서 표시
			bShowMouseCursor = true;  
	        //UI만 입력 가능하도록 변경
	        SetInputMode(FInputModeUIOnly());  
	    }
	    ///위젯 내부의 StartButtonText 찾기
	    //GetWidgetFromName() -> 위젯 내부에서 StartButtonText 라는 이름의 위젯 찾음
	    //이 위젯이 정말 UTextBlock이면 UTextBlock* 로 변환해줘
	    if (UTextBlock* ButtonText = Cast<UTextBlock>(MainMenuWidgetInstance->GetWidgetFromName(TEXT("StartButtonText"))))
	    {
		    if (bIsRestart)
	        {
		        //버튼 텍스트 변경
	            ButtonText->SetText(FText::FromString(TEXT("Restart")));  
	        }
	        else
	        {
				//버튼 텍스트 변경
	             ButtonText->SetText(FText::FromString(TEXT("Start")));  
			}
        }
	    if (bIsRestart)  
	    {
		    //블루프린트 함수 탐색
		    //위젯(블루프린트) 내부에 있는
		    //"PlayGameOverAnim" 함수를 이름으로 탐색
			UFunction* PlayAnimFunc = MainMenuWidgetInstance->FindFunction(FName("PlayGameOverAnim"));
	        
	        // 함수가 존재하면
	        if (PlayAnimFunc)
	        {
		        //블루프린트의 PlayGameOverAnim 함수 실행
		        // 게임 오버 애니메이션 재생
		        //ProcessEvent(...) >>> PlayGameOverAnim 함수 실행
		        MainMenuWidgetInstance->ProcessEvent(PlayAnimFunc, nullptr);  
	        }
	        
	        //UI 내부의 TotalScoreText(TextBlock) 찾기
	        if (UTextBlock* TotalScoreText =
		        Cast<UTextBlock>(
			        MainMenuWidgetInstance->GetWidgetFromName(
				        "TotalScoreText"
				    )
			    ))  
	        {
		        // 현재 게임의 GameInstance 가져오기
		        // 저장된 총 점수(TotalScore)에 접근하기 위해 캐스팅
		        if (USpartaGameInstance* SpartaGameInstance =
					Cast<USpartaGameInstance>(
						UGameplayStatics::GetGameInstance(this)
					))  
	            {
		            //총 점수 표시
		            //"Total Score: 점수" 형태의 문자열 생성
		            //GameInstance에 저장된 총 점수를 UI에 출력
				    TotalScoreText->SetText(
					    FText::FromString(
						    FString::Printf(
							    TEXT("Total Score: %d"),
							    SpartaGameInstance->TotalScore
							)  
				        )
					);
	            }
	        }
	    }
	}
}  
  
void ASpartaPlayerController::ShowGameHUD()  
{  
    if (HUDWidgetInstance)  
    {
	    //기존 UI 제거
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
	    //HUD 생성
	    HUDWidgetInstance = CreateWidget<UUserWidget>(this, HUDWidgetClass);  
	    if (HUDWidgetInstance)  
	    {
		    //HUD 화면 표시
		    HUDWidgetInstance->AddToViewport();
		    //마우스 숨김
			bShowMouseCursor = false;  
	        //게임 입력만 가능
	        SetInputMode(FInputModeGameOnly());  
       }
       //현재 GameState 가져오기
       ASpartaGameState* SpartaGameState = GetWorld() ? GetWorld()->GetGameState<ASpartaGameState>() : nullptr;  
       
       if (SpartaGameState)  
       {
	       //HUD 정보 갱신
	       SpartaGameState->UpdateHUD();  
       }
    }
}  
  
void ASpartaPlayerController::StartGame()  
{
	//현재 GameInstance 가져오기
    if (USpartaGameInstance* SpartaGameInstance = Cast<USpartaGameInstance>(UGameplayStatics::GetGameInstance(this)))
    {
	    //레벨 진행 초기화
	    SpartaGameInstance->CurrentLevelIndex = 0;  
	    //총 점수 초기화
	    SpartaGameInstance->TotalScore = 0;  
    }
    //BasicLevel 맵으로 이동
    UGameplayStatics::OpenLevel(GetWorld(), FName("BasicLevel"));  
    //게임 일시정지 해제
    SetPause(false);  
}

```


---
# ShowMainMenu() 함수 동작 과정

`ShowMainMenu()`는 메인 메뉴 UI를 생성하고 화면에 표시하는 함수이다.

또한 게임 오버 후 재시작 상황인지(`bIsRestart`)에 따라 버튼 텍스트, 애니메이션, 점수 표시를 다르게 처리한다.

---

## 1. 기존 HUD 제거

```cpp
if (HUDWidgetInstance)
{
    HUDWidgetInstance->RemoveFromParent();
    HUDWidgetInstance = nullptr;
}
```

현재 HUD가 화면에 표시되고 있다면 제거한다.

예시

```text
게임 플레이 중
↓
HUD 표시
↓
메인 메뉴 진입
↓
HUD 제거
```

---

## 2. 기존 메인 메뉴 제거

```cpp
if (MainMenuWidgetInstance)
{
    MainMenuWidgetInstance->RemoveFromParent();
    MainMenuWidgetInstance = nullptr;
}
```

이미 생성된 메인 메뉴가 존재할 경우 제거한다.

중복 생성으로 인해 UI가 여러 개 표시되는 것을 방지한다.

---

## 3. 메인 메뉴 위젯 생성

```cpp
MainMenuWidgetInstance =
    CreateWidget<UUserWidget>(
        this,
        MainMenuWidgetClass
    );
```

에디터에서 지정한 `MainMenuWidgetClass`를 이용하여 실제 위젯 객체를 생성한다.

```text
WBP_MainMenu
↓
CreateWidget()
↓
MainMenuWidgetInstance 생성
```

---

## 4. 화면에 메뉴 출력

```cpp
MainMenuWidgetInstance->AddToViewport();
```

생성한 위젯을 화면(Viewport)에 추가한다.

실제로 플레이어가 메뉴를 볼 수 있게 된다.

---

## 5. UI 입력 모드로 변경

```cpp
bShowMouseCursor = true;
SetInputMode(FInputModeUIOnly());
```

### 마우스 표시

```cpp
bShowMouseCursor = true;
```

마우스 커서를 화면에 표시한다.

---

### UI 전용 입력

```cpp
SetInputMode(FInputModeUIOnly());
```

입력을 UI만 받도록 변경한다.

```text
게임 조작 불가
버튼 클릭 가능
```

---

## 6. StartButtonText 찾기

```cpp
MainMenuWidgetInstance->GetWidgetFromName(
    TEXT("StartButtonText")
);
```

위젯 내부에서

```text
StartButtonText
```

라는 이름을 가진 TextBlock을 찾는다.

---

## 7. 버튼 텍스트 변경

```cpp
if (bIsRestart)
{
    ButtonText->SetText("Restart");
}
else
{
    ButtonText->SetText("Start");
}
```

### 게임 최초 실행

```text
Start
```

표시

---

### 게임 오버 후

```text
Restart
```

표시

---

## 8. 게임 오버 여부 확인

```cpp
if (bIsRestart)
```

재시작 화면인 경우 추가 처리를 수행한다.

---

## 9. 게임 오버 애니메이션 실행

```cpp
FindFunction("PlayGameOverAnim");
```

블루프린트에 구현된

```text
PlayGameOverAnim
```

함수를 찾는다.

---

```cpp
ProcessEvent(...)
```

찾은 함수를 실행한다.

즉

```text
게임 오버
↓
메뉴 표시
↓
게임 오버 애니메이션 재생
```

과정이 수행된다.

---

## 10. TotalScoreText 찾기

```cpp
GetWidgetFromName("TotalScoreText")
```

UI 안에 있는 점수 표시용 TextBlock을 찾는다.

---

## 11. GameInstance 가져오기

```cpp
UGameplayStatics::GetGameInstance(this)
```

현재 게임의 GameInstance를 가져온다.

---

```cpp
Cast<USpartaGameInstance>()
```

프로젝트에서 만든 GameInstance 타입으로 변환한다.

---

## 12. 총 점수 표시

```cpp
SpartaGameInstance->TotalScore
```

저장되어 있는 총 점수를 가져온다.

---

```cpp
FString::Printf(
    TEXT("Total Score: %d"),
    SpartaGameInstance->TotalScore
);
```

문자열 생성

예시

```text
Total Score: 1500
```

---

```cpp
TotalScoreText->SetText(...)
```

TextBlock에 최종 표시한다.

---

### 전체 흐름

```text
ShowMainMenu()
↓
기존 HUD 제거
↓
기존 메뉴 제거
↓
메인 메뉴 생성
↓
화면에 표시
↓
마우스 활성화
↓
UI 입력 모드 변경
↓
버튼 텍스트 설정
↓
(재시작인 경우)
    게임 오버 애니메이션 실행
    총 점수 표시
```

### 한 줄 정리

`ShowMainMenu()`는 기존 UI를 정리한 뒤 메인 메뉴 위젯을 생성하여 화면에 표시하고, 재시작 상황일 경우 게임 오버 애니메이션과 총 점수를 함께 출력하는 함수이다.

---
# ShowGameHUD() 함수 동작 과정

`ShowGameHUD()`는 게임 플레이에 필요한 HUD를 생성하고 화면에 표시하는 함수이다.

또한 메뉴 화면에서 게임 화면으로 전환하면서 입력 모드를 게임 전용으로 변경하고, HUD 데이터를 최신 정보로 갱신한다.

---

## 1. 기존 HUD 제거

```cpp
if (HUDWidgetInstance)
{
    HUDWidgetInstance->RemoveFromParent();
    HUDWidgetInstance = nullptr;
}
```

기존 HUD가 존재하면 화면에서 제거한다.

```text
기존 HUD
↓
제거
↓
새 HUD 생성 준비
```

중복 생성 방지 목적이다.

---

## 2. 기존 메인 메뉴 제거

```cpp
if (MainMenuWidgetInstance)
{
    MainMenuWidgetInstance->RemoveFromParent();
    MainMenuWidgetInstance = nullptr;
}
```

현재 메인 메뉴가 화면에 표시되고 있다면 제거한다.

```text
메인 메뉴
↓
게임 시작
↓
메뉴 제거
```

---

## 3. HUD 클래스 존재 여부 확인

```cpp
if (HUDWidgetClass)
```

에디터에서 HUD 위젯 클래스가 정상적으로 지정되었는지 확인한다.

예시

```text
WBP_HUD
```

---

## 4. HUD 생성

```cpp
HUDWidgetInstance =
    CreateWidget<UUserWidget>(
        this,
        HUDWidgetClass
    );
```

HUD 위젯 객체를 생성한다.

```text
HUDWidgetClass
↓
CreateWidget()
↓
HUDWidgetInstance 생성
```

---

## 5. HUD 화면 표시

```cpp
HUDWidgetInstance->AddToViewport();
```

생성한 HUD를 화면에 추가한다.

```text
HUD 생성
↓
AddToViewport()
↓
화면 표시
```

---

## 6. 마우스 커서 숨김

```cpp
bShowMouseCursor = false;
```

게임 플레이 중에는 마우스가 필요 없으므로 커서를 숨긴다.

```text
메뉴
→ 마우스 표시

게임
→ 마우스 숨김
```

---

## 7. 입력 모드를 게임 전용으로 변경

```cpp
SetInputMode(FInputModeGameOnly());
```

입력을 게임만 받을 수 있도록 설정한다.

```text
WASD 가능
마우스 회전 가능
점프 가능
버튼 클릭 불가
```

---

## 8. 현재 GameState 가져오기

```cpp
ASpartaGameState* SpartaGameState =
    GetWorld()
        ? GetWorld()->GetGameState<ASpartaGameState>()
        : nullptr;
```

현재 월드의 GameState를 가져온다.

GameState에는

```text
점수
레벨
웨이브
남은 시간
```

등의 게임 진행 정보가 저장되어 있다.

---

## 9. HUD 데이터 갱신

```cpp
SpartaGameState->UpdateHUD();
```

GameState에 저장된 최신 데이터를 HUD에 반영한다.

예를 들어

```text
현재 점수
현재 레벨
현재 웨이브
남은 시간
```

을 UI에 표시한다.

---

### 전체 흐름

```text
ShowGameHUD()
↓
기존 HUD 제거
↓
기존 메뉴 제거
↓
HUD 생성
↓
화면에 표시
↓
마우스 숨김
↓
게임 입력 모드 활성화
↓
GameState 가져오기
↓
HUD 정보 갱신
```

### ShowMainMenu()와 차이점

|ShowMainMenu()|ShowGameHUD()|
|---|---|
|메뉴 생성|HUD 생성|
|마우스 표시|마우스 숨김|
|UIOnly 입력|GameOnly 입력|
|Start/Restart 표시|게임 정보 표시|
|게임 오버 점수 표시|실시간 게임 데이터 표시|

### 한 줄 정리

`ShowGameHUD()`는 기존 UI를 제거한 뒤 HUD를 생성하여 화면에 표시하고, 입력 모드를 게임 전용으로 변경한 후 GameState의 최신 정보를 HUD에 반영하는 함수이다.