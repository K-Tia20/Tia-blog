
# OOP(Object-Oriented Programming, 객체지향 프로그래밍)

> **데이터(속성)와 기능(함수)을 하나의 객체로 묶어 프로그램을 설계하는 방식**

현대 C++, 언리얼 엔진, Unity 등 대부분의 게임 엔진이 객체지향 프로그래밍을 기반으로 동작한다.

---

# 객체(Object)란?

현실 세계의 사물을 코드로 표현한 것

예시

```cpp
Player
Monster
Weapon
Item
```

---

# 클래스(Class)란?

> 객체를 생성하기 위한 설계도

```cpp
class Monster
{
public:
    int Hp;
    void Attack();
};
```

---

# 객체(Object)란?

> 클래스로부터 생성된 실제 데이터

```cpp
Monster Goblin;
Monster Orc;
```

- Monster → 설계도
    
- Goblin, Orc → 실제 객체
    

---

# OOP의 4대 특징

## 1. 캡슐화 (Encapsulation)

> 데이터와 함수를 하나로 묶고 외부 접근을 제한하는 것

```cpp
class Player
{
private:
    int Hp;

public:
    void SetHp(int NewHp);
};
```

### 목적

- 데이터 보호
- 잘못된 접근 방지

---

## 2. 상속 (Inheritance)

> 기존 클래스를 기반으로 새로운 클래스를 만드는 것

```cpp
class Monster
{
};

class Goblin : public Monster
{
};

class Orc : public Monster
{
};
```

### 목적

- 코드 재사용
- 유지보수 향상

---

## 3. 다형성 (Polymorphism)

> 같은 함수를 호출해도 객체에 따라 다른 동작을 수행하는 것

```cpp
virtual void Attack();
```

```cpp
Monster* MonsterPtr;
```

```cpp
Goblin->Attack();
Dragon->Attack();
```

동일한 함수 호출

```cpp
Attack();
```

하지만 결과는 다름

### 목적

- 유연한 설계
- 확장성 증가

---

## 4. 추상화 (Abstraction)

> 필요한 기능만 보여주고 내부 구현은 숨기는 것

```cpp
class IItemInterface
{
public:
    virtual void ActivateItem() = 0;
};
```

사용자는

```cpp
ActivateItem();
```

만 알면 됨

실제 내부 구현은 몰라도 됨

### 목적

- 복잡성 감소
- 사용 편의성 증가

---

# 언리얼 예시

### 상속

```cpp
AActor
 └ ACharacter
      └ ASpartaCharacter
```

---

### 다형성

```cpp
virtual void Attack();
```

```cpp
Monster->Attack();
```

몬스터 종류에 따라 다른 공격

---

### 추상화

```cpp
IItemInterface
```

인터페이스 사용

---

### 캡슐화

```cpp
private:
    int Hp;
```

직접 접근 제한

---
### OOP 4대 특징

| 특징  | 설명                 |
| --- | ------------------ |
| 캡슐화 | 데이터 보호 및 접근 제한     |
| 상속  | 기존 클래스 기능 재사용      |
| 다형성 | 같은 인터페이스로 다른 동작 수행 |
| 추상화 | 필요한 기능만 노출         |
