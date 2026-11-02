

이번 재질 실험은 두 갈래다. 금속 위에 코팅층을 쌓는 Substrate 재질과, 명암 단계를 조절하는 공식 Toon 셰이딩을 만들었다. 포스트 프로세스 필터로 화면 전체를 만화처럼 바꾼 결과는 아니다.

재질(Material)은 표면이 빛에 어떻게 반응할지 정하는 자료다. 같은 모양의 구라도 재질이 달라지면 금속, 거친 표면, 코팅된 표면처럼 보일 수 있다.

![코팅 구와 Toon 캐릭터](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/14/result.png)

## 조작부터 확인하기

1. `Content → FeatureLab → Maps → FL_14_SubstrateToon`을 연다.
2. **▶ Play** 후 **1**로 코팅 두께, **2**로 거칠기를 바꾼다.
3. **3**으로 Ink와 Soft Toon 프로파일을 바꾼다.
4. **4**로 주황 계열과 파란 계열 팔레트를 바꾼다.
5. **L**로 실제 조명 방향을 바꾸고 **C**로 전체·상세 시점을 본다.
6. **P**로 캐릭터 애니메이션을 멈췄다가 **R**로 모든 기준값을 복구한다.
7. **■ Stop** 후 `Content → FeatureLab → Materials`를 연다.

## 코팅 재질의 노드 연결

`M_LabCoatedCopper`를 더블클릭한다. 이번에는 Slab BSDF 두 개를 공식 **Vertical Layering**으로 연결했다. BSDF는 빛이 표면에 들어왔을 때 어느 방향으로 어떻게 반응할지 표현하는 모델이다. 여기서는 아래 금속층과 위 코팅층을 따로 다루기 위한 재료 단위로 보면 된다.

![재질 파일 위치](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/14/folder.png)

**참고 — 사진과 작업에 나온 영어 이름**

| 영어 표시 | 한국어 뜻과 쓰임 |
|---|---|
| `File` | 파일 열기·저장 같은 작업 메뉴. |
| `Edit` | 편집 메뉴. Project Settings와 Plugins로 들어갈 때 사용한다. |
| `Window` | 창을 열고 배치를 관리하는 메뉴. 사라진 패널을 다시 찾을 때 본다. |
| `Tools` | 제작 도구 메뉴. 에디터 안에서 Python 파일을 실행하는 기능도 여기에서 찾는다. |
| `Build` | 조명·지형 구역 등 프로젝트 자료를 빌드하는 메뉴. C++ 컴파일과 구분한다. |
| `Platforms` | 대상 플랫폼과 실행·패키징 작업을 고르는 메뉴. |
| `Select` | 선택 작업 메뉴. |
| `Actor` | 레벨에 놓인 액터를 다루는 메뉴. 액터는 장면에 존재하는 객체다. |
| `Help` | 도움말과 문서 메뉴. |
| `Content Browser` | 프로젝트 안의 에셋과 폴더를 찾는 창. |
| `Content` | 프로젝트의 콘텐츠 루트. 코드 경로의 /Game에 해당한다. |
| `Add` | 새 에셋을 만드는 시작 버튼. |
| `Import` | 외부 파일을 프로젝트 에셋으로 가져오는 버튼. |
| `Save All` | 여러 변경 파일을 한꺼번에 저장하는 버튼. 실습 복제본인지 확인하고 사용한다. |
| `Filters / Search` | 유형을 거르거나 이름으로 파일을 찾는 기능. |
| `Outliner` | 현재 레벨에 배치된 액터 목록. |
| `Details` | 현재 선택한 액터나 에셋의 상세 설정. |
| `World Settings` | 현재 맵 전체에 적용할 설정. 선택한 액터 한 개의 Details와 다르다. |
| `Perspective` | 원근감이 있는 3D 시점. |
| `Lit` | 조명과 재질을 적용해 보는 표시 방식. |
| `Play / Stop` | 게임 실행 시작 / 종료. 에셋 편집 설명을 따라갈 때는 Stop으로 실행을 끝낸다. |
| `Take Recorder` | 촬영 테이크를 기록하는 도구 창. 단순히 창이 보인다고 녹화가 진행 중인 것은 아니다. |
| `Material Graph` | 재질의 빛 반응을 노드로 연결하는 그래프. |
| `Substrate` | 여러 재질층과 빛 반응을 구성하는 재질 체계. |
| `Substrate Slab BSDF` | 재질 한 층의 빛 반응을 계산하는 노드. |
| `Vertical Layer` | 위쪽 코팅층과 아래쪽 바탕층을 쌓는 연산. |
| `Background / Foreground` | 아래층 / 위층 입력. |
| `Roughness` | 표면의 거친 정도. 낮으면 매끈한 반사가, 높으면 퍼진 반사가 나타난다. |
| `Thickness` | 코팅층 두께를 정하는 값. |
| `Base Color / Normal` | 기본 표면 색 / 표면 방향. |
| `Front Material` | Substrate의 최종 재질 결과를 받는 출력 핀. |
| `Toon BSDF / Toon Profile` | 만화풍 빛 반응 / 단계·경계 표현을 정한 설정 자료. |
| `Constant / Linear` | 단계가 끊기는 변화 / 직선적으로 이어지는 변화. |
| `Ink / Soft` | 이번 프로젝트의 선명한 단계 / 부드러운 단계 프로필 이름. |
| `out of budget ... simplified` | 재질 미리보기가 계산 예산을 넘어 단순화됐다는 경고. 노드 연결과 실제 실행 결과를 함께 확인하며, 경고를 성공 표시로 읽지 않는다. |
| `M_LabCoatedCopper / M_LabToonSoft` | 실험용 코팅 구리 재질 / 부드러운 Toon 재질 이름. |


![실제 Substrate 재질 그래프](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/14/settings.png)

**참고 — 사진과 작업에 나온 영어 이름**

| 영어 표시 | 한국어 뜻과 쓰임 |
|---|---|
| `File / Edit` | 파일 작업 / 편집 작업 메뉴. |
| `Asset` | 지금 연 에셋에 관한 작업 메뉴. |
| `Window / Tools / Help` | 창 관리 / 도구 / 도움말 메뉴. |
| `Compile` | 노드 변경을 실행하거나 계산할 수 있는 형태로 검사·변환하는 버튼. 파일 저장과는 별도다. |
| `Save / Apply` | 파일 저장 / 현재 편집한 변경 반영. 도구 종류에 따라 별도 버튼으로 표시된다. |
| `Details` | 선택한 노드나 항목의 상세 설정. |
| `Preview / Viewport` | 결과를 미리 보는 영역 / 3D 화면 영역. |
| `AI Assistant` | 에픽의 언리얼 문서 질의응답 패널. |
| `New Chat` | AI Assistant의 새 질문 대화. |
| `Can't see or modify your project content` | 이 Assistant는 프로젝트 내용을 직접 보거나 수정하지 못한다는 안내. 프로젝트 편집을 수행한 MCP와 역할을 구분한다. |
| `Output Log` | 에디터가 남긴 작업·경고·오류 기록. |
| `All Saved / Unsaved` | 모두 저장됨 / 저장되지 않은 변경이 있음. |
| `Revision Control` | 변경 이력 도구 연결 상태. 이것만 표시된다고 Lore 로컬 검증까지 끝났다는 뜻은 아니다. |
| `Material Graph` | 재질의 빛 반응을 노드로 연결하는 그래프. |
| `Substrate` | 여러 재질층과 빛 반응을 구성하는 재질 체계. |
| `Substrate Slab BSDF` | 재질 한 층의 빛 반응을 계산하는 노드. |
| `Vertical Layer` | 위쪽 코팅층과 아래쪽 바탕층을 쌓는 연산. |
| `Background / Foreground` | 아래층 / 위층 입력. |
| `Roughness` | 표면의 거친 정도. 낮으면 매끈한 반사가, 높으면 퍼진 반사가 나타난다. |
| `Thickness` | 코팅층 두께를 정하는 값. |
| `Base Color / Normal` | 기본 표면 색 / 표면 방향. |
| `Front Material` | Substrate의 최종 재질 결과를 받는 출력 핀. |
| `Toon BSDF / Toon Profile` | 만화풍 빛 반응 / 단계·경계 표현을 정한 설정 자료. |
| `Constant / Linear` | 단계가 끊기는 변화 / 직선적으로 이어지는 변화. |
| `Ink / Soft` | 이번 프로젝트의 선명한 단계 / 부드러운 단계 프로필 이름. |
| `out of budget ... simplified` | 재질 미리보기가 계산 예산을 넘어 단순화됐다는 경고. 노드 연결과 실제 실행 결과를 함께 확인하며, 경고를 성공 표시로 읽지 않는다. |
| `M_LabCoatedCopper / M_LabToonSoft` | 실험용 코팅 구리 재질 / 부드러운 Toon 재질 이름. |


```text
아래 금속 Slab ─┐
               ├─ Vertical Layering → 재질 출력
위 코팅 Slab ──┘         ↑ 두께·거칠기 파라미터
```

단일 Slab 기준 구를 함께 놓아 비교했다. 두께를 바꿀 때 위층을 통과하는 빛의 반응이 실제로 달라지는지 확인했다. 거칠기는 반사가 퍼지는 정도와 관련된 값이다. 아래층과 위층의 거칠기를 각각 연결했다.

## Toon은 프로파일과 실제 재질을 함께 사용했다

캐릭터에는 공식 **Substrate Toon BSDF**와 `TP_LabInk`, `TP_LabSoft`를 연결했다. 프로파일은 명암과 반사 반응의 모양을 담은 자료다. Ink는 단계가 분명한 램프, Soft는 부드럽게 연결한 램프를 사용했다. 램프는 입력 밝기를 어떤 출력 색과 명암으로 바꿀지 정한 곡선·색상 대응이다.

캐릭터는 표정 모프가 있는 스켈레탈 메시다. 정지 구에서만 셰이더가 되는지 확인하지 않고 실제 변형하는 캐릭터에 적용했다.

## 기본 재질로 바뀌어 보였던 문제

재질이 캐릭터에 맞는 사용 조건으로 컴파일되지 않으면 의도한 결과 대신 기본 재질이 나올 수 있다. 이번에는 Skeletal Mesh와 Morph Targets 사용 조건을 함께 켜고 실제 변형 표면을 재검사했다.

또 조명 방향을 바꿨는데 픽셀 결과가 거의 변하지 않는 문제가 있었다. 조명 이동성을 **Movable**로 바꿨다. 정적인 조명 설정과 실행 중 실제로 움직일 조명을 구분해야 한다. 카메라도 얼굴 위가 잘리지 않도록 수정했다.

![두께·거칠기·프로파일의 실제 캡처 비교](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/14/material-compare.gif)

*이 GIF는 설정별 정지 캡처의 비교다. 해당 변경이 보이는 부분을 번갈아 확인하기 위한 자료다.*

## 눈으로 비슷해 보일 때는 기준 잡음과 비교했다

아무것도 바꾸지 않고 다시 찍어도 시간 기반 렌더링 때문에 화면이 조금 달라질 수 있다. 그래서 초기화 후 화면 차이를 기준으로 두고, 두께·거칠기·Toon 프로파일·팔레트·조명 방향을 바꾼 차이가 그보다 큰지 확인했다.

이 수치는 실제 GPU 이미지의 차이를 설명하는 값이다. 재질이 더 아름답다는 점수나 품질 순위가 아니다. 107개 개별 검사를 통과한 뒤 최종 프로젝트의 DX12·SM6·Substrate 설정으로도 표시를 재확인했다.

전체 재질 생성: [lab_build_substrate_materials.py](#source-lab-lab-build-substrate-materials-py). 비교 장면: [lab_build_material_scene.py](#source-lab-lab-build-material-scene-py). 입력과 재질 파라미터 변경: [FeatureLabRendering.cpp](#source-source-mutablesample-featurelabrendering-cpp), [헤더](#source-source-mutablesample-featurelabrendering-h).


## 편집 화면을 더 자세히 보기

![부드러운 Toon 재질을 연 실제 편집 화면](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/14/toon.png)

**참고 — 사진과 작업에 나온 영어 이름**

| 영어 표시 | 한국어 뜻과 쓰임 |
|---|---|
| `File / Edit` | 파일 작업 / 편집 작업 메뉴. |
| `Asset` | 지금 연 에셋에 관한 작업 메뉴. |
| `Window / Tools / Help` | 창 관리 / 도구 / 도움말 메뉴. |
| `Compile` | 노드 변경을 실행하거나 계산할 수 있는 형태로 검사·변환하는 버튼. 파일 저장과는 별도다. |
| `Save / Apply` | 파일 저장 / 현재 편집한 변경 반영. 도구 종류에 따라 별도 버튼으로 표시된다. |
| `Details` | 선택한 노드나 항목의 상세 설정. |
| `Preview / Viewport` | 결과를 미리 보는 영역 / 3D 화면 영역. |
| `AI Assistant` | 에픽의 언리얼 문서 질의응답 패널. |
| `New Chat` | AI Assistant의 새 질문 대화. |
| `Can't see or modify your project content` | 이 Assistant는 프로젝트 내용을 직접 보거나 수정하지 못한다는 안내. 프로젝트 편집을 수행한 MCP와 역할을 구분한다. |
| `Output Log` | 에디터가 남긴 작업·경고·오류 기록. |
| `All Saved / Unsaved` | 모두 저장됨 / 저장되지 않은 변경이 있음. |
| `Revision Control` | 변경 이력 도구 연결 상태. 이것만 표시된다고 Lore 로컬 검증까지 끝났다는 뜻은 아니다. |
| `Material Graph` | 재질의 빛 반응을 노드로 연결하는 그래프. |
| `Substrate` | 여러 재질층과 빛 반응을 구성하는 재질 체계. |
| `Substrate Slab BSDF` | 재질 한 층의 빛 반응을 계산하는 노드. |
| `Vertical Layer` | 위쪽 코팅층과 아래쪽 바탕층을 쌓는 연산. |
| `Background / Foreground` | 아래층 / 위층 입력. |
| `Roughness` | 표면의 거친 정도. 낮으면 매끈한 반사가, 높으면 퍼진 반사가 나타난다. |
| `Thickness` | 코팅층 두께를 정하는 값. |
| `Base Color / Normal` | 기본 표면 색 / 표면 방향. |
| `Front Material` | Substrate의 최종 재질 결과를 받는 출력 핀. |
| `Toon BSDF / Toon Profile` | 만화풍 빛 반응 / 단계·경계 표현을 정한 설정 자료. |
| `Constant / Linear` | 단계가 끊기는 변화 / 직선적으로 이어지는 변화. |
| `Ink / Soft` | 이번 프로젝트의 선명한 단계 / 부드러운 단계 프로필 이름. |
| `out of budget ... simplified` | 재질 미리보기가 계산 예산을 넘어 단순화됐다는 경고. 노드 연결과 실제 실행 결과를 함께 확인하며, 경고를 성공 표시로 읽지 않는다. |
| `M_LabCoatedCopper / M_LabToonSoft` | 실험용 코팅 구리 재질 / 부드러운 Toon 재질 이름. |


![Substrate 관련 프로젝트 설정 확인](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/14/project-settings.png)

**참고 — 사진과 작업에 나온 영어 이름**

| 영어 표시 | 한국어 뜻과 쓰임 |
|---|---|
| `Project Settings` | 프로젝트 전체 설정 창. |
| `All Settings` | 모든 설정 범주를 대상으로 보기. |
| `Search in all settings` | 전체 설정에서 이름을 검색하는 입력 칸. |
| `Project / Engine` | 프로젝트 관련 설정 묶음 / 엔진 기능 설정 묶음. |
| `Import / Export` | 설정 파일 가져오기 / 내보내기. 에셋 Import와 작업 대상이 다르다. |
| `Rendering` | 화면을 그리는 렌더링 관련 설정. |
| `Direct Lighting` | 빛이 표면에 직접 닿는 조명 관련 설정. |
| `Material Graph` | 재질의 빛 반응을 노드로 연결하는 그래프. |
| `Substrate` | 여러 재질층과 빛 반응을 구성하는 재질 체계. |
| `Substrate Slab BSDF` | 재질 한 층의 빛 반응을 계산하는 노드. |
| `Vertical Layer` | 위쪽 코팅층과 아래쪽 바탕층을 쌓는 연산. |
| `Background / Foreground` | 아래층 / 위층 입력. |
| `Roughness` | 표면의 거친 정도. 낮으면 매끈한 반사가, 높으면 퍼진 반사가 나타난다. |
| `Thickness` | 코팅층 두께를 정하는 값. |
| `Base Color / Normal` | 기본 표면 색 / 표면 방향. |
| `Front Material` | Substrate의 최종 재질 결과를 받는 출력 핀. |
| `Toon BSDF / Toon Profile` | 만화풍 빛 반응 / 단계·경계 표현을 정한 설정 자료. |
| `Constant / Linear` | 단계가 끊기는 변화 / 직선적으로 이어지는 변화. |
| `Ink / Soft` | 이번 프로젝트의 선명한 단계 / 부드러운 단계 프로필 이름. |
| `out of budget ... simplified` | 재질 미리보기가 계산 예산을 넘어 단순화됐다는 경고. 노드 연결과 실제 실행 결과를 함께 확인하며, 경고를 성공 표시로 읽지 않는다. |
| `M_LabCoatedCopper / M_LabToonSoft` | 실험용 코팅 구리 재질 / 부드러운 Toon 재질 이름. |



<!-- korean-ui-explanations -->


<a id="code-index"></a>

## 이 장면을 만든 코드

아래는 제작과 검증에 사용한 전체 코드에 한국어 주석을 더한 설명본이다. `.py`는 언리얼 에디터에서 실행하는 제작·검사 코드, `.cpp`와 `.h`는 프로젝트에 넣어 빌드하는 코드다. 파일마다 첫 주석에 역할과 입력 조건을 적었다.


<a id="source-lab-lab-build-material-scene-py"></a>

### lab_build_material_scene.py

```python
# 파일 역할: 에셋·그래프·장면을 구성하는 제작 작업. 이미 있는 원본을 대상으로 재실행해도 되는지 가드 조건부터 읽는다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Maps/FL_14_SubstrateToon
#   /Game/FeatureLab/Materials/
#   /Game/FeatureLab/Lighting/M_LabRoomWhite
#   /Game/FeatureLab/Rigging/SKM_LabPuppet
#   /Game/FeatureLab/Rigging/Animations/AS_PuppetExpressions_Baked
#   /Game/FeatureLab/Crowds/BP_LabCrowdGameMode

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, unreal
from pathlib import Path

root = Path(unreal.Paths.project_dir()).resolve()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
assert (
    root.name == "EpicFeatureLab"
    and not unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
)
lib = unreal.EditorAssetLibrary
# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
editor = unreal.get_editor_subsystem(unreal.LevelEditorSubsystem)
# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
actors = unreal.get_editor_subsystem(unreal.EditorActorSubsystem)
path = "/Game/FeatureLab/Maps/FL_14_SubstrateToon"
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world().get_name() != 'FL_14_SubstrateToon' 작업할 맵을 연다. 현재 맵과 다른 맵이므로 실행 중인 PIE를 먼저 끝내는지 확인한다.
if (
    unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world().get_name()
    != "FL_14_SubstrateToon"
):
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 작업할 맵을 연다. 현재 맵과 다른 맵이므로 실행 중인 PIE를 먼저 끝내는지 확인한다.
    assert editor.load_level(path) if lib.does_asset_exist(path) else editor.new_level(path)


# 함수 actor: 이름은 actor이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: cls, label, position 지정한 클래스의 실제 액터를 편집 장면에 만든다. 에셋 파일 생성과는 다르다.
def actor(cls, label, position):
    # 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
    found = [a for a in actors.get_all_level_actors() if a.get_actor_label() == label]
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert len(found) <= 1
    # 지정한 클래스의 실제 액터를 편집 장면에 만든다. 에셋 파일 생성과는 다르다.
    item = found[0] if found else actors.spawn_actor_from_class(cls, unreal.Vector(*position))
    item.set_actor_label(label)
    item.tags = ["FeatureLab_Owned", "FeatureLab_14"]
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return item


floor = actor(unreal.StaticMeshActor, "FL14_Stage", (0, 0, -15))
floor.static_mesh_component.set_static_mesh(lib.load_asset("/Engine/BasicShapes/Cube"))
floor.set_actor_scale3d(unreal.Vector(14, 10, 0.3))
# 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
floor.static_mesh_component.set_material(
    0, lib.load_asset("/Game/FeatureLab/Lighting/M_LabRoomWhite")
)


# 함수 sphere: 이름은 sphere이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: label, pos 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
def sphere(label, pos):
    obj = actor(unreal.StaticMeshActor, label, pos)
    obj.static_mesh_component.set_static_mesh(lib.load_asset("/Engine/BasicShapes/Sphere"))
    obj.set_actor_scale3d(unreal.Vector(2.3, 2.3, 2.3))
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return obj


coated = sphere("FL14_CoatedCopper", (-270, 0, 115))
reference = sphere("FL14_SingleSlabReference", (0, 0, 115))
puppet = actor(unreal.SkeletalMeshActor, "FL14_ToonCharacter", (290, 0, 0))
puppet.set_actor_scale3d(unreal.Vector(1.7, 1.7, 1.7))
# 액터 방향을 바꾼다. 위치 이동과 구분한다.
puppet.set_actor_rotation(unreal.Rotator(pitch=0, yaw=180, roll=0), False)
body = puppet.skeletal_mesh_component
body.set_skeletal_mesh_asset(lib.load_asset("/Game/FeatureLab/Rigging/SKM_LabPuppet"))
# 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 visibility_based_anim_tick_option이다.
body.set_editor_property(
    "visibility_based_anim_tick_option",
    unreal.VisibilityBasedAnimTickOption.ALWAYS_TICK_POSE_AND_REFRESH_BONES,
)
body.set_update_animation_in_editor(True)
# 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
body.override_animation_data(
    lib.load_asset("/Game/FeatureLab/Rigging/Animations/AS_PuppetExpressions_Baked"),
    True,
    True,
    0.0,
    1.0,
)
sun = actor(unreal.DirectionalLight, "FL14_KeyLight", (0, 0, 700))
sun.get_component_by_class(unreal.DirectionalLightComponent).set_mobility(
    unreal.ComponentMobility.MOVABLE
)
# 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 intensity이다.
sun.get_component_by_class(unreal.DirectionalLightComponent).set_editor_property(
    "intensity", 5.0
)
sky = actor(unreal.SkyLight, "FL14_Sky", (0, 0, 500))
sky.get_component_by_class(unreal.SkyLightComponent).set_editor_property("intensity", 1.2)
actor(unreal.SkyAtmosphere, "FL14_Atmosphere", (0, 0, 0))
rim = actor(unreal.RectLight, "FL14_Softbox", (-550, -350, 400))
# 액터 방향을 바꾼다. 위치 이동과 구분한다.
rim.set_actor_rotation(
    unreal.MathLibrary.find_look_at_rotation(
        rim.get_actor_location(), unreal.Vector(-100, 0, 100)
    ),
    False,
)
light = rim.get_component_by_class(unreal.RectLightComponent)
light.set_intensity_units(unreal.LightUnits.LUMENS)
light.set_intensity(5000.0)
light.set_editor_property("source_width", 300.0)
light.set_editor_property("source_height", 300.0)


# 함수 camera: 이름은 camera이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: label, position, target, focal 액터 방향을 바꾼다. 위치 이동과 구분한다.
def camera(label, position, target, focal):
    item = actor(unreal.CineCameraActor, label, position)
    # 액터 방향을 바꾼다. 위치 이동과 구분한다.
    item.set_actor_rotation(
        unreal.MathLibrary.find_look_at_rotation(
            item.get_actor_location(), unreal.Vector(*target)
        ),
        False,
    )
    component = item.get_cine_camera_component()
    component.set_editor_property("current_focal_length", focal)
    focus = component.get_editor_property("focus_settings")
    focus.set_editor_property("focus_method", unreal.CameraFocusMethod.DISABLE)
    component.set_editor_property("focus_settings", focus)
    component.set_editor_property("constrain_aspect_ratio", False)
    pp = component.get_editor_property("post_process_settings")
    # 여러 속성을 이름:값 사전으로 한 번에 설정한다. 각 항목이 개별 설정과 대응한다.
    pp.set_editor_properties(
        {
            "override_auto_exposure_min_brightness": True,
            "override_auto_exposure_max_brightness": True,
            "auto_exposure_min_brightness": 2.0,
            "auto_exposure_max_brightness": 2.0,
            "override_auto_exposure_bias": True,
            "auto_exposure_bias": 0.0,
        }
    )
    component.set_editor_property("post_process_settings", pp)
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return item


overview = camera("FL14_Overview", (0, -1250, 390), (0, 0, 130), 30.0)
detail = camera("FL14_ToonDetail", (290, -1050, 420), (290, 0, 280), 45.0)
controller = actor(unreal.FeatureLabMaterialActor, "FL14_MaterialControls", (0, 0, 0))
folder = "/Game/FeatureLab/Materials/"
# 여러 속성을 이름:값 사전으로 한 번에 설정한다. 각 항목이 개별 설정과 대응한다.
controller.set_editor_properties(
    {
        "coated_target": coated,
        "reference_target": reference,
        "puppet_target": puppet,
        "light_target": sun,
        "overview_camera": overview,
        "detail_camera": detail,
        "coated_material": lib.load_asset(folder + "M_LabCoatedCopper"),
        "reference_material": lib.load_asset(folder + "M_LabCopperBase"),
        "toon_ink": lib.load_asset(folder + "M_LabToonInk"),
        "toon_soft": lib.load_asset(folder + "M_LabToonSoft"),
    }
)
controller.prepare_materials()
actor(unreal.PlayerStart, "FL14_ViewerStart", (0, -1250, 390))
# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 편집 중인 월드를 얻는다. 게임 실행 월드와 다르므로 대상을 혼동하지 않는다.
world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world()
# 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 default_game_mode이다.
world.get_world_settings().set_editor_property(
    "default_game_mode",
    lib.load_asset("/Game/FeatureLab/Crowds/BP_LabCrowdGameMode").generated_class(),
)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert editor.save_current_level()
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
RESULT = {
    "status": "scene_saved_render_validation_pending",
    "map": path,
    "controller": json.loads(controller.capture_materials()),
    "rendering": json.loads(unreal.FeatureLabRuntimeLibrary.inspect_lab_rendering()),
    "controls": {
        "1": "Thin/thick layered coat",
        "2": "Polished/rough finish",
        "3": "Official Toon Ink/Soft profiles",
        "4": "Copper/orange and blue palettes",
        "L": "Rotate real light",
        "C": "Overview/character detail",
        "P": "Pause character animation",
        "R": "Reset",
    },
}
(root / "Evidence/case14-material-scene.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-build-substrate-materials-py"></a>

### lab_build_substrate_materials.py

```python
# 파일 역할: 에셋·그래프·장면을 구성하는 제작 작업. 이미 있는 원본을 대상으로 재실행해도 되는지 가드 조건부터 읽는다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Materials

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, unreal
from pathlib import Path

root = Path(unreal.Paths.project_dir()).resolve()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
assert (
    root.name == "EpicFeatureLab"
    and not unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
)
lib = unreal.EditorAssetLibrary
mel = unreal.MaterialEditingLibrary
assets = unreal.AssetToolsHelpers.get_asset_tools()
folder = "/Game/FeatureLab/Materials"
profiles = {}
materials = {}
for style, name in [(0, "TP_LabInk"), (1, "TP_LabSoft")]:
    profile = lib.load_asset(folder + "/" + name)
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not profile 지정한 경로·이름·종류로 새 에셋을 만든다. 같은 이름의 원본이 있는지 검사하는 코드와 함께 읽는다.
    if not profile:
        # 지정한 경로·이름·종류로 새 에셋을 만든다. 같은 이름의 원본이 있는지 검사하는 코드와 함께 읽는다.
        profile = assets.create_asset(
            name, folder, unreal.ToonProfile, unreal.ToonProfileFactory()
        )
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert profile
    # JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
    profiles[name] = json.loads(
        unreal.FeatureLabRuntimeLibrary.configure_lab_toon_profile(profile, style)
    )
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
    assert lib.save_loaded_asset(profile, False)


# 함수 node: 이름은 node이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: mat, cls, x, y 여러 속성을 이름:값 사전으로 한 번에 설정한다. 각 항목이 개별 설정과 대응한다.
def node(mat, cls, x, y, **props):
    n = mel.create_material_expression(mat, cls, x, y)
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert n
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: props 여러 속성을 이름:값 사전으로 한 번에 설정한다. 각 항목이 개별 설정과 대응한다.
    if props:
        # 여러 속성을 이름:값 사전으로 한 번에 설정한다. 각 항목이 개별 설정과 대응한다.
        n.set_editor_properties(props)
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return n


# 함수 scalar: 이름은 scalar이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: mat, name, value, x, y
def scalar(mat, name, value, x, y):
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return node(
        mat,
        unreal.MaterialExpressionScalarParameter,
        x,
        y,
        parameter_name=name,
        default_value=value,
    )


# 함수 vector: 이름은 vector이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: mat, name, value, x, y
def vector(mat, name, value, x, y):
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return node(
        mat,
        unreal.MaterialExpressionVectorParameter,
        x,
        y,
        parameter_name=name,
        default_value=unreal.LinearColor(r=value[0], g=value[1], b=value[2], a=1),
    )


# 함수 constant: 이름은 constant이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: mat, value, x, y
def constant(mat, value, x, y):
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return node(
        mat,
        unreal.MaterialExpressionConstant3Vector,
        x,
        y,
        constant=unreal.LinearColor(r=value[0], g=value[1], b=value[2], a=1),
    )


# 함수 connect: 이름은 connect이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: source, target, pin
def connect(source, target, pin):
    actual = list(mel.get_material_expression_input_names(target))
    normalized = lambda s: "".join(c.lower() for c in s if c.isalnum())
    matches = [n for n in actual if normalized(n) == normalized(pin)]
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert len(matches) == 1, (pin, actual)
    assert mel.connect_material_expressions(source, "", target, matches[0])


# 함수 create: 이름은 create이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: name 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
def create(name):
    existing = lib.load_asset(folder + "/" + name)
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: existing
    if existing:
        # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
        return existing, False
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다. 지정한 경로·이름·종류로 새 에셋을 만든다. 같은 이름의 원본이 있는지 검사하는 코드와 함께 읽는다.
    return assets.create_asset(name, folder, unreal.Material, unreal.MaterialFactoryNew()), True


for name, layered in [("M_LabCopperBase", False), ("M_LabCoatedCopper", True)]:
    mat, fresh = create(name)
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert mat
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: fresh
    if fresh:
        bottom = node(mat, unreal.MaterialExpressionSubstrateSlabBSDF, -250, 350)
        zero = constant(mat, (0, 0, 0), -700, 100)
        tint = vector(mat, "MetalTint", (0.95, 0.64, 0.54), -700, 300)
        rough = scalar(mat, "BaseRoughness", 0.18, -700, 450)
        connect(zero, bottom, "Diffuse Albedo")
        connect(tint, bottom, "F0")
        connect(rough, bottom, "Roughness")
        output = bottom
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: layered
        if layered:
            top = node(mat, unreal.MaterialExpressionSubstrateSlabBSDF, -250, -250)
            f0 = constant(mat, (0.04, 0.04, 0.04), -700, -450)
            coat = scalar(mat, "CoatRoughness", 0.08, -700, -300)
            mfp = constant(mat, (1.0, 0.3, 0.08), -700, -150)
            connect(zero, top, "Diffuse Albedo")
            connect(f0, top, "F0")
            connect(coat, top, "Roughness")
            connect(mfp, top, "SSS MFP")
            layer = node(mat, unreal.MaterialExpressionSubstrateVerticalLayering, 150, 0)
            thickness = scalar(mat, "CoatThickness", 0.02, -250, 650)
            connect(top, layer, "Top")
            connect(bottom, layer, "Bottom")
            connect(thickness, layer, "Top Thickness")
            output = layer
        # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
        assert mel.connect_material_property(
            output, "", unreal.MaterialProperty.MP_FRONT_MATERIAL
        )
        mel.recompile_material(mat)
        # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
        assert lib.save_loaded_asset(mat, False)
    materials[name] = {
        "asset": mat.get_path_name(),
        "type": (
            "Two real Substrate Slab BSDFs with Vertical Layering"
            if layered
            else "Single Substrate Slab reference"
        ),
    }
for name, profile_name in [("M_LabToonInk", "TP_LabInk"), ("M_LabToonSoft", "TP_LabSoft")]:
    mat, fresh = create(name)
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert mat
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: fresh
    if fresh:
        # 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
        toon = node(
            mat,
            unreal.MaterialExpressionSubstrateToonBSDF,
            0,
            0,
            toon_profile=lib.load_asset(folder + "/" + profile_name),
        )
        color = vector(mat, "ToonColor", (0.75, 0.22, 0.04), -400, 0)
        rough = scalar(mat, "ToonRoughness", 0.5, -400, 180)
        connect(color, toon, "Base Color")
        connect(rough, toon, "Roughness")
        # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
        assert mel.connect_material_property(
            toon, "", unreal.MaterialProperty.MP_FRONT_MATERIAL
        )
        mel.recompile_material(mat)
        # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
        assert lib.save_loaded_asset(mat, False)
    materials[name] = {
        "asset": mat.get_path_name(),
        "type": "Official MaterialExpressionSubstrateToonBSDF",
        "profile": folder + "/" + profile_name,
    }
    for keyword in ["SKELETAL_MESH", "MORPH_TARGETS"]:
        matches = [n for n in dir(unreal.MaterialUsage) if keyword in n]
        # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
        assert len(matches) == 1, matches
        mel.set_base_material_usage(mat, getattr(unreal.MaterialUsage, matches[0]), True)
    mel.recompile_material(mat)
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
    assert lib.save_loaded_asset(mat, False)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
RESULT = {
    "status": "assets_saved_compilation_and_render_validation_pending",
    "profiles": profiles,
    "materials": materials,
    "rendering": json.loads(unreal.FeatureLabRuntimeLibrary.inspect_lab_rendering()),
    "renderer_format": "Blendable Substrate GBuffer (project setting0)",
    "authoring_scope": "Owned assets only; original reference materials unchanged",
}
(root / "Evidence/case14-material-authoring.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-capture-material-detail-py"></a>

### lab_capture_material_detail.py

```python
# 파일 역할: EpicFeatureLab의 lab_capture_material_detail 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, unreal

# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
RESULT = json.loads(
    unreal.FeatureLabRuntimeLibrary.capture_lab_viewport("case14-keyboard-detail.png")
)
```

<a id="source-lab-lab-debug-material-scene-py"></a>

### lab_debug_material_scene.py

```python
# 파일 역할: EpicFeatureLab의 lab_debug_material_scene 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Materials/M_LabToonInk

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, unreal
from pathlib import Path

# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert world
controller = next(
    a for a in unreal.ObjectIterator(unreal.FeatureLabMaterialActor) if a.get_world() == world
)
# JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
data = json.loads(controller.capture_materials())
while data["light_step"] != 2:
    controller.rotate_light()
    # JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
    data = json.loads(controller.capture_materials())
mat = unreal.load_asset("/Game/FeatureLab/Materials/M_LabToonInk")
flags = {}
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 name의 값이 매번 바뀐다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다.
for name in [
    "used_with_skeletal_mesh",
    "automatically_set_usage_in_editor",
    "shading_model",
    "use_material_attributes",
]:
    # 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다.
    try:
        # 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다.
        flags[name] = str(mat.get_editor_property(name))
    except Exception:
        pass
RESULT = {"state": data, "material_flags": flags}
(Path(unreal.Paths.project_dir()) / "Evidence/case14-lighting-diagnostic.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-peek-materials-py"></a>

### lab_peek_materials.py

```python
# 파일 역할: 현재 에셋·객체·실행 상태를 읽어 기록하는 관찰 작업.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, unreal
from pathlib import Path

# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
actor = next(
    a for a in unreal.ObjectIterator(unreal.FeatureLabMaterialActor) if a.get_world() == world
)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
RESULT = json.loads(actor.capture_materials())
RESULT["actual_light_yaw"] = actor.get_editor_property("light_target").get_actor_rotation().yaw
Path(unreal.Paths.project_dir(), "Evidence/case14-keyboard-last-state.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-save-checkpoint-py"></a>

### lab_save_checkpoint.py

```python
# 파일 역할: EpicFeatureLab의 lab_save_checkpoint 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

import json
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
assert root.name == "EpicFeatureLab"
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
assert not unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 filename의 값이 매번 바뀐다. JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
for filename in [
    "case02-ai-mood-batch.json",
    "case02-ai-mood-runtime.json",
    "case04-runtime-validation.json",
    "case05-gasp-extended.json",
    "case05-network-prediction.json",
    "case05-bench-runtime.json",
    "case05-keyboard-jump.json",
    "case06-autoencoder-training.json",
    "case06-uaf-runtime-validation.json",
    "case06-animgen-controller-validation.json",
    "case06-keyboard-reset-sync.json",
    "case07-mutable-mover.json",
]:
    path = root / "Evidence" / filename
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: path.exists() JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
    if path.exists():
        assert json.loads(path.read_text(encoding="utf-8-sig")).get("status") not in [
            "running",
            "processing",
            "armed",
        ], filename
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
assert not json.loads(
    (root / "Evidence" / "case05-network-session.json").read_text(encoding="utf-8")
)["restore_required"]
crowd_build = root / "Evidence/case08-crowd-collection.json"
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 filename의 값이 매번 바뀐다. JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
for filename in [
    "case08-runtime-validation.json",
    "case08-texture-sources.json",
    "case08-performance-observation.json",
    "case09-runtime-validation.json",
    "case10-pcg-editor-validation.json",
    "case10-pcg-runtime-validation.json",
    "case11-editor-validation.json",
    "case11-movement-validation.json",
    "case11-pcg-validation.json",
    "case12-runtime-validation.json",
    "case12-continuous-runtime-validation.json",
    "case13-runtime-validation.json",
    "case14-runtime-validation.json",
]:
    path = root / "Evidence" / filename
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: path.exists() JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
    if path.exists():
        assert json.loads(path.read_text(encoding="utf-8-sig")).get("status") not in [
            "running",
            "processing",
            "requesting",
        ], filename
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: crowd_build.exists() JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
if crowd_build.exists():
    assert json.loads(crowd_build.read_text(encoding="utf-8-sig")).get("status") not in [
        "building",
        "unpacking",
    ], "Wait for the active crowd collection build"
saved = unreal.EditorAssetLibrary.save_directory("/Game", True, True)
# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
level_saved = unreal.get_editor_subsystem(unreal.LevelEditorSubsystem).save_current_level()
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "status": "saved" if saved and level_saved else "failed",
    "dirty_project_assets_saved": saved,
    "current_level_saved": level_saved,
}
(root / "Evidence" / "case00-last-save.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-save-shutdown-py"></a>

### lab_save_shutdown.py

```python
# 파일 역할: EpicFeatureLab의 lab_save_shutdown 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

import json
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
assert root.name == "EpicFeatureLab"
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
assert not unreal.get_editor_subsystem(
    unreal.UnrealEditorSubsystem
).get_game_world(), "Stop PIE before restarting the owned editor"
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 filename의 값이 매번 바뀐다. JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
for filename in [
    "case01-fictional-rig.json",
    "case01-body-fit-rig.json",
    "case01-digital-body-conform.json",
    "case01-digital-body-repeat.json",
    "case02-audio-performance.json",
    "case02-ai-mood-batch.json",
    "case02-ai-mood-runtime.json",
    "case04-runtime-validation.json",
    "case05-gasp-core.json",
    "case07-mutable-cycle.json",
    "case10-pcg-cycle.json",
]:
    path = root / "Evidence" / filename
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: path.is_file() JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
    if path.is_file():
        status = json.loads(path.read_text(encoding="utf-8-sig")).get("status")
        assert status not in ["running", "processing"], "Wait for active test: " + filename
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 filename의 값이 매번 바뀐다. JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
for filename in [
    "case05-gasp-extended.json",
    "case05-network-prediction.json",
    "case06-autoencoder-training.json",
    "case06-uaf-runtime-validation.json",
    "case06-animgen-controller-validation.json",
    "case07-mutable-mover.json",
]:
    path = root / "Evidence" / filename
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: path.is_file() JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
    if path.is_file():
        assert json.loads(path.read_text(encoding="utf-8-sig")).get("status") not in [
            "running",
            "processing",
        ], filename
crowd_build = root / "Evidence/case08-crowd-collection.json"
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 filename의 값이 매번 바뀐다. JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
for filename in [
    "case08-runtime-validation.json",
    "case08-texture-sources.json",
    "case08-performance-observation.json",
    "case09-runtime-validation.json",
    "case10-pcg-editor-validation.json",
    "case10-pcg-runtime-validation.json",
    "case11-editor-validation.json",
    "case11-movement-validation.json",
    "case11-pcg-validation.json",
    "case12-runtime-validation.json",
    "case12-continuous-runtime-validation.json",
    "case13-runtime-validation.json",
    "case14-runtime-validation.json",
]:
    path = root / "Evidence" / filename
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: path.exists() JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
    if path.exists():
        assert json.loads(path.read_text(encoding="utf-8-sig")).get("status") not in [
            "running",
            "processing",
            "requesting",
        ], filename
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: crowd_build.exists() JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
if crowd_build.exists():
    assert json.loads(crowd_build.read_text(encoding="utf-8-sig")).get("status") not in [
        "building",
        "unpacking",
    ], "Wait for the active crowd collection build"
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
assert not json.loads(
    unreal.FeatureLabRuntimeLibrary.manage_lab_sandbox("inspect", "", [])
).get("active"), "Leave the owned sandbox before saving original project content"
saved = unreal.EditorAssetLibrary.save_directory("/Game", True, True)
assert saved, "Project assets must be saved before shutdown"
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "saved_project_content": saved,
    "shutdown_requested": True,
    "preservation_policy": "No RealityScan or markerless data cleanup",
}
(root / "Evidence" / "native-build-shutdown.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
unreal.SystemLibrary.quit_editor()
```

<a id="source-lab-lab-test-material-runtime-py"></a>

### lab_test_material_runtime.py

```python
# 파일 역할: 완성 결과를 실제 값과 비교하는 검증 작업. 생성 코드와 검사 코드를 구분한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import builtins, json, time, traceback, unreal
from pathlib import Path

root = Path(unreal.Paths.project_dir()).resolve()
# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert world
controller = next(
    a for a in unreal.ObjectIterator(unreal.FeatureLabMaterialActor) if a.get_world() == world
)
assert getattr(builtins, "_fl14_runtime", {}).get("status") != "running"
phases = [
    "baseline",
    "thick_coat",
    "rough_finish",
    "soft_toon",
    "blue_palette",
    "rotated_light",
    "detail_view",
    "animation_playing",
    "animation_paused",
    "animation_resumed",
    "reset",
]
state = {
    "status": "running",
    "phase": 0,
    "phase_time": unreal.GameplayStatics.get_time_seconds(world),
    "started": time.time(),
    "checks": [],
    "snapshots": {},
    "captures": {},
    "handle": None,
}
builtins._fl14_runtime = state
target = root / "Evidence/case14-runtime-validation.json"


# 함수 check: 이름은 check이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: name, condition, actual 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
def check(name, condition, actual=None):
    state["checks"].append({"name": name, "passed": bool(condition), "actual": actual})
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert condition, name


# 함수 write: 이름은 write이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: 별도 입력 없음 문자열을 파일에 기록한다. 결과 JSON이나 보고서인지, 실제 코드·설정 파일인지 경로를 확인한다.
def write():
    # 문자열을 파일에 기록한다. 결과 JSON이나 보고서인지, 실제 코드·설정 파일인지 경로를 확인한다.
    target.write_text(
        json.dumps({k: v for k, v in state.items() if k != "handle"}, indent=2),
        encoding="utf-8",
    )


# 함수 finish: 이름은 finish이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: status 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
def finish(status):
    state["status"] = status
    state["elapsed_seconds"] = time.time() - state["started"]
    unreal.unregister_slate_post_tick_callback(state["handle"])
    state["handle"] = None
    controller.reset_materials()
    write()


# 함수 enter: 이름은 enter이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: name
def enter(name):
    if name == "animation_paused":
        controller.toggle_pause()
    elif name == "animation_resumed":
        controller.toggle_pause()
    else:
        controller.reset_materials()
        if name != "animation_playing":
            controller.toggle_pause()
        if name == "thick_coat":
            controller.toggle_coat()
        elif name == "rough_finish":
            controller.toggle_finish()
        elif name == "soft_toon":
            controller.toggle_toon()
        elif name == "blue_palette":
            controller.toggle_palette()
        elif name == "rotated_light":
            controller.rotate_light()
        elif name == "detail_view":
            controller.toggle_view()
    state["phase_time"] = unreal.GameplayStatics.get_time_seconds(world)
    write()


# 함수 tick: 이름은 tick이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: dt JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
def tick(dt):
    if state.get("in_tick") or state["status"] != "running":
        # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
        return
    state["in_tick"] = True
    # 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다. JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
    try:
        if time.time() - state["started"] > 180:
            raise TimeoutError("Material runtime validation timed out")
        now = unreal.GameplayStatics.get_time_seconds(world)
        if now - state["phase_time"] < 2.5:
            # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
            return
        name = phases[state["phase"]]
        # JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
        snap = json.loads(controller.capture_materials())
        light = controller.get_editor_property("light_target")
        snap["actual_light_yaw"] = light.get_actor_rotation().yaw
        state["snapshots"][name] = snap
        # 차이의 부호를 없애 크기만 비교한다. 오차 허용 범위 검사에 자주 사용한다.
        check(
            name + ": actual light transform matches requested direction",
            abs(snap["actual_light_yaw"] - (-40 + 65 * (1 if name == "rotated_light" else 0)))
            < 0.01,
            snap["actual_light_yaw"],
        )
        check(
            name + ": Substrate renderer truly enabled",
            unreal.SystemLibrary.get_console_variable_int_value("r.Substrate") == 1,
        )
        # 차이의 부호를 없애 크기만 비교한다. 오차 허용 범위 검사에 자주 사용한다.
        check(
            name + ": coat thickness reaches actual material instance",
            abs(snap["coat_thickness"] - (0.8 if name == "thick_coat" else 0.02)) < 1e-5,
            snap["coat_thickness"],
        )
        # 차이의 부호를 없애 크기만 비교한다. 오차 허용 범위 검사에 자주 사용한다.
        check(
            name + ": finish reaches actual material instance",
            abs(snap["coat_roughness"] - (0.6 if name == "rough_finish" else 0.08)) < 1e-5
            and abs(snap["base_roughness"] - (0.55 if name == "rough_finish" else 0.18)) < 1e-5,
        )
        check(
            name + ": selected official Toon material matches style",
            (
                snap["toon_parent"].endswith("M_LabToonSoft.M_LabToonSoft")
                if name == "soft_toon"
                else snap["toon_parent"].endswith("M_LabToonInk.M_LabToonInk")
            ),
        )
        check(name + ": animated skinned character remains bound", "animation_time" in snap)
        if name == "animation_playing":
            check("Real character animation advances", snap["animation_time"] > 0.1)
        elif name == "animation_paused":
            # 차이의 부호를 없애 크기만 비교한다. 오차 허용 범위 검사에 자주 사용한다.
            check(
                "Pause freezes exact animation position",
                abs(
                    snap["animation_time"]
                    - state["snapshots"]["animation_playing"]["animation_time"]
                )
                < 0.05,
                [
                    state["snapshots"]["animation_playing"]["animation_time"],
                    snap["animation_time"],
                ],
            )
        elif name == "animation_resumed":
            # 차이의 부호를 없애 크기만 비교한다. 오차 허용 범위 검사에 자주 사용한다.
            check(
                "Animation resumes from paused position",
                abs(
                    snap["animation_time"]
                    - state["snapshots"]["animation_paused"]["animation_time"]
                )
                > 0.1,
            )
        # JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
        image = json.loads(
            unreal.FeatureLabRuntimeLibrary.capture_lab_viewport("case14-" + name + ".png")
        )
        check(name + ": actual GPU image saved", image.get("saved"), image)
        state["captures"][name] = image
        if name == "reset":
            check(
                "Reset returns material lighting and camera states",
                not any(
                    snap[k]
                    for k in [
                        "thick_coat",
                        "rough_finish",
                        "soft_toon",
                        "blue_palette",
                        "detail_view",
                    ]
                )
                and snap["light_step"] == 0,
            )
            finish("controls_passed_render_analysis_pending")
            # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
            return
        state["phase"] += 1
        enter(phases[state["phase"]])
    except Exception:
        state["error"] = traceback.format_exc()
        finish("failed")
    finally:
        state["in_tick"] = False


unreal.log("FL14_VALIDATION_BEGIN MorphTargets and SkeletalMesh usages enabled")
enter(phases[0])
state["handle"] = unreal.register_slate_post_tick_callback(tick)
write()
RESULT = {"status": "running", "report": str(target), "phases": phases}
```

<a id="source-lab-lab-verify-material-roundtrip-py"></a>

### lab_verify_material_roundtrip.py

```python
# 파일 역할: 완성 결과를 실제 값과 비교하는 검증 작업. 생성 코드와 검사 코드를 구분한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Materials/

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, unreal
from pathlib import Path

root = Path(unreal.Paths.project_dir()).resolve()
# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
sub = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem)
# 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
game = sub.get_game_world()
# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 편집 중인 월드를 얻는다. 게임 실행 월드와 다르므로 대상을 혼동하지 않는다.
world = game or sub.get_editor_world()
target = root / "Evidence/case14-roundtrip-validation.json"
actor = next(
    a for a in unreal.ObjectIterator(unreal.FeatureLabMaterialActor) if a.get_world() == world
)
checks = json.loads(target.read_text(encoding="utf-8-sig"))["checks"] if game else []


# 함수 check: 이름은 check이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: name, value, actual 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
def check(name, value, actual=None):
    checks.append({"name": name, "passed": bool(value), "actual": actual})


# JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
snap = json.loads(actor.capture_materials())
light = actor.get_editor_property("light_target")
puppet = actor.get_editor_property("puppet_target")
body = puppet.get_component_by_class(unreal.SkeletalMeshComponent)
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not game
if not game:
    check(
        "Fresh process reopens saved Substrate/Toon map",
        world.get_name() == "FL_14_SubstrateToon",
    )
    check(
        "Actual Substrate renderer remains enabled",
        unreal.SystemLibrary.get_console_variable_int_value("r.Substrate") == 1,
    )
    # 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 mobility이다.
    check(
        "Directional light remains movable",
        light.get_component_by_class(unreal.DirectionalLightComponent).get_editor_property(
            "mobility"
        )
        == unreal.ComponentMobility.MOVABLE,
    )
    # 차이의 부호를 없애 크기만 비교한다. 오차 허용 범위 검사에 자주 사용한다.
    check(
        "Toon character faces the camera after restart",
        abs(abs(puppet.get_actor_rotation().yaw) - 180) < 0.01,
    )
    # 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 anim_to_play이다.
    check(
        "Baked animation persists on real skeletal component",
        body.get_editor_property("animation_data")
        .get_editor_property("anim_to_play")
        .get_name()
        == "AS_PuppetExpressions_Baked",
    )
    # 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 coated_material이다.
    check(
        "Layered and reference materials remain assigned",
        bool(actor.get_editor_property("coated_material"))
        and bool(actor.get_editor_property("reference_material")),
    )
    # 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
    check(
        "Both official Toon profiles remain saved",
        all(
            unreal.load_asset("/Game/FeatureLab/Materials/" + n)
            for n in ["TP_LabInk", "TP_LabSoft"]
        ),
    )
else:
    actor.toggle_coat()
    actor.toggle_toon()
    actor.rotate_light()
    # JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
    changed = json.loads(actor.capture_materials())
    # 차이의 부호를 없애 크기만 비교한다. 오차 허용 범위 검사에 자주 사용한다.
    check(
        "Coating and official Toon switches resume after restart",
        changed["thick_coat"]
        and changed["soft_toon"]
        and abs(changed["coat_thickness"] - 0.8) < 1e-5,
    )
    # 차이의 부호를 없애 크기만 비교한다. 오차 허용 범위 검사에 자주 사용한다.
    check(
        "Light actually rotates after restart", abs(light.get_actor_rotation().yaw - 25) < 0.01
    )
    actor.reset_materials()
    # JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
    reset = json.loads(actor.capture_materials())
    # 차이의 부호를 없애 크기만 비교한다. 오차 허용 범위 검사에 자주 사용한다.
    check(
        "All controls reset after restart",
        not any(
            reset[k]
            for k in [
                "thick_coat",
                "rough_finish",
                "soft_toon",
                "blue_palette",
                "detail_view",
                "paused",
            ]
        )
        and reset["light_step"] == 0
        and abs(reset["coat_thickness"] - 0.02) < 1e-5,
    )
    # JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
    capture = json.loads(
        unreal.FeatureLabRuntimeLibrary.capture_lab_viewport("case14-reopened.png")
    )
    check("Reopened materials produce actual GPU image", capture.get("saved"), capture)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "status": (
        ("passed" if game else "editor_passed_runtime_pending")
        if all(c["passed"] for c in checks)
        else "failed"
    ),
    "checks": checks,
}
target.write_text(json.dumps(RESULT, indent=2), encoding="utf-8")
```

<a id="source-source-mutablesample-featurelabrendering-cpp"></a>

### FeatureLabRendering.cpp

```cpp
// 파일 역할: 12~14번 GPU 화면 기록, 조명·간접광·층상 재질·Toon 비교
// 클래스=작업 종류, 객체=실제 한 개, 포인터(* 또는 TObjectPtr)=다른 객체를 가리키는 참조.
// nullptr은 대상 없음, bool은 참/거짓, TArray는 순서 있는 목록, FString은 문자열이다.
// WITH_EDITOR 구간은 에디터 빌드에서만 사용하는 코드다. 원본과의 토큰 비교 결과는 code-validation.json에 기록한다.

#include "FeatureLabRendering.h"
#include "FeatureLabRuntime.h"
#include "Engine/Engine.h"
#include "Engine/GameViewportClient.h"
#include "UnrealClient.h"
#include "ImageUtils.h"
#include "Misc/FileHelper.h"
#include "Misc/Paths.h"
#include "HAL/IConsoleManager.h"
#include "RHI.h"
#include "Serialization/JsonSerializer.h"
#include "Camera/CameraComponent.h"
#include "Components/RectLightComponent.h"
#include "Components/InputComponent.h"
#include "GameFramework/PlayerController.h"
#include "Kismet/GameplayStatics.h"
#include "Engine/ToonProfile.h"
#include "Components/MeshComponent.h"
#include "Components/SkeletalMeshComponent.h"
#include "Materials/MaterialInstanceDynamic.h"
#include "Animation/AnimSingleNodeInstance.h"
// 빌드 조건에 따라 포함할 코드를 고른다. 게임 실행 중의 if 조건과 달리 빌드할 때 구분한다.
#if WITH_EDITOR
#include "Editor.h"
#endif
namespace
{
FString RenderingJSON(TSharedRef<FJsonObject> O)
{
    FString S;
    auto W = TJsonWriterFactory<>::Create(&S);
    FJsonSerializer::Serialize(O, W);
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return S;
}
void RenderingCVar(const TCHAR *Name, int32 Value)
{
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (auto *V = IConsoleManager::Get().FindConsoleVariable(Name))
        V->Set(Value, ECVF_SetByConsole);
}
int32 RenderingCVarValue(const TCHAR *Name)
{
    auto *V = IConsoleManager::Get().FindConsoleVariable(Name);
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return V ? V->GetInt() : -999;
}
} // namespace
// 【함수 역할】현재 실제 GPU 뷰포트 픽셀을 PNG로 저장한다. case로 시작하는 PNG 이름만 허용해 이 도구의 기록 위치를 제한한다. 파일을 저장하는 진단 함수이며 게임의 표면을 새로 생성하는 함수가 아니다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
FString UFeatureLabRuntimeLibrary::CaptureLabViewport(const FString &Name)
{
    auto O = MakeShared<FJsonObject>();
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Name.StartsWith(TEXT("case")) || !Name.EndsWith(TEXT(".png")) ||
        Name.Contains(TEXT("/")) || Name.Contains(TEXT("\\")) || Name.Contains(TEXT("..")))
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return TEXT("{}");
    UGameViewportClient *Client = nullptr;
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (GEngine)
        // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
        for (const auto &Context : GEngine->GetWorldContexts())
            // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
            if (Context.WorldType == EWorldType::PIE && Context.GameViewport)
            {
                Client = Context.GameViewport;
                break;
            }
    FViewport *Viewport =
        Client ? Client->Viewport
               : (GEngine && GEngine->GameViewport ? GEngine->GameViewport->Viewport : nullptr);
// 빌드 조건에 따라 포함할 코드를 고른다. 게임 실행 중의 if 조건과 달리 빌드할 때 구분한다.
#if WITH_EDITOR
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Viewport && GEditor)
        Viewport = GEditor->GetActiveViewport();
#endif
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Viewport)
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return TEXT("{}");
    const FIntPoint Size = Viewport->GetSizeXY();
    TArray<FColor> Pixels;
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Viewport->ReadPixels(Pixels) || Pixels.Num() != Size.X * Size.Y)
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return TEXT("{}");
    TArray64<uint8> PNG;
    FImageUtils::PNGCompressImageArray(Size.X, Size.Y, Pixels, PNG);
    const FString Path =
        FPaths::ConvertRelativePathToFull(FPaths::ProjectDir() / TEXT("Evidence") / Name);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetBoolField(TEXT("saved"), FFileHelper::SaveArrayToFile(PNG, *Path));
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetStringField(TEXT("path"), Path);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("width"), Size.X);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("height"), Size.Y);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetStringField(
        TEXT("method"),
        TEXT("Native viewport GPU ReadPixels without viewport resizing or temporal-history reset"));
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return RenderingJSON(O);
}
// 【함수 역할】현재 객체와 실행 결과를 읽어 검증용 자료로 반환한다. 결과를 만드는 함수와 결과를 측정하는 함수를 구분해서 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
FString UFeatureLabRuntimeLibrary::InspectLabRendering()
{
    auto O = MakeShared<FJsonObject>();
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetBoolField(TEXT("rhi_supports_ray_tracing"), GRHISupportsRayTracing);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetBoolField(TEXT("rhi_supports_inline_ray_tracing"), GRHISupportsInlineRayTracing);
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (const TCHAR *Name :
         {TEXT("r.RayTracing"), TEXT("r.MegaLights.Supported"),
          TEXT("r.MegaLights.EnableForProject"), TEXT("r.MegaLights.Allowed"),
          TEXT("r.Lumen.FinalGatherMethod"), TEXT("sg.GlobalIlluminationQuality"),
          TEXT("r.AntiAliasingMethod"), TEXT("r.Substrate")})
        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
        O->SetNumberField(Name, RenderingCVarValue(Name));
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return RenderingJSON(O);
}
// 【함수 역할】클래스의 기본 부품과 기본값을 준비하는 생성자다. 이 시점에는 게임 월드가 모두 준비됐다고 가정하지 않는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
AFeatureLabLightingActor::AFeatureLabLightingActor()
{
    PrimaryActorTick.bCanEverTick = true;
    // 이 액터의 기본 컴포넌트를 만든다. 부품 생성 뒤 장면 부착·재질·충돌 설정이 이어지는지 확인한다.
    SetRootComponent(CreateDefaultSubobject<USceneComponent>(TEXT("Root")));
    // 이 액터의 기본 컴포넌트를 만든다. 부품 생성 뒤 장면 부착·재질·충돌 설정이 이어지는지 확인한다.
    Camera = CreateDefaultSubobject<UCameraComponent>(TEXT("Camera"));
    Camera->SetupAttachment(RootComponent);
    const FVector P(-1300, -1800, 900), Target(0, 50, 200);
    Camera->SetRelativeLocation(P);
    Camera->SetRelativeRotation((Target - P).Rotation());
    Camera->SetFieldOfView(55.f);
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (int32 I = 0; I < 64; ++I)
    {
        auto *Light =
            // 이 액터의 기본 컴포넌트를 만든다. 부품 생성 뒤 장면 부착·재질·충돌 설정이 이어지는지 확인한다.
            CreateDefaultSubobject<URectLightComponent>(*FString::Printf(TEXT("AreaLight%02d"), I));
        Light->SetupAttachment(RootComponent);
        Light->SetMobility(EComponentMobility::Movable);
        Light->SetCastShadows(true);
        Light->SetIntensityUnits(ELightUnits::Lumens);
        Light->SetIntensity(2400.f);
        Light->SetAttenuationRadius(1400.f);
        Light->SetSourceWidth(40.f);
        Light->SetSourceHeight(40.f);
        Lights.Add(Light);
    }
}
// 【함수 역할】뒤의 처리에 필요한 객체·에셋·구성을 준비한다. 에디터 전용 구간과 런타임 구간이 나뉘는지, 기존 자료를 재사용하는지 함께 확인한다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabLightingActor::PrepareLighting()
{
    UpdateLighting();
}
// 【함수 역할】입력이나 현재 선택값을 실제 객체의 상태에 반영한다. 값 저장과 화면·물리·애니메이션 갱신 호출을 함께 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabLightingActor::UpdateLighting()
{
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (int32 I = 0; I < Lights.Num(); ++I)
    {
        auto *Light = Lights[I].Get();
        const int32 X = I % 8, Y = I / 8;
        Light->SetRelativeLocation(FVector(-650 + X * 185.f, -500 + Y * 145.f, 520.f));
        Light->SetRelativeRotation(FRotator(-90.f, 0, 0));
        Light->SetLightColor(FLinearColor::MakeFromHSV8(uint8((I * 37) % 256), 100, 255));
        // 화면 표시 여부를 바꾼다. 뼈 포즈 계산이나 물리까지 중단하는 호출과는 다르다.
        Light->SetVisibility(bDense || (X % 2 == 0 && Y % 2 == 0));
    }
    Camera->PostProcessSettings.bOverride_bMegaLights = true;
    Camera->PostProcessSettings.bMegaLights = bMega;
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (Occluder)
        Occluder->SetActorHiddenInGame(!bBlocker);
}
// 【함수 역할】액터가 게임 월드에서 실행을 시작할 때 엔진이 호출한다. 생성자에서 부품을 만든 뒤 실제 월드·플레이어·입력과 연결하는 초기 준비 단계다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabLightingActor::BeginPlay()
{
    // 부모 클래스의 기본 처리를 먼저/함께 실행한다. 자식 클래스의 추가 작업만으로 엔진 기본 동작을 대체하지 않는다.
    Super::BeginPlay();
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (const TCHAR *Name : {TEXT("sg.GlobalIlluminationQuality"),
                              TEXT("r.Lumen.FinalGatherMethod"), TEXT("r.MegaLights.Allowed")})
        SavedCVars.Add(Name, RenderingCVarValue(Name));
    RenderingCVar(TEXT("r.MegaLights.Allowed"), 1);
    SetGI(2);
    UpdateLighting();
    // 【함수 역할】이후 작업에 사용할 객체나 값을 찾는다. 찾지 못했을 때 빈 참조가 반환될 수 있으므로 호출하는 쪽의 검사도 필요하다.
    // 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (auto *PC = UGameplayStatics::GetPlayerController(this, 0))
    {
        AActor::EnableInput(PC);
        PC->SetViewTarget(this);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::One, IE_Pressed, this,
                                &AFeatureLabLightingActor::ToggleMegaLights);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::Two, IE_Pressed, this, &AFeatureLabLightingActor::ToggleGI);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::Three, IE_Pressed, this,
                                &AFeatureLabLightingActor::DisableGI);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::D, IE_Pressed, this,
                                &AFeatureLabLightingActor::ToggleDensity);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::B, IE_Pressed, this,
                                &AFeatureLabLightingActor::ToggleOccluder);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::P, IE_Pressed, this,
                                &AFeatureLabLightingActor::ToggleMotion);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::R, IE_Pressed, this,
                                &AFeatureLabLightingActor::ResetLighting);
    }
}
// 【함수 역할】레벨 이동이나 실행 종료 때 남은 콜백·참조·임시 상태를 정리한다. 다음 실행에 이전 작업이 남지 않도록 하는 종료 단계다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabLightingActor::EndPlay(const EEndPlayReason::Type Reason)
{
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (const auto &Pair : SavedCVars)
        RenderingCVar(*Pair.Key, Pair.Value);
    // 부모 클래스의 기본 처리를 먼저/함께 실행한다. 자식 클래스의 추가 작업만으로 엔진 기본 동작을 대체하지 않는다.
    Super::EndPlay(Reason);
}
// 【함수 역할】입력이나 현재 선택값을 실제 객체의 상태에 반영한다. 값 저장과 화면·물리·애니메이션 갱신 호출을 함께 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabLightingActor::SetGI(int32 Quality)
{
    GIQuality = Quality;
    RenderingCVar(TEXT("sg.GlobalIlluminationQuality"), Quality);
    RenderingCVar(TEXT("r.Lumen.FinalGatherMethod"), Quality == 1 ? 0 : 1);
}
// 【함수 역할】현재 선택 상태를 다음 상태로 바꾸고 결과에 반영한다. 켬·끔 전환인지 여러 선택지 순환인지 조건문을 따라 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabLightingActor::ToggleMegaLights()
{
    bMega = !bMega;
    UpdateLighting();
}
// 【함수 역할】현재 선택 상태를 다음 상태로 바꾸고 결과에 반영한다. 켬·끔 전환인지 여러 선택지 순환인지 조건문을 따라 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabLightingActor::ToggleDensity()
{
    bDense = !bDense;
    UpdateLighting();
}
// 【함수 역할】현재 선택 상태를 다음 상태로 바꾸고 결과에 반영한다. 켬·끔 전환인지 여러 선택지 순환인지 조건문을 따라 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabLightingActor::ToggleGI()
{
    SetGI(GIQuality == 1 ? 2 : 1);
}
// 【함수 역할】이름은 DisableGI이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabLightingActor::DisableGI()
{
    SetGI(0);
}
// 【함수 역할】현재 선택 상태를 다음 상태로 바꾸고 결과에 반영한다. 켬·끔 전환인지 여러 선택지 순환인지 조건문을 따라 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabLightingActor::ToggleOccluder()
{
    bBlocker = !bBlocker;
    UpdateLighting();
}
// 【함수 역할】현재 선택 상태를 다음 상태로 바꾸고 결과에 반영한다. 켬·끔 전환인지 여러 선택지 순환인지 조건문을 따라 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabLightingActor::ToggleMotion()
{
    bMotion = !bMotion;
}
// 【함수 역할】실험 상태를 코드에 적힌 기준값으로 되돌린다. 위치·속도·재생 시간·물리 상태 중 무엇을 복구하는지 아래 대입과 호출을 확인한다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabLightingActor::ResetLighting()
{
    bMega = true;
    bDense = false;
    bBlocker = true;
    bMotion = false;
    MotionTime = 0;
    SetGI(2);
    UpdateLighting();
    ++ResetCount;
}
// 【함수 역할】매 갱신 시점에 상태를 확인하고 동작을 진행한다. DeltaSeconds는 이번 갱신까지 지난 시간이며, 함수가 1초에 정확히 60번 불린다고 가정하지 않는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabLightingActor::Tick(float DT)
{
    // 부모 클래스의 기본 처리를 먼저/함께 실행한다. 자식 클래스의 추가 작업만으로 엔진 기본 동작을 대체하지 않는다.
    Super::Tick(DT);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (bMotion)
    {
        MotionTime += DT;
        // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
        for (int32 I = 0; I < Lights.Num(); ++I)
        {
            auto P = Lights[I]->GetRelativeLocation();
            P.Z = 520 + 80 * FMath::Sin(MotionTime + I * .2f);
            Lights[I]->SetRelativeLocation(P);
        }
    }
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (GEngine)
        GEngine->AddOnScreenDebugMessage(
            uint64(GetUniqueID()), 0.f, FColor::Cyan,
            FString::Printf(
                TEXT(
                    "1 MegaLights %s | 2 GI %s | 3 GI OFF | D Lights %d | B Blocker | P Move lights | R Reset"),
                bMega ? TEXT("ON") : TEXT("OFF"),
                GIQuality == 1   ? TEXT("Lumen Lite")
                : GIQuality == 2 ? TEXT("Lumen High")
                                 : TEXT("OFF"),
                bDense ? 64 : 16));
}
// 【함수 역할】현재 객체와 실행 결과를 읽어 검증용 자료로 반환한다. 결과를 만드는 함수와 결과를 측정하는 함수를 구분해서 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
FString AFeatureLabLightingActor::CaptureLighting()
{
    auto O = MakeShared<FJsonObject>();
    int32 Visible = 0, Shadowed = 0;
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (const auto &L : Lights)
    {
        Visible += L->IsVisible();
        Shadowed += L->IsVisible() && L->CastShadows;
    }
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("visible_lights"), Visible);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("shadow_casting_lights"), Shadowed);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetBoolField(TEXT("mega_lights_requested_in_camera"),
                    Camera->PostProcessSettings.bMegaLights);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("gi_quality"), GIQuality);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("final_gather_method"),
                      RenderingCVarValue(TEXT("r.Lumen.FinalGatherMethod")));
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetBoolField(TEXT("occluder_visible"), Occluder && !Occluder->IsHidden());
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetBoolField(TEXT("light_motion"), bMotion);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("motion_time"), MotionTime);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("reset_count"), ResetCount);
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return RenderingJSON(O);
}
// 【함수 역할】이름은 ConfigureLabToonProfile이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
FString UFeatureLabRuntimeLibrary::ConfigureLabToonProfile(UObject *Asset, int32 Style)
{
// 빌드 조건에 따라 포함할 코드를 고른다. 게임 실행 중의 if 조건과 달리 빌드할 때 구분한다.
#if WITH_EDITOR
    auto *Profile = Cast<UToonProfile>(Asset);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Profile || !Profile->GetPathName().StartsWith(TEXT("/Game/FeatureLab/Materials/")))
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return TEXT("{}");
    Profile->Modify();
    auto &S = Profile->Settings;
    S.DiffuseRamp.ExternalCurve = nullptr;
    S.SpecularRamp.ExternalCurve = nullptr;
    const float Times[] = {0.f, .35f, .7f, 1.f}, Diffuse[] = {.12f, .55f, 1.f, 1.f};
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (int32 C = 0; C < 4; ++C)
    {
        auto &D = S.DiffuseRamp.ColorCurves[C];
        auto &Spec = S.SpecularRamp.ColorCurves[C];
        D.Reset();
        Spec.Reset();
        // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
        for (int32 I = 0; I < 4; ++I)
        {
            auto Key = D.AddKey(Times[I], C == 3       ? 1.f
                                          : Style == 0 ? Diffuse[I]
                                                       : .12f + .88f * Times[I]);
            D.SetKeyInterpMode(Key, Style == 0 ? RCIM_Constant : RCIM_Linear);
        }
        // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
        for (int32 I = 0; I < 4; ++I)
        {
            const float T = I == 0 ? 0.f : I == 1 ? .75f : I == 2 ? .9f : 1.f;
            auto Key = Spec.AddKey(T, C == 3 ? 1.f : Style == 0 ? (I < 2 ? 0.f : 1.f) : T);
            Spec.SetKeyInterpMode(Key, Style == 0 ? RCIM_Constant : RCIM_Linear);
        }
    }
    Profile->PostEditChange();
    Profile->MarkPackageDirty();
    auto O = MakeShared<FJsonObject>();
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetStringField(TEXT("profile"), Profile->GetPathName());
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("style"), Style);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("diffuse_keys_per_channel"), S.DiffuseRamp.ColorCurves[0].GetNumKeys());
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("specular_keys_per_channel"),
                      S.SpecularRamp.ColorCurves[0].GetNumKeys());
    TArray<TSharedPtr<FJsonValue>> Samples;
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (float T : {.1f, .3f, .5f, .65f, .8f})
        Samples.Add(MakeShared<FJsonValueNumber>(S.DiffuseRamp.GetLinearColorValue(T).R));
    O->SetArrayField(TEXT("diffuse_samples"), Samples);
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return RenderingJSON(O);
#else
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return TEXT("{}");
#endif
}
// 【함수 역할】클래스의 기본 부품과 기본값을 준비하는 생성자다. 이 시점에는 게임 월드가 모두 준비됐다고 가정하지 않는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
AFeatureLabMaterialActor::AFeatureLabMaterialActor()
{
    PrimaryActorTick.bCanEverTick = true;
    // 이 액터의 기본 컴포넌트를 만든다. 부품 생성 뒤 장면 부착·재질·충돌 설정이 이어지는지 확인한다.
    SetRootComponent(CreateDefaultSubobject<USceneComponent>(TEXT("Root")));
}
namespace
{
UMeshComponent *MaterialTarget(AActor *Actor)
{
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return Actor ? Actor->FindComponentByClass<UMeshComponent>() : nullptr;
}
} // namespace
// 【함수 역할】뒤의 처리에 필요한 객체·에셋·구성을 준비한다. 에디터 전용 구간과 런타임 구간이 나뉘는지, 기존 자료를 재사용하는지 함께 확인한다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabMaterialActor::PrepareMaterials()
{
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (auto *Mesh = MaterialTarget(CoatedTarget))
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (CoatedMaterial)
            CoatedMID = Mesh->CreateDynamicMaterialInstance(0, CoatedMaterial);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (auto *Mesh = MaterialTarget(ReferenceTarget))
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (ReferenceMaterial)
            Mesh->SetMaterial(0, ReferenceMaterial);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (auto *Mesh = MaterialTarget(PuppetTarget))
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (auto *Material = bSoft ? ToonSoft.Get() : ToonInk.Get())
        {
            ToonMID = UMaterialInstanceDynamic::Create(Material, this);
            // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
            for (int32 I = 0; I < Mesh->GetNumMaterials(); ++I)
                Mesh->SetMaterial(I, ToonMID);
        }
    ApplyMaterialState();
}
// 【함수 역할】입력이나 현재 선택값을 실제 객체의 상태에 반영한다. 값 저장과 화면·물리·애니메이션 갱신 호출을 함께 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabMaterialActor::ApplyMaterialState()
{
    const FLinearColor Copper(.95f, .64f, .54f), Blue(.3f, .55f, .95f);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (CoatedMID)
    {
        CoatedMID->SetScalarParameterValue(TEXT("CoatThickness"), bThick ? .8f : .02f);
        CoatedMID->SetScalarParameterValue(TEXT("CoatRoughness"), bRough ? .6f : .08f);
        CoatedMID->SetScalarParameterValue(TEXT("BaseRoughness"), bRough ? .55f : .18f);
        CoatedMID->SetVectorParameterValue(TEXT("MetalTint"), bBlue ? Blue : Copper);
    }
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (ToonMID)
        ToonMID->SetVectorParameterValue(TEXT("ToonColor"), bBlue ? FLinearColor(.03f, .15f, .65f)
                                                                  : FLinearColor(.75f, .22f, .04f));
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (LightTarget)
        LightTarget->SetActorRotation(FRotator(-35.f, -40.f + LightStep * 65.f, 0.f));
}
// 【함수 역할】액터가 게임 월드에서 실행을 시작할 때 엔진이 호출한다. 생성자에서 부품을 만든 뒤 실제 월드·플레이어·입력과 연결하는 초기 준비 단계다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabMaterialActor::BeginPlay()
{
    // 부모 클래스의 기본 처리를 먼저/함께 실행한다. 자식 클래스의 추가 작업만으로 엔진 기본 동작을 대체하지 않는다.
    Super::BeginPlay();
    PrepareMaterials();
    // 【함수 역할】이후 작업에 사용할 객체나 값을 찾는다. 찾지 못했을 때 빈 참조가 반환될 수 있으므로 호출하는 쪽의 검사도 필요하다.
    // 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (auto *PC = UGameplayStatics::GetPlayerController(this, 0))
    {
        AActor::EnableInput(PC);
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (OverviewCamera)
            PC->SetViewTarget(OverviewCamera);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::One, IE_Pressed, this,
                                &AFeatureLabMaterialActor::ToggleCoat);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::Two, IE_Pressed, this,
                                &AFeatureLabMaterialActor::ToggleFinish);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::Three, IE_Pressed, this,
                                &AFeatureLabMaterialActor::ToggleToon);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::Four, IE_Pressed, this,
                                &AFeatureLabMaterialActor::TogglePalette);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::L, IE_Pressed, this, &AFeatureLabMaterialActor::RotateLight);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::C, IE_Pressed, this, &AFeatureLabMaterialActor::ToggleView);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::P, IE_Pressed, this, &AFeatureLabMaterialActor::TogglePause);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::R, IE_Pressed, this,
                                &AFeatureLabMaterialActor::ResetMaterials);
    }
}
// 【함수 역할】현재 선택 상태를 다음 상태로 바꾸고 결과에 반영한다. 켬·끔 전환인지 여러 선택지 순환인지 조건문을 따라 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabMaterialActor::ToggleCoat()
{
    bThick = !bThick;
    ApplyMaterialState();
}
// 【함수 역할】현재 선택 상태를 다음 상태로 바꾸고 결과에 반영한다. 켬·끔 전환인지 여러 선택지 순환인지 조건문을 따라 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabMaterialActor::ToggleFinish()
{
    bRough = !bRough;
    ApplyMaterialState();
}
// 【함수 역할】현재 선택 상태를 다음 상태로 바꾸고 결과에 반영한다. 켬·끔 전환인지 여러 선택지 순환인지 조건문을 따라 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabMaterialActor::ToggleToon()
{
    bSoft = !bSoft;
    PrepareMaterials();
}
// 【함수 역할】현재 선택 상태를 다음 상태로 바꾸고 결과에 반영한다. 켬·끔 전환인지 여러 선택지 순환인지 조건문을 따라 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabMaterialActor::TogglePalette()
{
    bBlue = !bBlue;
    ApplyMaterialState();
}
// 【함수 역할】이름은 RotateLight이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabMaterialActor::RotateLight()
{
    LightStep = (LightStep + 1) % 3;
    ApplyMaterialState();
}
// 【함수 역할】현재 선택 상태를 다음 상태로 바꾸고 결과에 반영한다. 켬·끔 전환인지 여러 선택지 순환인지 조건문을 따라 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabMaterialActor::ToggleView()
{
    bDetail = !bDetail;
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (auto *PC = UGameplayStatics::GetPlayerController(this, 0))
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (AActor *Target = bDetail ? DetailCamera.Get() : OverviewCamera.Get())
            PC->SetViewTarget(Target);
}
// 【함수 역할】현재 선택 상태를 다음 상태로 바꾸고 결과에 반영한다. 켬·끔 전환인지 여러 선택지 순환인지 조건문을 따라 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabMaterialActor::TogglePause()
{
    bPaused = !bPaused;
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (auto *Mesh = Cast<USkeletalMeshComponent>(MaterialTarget(PuppetTarget)))
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (auto *Anim = Mesh->GetSingleNodeInstance())
            Anim->SetPlaying(!bPaused);
}
// 【함수 역할】실험 상태를 코드에 적힌 기준값으로 되돌린다. 위치·속도·재생 시간·물리 상태 중 무엇을 복구하는지 아래 대입과 호출을 확인한다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabMaterialActor::ResetMaterials()
{
    bThick = bRough = bSoft = bBlue = bDetail = bPaused = false;
    LightStep = 0;
    ++ResetCount;
    PrepareMaterials();
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (auto *PC = UGameplayStatics::GetPlayerController(this, 0))
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (OverviewCamera)
            PC->SetViewTarget(OverviewCamera);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (auto *Mesh = Cast<USkeletalMeshComponent>(MaterialTarget(PuppetTarget)))
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (auto *Anim = Mesh->GetSingleNodeInstance())
        {
            Anim->SetPosition(0.f);
            Anim->SetPlaying(true);
        }
}
// 【함수 역할】매 갱신 시점에 상태를 확인하고 동작을 진행한다. DeltaSeconds는 이번 갱신까지 지난 시간이며, 함수가 1초에 정확히 60번 불린다고 가정하지 않는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabMaterialActor::Tick(float DT)
{
    // 부모 클래스의 기본 처리를 먼저/함께 실행한다. 자식 클래스의 추가 작업만으로 엔진 기본 동작을 대체하지 않는다.
    Super::Tick(DT);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (GEngine)
        GEngine->AddOnScreenDebugMessage(
            uint64(GetUniqueID()), 0.f, FColor::Yellow,
            FString::Printf(
                TEXT(
                    "1 Coat %s | 2 Finish %s | 3 Toon %s | 4 Palette | L Light | C View | P Pause | R Reset"),
                bThick ? TEXT("THICK") : TEXT("THIN"), bRough ? TEXT("ROUGH") : TEXT("POLISHED"),
                bSoft ? TEXT("SOFT") : TEXT("INK")));
}
// 【함수 역할】현재 객체와 실행 결과를 읽어 검증용 자료로 반환한다. 결과를 만드는 함수와 결과를 측정하는 함수를 구분해서 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
FString AFeatureLabMaterialActor::CaptureMaterials()
{
    auto O = MakeShared<FJsonObject>();
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetBoolField(TEXT("thick_coat"), bThick);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetBoolField(TEXT("rough_finish"), bRough);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetBoolField(TEXT("soft_toon"), bSoft);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetBoolField(TEXT("blue_palette"), bBlue);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetBoolField(TEXT("detail_view"), bDetail);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetBoolField(TEXT("paused"), bPaused);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("light_step"), LightStep);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("reset_count"), ResetCount);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (CoatedMID)
    {
        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
        O->SetNumberField(TEXT("coat_thickness"),
                          CoatedMID->K2_GetScalarParameterValue(TEXT("CoatThickness")));
        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
        O->SetNumberField(TEXT("coat_roughness"),
                          CoatedMID->K2_GetScalarParameterValue(TEXT("CoatRoughness")));
        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
        O->SetNumberField(TEXT("base_roughness"),
                          CoatedMID->K2_GetScalarParameterValue(TEXT("BaseRoughness")));
    }
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (ToonMID)
        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
        O->SetStringField(TEXT("toon_parent"),
                          ToonMID->Parent ? ToonMID->Parent->GetPathName() : TEXT("null"));
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (auto *Mesh = Cast<USkeletalMeshComponent>(MaterialTarget(PuppetTarget)))
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (auto *Anim = Mesh->GetSingleNodeInstance())
            // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
            O->SetNumberField(TEXT("animation_time"), Anim->GetCurrentTime());
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return RenderingJSON(O);
}
```

<a id="source-source-mutablesample-featurelabrendering-h"></a>

### FeatureLabRendering.h

```cpp
// 파일 역할: 12~14번 GPU 화면 기록, 조명·간접광·층상 재질·Toon 비교
// 클래스=작업 종류, 객체=실제 한 개, 포인터(* 또는 TObjectPtr)=다른 객체를 가리키는 참조.
// nullptr은 대상 없음, bool은 참/거짓, TArray는 순서 있는 목록, FString은 문자열이다.
// WITH_EDITOR 구간은 에디터 빌드에서만 사용하는 코드다. 원본과의 토큰 비교 결과는 code-validation.json에 기록한다.

#pragma once
#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "FeatureLabRendering.generated.h"
class URectLightComponent;
class UCameraComponent;
class UMaterialInterface;
class UMaterialInstanceDynamic;
// 아래 클래스 또는 구조체를 언리얼이 인식하도록 선언한다. 일반 C++ 선언에 엔진 등록 정보를 덧붙인 것이다.
UCLASS()
class MUTABLESAMPLE_API AFeatureLabLightingActor : public AActor
{
    // 언리얼 헤더 도구가 필요한 보조 코드를 연결하는 매크로다. 함수 본문을 직접 작성하는 자리가 아니다.
    GENERATED_BODY()
  public:
    AFeatureLabLightingActor();
    virtual void BeginPlay() override;
    virtual void EndPlay(const EEndPlayReason::Type Reason) override;
    virtual void Tick(float DeltaSeconds) override;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab")
    TArray<TObjectPtr<URectLightComponent>> Lights;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab")
    TObjectPtr<UCameraComponent> Camera;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TObjectPtr<AActor> Occluder;
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, CallInEditor, Category = "FeatureLab") void PrepareLighting();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void ToggleMegaLights();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void ToggleDensity();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void ToggleGI();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void DisableGI();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void ToggleOccluder();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void ToggleMotion();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void ResetLighting();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") FString CaptureLighting();

  private:
    void UpdateLighting();
    void SetGI(int32 Quality);
    bool bMega = true, bDense = false, bBlocker = true, bMotion = false;
    int32 GIQuality = 2, ResetCount = 0;
    float MotionTime = 0.f;
    TMap<FString, int32> SavedCVars;
};
// 아래 클래스 또는 구조체를 언리얼이 인식하도록 선언한다. 일반 C++ 선언에 엔진 등록 정보를 덧붙인 것이다.
UCLASS()
class MUTABLESAMPLE_API AFeatureLabMaterialActor : public AActor
{
    // 언리얼 헤더 도구가 필요한 보조 코드를 연결하는 매크로다. 함수 본문을 직접 작성하는 자리가 아니다.
    GENERATED_BODY()
  public:
    AFeatureLabMaterialActor();
    virtual void BeginPlay() override;
    virtual void Tick(float DeltaSeconds) override;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TObjectPtr<AActor> CoatedTarget;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TObjectPtr<AActor> ReferenceTarget;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TObjectPtr<AActor> PuppetTarget;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TObjectPtr<AActor> LightTarget;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TObjectPtr<AActor> OverviewCamera;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TObjectPtr<AActor> DetailCamera;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TObjectPtr<UMaterialInterface> CoatedMaterial;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TObjectPtr<UMaterialInterface> ReferenceMaterial;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TObjectPtr<UMaterialInterface> ToonInk;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TObjectPtr<UMaterialInterface> ToonSoft;
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, CallInEditor, Category = "FeatureLab") void PrepareMaterials();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void ToggleCoat();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void ToggleFinish();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void ToggleToon();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void TogglePalette();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void RotateLight();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void ToggleView();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void TogglePause();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void ResetMaterials();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") FString CaptureMaterials();

  private:
    void ApplyMaterialState();
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(Transient, DuplicateTransient) TObjectPtr<UMaterialInstanceDynamic> CoatedMID;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(Transient, DuplicateTransient) TObjectPtr<UMaterialInstanceDynamic> ToonMID;
    bool bThick = false, bRough = false, bSoft = false, bBlue = false, bDetail = false,
         bPaused = false;
    int32 LightStep = 0, ResetCount = 0;
};
```
