

나무가 장면에 보인다고 식생 제작 과정을 모두 확인한 것은 아니다. 이번에는 나무를 생성하는 그래프, 생성 결과의 메시와 뼈대, GPU 바람 반응, 공식 Megaplants 자료 반입을 나눠 살폈다.

PVE는 식생을 만드는 제작 도구, Nanite Foliage는 여기서 사용한 스킨드 식생의 표현과 렌더링, Megaplants는 실제로 반입해 쓴 공식 식생 재료다. 같은 결과 화면을 공유하지만 담당하는 단계는 다르다.

![식생 비교 장면](Tech%20Note/Unreal/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/12/result.png)

## 바람과 수종을 직접 바꾸기

1. `Content → FeatureLab → Maps → FL_12_NaniteVegetation`을 연다.
2. **▶ Play** 후 화면을 클릭한다.
3. **1/2/3**으로 무풍·보통·강풍을 선택한다.
4. **D**로 바람 방향을 X와 Y 사이에서 바꾼다. X·Y는 장면의 가로 방향 두 축이다.
5. **C**로 가까운 시점, 중간, 먼 시점, 숲 시점을 바꾼다.
6. **F**로 64그루 숲을 표시한다. **G**로 침엽수와 은행나무를 바꾸고 **V**로 공식 은행나무 변형을 바꾼다.
7. **R**은 바람 1, 첫 시점, 숲 끄기의 기준 상태로 돌아간다.

## 생성 그래프와 내보낸 결과 찾기

**■ Stop** 후 `Content → FeatureLab → Vegetation`을 연다. `PVE_LabConifer`는 직접 실험한 침엽수 생성 그래프다. `PVE_LabGinkgo`는 반입한 공식 은행나무 그래프를 편집용으로 구분한 파일이다.

![PVE 작업 파일 위치](Tech%20Note/Unreal/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/12/folder.png)

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
| `PVE / Procedural Vegetation` | 절차적으로 나무 형태를 만드는 도구 / 식생 생성. |
| `Graph / Export Settings` | 생성 노드 그래프 / 결과 내보내기 설정. |
| `Mesh Name / Export Asset Path` | 출력 메시 이름 / 에셋을 저장할 프로젝트 경로. |
| `Export Nanite Foliage` | Nanite 식생 자료로 결과를 내보내는 설정. |
| `Export Prefab / Generate Settings` | 배치 단위 자료 내보내기 / 생성 설정. |
| `Dynamic Wind` | 실제 시간에 따라 바람 변형을 적용하는 기능. |
| `Skinned Mesh` | 뼈 변형을 따라 움직이는 메시. |
| `Nanite Foliage` | 고밀도 식생을 다루는 Nanite 기반 표현. |
| `Conifer / Ginkgo` | 침엽수 / 은행나무. |
| `PVE_LabConifer / PVE_LabGinkgo` | 침엽수 / 은행나무 실험용 생성 그래프 이름. |


![식생 생성 그래프 편집 화면](Tech%20Note/Unreal/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/12/settings.png)

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
| `PVE / Procedural Vegetation` | 절차적으로 나무 형태를 만드는 도구 / 식생 생성. |
| `Graph / Export Settings` | 생성 노드 그래프 / 결과 내보내기 설정. |
| `Mesh Name / Export Asset Path` | 출력 메시 이름 / 에셋을 저장할 프로젝트 경로. |
| `Export Nanite Foliage` | Nanite 식생 자료로 결과를 내보내는 설정. |
| `Export Prefab / Generate Settings` | 배치 단위 자료 내보내기 / 생성 설정. |
| `Dynamic Wind` | 실제 시간에 따라 바람 변형을 적용하는 기능. |
| `Skinned Mesh` | 뼈 변형을 따라 움직이는 메시. |
| `Nanite Foliage` | 고밀도 식생을 다루는 Nanite 기반 표현. |
| `Conifer / Ginkgo` | 침엽수 / 은행나무. |
| `PVE_LabConifer / PVE_LabGinkgo` | 침엽수 / 은행나무 실험용 생성 그래프 이름. |


침엽수 그래프는 18개 노드로 구성했다. 입력을 바꿔 다른 형태를 내보낸 뒤 다시 기준 설정으로 돌아와 같은 원본 형태가 생성되는지 확인했다. 가지, 잎 배치, 스켈레톤까지 비교했다. 스켈레톤은 바람 변형에 사용할 뼈대다.

## 생성 결과에서 확인한 숫자

기준 결과에는 뼈 986개, 잎 배치 1,118개, 물리 몸체 23개가 있었다. 다른 변형은 각각 920개, 1,242개, 25개였다. 원본 메시도 실제 정점과 삼각형 수를 확인했다.

기준으로 다시 내보냈을 때 원본 형상·뼈·잎 변환은 반복됐지만 파생 fallback 삼각형 수는 독립 내보내기 사이에서 달랐다. fallback은 다른 표현 경로에서 사용할 대체 메시다. 따라서 ‘모든 내보낸 파일이 완전히 같은 결과다’라고 적지 않았다.

## 바람은 화면 결과까지 봐야 했다

실제 Dynamic Wind 제공자를 스킨드 인스턴스에 연결했다. 인스턴스는 같은 재료를 여러 위치에 표시하는 개별 나무다. 단순 재질 흔들기 설명으로 대체하지 않고 실제 GPU 결과의 움직임을 비교했다.

고해상도 단발 캡처는 시간 이력을 초기화해 바람 비교가 불명확한 경우가 있었다. 그래서 연속 뷰포트 캡처로 무풍·보통·강풍과 방향 변경을 비교했다. 사진을 찍는 방식 자체가 시간에 따른 효과를 가릴 수 있다는 점을 확인한 사례다.

![무풍·강풍 상태의 실제 캡처 비교](Tech%20Note/Unreal/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/12/wind-compare.gif)

*이 GIF는 상태별 실제 캡처를 번갈아 표시한 비교 자료다. 연속 녹화 영상은 아니다.*

## 은행나무 충돌은 시각 변형과 별개다

공식 은행나무 네 변형은 실제 파일을 반입해 사용했다. 다만 해당 결과의 몸통 충돌을 GPU 바람 변형 전체와 일치시키는 시스템은 만들지 않았다. 이번 게임플레이 충돌은 하부 몸통에 별도 캡슐 프록시를 작성해 검사했다.

프록시는 원래 모양 대신 충돌 계산에 사용할 단순한 대체 모양이다. 바람에 움직이는 모든 잎과 가지에 정밀 충돌이 있다고 읽으면 안 된다. 숲의 모든 인스턴스에 개별 보행 충돌이 제공되는 결과도 아니다.

## 다음에 다시 수정할 때

먼저 그래프 입력을 하나만 바꿔 내보내고, 기존 결과와 비교한다. 원본 공식 자료와 편집용 복사본을 구분한다. 바람이 안 보이면 바람 값뿐 아니라 Transform Provider 연결, 재생 상태, 시점과 에디터 실시간 갱신을 확인한다.

전체 실행 코드: [FeatureLabVegetation.cpp](#source-source-mutablesample-featurelabvegetation-cpp), [헤더](#source-source-mutablesample-featurelabvegetation-h). 장면 구성: [lab_build_vegetation_scene.py](#source-lab-lab-build-vegetation-scene-py). 공식 에셋 반입 과정은 18편에 별도로 정리했다.


## 편집 화면을 더 자세히 보기

![은행나무와 별도로 시험한 침엽수 생성 그래프](Tech%20Note/Unreal/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/12/conifer.png)

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
| `PVE / Procedural Vegetation` | 절차적으로 나무 형태를 만드는 도구 / 식생 생성. |
| `Graph / Export Settings` | 생성 노드 그래프 / 결과 내보내기 설정. |
| `Mesh Name / Export Asset Path` | 출력 메시 이름 / 에셋을 저장할 프로젝트 경로. |
| `Export Nanite Foliage` | Nanite 식생 자료로 결과를 내보내는 설정. |
| `Export Prefab / Generate Settings` | 배치 단위 자료 내보내기 / 생성 설정. |
| `Dynamic Wind` | 실제 시간에 따라 바람 변형을 적용하는 기능. |
| `Skinned Mesh` | 뼈 변형을 따라 움직이는 메시. |
| `Nanite Foliage` | 고밀도 식생을 다루는 Nanite 기반 표현. |
| `Conifer / Ginkgo` | 침엽수 / 은행나무. |
| `PVE_LabConifer / PVE_LabGinkgo` | 침엽수 / 은행나무 실험용 생성 그래프 이름. |



<!-- korean-ui-explanations -->


<a id="code-index"></a>

## 이 장면을 만든 코드

아래는 제작과 검증에 사용한 전체 코드에 한국어 주석을 더한 설명본이다. `.py`는 언리얼 에디터에서 실행하는 제작·검사 코드, `.cpp`와 `.h`는 프로젝트에 넣어 빌드하는 코드다. 파일마다 첫 주석에 역할과 입력 조건을 적었다.


<a id="source-lab-lab-build-vegetation-scene-py"></a>

### lab_build_vegetation_scene.py

```python
# 파일 역할: 에셋·그래프·장면을 구성하는 제작 작업. 이미 있는 원본을 대상으로 재실행해도 되는지 가드 조건부터 읽는다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Maps/FL_12_NaniteVegetation
#   /Game/FeatureLab/Vegetation
#   /Game/FeatureLab/Vegetation/Generated/SKV_LabConifer_A
#   /Game/FeatureLab/Vegetation/Generated/SKV_LabConifer_B
#   /Game/FeatureLab/Crowds/BP_LabCrowdGameMode
#   /Game/FeatureLab/Vegetation/Generated/

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, unreal
from pathlib import Path

root = Path(unreal.Paths.project_dir()).resolve()
assert root.name == "EpicFeatureLab"
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
assert not unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
lib = unreal.EditorAssetLibrary
# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
editor = unreal.get_editor_subsystem(unreal.LevelEditorSubsystem)
# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
actors = unreal.get_editor_subsystem(unreal.EditorActorSubsystem)
path = "/Game/FeatureLab/Maps/FL_12_NaniteVegetation"
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world().get_name() != 'FL_12_NaniteVegetation' 작업할 맵을 연다. 현재 맵과 다른 맵이므로 실행 중인 PIE를 먼저 끝내는지 확인한다.
if (
    unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world().get_name()
    != "FL_12_NaniteVegetation"
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
    item.tags = ["FeatureLab_Owned", "FeatureLab_12"]
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return item


# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 편집 중인 월드를 얻는다. 게임 실행 월드와 다르므로 대상을 혼동하지 않는다.
world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world()
# 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 default_game_mode이다.
world.get_world_settings().set_editor_property(
    "default_game_mode",
    lib.load_asset("/Game/FeatureLab/Crowds/BP_LabCrowdGameMode").generated_class(),
)
floor = actor(unreal.StaticMeshActor, "FL12_Floor", (10000, 10000, -25))
floor.static_mesh_component.set_static_mesh(lib.load_asset("/Engine/BasicShapes/Cube"))
floor.set_actor_scale3d(unreal.Vector(700, 700, 0.5))
sun = actor(unreal.DirectionalLight, "FL12_Sun", (0, 0, 2000))
# 액터 방향을 바꾼다. 위치 이동과 구분한다.
sun.set_actor_rotation(unreal.Rotator(pitch=-40, yaw=-50, roll=0), False)
# 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 intensity이다.
sun.get_component_by_class(unreal.DirectionalLightComponent).set_editor_property(
    "intensity", 3.5
)
sky = actor(unreal.SkyLight, "FL12_Sky", (0, 0, 1500))
sky.get_component_by_class(unreal.SkyLightComponent).set_editor_property("intensity", 1.2)
actor(unreal.SkyAtmosphere, "FL12_Atmosphere", (0, 0, 0))
controller = actor(unreal.FeatureLabVegetationActor, "FL12_Vegetation", (0, 0, 0))
# 여러 속성을 이름:값 사전으로 한 번에 설정한다. 각 항목이 개별 설정과 대응한다.
controller.set_editor_properties(
    {
        "variant_a": lib.load_asset("/Game/FeatureLab/Vegetation/Generated/SKV_LabConifer_A"),
        "variant_b": lib.load_asset("/Game/FeatureLab/Vegetation/Generated/SKV_LabConifer_B"),
    }
)
controller.prepare_vegetation()
start = actor(unreal.PlayerStart, "FL12_ViewerStart", (4500, -6500, 2400))
assert lib.save_directory("/Game/FeatureLab/Vegetation", True, True)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert editor.save_current_level()
assets = []
for name in ["SKV_LabConifer_A", "SKV_LabConifer_B", "SKV_LabConifer_A_Repeat"]:
    # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    assets.append(
        json.loads(
            unreal.FeatureLabRuntimeLibrary.inspect_lab_vegetation(
                lib.load_asset("/Game/FeatureLab/Vegetation/Generated/" + name)
            )
        )
    )
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
RESULT = {
    "status": "scene_saved",
    "map": path,
    "native_assets": assets,
    "scene": json.loads(controller.capture_vegetation()),
    "megaplants": "pending_official_library_intake",
    "controls": {
        "1": "Calm wind (0)",
        "2": "Normal wind (1)",
        "3": "Strong wind (3)",
        "D": "Wind X/Y",
        "C": "Near / middle / far / forest camera",
        "F": "64-tree forest visibility",
        "R": "Reset",
    },
}
(root / "Evidence/case12-vegetation-scene.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-capture-vegetation-viewport-py"></a>

### lab_capture_vegetation_viewport.py

```python
# 파일 역할: EpicFeatureLab의 lab_capture_vegetation_viewport 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, unreal
from pathlib import Path

root = Path(unreal.Paths.project_dir()).resolve()
# JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
command = json.loads(
    (root / "Scripts/Lab/vegetation-observation-command.json").read_text(encoding="utf-8-sig")
)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
RESULT = json.loads(
    unreal.FeatureLabRuntimeLibrary.capture_lab_viewport(
        "case12-viewport-" + command["capture"] + ".png"
    )
)
```

<a id="source-lab-lab-configure-ginkgo-scene-py"></a>

### lab_configure_ginkgo_scene.py

```python
# 파일 역할: EpicFeatureLab의 lab_configure_ginkgo_scene 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/Megaplant_Library/Tree_Ginkgo/Tree_Ginkgo_01/Tree_Ginkgo_01_

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, unreal
from pathlib import Path

root = Path(unreal.Paths.project_dir()).resolve()
lib = unreal.EditorAssetLibrary
# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 편집 중인 월드를 얻는다. 게임 실행 월드와 다르므로 대상을 혼동하지 않는다.
world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
assert not unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
assert world.get_name() == "FL_12_NaniteVegetation"
# 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
controller = next(
    a
    for a in unreal.get_editor_subsystem(unreal.EditorActorSubsystem).get_all_level_actors()
    if isinstance(a, unreal.FeatureLabVegetationActor)
)
base = "/Game/Megaplant_Library/Tree_Ginkgo/Tree_Ginkgo_01/Tree_Ginkgo_01_"
# 여러 속성을 이름:값 사전으로 한 번에 설정한다. 각 항목이 개별 설정과 대응한다.
controller.set_editor_properties(
    {"megaplant_variants": [lib.load_asset(base + v) for v in "ABCD"], "megaplant_index": 1}
)
controller.prepare_vegetation()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
assert unreal.get_editor_subsystem(unreal.LevelEditorSubsystem).save_current_level()
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
RESULT = {
    "status": "saved",
    "scene": json.loads(controller.capture_vegetation()),
    "collision_policy": "Owned rigid lower-trunk capsule: radius30cm, half-height180cm. Vendor foliage has no supplied physics bodies. GPU wind remains visual.",
}
(root / "Evidence/case12-ginkgo-scene.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-configure-pve-repeat-py"></a>

### lab_configure_pve_repeat.py

```python
# 파일 역할: EpicFeatureLab의 lab_configure_pve_repeat 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Vegetation/PVE_LabConifer
#   /Game/FeatureLab/Vegetation/Generated/SKV_LabConifer_A_Repeat

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, runpy, unreal
from pathlib import Path

root = Path(unreal.Paths.project_dir()).resolve()
result = runpy.run_path(str(root / "Scripts/Lab/lab_configure_pve_variant_a.py"))["RESULT"]
assert result["status"] == "variant_a_editor_opened", result
asset = unreal.EditorAssetLibrary.load_asset("/Game/FeatureLab/Vegetation/PVE_LabConifer")
graph = unreal.FeatureLabRuntimeLibrary.get_lab_vegetation_graph(asset)
for node in graph.get_editor_property("nodes"):
    settings = node.get_settings()
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: isinstance(settings, unreal.PVExportSettings) 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 export_settings이다.
    if isinstance(settings, unreal.PVExportSettings):
        params = settings.get_editor_property("export_settings")
        params.set_editor_property("mesh_name", "SKV_LabConifer_A_Repeat")
        settings.set_editor_property("export_settings", params)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
assert unreal.EditorAssetLibrary.save_loaded_asset(asset, False)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    **result,
    "status": "repeat_a_configured",
    "export": "/Game/FeatureLab/Vegetation/Generated/SKV_LabConifer_A_Repeat",
    "purpose": "Restore exact A scale, random seeds and growth cycles after B; compare exported geometry and skeleton rather than only graph settings",
}
(root / "Evidence/case12-pve-repeat-setup.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-configure-pve-variant-a-py"></a>

### lab_configure_pve_variant_a.py

```python
# 파일 역할: EpicFeatureLab의 lab_configure_pve_variant_a 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Vegetation/PVE_LabConifer
#   /Game/FeatureLab/Vegetation/Generated/SKV_LabConifer_A

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, traceback, unreal
from pathlib import Path

root = Path(unreal.Paths.project_dir()).resolve()
# 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다. 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
try:
    lib = unreal.EditorAssetLibrary
    asset = lib.load_asset("/Game/FeatureLab/Vegetation/PVE_LabConifer")
    graph = unreal.FeatureLabRuntimeLibrary.get_lab_vegetation_graph(asset)
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert graph
    records = []
    for node in graph.get_editor_property("nodes"):
        settings = node.get_settings()
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: isinstance(settings, unreal.PVGrowerSettings) 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 grower_params이다.
        if isinstance(settings, unreal.PVGrowerSettings):
            primary = node.get_name().endswith("_1")
            params = settings.get_editor_property("grower_params")
            # 여러 속성을 이름:값 사전으로 한 번에 설정한다. 각 항목이 개별 설정과 대응한다.
            params.set_editor_properties(
                {
                    "random_seed": 7421 if primary else 17421,
                    "growth_cycles": 4 if primary else 60,
                }
            )
            settings.set_editor_property("grower_params", params)
            # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
            records.append(
                {
                    "node": node.get_name(),
                    "seed": params.get_editor_property("random_seed"),
                    "cycles": params.get_editor_property("growth_cycles"),
                }
            )
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: isinstance(settings, unreal.PVScaleSettings) 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 scale이다.
        if isinstance(settings, unreal.PVScaleSettings):
            settings.set_editor_property("scale", 0.8)
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: isinstance(settings, unreal.PVExportSettings) 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 export_settings이다.
        if isinstance(settings, unreal.PVExportSettings):
            params = settings.get_editor_property("export_settings")
            params.set_editor_property("mesh_name", "SKV_LabConifer_A")
            # 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 collision_generation이다.
            params.set_editor_property(
                "collision_generation", unreal.PVCollisionGeneration.TRUNK_ONLY
            )
            settings.set_editor_property("export_settings", params)
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
    assert len(records) == 2 and lib.save_loaded_asset(asset, False)
    # 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
    opened = unreal.get_editor_subsystem(unreal.AssetEditorSubsystem).open_editor_for_assets(
        [asset]
    )
    # RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
    RESULT = {
        "status": "variant_a_editor_opened",
        "asset": asset.get_path_name(),
        "scale": 0.8,
        "growers": records,
        "export": "/Game/FeatureLab/Vegetation/Generated/SKV_LabConifer_A",
        "trunk_collision": True,
        "nanite_foliage": True,
        "dynamic_wind_settings": "DefaultTreeWindSettings",
        "editor_opened": opened,
    }
except Exception:
    RESULT = {"status": "failed", "error": traceback.format_exc()}
(root / "Evidence/case12-pve-variant-a-setup.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-configure-pve-variant-b-py"></a>

### lab_configure_pve_variant_b.py

```python
# 파일 역할: EpicFeatureLab의 lab_configure_pve_variant_b 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Vegetation/PVE_LabConifer
#   /Game/FeatureLab/Vegetation/Generated/SKV_LabConifer_B

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, traceback, unreal
from pathlib import Path

root = Path(unreal.Paths.project_dir()).resolve()
# 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다. 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
try:
    asset = unreal.EditorAssetLibrary.load_asset("/Game/FeatureLab/Vegetation/PVE_LabConifer")
    graph = unreal.FeatureLabRuntimeLibrary.get_lab_vegetation_graph(asset)
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert graph
    records = []
    for node in graph.get_editor_property("nodes"):
        settings = node.get_settings()
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: isinstance(settings, unreal.PVGrowerSettings) 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 grower_params이다.
        if isinstance(settings, unreal.PVGrowerSettings):
            primary = node.get_name().endswith("_1")
            params = settings.get_editor_property("grower_params")
            # 여러 속성을 이름:값 사전으로 한 번에 설정한다. 각 항목이 개별 설정과 대응한다.
            params.set_editor_properties(
                {
                    "random_seed": 8421 if primary else 18421,
                    "growth_cycles": 6 if primary else 40,
                }
            )
            settings.set_editor_property("grower_params", params)
            # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
            records.append(
                {
                    "node": node.get_name(),
                    "seed": params.get_editor_property("random_seed"),
                    "cycles": params.get_editor_property("growth_cycles"),
                }
            )
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: isinstance(settings, unreal.PVScaleSettings) 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 scale이다.
        if isinstance(settings, unreal.PVScaleSettings):
            settings.set_editor_property("scale", 1.05)
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: isinstance(settings, unreal.PVExportSettings) 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 export_settings이다.
        if isinstance(settings, unreal.PVExportSettings):
            params = settings.get_editor_property("export_settings")
            params.set_editor_property("mesh_name", "SKV_LabConifer_B")
            settings.set_editor_property("export_settings", params)
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
    assert len(records) == 2 and unreal.EditorAssetLibrary.save_loaded_asset(asset, False)
    # RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
    RESULT = {
        "status": "variant_b_configured",
        "asset": asset.get_path_name(),
        "scale": 1.05,
        "growers": records,
        "export": "/Game/FeatureLab/Vegetation/Generated/SKV_LabConifer_B",
        "intent": "Change actual branch growth, random structure and overall size; export must produce different topology and bounds",
    }
except Exception:
    RESULT = {"status": "failed", "error": traceback.format_exc()}
(root / "Evidence/case12-pve-variant-b-setup.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-inspect-pve-sample-py"></a>

### lab_inspect_pve_sample.py

```python
# 파일 역할: 현재 에셋·객체·실행 상태를 읽어 기록하는 관찰 작업.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, traceback, unreal
from pathlib import Path

# 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다. 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
try:
    # 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
    sample = unreal.EditorAssetLibrary.load_asset(
        "/ProceduralVegetationEditor/SampleAssets/StarterContent/ConiferTree_01/PVE_Sample_Conifer_Tree_01"
    )
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert sample
    graph = unreal.FeatureLabRuntimeLibrary.get_lab_vegetation_graph(sample)
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert graph
    nodes = []
    for node in graph.get_editor_property("nodes"):
        settings = node.get_settings()
        row = {
            "node": node.get_name(),
            "class": settings.get_class().get_name(),
            "position": node.get_node_position(),
        }
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: isinstance(settings, unreal.PVExportSettings) 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 export_settings이다.
        if isinstance(settings, unreal.PVExportSettings):
            row["export"] = settings.get_editor_property("export_settings").export_text()
        # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
        nodes.append(row)
    # RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
    RESULT = {
        "status": "inspected",
        "asset": sample.get_path_name(),
        "class": sample.get_class().get_name(),
        "graph": graph.get_path_name(),
        "nodes": nodes,
    }
except Exception:
    RESULT = {"status": "failed", "error": traceback.format_exc()}
(Path(unreal.Paths.project_dir()) / "Evidence/case12-pve-source-graph.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-inspect-pve-wind-example-py"></a>

### lab_inspect_pve_wind_example.py

```python
# 파일 역할: 현재 에셋·객체·실행 상태를 읽어 기록하는 관찰 작업.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, unreal
from pathlib import Path

# 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
graph = unreal.EditorAssetLibrary.load_asset(
    "/ProceduralVegetationEditor/SampleAssets/PCG/Wind_Example_PCG"
)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert graph
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 nodes이다.
RESULT = {
    "graph": graph.get_path_name(),
    "nodes": [
        {"node": n.get_name(), "class": n.get_settings().get_class().get_name()}
        for n in graph.get_editor_property("nodes")
    ],
}
(Path(unreal.Paths.project_dir()) / "Evidence/case12-wind-example-graph.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-intake-ginkgo-py"></a>

### lab_intake_ginkgo.py

```python
# 파일 역할: EpicFeatureLab의 lab_intake_ginkgo 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/Megaplant_Library/Tree_Ginkgo/Tree_Ginkgo_01/
#   /Game/FeatureLab/Vegetation/PVE_LabGinkgo
#   /Game/Megaplant_Library/Tree_Ginkgo

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, unreal
from pathlib import Path

root = Path(unreal.Paths.project_dir()).resolve()
lib = unreal.EditorAssetLibrary
base = "/Game/Megaplant_Library/Tree_Ginkgo/Tree_Ginkgo_01/"
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
assert not unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
meshes = []
materials = {}
for variant in "ABCD":
    mesh = lib.load_asset(base + "Tree_Ginkgo_01_" + variant)
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert isinstance(mesh, unreal.SkeletalMesh)
    # JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
    info = json.loads(unreal.FeatureLabRuntimeLibrary.inspect_lab_vegetation(mesh))
    # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    meshes.append(info)
    for slot in mesh.get_editor_property("materials"):
        material = slot.get_editor_property("material_interface")
        # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
        assert material
        entry = {"class": material.get_class().get_name(), "textures": []}
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: isinstance(material, unreal.MaterialInstanceConstant) 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 parent이다.
        if isinstance(material, unreal.MaterialInstanceConstant):
            parent = material.get_editor_property("parent")
            # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
            assert parent
            entry["parent"] = parent.get_path_name()
            for parameter in material.get_editor_property("texture_parameter_values"):
                texture = parameter.get_editor_property("parameter_value")
                # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: texture 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
                if texture:
                    entry["textures"].append(
                        {
                            "parameter": str(
                                parameter.get_editor_property(
                                    "parameter_info"
                                ).get_editor_property("name")
                            ),
                            "asset": texture.get_path_name(),
                            "width": texture.blueprint_get_size_x(),
                            "height": texture.blueprint_get_size_y(),
                        }
                    )
        materials[material.get_path_name()] = entry
source = base + "PVE_Tree_Ginkgo_01"
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert lib.does_asset_exist(source)
owned = "/Game/FeatureLab/Vegetation/PVE_LabGinkgo"
# 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
graph_asset = (
    lib.load_asset(owned) if lib.does_asset_exist(owned) else lib.duplicate_asset(source, owned)
)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert graph_asset
graph = unreal.FeatureLabRuntimeLibrary.get_lab_vegetation_graph(graph_asset)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert graph
# 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
controller = next(
    a
    for a in unreal.get_editor_subsystem(unreal.EditorActorSubsystem).get_all_level_actors()
    if isinstance(a, unreal.FeatureLabVegetationActor)
)
controller.set_editor_property("megaplant", lib.load_asset(base + "Tree_Ginkgo_01_B"))
controller.prepare_vegetation()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
assert lib.save_loaded_asset(graph_asset, False)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
assert unreal.get_editor_subsystem(unreal.LevelEditorSubsystem).save_current_level()
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
RESULT = {
    "status": "imported_scene_bound_validation_pending",
    "listing": "https://www.fab.com/listings/53f033c3-00ec-425b-b44e-65c04fdbd2b0",
    "publisher": "Quixel Megaplants",
    "title": "Megaplants: Ginkgo",
    "license": "Fab Standard License",
    "listing_ai_usage_flag": "No",
    "engine_version_listed": "5.8",
    "intake_method": "Official Unreal Fab plugin Add to Project in EpicFeatureLab",
    "source_root": "/Game/Megaplant_Library/Tree_Ginkgo",
    "original_pve": source,
    "owned_editable_pve": owned,
    "pve_nodes": len(graph.get_editor_property("nodes")),
    "variants": meshes,
    "materials": materials,
    "scene": json.loads(controller.capture_vegetation()),
    "collision_note": "Imported physics bodies are reported directly. No collision is inferred from a visible tree.",
}
(root / "Evidence/case12-megaplants-intake.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-prepare-pve-graph-py"></a>

### lab_prepare_pve_graph.py

```python
# 파일 역할: EpicFeatureLab의 lab_prepare_pve_graph 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Vegetation/PVE_LabConifer
#   /Game/FeatureLab/Vegetation/Generated

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, traceback, unreal
from pathlib import Path

root = Path(unreal.Paths.project_dir()).resolve()
# 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 nodes이다.
try:
    lib = unreal.EditorAssetLibrary
    source = "/ProceduralVegetationEditor/SampleAssets/StarterContent/ConiferTree_01/PVE_Sample_Conifer_Tree_01"
    destination = "/Game/FeatureLab/Vegetation/PVE_LabConifer"
    lib.make_directory("/Game/FeatureLab/Vegetation/Generated")
    # 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
    asset = lib.load_asset(destination) or lib.duplicate_asset(source, destination)
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert asset
    graph = unreal.FeatureLabRuntimeLibrary.get_lab_vegetation_graph(asset)
    assert graph and graph.get_path_name().startswith(destination + ".")
    nodes = []
    for node in graph.get_editor_property("nodes"):
        settings = node.get_settings()
        row = {"node": node.get_name(), "class": settings.get_class().get_name()}
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: isinstance(settings, unreal.PVExportSettings) 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 export_settings이다.
        if isinstance(settings, unreal.PVExportSettings):
            export = settings.get_editor_property("export_settings")
            # 여러 속성을 이름:값 사전으로 한 번에 설정한다. 각 항목이 개별 설정과 대응한다.
            export.set_editor_properties(
                {
                    "content_browser_folder": unreal.DirectoryPath(
                        path="/Game/FeatureLab/Vegetation/Generated"
                    ),
                    "mesh_name": "SKV_LabConifer_A",
                }
            )
            settings.set_editor_property("export_settings", export)
            row["export"] = export.export_text()
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: isinstance(settings, unreal.PVGrowerSettings) 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 seed이다.
        if isinstance(settings, unreal.PVGrowerSettings):
            row["grower"] = settings.get_editor_property("grower_params").export_text()
            row["seed"] = settings.get_editor_property("seed")
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: isinstance(settings, unreal.PVScaleSettings) 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 scale이다.
        if isinstance(settings, unreal.PVScaleSettings):
            row["scale"] = settings.get_editor_property("scale")
        # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
        nodes.append(row)
    assert any("export" in n for n in nodes)
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
    assert lib.save_loaded_asset(asset, False)
    # RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
    RESULT = {
        "status": "owned_graph_prepared",
        "source_preserved": source,
        "asset": asset.get_path_name(),
        "graph": graph.get_path_name(),
        "node_count": len(nodes),
        "nodes": nodes,
        "export_policy": "Only owned /Game/FeatureLab/Vegetation/Generated output paths are configured; Epic sample assets stay unchanged",
    }
except Exception:
    RESULT = {"status": "failed", "error": traceback.format_exc()}
(root / "Evidence/case12-owned-pve-graph.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-probe-vegetation-collision-py"></a>

### lab_probe_vegetation_collision.py

```python
# 파일 역할: EpicFeatureLab의 lab_probe_vegetation_collision 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, unreal
from pathlib import Path

# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert world


# 함수 line: 이름은 line이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: a, b
def line(a, b):
    hit = unreal.SystemLibrary.line_trace_single(
        world,
        unreal.Vector(*a),
        unreal.Vector(*b),
        unreal.TraceTypeQuery.TRACE_TYPE_QUERY1,
        False,
        [],
        unreal.DrawDebugTrace.NONE,
    )
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: hit is None
    if hit is None:
        return {"blocking": False}
    t = hit.to_tuple()
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return {
        "blocking": bool(t[0]),
        "impact": [t[5].x, t[5].y, t[5].z],
        "component": t[10].get_name() if t[10] else None,
        "actor": t[9].get_path_name() if t[9] else None,
    }


trunk = line((-200, 2000, 150), (200, 2000, 150))
upper = line((-200, 2000, 1200), (200, 2000, 1200))
beside = line((-200, 2150, 150), (200, 2150, 150))
checks = [
    {
        "name": "Actual owned lower-trunk proxy blocks a horizontal ray",
        "passed": trunk["blocking"] and trunk["component"] == "OfficialTrunkProxy",
    },
    {
        "name": "Foliage above lower-trunk proxy does not falsely block",
        "passed": not upper["blocking"],
    },
    {"name": "Space beside trunk remains passable", "passed": not beside["blocking"]},
]
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "status": "passed" if all(c["passed"] for c in checks) else "failed",
    "checks": checks,
    "trunk": trunk,
    "upper_foliage": upper,
    "beside": beside,
    "scope": "Authored rigid lower-trunk gameplay proxy; vendor trees have zero physics bodies. No GPU-deformed collision claim.",
}
(Path(unreal.Paths.project_dir()) / "Evidence/case12-collision-validation.json").write_text(
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

<a id="source-lab-lab-save-pve-exports-py"></a>

### lab_save_pve_exports.py

```python
# 파일 역할: EpicFeatureLab의 lab_save_pve_exports 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Vegetation
#   /Game/FeatureLab/Vegetation/PVE_LabConifer
#   /Game/FeatureLab/Vegetation/Generated/

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import hashlib, json, re, unreal
from pathlib import Path

root = Path(unreal.Paths.project_dir()).resolve()
lib = unreal.EditorAssetLibrary
rows = []
for name in ["SKV_LabConifer_A", "SKV_LabConifer_B", "SKV_LabConifer_A_Repeat"]:
    mesh = lib.load_asset("/Game/FeatureLab/Vegetation/Generated/" + name)
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert mesh, name
    physics = mesh.get_editor_property("physics_asset")
    skeleton = mesh.get_editor_property("skeleton")
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert physics and skeleton
    nanite = mesh.get_editor_property("nanite_settings").export_text()
    row = {
        "asset": mesh.get_path_name(),
        "class": mesh.get_class().get_name(),
        "physics": physics.get_path_name(),
        "skeleton": skeleton.get_path_name(),
        "nanite_enabled": nanite.startswith("(bEnabled=True"),
        "nanite_shape_preservation": (
            "Voxelize" if "ShapePreservation=Voxelize" in nanite else "Other"
        ),
        "assembly_parts": len(re.findall("MeshObjectPath=", nanite)),
        "assembly_instances": len(re.findall("PartIndex=", nanite)),
        "nanite_settings_sha256": hashlib.sha256(nanite.encode()).hexdigest(),
        "user_data": [],
    }
    for data in mesh.get_editor_property("asset_user_data"):
        item = {"class": data.get_class().get_name(), "object": data.get_path_name()}
        for prop in ["is_enabled", "simulation_groups"]:
            # 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다.
            try:
                # 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다.
                value = data.get_editor_property(prop)
                item[prop] = len(value) if prop == "simulation_groups" else value
            except Exception:
                pass
        row["user_data"].append(item)
    # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    rows.append(row)
assert lib.save_directory("/Game/FeatureLab/Vegetation", False, True)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "status": "exports_saved",
    "assets": rows,
    "source_graph": "/Game/FeatureLab/Vegetation/PVE_LabConifer",
    "source_epic_sample_preserved": True,
}
(root / "Evidence/case12-exported-assets.json").write_text(
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

<a id="source-lab-lab-test-vegetation-continuous-py"></a>

### lab_test_vegetation_continuous.py

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
    a for a in unreal.ObjectIterator(unreal.FeatureLabVegetationActor) if a.get_world() == world
)
assert getattr(builtins, "_fl12_continuous", {}).get("status") != "running"
state = {
    "status": "running",
    "phase": 0,
    "started": time.time(),
    "phase_time": unreal.GameplayStatics.get_time_seconds(world),
    "checks": [],
    "snapshots": {},
    "captures": {},
    "handle": None,
}
builtins._fl12_continuous = state
target = root / "Evidence/case12-continuous-runtime-validation.json"
phases = [
    "calm_a",
    "calm_b",
    "normal_a",
    "normal_b",
    "strong_a",
    "strong_b",
    "direction_y",
    "ginkgo_c",
    "ginkgo_d",
    "ginkgo_a",
    "ginkgo_b",
    "middle",
    "far",
    "forest_conifer",
    "forest_ginkgo",
    "reset",
]


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
    controller.reset_vegetation()
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
            raise TimeoutError("Continuous viewport observation timed out")
        now = unreal.GameplayStatics.get_time_seconds(world)
        if now - state["phase_time"] < 2.5:
            # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
            return
        name = phases[state["phase"]]
        # JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
        snap = json.loads(controller.capture_vegetation())
        state["snapshots"][name] = snap
        check(
            name + ": actual three tree instances and stable forest allocation",
            [c["instances"] for c in snap["components"]] == [1, 1, 1, 64],
        )
        check(name + ": four official variants available", snap["megaplant_variant_count"] == 4)
        check(
            name + ": GPU provider active without global wind override",
            snap["gpu_only_wind_provider"]
            and snap["wind_subsystem"]
            and snap["wind_amplitude_override"] == -1,
        )
        # JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
        image = json.loads(
            unreal.FeatureLabRuntimeLibrary.capture_lab_viewport(
                "case12-continuous-" + name + ".png"
            )
        )
        check(
            name + ": native GPU frame saved",
            image.get("saved") and image["width"] > 600 and image["height"] > 300,
            image,
        )
        state["captures"][name] = image
        if name.startswith("ginkgo_"):
            expected = {"ginkgo_a": 0, "ginkgo_b": 1, "ginkgo_c": 2, "ginkgo_d": 3}[name]
            check(
                name + ": selected official mesh matches variant",
                snap["megaplant_index"] == expected
                and snap["components"][2]["asset"].endswith(
                    "Tree_Ginkgo_01_" + name[-1].upper() + ".Tree_Ginkgo_01_" + name[-1].upper()
                ),
            )
        if name.startswith("forest_"):
            check(
                name + ": forest is rendered with selected species",
                snap["forest_visible"]
                and snap["megaplant_forest"] == (name == "forest_ginkgo")
                and ("Megaplant_Library" in snap["components"][3]["asset"])
                == (name == "forest_ginkgo"),
            )
        if name == "reset":
            check(
                "reset restores complete baseline",
                snap["wind_amplitude"] == 1
                and snap["direction"] == 0
                and snap["view"] == 0
                and not snap["forest_visible"]
                and not snap["megaplant_forest"]
                and snap["megaplant_index"] == 1,
            )
            finish("controls_passed_gpu_motion_analysis_pending")
            # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
            return
        state["phase"] += 1
        following = phases[state["phase"]]
        if following == "normal_a":
            controller.normal_wind()
        elif following == "strong_a":
            controller.strong_wind()
        elif following == "direction_y":
            controller.turn_wind()
        elif following.startswith("ginkgo_"):
            controller.cycle_megaplant()
        elif following in ["middle", "far"]:
            controller.cycle_view()
        elif following == "forest_conifer":
            controller.cycle_view()
            controller.toggle_forest()
        elif following == "forest_ginkgo":
            controller.toggle_forest_species()
        elif following == "reset":
            controller.reset_vegetation()
        state["phase_time"] = now
        write()
    except Exception:
        state["error"] = traceback.format_exc()
        finish("failed")
    finally:
        state["in_tick"] = False


check(
    "Temporal anti-aliasing remains enabled",
    unreal.SystemLibrary.get_console_variable_int_value("r.AntiAliasingMethod") in [2, 4],
)
controller.reset_vegetation()
controller.calm_wind()
state["handle"] = unreal.register_slate_post_tick_callback(tick)
write()
RESULT = {"status": "running", "report": str(target), "phases": phases}
```

<a id="source-lab-lab-test-vegetation-runtime-py"></a>

### lab_test_vegetation_runtime.py

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
assert world and root.name == "EpicFeatureLab"
controller = next(
    a for a in unreal.ObjectIterator(unreal.FeatureLabVegetationActor) if a.get_world() == world
)
assert getattr(builtins, "_fl12_runtime", {}).get("status") != "running"
state = {
    "status": "running",
    "phase": 0,
    "started": time.time(),
    "phase_game_time": unreal.GameplayStatics.get_time_seconds(world),
    "checks": [],
    "snapshots": {},
    "captures": {},
    "handle": None,
}
builtins._fl12_runtime = state
target = root / "Evidence/case12-runtime-validation.json"
old = {
    name: unreal.SystemLibrary.get_console_variable_int_value(name)
    for name in ["r.AntiAliasingMethod", "r.MotionBlurQuality"]
}
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 name의 값이 매번 바뀐다.
for name in old:
    unreal.SystemLibrary.execute_console_command(world, name + " 0")
controller.reset_vegetation()
controller.calm_wind()
phases = [
    "calm_a",
    "calm_b",
    "normal_a",
    "normal_b",
    "strong_a",
    "strong_b",
    "direction_y",
    "middle",
    "far",
    "forest",
    "reset",
]


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
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 (name, value)의 값이 매번 바뀐다.
    for name, value in old.items():
        unreal.SystemLibrary.execute_console_command(world, name + " " + str(value))
    controller.reset_vegetation()
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
            raise TimeoutError("Vegetation GPU observation timed out")
        now = unreal.GameplayStatics.get_time_seconds(world)
        if now - state["phase_game_time"] < 2.0:
            # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
            return
        name = phases[state["phase"]]
        # JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
        snap = json.loads(controller.capture_vegetation())
        state["snapshots"][name] = snap
        check(
            name + ": GPU provider and world subsystem active",
            snap["gpu_only_wind_provider"] and snap["wind_subsystem"],
        )
        check(
            name + ": no global amplitude override",
            snap["wind_amplitude_override"] == -1,
            snap["wind_amplitude_override"],
        )
        check(
            name + ": stable instance allocation",
            snap["forest_instances"] == 64
            and [x["instances"] for x in snap["components"][:2]] == [1, 1],
        )
        output = root / ("Evidence/case12-gpu-" + name + ".png")
        unreal.AutomationLibrary.take_high_res_screenshot(1280, 720, str(output))
        state["captures"][name] = str(output)
        if name == "reset":
            check(
                "reset restores wind direction camera and forest visibility",
                snap["wind_amplitude"] == 1
                and snap["direction"] == 0
                and snap["view"] == 0
                and not snap["forest_visible"],
            )
            for captured in list(state["captures"].values())[:-1]:
                check(
                    Path(captured).name + ": actual render output saved",
                    Path(captured).is_file() and Path(captured).stat().st_size > 10000,
                )
            finish("runtime_controls_passed_visual_analysis_pending")
            # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
            return
        state["phase"] += 1
        following = phases[state["phase"]]
        if following == "normal_a":
            controller.normal_wind()
        elif following == "strong_a":
            controller.strong_wind()
        elif following == "direction_y":
            controller.turn_wind()
        elif following in ["middle", "far"]:
            controller.cycle_view()
        elif following == "forest":
            controller.cycle_view()
            controller.toggle_forest()
        elif following == "reset":
            controller.reset_vegetation()
        state["phase_game_time"] = now
        write()
    except Exception:
        state["error"] = traceback.format_exc()
        finish("failed")
    finally:
        state["in_tick"] = False


state["handle"] = unreal.register_slate_post_tick_callback(tick)
write()
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "status": "running",
    "report": str(target),
    "phases": phases,
    "visual_metric_pending": True,
    "cpu_bone_motion_is_not_used_as_gpu_wind_evidence": True,
}
```

<a id="source-lab-lab-verify-vegetation-roundtrip-py"></a>

### lab_verify_vegetation_roundtrip.py

```python
# 파일 역할: 완성 결과를 실제 값과 비교하는 검증 작업. 생성 코드와 검사 코드를 구분한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Vegetation/
#   /Game/FeatureLab/Vegetation/Generated/SKV_LabConifer_
#   /Game/Megaplant_Library/Tree_Ginkgo/Textures/

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, unreal
from pathlib import Path

root = Path(unreal.Paths.project_dir()).resolve()
# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
editor = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
assert not editor.get_game_world()
# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 편집 중인 월드를 얻는다. 게임 실행 월드와 다르므로 대상을 혼동하지 않는다.
world = editor.get_editor_world()
lib = unreal.EditorAssetLibrary
# 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
controller = next(
    a
    for a in unreal.get_editor_subsystem(unreal.EditorActorSubsystem).get_all_level_actors()
    if isinstance(a, unreal.FeatureLabVegetationActor)
)
# JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
snap = json.loads(controller.capture_vegetation())
checks = []


# 함수 check: 이름은 check이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: name, condition, actual 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
def check(name, condition, actual=None):
    checks.append({"name": name, "passed": bool(condition), "actual": actual})


check(
    "Reopened saved vegetation map",
    world.get_name() == "FL_12_NaniteVegetation",
    world.get_name(),
)
check("All four official variants persist", snap["megaplant_variant_count"] == 4)
check(
    "Official B mesh selection persists",
    snap["megaplant_index"] == 1 and "Tree_Ginkgo_01_B" in snap["components"][2]["asset"],
)
check(
    "Three single trees and 64 forest transforms persist",
    [c["instances"] for c in snap["components"]] == [1, 1, 1, 64],
)
check(
    "Wind providers remain bound",
    all(c["provider_assigned"] and c["registered"] for c in snap["components"]),
)
check(
    "Owned lower-trunk collision persists",
    snap["authored_trunk_proxy_enabled"] and snap["trunk_proxy_radius_cm"] == 30,
)
check(
    "Owned generated meshes persist",
    all(
        lib.does_asset_exist("/Game/FeatureLab/Vegetation/Generated/SKV_LabConifer_" + v)
        for v in ["A", "B", "A_Repeat"]
    ),
)
for source in ["PVE_LabConifer", "PVE_LabGinkgo"]:
    # 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
    graph = unreal.FeatureLabRuntimeLibrary.get_lab_vegetation_graph(
        lib.load_asset("/Game/FeatureLab/Vegetation/" + source)
    )
    # 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 nodes이다.
    check(
        source + ": editable graph persists",
        bool(graph) and len(graph.get_editor_property("nodes")) > 10,
    )
check(
    "Official materials and all four texture inputs persist",
    all(
        lib.does_asset_exist("/Game/Megaplant_Library/Tree_Ginkgo/Textures/" + name)
        for name in [
            "T_Ginkgo_Trunkmat_C",
            "T_Ginkgo_Trunkmat_NAH",
            "T_Ginkgo_Foliage_01_CA",
            "T_Ginkgo_Foliage_01_NT",
        ]
    ),
)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
RESULT = {
    "status": "passed" if all(c["passed"] for c in checks) else "failed",
    "checks": checks,
    "scene": snap,
    "engine": unreal.SystemLibrary.get_engine_version(),
    "rendering": json.loads(unreal.FeatureLabRuntimeLibrary.inspect_lab_rendering()),
}
(root / "Evidence/case12-roundtrip-validation.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-source-mutablesample-featurelabvegetation-cpp"></a>

### FeatureLabVegetation.cpp

```cpp
// 파일 역할: 12·18번 식생 생성 자료와 스킨드 나무·바람·숲 표시
// 클래스=작업 종류, 객체=실제 한 개, 포인터(* 또는 TObjectPtr)=다른 객체를 가리키는 참조.
// nullptr은 대상 없음, bool은 참/거짓, TArray는 순서 있는 목록, FString은 문자열이다.
// WITH_EDITOR 구간은 에디터 빌드에서만 사용하는 코드다. 원본과의 토큰 비교 결과는 code-validation.json에 기록한다.

#include "FeatureLabVegetation.h"
#include "FeatureLabRuntime.h"
#include "Components/InstancedSkinnedMeshComponent.h"
#include "Components/InputComponent.h"
#include "Components/CapsuleComponent.h"
#include "Camera/CameraComponent.h"
#include "DynamicWindData.h"
#include "DynamicWindSkeletalData.h"
#include "DynamicWindParameters.h"
#include "Subsystems/SubsystemBlueprintLibrary.h"
#include "Subsystems/WorldSubsystem.h"
#include "Engine/SkeletalMesh.h"
#include "Engine/Engine.h"
#include "GameFramework/PlayerController.h"
#include "Kismet/GameplayStatics.h"
#include "PhysicsEngine/PhysicsAsset.h"
#include "Rendering/SkeletalMeshRenderData.h"
#include "Rendering/SkeletalMeshLODRenderData.h"
#include "Serialization/JsonSerializer.h"
#include "Misc/SecureHash.h"
#include "HAL/IConsoleManager.h"
// 빌드 조건에 따라 포함할 코드를 고른다. 게임 실행 중의 if 조건과 달리 빌드할 때 구분한다.
#if WITH_EDITOR
#include "ProceduralVegetation.h"
#include "MeshDescription.h"
#endif
// 【함수 역할】이후 작업에 사용할 객체나 값을 찾는다. 찾지 못했을 때 빈 참조가 반환될 수 있으므로 호출하는 쪽의 검사도 필요하다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
UObject *UFeatureLabRuntimeLibrary::GetLabVegetationGraph(UObject *Asset)
{
// 빌드 조건에 따라 포함할 코드를 고른다. 게임 실행 중의 if 조건과 달리 빌드할 때 구분한다.
#if WITH_EDITOR
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Asset)
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return nullptr;
    const FString Path = Asset->GetPathName();
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Path.StartsWith(TEXT("/Game/FeatureLab/Vegetation/")) &&
        !Path.StartsWith(TEXT("/ProceduralVegetationEditor/SampleAssets/")))
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return nullptr;
    auto *Vegetation = Cast<UProceduralVegetationInterface>(Asset);
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return Vegetation ? Vegetation->GetGraph() : nullptr;
#else
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return nullptr;
#endif
}
namespace
{
FString VegetationJSON(TSharedRef<FJsonObject> Object)
{
    FString Text;
    auto Writer = TJsonWriterFactory<>::Create(&Text);
    FJsonSerializer::Serialize(Object, Writer);
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return Text;
}
FString VegetationHash(FMD5 &Hash)
{
    uint8 Bytes[16];
    Hash.Final(Bytes);
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return BytesToHex(Bytes, 16);
}
UWorldSubsystem *VegetationWindSubsystem(UWorld *World)
{
    auto *Class = FindObject<UClass>(nullptr, TEXT("/Script/DynamicWind.DynamicWindSubsystem"));
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return World && Class ? USubsystemBlueprintLibrary::GetWorldSubsystem(World, Class) : nullptr;
}
TSharedPtr<FJsonValue> VegetationVector(FVector P)
{
    TArray<TSharedPtr<FJsonValue>> A;
    A.Add(MakeShared<FJsonValueNumber>(P.X));
    A.Add(MakeShared<FJsonValueNumber>(P.Y));
    A.Add(MakeShared<FJsonValueNumber>(P.Z));
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return MakeShared<FJsonValueArray>(A);
}
} // namespace
// 【함수 역할】현재 객체와 실행 결과를 읽어 검증용 자료로 반환한다. 결과를 만드는 함수와 결과를 측정하는 함수를 구분해서 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
FString UFeatureLabRuntimeLibrary::InspectLabVegetation(UObject *Asset)
{
    auto O = MakeShared<FJsonObject>();
    auto *Mesh = Cast<USkeletalMesh>(Asset);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Mesh)
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return TEXT("{}");
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetStringField(TEXT("asset"), Mesh->GetPathName());
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("bones"), Mesh->GetRefSkeleton().GetNum());
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("materials"), Mesh->GetMaterials().Num());
    O->SetField(TEXT("bounds_origin"), VegetationVector(Mesh->GetBounds().Origin));
    O->SetField(TEXT("bounds_extent"), VegetationVector(Mesh->GetBounds().BoxExtent));
    FMD5 BoneHash;
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (int32 I = 0; I < Mesh->GetRefSkeleton().GetNum(); ++I)
    {
        const FString S =
            FString::Printf(TEXT("%s|%d|%s\n"), *Mesh->GetRefSkeleton().GetBoneName(I).ToString(),
                            Mesh->GetRefSkeleton().GetParentIndex(I),
                            *Mesh->GetRefSkeleton().GetRefBonePose()[I].ToString());
        FTCHARToUTF8 Bytes(*S);
        BoneHash.Update(reinterpret_cast<const uint8 *>(Bytes.Get()), Bytes.Length());
    }
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetStringField(TEXT("reference_skeleton_md5"), VegetationHash(BoneHash));
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (auto *D = Mesh->GetResourceForRendering())
    {
        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
        O->SetBoolField(TEXT("valid_nanite_render_data"), D->HasValidNaniteData());
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (!D->LODRenderData.IsEmpty())
        {
            const auto &LOD = D->LODRenderData[0];
            // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
            O->SetNumberField(TEXT("fallback_vertices"), LOD.GetNumVertices());
            // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
            O->SetNumberField(TEXT("fallback_triangles"), LOD.GetTotalFaces());
// 빌드 조건에 따라 포함할 코드를 고른다. 게임 실행 중의 if 조건과 달리 빌드할 때 구분한다.
#if WITH_EDITOR
            FMD5 Positions;
            const auto &Buffer = LOD.StaticVertexBuffers.PositionVertexBuffer;
            // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
            if (Buffer.GetNumVertices() && Buffer.GetVertexData())
            {
                // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
                for (uint32 I = 0; I < Buffer.GetNumVertices(); ++I)
                {
                    const FVector3f P = Buffer.VertexPosition(I);
                    Positions.Update(reinterpret_cast<const uint8 *>(&P), sizeof(P));
                }
                // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
                O->SetStringField(TEXT("fallback_positions_md5"), VegetationHash(Positions));
            }
#endif
        }
    }
// 빌드 조건에 따라 포함할 코드를 고른다. 게임 실행 중의 if 조건과 달리 빌드할 때 구분한다.
#if WITH_EDITORONLY_DATA
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetBoolField(TEXT("nanite_enabled"), Mesh->IsNaniteEnabled());
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetBoolField(TEXT("nanite_assembly"), Mesh->IsNaniteAssembly());
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("assembly_parts"),
                      Mesh->GetNaniteSettings().NaniteAssemblyData.Parts.Num());
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("assembly_instances"),
                      Mesh->GetNaniteSettings().NaniteAssemblyData.Nodes.Num());
#endif
// 빌드 조건에 따라 포함할 코드를 고른다. 게임 실행 중의 if 조건과 달리 빌드할 때 구분한다.
#if WITH_EDITOR
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (const auto *Source = Mesh->GetMeshDescription(0))
    {
        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
        O->SetNumberField(TEXT("source_vertices"), Source->Vertices().Num());
        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
        O->SetNumberField(TEXT("source_triangles"), Source->Triangles().Num());
        FMD5 Positions, Topology;
        const auto VertexPositions = Source->GetVertexPositions();
        // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
        for (const FVertexID ID : Source->Vertices().GetElementIDs())
        {
            const FVector3f P = VertexPositions[ID];
            Positions.Update(reinterpret_cast<const uint8 *>(&P), sizeof(P));
        }
        // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
        for (const FTriangleID ID : Source->Triangles().GetElementIDs())
            // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
            for (const FVertexID V : Source->GetTriangleVertices(ID))
            {
                const int32 Index = V.GetValue();
                Topology.Update(reinterpret_cast<const uint8 *>(&Index), sizeof(Index));
            }
        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
        O->SetStringField(TEXT("source_positions_md5"), VegetationHash(Positions));
        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
        O->SetStringField(TEXT("source_topology_md5"), VegetationHash(Topology));
    }
#endif
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("physics_bodies"),
                      Mesh->GetPhysicsAsset() ? Mesh->GetPhysicsAsset()->SkeletalBodySetups.Num()
                                              : 0);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (auto *Wind = Mesh->GetAssetUserData<UDynamicWindSkeletalData>())
    {
        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
        O->SetBoolField(TEXT("dynamic_wind_enabled"), Wind->bIsEnabled);
        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
        O->SetNumberField(TEXT("wind_simulation_groups"), Wind->SimulationGroups.Num());
        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
        O->SetNumberField(TEXT("wind_bone_groups"), Wind->SimulationGroupBones.Num());
        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
        O->SetNumberField(TEXT("wind_chains"), Wind->BoneChains.Num());
        int32 WindBones = 0;
        // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
        for (const auto &G : Wind->SimulationGroupBones)
            WindBones += G.BoneIndices.Num();
        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
        O->SetNumberField(TEXT("wind_mapped_bones"), WindBones);
    }
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return VegetationJSON(O);
}
// 【함수 역할】클래스의 기본 부품과 기본값을 준비하는 생성자다. 이 시점에는 게임 월드가 모두 준비됐다고 가정하지 않는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
AFeatureLabVegetationActor::AFeatureLabVegetationActor()
{
    PrimaryActorTick.bCanEverTick = true;
    // 이 액터의 기본 컴포넌트를 만든다. 부품 생성 뒤 장면 부착·재질·충돌 설정이 이어지는지 확인한다.
    SetRootComponent(CreateDefaultSubobject<USceneComponent>(TEXT("Root")));
    // 이 액터의 기본 컴포넌트를 만든다. 부품 생성 뒤 장면 부착·재질·충돌 설정이 이어지는지 확인한다.
    WindProvider = CreateDefaultSubobject<UDynamicWindData>(TEXT("DynamicWindProvider"));
    // 이 액터의 기본 컴포넌트를 만든다. 부품 생성 뒤 장면 부착·재질·충돌 설정이 이어지는지 확인한다.
    TreeA = CreateDefaultSubobject<UInstancedSkinnedMeshComponent>(TEXT("TreeA"));
    // 이 액터의 기본 컴포넌트를 만든다. 부품 생성 뒤 장면 부착·재질·충돌 설정이 이어지는지 확인한다.
    TreeB = CreateDefaultSubobject<UInstancedSkinnedMeshComponent>(TEXT("TreeB"));
    // 이 액터의 기본 컴포넌트를 만든다. 부품 생성 뒤 장면 부착·재질·충돌 설정이 이어지는지 확인한다.
    OfficialPlant = CreateDefaultSubobject<UInstancedSkinnedMeshComponent>(TEXT("OfficialPlant"));
    // 이 액터의 기본 컴포넌트를 만든다. 부품 생성 뒤 장면 부착·재질·충돌 설정이 이어지는지 확인한다.
    Forest = CreateDefaultSubobject<UInstancedSkinnedMeshComponent>(TEXT("Forest"));
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (auto *C : {TreeA.Get(), TreeB.Get(), OfficialPlant.Get(), Forest.Get()})
    {
        C->SetupAttachment(RootComponent);
        C->SetCollisionEnabled(ECollisionEnabled::NoCollision);
    }
    // 이 액터의 기본 컴포넌트를 만든다. 부품 생성 뒤 장면 부착·재질·충돌 설정이 이어지는지 확인한다.
    Camera = CreateDefaultSubobject<UCameraComponent>(TEXT("Camera"));
    Camera->SetupAttachment(RootComponent);
    Camera->FieldOfView = 55.f;
    UpdateCamera();
    // 이 액터의 기본 컴포넌트를 만든다. 부품 생성 뒤 장면 부착·재질·충돌 설정이 이어지는지 확인한다.
    OfficialTrunk = CreateDefaultSubobject<UCapsuleComponent>(TEXT("OfficialTrunkProxy"));
    OfficialTrunk->SetupAttachment(RootComponent);
    OfficialTrunk->SetCapsuleSize(30.f, 180.f);
    OfficialTrunk->SetRelativeLocation(FVector(0, 2000, 180));
    OfficialTrunk->SetCollisionProfileName(TEXT("BlockAll"));
}
// 【함수 역할】선택한 수종과 변형을 실제 메시 컴포넌트에 설치하고 개별 나무·64그루 숲의 인스턴스를 다시 구성한다. 선택 숫자만 바꾸는 함수가 아니다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabVegetationActor::PrepareVegetation()
{
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (MegaplantVariants.IsValidIndex(MegaplantIndex))
        Megaplant = MegaplantVariants[MegaplantIndex];
    const TArray<UInstancedSkinnedMeshComponent *> Components = {TreeA, TreeB, OfficialPlant,
                                                                 Forest};
    const TArray<USkeletalMesh *> Meshes = {VariantA, VariantB, Megaplant,
                                            bMegaplantForest ? Megaplant : VariantA};
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (int32 I = 0; I < Components.Num(); ++I)
    {
        auto *C = Components[I];
        C->ClearInstances();
        C->SetSkinnedAssetAndUpdate(Meshes[I]);
        C->SetTransformProvider(WindProvider);
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (!Meshes[I])
            continue;
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (I < 3)
            C->AddInstance(FTransform(FVector(0, (I - 1) * 2000, 0)), 0);
        else
        {
            FRandomStream Random(7421);
            // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
            for (int32 X = 0; X < 8; ++X)
                // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
                for (int32 Y = 0; Y < 8; ++Y)
                {
                    FTransform T(FRotator(0, Random.RandRange(0, 7) * 45.f, 0),
                                 FVector(6500 + X * 2500, 6500 + Y * 2500, 0),
                                 FVector(Random.FRandRange(.8f, 1.2f)));
                    C->AddInstance(T, 0);
                }
        }
    }
    // 화면 표시 여부를 바꾼다. 뼈 포즈 계산이나 물리까지 중단하는 호출과는 다르다.
    Forest->SetVisibility(bForest);
    UpdateWind();
    UpdateCamera();
}
// 【함수 역할】액터가 게임 월드에서 실행을 시작할 때 엔진이 호출한다. 생성자에서 부품을 만든 뒤 실제 월드·플레이어·입력과 연결하는 초기 준비 단계다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabVegetationActor::BeginPlay()
{
    // 부모 클래스의 기본 처리를 먼저/함께 실행한다. 자식 클래스의 추가 작업만으로 엔진 기본 동작을 대체하지 않는다.
    Super::BeginPlay();
    PrepareVegetation();
    // 【함수 역할】이후 작업에 사용할 객체나 값을 찾는다. 찾지 못했을 때 빈 참조가 반환될 수 있으므로 호출하는 쪽의 검사도 필요하다.
    // 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (auto *PC = UGameplayStatics::GetPlayerController(this, 0))
    {
        AActor::EnableInput(PC);
        PC->SetViewTarget(this);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::One, IE_Pressed, this,
                                &AFeatureLabVegetationActor::CalmWind);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::Two, IE_Pressed, this,
                                &AFeatureLabVegetationActor::NormalWind);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::Three, IE_Pressed, this,
                                &AFeatureLabVegetationActor::StrongWind);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::D, IE_Pressed, this, &AFeatureLabVegetationActor::TurnWind);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::C, IE_Pressed, this, &AFeatureLabVegetationActor::CycleView);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::F, IE_Pressed, this,
                                &AFeatureLabVegetationActor::ToggleForest);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::R, IE_Pressed, this,
                                &AFeatureLabVegetationActor::ResetVegetation);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::V, IE_Pressed, this,
                                &AFeatureLabVegetationActor::CycleMegaplant);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::G, IE_Pressed, this,
                                &AFeatureLabVegetationActor::ToggleForestSpecies);
    }
}
// The installed public subsystem header includes a private log header. Use its public reflected
// UFUNCTION instead.
// 【함수 역할】실제 식생 바람 서브시스템에 세기·방향 등의 파라미터를 전달한다. 화면의 안내 문자열만 갱신하는 작업과 구분한다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabVegetationActor::UpdateWind()
{
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (auto *S = VegetationWindSubsystem(GetWorld()))
    {
        struct
        {
            FDynamicWindParameters Parameters;
        } Args;
        auto &P = Args.Parameters;
        P.WindAmplitude = WindAmplitude;
        P.WindSpeed = 15.f;
        P.WindDirection = Direction ? FVector::RightVector : FVector::ForwardVector;
        P.SimulationExtents = 50000.f;
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (auto *Function = S->FindFunction(TEXT("UpdateWindParameters")))
            S->ProcessEvent(Function, &Args);
    }
}
// 【함수 역할】입력이나 현재 선택값을 실제 객체의 상태에 반영한다. 값 저장과 화면·물리·애니메이션 갱신 호출을 함께 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabVegetationActor::SetWind(float Amplitude)
{
    WindAmplitude = FMath::Clamp(Amplitude, 0.f, 3.f);
    UpdateWind();
}
// 【함수 역할】이름은 TurnWind이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabVegetationActor::TurnWind()
{
    Direction = 1 - Direction;
    UpdateWind();
}
// 【함수 역할】현재 선택 상태를 다음 상태로 바꾸고 결과에 반영한다. 켬·끔 전환인지 여러 선택지 순환인지 조건문을 따라 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabVegetationActor::CycleView()
{
    View = (View + 1) % 4;
    UpdateCamera();
}
// 【함수 역할】현재 선택 상태를 다음 상태로 바꾸고 결과에 반영한다. 켬·끔 전환인지 여러 선택지 순환인지 조건문을 따라 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabVegetationActor::ToggleForest()
{
    bForest = !bForest;
    // 화면 표시 여부를 바꾼다. 뼈 포즈 계산이나 물리까지 중단하는 호출과는 다르다.
    Forest->SetVisibility(bForest);
}
// 【함수 역할】현재 선택 상태를 다음 상태로 바꾸고 결과에 반영한다. 켬·끔 전환인지 여러 선택지 순환인지 조건문을 따라 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabVegetationActor::CycleMegaplant()
{
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!MegaplantVariants.IsEmpty())
    {
        MegaplantIndex = (MegaplantIndex + 1) % MegaplantVariants.Num();
        PrepareVegetation();
    }
}
// 【함수 역할】현재 선택 상태를 다음 상태로 바꾸고 결과에 반영한다. 켬·끔 전환인지 여러 선택지 순환인지 조건문을 따라 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabVegetationActor::ToggleForestSpecies()
{
    bMegaplantForest = !bMegaplantForest;
    PrepareVegetation();
}
// 【함수 역할】바람 세기 1, 첫 방향·첫 시점, 숲 끄기와 기본 은행나무 변형으로 돌린 뒤 실제 컴포넌트에 다시 반영한다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabVegetationActor::ResetVegetation()
{
    WindAmplitude = 1.f;
    Direction = View = 0;
    bForest = false;
    bMegaplantForest = false;
    MegaplantIndex = 1;
    ++ResetCount;
    PrepareVegetation();
}
// 【함수 역할】입력이나 현재 선택값을 실제 객체의 상태에 반영한다. 값 저장과 화면·물리·애니메이션 갱신 호출을 함께 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabVegetationActor::UpdateCamera()
{
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Camera)
        return;
    const FVector Positions[] = {FVector(4500, -6500, 2400), FVector(11000, -16000, 7000),
                                 FVector(30000, -38000, 21000), FVector(25000, -18000, 23000)};
    const FVector Target = View == 3 ? FVector(15000, 15000, 1000) : FVector(0, -400, 1050);
    Camera->SetRelativeLocation(Positions[View]);
    Camera->SetRelativeRotation((Target - Positions[View]).Rotation());
}
// 【함수 역할】매 갱신 시점에 상태를 확인하고 동작을 진행한다. DeltaSeconds는 이번 갱신까지 지난 시간이며, 함수가 1초에 정확히 60번 불린다고 가정하지 않는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabVegetationActor::Tick(float DeltaSeconds)
{
    // 부모 클래스의 기본 처리를 먼저/함께 실행한다. 자식 클래스의 추가 작업만으로 엔진 기본 동작을 대체하지 않는다.
    Super::Tick(DeltaSeconds);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (GEngine)
        GEngine->AddOnScreenDebugMessage(
            uint64(GetUniqueID()), 0.f, FColor::Green,
            FString::Printf(
                TEXT(
                    "PVE / Nanite Foliage | 1/2/3 Wind %.1f | D Direction %s | C View %d/4 | F Forest %s (64) | R Reset"),
                WindAmplitude, Direction ? TEXT("Y") : TEXT("X"), View + 1,
                bForest ? TEXT("ON") : TEXT("OFF")));
}
// 【함수 역할】현재 객체와 실행 결과를 읽어 검증용 자료로 반환한다. 결과를 만드는 함수와 결과를 측정하는 함수를 구분해서 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
FString AFeatureLabVegetationActor::CaptureVegetation()
{
    auto O = MakeShared<FJsonObject>();
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("wind_amplitude"), WindAmplitude);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("direction"), Direction);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("view"), View);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetBoolField(TEXT("forest_visible"), Forest->IsVisible());
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("forest_instances"), Forest->GetInstanceCount());
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("reset_count"), ResetCount);
    O->SetField(TEXT("camera_location"), VegetationVector(Camera->GetComponentLocation()));
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetBoolField(TEXT("gpu_only_wind_provider"), WindProvider && WindProvider->IsGpuOnly());
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetBoolField(TEXT("wind_subsystem"), VegetationWindSubsystem(GetWorld()) != nullptr);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (auto *V = IConsoleManager::Get().FindConsoleVariable(TEXT("DynamicWind.OverrideAmplitude")))
        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
        O->SetNumberField(TEXT("wind_amplitude_override"), V->GetFloat());
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("megaplant_index"), MegaplantIndex);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetBoolField(TEXT("megaplant_forest"), bMegaplantForest);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("megaplant_variant_count"), MegaplantVariants.Num());
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetBoolField(TEXT("authored_trunk_proxy_enabled"),
                    OfficialTrunk->GetCollisionEnabled() != ECollisionEnabled::NoCollision);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("trunk_proxy_radius_cm"), OfficialTrunk->GetScaledCapsuleRadius());
    TArray<TSharedPtr<FJsonValue>> Assets;
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (auto *C : {TreeA.Get(), TreeB.Get(), OfficialPlant.Get(), Forest.Get()})
    {
        auto A = MakeShared<FJsonObject>();
        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
        A->SetStringField(TEXT("component"), C->GetName());
        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
        A->SetStringField(TEXT("asset"), C->GetSkinnedAsset() ? C->GetSkinnedAsset()->GetPathName()
                                                              : TEXT("null"));
        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
        A->SetNumberField(TEXT("instances"), C->GetInstanceCount());
        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
        A->SetBoolField(TEXT("registered"), C->IsRegistered());
        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
        A->SetBoolField(TEXT("provider_assigned"), C->GetTransformProvider() == WindProvider);
        Assets.Add(MakeShared<FJsonValueObject>(A));
    }
    O->SetArrayField(TEXT("components"), Assets);
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return VegetationJSON(O);
}
```

<a id="source-source-mutablesample-featurelabvegetation-h"></a>

### FeatureLabVegetation.h

```cpp
// 파일 역할: 12·18번 식생 생성 자료와 스킨드 나무·바람·숲 표시
// 클래스=작업 종류, 객체=실제 한 개, 포인터(* 또는 TObjectPtr)=다른 객체를 가리키는 참조.
// nullptr은 대상 없음, bool은 참/거짓, TArray는 순서 있는 목록, FString은 문자열이다.
// WITH_EDITOR 구간은 에디터 빌드에서만 사용하는 코드다. 원본과의 토큰 비교 결과는 code-validation.json에 기록한다.

#pragma once
#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "FeatureLabVegetation.generated.h"
class USkeletalMesh;
class UInstancedSkinnedMeshComponent;
class UDynamicWindData;
class UCameraComponent;
class UCapsuleComponent;
// 아래 클래스 또는 구조체를 언리얼이 인식하도록 선언한다. 일반 C++ 선언에 엔진 등록 정보를 덧붙인 것이다.
UCLASS()
class MUTABLESAMPLE_API AFeatureLabVegetationActor : public AActor
{
    // 언리얼 헤더 도구가 필요한 보조 코드를 연결하는 매크로다. 함수 본문을 직접 작성하는 자리가 아니다.
    GENERATED_BODY()
  public:
    AFeatureLabVegetationActor();
    virtual void BeginPlay() override;
    virtual void Tick(float DeltaSeconds) override;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TObjectPtr<USkeletalMesh> VariantA;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TObjectPtr<USkeletalMesh> VariantB;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TObjectPtr<USkeletalMesh> Megaplant;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TArray<TObjectPtr<USkeletalMesh>> MegaplantVariants;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab") int32 MegaplantIndex = 1;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab")
    TObjectPtr<UCapsuleComponent> OfficialTrunk;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab")
    TObjectPtr<UInstancedSkinnedMeshComponent> TreeA;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab")
    TObjectPtr<UInstancedSkinnedMeshComponent> TreeB;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab")
    TObjectPtr<UInstancedSkinnedMeshComponent> OfficialPlant;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab")
    TObjectPtr<UInstancedSkinnedMeshComponent> Forest;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab")
    TObjectPtr<UCameraComponent> Camera;
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, CallInEditor, Category = "FeatureLab") void PrepareVegetation();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void SetWind(float Amplitude);
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void CalmWind()
    {
        SetWind(0.f);
    }
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void NormalWind()
    {
        SetWind(1.f);
    }
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void StrongWind()
    {
        SetWind(3.f);
    }
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void TurnWind();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void CycleView();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void ToggleForest();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void CycleMegaplant();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void ToggleForestSpecies();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void ResetVegetation();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") FString CaptureVegetation();

  private:
    void UpdateWind();
    void UpdateCamera();
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY() TObjectPtr<UDynamicWindData> WindProvider;
    float WindAmplitude = 1.f;
    int32 Direction = 0, View = 0, ResetCount = 0;
    bool bForest = false;
    bool bMegaplantForest = false;
};
```
