
BaseItem.h
```cpp
// BaseItem 헤더
// 게임 내 모든 아이템(코인, 폭탄, 회복 아이템 등)의 공통 기반 클래스

#pragma once

// UE 기본 타입(FString, UObject 등)을 사용하기 위한 핵심 헤더
#include "CoreMinimal.h"

// Actor 기본 기능 (월드에 배치 가능한 오브젝트)
#include "GameFramework/Actor.h"

// 커스텀 아이템 인터페이스 (충돌/사용 규격 정의)
#include "Interface/ItemInterface.h"

// UHT가 생성하는 리플렉션 코드 포함 (항상 마지막 include)
#include "BaseItem.generated.h"

// 전방 선언 (헤더 의존성 최소화)
class USphereComponent;

// =========================
// Base Item 클래스
// =========================
UCLASS()

// AActor를 기반으로 하면서 IItemInterface를 구현하는 클래스
// 모든 아이템의 공통 동작(충돌, 사용, 타입 반환)을 정의
class COINGAME_API ABaseItem : public AActor, public IItemInterface
{
	GENERATED_BODY()

public:
	// 생성자: 컴포넌트 초기화 담당
	ABaseItem();

protected:
	// =========================
	// 1. 아이템 기본 정보
	// =========================

	// 아이템 타입 (Coin, Heal, Bomb 등 구분용)
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Item")
	FName ItemType;

	// =========================
	// 2. 컴포넌트 구조
	// =========================

	// 루트 컴포넌트 (전체 기준 좌표)
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Item|Component")
	USceneComponent* Scene;

	// 충돌 영역 (플레이어 감지용)
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Item|Component")
	USphereComponent* Collision;

	// 실제 보이는 메쉬
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Item|Component")
	UStaticMeshComponent* StaticMesh;

	// =========================
	// 3. 효과 (획득 시 연출)
	// =========================

	// 파티클 효과 (획득 이펙트)
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Item|Effects")
	UParticleSystem* PickupParticle;

	// 사운드 효과 (획득 사운드)
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Item|Effects")
	USoundBase* PickupSound;

	// =========================
	// 4. 인터페이스 구현 함수
	// =========================

	// 충돌 시작 시 호출
	virtual void OnItemOverlap(
		UPrimitiveComponent* OverlappedComp,
		AActor* OtherActor,
		UPrimitiveComponent* OtherComp,
		int32 OtherBodyIndex,
		bool bFromSweep,
		const FHitResult& SweepResult) override;

	// 충돌 종료 시 호출
	virtual void OnItemEndOverlap(
		UPrimitiveComponent* OverlappedComp,
		AActor* OtherActor,
		UPrimitiveComponent* OtherComp,
		int32 OtherBodyIndex) override;

	// 아이템 사용(획득) 처리
	virtual void ActivateItem(AActor* Activator) override;

	// 아이템 타입 반환
	virtual FName GetItemType() const override;

	// =========================
	// 5. 내부 처리 함수
	// =========================

	// 아이템 삭제 처리 (이펙트 후 Destroy 등)
	void DestroyItem();
};
```

BaseItem.cpp
```cpp
// BaseItem 구현 파일
// 아이템의 충돌 처리, 효과 재생, 인터페이스 동작 구현

#include "Actor/BaseItem.h"

// 구형 충돌 컴포넌트
#include "Components/SphereComponent.h"

// 사운드/이펙트/월드 유틸
#include "Kismet/GameplayStatics.h"

// 파티클 시스템 컴포넌트
#include "Particles/ParticleSystemComponent.h"

// =========================
// 생성자
// =========================
// 컴포넌트 구성 + 충돌 이벤트 바인딩
ABaseItem::ABaseItem()
{
	// Tick 비활성화 (매 프레임 업데이트 필요 없음)
	PrimaryActorTick.bCanEverTick = false;

	// =========================
	// 루트 컴포넌트 설정
	// =========================
	Scene = CreateDefaultSubobject<USceneComponent>(TEXT("Scene"));
	SetRootComponent(Scene);

	// =========================
	// 충돌 컴포넌트 설정
	// =========================
	Collision = CreateDefaultSubobject<USphereComponent>(TEXT("Collision"));

	// 모든 동적 오브젝트와 Overlap 감지
	Collision->SetCollisionProfileName(TEXT("OverlapAllDynamic"));

	// 루트(Scene)에 부착
	Collision->SetupAttachment(Scene);

	// =========================
	// 메쉬 컴포넌트
	// =========================
	StaticMesh = CreateDefaultSubobject<UStaticMeshComponent>(TEXT("StaticMesh"));
	StaticMesh->SetupAttachment(Collision);

	// =========================
	// 충돌 이벤트 바인딩
	// =========================
	Collision->OnComponentBeginOverlap.AddDynamic(
		this,
		&ABaseItem::OnItemOverlap
	);

	Collision->OnComponentEndOverlap.AddDynamic(
		this,
		&ABaseItem::OnItemEndOverlap
	);
}

// =========================
// 충돌 시작
// =========================
void ABaseItem::OnItemOverlap(
	UPrimitiveComponent* OverlappedComp,
	AActor* OtherActor,
	UPrimitiveComponent* OtherComp,
	int32 OtherBodyIndex,
	bool bFromSweep,
	const FHitResult& SweepResult)
{
	// 플레이어 태그가 있는 액터만 처리
	if (OtherActor && OtherActor->ActorHasTag("Player"))
	{
		// 디버그 출력
		GEngine->AddOnScreenDebugMessage(
			-1,
			2.0f,
			FColor::Green,
			FString::Printf(TEXT("Overlap!!!"))
		);

		// 아이템 활성화(획득 처리)
		ActivateItem(OtherActor);
	}
}

// =========================
// 충돌 종료
// =========================
void ABaseItem::OnItemEndOverlap(
	UPrimitiveComponent* OverlappedComp,
	AActor* OtherActor,
	UPrimitiveComponent* OtherComp,
	int32 OtherBodyIndex)
{
	// 현재는 별도 로직 없음 (확장용)
}

// =========================
// 아이템 사용(획득)
// =========================
void ABaseItem::ActivateItem(AActor* Activator)
{
	UParticleSystemComponent* Particle = nullptr;

	// =========================
	// 파티클 생성
	// =========================
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

	// =========================
	// 사운드 재생
	// =========================
	if (PickupSound)
	{
		UGameplayStatics::PlaySoundAtLocation(
			GetWorld(),
			PickupSound,
			GetActorLocation()
		);
	}

	// =========================
	// 파티클 자동 제거 타이머
	// =========================
	if (Particle)
	{
		FTimerHandle DestroyParticleTimerHandle;

		GetWorld()->GetTimerManager().SetTimer(
			DestroyParticleTimerHandle,

			// 람다: 2초 후 파티클 삭제
			[Particle]()
			{
				Particle->DestroyComponent();
			},

			2.0f,
			false
		);
	}
}

// =========================
// 아이템 타입 반환
// =========================
FName ABaseItem::GetItemType() const
{
	return ItemType;
}

// =========================
// 아이템 삭제
// =========================
void ABaseItem::DestroyItem()
{
	Destroy();
}
```