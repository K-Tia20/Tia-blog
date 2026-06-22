### 시그니처(Signature)란?

> **함수를 구분하기 위한 함수의 형태**

일반적으로 함수의 이름과 매개변수(인자)의 개수, 타입을 의미한다.

---

### 예시

```cpp
void Attack();
```

시그니처

```text
Attack()
```

---

```cpp
void Attack(int Damage);
```

시그니처

```text
Attack(int)
```

---

```cpp
void Attack(float Damage);
```

시그니처

```text
Attack(float)
```

---

위 세 함수는 이름은 모두 `Attack`이지만 시그니처가 다르므로 서로 다른 함수로 취급된다.

---

### 왜 중요할까?

함수를 호출할 때 어떤 함수를 실행해야 하는지 컴파일러가 판단하기 위해 사용한다.

```cpp
Attack(10);
```

↓

```cpp
Attack(int)
```

함수 호출

---

### 언리얼에서

Delegate에 함수를 등록할 때도 시그니처가 일치해야 한다.

```cpp
SphereComp->OnComponentEndOverlap.AddDynamic(
    this,
    &ACoinItem::OnItemEndOverlap
);
```

이 경우 `OnItemEndOverlap()`의 매개변수 개수와 타입이 Delegate가 요구하는 형태와 정확히 같아야 한다.

---

### 한 줄 정리

> **시그니처(Signature)는 함수를 구분하기 위한 형태이며, 
> 함수 이름과 매개변수의 개수·타입으로 결정된다.**