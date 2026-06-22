### 가상 함수(Virtual Function)란?

> **부모 클래스의 함수를 자식 클래스에서 재정의(Override)할 수 있도록 하는 함수**

---

예시

```cpp
class Animal
{
public:
    virtual void Sound()
    {
        cout << "동물 소리";
    }
};
```

```cpp
class Dog : public Animal
{
public:
    virtual void Sound() override
    {
        cout << "멍멍";
    }
};
```

---

사용

```cpp
Animal* AnimalPtr = new Dog();
AnimalPtr->Sound();
```

출력

```text
멍멍
```

---

### virtual이 없으면?

```cpp
class Animal
{
public:
    void Sound()
    {
        cout << "동물 소리";
    }
};
```

```cpp
Animal* AnimalPtr = new Dog();
AnimalPtr->Sound();
```

출력

```text
동물 소리
```

부모 함수가 호출된다.

---

### 왜 사용할까?

실제 객체의 타입에 맞는 함수를 실행하기 위해서

```cpp
AItem*
ACoinItem
AHealItem
ABuffItem
```

모두

```cpp
ActivateItem()
```

을 가지고 있을 때

```cpp
Item->ActivateItem();
```

한 줄로 각 아이템의 동작을 실행할 수 있다.

---

### 순수 가상 함수(Pure Virtual Function)

```cpp
virtual void ActivateItem() = 0;
```

`= 0` 이 붙으면 구현이 없는 함수가 된다.

자식 클래스는 반드시 구현해야 한다.

---

### 인터페이스에서 사용하는 이유

```cpp
class IItemInterface
{
public:
    virtual void ActivateItem(AActor* Activator) = 0;
};
```

인터페이스는 규칙만 정의하므로 보통 순수 가상 함수를 사용한다.

---

### 한 줄 정리

**가상 함수(Virtual Function)**

> 부모 포인터로 접근하더라도 실제 객체의 함수가 호출되도록 만드는 함수

**순수 가상 함수(Pure Virtual Function)**

> 자식 클래스에게 함수 구현을 강제하는 가상 함수 (`= 0`)이다.