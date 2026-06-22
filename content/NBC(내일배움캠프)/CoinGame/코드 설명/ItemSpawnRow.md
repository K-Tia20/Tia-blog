
ItemSpawnRow.h
```cpp
// 데이터 테이블 Row 정의 헤더
// 아이템 스폰 정보를 데이터 테이블 형태로 관리하기 위한 구조체

#pragma once

// UE 기본 타입(FName, UObject 등)을 사용하기 위한 핵심 헤더
#include "CoreMinimal.h"

// DataTable 시스템에서 Row 기반 구조체를 사용하기 위한 헤더
#include "Engine/DataTable.h"

// UHT가 생성하는 리플렉션 코드 포함 헤더 (항상 마지막 include)
#include "ItemSpawnRow.generated.h"

// =========================
// DataTable Row 구조체
// =========================
// Blueprint에서도 사용할 수 있는 데이터 구조
USTRUCT(BlueprintType)

// FTableRowBase를 상속하여 DataTable Row로 사용 가능하게 만듦
struct FItemSpawnRow : public FTableRowBase
{
	GENERATED_BODY()

public:
	// =========================
	// 1. 아이템 이름
	// =========================
	// DataTable에서 행을 구분하거나 디버깅용으로 사용
	UPROPERTY(EditAnywhere, BlueprintReadWrite)
	FName ItemName;

	// =========================
	// 2. 스폰할 아이템 클래스
	// =========================
	// 어떤 Actor 클래스를 생성할지 지정
	// 예: Coin, Bomb, HealItem 등
	UPROPERTY(EditAnywhere, BlueprintReadWrite)
	TSubclassOf<AActor> ItemClass;

	// =========================
	// 3. 스폰 확률
	// =========================
	// 이 아이템이 선택될 확률 (가중치 개념으로 사용 가능)
	UPROPERTY(EditAnywhere, BlueprintReadWrite)
	float SpawnChance;
};
```

ItemSpawnRow.cpp
```cpp
// Fill out your copyright notice in the Description page of Project Settings.  

#include "DataTable/ItemSpawnRow.h"

```