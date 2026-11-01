

같은 종류의 기둥을 많이 놓을 때, 개수를 늘리거나 길을 바꾸려면 수동 배치는 금방 번거로워진다. 이번에는 PCG 그래프로 배치 규칙을 만들었다. PCG는 입력 조건을 계산해 장면의 생성 결과를 만드는 방식이다.

기둥을 흩어 놓는 그래프와 길을 따라 표지를 놓는 그래프를 따로 사용했다. 생성된 물건만 보면 단순한 블록 장면이지만, 시드와 밀도, 제외 영역, 스플라인을 바꿔 결과를 비교할 수 있다.

![PCG로 만든 기둥과 곡선 표지 배치](Tech%20Note/Unreal/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/10/result.png)

## 반드시 이 맵으로 시작하기

1. `Content → FeatureLab → Maps`에서 **FL_10_ProceduralEnvironment**를 연다.
2. **▶ Play**를 누르고 게임 영역을 클릭한다.
3. **1**로 시드, **2**로 밀도를 바꾼다.
4. **3**으로 중앙 제외 영역을 바꾼다.
5. **4**로 표지의 경로를 직선과 곡선 사이에서 바꾼다.
6. 화면의 `BUILDING`이 `READY`가 될 때까지 기다린다. 재생성 중에는 중간 배치가 잠깐 보일 수 있다.
7. **R**을 누른 뒤 최초 배치와 비교한다.

같은 폴더의 `FL_10_PCG`는 초기 핵심 실험을 보존한 맵이다. 최종 조작 실험은 위의 ProceduralEnvironment 맵에 있다. 통합 목록이 예전 맵으로 연결되는 문제를 실제 실행본에서 발견해 수정했다.

## 그래프 두 개 열어 보기

**■ Stop**을 누른 뒤 `Content → FeatureLab → PCG`에서 `PCG_LabEnvironment`와 `PCG_LabSplinePosts`를 각각 연다. 화면을 한 번에 이해하려 하지 말고 입력에서 출력까지 왼쪽에서 오른쪽으로 연결을 따라간다.

![그래프 파일 위치](Tech%20Note/Unreal/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/10/folder.png)

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
| `PCG / PCG Graph` | 규칙으로 콘텐츠를 생성하는 기능 / 그 생성 그래프. |
| `Input / Output` | 입력 자료 / 최종 출력. |
| `Points` | 배치 후보 위치와 속성을 담은 점 자료. |
| `Static Mesh Spawner` | 점 자료를 바탕으로 실제 메시를 배치하는 노드. |
| `Difference` | 제외할 영역을 빼는 연산. |
| `Seed` | 무작위 선택의 출발점이 되는 숫자. 같은 조건을 반복 비교할 때 사용한다. |
| `Density` | 배치 밀도. |
| `Spline / Spline Sampler` | 곡선 경로 / 곡선을 따라 점을 만드는 노드. |
| `Generate / Cleanup` | 다시 생성 / PCG가 만든 결과 정리. 원본 에셋 삭제 버튼으로 이해하지 않는다. |
| `Attributes / Debug` | 점마다 가진 속성 / 생성 과정 확인용 표시. |
| `PCG_LabEnvironment / PCG_LabSplinePosts` | 주 배치 그래프 / 스플라인을 따라 기둥을 놓는 별도 그래프 이름. |


![실제 PCG 그래프](Tech%20Note/Unreal/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/10/settings.png)

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
| `PCG / PCG Graph` | 규칙으로 콘텐츠를 생성하는 기능 / 그 생성 그래프. |
| `Input / Output` | 입력 자료 / 최종 출력. |
| `Points` | 배치 후보 위치와 속성을 담은 점 자료. |
| `Static Mesh Spawner` | 점 자료를 바탕으로 실제 메시를 배치하는 노드. |
| `Difference` | 제외할 영역을 빼는 연산. |
| `Seed` | 무작위 선택의 출발점이 되는 숫자. 같은 조건을 반복 비교할 때 사용한다. |
| `Density` | 배치 밀도. |
| `Spline / Spline Sampler` | 곡선 경로 / 곡선을 따라 점을 만드는 노드. |
| `Generate / Cleanup` | 다시 생성 / PCG가 만든 결과 정리. 원본 에셋 삭제 버튼으로 이해하지 않는다. |
| `Attributes / Debug` | 점마다 가진 속성 / 생성 과정 확인용 표시. |
| `PCG_LabEnvironment / PCG_LabSplinePosts` | 주 배치 그래프 / 스플라인을 따라 기둥을 놓는 별도 그래프 이름. |


기둥 쪽은 배치 후보를 만들고, 제외할 부분을 걸러낸 뒤 메시를 놓는다. 스플라인 쪽은 경로를 따라 점을 구하고 표지 메시를 놓는다. 스플라인은 여러 제어점을 이어 만든 선 또는 곡선이다.

## 네 가지 입력을 따로 바꾼 이유

**시드**는 무작위 배치의 출발 숫자다. 같은 시드와 같은 조건이면 기준 배치를 다시 만들 수 있다. ‘매번 아무렇게나 나오는 것’과 구분하려고 기록했다.

**밀도**는 얼마나 촘촘히 생성할지를 정한다. 단순히 액터 전체를 복사하는 대신 그래프 입력을 바꿔 실제 생성 위치와 수를 확인했다.

**제외 영역**은 기둥을 놓지 않을 공간이다. 가운데 표시가 커질 때 기둥이 해당 영역을 피하는지 봤다. 스플라인 표지는 별도 그래프이므로 기둥의 제외 조건과 무조건 같은 규칙을 적용하는 것은 아니다.

**스플라인**은 표지 배치의 기준 선이다. 직선을 곡선으로 바꾸면 실제 표지 위치와 방향도 함께 바뀌어야 한다. 화면에 선만 바뀌고 생성물은 남아 있으면 재생성 연결을 확인해야 한다.

## 생성 결과가 누적되는 문제 막기

재생성할 때 이전 생성물이 남으면 물건이 계속 쌓인다. 그래서 값 변경 후 실제 인스턴스 수와 위치·회전·크기를 확인했다. 인스턴스는 같은 메시를 여러 위치에 표시하는 개별 배치다.

기준 배치는 기둥 27개와 표지 15개였다. 최종 패키지에서는 시드 12026→12027, 보통→고밀도, 작은→큰 제외 영역, 직선→곡선을 실제 키로 바꿨다. R 이후 시드와 모든 기준 조건이 돌아오고 동일한 배치가 재생성됐다.

## 저장과 실행 중 재생성은 나눠 확인하기

에디터에서 바꾼 설정은 에셋과 맵에 저장해야 다음에 남는다. 게임 실행 중 바꾼 값은 대개 그 실행의 상태다. 이번에는 고밀도·곡선 상태를 저장한 뒤 에디터를 다시 열어 배치가 이어지는지도 별도로 확인했다.

실제 그래프 전체는 [lab_build_pcg_runtime_graphs.py](#source-lab-lab-build-pcg-runtime-graphs-py)에 노드 생성과 핀 연결 순서로 들어 있다. 장면은 [lab_build_pcg_runtime_scene.py](#source-lab-lab-build-pcg-runtime-scene-py), 입력과 재생성은 [FeatureLabPCG.cpp](#source-source-mutablesample-featurelabpcg-cpp) 및 [헤더](#source-source-mutablesample-featurelabpcg-h)에 있다.


## 편집 화면을 더 자세히 보기

![스플라인을 따라 기둥을 생성하는 별도 PCG 그래프](Tech%20Note/Unreal/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/10/spline.png)

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
| `PCG / PCG Graph` | 규칙으로 콘텐츠를 생성하는 기능 / 그 생성 그래프. |
| `Input / Output` | 입력 자료 / 최종 출력. |
| `Points` | 배치 후보 위치와 속성을 담은 점 자료. |
| `Static Mesh Spawner` | 점 자료를 바탕으로 실제 메시를 배치하는 노드. |
| `Difference` | 제외할 영역을 빼는 연산. |
| `Seed` | 무작위 선택의 출발점이 되는 숫자. 같은 조건을 반복 비교할 때 사용한다. |
| `Density` | 배치 밀도. |
| `Spline / Spline Sampler` | 곡선 경로 / 곡선을 따라 점을 만드는 노드. |
| `Generate / Cleanup` | 다시 생성 / PCG가 만든 결과 정리. 원본 에셋 삭제 버튼으로 이해하지 않는다. |
| `Attributes / Debug` | 점마다 가진 속성 / 생성 과정 확인용 표시. |
| `PCG_LabEnvironment / PCG_LabSplinePosts` | 주 배치 그래프 / 스플라인을 따라 기둥을 놓는 별도 그래프 이름. |



<!-- korean-ui-explanations -->


<a id="code-index"></a>

## 이 장면을 만든 코드

아래는 제작과 검증에 사용한 전체 코드에 한국어 주석을 더한 설명본이다. `.py`는 언리얼 에디터에서 실행하는 제작·검사 코드, `.cpp`와 `.h`는 프로젝트에 넣어 빌드하는 코드다. 파일마다 첫 주석에 역할과 입력 조건을 적었다.


<a id="source-lab-lab-build-pcg-py"></a>

### lab_build_pcg.py

```python
# 파일 역할: 에셋·그래프·장면을 구성하는 제작 작업. 이미 있는 원본을 대상으로 재실행해도 되는지 가드 조건부터 읽는다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/PCG
#   /Game/FeatureLab/Maps/FL_10_PCG
#   /Game/FeatureLab/Maps

import json
import traceback
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

# ROOT: 프로젝트 루트 경로. 결과 파일을 어느 프로젝트에 쓰는지 정하는 기준이다.
ROOT = Path(unreal.Paths.project_dir()).resolve()
assert ROOT.name == "EpicFeatureLab"
OUT = ROOT / "Evidence" / "case10-pcg-build.json"
# 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다. 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
try:
    assets = unreal.AssetToolsHelpers.get_asset_tools()
    library = unreal.EditorAssetLibrary
    folder = "/Game/FeatureLab/PCG"
    library.make_directory(folder)
    graph_path = folder + "/PCG_LabDistribution"
    # 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
    graph = library.load_asset(graph_path)
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not graph 지정한 경로·이름·종류로 새 에셋을 만든다. 같은 이름의 원본이 있는지 검사하는 코드와 함께 읽는다.
    if not graph:
        # 지정한 경로·이름·종류로 새 에셋을 만든다. 같은 이름의 원본이 있는지 검사하는 코드와 함께 읽는다.
        graph = assets.create_asset(
            "PCG_LabDistribution", folder, unreal.PCGGraph, unreal.PCGGraphFactory()
        )
    for node in list(graph.get_editor_property("nodes")):
        graph.remove_node(node)
    grid_node, grid = graph.add_node_of_type(unreal.PCGCreatePointsGridSettings)
    grid.set_editor_property("grid_extents", unreal.Vector(1200, 1200, 0))
    grid.set_editor_property("cell_size", unreal.Vector(400, 400, 400))
    grid.set_editor_property("cull_points_outside_volume", False)
    jitter_node, jitter = graph.add_node_of_type(unreal.PCGTransformPointsSettings)
    jitter.set_editor_property("offset_min", unreal.Vector(-65, -65, 0))
    jitter.set_editor_property("offset_max", unreal.Vector(65, 65, 0))
    jitter.set_editor_property("rotation_min", unreal.Rotator(0, 0, -180))
    jitter.set_editor_property("rotation_max", unreal.Rotator(0, 0, 180))
    jitter.set_editor_property("scale_min", unreal.Vector(0.5, 0.5, 0.8))
    jitter.set_editor_property("scale_max", unreal.Vector(1.1, 1.1, 2.4))
    spawn_node, spawn = graph.add_node_of_type(unreal.PCGStaticMeshSpawnerSettings)
    spawn.set_editor_property("mesh_selector_type", unreal.PCGMeshSelectorWeighted)
    selector = spawn.get_editor_property("mesh_selector_parameters")
    descriptor = unreal.PCGSoftISMComponentDescriptor()
    # 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 static_mesh이다.
    descriptor.set_editor_property(
        "static_mesh", library.load_asset("/Engine/BasicShapes/Cube")
    )
    entry = unreal.PCGMeshSelectorWeightedEntry()
    entry.set_editor_property("descriptor", descriptor)
    entry.set_editor_property("weight", 1)
    selector.set_editor_property("mesh_entries", [entry])
    graph.add_edge(grid_node, "Out", jitter_node, "In")
    graph.add_edge(jitter_node, "Out", spawn_node, "In")
    graph.add_edge(spawn_node, "Out", graph.get_output_node(), "Out")
    # 지정한 에셋의 현재 내용을 파일로 저장한다.
    library.save_asset(graph_path, False)
    # 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
    editor = unreal.get_editor_subsystem(unreal.LevelEditorSubsystem)
    # world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 편집 중인 월드를 얻는다. 게임 실행 월드와 다르므로 대상을 혼동하지 않는다.
    world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world()
    # 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 default_game_mode이다.
    mode = (
        world.get_world_settings().get_editor_property("default_game_mode") if world else None
    )
    map_path = "/Game/FeatureLab/Maps/FL_10_PCG"
    library.make_directory("/Game/FeatureLab/Maps")
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not editor.new_level(map_path)
    if not editor.new_level(map_path):
        raise RuntimeError("Could not create the PCG workshop map")
    # 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
    actors = unreal.get_editor_subsystem(unreal.EditorActorSubsystem)
    # world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 편집 중인 월드를 얻는다. 게임 실행 월드와 다르므로 대상을 혼동하지 않는다.
    world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world()
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: mode 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 default_game_mode이다.
    if mode:
        world.get_world_settings().set_editor_property("default_game_mode", mode)
    cube = library.load_asset("/Engine/BasicShapes/Cube")
    # 지정한 클래스의 실제 액터를 편집 장면에 만든다. 에셋 파일 생성과는 다르다.
    floor = actors.spawn_actor_from_class(unreal.StaticMeshActor, unreal.Vector(0, 0, -50))
    floor.set_actor_label("FL10_Floor")
    floor.static_mesh_component.set_static_mesh(cube)
    floor.set_actor_scale3d(unreal.Vector(48, 48, 1))
    # 지정한 클래스의 실제 액터를 편집 장면에 만든다. 에셋 파일 생성과는 다르다.
    sun = actors.spawn_actor_from_class(
        unreal.DirectionalLight, unreal.Vector(0, 0, 1200), unreal.Rotator(-45, -35, 0)
    )
    sun.set_actor_label("FL10_DirectionalLight")
    # 지정한 클래스의 실제 액터를 편집 장면에 만든다. 에셋 파일 생성과는 다르다.
    actors.spawn_actor_from_class(unreal.SkyLight, unreal.Vector(0, 0, 500))
    # 지정한 클래스의 실제 액터를 편집 장면에 만든다. 에셋 파일 생성과는 다르다.
    actors.spawn_actor_from_class(unreal.SkyAtmosphere, unreal.Vector(0, 0, 0))
    # 지정한 클래스의 실제 액터를 편집 장면에 만든다. 에셋 파일 생성과는 다르다.
    start = actors.spawn_actor_from_class(unreal.PlayerStart, unreal.Vector(-1700, 0, 110))
    start.set_actor_label("FL10_PlayerStart")
    # 지정한 클래스의 실제 액터를 편집 장면에 만든다. 에셋 파일 생성과는 다르다.
    title = actors.spawn_actor_from_class(
        unreal.TextRenderActor, unreal.Vector(0, -1700, 350), unreal.Rotator(0, 90, 0)
    )
    title.set_actor_label("FL10_한국어_사용안내")
    text = title.get_component_by_class(unreal.TextRenderComponent)
    text.set_text(
        "10 | 규칙 기반 환경 생성\nPCG: 시드 · 밀도 · 배치 · 재생성\n그래프: /Game/FeatureLab/PCG/PCG_LabDistribution"
    )
    text.set_world_size(65)
    # 지정한 클래스의 실제 액터를 편집 장면에 만든다. 에셋 파일 생성과는 다르다.
    actor = actors.spawn_actor_from_class(unreal.PCGVolume, unreal.Vector(0, 0, 70))
    actor.set_actor_label("FL10_PCG_Distribution")
    actor.set_editor_property("tags", ["FeatureLab_10", "FeatureLab_PCG"])
    component = actor.get_component_by_class(unreal.PCGComponent)
    component.set_graph(graph)
    component.set_editor_property("seed", 12026)
    component.generate_local(True)
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not editor.save_current_level()
    if not editor.save_current_level():
        raise RuntimeError("Could not save PCG workshop")
    result = {
        "created": True,
        "validated": False,
        "map": map_path,
        "graph": graph_path,
        "actor": actor.get_path_name(),
        "component": component.get_path_name(),
        "nodes": 3,
        "generation_requested": True,
        "remaining": [
            "generation result and instance count",
            "seed and density changes",
            "exclusion region",
            "runtime controls",
            "reset and deterministic replay",
            "replace diagnostic geometry with reconstructed/Fab assets",
        ],
    }
except Exception:
    result = {"created": False, "validated": False, "error": traceback.format_exc()}
OUT.write_text(json.dumps(result, indent=2, ensure_ascii=False), encoding="utf-8")
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = result
```

<a id="source-lab-lab-build-pcg-runtime-graphs-py"></a>

### lab_build_pcg_runtime_graphs.py

```python
# 파일 역할: 에셋·그래프·장면을 구성하는 제작 작업. 이미 있는 원본을 대상으로 재실행해도 되는지 가드 조건부터 읽는다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/PCG
#   /Game/Showcase/Global/DemoRoom/Meshes/SM_Tile_10MPillar_B
#   /Game/Showcase/Global/DemoRoom/Meshes/SM_Pipe

import json, traceback
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
assert root.name == "EpicFeatureLab"
# 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다.
try:
    tools = unreal.AssetToolsHelpers.get_asset_tools()
    lib = unreal.EditorAssetLibrary
    folder = "/Game/FeatureLab/PCG"
    lib.make_directory(folder)

    # 함수 graph: 이름은 graph이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: name 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
    def graph(name):
        result = lib.load_asset(folder + "/" + name)
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not result 지정한 경로·이름·종류로 새 에셋을 만든다. 같은 이름의 원본이 있는지 검사하는 코드와 함께 읽는다.
        if not result:
            # 지정한 경로·이름·종류로 새 에셋을 만든다. 같은 이름의 원본이 있는지 검사하는 코드와 함께 읽는다.
            result = tools.create_asset(name, folder, unreal.PCGGraph, unreal.PCGGraphFactory())
        for node in list(result.get_editor_property("nodes")):
            result.remove_node(node)
        # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
        return result

    # 함수 spawner: 이름은 spawner이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: g, mesh 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 mesh_selector_type이다.
    def spawner(g, mesh):
        node, settings = g.add_node_of_type(unreal.PCGStaticMeshSpawnerSettings)
        settings.set_editor_property("mesh_selector_type", unreal.PCGMeshSelectorWeighted)
        selector = settings.get_editor_property("mesh_selector_parameters")
        descriptor = unreal.PCGSoftISMComponentDescriptor()
        descriptor.set_editor_property("static_mesh", lib.load_asset(mesh))
        entry = unreal.PCGMeshSelectorWeightedEntry()
        entry.set_editor_properties({"descriptor": descriptor, "weight": 1})
        selector.set_editor_property("mesh_entries", [entry])
        # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
        return node

    scatter = graph("PCG_LabEnvironment")
    grid_node, grid = scatter.add_node_of_type(unreal.PCGCreatePointsGridSettings)
    # 여러 속성을 이름:값 사전으로 한 번에 설정한다. 각 항목이 개별 설정과 대응한다.
    grid.set_editor_properties(
        {
            "grid_extents": unreal.Vector(1200, 1200, 0),
            "cell_size": unreal.Vector(400, 400, 400),
            "cull_points_outside_volume": False,
        }
    )
    jitter_node, jitter = scatter.add_node_of_type(unreal.PCGTransformPointsSettings)
    # 여러 속성을 이름:값 사전으로 한 번에 설정한다. 각 항목이 개별 설정과 대응한다.
    jitter.set_editor_properties(
        {
            "offset_min": unreal.Vector(-35, -35, 0),
            "offset_max": unreal.Vector(35, 35, 0),
            "rotation_min": unreal.Rotator(pitch=0, yaw=-180, roll=0),
            "rotation_max": unreal.Rotator(pitch=0, yaw=180, roll=0),
            "scale_min": unreal.Vector(1.5, 0.75, 0.12),
            "scale_max": unreal.Vector(2.5, 1.25, 0.24),
            "uniform_scale": False,
        }
    )
    mask_node, mask = scatter.add_node_of_type(unreal.PCGCreatePointsSettings)
    point = unreal.PCGPoint()
    # 여러 속성을 이름:값 사전으로 한 번에 설정한다. 각 항목이 개별 설정과 대응한다.
    point.set_editor_properties(
        {
            "transform": unreal.Transform(),
            "bounds_min": unreal.Vector(-250, -250, -500),
            "bounds_max": unreal.Vector(250, 250, 500),
            "density": 1.0,
            "steepness": 1.0,
        }
    )
    mask.set_editor_property("points_to_create", [point])
    difference_node, difference = scatter.add_node_of_type(unreal.PCGDifferenceSettings)
    difference.set_editor_property("mode", unreal.PCGDifferenceMode.DISCRETE)
    filter_node, density = scatter.add_node_of_type(unreal.PCGDensityFilterSettings)
    density.set_editor_properties({"lower_bound": 0.999, "upper_bound": 1.0})
    pillar = "/Game/Showcase/Global/DemoRoom/Meshes/SM_Tile_10MPillar_B"
    spawn = spawner(scatter, pillar)
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 (a, p, b, q)의 값이 매번 바뀐다.
    for a, p, b, q in [
        (grid_node, "Out", jitter_node, "In"),
        (jitter_node, "Out", difference_node, "Source"),
        (mask_node, "Out", difference_node, "Differences"),
        (difference_node, "Out", filter_node, "In"),
        (filter_node, "Out", spawn, "In"),
        (spawn, "Out", scatter.get_output_node(), "Out"),
    ]:
        # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
        assert scatter.add_edge(a, p, b, q)
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
    assert lib.save_loaded_asset(scatter, False)
    path_graph = graph("PCG_LabSplinePosts")
    getter_node, getter = path_graph.add_node_of_type(unreal.PCGGetSplineSettings)
    # 여러 속성을 이름:값 사전으로 한 번에 설정한다. 각 항목이 개별 설정과 대응한다.
    getter.set_editor_properties(
        {"always_requery_actors": True, "components_must_overlap_self": False}
    )
    sampler_node, sampler = path_graph.add_node_of_type(unreal.PCGSplineSamplerSettings)
    params = sampler.get_editor_property("sampler_params")
    # 여러 속성을 이름:값 사전으로 한 번에 설정한다. 각 항목이 개별 설정과 대응한다.
    params.set_editor_properties(
        {
            "mode": unreal.PCGSplineSamplingMode.DISTANCE,
            "dimension": unreal.PCGSplineSamplingDimension.ON_SPLINE,
            "distance_increment": 150.0,
            "unbounded": True,
        }
    )
    sampler.set_editor_property("sampler_params", params)
    transform_node, transform = path_graph.add_node_of_type(unreal.PCGTransformPointsSettings)
    # 여러 속성을 이름:값 사전으로 한 번에 설정한다. 각 항목이 개별 설정과 대응한다.
    transform.set_editor_properties(
        {
            "rotation_min": unreal.Rotator(pitch=90, yaw=0, roll=0),
            "rotation_max": unreal.Rotator(pitch=90, yaw=0, roll=0),
            "scale_min": unreal.Vector(0.08, 4, 4),
            "scale_max": unreal.Vector(0.08, 4, 4),
            "uniform_scale": False,
        }
    )
    pipe = "/Game/Showcase/Global/DemoRoom/Meshes/SM_Pipe"
    spawn = spawner(path_graph, pipe)
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 (a, p, b, q)의 값이 매번 바뀐다.
    for a, p, b, q in [
        (getter_node, "Out", sampler_node, "Spline"),
        (sampler_node, "Out", transform_node, "In"),
        (transform_node, "Out", spawn, "In"),
        (spawn, "Out", path_graph.get_output_node(), "Out"),
    ]:
        # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
        assert path_graph.add_edge(a, p, b, q)
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
    assert lib.save_loaded_asset(path_graph, False)
    # RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
    RESULT = {
        "status": "graphs_built",
        "scatter_graph": scatter.get_path_name(),
        "spline_graph": path_graph.get_path_name(),
        "scatter_nodes": len(scatter.get_editor_property("nodes")),
        "spline_nodes": len(path_graph.get_editor_property("nodes")),
        "official_meshes": [pillar, pipe],
        "provenance": "Existing Epic Mutable Sample showcase content, reused without another acquisition",
    }
except Exception:
    RESULT = {"status": "failed", "error": traceback.format_exc()}
(root / "Evidence/case10-runtime-graphs.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-build-pcg-runtime-scene-py"></a>

### lab_build_pcg_runtime_scene.py

```python
# 파일 역할: 에셋·그래프·장면을 구성하는 제작 작업. 이미 있는 원본을 대상으로 재실행해도 되는지 가드 조건부터 읽는다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Maps/FL_10_ProceduralEnvironment
#   /Game/FeatureLab/Crowds/BP_LabCrowdGameMode
#   /Game/FeatureLab/PCG/M_ProtectedZone
#   /Game/FeatureLab/Maps/FL_10_PCG
#   /Game/FeatureLab/PCG
#   /Game/FeatureLab/PCG/PCG_LabEnvironment
#   /Game/FeatureLab/PCG/PCG_LabSplinePosts

import json, traceback
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
assert root.name == "EpicFeatureLab"
# 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다. 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
try:
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
    assert not unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
    lib = unreal.EditorAssetLibrary
    # 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
    editor = unreal.get_editor_subsystem(unreal.LevelEditorSubsystem)
    # 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
    actors = unreal.get_editor_subsystem(unreal.EditorActorSubsystem)
    unreal.LevelSequenceEditorBlueprintLibrary.close_level_sequence()
    path = "/Game/FeatureLab/Maps/FL_10_ProceduralEnvironment"
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world().get_name() != 'FL_10_ProceduralEnvironment' 작업할 맵을 연다. 현재 맵과 다른 맵이므로 실행 중인 PIE를 먼저 끝내는지 확인한다.
    if (
        unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world().get_name()
        != "FL_10_ProceduralEnvironment"
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
        item = (
            found[0] if found else actors.spawn_actor_from_class(cls, unreal.Vector(*position))
        )
        item.set_actor_label(label)
        item.tags = ["FeatureLab_Owned", "FeatureLab_10"]
        # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
        return item

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
    floor = actor(unreal.StaticMeshActor, "FL10_Floor", (0, 0, -10))
    floor.static_mesh_component.set_static_mesh(lib.load_asset("/Engine/BasicShapes/Cube"))
    floor.set_actor_scale3d(unreal.Vector(36, 36, 0.2))
    sun = actor(unreal.DirectionalLight, "FL10_Sun", (0, 0, 900))
    # 액터 방향을 바꾼다. 위치 이동과 구분한다.
    sun.set_actor_rotation(unreal.Rotator(pitch=-45, yaw=-35, roll=0), False)
    # 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 intensity이다.
    sun.get_component_by_class(unreal.DirectionalLightComponent).set_editor_property(
        "intensity", 3.5
    )
    sky = actor(unreal.SkyLight, "FL10_Sky", (0, 0, 500))
    sky.get_component_by_class(unreal.SkyLightComponent).set_editor_property("intensity", 1.2)
    actor(unreal.SkyAtmosphere, "FL10_Atmosphere", (0, 0, 0))
    camera = actor(unreal.CineCameraActor, "FL10_Camera", (-2600, -2900, 2600))
    look(camera, (0, 0, 0))
    component = camera.get_cine_camera_component()
    component.set_editor_property("current_focal_length", 30.0)
    focus = component.get_editor_property("focus_settings")
    focus.set_editor_property("focus_method", unreal.CameraFocusMethod.DISABLE)
    component.set_editor_property("focus_settings", focus)
    component.set_editor_property("constrain_aspect_ratio", False)
    material = lib.load_asset("/Game/FeatureLab/PCG/M_ProtectedZone")
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not material 지정한 경로·이름·종류로 새 에셋을 만든다. 같은 이름의 원본이 있는지 검사하는 코드와 함께 읽는다.
    if not material:
        # 지정한 경로·이름·종류로 새 에셋을 만든다. 같은 이름의 원본이 있는지 검사하는 코드와 함께 읽는다.
        material = unreal.AssetToolsHelpers.get_asset_tools().create_asset(
            "M_ProtectedZone",
            "/Game/FeatureLab/PCG",
            unreal.Material,
            unreal.MaterialFactoryNew(),
        )
        color = unreal.MaterialEditingLibrary.create_material_expression(
            material, unreal.MaterialExpressionConstant3Vector, -250, 0
        )
        color.set_editor_property("constant", unreal.LinearColor(r=0.55, g=0.12, b=0.015, a=1))
        unreal.MaterialEditingLibrary.connect_material_property(
            color, "", unreal.MaterialProperty.MP_BASE_COLOR
        )
        unreal.MaterialEditingLibrary.recompile_material(material)
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
    assert lib.save_loaded_asset(material, False)
    controller = actor(unreal.FeatureLabPCGActor, "FL10_RuntimeDistribution", (0, 0, 0))
    # 여러 속성을 이름:값 사전으로 한 번에 설정한다. 각 항목이 개별 설정과 대응한다.
    controller.set_editor_properties(
        {
            "scatter_graph_asset": lib.load_asset("/Game/FeatureLab/PCG/PCG_LabEnvironment"),
            "spline_graph_asset": lib.load_asset("/Game/FeatureLab/PCG/PCG_LabSplinePosts"),
            "inspection_camera": camera,
        }
    )
    zone = controller.get_editor_property("exclusion_visual")
    zone.set_static_mesh(lib.load_asset("/Engine/BasicShapes/Cube"))
    zone.set_material(0, material)
    controller.regenerate()
    start = actor(unreal.PlayerStart, "FL10_ViewerStart", (-2600, -2900, 2600))
    look(start, (0, 0, 0))
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert editor.save_current_level()
    # RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
    RESULT = {
        "status": "scene_saved_generation_pending",
        "map": path,
        "controller": controller.get_path_name(),
        "controls": {
            "1": "Seed12026/12027",
            "2": "Grid spacing400/300cm",
            "3": "Exclusion half-width250/650cm",
            "4": "Straight/curved spline",
            "R": "Reset and deterministic regenerate",
        },
        "original_core_map_preserved": "/Game/FeatureLab/Maps/FL_10_PCG",
    }
except Exception:
    RESULT = {"status": "failed", "error": traceback.format_exc()}
(root / "Evidence/case10-runtime-scene.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-capture-pcg-py"></a>

### lab_capture_pcg.py

```python
# 파일 역할: EpicFeatureLab의 lab_capture_pcg 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
output = root / "Evidence/case10-procedural-curve.png"
unreal.AutomationLibrary.take_high_res_screenshot(1280, 720, str(output))
RESULT = {"capture_requested": str(output)}
```

<a id="source-lab-lab-case10-cycle-py"></a>

### lab_case10_cycle.py

```python
# 파일 역할: EpicFeatureLab의 lab_case10_cycle 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Maps/FL_10_PCG

import hashlib
import json
import time
import traceback
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

# ROOT: 프로젝트 루트 경로. 결과 파일을 어느 프로젝트에 쓰는지 정하는 기준이다.
ROOT = Path(unreal.Paths.project_dir()).resolve()
assert ROOT.name == "EpicFeatureLab"
# 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
actors = unreal.get_editor_subsystem(unreal.EditorActorSubsystem).get_all_level_actors()
actor = next(item for item in actors if item.actor_has_tag("FeatureLab_PCG"))
component = actor.get_component_by_class(unreal.PCGComponent)
graph = component.get_graph()
nodes = list(graph.get_editor_property("nodes"))
grid_node = next(
    node
    for node in nodes
    if isinstance(node.get_settings(), unreal.PCGCreatePointsGridSettings)
)
jitter_node = next(
    node for node in nodes if isinstance(node.get_settings(), unreal.PCGTransformPointsSettings)
)
grid = grid_node.get_settings()
diff_node = next(
    (node for node in nodes if isinstance(node.get_settings(), unreal.PCGDifferenceSettings)),
    None,
)
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: diff_node is None 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 cull_points_outside_volume이다.
if diff_node is None:
    diff_node, difference = graph.add_node_of_type(unreal.PCGDifferenceSettings)
    inner_node, inner = graph.add_node_of_type(unreal.PCGCreatePointsGridSettings)
    inner.set_editor_property("cull_points_outside_volume", False)
    graph.remove_edge(grid_node, "Out", jitter_node, "In")
    assert graph.add_edge(grid_node, "Out", diff_node, "Source")
    assert graph.add_edge(inner_node, "Out", diff_node, "Differences")
    assert graph.add_edge(diff_node, "Out", jitter_node, "In")
else:
    difference = diff_node.get_settings()
    inner_node = next(
        node
        for node in nodes
        if isinstance(node.get_settings(), unreal.PCGCreatePointsGridSettings)
        and node != grid_node
    )
    inner = inner_node.get_settings()
difference.set_editor_property("keep_zero_density_points", False)
# STAGE에 기준값 0을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
STAGE = 0
START = time.monotonic()
NEXT = START + 0.7
# TICK에 기준값 None을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
TICK = None
# DONE에 기준값 False을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
DONE = False
# BUSY에 기준값 False을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
BUSY = False
# REPORT: 이번 작업의 입력·측정·성공 여부를 모을 기록용 사전이다. 게임의 실행 상태 자체와는 다르다.
REPORT = {
    "status": "running",
    "map": "/Game/FeatureLab/Maps/FL_10_PCG",
    "graph": graph.get_path_name(),
    "samples": [],
    "checks": {},
}


# 함수 persist: 이름은 persist이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: 별도 입력 없음 문자열을 파일에 기록한다. 결과 JSON이나 보고서인지, 실제 코드·설정 파일인지 경로를 확인한다.
def persist():
    (ROOT / "Evidence" / "case10-pcg-cycle.json").write_text(
        json.dumps(REPORT, indent=2, ensure_ascii=False), encoding="utf-8"
    )


# 함수 configure: 이름은 configure이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: seed, cell, exclude 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 seed이다.
def configure(seed, cell, exclude):
    component.set_editor_property("seed", seed)
    grid.set_editor_property("cell_size", unreal.Vector(cell, cell, cell))
    inner.set_editor_property("cell_size", unreal.Vector(cell, cell, cell))
    # 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 grid_extents이다.
    inner.set_editor_property(
        "grid_extents",
        unreal.Vector(600 if cell == 300 else 400, 600 if cell == 300 else 400, 0),
    )
    difference.set_editor_property("enabled", exclude)
    graph.force_notification_for_editor()
    component.generate_local(True)


# 함수 snapshot: 이름은 snapshot이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: name 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
def snapshot(name):
    transforms = []
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 mesh의 값이 매번 바뀐다. 반복에 쓸 정수 순서를 만든다. 끝 값은 포함되지 않는다.
    for mesh in actor.get_components_by_class(unreal.InstancedStaticMeshComponent):
        # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 index의 값이 매번 바뀐다. 반복에 쓸 정수 순서를 만든다. 끝 값은 포함되지 않는다.
        for index in range(mesh.get_instance_count()):
            transform = mesh.get_instance_transform(index, True)
            # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
            transforms.append(
                [
                    round(value, 4)
                    for vector in (transform.translation, transform.scale3d)
                    for value in (vector.x, vector.y, vector.z)
                ]
            )
    encoded = json.dumps(sorted(transforms), separators=(",", ":")).encode()
    # 바이트 내용의 지문을 계산한다. 파일 이름이 같다는 검사보다 내용 비교에 가깝다.
    sample = {
        "phase": name,
        "count": len(transforms),
        "transform_sha256": hashlib.sha256(encoded).hexdigest(),
    }
    REPORT["samples"].append(sample)
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return sample


configure(12026, 400, False)
persist()


# 함수 tick: 이름은 tick이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: delta 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 generated이다.
def tick(delta):
    global STAGE, NEXT, TICK, DONE, BUSY
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: DONE or BUSY
    if DONE or BUSY:
        # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
        return
    now = time.monotonic()
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: now < NEXT
    if now < NEXT:
        # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
        return
    # BUSY에 기준값 True을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
    BUSY = True
    # 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 generated이다.
    try:
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: now - START > 60
        if now - START > 60:
            raise RuntimeError("PCG workflow exceeded 60 seconds")
        if not component.get_editor_property("generated"):
            NEXT = now + 0.2
            # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
            return
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: STAGE == 0
        if STAGE == 0:
            first = snapshot("baseline")
            assert first["count"] > 0
            configure(27019, 400, False)
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: STAGE == 1
        elif STAGE == 1:
            sample = snapshot("new_seed")
            REPORT["checks"]["seed_changes_distribution"] = (
                sample["transform_sha256"] != REPORT["samples"][0]["transform_sha256"]
            )
            configure(27019, 300, False)
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: STAGE == 2
        elif STAGE == 2:
            sample = snapshot("higher_density")
            REPORT["checks"]["density_increases_count"] = (
                sample["count"] > REPORT["samples"][0]["count"]
            )
            configure(27019, 300, True)
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: STAGE == 3
        elif STAGE == 3:
            sample = snapshot("exclusion_enabled")
            REPORT["checks"]["exclusion_removes_instances"] = (
                0 < sample["count"] < REPORT["samples"][2]["count"]
            )
            configure(12026, 400, False)
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: STAGE == 4 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
        elif STAGE == 4:
            sample = snapshot("reset")
            REPORT["checks"]["deterministic_reset"] = (
                sample["transform_sha256"] == REPORT["samples"][0]["transform_sha256"]
            )
            configure(12026, 400, True)
        else:
            # DONE에 기준값 True을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
            DONE = True
            handle, TICK = TICK, None
            # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: handle is not None 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
            if handle is not None:
                # 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
                unreal.unregister_slate_post_tick_callback(handle)
            snapshot("saved_default_with_exclusion")
            # 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
            unreal.EditorAssetLibrary.save_loaded_asset(graph, False)
            # 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
            unreal.get_editor_subsystem(unreal.LevelEditorSubsystem).save_current_level()
            REPORT["status"] = "passed" if all(REPORT["checks"].values()) else "failed"
            REPORT["coverage"] = (
                "Editor generation, seed, density, exclusion and deterministic reset; runtime controls and final presentation remain separate"
            )
            persist()
            # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
            return
        STAGE += 1
        NEXT = now + 0.7
        persist()
    except Exception:
        # DONE에 기준값 True을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
        DONE = True
        REPORT["status"] = "failed"
        REPORT["error"] = traceback.format_exc()
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: TICK is not None 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
        if TICK is not None:
            # 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
            unreal.unregister_slate_post_tick_callback(TICK)
            # TICK에 기준값 None을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
            TICK = None
        persist()
    finally:
        # BUSY에 기준값 False을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
        BUSY = False


# 에디터 갱신 뒤 호출할 함수를 등록한다. 작업이 끝나면 핸들로 해제해야 반복 호출이 남지 않는다.
TICK = unreal.register_slate_post_tick_callback(tick)
RESULT = {"started": True, "report": str(ROOT / "Evidence" / "case10-pcg-cycle.json")}
```

<a id="source-lab-lab-case10-probe-py"></a>

### lab_case10_probe.py

```python
# 파일 역할: EpicFeatureLab의 lab_case10_probe 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

import json
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
assert root.name == "EpicFeatureLab"
rows = []
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 actor의 값이 매번 바뀐다. 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
for actor in unreal.get_editor_subsystem(unreal.EditorActorSubsystem).get_all_level_actors():
    if actor.actor_has_tag("FeatureLab_PCG"):
        component = actor.get_component_by_class(unreal.PCGComponent)
        instances = []
        # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 mesh의 값이 매번 바뀐다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 static_mesh이다.
        for mesh in actor.get_components_by_class(unreal.InstancedStaticMeshComponent):
            asset = mesh.get_editor_property("static_mesh")
            # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
            instances.append(
                {
                    "component": mesh.get_name(),
                    "count": mesh.get_instance_count(),
                    "mesh": asset.get_path_name() if asset else None,
                }
            )
        data = component.get_generated_graph_output()
        # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
        rows.append(
            {
                "actor": actor.get_path_name(),
                "generated": component.get_editor_property("generated"),
                "instance_components": instances,
                "instances": sum(item["count"] for item in instances),
                "output_data": len(data.get_editor_property("tagged_data")),
            }
        )
RESULT = {"actors": rows}
(root / "Evidence" / "case10-pcg-output.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-peek-pcg-runtime-py"></a>

### lab_peek_pcg_runtime.py

```python
# 파일 역할: 현재 에셋·객체·실행 상태를 읽어 기록하는 관찰 작업.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

import json
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
sub = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem)
# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
world = sub.get_game_world()
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: world 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
if world:
    actor = unreal.GameplayStatics.get_all_actors_of_class(world, unreal.FeatureLabPCGActor)[0]
else:
    # 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
    actor = next(
        a
        for a in unreal.get_editor_subsystem(unreal.EditorActorSubsystem).get_all_level_actors()
        if isinstance(a, unreal.FeatureLabPCGActor)
    )
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
RESULT = json.loads(actor.capture_distribution())
(Path(unreal.Paths.project_dir()) / "Evidence/case10-live-state.json").write_text(
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

<a id="source-lab-lab-save-pcg-variant-py"></a>

### lab_save_pcg_variant.py

```python
# 파일 역할: EpicFeatureLab의 lab_save_pcg_variant 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

import json
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
assert not unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
actor = next(
    a
    for a in unreal.get_editor_subsystem(unreal.EditorActorSubsystem).get_all_level_actors()
    if isinstance(a, unreal.FeatureLabPCGActor)
)
# JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
state = json.loads(actor.capture_distribution())
assert state["stage"] == 0 and not state["pending"] and state["dense"] and state["spline_bent"]
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
assert unreal.get_editor_subsystem(unreal.LevelEditorSubsystem).save_current_level()
RESULT = {"status": "saved_variant", "state": state}
(root / "Evidence/case10-saved-variant.json").write_text(
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

<a id="source-lab-lab-test-pcg-runtime-py"></a>

### lab_test_pcg_runtime.py

```python
# 파일 역할: 완성 결과를 실제 값과 비교하는 검증 작업. 생성 코드와 검사 코드를 구분한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/Showcase/Global/DemoRoom/Meshes/SM_Tile_10MPillar_B.SM_Tile_10MPillar_B
#   /Game/Showcase/Global/DemoRoom/Meshes/SM_Pipe.SM_Pipe

import json, time, traceback, math, hashlib
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

# ROOT: 프로젝트 루트 경로. 결과 파일을 어느 프로젝트에 쓰는지 정하는 기준이다.
ROOT = Path(unreal.Paths.project_dir()).resolve()
MODE = globals().get("PCG_TEST_MODE", "runtime")
assert MODE in ["editor", "runtime"]
OUT = ROOT / "Evidence" / ("case10-pcg-" + MODE + "-validation.json")
# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
sub = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem)
WORLD = sub.get_game_world() if MODE == "runtime" else sub.get_editor_world()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert WORLD
if MODE == "runtime":
    ACTOR = unreal.GameplayStatics.get_all_actors_of_class(WORLD, unreal.FeatureLabPCGActor)[0]
else:
    # 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
    ACTOR = next(
        a
        for a in unreal.get_editor_subsystem(unreal.EditorActorSubsystem).get_all_level_actors()
        if isinstance(a, unreal.FeatureLabPCGActor)
    )
SOURCE_FILES = [
    ROOT / "Content/FeatureLab/PCG" / (name + ".uasset")
    for name in ["PCG_LabEnvironment", "PCG_LabSplinePosts"]
]
# 바이트 내용의 지문을 계산한다. 파일 이름이 같다는 검사보다 내용 비교에 가깝다.
SOURCE_HASHES = [hashlib.sha256(p.read_bytes()).hexdigest() for p in SOURCE_FILES]
STAGES = ["baseline", "seed", "dense", "excluded", "bent", "reset", "repeat_reset"]
PHASES = {}
# JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
STATE = {
    "index": 0,
    "started": time.monotonic(),
    "since": time.monotonic(),
    "busy": False,
    "minimum_generation": json.loads(ACTOR.capture_distribution())["generation"] + 1,
}
ACTOR.reset_distribution()


# 함수 placements: 이름은 placements이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: s, key
def placements(s, key):
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return sorted(
        (
            m["mesh"],
            tuple(round(v, 5) for v in i["location"]),
            tuple(round(v, 5) for v in i["scale"]),
            round(i["yaw"], 5),
        )
        for m in s[key]["meshes"]
        for i in m["instances"]
    )


# 함수 finish: 이름은 finish이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: report 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
def finish(report):
    global ACTOR, WORLD
    # 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
    unreal.unregister_slate_post_tick_callback(HANDLE)
    report["phases"] = PHASES
    OUT.write_text(json.dumps(report, indent=2), encoding="utf-8")
    # ACTOR에 기준값 None을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
    ACTOR = WORLD = None


# 함수 tick: 이름은 tick이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: delta JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
def tick(delta):
    if STATE["busy"]:
        # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
        return
    STATE["busy"] = True
    # 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다. JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
    try:
        now = time.monotonic()
        if now - STATE["started"] > 180:
            raise RuntimeError("PCG validation timed out")
        if now - STATE["since"] < 0.4:
            # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
            return
        # JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
        data = json.loads(ACTOR.capture_distribution())
        if data["stage"] or data["pending"] or data["generation"] < STATE["minimum_generation"]:
            # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
            return
        name = STAGES[STATE["index"]]
        PHASES[name] = data
        if name == "repeat_reset":
            p = PHASES
            # 차이의 부호를 없애 크기만 비교한다. 오차 허용 범위 검사에 자주 사용한다.
            outside = lambda s: all(
                abs(i["location"][0]) >= s["exclusion_extent"] - 0.01
                or abs(i["location"][1]) >= s["exclusion_extent"] - 0.01
                for m in s["scatter"]["meshes"]
                for i in m["instances"]
            )
            paths = lambda s, k: {m["mesh"] for m in s[k]["meshes"] if m["count"]}
            checks = {
                "baseline_pillars_really_generated": p["baseline"]["scatter"]["count"] > 20,
                "baseline_spline_posts_really_generated": p["baseline"]["spline"]["count"]
                >= 14,
                "scatter_uses_official_sample_pillar": all(
                    paths(s, "scatter")
                    == {
                        "/Game/Showcase/Global/DemoRoom/Meshes/SM_Tile_10MPillar_B.SM_Tile_10MPillar_B"
                    }
                    for s in p.values()
                ),
                "spline_uses_official_sample_pipe": all(
                    paths(s, "spline")
                    == {"/Game/Showcase/Global/DemoRoom/Meshes/SM_Pipe.SM_Pipe"}
                    for s in p.values()
                ),
                "seed_changes_actual_placements": p["seed"]["seed"] == 12027
                and placements(p["seed"], "scatter") != placements(p["baseline"], "scatter"),
                "density_changes_actual_instance_count": p["dense"]["dense"]
                and p["dense"]["scatter"]["count"] > p["seed"]["scatter"]["count"],
                "larger_exclusion_reduces_instances": p["excluded"]["exclusion_extent"] == 650
                and p["excluded"]["scatter"]["count"] < p["dense"]["scatter"]["count"],
                "no_scatter_centers_inside_protected_zone": all(outside(s) for s in p.values()),
                "spline_shape_changes_curve_length": p["bent"]["spline_length"]
                > p["baseline"]["spline_length"] * 1.1,
                "spline_bend_changes_post_count": p["bent"]["spline"]["count"]
                > p["baseline"]["spline"]["count"],
                "spline_posts_follow_new_curve": max(
                    i["location"][1]
                    for m in p["bent"]["spline"]["meshes"]
                    for i in m["instances"]
                )
                > -400,
                "reset_restores_scatter_placements": placements(p["reset"], "scatter")
                == placements(p["baseline"], "scatter"),
                "reset_restores_spline_placements": placements(p["reset"], "spline")
                == placements(p["baseline"], "spline"),
                "repeat_reset_is_identical": all(
                    placements(p["repeat_reset"], k) == placements(p["reset"], k)
                    for k in ["scatter", "spline"]
                ),
                "reset_restores_all_parameters": p["reset"]["seed"] == 12026
                and not p["reset"]["dense"]
                and p["reset"]["exclusion_extent"] == 250
                and not p["reset"]["spline_bent"],
                "every_operation_finishes_generation": all(
                    s["stage"] == 0
                    and not s["pending"]
                    and not s["scatter"]["generating"]
                    and not s["spline"]["generating"]
                    for s in p.values()
                ),
                "no_old_generation_accumulation": all(
                    len(s[k]["meshes"]) == 1 for s in p.values() for k in ["scatter", "spline"]
                ),
                "source_graph_assets_unchanged": SOURCE_HASHES
                == [hashlib.sha256(f.read_bytes()).hexdigest() for f in SOURCE_FILES],
                "all_instance_coordinates_finite": all(
                    math.isfinite(v)
                    for s in p.values()
                    for k in ["scatter", "spline"]
                    for m in s[k]["meshes"]
                    for i in m["instances"]
                    for field in ["location", "scale"]
                    for v in i[field]
                ),
            }
            finish(
                {
                    "status": "passed" if all(checks.values()) else "failed_checks",
                    "checks": checks,
                    "mode": MODE,
                    "source_graph_sha256": SOURCE_HASHES,
                    "counts": {
                        k: {q: s[q]["count"] for q in ["scatter", "spline"]}
                        for k, s in p.items()
                    },
                }
            )
            # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
            return
        STATE["minimum_generation"] = data["generation"] + 1
        if name == "baseline":
            ACTOR.change_seed()
        elif name == "seed":
            ACTOR.toggle_density()
        elif name == "dense":
            ACTOR.toggle_exclusion()
        elif name == "excluded":
            ACTOR.toggle_spline()
        elif name in ["bent", "reset"]:
            ACTOR.reset_distribution()
        STATE["index"] += 1
        STATE["since"] = now
    except Exception:
        finish({"status": "failed", "error": traceback.format_exc()})
    finally:
        STATE["busy"] = False


OUT.write_text(json.dumps({"status": "running", "mode": MODE}), encoding="utf-8")
# HANDLE: 나중에 콜백을 해제하기 위해 보관하는 등록 표식이다. 에디터 갱신 뒤 호출할 함수를 등록한다. 작업이 끝나면 핸들로 해제해야 반복 호출이 남지 않는다.
HANDLE = unreal.register_slate_post_tick_callback(tick)
RESULT = {"status": "running", "mode": MODE, "output": str(OUT)}
```

<a id="source-lab-lab-verify-pcg-roundtrip-py"></a>

### lab_verify_pcg_roundtrip.py

```python
# 파일 역할: 완성 결과를 실제 값과 비교하는 검증 작업. 생성 코드와 검사 코드를 구분한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

import json
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
# JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
before = json.loads(
    (root / "Evidence/case10-saved-variant.json").read_text(encoding="utf-8-sig")
)["state"]
# 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
actor = next(
    a
    for a in unreal.get_editor_subsystem(unreal.EditorActorSubsystem).get_all_level_actors()
    if isinstance(a, unreal.FeatureLabPCGActor)
)
# JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
after = json.loads(actor.capture_distribution())
assert after["stage"] == 0 and not after["pending"]


# 함수 placements: 이름은 placements이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: state, key
def placements(state, key):
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return sorted(
        (
            m["mesh"],
            tuple(round(v, 5) for v in i["location"]),
            tuple(round(v, 5) for v in i["scale"]),
            round(i["yaw"], 5),
        )
        for m in state[key]["meshes"]
        for i in m["instances"]
    )


checks = {
    "saved_density_and_curve_flags_persist": after["dense"] and after["spline_bent"],
    "saved_seed_and_exclusion_persist": before["seed"] == after["seed"]
    and before["exclusion_extent"] == after["exclusion_extent"],
    "reopened_editor_rebuilds_scatter": after["scatter"]["count"] > 30,
    "reopened_editor_rebuilds_spline": after["spline"]["count"] == 19,
    "scatter_saved_variant_is_identical": placements(before, "scatter")
    == placements(after, "scatter"),
    "spline_saved_variant_is_identical": placements(before, "spline")
    == placements(after, "spline"),
    "curve_length_persists": abs(before["spline_length"] - after["spline_length"]) < 0.001,
    "no_duplicate_resources_after_reload": all(
        len(after[k]["meshes"]) == 1 for k in ["scatter", "spline"]
    ),
}
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "status": "passed" if all(checks.values()) else "failed_checks",
    "checks": checks,
    "saved_variant": before,
    "reopened_variant": after,
}
(root / "Evidence/case10-roundtrip-validation.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
actor.reset_distribution()
```

<a id="source-source-mutablesample-featurelabpcg-cpp"></a>

### FeatureLabPCG.cpp

```cpp
// 파일 역할: 10번 시드·밀도·제외 영역·스플라인 변경과 재생성
// 클래스=작업 종류, 객체=실제 한 개, 포인터(* 또는 TObjectPtr)=다른 객체를 가리키는 참조.
// nullptr은 대상 없음, bool은 참/거짓, TArray는 순서 있는 목록, FString은 문자열이다.
// WITH_EDITOR 구간은 에디터 빌드에서만 사용하는 코드다. 원본과의 토큰 비교 결과는 code-validation.json에 기록한다.

#include "FeatureLabPCG.h"
#include "PCGComponent.h"
#include "PCGGraph.h"
#include "PCGNode.h"
#include "PCGManagedResource.h"
#include "Elements/PCGCreatePointsGrid.h"
#include "Elements/PCGCreatePoints.h"
#include "Components/BoxComponent.h"
#include "Components/SplineComponent.h"
#include "Components/StaticMeshComponent.h"
#include "Components/InstancedStaticMeshComponent.h"
#include "Components/InputComponent.h"
#include "GameFramework/PlayerController.h"
#include "Kismet/GameplayStatics.h"
#include "Engine/Engine.h"
#include "Serialization/JsonSerializer.h"
namespace
{
TSharedPtr<FJsonValue> PCGVector(const FVector &P)
{
    TArray<TSharedPtr<FJsonValue>> A;
    A.Add(MakeShared<FJsonValueNumber>(P.X));
    A.Add(MakeShared<FJsonValueNumber>(P.Y));
    A.Add(MakeShared<FJsonValueNumber>(P.Z));
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return MakeShared<FJsonValueArray>(A);
}
TSharedRef<FJsonObject> CapturePCGComponent(const UPCGComponent *Component)
{
    auto O = MakeShared<FJsonObject>();
    TArray<TSharedPtr<FJsonValue>> Meshes;
    int32 Total = 0;
    Component->ForEachConstManagedResource([&](const UPCGManagedResource *Resource) {
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (const auto *Managed = Cast<UPCGManagedISMComponent>(Resource))
            // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
            if (auto *ISM = Managed->GetComponent())
            {
                auto M = MakeShared<FJsonObject>();
                // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
                M->SetStringField(TEXT("mesh"), ISM->GetStaticMesh()
                                                    ? ISM->GetStaticMesh()->GetPathName()
                                                    : TEXT("null"));
                // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
                M->SetNumberField(TEXT("count"), ISM->GetInstanceCount());
                Total += ISM->GetInstanceCount();
                TArray<TSharedPtr<FJsonValue>> Instances;
                // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
                for (int32 I = 0; I < ISM->GetInstanceCount(); ++I)
                {
                    FTransform T;
                    ISM->GetInstanceTransform(I, T, true);
                    auto P = MakeShared<FJsonObject>();
                    P->SetField(TEXT("location"), PCGVector(T.GetLocation()));
                    P->SetField(TEXT("scale"), PCGVector(T.GetScale3D()));
                    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
                    P->SetNumberField(TEXT("yaw"), T.Rotator().Yaw);
                    Instances.Add(MakeShared<FJsonValueObject>(P));
                }
                M->SetArrayField(TEXT("instances"), Instances);
                Meshes.Add(MakeShared<FJsonValueObject>(M));
            }
    });
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("count"), Total);
    O->SetArrayField(TEXT("meshes"), Meshes);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetBoolField(TEXT("generating"), Component->IsGenerating());
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetBoolField(TEXT("cleaning"), Component->IsCleaningUp());
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return O;
}
} // namespace
// 【함수 역할】클래스의 기본 부품과 기본값을 준비하는 생성자다. 이 시점에는 게임 월드가 모두 준비됐다고 가정하지 않는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
AFeatureLabPCGActor::AFeatureLabPCGActor()
{
    PrimaryActorTick.bCanEverTick = true;
    // 이 액터의 기본 컴포넌트를 만든다. 부품 생성 뒤 장면 부착·재질·충돌 설정이 이어지는지 확인한다.
    auto *Bounds = CreateDefaultSubobject<UBoxComponent>(TEXT("Bounds"));
    Bounds->SetBoxExtent(FVector(1300, 1300, 600));
    Bounds->SetCollisionEnabled(ECollisionEnabled::NoCollision);
    SetRootComponent(Bounds);
    // 이 액터의 기본 컴포넌트를 만든다. 부품 생성 뒤 장면 부착·재질·충돌 설정이 이어지는지 확인한다.
    Path = CreateDefaultSubobject<USplineComponent>(TEXT("Path"));
    Path->SetupAttachment(RootComponent);
    // 이 액터의 기본 컴포넌트를 만든다. 부품 생성 뒤 장면 부착·재질·충돌 설정이 이어지는지 확인한다.
    ExclusionVisual = CreateDefaultSubobject<UStaticMeshComponent>(TEXT("ExclusionVisual"));
    ExclusionVisual->SetupAttachment(RootComponent);
    ExclusionVisual->SetCollisionEnabled(ECollisionEnabled::NoCollision);
    // 이 액터의 기본 컴포넌트를 만든다. 부품 생성 뒤 장면 부착·재질·충돌 설정이 이어지는지 확인한다.
    Scatter = CreateDefaultSubobject<UPCGComponent>(TEXT("Scatter"));
    // 이 액터의 기본 컴포넌트를 만든다. 부품 생성 뒤 장면 부착·재질·충돌 설정이 이어지는지 확인한다.
    SplinePCG = CreateDefaultSubobject<UPCGComponent>(TEXT("SplinePCG"));
    Scatter->GenerationTrigger = SplinePCG->GenerationTrigger =
        EPCGComponentGenerationTrigger::GenerateOnDemand;
    Scatter->bIsComponentPartitioned = SplinePCG->bIsComponentPartitioned = false;
    UpdatePath();
}
// 【함수 역할】입력이나 현재 선택값을 실제 객체의 상태에 반영한다. 값 저장과 화면·물리·애니메이션 갱신 호출을 함께 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabPCGActor::UpdatePath()
{
    Path->ClearSplinePoints(false);
    const TArray<FVector> Points = {FVector(-1100, -900, 30),
                                    FVector(-400, bBent ? -250 : -900, 30),
                                    FVector(400, bBent ? -250 : -900, 30), FVector(1100, -900, 30)};
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (const auto &P : Points)
        Path->AddSplinePoint(P, ESplineCoordinateSpace::Local, false);
    Path->SetClosedLoop(false, false);
    Path->UpdateSpline();
    ExclusionVisual->SetRelativeLocation(FVector(0, 0, 3));
    const float Extent = bLargeExclusion ? 650 : 250;
    ExclusionVisual->SetRelativeScale3D(FVector(Extent * .02, Extent * .02, .04));
}
// 【함수 역할】뒤의 처리에 필요한 객체·에셋·구성을 준비한다. 에디터 전용 구간과 런타임 구간이 나뉘는지, 기존 자료를 재사용하는지 함께 확인한다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabPCGActor::PrepareGraphs()
{
    auto *SourceScatter = Cast<UPCGGraph>(ScatterGraphAsset);
    auto *SourceSpline = Cast<UPCGGraph>(SplineGraphAsset);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!SourceScatter || !SourceSpline)
        return;
    RuntimeScatter = DuplicateObject<UPCGGraph>(SourceScatter, this);
    RuntimeSpline = DuplicateObject<UPCGGraph>(SourceSpline, this);
    RuntimeScatter->SetFlags(RF_Transient);
    RuntimeSpline->SetFlags(RF_Transient);
    const double Extent = bLargeExclusion ? 650 : 250;
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (UPCGNode *Node : RuntimeScatter->GetNodes())
    {
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (auto *Grid = Cast<UPCGCreatePointsGridSettings>(Node->GetSettings()))
            Grid->CellSize = FVector(bDense ? 300 : 400);
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (auto *Mask = Cast<UPCGCreatePointsSettings>(Node->GetSettings()))
            // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
            if (!Mask->PointsToCreate.IsEmpty())
            {
                Mask->PointsToCreate[0].BoundsMin = FVector(-Extent, -Extent, -500);
                Mask->PointsToCreate[0].BoundsMax = FVector(Extent, Extent, 500);
            }
    }
    Scatter->Seed = SplinePCG->Seed = Seed;
    Scatter->SetGraphLocal(RuntimeScatter);
    SplinePCG->SetGraphLocal(RuntimeSpline);
    Scatter->NotifyPropertiesChangedFromBlueprint();
    SplinePCG->NotifyPropertiesChangedFromBlueprint();
}
// 【함수 역할】액터가 게임 월드에서 실행을 시작할 때 엔진이 호출한다. 생성자에서 부품을 만든 뒤 실제 월드·플레이어·입력과 연결하는 초기 준비 단계다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabPCGActor::BeginPlay()
{
    // 부모 클래스의 기본 처리를 먼저/함께 실행한다. 자식 클래스의 추가 작업만으로 엔진 기본 동작을 대체하지 않는다.
    Super::BeginPlay();
    RuntimeScatter = nullptr;
    RuntimeSpline = nullptr;
    Stage = 0;
    Regenerate();
    // 【함수 역할】이후 작업에 사용할 객체나 값을 찾는다. 찾지 못했을 때 빈 참조가 반환될 수 있으므로 호출하는 쪽의 검사도 필요하다.
    // 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (auto *PC = UGameplayStatics::GetPlayerController(this, 0))
    {
        EnableInput(PC);
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (InspectionCamera)
            PC->SetViewTarget(InspectionCamera);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::One, IE_Pressed, this, &AFeatureLabPCGActor::ChangeSeed);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::Two, IE_Pressed, this, &AFeatureLabPCGActor::ToggleDensity);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::Three, IE_Pressed, this,
                                &AFeatureLabPCGActor::ToggleExclusion);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::Four, IE_Pressed, this, &AFeatureLabPCGActor::ToggleSpline);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::R, IE_Pressed, this,
                                &AFeatureLabPCGActor::ResetDistribution);
    }
}
// 【함수 역할】이름은 Regenerate이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabPCGActor::Regenerate()
{
    bPending = true;
    UpdatePath();
}
// 【함수 역할】이름은 ChangeSeed이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabPCGActor::ChangeSeed()
{
    Seed = Seed == 12026 ? 12027 : 12026;
    Regenerate();
}
// 【함수 역할】현재 선택 상태를 다음 상태로 바꾸고 결과에 반영한다. 켬·끔 전환인지 여러 선택지 순환인지 조건문을 따라 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabPCGActor::ToggleDensity()
{
    bDense = !bDense;
    Regenerate();
}
// 【함수 역할】현재 선택 상태를 다음 상태로 바꾸고 결과에 반영한다. 켬·끔 전환인지 여러 선택지 순환인지 조건문을 따라 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabPCGActor::ToggleExclusion()
{
    bLargeExclusion = !bLargeExclusion;
    Regenerate();
}
// 【함수 역할】현재 선택 상태를 다음 상태로 바꾸고 결과에 반영한다. 켬·끔 전환인지 여러 선택지 순환인지 조건문을 따라 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabPCGActor::ToggleSpline()
{
    bBent = !bBent;
    Regenerate();
}
// 【함수 역할】실험 상태를 코드에 적힌 기준값으로 되돌린다. 위치·속도·재생 시간·물리 상태 중 무엇을 복구하는지 아래 대입과 호출을 확인한다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabPCGActor::ResetDistribution()
{
    Seed = 12026;
    bDense = bLargeExclusion = bBent = false;
    ++ResetCount;
    Regenerate();
}
// 【함수 역할】매 갱신 시점에 상태를 확인하고 동작을 진행한다. DeltaSeconds는 이번 갱신까지 지난 시간이며, 함수가 1초에 정확히 60번 불린다고 가정하지 않는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabPCGActor::Tick(float Dt)
{
    // 부모 클래스의 기본 처리를 먼저/함께 실행한다. 자식 클래스의 추가 작업만으로 엔진 기본 동작을 대체하지 않는다.
    Super::Tick(Dt);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!ScatterGraphAsset || !SplineGraphAsset)
        return;
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!RuntimeScatter && Stage == 0)
        bPending = true;
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (Stage == 0 && bPending && !Scatter->IsGenerating() && !SplinePCG->IsGenerating())
    {
        bPending = false;
        Scatter->Cleanup(true);
        SplinePCG->Cleanup(true);
        Stage = 1;
    }
    else if (Stage == 1 && !Scatter->IsCleaningUp() && !SplinePCG->IsCleaningUp())
    {
        PrepareGraphs();
        Scatter->Generate(true);
        SplinePCG->Generate(true);
        Stage = 2;
    }
    else if (Stage == 2 && !Scatter->IsGenerating() && !SplinePCG->IsGenerating())
    {
        ++Generation;
        Stage = 0;
    }
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (HasActorBegunPlay() && GEngine)
        GEngine->AddOnScreenDebugMessage(
            7100, 0, FColor::Cyan,
            FString::Printf(
                TEXT(
                    "10 | PCG | 1 seed %d | 2 density %s | 3 exclusion %s | 4 spline %s | R reset | generation %d %s"),
                Seed, bDense ? TEXT("DENSE") : TEXT("NORMAL"),
                bLargeExclusion ? TEXT("LARGE") : TEXT("SMALL"),
                bBent ? TEXT("BENT") : TEXT("STRAIGHT"), Generation,
                Stage ? TEXT("BUILDING") : TEXT("READY")));
}
// 【함수 역할】현재 객체와 실행 결과를 읽어 검증용 자료로 반환한다. 결과를 만드는 함수와 결과를 측정하는 함수를 구분해서 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
FString AFeatureLabPCGActor::CaptureDistribution()
{
    auto O = MakeShared<FJsonObject>();
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("seed"), Seed);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetBoolField(TEXT("dense"), bDense);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("exclusion_extent"), bLargeExclusion ? 650 : 250);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetBoolField(TEXT("spline_bent"), bBent);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("spline_length"), Path->GetSplineLength());
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("generation"), Generation);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("reset_count"), ResetCount);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("stage"), Stage);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetBoolField(TEXT("pending"), bPending);
    O->SetObjectField(TEXT("scatter"), CapturePCGComponent(Scatter));
    O->SetObjectField(TEXT("spline"), CapturePCGComponent(SplinePCG));
    FString S;
    auto W = TJsonWriterFactory<>::Create(&S);
    FJsonSerializer::Serialize(O, W);
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return S;
}
```

<a id="source-source-mutablesample-featurelabpcg-h"></a>

### FeatureLabPCG.h

```cpp
// 파일 역할: 10번 시드·밀도·제외 영역·스플라인 변경과 재생성
// 클래스=작업 종류, 객체=실제 한 개, 포인터(* 또는 TObjectPtr)=다른 객체를 가리키는 참조.
// nullptr은 대상 없음, bool은 참/거짓, TArray는 순서 있는 목록, FString은 문자열이다.
// WITH_EDITOR 구간은 에디터 빌드에서만 사용하는 코드다. 원본과의 토큰 비교 결과는 code-validation.json에 기록한다.

#pragma once
#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "FeatureLabPCG.generated.h"
class UPCGComponent;
class UPCGGraph;
class USplineComponent;
class UBoxComponent;
class UStaticMeshComponent;
// 아래 클래스 또는 구조체를 언리얼이 인식하도록 선언한다. 일반 C++ 선언에 엔진 등록 정보를 덧붙인 것이다.
UCLASS()
class MUTABLESAMPLE_API AFeatureLabPCGActor : public AActor
{
    // 언리얼 헤더 도구가 필요한 보조 코드를 연결하는 매크로다. 함수 본문을 직접 작성하는 자리가 아니다.
    GENERATED_BODY()
  public:
    AFeatureLabPCGActor();
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TObjectPtr<UObject> ScatterGraphAsset;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TObjectPtr<UObject> SplineGraphAsset;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TObjectPtr<AActor> InspectionCamera;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab")
    TObjectPtr<UPCGComponent> Scatter;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab")
    TObjectPtr<UPCGComponent> SplinePCG;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab")
    TObjectPtr<USplineComponent> Path;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab")
    TObjectPtr<UStaticMeshComponent> ExclusionVisual;
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, CallInEditor, Category = "FeatureLab") void ChangeSeed();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, CallInEditor, Category = "FeatureLab") void ToggleDensity();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, CallInEditor, Category = "FeatureLab") void ToggleExclusion();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, CallInEditor, Category = "FeatureLab") void ToggleSpline();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, CallInEditor, Category = "FeatureLab") void ResetDistribution();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, CallInEditor, Category = "FeatureLab") void Regenerate();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") FString CaptureDistribution();
    virtual void Tick(float DeltaSeconds) override;
    virtual bool ShouldTickIfViewportsOnly() const override
    {
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return true;
    }

  protected:
    virtual void BeginPlay() override;

  private:
    void PrepareGraphs();
    void UpdatePath();
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(Transient, DuplicateTransient) TObjectPtr<UPCGGraph> RuntimeScatter;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(Transient, DuplicateTransient) TObjectPtr<UPCGGraph> RuntimeSpline;
    int32 Stage = 0, Generation = 0, ResetCount = 0;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, Category = "FeatureLab") int32 Seed = 12026;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, Category = "FeatureLab") bool bDense = false;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, Category = "FeatureLab") bool bLargeExclusion = false;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, Category = "FeatureLab") bool bBent = false;
    bool bPending = false;
};
```
