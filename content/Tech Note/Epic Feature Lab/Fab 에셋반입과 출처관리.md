

에셋을 라이브러리에 추가한 것과 프로젝트에서 사용할 수 있게 된 것은 다르다. 이번에는 Fab의 공식 **Megaplants: Ginkgo**를 EpicFeatureLab에 반입한 뒤 파일, 재질, 텍스처, 나무 변형과 충돌까지 확인했다.

은행나무를 화면에 놓는 결과는 12편 식생 실험과 공유한다. 이 글에서는 그래프를 만드는 방법보다 **어떤 자료를 어디서 가져왔고 실제로 무엇이 들어왔는지**에 초점을 맞춘다.

![프로젝트에 반입해 사용한 식생 결과](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/18/result.png)

## Fab에서 프로젝트에 들어오기까지

작업에 쓴 항목은 [공식 Fab 목록](https://www.fab.com/listings/53f033c3-00ec-425b-b44e-65c04fdbd2b0)의 Megaplants: Ginkgo, 게시자는 Quixel Megaplants다. 반입 당시 목록에는 UE 5.8이 표시돼 있었다.

1. 해당 Epic 계정의 라이브러리에 항목을 추가한다.
2. Fab의 **프로젝트에 추가(Add to Project)** 흐름에서 실제 작업 프로젝트를 선택한다.
3. 이번에는 사용자가 `EpicFeatureLab`에 추가하는 단계를 직접 완료했다.
4. 다운로드가 끝난 뒤 에디터 콘텐츠 브라우저를 확인한다. 라이브러리 보유 표시만 보고 반입 완료로 판단하지 않는다.

계정 확인과 런처 연결은 에셋 내부 작업과 별개다. 브라우저에서 런처 열기가 막혔을 때 보안 화면을 우회하지 않고 실제 프로젝트 추가 단계를 사용자 쪽에서 완료한 뒤 파일을 검사했다.

## 들어온 폴더를 찾기

콘텐츠 브라우저에서 `Content → Megaplant_Library → Tree_Ginkgo`를 연다. 이번 반입의 원본 경로는 `/Game/Megaplant_Library/Tree_Ginkgo`다. 실험용 그래프는 `Content → FeatureLab → Vegetation → PVE_LabGinkgo`로 구분했다.

![반입 자료를 찾는 콘텐츠 브라우저](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/18/folder.png)

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
| `Fab / My Library` | 에셋을 확보하는 서비스 / 계정이 보유한 항목 목록. |
| `Add to Project` | 선택한 프로젝트로 에셋을 반입하는 명령. |
| `Megaplants: Ginkgo` | 이번에 받은 은행나무 자료의 공식 상품 이름. |
| `Quixel Megaplants` | 해당 자료의 게시자 이름. |
| `Tree_Ginkgo_01_A` | 반입된 은행나무 메시 변형 중 하나의 파일 이름. |
| `Skeletal Mesh / Skeleton Tree` | 뼈로 변형하는 메시 / 그 뼈대 목록. |
| `Material Slot / Material Instance` | 메시에 연결할 재질 자리 / 부모 재질의 값을 일부 바꾼 에셋. |
| `Texture / LOD` | 표면 표현 이미지 자료 / 상세도 단계. |
| `Preview Mesh / Reference Pose` | 미리보기 메시 / 뼈대의 기준 자세. |
| `Asset Details` | 현재 에셋의 상세 설정. |
| `Megaplant_Library / PVE_LabGinkgo` | 반입 원본 자료 폴더 / 실험용으로 별도 만든 식생 그래프 이름. |


![반입된 은행나무 스켈레탈 메시를 연 실제 화면](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/18/settings.png)

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
| `Fab / My Library` | 에셋을 확보하는 서비스 / 계정이 보유한 항목 목록. |
| `Add to Project` | 선택한 프로젝트로 에셋을 반입하는 명령. |
| `Megaplants: Ginkgo` | 이번에 받은 은행나무 자료의 공식 상품 이름. |
| `Quixel Megaplants` | 해당 자료의 게시자 이름. |
| `Tree_Ginkgo_01_A` | 반입된 은행나무 메시 변형 중 하나의 파일 이름. |
| `Skeletal Mesh / Skeleton Tree` | 뼈로 변형하는 메시 / 그 뼈대 목록. |
| `Material Slot / Material Instance` | 메시에 연결할 재질 자리 / 부모 재질의 값을 일부 바꾼 에셋. |
| `Texture / LOD` | 표면 표현 이미지 자료 / 상세도 단계. |
| `Preview Mesh / Reference Pose` | 미리보기 메시 / 뼈대의 기준 자세. |
| `Asset Details` | 현재 에셋의 상세 설정. |
| `Megaplant_Library / PVE_LabGinkgo` | 반입 원본 자료 폴더 / 실험용으로 별도 만든 식생 그래프 이름. |
| `Preview Animation / Create Asset` | 미리 볼 동작 선택 / 현재 자료에서 파생 에셋 만들기. |
| `Reimport Mesh / Reimport Mesh With Dialog` | 원본 외부 파일에서 다시 가져오기 / 설정창을 보며 다시 가져오기. |
| `Editing Tools / Edit Skeleton / Bind Skin` | 편집 도구 / 뼈대 편집 / 메시 표면과 뼈 연결. |
| `Edit Skin Weights / Edit Attributes` | 뼈 가중치 편집 / 메시 부가 속성 편집. |
| `Paint Maps / Paint Vertex Colors` | 값 지도를 칠하기 / 정점 색 칠하기. |
| `Generate PolyGroups / Paint PolyGroups` | 면 그룹 만들기 / 면 그룹 칠하기. |
| `Skin / DMC / Deform / Model / Mesh / Bake` | 스킨 작업 / 직접 메시 제어 / 변형 / 모델링 / 메시 편집 / 계산 결과 굽기. |
| `Activate Cloth Paint / Make Static Mesh` | 천 가중치 칠하기 활성화 / 정적 메시 만들기. 은행나무 검사에서 이 버튼들을 실행한 것은 아니다. |
| `Morph Targets / Curves` | 형상 변형 목록 / 시간별 제어값 곡선. |
| `Reference Pose / LOD 0` | 뼈대 기준 자세 / 첫 번째 상세도 단계. |
| `Triangles / Vertices / UV Channels / Approx Size` | 삼각형 수 / 정점 수 / 표면 좌표 채널 수 / 대략적인 크기. |
| `Root / Bone_1, Bone_2…` | 나무 뼈대의 시작 / 가지 변형에 사용한 뼈 이름. |
| `Material Slots / Element 0, Element 1` | 재질 연결 자리 / 첫 번째·두 번째 연결 항목. |
| `MI_Ginkgo_Bark_01 / MI_Ginkgo_Foliage_01` | 은행나무 껍질 / 잎에 사용하는 재질 인스턴스 이름. |
| `Highlight / Isolate` | 해당 부분 강조 / 해당 부분만 분리해 보기. |
| `LOD Picker / Auto / Custom` | 상세도 선택 / 자동 선택 / 별도 지정. |
| `LOD Import / Base LOD / Number of LODs` | 상세도 자료 가져오기 / 기준 단계 / 상세도 단계 개수. |
| `Asset Editing Settings / Editing LOD` | 메시 편집 설정 / 현재 편집할 상세도 단계. |
| `Apply Changes / No Pending Changes` | 변경 반영 / 아직 반영할 변경 없음. |
| `Reset Bone Transforms / Reset All Bone Transforms` | 선택한 뼈 / 모든 뼈의 변환을 기준 상태로 되돌리기. |


이름이 비슷하더라도 원본과 실험 복사본을 구분해야 한다. 원본 파일을 바꾸지 않고도 실험 설정을 비교하고 복구하기 위해서다. 에셋 이름의 `SKM_`은 여기서 스켈레탈 메시, `MI_`는 재질 인스턴스를 구분하는 데 사용한다.

## ‘다운로드 완료’ 다음에 검사한 것

실제 반입 파일은 53개, 총 150,987,920바이트였다. 완성 나무 네 변형과 가지 자료, 스켈레탈 메시, 텍스처, 재질 인스턴스, 편집용 생성 프리셋을 확인했다.

재질 인스턴스 두 개가 올바른 부모 재질을 가리키는지 확인했고, 실제 4K 텍스처 바인딩도 확인했다. 바인딩은 파일 이름만 적혀 있는 것이 아니라 해당 텍스처 객체가 실제로 연결된 상태를 뜻한다. 재질이 회색으로 보일 때는 다운로드 상태뿐 아니라 이 연결도 살펴야 한다.

## 실행 장면에서 실제 변형 선택하기

1. `FL_Hub`를 Play하고 목록에서 **18번**을 선택한다.
2. 은행나무 숲 프리셋이 열린다. 이 장면은 12번 식생 맵을 사용한다.
3. **V**를 눌러 반입한 나무 변형을 바꾼다. 실제 수형과 크기의 변화를 본다.
4. **G**로 숲의 수종을 바꾸고 **F**로 숲을 켜고 끈다.
5. **1/2/3**으로 바람 조건을 바꾸고 **R**로 기준 상태를 복구한다.

출처 기록을 남겼다고 실행까지 자동으로 검증되는 것은 아니다. 실제 장면이 반입 메시를 사용하고 선택 변경에 반응하는지, 저장 후 에디터를 다시 열어도 자료가 유지되는지 확인했다.

## 충돌과 출처 정보도 별도로 남겼다

공식 나무에 필요한 게임플레이 충돌이 모두 들어 있다고 가정하지 않았다. 이번에는 하부 몸통의 별도 캡슐 프록시를 작성해 검사했다. 바람에 흔들리는 모든 잎과 가지의 충돌을 구현한 결과는 아니다.

반입 당시의 라이선스 표시와 AI 사용 표시도 증거에 기록했다. 해당 목록의 AI 사용 표시는 `No`였으며 이 에셋을 AI 학습이나 이미지 생성 재료로 사용하지 않았다. 이 기록은 에셋을 반입한 시점의 자료이며, 모든 Fab 항목의 이용 조건을 일반화한 설명은 아니다.

실제 검증 파일은 `Evidence/case18-fab-validation.json`이다. 나무 네 변형의 실행 연결 코드는 [FeatureLabVegetation.cpp](#source-source-mutablesample-featurelabvegetation-cpp), 장면 구성은 [lab_build_vegetation_scene.py](#source-lab-lab-build-vegetation-scene-py)에 있다. 원본 공식 리소스는 각자 Fab에서 확보해야 하므로 블로그의 소스 코드만 복사해 자동으로 내려받는 방식은 아니다.

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
