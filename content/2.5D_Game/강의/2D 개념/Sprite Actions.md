
# 1. Sprite Actions

**Sprite와 관련된 작업들을 모아놓은 메뉴**입니다.

즉, 하나의 기능이 아니라 **Sprite를 관리하는 기능들의 묶음**입니다.

예를 들어 Sprite를 우클릭하면

```text
Sprite Actions
 ├─ Apply Paper2D Texture Settings
 ├─ Extract Sprites
 ├─ ...
```

처럼 여러 기능이 들어 있습니다.

---

# 2. Create Sprite

## 개념

**이미지(Texture) 하나를 Sprite로 변환**하는 기능입니다.

언리얼은 PNG를 가져와도 바로 Sprite로 사용하는 것이 아니라 Texture로 가져옵니다.

```
PNG
 ↓
Texture
 ↓
Create Sprite
 ↓
Sprite 생성
```

---

# 3. Extract Sprites

## 개념

한 장의 큰 이미지(Sprite Sheet)를 **여러 Sprite로 자동 분리**하는 기능입니다.

예를 들어

```
□□□□□□□□
□□□□□□□□
□□□□□□□□
```

이런 스프라이트 시트가 있으면

```
Walk_0
Walk_1
Walk_2
Walk_3
```

처럼 여러 Sprite를 만들어 줍니다.

### 사용 예

캐릭터 애니메이션

```
Run.png

[1][2][3][4][5][6]
```

↓

Extract Sprites

↓

```
Run_0
Run_1
Run_2
Run_3
Run_4
Run_5
```

---

# 4. Apply Paper2D Texture Settings

## 개념

Texture를 **Paper2D에 적합한 설정으로 자동 변경**하는 기능입니다.

자동으로 변경되는 대표 설정

- Filter → Nearest
    
- Mip Maps 제거
    
- Compression 변경
    
- Texture Group → 2D Pixels
    

### 효과

적용 전

```
■■■■
□■■□
```

↓

게임에서

```
흐릿하게 보임
```

적용 후

```
픽셀이 선명하게 보임
```

도트 게임에서는 거의 항상 사용하는 기능입니다.

---

# 5. Create Tile Set

## 개념

타일 이미지(Texture)를 **Tile Set**으로 만드는 기능입니다.

예를 들어

```
Tiles.png
```

안에

```
🌱
🪨
🌊
🌳
```

같은 여러 타일이 들어 있다면

```
Create Tile Set
```

을 눌러

```
Tiles_TileSet
```

을 생성합니다.

이 Tile Set을 이용해 Tile Map을 만들 수 있습니다.

---

# 전체 흐름

## 이미지 한 장(예: 코인)

```
coin.png
      ↓
Texture
      ↓
Create Sprite
      ↓
Sprite
      ↓
게임에서 사용
```

## 캐릭터 스프라이트 시트

```
Run.png
      ↓
Texture
      ↓
Extract Sprites
      ↓
Run_0
Run_1
Run_2
Run_3
      ↓
Flipbook 생성
      ↓
애니메이션
```

## 타일맵

```
Tiles.png
      ↓
Texture
      ↓
Apply Paper2D Texture Settings
      ↓
Create Tile Set
      ↓
Create Tile Map
      ↓
맵 제작
```

### 핵심 차이

| 기능                                 | 입력       | 결과             | 사용 목적        |
| ---------------------------------- | -------- | -------------- | ------------ |
| **Create Sprite**                  | 이미지 1장   | Sprite 1개      | 단일 이미지 사용    |
| **Extract Sprites**                | 스프라이트 시트 | Sprite 여러 개    | 애니메이션 프레임 분리 |
| **Apply Paper2D Texture Settings** | Texture  | Paper2D용 설정 적용 | 픽셀 아트 품질 유지  |
| **Create Tile Set**                | 타일 이미지   | Tile Set       | 타일맵 제작       |
