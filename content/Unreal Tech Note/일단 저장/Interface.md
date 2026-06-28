---
date: 2026-06-20
---

### 인터페이스(Interface)란?

> **"이 기능을 반드시 구현해야 한다"는 규칙(설계도)을 정의하는 클래스**

---

예시

```cpp
class IItemInterface
{
public:
    virtual void ActivateItem(AActor* Activator) = 0;
};
```

이 인터페이스를 상속받으면

```cpp
class ACoinItem : public AActor, public IItemInterface
{
public:
    virtual void ActivateItem(AActor* Activator) override;
};
```

반드시 `ActivateItem()`을 구현해야 한다.

---

### 왜 사용할까?

아이템 종류가 달라도 같은 방식으로 사용할 수 있게 하기 위해

```cpp
CoinItem
HealItem
BuffItem
```

모두

```cpp
ActivateItem()
```

을 가지고 있다고 보장할 수 있다.

---

### 한 줄 정리

> **인터페이스는 클래스가 반드시 구현해야 하는 함수들을 정의하는 규칙(계약서)이다.**

---

### 언리얼 인터뷰용 한 줄

> 인터페이스를 사용하면 서로 다른 클래스들을 동일한 방식으로 다룰 수 있으며,
> 특정 기능의 구현을 강제할 수 있습니다.