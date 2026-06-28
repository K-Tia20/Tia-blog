---
date: 2026-06-20
---

### 오버라이드(Override)란?

> **부모 클래스의 가상 함수(`virtual`)를 자식 클래스에서 자신의 기능에 맞게 다시 구현하는 것**

---

### 왜 사용할까?

같은 함수 이름을 사용하면서 객체마다 다른 동작을 수행하기 위해 사용한다.

```cpp
class Monster
{
public:
    virtual void Attack();
};

class Goblin : public Monster
{
public:
    void Attack() override;
};

class Dragon : public Monster
{
public:
    void Attack() override;
};
```

- 고블린 → 근접 공격
- 드래곤 → 브레스 공격

처럼 같은 `Attack()` 함수라도 다른 동작을 수행할 수 있다.

---

### override 키워드

```cpp
void Attack() override;
```

> 부모의 가상 함수를 올바르게 재정의했는지 컴파일러가 검사하도록 하는 키워드

---

### 한 줄 정리

**오버라이드(Override)**

> 부모의 가상 함수를 자식 클래스에서 다시 구현하는 것

**override 키워드**

> 해당 함수가 부모의 가상 함수를 재정의한 것이 맞는지 검사하는 키워드

---

> 오버라이드는 상속 관계에서 부모의 가상 함수를 자식 클래스의 목적에 맞게 재구현하는 기능이며, 다형성을 구현하는 핵심 개념이다.