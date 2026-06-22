
SpartaGameMode.h
```cpp
// GameMode 클래스 헤더: 게임 규칙과 기본 흐름을 정의하는 클래스
// (플레이어 스폰, 기본 Pawn, GameState 지정 등 담당)

#pragma once

// UE 기본 타입(FString, FName, UObject 등)을 사용하기 위한 핵심 헤더
#include "CoreMinimal.h"

// 게임 모드 기본 기능을 제공하는 부모 클래스
#include "GameFramework/GameMode.h"

// UHT(언리얼 헤더 툴)가 생성하는 코드가 들어가는 헤더
// 반드시 마지막 include로 위치해야 함
#include "SpartaGameMode.generated.h"

// 언리얼 리플렉션 시스템에 등록되는 클래스 선언
UCLASS()

// AGameMode를 상속한 커스텀 게임 모드 클래스
// 서버 권한 로직(게임 규칙, 초기 설정)을 담당
class COINGAME_API ASpartaGameMode : public AGameMode
{
	GENERATED_BODY()

public:
	// 생성자: 기본 설정 (Default Pawn, PlayerController 등 지정 가능)
	ASpartaGameMode();
};
```

SpartaGameMode.cpp
```cpp

// GameMode 구현 파일
// 게임 시작 시 기본 규칙(플레이어, 캐릭터, GameState)을 설정하는 클래스

#include "Gamemode/SpartaGameMode.h"

// 커스텀 PlayerController (입력, HUD, UI 제어 담당)
#include "SpartaPlayerController.h"

// 플레이어가 조종하는 캐릭터 클래스
#include "Character/SpartaCharacter.h"

// 게임 전체 상태(점수, 레벨, 타이머 등 관리)
#include "Gamemode/SpartaGameState.h"

// GameMode 생성자: 게임 실행 시 기본 클래스들을 지정
ASpartaGameMode::ASpartaGameMode()
{
	// 플레이어 입력 및 UI를 처리할 컨트롤러 지정
	PlayerControllerClass = ASpartaPlayerController::StaticClass();

	// 플레이어가 조종할 기본 캐릭터 지정
	DefaultPawnClass = ASpartaCharacter::StaticClass();

	// 게임 진행 상태를 관리할 GameState 지정
	// (기본 GameState 대신 우리가 만든 SpartaGameState 사용)
	GameStateClass = ASpartaGameState::StaticClass();
}

```

