
> **특정 이벤트가 발생했을 때 호출할 함수를 등록해두는 기능**

쉽게 말하면

> **"무슨 일이 발생하면 이 함수를 실행해줘"**

라고 예약해두는 것입니다.

---

예시

```cpp
SphereComp->OnComponentBeginOverlap.AddDynamic(
    this,
    &ACoinItem::OnItemOverlap
);
```

의 의미는

```text
오버랩이 발생하면
↓
OnItemOverlap() 실행해줘
```

입니다.

---

## 왜 사용할까?

언리얼 엔진은

```text
충돌 발생
마우스 클릭
버튼 클릭
체력 감소
```

등의 이벤트가 언제 발생할지 모릅니다.

그래서

```cpp
이벤트 발생
↓
등록된 함수 호출
```

방식으로 처리합니다.

---

## 실제 예시

```cpp
Button->OnClicked.AddDynamic(
    this,
    &AMyActor::OnButtonClicked
);
```

버튼 클릭

↓

```cpp
OnButtonClicked()
```

실행

---

## 오버랩 예시

```cpp
SphereComp->OnComponentBeginOverlap.AddDynamic(
    this,
    &ACoinItem::OnItemOverlap
);
```

플레이어 접근

↓

```cpp
OnItemOverlap()
```

실행

---
## 한 줄 정리

> Delegate는 이벤트와 함수를 연결하는 기능으로, 
> 특정 이벤트 발생 시 등록된 함수를 자동으로 호출하기 위해 사용한다.

---
>Delegate 시그니처를 맞춘다는 것: 
>Delegate가 요구하는 함수의 형태(반환형, 매개변수 개수, 타입)를 동일하게 맞추는 것

---
