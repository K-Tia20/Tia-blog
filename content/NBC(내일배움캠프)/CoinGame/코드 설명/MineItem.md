
MineItem.h
```cpp
// MineItem 헤더
// 플레이어가 접근하면 일정 시간 후 폭발하는 지뢰 아이템

#pragma once

// UE 기본 타입 (FString, UObject 등)
#include "CoreMinimal.h"

// 모든 아이템의 공통 기반 클래스
#include "Actor/BaseItem.h"

// UHT 리플렉션 코드 포함 (항상 마지막 include)
#include "MineItem.generated.h"

// =========================
// 지뢰 아이템 클래스
// =========================
// BaseItem을 상속하여 "지연 폭발" 기능을 가진 아이템
UCLASS()

class COINGAME_API AMineItem : public ABaseItem
{
	GENERATED_BODY()

public:
	// 생성자 (기본 값 초기화)
	AMineItem();

	// =========================
	// 1. 폭발 충돌 영역
	// =========================

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Item|Component")
	USphereComponent* ExplosionCollision;

	// =========================
	// 2. 폭발 효과
	// =========================

	// 폭발 파티클
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Item|Effects")
	UParticleSystem* ExplosionParticle;

	// 폭발 사운드
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Item|Effects")
	USoundBase* ExplosionSound;

	// =========================
	// 3. 폭발 설정 값
	// =========================

	// 폭발까지 지연 시간
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Item")
	float ExplosionDelay;

	// 폭발 범위
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Item")
	float ExplosionRadius;

	// 폭발 데미지
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Item")
	int32 ExplosionDamage;

	// =========================
	// 4. 상태 관리
	// =========================

	// 이미 폭발했는지 여부 (중복 폭발 방지)
	bool bHasExploded;

	// 타이머 핸들 (폭발 예약 관리용)
	FTimerHandle ExplosionTimerHandle;

	// =========================
	// 5. 핵심 로직
	// =========================

	// 아이템 활성화 (플레이어 접촉 시)
	virtual void ActivateItem(AActor* Activator) override;

	// 실제 폭발 처리 함수
	void Explode();
};
```

MineItem.cpp
```cpp
// MineItem 구현 파일
// 일정 시간 후 폭발하여 주변 플레이어에게 데미지를 주는 아이템

#include "Actor/MineItem.h"

// 충돌 컴포넌트
#include "Components/SphereComponent.h"

// 사운드/이펙트/데미지/월드 유틸
#include "Kismet/GameplayStatics.h"

// 파티클 컴포넌트
#include "Particles/ParticleSystemComponent.h"

// =========================
// 생성자
// =========================
// 지뢰 기본 값 + 충돌 영역 설정
AMineItem::AMineItem()
{
	// =========================
	// 폭발 설정 값 초기화
	// =========================
	ExplosionDelay = 5.0f;     // 폭발까지 대기 시간
	ExplosionRadius = 300.0f;  // 폭발 범위
	ExplosionDamage = 30.0f;   // 데미지
	ItemType = "Mine";         // 아이템 타입
	bHasExploded = false;      // 중복 폭발 방지

	// =========================
	// 폭발 감지용 충돌 컴포넌트
	// =========================
	ExplosionCollision = CreateDefaultSubobject<USphereComponent>(TEXT("ExplosionCollision"));
	ExplosionCollision->InitSphereRadius(ExplosionRadius);
	ExplosionCollision->SetCollisionProfileName(TEXT("OverlapAllDynamic"));
	ExplosionCollision->SetupAttachment(Scene);
}

// =========================
// 아이템 활성화 (플레이어 접촉)
// =========================
void AMineItem::ActivateItem(AActor* Activator)
{
	// 이미 폭발했으면 무시
	if (bHasExploded) return;

	// BaseItem 공통 효과 실행 (사운드, 파티클 등)
	Super::ActivateItem(Activator);

	// =========================
	// 폭발 타이머 등록
	// =========================
	// ExplosionDelay 이후 Explode() 실행 예약
	GetWorld()->GetTimerManager().SetTimer(
		ExplosionTimerHandle,
		this,
		&AMineItem::Explode,
		ExplosionDelay,
		false
	);

	bHasExploded = true;
}

// =========================
// 폭발 처리
// =========================
void AMineItem::Explode()
{
	UParticleSystemComponent* Particle = nullptr;

	// =========================
	// 1. 폭발 파티클 생성
	// =========================
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

	// =========================
	// 2. 폭발 사운드 재생
	// =========================
	if (ExplosionSound)
	{
		UGameplayStatics::PlaySoundAtLocation(
			GetWorld(),
			ExplosionSound,
			GetActorLocation()
		);
	}

	// =========================
	// 3. 범위 내 액터 탐색
	// =========================
	TArray<AActor*> OverlappingActors;
	ExplosionCollision->GetOverlappingActors(OverlappingActors);

	// =========================
	// 4. 플레이어에게 데미지 적용
	// =========================
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

	// =========================
	// 5. 지뢰 제거
	// =========================
	DestroyItem();

	// =========================
	// 6. 파티클 정리 (지연 삭제)
	// =========================
	if (Particle)
	{
		FTimerHandle DestroyParticleTimerHandle;

		GetWorld()->GetTimerManager().SetTimer(
			DestroyParticleTimerHandle,

			// 2초 후 파티클 제거
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