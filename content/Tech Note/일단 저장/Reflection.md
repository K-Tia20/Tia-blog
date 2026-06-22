
언리얼 리플렉션(Reflection) 시스템 정리

일반 C++은 컴파일이 끝나면 클래스 정보가 대부분 사라지지만,
언리얼은 리플렉션 시스템을 통해 객체 정보를 런타임에 유지한다.

이를 이용해 다음 기능들을 구현한다.

- 블루프린트 노출
- 가비지 컬렉션(GC)
- 에디터 노출
- 직렬화(Save/Load)
- 네트워크 복제(Replication)
- Delegate 바인딩
- 인터페이스 검사

---
# UHT (Unreal Header Tool)

언리얼은 C++을 컴파일하기 전에 UHT가 먼저 헤더를 분석한다.

```cpp
UCLASS()
USTRUCT()
UENUM()
UPROPERTY()
UFUNCTION()
```

같은 매크로를 발견하면

```cpp
MyClass.generated.h
```

파일을 자동 생성한다.
이 파일 안에는 리플렉션에 필요한 코드가 들어있다.
즉

```text
헤더 작성
 ↓
UHT 분석
 ↓
generated.h 생성
 ↓
C++ 컴파일
```

순서로 진행된다.

---
# UCLASS
```cpp
UCLASS()
class AMyActor : public AActor
{
	GENERATED_BODY()
};
```

### 역할
클래스를 리플렉션 시스템에 등록한다.

### 가능해지는 기능
- 블루프린트 생성
- SpawnActor
- GC 관리
- 에디터 인식
- 네트워크 복제
### 한 줄 요약
> 클래스를 언리얼 객체 시스템에 등록하기 위해 사용

---
# USTRUCT
```cpp
USTRUCT()
struct FItemData
{
	GENERATED_BODY()
};
```

### 역할
구조체를 리플렉션 시스템에 등록한다.

### 가능해지는 기능
- 블루프린트 사용
- 데이터 테이블 사용
- 저장 및 로드
### 한 줄 요약
> 구조체를 언리얼이 인식하도록 등록

---
# UENUM
```cpp
UENUM()
enum class EItemType : uint8
{
	Coin,
	Heal
};
```

### 역할
Enum을 리플렉션 시스템에 등록한다.

### 가능해지는 기능
- 블루프린트 Enum 사용
- 에디터 드롭다운 표시
### 한 줄 요약
> Enum을 언리얼에 등록

---
# UINTERFACE
```cpp
UINTERFACE()
class UItemInterface : public UInterface
{
	GENERATED_BODY()
};
```

### 역할
인터페이스를 리플렉션 시스템에 등록한다.
### 가능해지는 기능
- Blueprint Interface
- Interface 검사
- Cast
### 한 줄 요약
> 인터페이스를 언리얼에 등록

---
# UPROPERTY
```cpp
UPROPERTY(EditAnywhere)
float MoveSpeed;
```

### 역할
변수를 리플렉션 시스템에 등록한다.

### 가능해지는 기능
- 에디터 노출
- 블루프린트 접근
- GC 추적
- 저장/로드
- 네트워크 복제

### 한 줄 요약
> 변수를 언리얼이 관리하도록 등록

---
# UFUNCTION
```cpp
UFUNCTION(BlueprintCallable)
void Attack();
```

### 역할
함수를 리플렉션 시스템에 등록한다.

### 가능해지는 기능
- 블루프린트 호출
- Delegate 바인딩
- RPC
### 한 줄 요약
> 함수를 언리얼이 호출하고 추적할 수 있도록 등록

---
# GENERATED_BODY
```cpp
GENERATED_BODY()
```

### 역할
UHT가 생성한 리플렉션 관련 코드를 삽입한다.

### 실제로 하는 일
아래와 비슷한 코드들이 자동 생성된다.

```cpp
StaticClass()
GetPrivateStaticClass()
Serialize()
RegisterNatives()
```
등

### 없으면?

```text
Unrecognized type
Missing GENERATED_BODY
```

같은 오류 발생

### 한 줄 요약
> UHT가 생성한 리플렉션 코드를 클래스 내부에 삽입하기 위해 사용

---

### 한 줄 정리

### 리플렉션이란?

> 런타임에 클래스, 함수, 변수 정보를 조회하고 활용할 수 있게 해주는 시스템이다.

### 왜 필요한가?

> 블루프린트, GC, 직렬화, 에디터 노출, 네트워크 복제 등의 기능을 지원하기 위해 사용한다.

### UHT란?

> 리플렉션 매크로를 분석하여 generated.h 파일을 생성하는 언리얼 전용 코드 생성 도구이다.

### GENERATED_BODY란?

> UHT가 생성한 리플렉션 코드를 클래스 내부에 삽입하기 위한 매크로이다.
