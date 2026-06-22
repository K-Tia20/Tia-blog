### 순수 가상 함수(Pure Virtual Function)

``` cpp
virtual void ActivateItem(AActor* Activator) = 0;
```

에서
- `virtual` → 가상 함수
- `= 0` → 순수 가상 함수로 변경

즉

> `= 0`은 해당 함수를 **순수 가상 함수(Pure Virtual Function)** 로 만드는 문법이다.
> 가상 함수 뒤에 `= 0`을 붙이면 순수 가상 함수가 되며, 
> 이를 상속받는 클래스는 해당 함수를 반드시 구현해야 한다.

