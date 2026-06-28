---
date: 2026-06-20
---

> **충돌(Hit) 또는 Sweep 결과에 대한 상세 정보를 저장하는 구조체(Struct)**

쉽게 말하면

```text
"누구랑 부딪혔지?"
"어디서 부딪혔지?"
"어느 방향으로 부딪혔지?"
```

같은 정보를 담고 있는 상자입니다.

---

## 왜 필요할까?

예를 들어 총을 쐈다고 가정하면

```cpp
LineTraceSingleByChannel(...)
```

결과로

```cpp
FHitResult HitResult;
```

를 받습니다.

이 안에는

```text
맞은 액터
맞은 컴포넌트
충돌 위치
충돌 방향
```

등이 들어있습니다.

---

## 자주 사용하는 멤버

### 충돌한 액터

```cpp
HitResult.GetActor()
```

또는

```cpp
HitResult.Actor
```

예시

```cpp
AActor* HitActor = HitResult.GetActor();
```

---

### 충돌한 컴포넌트

```cpp
HitResult.GetComponent()
```

예시

```cpp
UPrimitiveComponent* HitComp = HitResult.GetComponent();
```

---

### 충돌 위치

```cpp
HitResult.ImpactPoint
```

예시

```cpp
FVector HitLocation = HitResult.ImpactPoint;
```

총알이 실제로 맞은 위치

---

### 충돌 방향

```cpp
HitResult.ImpactNormal
```

예시

```cpp
FVector Normal = HitResult.ImpactNormal;
```

벽에 수직인 방향 벡터

---

### 거리

```cpp
HitResult.Distance
```

예시

```cpp
float Dist = HitResult.Distance;
```

트레이스 시작점부터 충돌 지점까지 거리

---

## 실제 사용 예시

### 총알 자국 생성

```cpp
UGameplayStatics::SpawnEmitterAtLocation(
    GetWorld(),
    HitEffect,
    HitResult.ImpactPoint
);
```

총알이 맞은 위치에 파티클 생성

---

### 맞은 적 찾기

```cpp
AActor* HitActor = HitResult.GetActor();

if(HitActor)
{
    HitActor->TakeDamage(...);
}
```

---

## 오버랩에서 왜 FHitResult가 있나?

```cpp
void OnItemOverlap(
    ...
    bool bFromSweep,
    const FHitResult& SweepResult
)
```

여기서

```cpp
bFromSweep == true
```

이면

액터가 이동하면서 충돌한 경우

```cpp
SweepResult
```

에 충돌 정보가 들어옵니다.

---

## 구조체(Struct)란?

참고로

```cpp
FHitResult
```

앞에 F가 붙은 이유는

```cpp
FVector
FRotator
FTransform
FHitResult
```

처럼 언리얼의 **구조체(Struct)** 규칙입니다.

---
## 한 줄 정리

> **FHitResult는 충돌 결과에 대한 상세 정보를 저장하는 구조체이며, 충돌한 액터, 컴포넌트, 위치, 방향, 거리 등의 정보를 제공한다.**

실무에서는 보통 아래 4개를 가장 많이 씁니다.

```cpp
HitResult.GetActor()      // 맞은 액터
HitResult.GetComponent()  // 맞은 컴포넌트
HitResult.ImpactPoint     // 충돌 위치
HitResult.ImpactNormal    // 충돌 방향
```
