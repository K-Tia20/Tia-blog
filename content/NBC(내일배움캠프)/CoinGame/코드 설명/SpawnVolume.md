
SpawnVolume.h
```cpp
// SpawnVolume 헤더
// 특정 영역(Box) 안에서 아이템을 랜덤으로 생성하는 스폰 관리 클래스

#pragma once

// UE 기본 타입 (FString, UObject 등)
#include "CoreMinimal.h"

// Actor 기본 클래스
#include "GameFramework/Actor.h"

// 아이템 스폰 데이터 구조체 (DataTable Row)
#include "DataTable/ItemSpawnRow.h"

// 박스 충돌/영역 정의용 컴포넌트
#include "Components/BoxComponent.h"

// UHT 리플렉션 코드 (항상 마지막 include)
#include "SpawnVolume.generated.h"

// 전방 선언 (헤더 의존성 최소화)
class UBoxComponent;

// =========================
// 스폰 볼륨 클래스
// =========================
// 지정된 박스 영역 안에서 아이템을 랜덤 생성하는 시스템
UCLASS()

class COINGAME_API ASpawnVolume : public AActor
{
	GENERATED_BODY()

public:
	// 생성자 (컴포넌트 초기화)
	ASpawnVolume();

	// =========================
	// 1. 기본 구조 컴포넌트
	// =========================

	// 루트 컴포넌트 (기준 좌표)
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Spawning")
	USceneComponent* Scene;

	// 아이템이 생성될 영역 (박스)
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Spawning")
	UBoxComponent* SpawningBox;

	// =========================
	// 2. 데이터 테이블
	// =========================

	// 어떤 아이템을 생성할지 정의하는 데이터 테이블
	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "Spawning")
	UDataTable* ItemDataTable;

	// =========================
	// 3. 스폰 기능
	// =========================

	// 랜덤 아이템 하나 생성 (외부 호출용)
	UFUNCTION(BlueprintCallable, Category = "Spawning")
	AActor* SpawnRandomItem();

	// 데이터 테이블에서 랜덤 아이템 Row 선택
	FItemSpawnRow* GetRandomItem() const;

	// 특정 클래스 아이템 생성
	AActor* SpawnItem(TSubclassOf<AActor> ItemClass);

	// 스폰 박스 내부 랜덤 좌표 반환
	FVector GetRandomPointInVolume() const;
};
```

SpawnVolume.cpp
```cpp
// SpawnVolume 구현 파일
// DataTable 기반으로 랜덤 아이템을 박스 영역에 스폰하는 시스템

#include "Actor/SpawnVolume.h"

// 박스 충돌 영역
#include "Components/BoxComponent.h"

// 월드 접근 및 스폰 기능
#include "Engine/World.h"

// Actor 기본 기능
#include "GameFramework/Actor.h"

// =========================
// 생성자
// =========================
ASpawnVolume::ASpawnVolume()
{
	// Tick 비활성화 (매 프레임 업데이트 필요 없음)
	PrimaryActorTick.bCanEverTick = false;

	// =========================
	// 루트 컴포넌트
	// =========================
	Scene = CreateDefaultSubobject<USceneComponent>(TEXT("Scene"));
	SetRootComponent(Scene);

	// =========================
	// 스폰 영역(Box)
	// =========================
	SpawningBox = CreateDefaultSubobject<UBoxComponent>(TEXT("SpawningBox"));
	SpawningBox->SetupAttachment(Scene);

	// 데이터 테이블 초기값
	ItemDataTable = nullptr;
}

// =========================
// 랜덤 아이템 스폰 (외부 호출용)
// =========================
AActor* ASpawnVolume::SpawnRandomItem()
{
	// 1. 데이터 테이블에서 랜덤 Row 선택
	if (FItemSpawnRow* SelectedRow = GetRandomItem())
	{
		// 2. Row에 정의된 클래스 가져오기
		if (UClass* ActualClass = SelectedRow->ItemClass.Get())
		{
			// 3. 해당 클래스 아이템 스폰
			return SpawnItem(ActualClass);
		}
	}

	// 실패 시 null 반환
	return nullptr;
}

// =========================
// 데이터 테이블 기반 랜덤 선택
// =========================
FItemSpawnRow* ASpawnVolume::GetRandomItem() const
{
	// 데이터 테이블 없으면 실패
	if (!ItemDataTable) return nullptr;

	// 모든 Row 가져오기
	TArray<FItemSpawnRow*> AllRows;
	static const FString ContextString(TEXT("ItemSpawnContext"));
	ItemDataTable->GetAllRows(ContextString, AllRows);

	if (AllRows.IsEmpty()) return nullptr;

	// =========================
	// 1. 전체 확률 계산
	// =========================
	float TotalChance = 0.0f;

	for (const FItemSpawnRow* Row : AllRows)
	{
		if (Row)
		{
			TotalChance += Row->SpawnChance;
		}
	}

	// =========================
	// 2. 랜덤 값 생성
	// =========================
	const float RandValue = FMath::FRandRange(0.0f, TotalChance);

	// =========================
	// 3. 누적 확률 방식 선택
	// =========================
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

// =========================
// 박스 내부 랜덤 위치 생성
// =========================
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

// =========================
// 실제 Actor 스폰
// =========================
AActor* ASpawnVolume::SpawnItem(TSubclassOf<AActor> ItemClass)
{
	if (!ItemClass) return nullptr;

	// 월드에 실제 액터 생성
	AActor* SpawnedActor = GetWorld()->SpawnActor<AActor>(
		ItemClass,
		GetRandomPointInVolume(),
		FRotator::ZeroRotator
	);

	return SpawnedActor;
}
```