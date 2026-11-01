---
date: 2026-06-20
---


> **충돌(Collision)과 렌더링이 가능한 가장 기본적인 컴포넌트**

부모 클래스입니다.

```
UPrimitiveComponent 
	├ UStaticMeshComponent 
	├ USkeletalMeshComponent 
	├ UBoxComponent 
	├ USphereComponent 
	└ UCapsuleComponent
```

즉,

```
UBoxComponent
USphereComponent
UCapsuleComponent
```

전부 `UPrimitiveComponent`를 상속받습니다.
