

캐릭터 뒤에 붙은 망토를 움직이게 만들려면 ‘천처럼 보이는 표면’과 ‘천을 계산하는 자료’가 모두 필요하다. 이번에는 직접 만든 사각 패널로 망토를 만들고, Dataflow로 제작 데이터를 연결한 뒤 Chaos Cloth로 실행했다.

Dataflow는 제작 과정의 데이터를 노드로 연결하는 그래프다. Chaos Cloth는 만들어진 천 자료를 실제로 움직이는 시뮬레이션이다. 그래프를 만든 일과 실행 중 천이 바람에 반응하는 일은 구분했다.

![기준 망토와 시뮬레이션 망토](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/09/result.png)

## 먼저 바람을 켜고 끄기

1. `Content → FeatureLab → Maps → FL_09_ClothDataflow`를 연다.
2. **▶ Play** 후 게임 영역을 클릭한다.
3. **W**로 바람을 바꾼다. 기준 쪽과 시뮬레이션 쪽의 차이를 본다.
4. **G**로 중력, **B**로 몸을 운반하는 동작을 바꾼다.
5. **P**로 멈췄다가 재개한다.
6. **R**로 기준 상태로 돌아온다. 최종 화면에서는 두 캐릭터와 제목이 모두 보인다.
7. **■ Stop** 후 제작 에셋을 연다.

## 천 에셋에서 그래프를 따라가기

콘텐츠 브라우저에서 `Content → FeatureLab → Cloth → CA_LabCape`를 더블클릭한다. `CA`는 이 프로젝트에서 의상 에셋을 구분하는 이름이다. 연결된 Dataflow 그래프와 `PA_LabCapeBody` 충돌 자료도 확인한다.

![의상 파일 위치](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/09/folder.png)

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
| `Dataflow` | 제작 자료를 노드로 가공해 연결하는 그래프. |
| `Chaos Cloth` | 만들어진 천 자료를 실제로 움직이는 시뮬레이션. |
| `Evaluate / Evaluate Graph` | 그래프 계산 / 연결한 전체 제작 그래프 계산. |
| `Simulation Mesh / Render Mesh` | 물리 계산용 메시 / 실제 화면에 그리는 메시. |
| `Max Distance` | 각 점이 기준 위치에서 벗어날 수 있는 최대 거리. 0인 고정점과 움직일 점을 구분한다. |
| `Weight Map / Paint` | 점마다 다른 값을 저장한 지도 / 그 값을 칠하는 편집. |
| `Tether` | 고정점과 연결해 천이 과도하게 늘어나는 것을 제한하는 제약. |
| `Collision / Physics Asset` | 충돌 계산 / 충돌 형태를 담은 에셋. |
| `Wind / Gravity` | 바람 / 중력. |
| `Viewport / Graph` | 3D 결과 화면 / 제작 계산 연결 화면. |
| `CA_LabCape / PA_LabCapeBody` | 실험용 천 에셋 / 몸 충돌 형태 에셋 이름. |


![의상과 Dataflow 설정 화면](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/09/settings.png)

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
| `Dataflow` | 제작 자료를 노드로 가공해 연결하는 그래프. |
| `Chaos Cloth` | 만들어진 천 자료를 실제로 움직이는 시뮬레이션. |
| `Evaluate / Evaluate Graph` | 그래프 계산 / 연결한 전체 제작 그래프 계산. |
| `Simulation Mesh / Render Mesh` | 물리 계산용 메시 / 실제 화면에 그리는 메시. |
| `Max Distance` | 각 점이 기준 위치에서 벗어날 수 있는 최대 거리. 0인 고정점과 움직일 점을 구분한다. |
| `Weight Map / Paint` | 점마다 다른 값을 저장한 지도 / 그 값을 칠하는 편집. |
| `Tether` | 고정점과 연결해 천이 과도하게 늘어나는 것을 제한하는 제약. |
| `Collision / Physics Asset` | 충돌 계산 / 충돌 형태를 담은 에셋. |
| `Wind / Gravity` | 바람 / 중력. |
| `Viewport / Graph` | 3D 결과 화면 / 제작 계산 연결 화면. |
| `CA_LabCape / PA_LabCapeBody` | 실험용 천 에셋 / 몸 충돌 형태 에셋 이름. |


이번 그래프는 공식 Dataflow 노드 22개로 구성했다. 다음 기능을 나눠 읽으면 된다.

```text
패널 입력 → 계산용·화면용 메시 준비 → 뼈 영향 전달 → 어깨 고정과 테더
        → 중력·바람·몸 충돌 설정 → 솔버 설정 → 의상 결과
```

솔버는 주어진 힘과 제한 조건을 계산해 다음 자세를 구하는 부분이다. 테더는 천이 고정점에서 지나치게 늘어나지 않도록 길이를 제한하는 연결이다.

## 계산용 표면과 보이는 표면을 나눴다

계산용 망토는 825점, 화면용 망토는 3,185점을 사용했다. 계산하는 점을 적게 두면서 화면에는 더 촘촘한 표면을 쓰기 위한 구성이다. 두 표면이 어떻게 대응하는지 연결이 필요하므로 단순히 폴리곤 수를 다르게 만드는 것만으로 끝나지는 않는다.

어깨 부근은 몸에 붙어 있도록 고정했다. 망토 전체가 바닥으로 떨어진다면 바람 강도부터 올리는 대신 고정점과 뼈 영향 전달을 먼저 확인해야 한다.

## 몸을 관통하지 않게 확인하기

옷감 충돌용 몸 자료를 지정한 뒤 몸이 정지한 조건과 움직이는 조건을 따로 비교했다. 몸을 화면에서 볼 수 있다는 사실과 천이 그 몸에 충돌한다는 사실은 다르다.

검증은 실제 천 입자의 위치를 확인했다. 중력을 끄고 켜기, 바람 6·12m/s, 몸 충돌, 일시정지와 반복 초기화를 포함했다. 제작 그래프가 열리는지만 확인한 것이 아니다.

## 초기화와 저장 후 재개

R을 누르면 이전에 흩어진 천 상태를 기준으로 되돌리고 다시 계산을 시작한다. 단순히 캐릭터 위치만 되돌리는 처리와 구분했다. 에디터를 닫았다가 다시 연 뒤에도 의상 재질, 뼈대, 충돌 자료가 연결되고 시뮬레이션이 재개되는지 확인했다.

| 현상 | 확인할 곳 |
|---|---|
| 천이 통째로 떨어진다 | 어깨 고정과 스키닝 전달. |
| 천이 몸 안으로 들어간다 | 의상에 연결한 충돌 자료와 충돌체 위치. |
| W를 눌러도 변화가 없다 | 실행 여부, 입력 초점, 실제 바람 값. 기준 망토와 구분해 본다. |
| 움직이지만 표면이 찢어진다 | 계산용·화면용 메시의 대응과 입력 패널. |

전체 노드 생성: [lab_build_cloth_dataflow.py](#source-lab-lab-build-cloth-dataflow-py). 장면 생성: [lab_build_cloth_scene.py](#source-lab-lab-build-cloth-scene-py). 실행과 초기화: [FeatureLabCloth.cpp](#source-source-mutablesample-featurelabcloth-cpp), [헤더](#source-source-mutablesample-featurelabcloth-h).

<!-- korean-ui-explanations -->


<a id="code-index"></a>

## 이 장면을 만든 코드

아래는 제작과 검증에 사용한 전체 코드에 한국어 주석을 더한 설명본이다. `.py`는 언리얼 에디터에서 실행하는 제작·검사 코드, `.cpp`와 `.h`는 프로젝트에 넣어 빌드하는 코드다. 파일마다 첫 주석에 역할과 입력 조건을 적었다.


<a id="source-lab-lab-build-cloth-dataflow-py"></a>

### lab_build_cloth_dataflow.py

```python
# 파일 역할: 에셋·그래프·장면을 구성하는 제작 작업. 이미 있는 원본을 대상으로 재실행해도 되는지 가드 조건부터 읽는다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Cloth/M_LabCapeFabric
#   /Game/FeatureLab/Cloth/CA_LabCape
#   /Game/FeatureLab/Cloth
#   /Game/FeatureLab/Cloth/Inputs/SM_FL09_Cape

import json, traceback, time
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
assert root.name == "EpicFeatureLab"
# 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다. 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
try:
    material_path = "/Game/FeatureLab/Cloth/M_LabCapeFabric"
    # 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
    material = unreal.load_asset(material_path)
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not material 지정한 경로·이름·종류로 새 에셋을 만든다. 같은 이름의 원본이 있는지 검사하는 코드와 함께 읽는다.
    if not material:
        # 지정한 경로·이름·종류로 새 에셋을 만든다. 같은 이름의 원본이 있는지 검사하는 코드와 함께 읽는다.
        material = unreal.AssetToolsHelpers.get_asset_tools().create_asset(
            "M_LabCapeFabric",
            "/Game/FeatureLab/Cloth",
            unreal.Material,
            unreal.MaterialFactoryNew(),
        )
        material.set_editor_property("two_sided", True)
        color = unreal.MaterialEditingLibrary.create_material_expression(
            material, unreal.MaterialExpressionConstant3Vector, -300, 0
        )
        color.set_editor_property("constant", unreal.LinearColor(r=0.025, g=0.16, b=0.28, a=1))
        roughness = unreal.MaterialEditingLibrary.create_material_expression(
            material, unreal.MaterialExpressionConstant, -300, 150
        )
        roughness.set_editor_property("r", 0.8)
        unreal.MaterialEditingLibrary.connect_material_property(
            color, "", unreal.MaterialProperty.MP_BASE_COLOR
        )
        unreal.MaterialEditingLibrary.connect_material_property(
            roughness, "", unreal.MaterialProperty.MP_ROUGHNESS
        )
        unreal.MaterialEditingLibrary.recompile_material(material)
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
    assert unreal.EditorAssetLibrary.save_loaded_asset(material, False)
    for name in ["Sim", "Render"]:
        mesh = unreal.load_asset("/Game/FeatureLab/Cloth/Inputs/SM_FL09_Cape" + name)
        # 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 static_materials이다.
        mesh.set_editor_property(
            "static_materials",
            [
                unreal.StaticMaterial(
                    material_interface=material, material_slot_name="CapeFabric"
                )
            ],
        )
        # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
        assert unreal.EditorAssetLibrary.save_loaded_asset(mesh, False)
    asset = unreal.load_asset("/Game/FeatureLab/Cloth/CA_LabCape")
    graph = asset.get_editor_property("dataflow_instance").get_editor_property("dataflow_asset")
    started = time.perf_counter()
    # In installed 5.8 this function returns bHasError, opposite to its docstring.
    has_error = unreal.DataflowBlueprintLibrary.evaluate_dataflow(graph, asset)
    assert not has_error, "Dataflow evaluation logged an error"
    regenerated = unreal.DataflowBlueprintLibrary.regenerate_asset_from_dataflow(asset)
    slots = list(asset.get_editor_property("materials"))
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert len(slots) == 1
    slots[0].set_editor_property("material_interface", material)
    asset.set_editor_property("materials", slots)
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
    assert unreal.EditorAssetLibrary.save_loaded_asset(asset, False)
    skeleton = asset.get_editor_property("skeleton")
    lod_count = len(asset.get_editor_property("lod_info"))
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert (
        lod_count > 0 and skeleton
    ), "Cloth must have built render data and a transferred skeleton"
    # RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
    RESULT = {
        "status": "cloth_asset_built",
        "asset": asset.get_path_name(),
        "graph": graph.get_path_name(),
        "duration_seconds": time.perf_counter() - started,
        "regenerated": regenerated,
        "lod_count": lod_count,
        "material_count": len(asset.get_editor_property("materials")),
        "skeleton": skeleton.get_path_name() if skeleton else None,
    }
except Exception:
    RESULT = {"status": "failed", "error": traceback.format_exc()}
(root / "Evidence/case09-dataflow-build.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-build-cloth-scene-py"></a>

### lab_build_cloth_scene.py

```python
# 파일 역할: 에셋·그래프·장면을 구성하는 제작 작업. 이미 있는 원본을 대상으로 재실행해도 되는지 가드 조건부터 읽는다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Maps/FL_09_ClothDataflow
#   /Game/FeatureLab/Crowds/BP_LabCrowdGameMode
#   /Game/FeatureLab/Rigging/SKM_LabPuppet
#   /Game/FeatureLab/Cloth/CA_LabCape
#   /Game/FeatureLab/Cloth/M_LabCapeFabric

import json
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
assert root.name == "EpicFeatureLab"
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
assert not unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
lib = unreal.EditorAssetLibrary
# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
editor = unreal.get_editor_subsystem(unreal.LevelEditorSubsystem)
# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
actors = unreal.get_editor_subsystem(unreal.EditorActorSubsystem)
unreal.LevelSequenceEditorBlueprintLibrary.close_level_sequence()
path = "/Game/FeatureLab/Maps/FL_09_ClothDataflow"
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world().get_name() != 'FL_09_ClothDataflow' 작업할 맵을 연다. 현재 맵과 다른 맵이므로 실행 중인 PIE를 먼저 끝내는지 확인한다.
if (
    unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world().get_name()
    != "FL_09_ClothDataflow"
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
    result = found[0] if found else actors.spawn_actor_from_class(cls, unreal.Vector(*position))
    result.set_actor_label(label)
    result.tags = ["FeatureLab_Owned", "FeatureLab_09"]
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return result


# 함수 look: 이름은 look이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: item, target 액터 방향을 바꾼다. 위치 이동과 구분한다.
def look(item, target):
    # 액터 방향을 바꾼다. 위치 이동과 구분한다.
    item.set_actor_rotation(
        unreal.MathLibrary.find_look_at_rotation(
            item.get_actor_location(), unreal.Vector(*target)
        ),
        False,
    )


# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 편집 중인 월드를 얻는다. 게임 실행 월드와 다르므로 대상을 혼동하지 않는다.
world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world()
mode = lib.load_asset("/Game/FeatureLab/Crowds/BP_LabCrowdGameMode")
world.get_world_settings().set_editor_property("default_game_mode", mode.generated_class())
floor = actor(unreal.StaticMeshActor, "FL09_Floor", (0, 0, -10))
floor.static_mesh_component.set_static_mesh(lib.load_asset("/Engine/BasicShapes/Cube"))
floor.set_actor_scale3d(unreal.Vector(22, 22, 0.2))
sun = actor(unreal.DirectionalLight, "FL09_Sun", (0, 0, 900))
# 액터 방향을 바꾼다. 위치 이동과 구분한다.
sun.set_actor_rotation(unreal.Rotator(pitch=-40, yaw=-35, roll=0), False)
# 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 intensity이다.
sun.get_component_by_class(unreal.DirectionalLightComponent).set_editor_property(
    "intensity", 3.5
)
sky = actor(unreal.SkyLight, "FL09_Sky", (0, 0, 500))
sky.get_component_by_class(unreal.SkyLightComponent).set_editor_property("intensity", 1.2)
actor(unreal.SkyAtmosphere, "FL09_Atmosphere", (0, 0, 0))
fill = actor(unreal.RectLight, "FL09_FrontFill", (-400, -300, 400))
look(fill, (0, 0, 90))
# 여러 속성을 이름:값 사전으로 한 번에 설정한다. 각 항목이 개별 설정과 대응한다.
fill.get_component_by_class(unreal.RectLightComponent).set_editor_properties(
    {
        "intensity": 1500.0,
        "attenuation_radius": 2000.0,
        "source_width": 600.0,
        "source_height": 600.0,
        "cast_shadows": False,
    }
)
camera = actor(unreal.CineCameraActor, "FL09_Camera", (-600, 0, 170))
# 액터 위치를 바꾼다. 별도 이동 시뮬레이션이 소유한 상태까지 자동 초기화되는지는 확인해야 한다.
camera.set_actor_location(unreal.Vector(-600, 0, 170), False, False)
look(camera, (0, 0, 85))
component = camera.get_cine_camera_component()
component.set_editor_property("current_focal_length", 27.0)
focus = component.get_editor_property("focus_settings")
focus.set_editor_property("focus_method", unreal.CameraFocusMethod.DISABLE)
component.set_editor_property("focus_settings", focus)
component.set_editor_property("constrain_aspect_ratio", False)
mesh = lib.load_asset("/Game/FeatureLab/Rigging/SKM_LabPuppet")
cloth = lib.load_asset("/Game/FeatureLab/Cloth/CA_LabCape")
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 (reference, y, label)의 값이 매번 바뀐다. 여러 속성을 이름:값 사전으로 한 번에 설정한다. 각 항목이 개별 설정과 대응한다.
for reference, y, label in [
    (True, -160, "FL09_SkinnedReference"),
    (False, 160, "FL09_ClothSimulation"),
]:
    item = actor(unreal.FeatureLabClothActor, label, (0, y, 0))
    # 여러 속성을 이름:값 사전으로 한 번에 설정한다. 각 항목이 개별 설정과 대응한다.
    item.set_editor_properties(
        {
            "host_mesh": mesh,
            "cloth_asset": cloth,
            "reference_only": reference,
            "inspection_camera": camera,
        }
    )
    item.apply_assets()
    item.get_editor_property("cape").set_material(
        0, lib.load_asset("/Game/FeatureLab/Cloth/M_LabCapeFabric")
    )
    text = actor(unreal.TextRenderActor, label + "_Label", (-40, y, 175))
    # 액터 방향을 바꾼다. 위치 이동과 구분한다.
    text.set_actor_rotation(unreal.Rotator(pitch=0, yaw=180, roll=0), False)
    text.get_component_by_class(unreal.TextRenderComponent).set_text(
        "Skinned reference" if reference else "Chaos cloth simulation"
    )
    text.get_component_by_class(unreal.TextRenderComponent).set_world_size(13)
start = actor(unreal.PlayerStart, "FL09_ViewerStart", (-600, 0, 170))
look(start, (0, 0, 85))
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert editor.save_current_level()
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "status": "scene_saved_runtime_pending",
    "map": path,
    "asset": cloth.get_path_name(),
    "host_mesh": mesh.get_path_name(),
    "controls": {
        "W": "Wind 0/6/12 m/s toward body collider",
        "G": "Gravity on/off",
        "B": "Carrier motion on/off",
        "P": "Suspend/resume cloth",
        "R": "Reset simulation, forces and carrier",
    },
    "comparison": "Static skinned cloth reference versus physically simulated cloth on the same authored skeleton",
}
(root / "Evidence/case09-scene-build.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-capture-cloth-py"></a>

### lab_capture_cloth.py

```python
# 파일 역할: EpicFeatureLab의 lab_capture_cloth 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
output = root / "Evidence/case09-cloth-comparison.png"
unreal.AutomationLibrary.take_high_res_screenshot(1280, 720, str(output))
RESULT = {"capture_requested": str(output)}
```

<a id="source-lab-lab-import-cloth-inputs-py"></a>

### lab_import_cloth_inputs.py

```python
# 파일 역할: EpicFeatureLab의 lab_import_cloth_inputs 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Cloth/Inputs

import json
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
assert root.name == "EpicFeatureLab"
folder = "/Game/FeatureLab/Cloth/Inputs"
unreal.EditorAssetLibrary.make_directory(folder)
tasks = []
for name in ["FL09_CapeSim", "FL09_CapeRender"]:
    if unreal.EditorAssetLibrary.does_asset_exist(folder + "/SM_" + name):
        continue
    task = unreal.AssetImportTask()
    # 여러 속성을 이름:값 사전으로 한 번에 설정한다. 각 항목이 개별 설정과 대응한다.
    task.set_editor_properties(
        {
            "filename": str(root / "ExternalWorkflows/ClothInputs" / (name + ".obj")),
            "destination_path": folder,
            "destination_name": "SM_" + name,
            "automated": True,
            "replace_existing": False,
            "save": True,
        }
    )
    options = unreal.FbxImportUI()
    # 여러 속성을 이름:값 사전으로 한 번에 설정한다. 각 항목이 개별 설정과 대응한다.
    options.set_editor_properties(
        {
            "import_mesh": True,
            "import_as_skeletal": False,
            "mesh_type_to_import": unreal.FBXImportType.FBXIT_STATIC_MESH,
            "automated_import_should_detect_type": False,
            "import_materials": False,
            "import_textures": False,
        }
    )
    task.set_editor_property("options", options)
    # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    tasks.append(task)
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: tasks
if tasks:
    unreal.AssetToolsHelpers.get_asset_tools().import_asset_tasks(tasks)
assets = []
for name in ["FL09_CapeSim", "FL09_CapeRender"]:
    mesh = unreal.load_asset(folder + "/SM_" + name)
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert mesh, name
    mesh.set_editor_property("allow_cpu_access", True)
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
    assert unreal.EditorAssetLibrary.save_loaded_asset(mesh, False)
    assets.append({"asset": mesh.get_path_name(), "lods": mesh.get_num_lods()})
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "status": "cloth_inputs_imported",
    "assets": assets,
    "source_manifest": str(root / "ExternalWorkflows/ClothInputs/cloth-inputs.json"),
}
(root / "Evidence/case09-imported-inputs.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-inspect-cloth-asset-py"></a>

### lab_inspect_cloth_asset.py

```python
# 파일 역할: 현재 에셋·객체·실행 상태를 읽어 기록하는 관찰 작업.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Cloth/CA_LabCape

import json
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

asset = unreal.load_asset("/Game/FeatureLab/Cloth/CA_LabCape")
RESULT = {"asset": asset.get_path_name(), "properties": {}}
for name in ["dataflow_asset", "dataflow_terminal", "dataflow_instance"]:
    # 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다.
    try:
        # 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다.
        value = asset.get_editor_property(name)
        row = {
            "value": value.get_path_name() if isinstance(value, unreal.Object) else str(value)
        }
        if name == "dataflow_instance":
            row["fields"] = {}
            for field in ["dataflow_asset", "dataflow", "terminal_node_name", "terminal_name"]:
                # 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다.
                try:
                    # 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다.
                    field_value = value.get_editor_property(field)
                    row["fields"][field] = (
                        field_value.get_path_name()
                        if isinstance(field_value, unreal.Object)
                        else str(field_value)
                    )
                except Exception as error:
                    row["fields"][field] = str(error)
        RESULT["properties"][name] = row
    except Exception as error:
        RESULT["properties"][name] = {"error": str(error)}
(Path(unreal.Paths.project_dir()) / "Evidence/case09-cloth-asset-inspection.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-inspect-cloth-rendering-py"></a>

### lab_inspect_cloth_rendering.py

```python
# 파일 역할: 현재 에셋·객체·실행 상태를 읽어 기록하는 관찰 작업.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

import json
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
RESULT = {"actors": []}
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 actor의 값이 매번 바뀐다. JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
for actor in unreal.GameplayStatics.get_all_actors_of_class(world, unreal.FeatureLabClothActor):
    # JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
    row = json.loads(actor.inspect_cloth_rendering())
    row["reference_only"] = actor.get_editor_property("bReferenceOnly")
    RESULT["actors"].append(row)
(root / "Evidence/case09-rendering-inspection.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-peek-cloth-py"></a>

### lab_peek_cloth.py

```python
# 파일 역할: 현재 에셋·객체·실행 상태를 읽어 기록하는 관찰 작업.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

import json
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert world
items = unreal.GameplayStatics.get_all_actors_of_class(world, unreal.FeatureLabClothActor)
controller = next(a for a in items if not a.get_editor_property("bReferenceOnly"))
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
RESULT = json.loads(controller.capture_cloth_state())
(Path(unreal.Paths.project_dir()) / "Evidence/case09-live-state.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-prepare-cloth-runtime-py"></a>

### lab_prepare_cloth_runtime.py

```python
# 파일 역할: EpicFeatureLab의 lab_prepare_cloth_runtime 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Cloth/CA_LabCape

import json
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
assert root.name == "EpicFeatureLab"
collision = unreal.FeatureLabRuntimeLibrary.prepare_lab_cloth_collision()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
assert collision and unreal.EditorAssetLibrary.save_loaded_asset(collision, False)
asset = unreal.load_asset("/Game/FeatureLab/Cloth/CA_LabCape")
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
RESULT = json.loads(unreal.FeatureLabRuntimeLibrary.inspect_lab_cloth_asset(asset))
RESULT["collision_asset"] = collision.get_path_name()
(root / "Evidence/case09-built-collection.json").write_text(
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

<a id="source-lab-lab-test-cloth-runtime-py"></a>

### lab_test_cloth_runtime.py

```python
# 파일 역할: 완성 결과를 실제 값과 비교하는 검증 작업. 생성 코드와 검사 코드를 구분한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

import json, math, time, traceback
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

# ROOT: 프로젝트 루트 경로. 결과 파일을 어느 프로젝트에 쓰는지 정하는 기준이다.
ROOT = Path(unreal.Paths.project_dir()).resolve()
OUT = ROOT / "Evidence/case09-runtime-validation.json"
# JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
ASSET = json.loads(
    (ROOT / "Evidence/case09-built-collection.json").read_text(encoding="utf-8-sig")
)
REST = ASSET["rest_positions"]
ANCHORS = ASSET["top_anchor_indices"]
# 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
WORLD = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert WORLD
# 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 bReferenceOnly이다.
CONTROLLER = next(
    a
    for a in unreal.GameplayStatics.get_all_actors_of_class(WORLD, unreal.FeatureLabClothActor)
    if not a.get_editor_property("bReferenceOnly")
)
CONTROLLER.reset_cloth()
STAGES = [
    ("initial", 2.0),
    ("gravity_settled", 2.0),
    ("wind6", 2.0),
    ("wind12", 3.0),
    ("paused_start", 0.5),
    ("paused_end", 1.0),
    ("resumed", 2.0),
    ("zero_gravity", 1.0),
    ("carrier_start", 1.0),
    ("carrier_end", 2.0),
    ("reset", 0.1),
    ("repeat_reset", 0.1),
]
STATE = {
    "index": 0,
    "since": unreal.GameplayStatics.get_time_seconds(WORLD),
    "wall": time.perf_counter(),
    "busy": False,
}
PHASES = {}


# 함수 distance: 이름은 distance이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: a, b 여러 목록의 같은 위치 항목을 묶어 순서대로 비교한다.
def distance(a, b):
    return max(math.dist(x, y) for x, y in zip(a["positions"], b["positions"]))


# 함수 rest_error: 이름은 rest_error이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: s 여러 목록의 같은 위치 항목을 묶어 순서대로 비교한다.
def rest_error(s):
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다. 여러 목록의 같은 위치 항목을 묶어 순서대로 비교한다.
    return max(
        math.dist(
            p,
            [
                q[0] + s["body_location"][0],
                q[1] + s["body_location"][1],
                q[2] + s["body_location"][2],
            ],
        )
        for p, q in zip(s["positions"], REST)
    )


# 함수 anchor_error: 이름은 anchor_error이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: s
def anchor_error(s):
    angle = math.radians(10 * math.sin(s["simulation_time"])) if s["carrier"] else 0
    c, t = math.cos(angle), math.sin(angle)
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return max(
        math.dist(
            s["positions"][i],
            [
                s["body_location"][0] + c * REST[i][0] - t * REST[i][1],
                s["body_location"][1] + t * REST[i][0] + c * REST[i][1],
                s["body_location"][2] + REST[i][2],
            ],
        )
        for i in ANCHORS
    )


# 함수 collision_clearance: 이름은 collision_clearance이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: s 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
def collision_clearance(s):
    values = []
    for p in s["positions"]:
        x, y, z = [p[k] - s["body_location"][k] for k in range(3)]
        cap = math.dist([x, y, z], [0, 0, min(115, max(55, z))]) - 22
        sphere = math.dist([x, y, z], [0, 0, 126]) - 15
        # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
        values.append(min(cap, sphere))
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return min(values)


# 함수 finish: 이름은 finish이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: report 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
def finish(report):
    global WORLD, CONTROLLER
    # 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
    unreal.unregister_slate_post_tick_callback(HANDLE)
    report["phases"] = PHASES
    OUT.write_text(json.dumps(report, indent=2), encoding="utf-8")
    # WORLD에 기준값 None을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
    WORLD = CONTROLLER = None


# 함수 tick: 이름은 tick이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: delta JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
def tick(delta):
    if STATE["busy"]:
        # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
        return
    STATE["busy"] = True
    # 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다. JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
    try:
        if time.perf_counter() - STATE["wall"] > 240:
            raise RuntimeError("Cloth test timed out")
        now = unreal.GameplayStatics.get_time_seconds(WORLD)
        name, delay = STAGES[STATE["index"]]
        if now - STATE["since"] < delay:
            # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
            return
        # JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
        data = json.loads(CONTROLLER.capture_cloth_state())
        if len(data["positions"]) != len(REST):
            # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
            return
        PHASES[name] = data
        if name in ["gravity_settled", "wind6"]:
            CONTROLLER.cycle_wind()
        elif name == "wind12":
            CONTROLLER.toggle_pause()
        elif name == "paused_end":
            CONTROLLER.toggle_pause()
        elif name == "resumed":
            CONTROLLER.reset_cloth()
            CONTROLLER.toggle_gravity()
        elif name == "zero_gravity":
            CONTROLLER.toggle_carrier()
        elif name in ["carrier_end", "reset"]:
            CONTROLLER.reset_cloth()
        if name == "repeat_reset":
            p = PHASES
            metrics = {
                "gravity_rest_deviation_cm": rest_error(p["gravity_settled"]),
                "wind6_displacement_cm": distance(p["gravity_settled"], p["wind6"]),
                "wind12_change_cm": distance(p["wind6"], p["wind12"]),
                "pause_drift_cm": distance(p["paused_start"], p["paused_end"]),
                "resume_motion_cm": distance(p["paused_end"], p["resumed"]),
                "zero_gravity_rest_error_cm": rest_error(p["zero_gravity"]),
                "static_anchor_error_cm": max(
                    anchor_error(p[k])
                    for k in ["initial", "gravity_settled", "wind6", "wind12"]
                ),
                "moving_anchor_error_cm": max(
                    anchor_error(p[k]) for k in ["carrier_start", "carrier_end"]
                ),
                "wind_min_collision_clearance_cm": min(
                    collision_clearance(p[k]) for k in ["wind6", "wind12"]
                ),
                "reset_repeat_difference_cm": distance(p["reset"], p["repeat_reset"]),
                "reset_rest_deviation_cm": rest_error(p["reset"]),
            }
            checks = {
                "solver_has825_particles": all(len(s["positions"]) == 825 for s in p.values()),
                "simulation_blend_enabled": all(s["blend_weight"] == 1 for s in p.values()),
                "gravity_deforms_actual_particles": metrics["gravity_rest_deviation_cm"] > 0.05,
                "wind6_property_and_effect": p["wind6"]["wind_property"] == [6, 0, 0]
                and metrics["wind6_displacement_cm"] > 1,
                "wind12_property_and_effect": p["wind12"]["wind_property"] == [12, 0, 0]
                and metrics["wind12_change_cm"] > 0.05,
                "pause_holds_particles": p["paused_end"]["paused"]
                and metrics["pause_drift_cm"] < 0.01,
                "resume_restarts_simulation": not p["resumed"]["paused"]
                and metrics["resume_motion_cm"] > 0.01,
                "gravity_can_be_disabled": not p["zero_gravity"]["gravity"]
                and p["zero_gravity"]["gravity_scale_property"] == 0,
                "zero_gravity_holds_rest_shape": metrics["zero_gravity_rest_error_cm"] < 1,
                "all25_shoulder_anchors_hold": len(ANCHORS) == 25
                and metrics["static_anchor_error_cm"] < 0.1,
                "anchors_follow_moving_carrier": metrics["moving_anchor_error_cm"] < 3,
                "carrier_really_moves": math.dist(
                    p["carrier_start"]["body_location"], p["carrier_end"]["body_location"]
                )
                > 2,
                "wind_pushes_cloth_into_body_contact": metrics[
                    "wind_min_collision_clearance_cm"
                ]
                < 5,
                "body_collision_prevents_deep_penetration": metrics[
                    "wind_min_collision_clearance_cm"
                ]
                > -0.75,
                "reset_restores_controls": all(
                    p["reset"][k] == v
                    for k, v in {
                        "wind_mps": 0,
                        "gravity": True,
                        "carrier": False,
                        "paused": False,
                    }.items()
                ),
                "reset_counter_advances": p["repeat_reset"]["reset_count"]
                == p["reset"]["reset_count"] + 1,
                "reset_returns_close_to_rest": metrics["reset_rest_deviation_cm"] < 3,
                "repeat_reset_shape_is_close": metrics["reset_repeat_difference_cm"] < 1,
                "all_output_coordinates_finite": all(
                    math.isfinite(v) for s in p.values() for pnt in s["positions"] for v in pnt
                ),
            }
            finish(
                {
                    "status": "passed" if all(checks.values()) else "failed_checks",
                    "checks": checks,
                    "metrics": metrics,
                    "collision_model": "Body capsule centered at component (0,0,85), radius22, axis segment z55..115; sphere(0,0,126) radius15, transformed into the actual root-bone frame",
                    "render_vertices": ASSET["render_vertices"],
                    "sim_vertices": ASSET["sim_vertices"],
                }
            )
            # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
            return
        STATE["index"] += 1
        STATE["since"] = now
    except Exception:
        finish({"status": "failed", "error": traceback.format_exc()})
    finally:
        STATE["busy"] = False


OUT.write_text(json.dumps({"status": "running"}), encoding="utf-8")
# HANDLE: 나중에 콜백을 해제하기 위해 보관하는 등록 표식이다. 에디터 갱신 뒤 호출할 함수를 등록한다. 작업이 끝나면 핸들로 해제해야 반복 호출이 남지 않는다.
HANDLE = unreal.register_slate_post_tick_callback(tick)
RESULT = {"status": "running", "output": str(OUT)}
```

<a id="source-lab-lab-verify-cloth-roundtrip-py"></a>

### lab_verify_cloth_roundtrip.py

```python
# 파일 역할: 완성 결과를 실제 값과 비교하는 검증 작업. 생성 코드와 검사 코드를 구분한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Cloth/M_LabCapeFabric.M_LabCapeFabric
#   /Game/FeatureLab/Cloth/CA_LabCape
#   /Game/FeatureLab/Cloth/M_LabCapeFabric
#   /Game/FeatureLab/Cloth/PA_LabCapeBody.PA_LabCapeBody

import json, math
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert world
asset = unreal.load_asset("/Game/FeatureLab/Cloth/CA_LabCape")
# JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
geometry = json.loads(unreal.FeatureLabRuntimeLibrary.inspect_lab_cloth_asset(asset))
actors = list(
    unreal.GameplayStatics.get_all_actors_of_class(world, unreal.FeatureLabClothActor)
)
render = []
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 actor의 값이 매번 바뀐다. JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
for actor in actors:
    # JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
    row = json.loads(actor.inspect_cloth_rendering())
    row["reference_only"] = actor.get_editor_property("bReferenceOnly")
    # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    render.append(row)
controller = next(a for a in actors if not a.get_editor_property("bReferenceOnly"))
# JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
state = json.loads(controller.capture_cloth_state())
material = unreal.load_asset("/Game/FeatureLab/Cloth/M_LabCapeFabric")
reference = next(r for r in render if r["reference_only"])
simulation = next(r for r in render if not r["reference_only"])
expected = "/Game/FeatureLab/Cloth/M_LabCapeFabric.M_LabCapeFabric"
checks = {
    "saved_sim_render_topology_and_skeleton": geometry["sim_vertices"] == 825
    and geometry["render_vertices"] == 3185
    and geometry["sim_faces"] == 1536
    and geometry["render_faces"] == 6144
    and geometry["bones"] == 23,
    "both_skin_weight_arrays_normalized": geometry["max_skin_weight_sum_error"] < 1e-5
    and geometry["max_render_skin_weight_sum_error"] < 1e-5,
    "all_reference_bones_match_source": all(
        b["cloth_ref_pose"] == b["source_ref_pose"] for b in geometry["reference_bones"]
    ),
    "saved_body_collision_reference": geometry["physics_asset"]
    == "/Game/FeatureLab/Cloth/PA_LabCapeBody.PA_LabCapeBody",
    "fabric_supports_skeletal_and_cloth_rendering": all(
        unreal.MaterialEditingLibrary.has_material_usage(material, u)
        for u in [
            unreal.MaterialUsage.MATUSAGE_SKELETAL_MESH,
            unreal.MaterialUsage.MATUSAGE_CLOTHING,
        ]
    ),
    "both_render_components_visible": len(render) == 2 and all(r["visible"] for r in render),
    "both_components_use_persistent_fabric": all(
        r["material"] == expected and r["cpu_render_vertices"] == 3185 for r in render
    ),
    "reference_render_bounds_match_authored_cloth": max(
        abs(a - b)
        for key, source in [
            ("cpu_render_min", "render_rest_min"),
            ("cpu_render_max", "render_rest_max"),
        ]
        for a, b in zip(reference[key], geometry[source])
    )
    < 0.001,
    "physical_render_differs_from_reference": max(
        abs(a - b)
        for key in ["cpu_render_min", "cpu_render_max"]
        for a, b in zip(reference[key], simulation[key])
    )
    > 0.1,
    "reloaded_solver_has_all825_particles": len(state["positions"]) == 825
    and all(math.isfinite(v) for p in state["positions"] for v in p),
    "reloaded_default_controls": state["wind_mps"] == 0
    and state["gravity"]
    and not state["carrier"]
    and not state["paused"],
}
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "status": "passed" if all(checks.values()) else "failed_checks",
    "checks": checks,
    "geometry": geometry,
    "render": render,
    "scope": "Editor restart -> saved Dataflow cloth, materials, skinning, collision and runtime simulation",
}
(root / "Evidence/case09-roundtrip-validation.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-source-mutablesample-featurelabcloth-cpp"></a>

### FeatureLabCloth.cpp

```cpp
// 파일 역할: 09번 망토의 천 에셋·충돌 구성과 바람·중력·초기화
// 클래스=작업 종류, 객체=실제 한 개, 포인터(* 또는 TObjectPtr)=다른 객체를 가리키는 참조.
// nullptr은 대상 없음, bool은 참/거짓, TArray는 순서 있는 목록, FString은 문자열이다.
// WITH_EDITOR 구간은 에디터 빌드에서만 사용하는 코드다. 원본과의 토큰 비교 결과는 code-validation.json에 기록한다.

#include "FeatureLabCloth.h"
#include "FeatureLabRuntime.h"
#include "ChaosClothAsset/ClothAsset.h"
#include "ChaosClothAsset/ClothComponent.h"
#include "ChaosClothAsset/ClothAssetInteractor.h"
#include "ChaosClothAsset/CollectionClothFacade.h"
#include "ClothingSystemRuntimeTypes.h"
#include "Components/SkeletalMeshComponent.h"
#include "Components/SceneComponent.h"
#include "Components/InputComponent.h"
#include "Engine/SkeletalMesh.h"
#include "Engine/Engine.h"
#include "Kismet/GameplayStatics.h"
#include "GameFramework/PlayerController.h"
#include "PhysicsEngine/PhysicsAsset.h"
#include "PhysicsEngine/SkeletalBodySetup.h"
#include "Serialization/JsonSerializer.h"
#include "SkeletalRenderPublic.h"
// 빌드 조건에 따라 포함할 코드를 고른다. 게임 실행 중의 if 조건과 달리 빌드할 때 구분한다.
#if WITH_EDITOR
#include "AssetRegistry/AssetRegistryModule.h"
#endif
namespace
{
TSharedPtr<FJsonValue> ClothVector(const FVector &P)
{
    TArray<TSharedPtr<FJsonValue>> V;
    V.Add(MakeShared<FJsonValueNumber>(P.X));
    V.Add(MakeShared<FJsonValueNumber>(P.Y));
    V.Add(MakeShared<FJsonValueNumber>(P.Z));
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return MakeShared<FJsonValueArray>(V);
}
FString ClothJson(const TSharedRef<FJsonObject> &O)
{
    FString S;
    auto W = TJsonWriterFactory<>::Create(&S);
    FJsonSerializer::Serialize(O, W);
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return S;
}
} // namespace
// 【함수 역할】클래스의 기본 부품과 기본값을 준비하는 생성자다. 이 시점에는 게임 월드가 모두 준비됐다고 가정하지 않는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
AFeatureLabClothActor::AFeatureLabClothActor()
{
    PrimaryActorTick.bCanEverTick = true;
    // 이 액터의 기본 컴포넌트를 만든다. 부품 생성 뒤 장면 부착·재질·충돌 설정이 이어지는지 확인한다.
    SetRootComponent(CreateDefaultSubobject<USceneComponent>(TEXT("Root")));
    // 이 액터의 기본 컴포넌트를 만든다. 부품 생성 뒤 장면 부착·재질·충돌 설정이 이어지는지 확인한다.
    Body = CreateDefaultSubobject<USkeletalMeshComponent>(TEXT("Body"));
    Body->SetupAttachment(RootComponent);
    Body->SetCollisionEnabled(ECollisionEnabled::NoCollision);
    Body->VisibilityBasedAnimTickOption =
        EVisibilityBasedAnimTickOption::AlwaysTickPoseAndRefreshBones;
    // 이 액터의 기본 컴포넌트를 만든다. 부품 생성 뒤 장면 부착·재질·충돌 설정이 이어지는지 확인한다.
    Cape = CreateDefaultSubobject<UChaosClothComponent>(TEXT("Cape"));
    Cape->SetupAttachment(Body);
}
// 【함수 역할】입력이나 현재 선택값을 실제 객체의 상태에 반영한다. 값 저장과 화면·물리·애니메이션 갱신 호출을 함께 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabClothActor::ApplyAssets()
{
    Body->SetSkeletalMesh(HostMesh);
    Cape->SetAsset(Cast<UChaosClothAsset>(ClothAsset));
    Cape->SetLeaderPoseComponent(Body, true);
    Body->RecalcRequiredBones(Body->GetPredictedLODLevel());
    Cape->SetEnableSimulation(!bReferenceOnly);
}
// 【함수 역할】액터가 게임 월드에서 실행을 시작할 때 엔진이 호출한다. 생성자에서 부품을 만든 뒤 실제 월드·플레이어·입력과 연결하는 초기 준비 단계다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabClothActor::BeginPlay()
{
    // 부모 클래스의 기본 처리를 먼저/함께 실행한다. 자식 클래스의 추가 작업만으로 엔진 기본 동작을 대체하지 않는다.
    Super::BeginPlay();
    ApplyAssets();
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!bReferenceOnly)
    {
        // 【함수 역할】이후 작업에 사용할 객체나 값을 찾는다. 찾지 못했을 때 빈 참조가 반환될 수 있으므로 호출하는 쪽의 검사도 필요하다.
        // 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (APlayerController *PC = UGameplayStatics::GetPlayerController(this, 0))
        {
            // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
            if (InspectionCamera)
                PC->SetViewTarget(InspectionCamera);
            EnableInput(PC);
            // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
            InputComponent->BindKey(EKeys::W, IE_Pressed, this, &AFeatureLabClothActor::CycleWind);
            // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
            InputComponent->BindKey(EKeys::G, IE_Pressed, this,
                                    &AFeatureLabClothActor::ToggleGravity);
            // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
            InputComponent->BindKey(EKeys::B, IE_Pressed, this,
                                    &AFeatureLabClothActor::ToggleCarrier);
            // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
            InputComponent->BindKey(EKeys::P, IE_Pressed, this,
                                    &AFeatureLabClothActor::TogglePause);
            // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
            InputComponent->BindKey(EKeys::R, IE_Pressed, this, &AFeatureLabClothActor::ResetCloth);
        }
        ApplyForces();
    }
}
// 【함수 역할】입력이나 현재 선택값을 실제 객체의 상태에 반영한다. 값 저장과 화면·물리·애니메이션 갱신 호출을 함께 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabClothActor::ApplyForces()
{
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (auto *I = Cape->GetClothOutfitInteractor())
    {
        I->SetVectorPropertyValue(TEXT("WindVelocity"), -1, FVector(WindPreset * 6., 0, 0));
        I->SetFloatPropertyValue(TEXT("GravityScale"), -1, bGravity ? 1.f : 0.f);
    }
}
// 【함수 역할】현재 선택 상태를 다음 상태로 바꾸고 결과에 반영한다. 켬·끔 전환인지 여러 선택지 순환인지 조건문을 따라 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabClothActor::CycleWind()
{
    WindPreset = (WindPreset + 1) % 3;
    ApplyForces();
}
// 【함수 역할】현재 선택 상태를 다음 상태로 바꾸고 결과에 반영한다. 켬·끔 전환인지 여러 선택지 순환인지 조건문을 따라 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabClothActor::ToggleGravity()
{
    bGravity = !bGravity;
    ApplyForces();
}
// 【함수 역할】현재 선택 상태를 다음 상태로 바꾸고 결과에 반영한다. 켬·끔 전환인지 여러 선택지 순환인지 조건문을 따라 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabClothActor::ToggleCarrier()
{
    bCarrier = !bCarrier;
}
// 【함수 역할】현재 선택 상태를 다음 상태로 바꾸고 결과에 반영한다. 켬·끔 전환인지 여러 선택지 순환인지 조건문을 따라 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabClothActor::TogglePause()
{
    bPaused = !bPaused;
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (bPaused)
        Cape->SuspendSimulation();
    else
        Cape->ResumeSimulation();
}
// 【함수 역할】실험 상태를 코드에 적힌 기준값으로 되돌린다. 위치·속도·재생 시간·물리 상태 중 무엇을 복구하는지 아래 대입과 호출을 확인한다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabClothActor::ResetCloth()
{
    SimulationTime = 0;
    ++ResetCount;
    WindPreset = 0;
    bGravity = true;
    bCarrier = false;
    bPaused = false;
    Body->SetRelativeLocationAndRotation(FVector::ZeroVector, FRotator::ZeroRotator);
    Cape->ResumeSimulation();
    Cape->RecreateClothSimulationProxy();
    ApplyForces();
    Cape->ForceNextUpdateTeleportAndReset();
}
// 【함수 역할】매 갱신 시점에 상태를 확인하고 동작을 진행한다. DeltaSeconds는 이번 갱신까지 지난 시간이며, 함수가 1초에 정확히 60번 불린다고 가정하지 않는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabClothActor::Tick(float Dt)
{
    // 부모 클래스의 기본 처리를 먼저/함께 실행한다. 자식 클래스의 추가 작업만으로 엔진 기본 동작을 대체하지 않는다.
    Super::Tick(Dt);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (bReferenceOnly)
        return;
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!bPaused)
        SimulationTime += Dt;
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (bCarrier)
        Body->SetRelativeLocationAndRotation(FVector(12 * FMath::Sin(SimulationTime * 1.3),
                                                     8 * FMath::Sin(SimulationTime * .8),
                                                     12 * FMath::Sin(SimulationTime * 1.7)),
                                             FRotator(0, 10 * FMath::Sin(SimulationTime), 0));
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (GEngine)
        GEngine->AddOnScreenDebugMessage(
            7090, 0, FColor::Cyan,
            FString::Printf(
                TEXT(
                    "09 | Chaos Cloth + Dataflow | W wind %d m/s | G gravity %s | B carrier %s | P %s | R reset %d"),
                WindPreset * 6, bGravity ? TEXT("ON") : TEXT("OFF"),
                bCarrier ? TEXT("ON") : TEXT("OFF"), bPaused ? TEXT("PAUSED") : TEXT("RUNNING"),
                ResetCount));
}
// 【함수 역할】현재 객체와 실행 결과를 읽어 검증용 자료로 반환한다. 결과를 만드는 함수와 결과를 측정하는 함수를 구분해서 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
FString AFeatureLabClothActor::CaptureClothState()
{
    Cape->WaitForExistingParallelClothSimulation_GameThread();
    TMap<int32, FClothSimulData> Data;
    FMatrix LocalToWorld;
    float Blend = 0;
    static_cast<IClothSimulationDataProvider *>(Cape.Get())
        ->GetUpdateClothSimulationData_AnyThread(Data, LocalToWorld, Blend);
    auto O = MakeShared<FJsonObject>();
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("wind_mps"), WindPreset * 6);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetBoolField(TEXT("gravity"), bGravity);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetBoolField(TEXT("carrier"), bCarrier);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetBoolField(TEXT("paused"), bPaused);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("simulation_time"), SimulationTime);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("reset_count"), ResetCount);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("blend_weight"), Blend);
    O->SetField(TEXT("body_location"), ClothVector(Body->GetComponentLocation()));
    TArray<TSharedPtr<FJsonValue>> Particles, Raw;
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (const auto &Entry : Data)
        // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
        for (const auto &P : Entry.Value.Positions)
        {
            Raw.Add(ClothVector(FVector(P)));
            Particles.Add(ClothVector(Entry.Value.Transform.TransformPosition(FVector(P))));
        }
    O->SetArrayField(TEXT("positions"), Particles);
    O->SetArrayField(TEXT("raw_positions"), Raw);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (auto *I = Cape->GetClothOutfitInteractor())
    {
        TArray<TSharedPtr<FJsonValue>> Names;
        // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
        for (FName N : I->GetAllPropertyNames())
            Names.Add(MakeShared<FJsonValueString>(N.ToString()));
        O->SetArrayField(TEXT("property_names"), Names);
        O->SetField(TEXT("wind_property"),
                    ClothVector(I->GetVectorPropertyValue(TEXT("WindVelocity"))));
        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
        O->SetNumberField(TEXT("gravity_scale_property"),
                          I->GetFloatPropertyValue(TEXT("GravityScale"), 0, -100));
    }
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return ClothJson(O);
}
// 【함수 역할】뒤의 처리에 필요한 객체·에셋·구성을 준비한다. 에디터 전용 구간과 런타임 구간이 나뉘는지, 기존 자료를 재사용하는지 함께 확인한다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
UObject *UFeatureLabRuntimeLibrary::PrepareLabClothCollision()
{
// 빌드 조건에 따라 포함할 코드를 고른다. 게임 실행 중의 if 조건과 달리 빌드할 때 구분한다.
#if WITH_EDITOR
    const FString Path = TEXT("/Game/FeatureLab/Cloth/PA_LabCapeBody");
    auto *Mesh = LoadObject<USkeletalMesh>(
        nullptr, TEXT("/Game/FeatureLab/Rigging/SKM_LabPuppet.SKM_LabPuppet"));
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Mesh)
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return nullptr;
    auto *Asset = LoadObject<UPhysicsAsset>(nullptr, *(Path + TEXT(".PA_LabCapeBody")));
    const bool bNew = Asset == nullptr;
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Asset)
        Asset = NewObject<UPhysicsAsset>(CreatePackage(*Path), TEXT("PA_LabCapeBody"),
                                         RF_Public | RF_Standalone | RF_Transactional);
    auto *BodySetup = Asset->SkeletalBodySetups.IsEmpty()
                          ? NewObject<USkeletalBodySetup>(Asset, NAME_None, RF_Transactional)
                          : Asset->SkeletalBodySetups[0].Get();
    BodySetup->BoneName = Mesh->GetRefSkeleton().GetBoneName(0);
    BodySetup->PhysicsType = PhysType_Kinematic;
    const FTransform BoneFrame = Mesh->GetRefSkeleton().GetRefBonePose()[0];
    BodySetup->AggGeom.SphylElems.SetNum(1);
    BodySetup->AggGeom.SphereElems.SetNum(1);
    auto &Capsule = BodySetup->AggGeom.SphylElems[0];
    Capsule.Center = BoneFrame.InverseTransformPosition(FVector(0, 0, 85));
    Capsule.Rotation = BoneFrame.GetRotation().Inverse().Rotator();
    Capsule.Radius = 22;
    Capsule.Length = 60;
    auto &Sphere = BodySetup->AggGeom.SphereElems[0];
    Sphere.Center = BoneFrame.InverseTransformPosition(FVector(0, 0, 126));
    Sphere.Radius = 15;
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (Asset->SkeletalBodySetups.IsEmpty())
        Asset->SkeletalBodySetups.Add(BodySetup);
    BodySetup->InvalidatePhysicsData();
    BodySetup->CreatePhysicsMeshes();
    Asset->UpdateBodySetupIndexMap();
    Asset->UpdateBoundsBodiesArray();
    Asset->SetPreviewMesh(Mesh);
    Asset->MarkPackageDirty();
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (bNew)
        FAssetRegistryModule::AssetCreated(Asset);
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return Asset;
#else
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return nullptr;
#endif
}
// 【함수 역할】현재 객체와 실행 결과를 읽어 검증용 자료로 반환한다. 결과를 만드는 함수와 결과를 측정하는 함수를 구분해서 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
FString AFeatureLabClothActor::InspectClothRendering()
{
    TArray<FFinalSkinVertex> Vertices;
    Cape->GetCPUSkinnedVertices(Vertices, 0);
    FBox Bounds(EForceInit::ForceInit);
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (const auto &V : Vertices)
        Bounds += FVector(V.Position);
    auto O = MakeShared<FJsonObject>();
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("cpu_render_vertices"), Vertices.Num());
    O->SetField(TEXT("cpu_render_min"), ClothVector(Bounds.Min));
    O->SetField(TEXT("cpu_render_max"), ClothVector(Bounds.Max));
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetBoolField(TEXT("visible"), static_cast<USceneComponent *>(Cape.Get())->IsVisible());
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetStringField(TEXT("material"),
                      Cape->GetMaterial(0) ? Cape->GetMaterial(0)->GetPathName() : TEXT("null"));
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return ClothJson(O);
}
// 【함수 역할】현재 객체와 실행 결과를 읽어 검증용 자료로 반환한다. 결과를 만드는 함수와 결과를 측정하는 함수를 구분해서 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
FString UFeatureLabRuntimeLibrary::InspectLabClothAsset(UObject *Object)
{
    auto O = MakeShared<FJsonObject>();
    auto *Asset = Cast<UChaosClothAsset>(Object);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Asset || !Asset->GetPathName().StartsWith(TEXT("/Game/FeatureLab/Cloth/")))
    {
        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
        O->SetStringField(TEXT("error"), TEXT("Owned cloth asset required"));
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return ClothJson(O);
    }
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetStringField(TEXT("asset"), Asset->GetPathName());
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("bones"), Asset->GetRefSkeleton().GetNum());
    const auto &Collections = static_cast<const UChaosClothAsset *>(Asset)->GetClothCollections();
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("lods"), Collections.Num());
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (Collections.IsEmpty())
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return ClothJson(O);
    UE::Chaos::ClothAsset::FCollectionClothConstFacade C(Collections[0]);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetBoolField(TEXT("valid_sim_and_render"), C.HasValidData());
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("sim_vertices"), C.GetNumSimVertices3D());
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("sim_faces"), C.GetNumSimFaces());
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("render_vertices"), C.GetNumRenderVertices());
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("render_faces"), C.GetNumRenderFaces());
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetStringField(TEXT("physics_asset"), C.GetPhysicsAssetSoftObjectPathName().ToString());
    TArray<TSharedPtr<FJsonValue>> Positions, TopIndices;
    float MaxZ = -FLT_MAX;
    int32 Index = 0;
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (const auto &P : C.GetSimPosition3D())
    {
        Positions.Add(ClothVector(FVector(P)));
        MaxZ = FMath::Max(MaxZ, P.Z);
    }
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (const auto &P : C.GetSimPosition3D())
    {
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (P.Z >= MaxZ - .1f)
            TopIndices.Add(MakeShared<FJsonValueNumber>(Index));
        ++Index;
    }
    O->SetArrayField(TEXT("rest_positions"), Positions);
    O->SetArrayField(TEXT("top_anchor_indices"), TopIndices);
    FBox RenderBounds(EForceInit::ForceInit);
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (const auto &P : C.GetRenderPosition())
        RenderBounds += FVector(P);
    O->SetField(TEXT("render_rest_min"), ClothVector(RenderBounds.Min));
    O->SetField(TEXT("render_rest_max"), ClothVector(RenderBounds.Max));
    float Error = 0;
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (const auto &W : C.GetSimBoneWeights())
    {
        float Sum = 0;
        // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
        for (float V : W)
            Sum += V;
        Error = FMath::Max(Error, FMath::Abs(Sum - 1));
    }
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("max_skin_weight_sum_error"), Error);
    Error = 0;
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (const auto &W : C.GetRenderBoneWeights())
    {
        float Sum = 0;
        // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
        for (float V : W)
            Sum += V;
        Error = FMath::Max(Error, FMath::Abs(Sum - 1));
    }
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("max_render_skin_weight_sum_error"), Error);
    TArray<TSharedPtr<FJsonValue>> Bones;
    auto *Source = LoadObject<USkeletalMesh>(
        nullptr, TEXT("/Game/FeatureLab/Rigging/SKM_LabPuppet.SKM_LabPuppet"));
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (int32 I = 0; I < Asset->GetRefSkeleton().GetNum(); ++I)
    {
        auto B = MakeShared<FJsonObject>();
        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
        B->SetStringField(TEXT("name"), Asset->GetRefSkeleton().GetBoneName(I).ToString());
        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
        B->SetStringField(TEXT("cloth_ref_pose"),
                          Asset->GetRefSkeleton().GetRefBonePose()[I].ToString());
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (Source && I < Source->GetRefSkeleton().GetNum())
            // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
            B->SetStringField(TEXT("source_ref_pose"),
                              Source->GetRefSkeleton().GetRefBonePose()[I].ToString());
        Bones.Add(MakeShared<FJsonValueObject>(B));
    }
    O->SetArrayField(TEXT("reference_bones"), Bones);
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return ClothJson(O);
}
```

<a id="source-source-mutablesample-featurelabcloth-h"></a>

### FeatureLabCloth.h

```cpp
// 파일 역할: 09번 망토의 천 에셋·충돌 구성과 바람·중력·초기화
// 클래스=작업 종류, 객체=실제 한 개, 포인터(* 또는 TObjectPtr)=다른 객체를 가리키는 참조.
// nullptr은 대상 없음, bool은 참/거짓, TArray는 순서 있는 목록, FString은 문자열이다.
// WITH_EDITOR 구간은 에디터 빌드에서만 사용하는 코드다. 원본과의 토큰 비교 결과는 code-validation.json에 기록한다.

#pragma once
#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "FeatureLabCloth.generated.h"
class USkeletalMeshComponent;
class UChaosClothComponent;
class USkeletalMesh;
// 아래 클래스 또는 구조체를 언리얼이 인식하도록 선언한다. 일반 C++ 선언에 엔진 등록 정보를 덧붙인 것이다.
UCLASS()
class MUTABLESAMPLE_API AFeatureLabClothActor : public AActor
{
    // 언리얼 헤더 도구가 필요한 보조 코드를 연결하는 매크로다. 함수 본문을 직접 작성하는 자리가 아니다.
    GENERATED_BODY()
  public:
    AFeatureLabClothActor();
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TObjectPtr<USkeletalMesh> HostMesh;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TObjectPtr<UObject> ClothAsset;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    bool bReferenceOnly = false;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TObjectPtr<AActor> InspectionCamera;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab")
    TObjectPtr<USkeletalMeshComponent> Body;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab")
    TObjectPtr<UChaosClothComponent> Cape;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab") float SimulationTime = 0;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab") int32 ResetCount = 0;
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void ApplyAssets();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void CycleWind();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void ToggleGravity();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void ToggleCarrier();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void TogglePause();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void ResetCloth();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") FString CaptureClothState();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") FString InspectClothRendering();
    virtual void Tick(float DeltaSeconds) override;

  protected:
    virtual void BeginPlay() override;

  private:
    void ApplyForces();
    int32 WindPreset = 0;
    bool bGravity = true, bCarrier = false, bPaused = false;
};
```
