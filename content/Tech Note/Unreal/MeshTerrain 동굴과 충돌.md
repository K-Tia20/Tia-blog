

일반적인 높이맵 지형은 한 지점의 높이를 정하는 방식이라 천장 아래로 통과하는 동굴이나 돌출부를 다루기 까다롭다. 이번에는 Mesh Terrain의 실제 메시 구역을 만들어 동굴과 돌출부, 보행 충돌과 PCG 연결을 확인했다.

Mesh Terrain은 편집기 미리보기와 게임 실행용 구역을 구분한다. 이번 작업에서 가장 크게 걸린 부분도 이 차이였다. 에디터에 보이던 지형이 패키지에서는 사라졌기 때문이다.

![동굴과 돌출 지형 전체](Tech%20Note/Unreal/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/11/result.png)

## 올바른 맵부터 열기

1. `Content → FeatureLab → Maps → FL_11_MeshTerrain_WP`를 연다.
2. `_WP`는 이 실험에서 World Partition을 사용하는 맵을 구분한 이름이다. World Partition은 큰 월드를 구역으로 나눠 관리하는 방식이다.
3. **▶ Play** 후 **W**로 앞으로 걷고 **S**로 돌아온다. 이 실험은 누르고 있는 동안만 이동하는 일반 WASD 방식과 다르게 걷기 요청을 시작한다.
4. **P**로 정지하고 **C**로 전체·동굴·따라가기 시점을 바꾼다.
5. **R**로 입구의 기준 위치로 복귀한다.
6. 지형을 편집하려면 **■ Stop**을 누른다.

![동굴 내부 확인](Tech%20Note/Unreal/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/11/cave.png)

## 제작 자료와 장면의 역할

`Content → FeatureLab → Terrain → MPD_LabTerrain`을 연다. MPD는 Mesh Partition Definition으로, 지형을 어떤 규칙과 처리 과정으로 만들지 정하는 자료다. 이 파일 자체가 게임에서 걷는 캐릭터는 아니다.

![지형 정의 파일 위치](Tech%20Note/Unreal/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/11/folder.png)

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
| `Mesh Partition Definition` | 메시 지형의 재질·충돌·컴파일 설정을 담은 기술 자료. |
| `Mesh Terrain` | 메시 기반의 입체 지형 기능. |
| `World Partition` | 넓은 월드를 구역으로 나눠 관리하는 시스템. |
| `Material / Physical Material` | 표면을 그리는 재질 / 물리 표면 특성 재질. |
| `Channel Texel Size` | 채널 텍스처의 텍셀 크기 설정. 사진의 값은 100.0이다. |
| `Compiled Section Build Variants` | 실행용 구역을 컴파일할 때 사용할 설정 묶음. |
| `High / Low Render` | 가까운 고상세 / 먼 저상세 렌더 구역. |
| `Gameplay` | 공통 게임플레이·충돌 용도 구역. |
| `Build Mesh Partitions` | 실제 메시 지형 구역을 생성·갱신하는 빌드 명령. |
| `Collision / Precision` | 충돌 계산 / 지형 계산의 정밀도. |
| `MPD_LabTerrain` | 이번 지형용 Mesh Partition Definition 파일 이름. |


![Mesh Partition Definition의 설정](Tech%20Note/Unreal/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/11/settings.png)

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
| `Mesh Partition Definition` | 메시 지형의 재질·충돌·컴파일 설정을 담은 기술 자료. |
| `Mesh Terrain` | 메시 기반의 입체 지형 기능. |
| `World Partition` | 넓은 월드를 구역으로 나눠 관리하는 시스템. |
| `Material / Physical Material` | 표면을 그리는 재질 / 물리 표면 특성 재질. |
| `Channel Texel Size` | 채널 텍스처의 텍셀 크기 설정. 사진의 값은 100.0이다. |
| `Compiled Section Build Variants` | 실행용 구역을 컴파일할 때 사용할 설정 묶음. |
| `High / Low Render` | 가까운 고상세 / 먼 저상세 렌더 구역. |
| `Gameplay` | 공통 게임플레이·충돌 용도 구역. |
| `Build Mesh Partitions` | 실제 메시 지형 구역을 생성·갱신하는 빌드 명령. |
| `Collision / Precision` | 충돌 계산 / 지형 계산의 정밀도. |
| `MPD_LabTerrain` | 이번 지형용 Mesh Partition Definition 파일 이름. |


이번 지형은 닫힌 형태의 동굴과 돌출부를 구성하고, 모디파이어를 바꿔 재생성하는 방식으로 제작했다. 모디파이어는 원본을 바꾸는 효과를 쌓는 작업 단위다. 바꾸고 되돌릴 수 있도록 기준 상태도 따로 남겼다.

## 모양 다음에 충돌을 확인했다

화면에 바닥이 보이는 것과 캐릭터가 밟을 수 있는 바닥인 것은 다르다. 바닥·천장·벽의 충돌을 먼저 확인한 뒤 실제 캐릭터로 통과했다. 입력 표면의 방향이 잘못되거나 구역의 경계 범위가 부족하면 재생성·충돌 결과가 잘못될 수 있어 함께 수정했다.

충돌 처리 파이프라인에는 1cm 정밀도 설정을 사용했다. 캐릭터 이동은 별도 워커를 만들어 전진·후진·정지·초기화를 확인했다. ‘선 검사에 맞았다’는 결과만으로 보행까지 완료했다고 처리하지 않았다.

## 지형 위 PCG 배치도 같이 갱신하기

지형 표면을 읽어 녹색 표지를 놓는 `PCG_LabTerrainSurface`를 연결했다. 지형을 바꾸면 이전 표면에 놓인 표지가 공중에 남거나 땅속으로 들어갈 수 있다. 그래서 새 지형 표면이 준비된 뒤 PCG를 갱신했다.

기록에서는 104개→100개→104개로 배치 수가 바뀌었고, 기준 복귀 때 전체 위치도 비교했다. 실행 중에는 실제 컴파일된 지형 표면에 대한 참조와 자동 갱신 1회를 확인했다. 이번 조건의 표면 높이 오차는 0cm였다.

## 패키지에 지형이 없었던 이유

편집기의 **Preview Sections**는 편집용 미리보기다. 게임에서는 **Compiled Sections**가 필요하다. 앞의 에디터 화면만 보고 패키징을 진행했을 때 이 구분이 빠져 실행본에서 지형이 표시되지 않았다.

에디터에서는 상단 **Build → Build Mesh Partitions**로 컴파일 구역을 만든다. 이번 최종 제작에서는 `WorldPartitionMeshPartitionBuilder` 명령을 사용해 충돌용 1개, 렌더용 2개 구역을 만들었다. 그 뒤 다시 굽고 실행본에서 동굴 표시, 보행, 시점과 R 복귀를 재검사했다.

지형을 수정한 다음에도 이 빌드를 갱신해야 패키지에 반영된다. 메뉴의 Save와 구역 Build는 다른 작업이다.

## 맵을 다시 열었는데 영역이 안 보인다면

World Partition 영역이 에디터에 로드됐는지 먼저 확인한다. 이번 실험용 `lab_load_meshterrain_wp.py`는 필요한 영역을 불러오는 데 사용했다. 보이지 않는다고 지형을 새로 만들거나 기존 액터를 지우지 않는다.

전체 구현: [FeatureLabTerrain.cpp](#source-source-mutablesample-featurelabterrain-cpp), [헤더](#source-source-mutablesample-featurelabterrain-h). 장면 작성: [lab_build_meshterrain_scene.py](#source-lab-lab-build-meshterrain-scene-py). PCG 연결: [lab_build_meshterrain_pcg.py](#source-lab-lab-build-meshterrain-pcg-py).

공식 설명: [Mesh Terrain](https://dev.epicgames.com/documentation/unreal-engine/mesh-terrain-in-unreal-engine), [컴파일 구역 만들기](https://dev.epicgames.com/documentation/unreal-engine/crafting-mesh-terrain-in-unreal-engine).

<!-- korean-ui-explanations -->


사진의 나머지 설정은 `Material Cache Texel Size`가 재질 캐시의 텍셀 크기(0.25), `Channel UV Layout Method`가 채널 표면 좌표를 만드는 방식, `Reference Box Projection`이 기준 박스 투영 방식이라는 뜻이다. `Channel Descs`는 채널 설명 목록(4개), `Modifier Layer Priorities`는 수정 레이어 우선순위 목록(0개), `Preview Section Build Variant`는 미리 볼 컴파일 구역 선택이다. `3 Array elements`는 배열에 항목이 3개라는 표시이며, 그중 렌더 구역 수는 본문에서 따로 구분했다.


<a id="code-index"></a>

## 이 장면을 만든 코드

아래는 제작과 검증에 사용한 전체 코드에 한국어 주석을 더한 설명본이다. `.py`는 언리얼 에디터에서 실행하는 제작·검사 코드, `.cpp`와 `.h`는 프로젝트에 넣어 빌드하는 코드다. 파일마다 첫 주석에 역할과 입력 조건을 적었다.


<a id="source-lab-lab-build-meshterrain-pcg-py"></a>

### lab_build_meshterrain_pcg.py

```python
# 파일 역할: 에셋·그래프·장면을 구성하는 제작 작업. 이미 있는 원본을 대상으로 재실행해도 되는지 가드 조건부터 읽는다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Terrain

import json, traceback
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
# 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다. 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
try:
    assert root.name == "EpicFeatureLab"
    lib = unreal.EditorAssetLibrary
    tools = unreal.AssetToolsHelpers.get_asset_tools()
    folder = "/Game/FeatureLab/Terrain"
    lib.make_directory(folder)
    graph = lib.load_asset(folder + "/PCG_LabTerrainSurface")
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not graph 지정한 경로·이름·종류로 새 에셋을 만든다. 같은 이름의 원본이 있는지 검사하는 코드와 함께 읽는다.
    if not graph:
        # 지정한 경로·이름·종류로 새 에셋을 만든다. 같은 이름의 원본이 있는지 검사하는 코드와 함께 읽는다.
        graph = tools.create_asset(
            "PCG_LabTerrainSurface", folder, unreal.PCGGraph, unreal.PCGGraphFactory()
        )
    for node in list(graph.get_editor_property("nodes")):
        graph.remove_node(node)
    grid_node, grid = graph.add_node_of_type(unreal.PCGCreatePointsGridSettings)
    # 여러 속성을 이름:값 사전으로 한 번에 설정한다. 각 항목이 개별 설정과 대응한다.
    grid.set_editor_properties(
        {
            "grid_extents": unreal.Vector(1500, 1900, 0),
            "cell_size": unreal.Vector(300, 300, 300),
            "cull_points_outside_volume": False,
        }
    )
    ray_node, ray = graph.add_node_of_type(unreal.PCGWorldRayHitSettings)
    query = ray.get_editor_property("query_params")
    # UE 5.8 World Ray Hit performs an object-type sweep, rather than a trace-channel sweep.
    channel = unreal.CollisionChannel.ECC_WORLD_STATIC
    # 여러 속성을 이름:값 사전으로 한 번에 설정한다. 각 항목이 개별 설정과 대응한다.
    query.set_editor_properties(
        {
            "collision_channel": channel,
            "trace_complex": True,
            "override_default_params": True,
            "ray_origin": unreal.Vector(0, 0, 1400),
            "ray_direction": unreal.Vector(0, 0, -1),
            "ray_length": 2500.0,
            "get_reference_to_actor_hit": True,
            "get_impact_point": True,
        }
    )
    ray.set_editor_property("query_params", query)
    project_node, project = graph.add_node_of_type(unreal.PCGProjectionSettings)
    project.set_editor_property("force_collapse_to_point", True)
    project.set_editor_property("keep_zero_density_points", False)
    params = project.get_editor_property("projection_params")
    params.set_editor_property("project_rotations", False)
    project.set_editor_property("projection_params", params)
    offset_node, offset = graph.add_node_of_type(unreal.PCGTransformPointsSettings)
    # 여러 속성을 이름:값 사전으로 한 번에 설정한다. 각 항목이 개별 설정과 대응한다.
    offset.set_editor_properties(
        {
            "offset_min": unreal.Vector(0, 0, 7.5),
            "offset_max": unreal.Vector(0, 0, 7.5),
            "scale_min": unreal.Vector(0.5, 0.5, 0.15),
            "scale_max": unreal.Vector(0.5, 0.5, 0.15),
            "uniform_scale": False,
        }
    )
    spawn_node, spawn = graph.add_node_of_type(unreal.PCGStaticMeshSpawnerSettings)
    spawn.set_editor_property("mesh_selector_type", unreal.PCGMeshSelectorWeighted)
    descriptor = unreal.PCGSoftISMComponentDescriptor()
    descriptor.set_editor_property("static_mesh", lib.load_asset("/Engine/BasicShapes/Cube"))
    material = lib.load_asset(folder + "/M_FL11_SurfaceMarker")
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not material 지정한 경로·이름·종류로 새 에셋을 만든다. 같은 이름의 원본이 있는지 검사하는 코드와 함께 읽는다.
    if not material:
        # 지정한 경로·이름·종류로 새 에셋을 만든다. 같은 이름의 원본이 있는지 검사하는 코드와 함께 읽는다.
        material = tools.create_asset(
            "M_FL11_SurfaceMarker", folder, unreal.Material, unreal.MaterialFactoryNew()
        )
        color = unreal.MaterialEditingLibrary.create_material_expression(
            material, unreal.MaterialExpressionConstant3Vector, -200, 0
        )
        color.set_editor_property("constant", unreal.LinearColor(r=0.015, g=0.45, b=0.14, a=1))
        unreal.MaterialEditingLibrary.connect_material_property(
            color, "", unreal.MaterialProperty.MP_BASE_COLOR
        )
        unreal.MaterialEditingLibrary.recompile_material(material)
    descriptor.set_editor_property("override_materials", [material])
    entry = unreal.PCGMeshSelectorWeightedEntry()
    entry.set_editor_properties({"descriptor": descriptor, "weight": 1})
    spawn.get_editor_property("mesh_selector_parameters").set_editor_property(
        "mesh_entries", [entry]
    )
    terrain_node, _ = graph.add_node_of_type(unreal.PCGGetMeshTerrainSectionSettings)
    section_actor_node, _ = graph.add_node_of_type(unreal.PCGGetMeshTerrainSectionActorSettings)
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 (a, p, b, q)의 값이 매번 바뀐다.
    for a, p, b, q in [
        (grid_node, "Out", project_node, "In"),
        (ray_node, "Out", project_node, "Projection Target"),
        (project_node, "Out", offset_node, "In"),
        (offset_node, "Out", spawn_node, "In"),
        (spawn_node, "Out", graph.get_output_node(), "Out"),
        (terrain_node, "Out", section_actor_node, "In"),
        (section_actor_node, "Out", graph.get_output_node(), "Out"),
    ]:
        # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
        assert graph.add_edge(a, p, b, q), (p, q)
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 actor의 값이 매번 바뀐다. 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
    for actor in unreal.get_editor_subsystem(
        unreal.EditorActorSubsystem
    ).get_all_level_actors():
        if actor.get_actor_label() == "FL11_OutsideGround":
            actor.static_mesh_component.set_collision_profile_name("BlockAllDynamic")
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 (index, node)의 값이 매번 바뀐다. 반복할 항목과 0부터 시작하는 순번을 함께 꺼낸다.
    for index, node in enumerate([grid_node, project_node, offset_node, spawn_node]):
        node.set_node_position(index * 330, 0)
    ray_node.set_node_position(0, 250)
    terrain_node.set_node_position(330, 500)
    section_actor_node.set_node_position(660, 500)
    graph.get_output_node().set_node_position(1380, 0)
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
    assert lib.save_loaded_asset(material, False) and lib.save_loaded_asset(graph, False)
    component = unreal.FeatureLabRuntimeLibrary.create_lab_terrain_pcg(graph)
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert component
    # RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 nodes이다.
    RESULT = {
        "status": "generation_requested",
        "graph": graph.get_path_name(),
        "component": component.get_path_name(),
        "nodes": len(graph.get_editor_property("nodes")),
        "surface_filter": "WorldStatic object-type sweep targets Mesh Terrain; exterior lab ground uses WorldDynamic and retains walking collision",
        "interop": "Get Mesh Terrain Section -> Get Mesh Terrain Section Actor outputs actual section references",
    }
except Exception:
    RESULT = {"status": "failed", "error": traceback.format_exc()}
(root / "Evidence/case11-pcg-build.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-build-meshterrain-scene-py"></a>

### lab_build_meshterrain_scene.py

```python
# 파일 역할: 에셋·그래프·장면을 구성하는 제작 작업. 이미 있는 원본을 대상으로 재실행해도 되는지 가드 조건부터 읽는다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Maps/FL_11_MeshTerrain_WP
#   /Game/FeatureLab/Crowds/BP_LabCrowdGameMode
#   /Game/FeatureLab/Rigging/SKM_LabPuppet

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
    path = "/Game/FeatureLab/Maps/FL_11_MeshTerrain_WP"
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world().get_name() != 'FL_11_MeshTerrain_WP' 작업할 맵을 연다. 현재 맵과 다른 맵이므로 실행 중인 PIE를 먼저 끝내는지 확인한다.
    if (
        unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world().get_name()
        != "FL_11_MeshTerrain_WP"
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
        item.tags = ["FeatureLab_Owned", "FeatureLab_11"]
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
    floor = actor(unreal.StaticMeshActor, "FL11_OutsideGround", (0, 0, -20))
    floor.static_mesh_component.set_static_mesh(lib.load_asset("/Engine/BasicShapes/Cube"))
    floor.set_actor_scale3d(unreal.Vector(55, 55, 0.2))
    sun = actor(unreal.DirectionalLight, "FL11_Sun", (0, 0, 1900))
    # 액터 방향을 바꾼다. 위치 이동과 구분한다.
    sun.set_actor_rotation(unreal.Rotator(pitch=-40, yaw=-35, roll=0), False)
    # 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 intensity이다.
    sun.get_component_by_class(unreal.DirectionalLightComponent).set_editor_property(
        "intensity", 3.5
    )
    sky = actor(unreal.SkyLight, "FL11_Sky", (0, 0, 1000))
    sky.get_component_by_class(unreal.SkyLightComponent).set_editor_property("intensity", 1.2)
    actor(unreal.SkyAtmosphere, "FL11_Atmosphere", (0, 0, 0))
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 (label, position, target)의 값이 매번 바뀐다. 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 current_focal_length이다.
    for label, position, target in [
        ("FL11_CameraOverview", (-2800, -3700, 2200), (0, 0, 200)),
        ("FL11_CameraCave", (400, -2250, 220), (400, 0, 160)),
    ]:
        camera = actor(unreal.CineCameraActor, label, position)
        look(camera, target)
        component = camera.get_cine_camera_component()
        component.set_editor_property("current_focal_length", 27.0)
        focus = component.get_editor_property("focus_settings")
        focus.set_editor_property("focus_method", unreal.CameraFocusMethod.DISABLE)
        component.set_editor_property("focus_settings", focus)
        component.set_editor_property("constrain_aspect_ratio", False)
    start = actor(unreal.PlayerStart, "FL11_EntryStart", (400, -2050, 100))
    look(start, (400, 0, 160))
    terrain = unreal.FeatureLabRuntimeLibrary.create_lab_mesh_terrain()
    assert terrain, "Mesh Terrain creation failed"
    definition = terrain.get_mesh_partition_definition()
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
    assert definition and lib.save_loaded_asset(definition, False)
    walker = actor(unreal.FeatureLabTerrainWalker, "FL11_CollisionWalker", (400, -1850, 90))
    # 여러 속성을 이름:값 사전으로 한 번에 설정한다. 각 항목이 개별 설정과 대응한다.
    walker.set_editor_properties(
        {
            "overview_camera": next(
                a
                for a in actors.get_all_level_actors()
                if a.get_actor_label() == "FL11_CameraOverview"
            ),
            "cave_camera": next(
                a
                for a in actors.get_all_level_actors()
                if a.get_actor_label() == "FL11_CameraCave"
            ),
        }
    )
    # 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
    walker.get_component_by_class(unreal.SkeletalMeshComponent).set_skeletal_mesh_asset(
        lib.load_asset("/Game/FeatureLab/Rigging/SKM_LabPuppet")
    )
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert editor.save_current_level()
    # RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
    RESULT = {
        "status": "mesh_terrain_build_requested",
        "map": path,
        "terrain": terrain.get_path_name(),
        "definition": definition.get_path_name(),
        "base": "Closed 41x41 top/bottom terrain grid, sloped entrance and rolling upper surface",
        "modifiers": "Spherical subtract tunnel and union overhang slab",
        "preservation": "No scan or mocap sources used",
    }
except Exception:
    RESULT = {"status": "failed", "error": traceback.format_exc()}
(root / "Evidence/case11-scene-build.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-capture-meshterrain-py"></a>

### lab_capture_meshterrain.py

```python
# 파일 역할: EpicFeatureLab의 lab_capture_meshterrain 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert world
walker = next(
    a for a in unreal.ObjectIterator(unreal.FeatureLabTerrainWalker) if a.get_world() == world
)
state = __import__("json").loads(walker.capture_movement())
label = "overview" if state["view"] == 0 else "cave"
output = Path(unreal.Paths.project_dir()) / ("Evidence/case11-meshterrain-" + label + ".png")
unreal.AutomationLibrary.take_high_res_screenshot(1280, 720, str(output))
RESULT = {"capture_requested": str(output)}
```

<a id="source-lab-lab-configure-meshterrain-collision-py"></a>

### lab_configure_meshterrain_collision.py

```python
# 파일 역할: EpicFeatureLab의 lab_configure_meshterrain_collision 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Terrain/TP_LabGameplayPrecision
#   /Game/FeatureLab/Terrain/MPD_LabTerrain

import json, traceback
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

# 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다.
try:
    lib = unreal.EditorAssetLibrary
    destination = "/Game/FeatureLab/Terrain/TP_LabGameplayPrecision"
    source = "/MeshPartition/DataAssets/TP_DefaultCommonGameplayData"
    # 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
    pipeline = lib.load_asset(destination) or lib.duplicate_asset(source, destination)
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert pipeline
    transformers = list(pipeline.get_editor_property("transformers"))
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert len(transformers) == 1
    before = transformers[0].export_text()
    after = (
        before.replace("ErrorTolerance=20.000000", "ErrorTolerance=1.000000")
        .replace("bScaleAccuracyViaNormal=True", "bScaleAccuracyViaNormal=False")
        .replace(
            "MaterialBoundaryDistanceTolerance=50.000000",
            "MaterialBoundaryDistanceTolerance=2.000000",
        )
        .replace(
            "MaterialBoundaryCutSnapTolerance=10.000000",
            "MaterialBoundaryCutSnapTolerance=1.000000",
        )
    )
    assert "ErrorTolerance=1.000000" in after and "bScaleAccuracyViaNormal=False" in after
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert transformers[0].import_text(after)
    pipeline.set_editor_property("transformers", transformers)
    definition = lib.load_asset("/Game/FeatureLab/Terrain/MPD_LabTerrain")
    variants = list(definition.get_editor_property("compiled_section_build_variants"))
    # changed에 기준값 0을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
    changed = 0
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 variant의 값이 매번 바뀐다. 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 transformer_pipeline이다.
    for variant in variants:
        if str(variant.get_editor_property("name")) == "Common_GameplayData":
            variant.set_editor_property("transformer_pipeline", pipeline)
            changed += 1
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert changed == 1
    definition.set_editor_property("compiled_section_build_variants", variants)
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
    assert lib.save_loaded_asset(pipeline, False) and lib.save_loaded_asset(definition, False)
    # RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 transformers이다.
    RESULT = {
        "status": "configured",
        "owned_pipeline": pipeline.get_path_name(),
        "source_pipeline_preserved": source,
        "before": before,
        "after": pipeline.get_editor_property("transformers")[0].export_text(),
        "collision_error_tolerance_cm": 1.0,
        "normal_based_accuracy_reduction": False,
        "reason": "Small traversal lab retains cave clearance; default gameplay collision allows 20cm error with additional normal-based scaling",
    }
except Exception:
    RESULT = {"status": "failed", "error": traceback.format_exc()}
# 문자열을 파일에 기록한다. 결과 JSON이나 보고서인지, 실제 코드·설정 파일인지 경로를 확인한다.
(
    Path(unreal.Paths.project_dir()) / "Evidence/case11-collision-precision-settings.json"
).write_text(json.dumps(RESULT, indent=2), encoding="utf-8")
```

<a id="source-lab-lab-diagnose-meshterrain-py"></a>

### lab_diagnose_meshterrain.py

```python
# 파일 역할: EpicFeatureLab의 lab_diagnose_meshterrain 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, unreal
from pathlib import Path

# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 편집 중인 월드를 얻는다. 게임 실행 월드와 다르므로 대상을 혼동하지 않는다.
world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world()
rows = []
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 actor의 값이 매번 바뀐다. 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
for actor in unreal.ObjectIterator(unreal.Actor):
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: 'PreviewSection' not in unreal.Object.get_class(actor).get_name() or actor.get_world() != world
    if (
        "PreviewSection" not in unreal.Object.get_class(actor).get_name()
        or actor.get_world() != world
    ):
        continue
    row = {
        "actor": actor.get_path_name(),
        "bounds": str(actor.get_actor_bounds(False)),
        "components": [],
    }
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 comp의 값이 매번 바뀐다. 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    for comp in actor.get_components_by_class(unreal.PrimitiveComponent):
        info = {
            "class": comp.get_class().get_name(),
            "bounds": (
                str(comp.get_local_bounds()) if hasattr(comp, "get_local_bounds") else None
            ),
            "collision": str(comp.get_collision_enabled()),
            "profile": str(comp.get_collision_profile_name()),
        }
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: isinstance(comp, unreal.StaticMeshComponent)
        if isinstance(comp, unreal.StaticMeshComponent):
            mesh = comp.static_mesh
            info.update(mesh=mesh.get_path_name() if mesh else None)
        row["components"].append(info)
    # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    rows.append(row)
# 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
terrain = next(
    a
    for a in unreal.get_editor_subsystem(unreal.EditorActorSubsystem).get_all_level_actors()
    if isinstance(a, unreal.MeshPartition)
)
definition = terrain.get_mesh_partition_definition()
modifiers = []
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 item의 값이 매번 바뀐다. 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
for item in unreal.get_editor_subsystem(unreal.EditorActorSubsystem).get_all_level_actors():
    if item.get_actor_label() not in ["FL11_CaveTool", "FL11_OverhangTool"]:
        continue
    comp = item.get_editor_property("modifier")
    row = {
        "actor": item.get_actor_label(),
        "scale": str(item.get_actor_scale3d()),
        "transform": str(comp.get_world_transform()),
    }
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 prop의 값이 매번 바뀐다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다.
    for prop in [
        "boolean_op",
        "base_growth",
        "static_mesh",
        "mesh_source_mode",
        "serialized_disabled",
        "transient_editor_only_disabled",
    ]:
        # 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다.
        try:
            # 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다.
            row[prop] = str(comp.get_editor_property(prop))
        except Exception as e:
            row[prop] = str(e)
    # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    modifiers.append(row)
hits = {}
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 (label, start, end)의 값이 매번 바뀐다.
for label, start, end in [
    ("cave", (400, -1900, 160), (400, 1900, 160)),
    ("solid", (-800, -1900, 160), (-800, 1900, 160)),
    ("overhang", (900, -1850, 1800), (900, -1850, -400)),
]:
    hit = unreal.SystemLibrary.line_trace_single(
        world,
        unreal.Vector(*start),
        unreal.Vector(*end),
        unreal.TraceTypeQuery.TRACE_TYPE_QUERY1,
        True,
        [],
        unreal.DrawDebugTrace.NONE,
    )
    hits[label] = {"hit": hit is not None, "values": str(hit.to_tuple()) if hit else None}
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 material이다.
RESULT = {
    "sections": rows,
    "modifiers": modifiers,
    "hits": hits,
    "definition_material": str(definition.get_editor_property("material")),
    "preview_variant": str(definition.get_editor_property("preview_section_build_variant")),
}
unreal.EditorLevelLibrary.set_level_viewport_camera_info(
    unreal.Vector(-2800, -3700, 2200),
    unreal.MathLibrary.find_look_at_rotation(
        unreal.Vector(-2800, -3700, 2200), unreal.Vector(0, 0, 200)
    ),
)
(Path(unreal.Paths.project_dir()) / "Evidence/case11-geometry-diagnosis.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-inspect-meshterrain-pcg-py"></a>

### lab_inspect_meshterrain_pcg.py

```python
# 파일 역할: 현재 에셋·객체·실행 상태를 읽어 기록하는 관찰 작업.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, unreal
from pathlib import Path

# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
world = (
    unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
    or unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world()
)
emitter = next(
    a
    for a in unreal.ObjectIterator(unreal.Actor)
    if a.get_world() == world and a.get_actor_label() == "FL11_TerrainPCG"
)
component = emitter.get_component_by_class(unreal.PCGComponent)
rows = []
for item in component.get_generated_graph_output().get_editor_property("tagged_data"):
    data = item.get_editor_property("data").get_editor_property("data")
    row = {"class": data.get_class().get_name(), "pin": str(item.get_editor_property("pin"))}
    if hasattr(data, "get_num_points"):
        row["point_count"] = data.get_num_points()
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: isinstance(data, unreal.PCGParamData)
    if isinstance(data, unreal.PCGParamData):
        metadata = data.const_metadata()
        names, types = metadata.get_attributes()
        row["attributes"] = [str(n) for n in names]
        row["items"] = metadata.get_item_count_for_child()
        row["soft_references"] = {}
        # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 (name, kind)의 값이 매번 바뀐다. 여러 목록의 같은 위치 항목을 묶어 순서대로 비교한다.
        for name, kind in zip(names, types):
            if "SOFT_OBJECT_PATH" in str(kind):
                row["soft_references"][str(name)] = [
                    unreal.PCGMetadataAccessorHelpers.get_soft_object_path_attribute_by_metadata_key(
                        index, metadata, name
                    ).export_text()
                    for index in range(row["items"])
                ]
    # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    rows.append(row)
placements = []
inventory = []
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 mesh의 값이 매번 바뀐다. 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
for mesh in unreal.ObjectIterator(unreal.InstancedStaticMeshComponent):
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: mesh.get_world() != world or not mesh.get_instance_count()
    if mesh.get_world() != world or not mesh.get_instance_count():
        continue
    # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    inventory.append(
        {
            "component": mesh.get_path_name(),
            "owner": mesh.get_owner().get_actor_label(),
            "instances": mesh.get_instance_count(),
        }
    )
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 index의 값이 매번 바뀐다. 반복에 쓸 정수 순서를 만든다. 끝 값은 포함되지 않는다.
    for index in range(mesh.get_instance_count()):
        transform = mesh.get_instance_transform(index, True)
        p = transform.translation
        hit = unreal.SystemLibrary.line_trace_single(
            world,
            unreal.Vector(p.x, p.y, 1400),
            unreal.Vector(p.x, p.y, -400),
            unreal.TraceTypeQuery.TRACE_TYPE_QUERY1,
            True,
            [emitter],
            unreal.DrawDebugTrace.NONE,
        )
        values = hit.to_tuple() if hit else None
        # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
        placements.append(
            {
                "position": [p.x, p.y, p.z],
                "scale": list(transform.scale3d.to_tuple()),
                "surface_actor_class": (
                    values[9].get_class().get_name() if values and values[9] else None
                ),
                "surface_height": values[5].z if values else None,
                "height_error_cm": abs(p.z - 7.5 - values[5].z) if values else None,
            }
        )
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 generated이다.
RESULT = {
    "status": (
        "generating" if component.get_editor_property("generation_in_progress") else "generated"
    ),
    "world": world.get_path_name(),
    "generated": component.get_editor_property("generated"),
    "outputs": rows,
    "instance_inventory": inventory,
    "instance_count": len(placements),
    "placements": placements,
    "max_height_error_cm": max(
        (x["height_error_cm"] for x in placements if x["height_error_cm"] is not None),
        default=None,
    ),
}
(Path(unreal.Paths.project_dir()) / "Evidence/case11-pcg-live-state.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-inspect-meshterrain-pipeline-py"></a>

### lab_inspect_meshterrain_pipeline.py

```python
# 파일 역할: 현재 에셋·객체·실행 상태를 읽어 기록하는 관찰 작업.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, unreal
from pathlib import Path

# 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
pipeline = unreal.EditorAssetLibrary.load_asset(
    "/MeshPartition/DataAssets/TP_DefaultCommonGameplayData"
)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 transformers이다.
RESULT = {
    "pipeline": pipeline.get_path_name(),
    "transformers": [t.export_text() for t in pipeline.get_editor_property("transformers")],
}
# 문자열을 파일에 기록한다. 결과 JSON이나 보고서인지, 실제 코드·설정 파일인지 경로를 확인한다.
(
    Path(unreal.Paths.project_dir()) / "Evidence/case11-collision-pipeline-defaults.json"
).write_text(json.dumps(RESULT, indent=2), encoding="utf-8")
```

<a id="source-lab-lab-inspect-meshterrain-variants-py"></a>

### lab_inspect_meshterrain_variants.py

```python
# 파일 역할: 현재 에셋·객체·실행 상태를 읽어 기록하는 관찰 작업.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Terrain/MPD_LabTerrain

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, unreal
from pathlib import Path

definition = unreal.EditorAssetLibrary.load_asset("/Game/FeatureLab/Terrain/MPD_LabTerrain")
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 preview_section_build_variant이다.
RESULT = {
    "preview": definition.get_editor_property("preview_section_build_variant").export_text(),
    "compiled": [
        v.export_text()
        for v in definition.get_editor_property("compiled_section_build_variants")
    ],
}
(Path(unreal.Paths.project_dir()) / "Evidence/case11-build-variant-settings.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-load-meshterrain-wp-py"></a>

### lab_load_meshterrain_wp.py

```python
# 파일 역할: EpicFeatureLab의 lab_load_meshterrain_wp 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

import json, traceback
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

# 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다. 편집 중인 월드를 얻는다. 게임 실행 월드와 다르므로 대상을 혼동하지 않는다.
try:
    # world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 편집 중인 월드를 얻는다. 게임 실행 월드와 다르므로 대상을 혼동하지 않는다.
    world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world()
    assert world and world.get_name() == "FL_11_MeshTerrain_WP"
    descriptors = unreal.WorldPartitionBlueprintLibrary.get_actor_descs()
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert (
        descriptors
    ), "World Partition descriptors are required before testing Mesh Terrain runtime"
    guids = [item.get_editor_property("guid") for item in descriptors]
    unreal.WorldPartitionBlueprintLibrary.pin_actors(guids)
    unreal.WorldPartitionBlueprintLibrary.load_actors(guids)
    # 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
    actors = unreal.get_editor_subsystem(unreal.EditorActorSubsystem).get_all_level_actors()
    labels = [a.get_actor_label() for a in actors]
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 label의 값이 매번 바뀐다.
    for label in [
        "FL11_HeightfieldBase",
        "FL11_CaveTool",
        "FL11_OverhangTool",
        "FL11_CollisionWalker",
    ]:
        # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
        assert label in labels, label
    terrain = next(a for a in actors if isinstance(a, unreal.MeshPartition))
    # RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
    RESULT = {
        "status": "world_partition_sources_loaded",
        "map": world.get_path_name(),
        "actor_descriptors": len(descriptors),
        "loaded_actors": len(actors),
        "required_sources_present": True,
        "compiled_build_variants": len(
            terrain.get_mesh_partition_definition().get_editor_property(
                "compiled_section_build_variants"
            )
        ),
    }
except Exception:
    RESULT = {"status": "failed", "error": traceback.format_exc()}
(Path(unreal.Paths.project_dir()) / "Evidence/case11-worldpartition-readiness.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-peek-meshterrain-py"></a>

### lab_peek_meshterrain.py

```python
# 파일 역할: 현재 에셋·객체·실행 상태를 읽어 기록하는 관찰 작업.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

import json
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

# 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
terrain = next(
    a
    for a in unreal.get_editor_subsystem(unreal.EditorActorSubsystem).get_all_level_actors()
    if isinstance(a, unreal.MeshPartition) and "FeatureLab_11" in [str(t) for t in a.tags]
)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
RESULT = json.loads(unreal.FeatureLabRuntimeLibrary.inspect_lab_mesh_terrain(terrain))
(Path(unreal.Paths.project_dir()) / "Evidence/case11-live-state.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-probe-meshterrain-py"></a>

### lab_probe_meshterrain.py

```python
# 파일 역할: EpicFeatureLab의 lab_probe_meshterrain 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, unreal
from pathlib import Path

# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
world = (
    unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
    or unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world()
)
all_actors = list(unreal.ObjectIterator(unreal.Actor))
emitter = next(
    (
        a
        for a in all_actors
        if a.get_world() == world and a.get_actor_label() == "FL11_TerrainPCG"
    ),
    None,
)
ignore = [emitter] if emitter else []
ignore += [
    a
    for a in all_actors
    if a.get_world() == world and isinstance(a, unreal.FeatureLabTerrainWalker)
]


# 함수 pack: 이름은 pack이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: hit
def pack(hit):
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: hit is None
    if hit is None:
        return {"blocking": False}
    v = hit.to_tuple()
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return {
        "blocking": bool(v[0]),
        "initial_overlap": bool(v[1]),
        "distance": v[3],
        "impact": [v[5].x, v[5].y, v[5].z],
        "normal": [v[7].x, v[7].y, v[7].z],
        "actor": v[9].get_path_name() if v[9] else None,
        "component": v[10].get_class().get_name() if v[10] else None,
    }


# 함수 line: 이름은 line이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: start, end
def line(start, end):
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return pack(
        unreal.SystemLibrary.line_trace_single(
            world,
            unreal.Vector(*start),
            unreal.Vector(*end),
            unreal.TraceTypeQuery.TRACE_TYPE_QUERY1,
            True,
            ignore,
            unreal.DrawDebugTrace.NONE,
        )
    )


rays = {
    key: line(a, b)
    for key, a, b in [
        ("cave", (400, -1800, 160), (400, 1800, 160)),
        ("old_solid", (-400, -1800, 160), (-400, 1800, 160)),
        ("solid", (-800, -1800, 160), (-800, 1800, 160)),
        ("floor", (400, 0, 160), (400, 0, -300)),
        ("ceiling", (400, 0, 160), (400, 0, 800)),
        ("overhang", (900, -1850, 1800), (900, -1850, -400)),
    ]
}
capsule = pack(
    unreal.SystemLibrary.capsule_trace_single(
        world,
        unreal.Vector(400, -1800, 160),
        unreal.Vector(400, 1800, 160),
        34,
        88,
        unreal.TraceTypeQuery.TRACE_TYPE_QUERY1,
        True,
        ignore,
        unreal.DrawDebugTrace.NONE,
    )
)
RESULT = {"world": world.get_path_name(), "rays": rays, "cave_capsule_sweep": capsule}
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world() 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
if not unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world():
    terrain = next(
        a for a in all_actors if a.get_world() == world and isinstance(a, unreal.MeshPartition)
    )
    RESULT["terrain"] = json.loads(
        unreal.FeatureLabRuntimeLibrary.inspect_lab_mesh_terrain(terrain)
    )
(Path(unreal.Paths.project_dir()) / "Evidence/case11-physics-probe.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-refresh-meshterrain-runtime-pcg-py"></a>

### lab_refresh_meshterrain_runtime_pcg.py

```python
# 파일 역할: EpicFeatureLab의 lab_refresh_meshterrain_runtime_pcg 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
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
emitter = next(
    a
    for a in unreal.ObjectIterator(unreal.Actor)
    if a.get_world() == world and a.get_actor_label() == "FL11_TerrainPCG"
)
component = emitter.get_component_by_class(unreal.PCGComponent)
component.generate_local(True)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "status": "runtime_regeneration_requested",
    "world": world.get_path_name(),
    "component": component.get_path_name(),
}
(Path(unreal.Paths.project_dir()) / "Evidence/case11-runtime-pcg-refresh.json").write_text(
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

<a id="source-lab-lab-save-meshterrain-baseline-py"></a>

### lab_save_meshterrain_baseline.py

```python
# 파일 역할: EpicFeatureLab의 lab_save_meshterrain_baseline 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, runpy, unreal
from pathlib import Path

root = Path(unreal.Paths.project_dir()).resolve()
physics = runpy.run_path(str(root / "Scripts/Lab/lab_probe_meshterrain.py"))["RESULT"]
pcg = runpy.run_path(str(root / "Scripts/Lab/lab_inspect_meshterrain_pcg.py"))["RESULT"]
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
assert not unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 차이의 부호를 없애 크기만 비교한다. 오차 허용 범위 검사에 자주 사용한다.
assert (
    abs(physics["rays"]["overhang"]["impact"][2] - 550) < 0.1
    and not physics["cave_capsule_sweep"]["blocking"]
)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert (
    pcg["status"] == "generated"
    and pcg["instance_count"] == 104
    and pcg["max_height_error_cm"] < 0.01
)
# 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
packages = [
    a.get_package()
    for a in unreal.get_editor_subsystem(unreal.EditorActorSubsystem).get_all_level_actors()
    if a.get_actor_label()
    in ["FL11_CaveTool", "FL11_OverhangTool", "FL11_HeightfieldBase", "FL11_TerrainPCG"]
]
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert len(packages) == 4 and unreal.EditorLoadingAndSavingUtils.save_packages(packages, False)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
assert (
    unreal.EditorAssetLibrary.save_directory("/Game", True, True)
    and unreal.get_editor_subsystem(unreal.LevelEditorSubsystem).save_current_level()
)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "status": "saved",
    "variant": 0,
    "map": physics["world"],
    "external_packages": [p.get_name() for p in packages],
    "geometry": physics["terrain"],
    "pcg_instances": pcg["instance_count"],
}
(root / "Evidence/case11-final-baseline.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-save-meshterrain-variant3-py"></a>

### lab_save_meshterrain_variant3.py

```python
# 파일 역할: EpicFeatureLab의 lab_save_meshterrain_variant3 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/__ExternalActors__/FeatureLab/Maps/FL_11_MeshTerrain_WP/

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, runpy, unreal
from pathlib import Path

root = Path(unreal.Paths.project_dir()).resolve()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
assert not unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
physics = runpy.run_path(str(root / "Scripts/Lab/lab_probe_meshterrain.py"))["RESULT"]
pcg = runpy.run_path(str(root / "Scripts/Lab/lab_inspect_meshterrain_pcg.py"))["RESULT"]
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert (
    not physics["terrain"]["any_preview_build_active"]
    and not physics["terrain"]["pending_preview_builds"]
)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 차이의 부호를 없애 크기만 비교한다. 오차 허용 범위 검사에 자주 사용한다.
assert (
    abs(physics["rays"]["overhang"]["impact"][2] + 10) < 0.1
    and not physics["rays"]["cave"]["blocking"]
)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert (
    pcg["status"] == "generated"
    and pcg["instance_count"] == 100
    and pcg["max_height_error_cm"] < 0.01
)
packages = []
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 actor의 값이 매번 바뀐다. 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
for actor in unreal.get_editor_subsystem(unreal.EditorActorSubsystem).get_all_level_actors():
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: actor.get_actor_label() in ['FL11_CaveTool', 'FL11_OverhangTool', 'FL11_HeightfieldBase', 'FL11_TerrainPCG']
    if actor.get_actor_label() in [
        "FL11_CaveTool",
        "FL11_OverhangTool",
        "FL11_HeightfieldBase",
        "FL11_TerrainPCG",
    ]:
        package = actor.get_package()
        # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
        assert package.get_name().startswith(
            "/Game/__ExternalActors__/FeatureLab/Maps/FL_11_MeshTerrain_WP/"
        ), package.get_name()
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: package not in packages 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
        if package not in packages:
            # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
            packages.append(package)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert len(packages) == 4 and unreal.EditorLoadingAndSavingUtils.save_packages(packages, False)
assert unreal.EditorAssetLibrary.save_directory("/Game", True, True)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
assert unreal.get_editor_subsystem(unreal.LevelEditorSubsystem).save_current_level()
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. 편집 중인 월드를 얻는다. 게임 실행 월드와 다르므로 대상을 혼동하지 않는다.
RESULT = {
    "status": "saved",
    "variant": 3,
    "map": unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem)
    .get_editor_world()
    .get_path_name(),
    "external_packages": [p.get_name() for p in packages],
    "physics": physics,
    "pcg": pcg,
    "purpose": "Nonbaseline source modifier state and 100 generated placements must survive a full editor restart",
}
(root / "Evidence/case11-saved-variant.json").write_text(
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

<a id="source-lab-lab-test-meshterrain-editor-py"></a>

### lab_test_meshterrain_editor.py

```python
# 파일 역할: 완성 결과를 실제 값과 비교하는 검증 작업. 생성 코드와 검사 코드를 구분한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

import builtins, json, runpy, time, traceback
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
assert (
    root.name == "EpicFeatureLab"
    and not unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
)
state = {
    "status": "running",
    "phase": 0,
    "checks": [],
    "snapshots": {},
    "started": time.time(),
    "request_time": time.time(),
    "stable": 0,
    "handle": None,
}
assert getattr(builtins, "_fl11_terrain_editor_state", {}).get("status") != "running"
builtins._fl11_terrain_editor_state = state
target = root / "Evidence/case11-editor-validation.json"
phases = [("baseline", 0), ("filled", 1), ("moved", 2), ("without_overhang", 3), ("reset", 0)]


# 함수 terrain: 이름은 terrain이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: 별도 입력 없음 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
def terrain():
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다. 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
    return next(
        a
        for a in unreal.get_editor_subsystem(unreal.EditorActorSubsystem).get_all_level_actors()
        if isinstance(a, unreal.MeshPartition)
    )


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


# 함수 tick: 이름은 tick이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: dt JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
def tick(dt):
    # 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다. JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
    try:
        if time.time() - state["started"] > 180:
            raise TimeoutError("Mesh Terrain editor verification timed out")
        # JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
        current = json.loads(
            unreal.FeatureLabRuntimeLibrary.inspect_lab_mesh_terrain(terrain())
        )
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: current['any_preview_build_active'] or current['pending_preview_builds'] or time.time() - state['request_time'] < 1.5
        if (
            current["any_preview_build_active"]
            or current["pending_preview_builds"]
            or time.time() - state["request_time"] < 1.5
        ):
            state["stable"] = 0
            # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
            return
        state["stable"] += 1
        if state["stable"] < 3:
            # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
            return
        data = runpy.run_path(str(root / "Scripts/Lab/lab_probe_meshterrain.py"))["RESULT"]
        name, variant = phases[state["phase"]]
        state["snapshots"][name] = data
        rays = data["rays"]
        solid = rays["solid"]
        cave = rays["cave"]
        old = rays["old_solid"]
        overhang = rays["overhang"]
        check(
            name + ": generated terrain geometry",
            data["terrain"]["triangles"] > 100,
            data["terrain"]["triangles"],
        )
        # 차이의 부호를 없애 크기만 비교한다. 오차 허용 범위 검사에 자주 사용한다.
        check(
            name + ": independent cliff blocks",
            solid["blocking"] and abs(solid["impact"][1] + 1600) < 2,
            solid,
        )
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: variant in [0, 3]
        if variant in [0, 3]:
            check(name + ": tunnel line passes", not cave["blocking"], cave)
            check(
                name + ": humanoid capsule passes",
                not data["cave_capsule_sweep"]["blocking"],
                data["cave_capsule_sweep"],
            )
            check(name + ": old position remains solid", old["blocking"], old)
            # 차이의 부호를 없애 크기만 비교한다. 오차 허용 범위 검사에 자주 사용한다.
            check(
                name + ": cave floor is near zero",
                rays["floor"]["blocking"] and abs(rays["floor"]["impact"][2]) < 3,
                rays["floor"],
            )
            # 차이의 부호를 없애 크기만 비교한다. 오차 허용 범위 검사에 자주 사용한다.
            check(
                name + ": cave roof is near 320cm",
                rays["ceiling"]["blocking"] and abs(rays["ceiling"]["impact"][2] - 320) < 5,
                rays["ceiling"],
            )
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: variant == 1
        elif variant == 1:
            # 차이의 부호를 없애 크기만 비교한다. 오차 허용 범위 검사에 자주 사용한다.
            check(
                "filled: tunnel closes",
                cave["blocking"] and abs(cave["impact"][1] + 1600) < 3,
                cave,
            )
            check(
                "filled: capsule is blocked",
                data["cave_capsule_sweep"]["blocking"],
                data["cave_capsule_sweep"],
            )
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: variant == 2
        elif variant == 2:
            check("moved: former opening closes", cave["blocking"], cave)
            check("moved: new opening passes", not old["blocking"], old)
        expected = -10 if variant == 3 else 550
        # 차이의 부호를 없애 크기만 비교한다. 오차 허용 범위 검사에 자주 사용한다.
        check(
            name + ": overhang union toggles",
            overhang["blocking"] and abs(overhang["impact"][2] - expected) < 3,
            overhang,
        )
        if name == "reset":
            baseline = state["snapshots"]["baseline"]
            check(
                "reset: geometry vertex and triangle counts repeat",
                all(
                    data["terrain"][k] == baseline["terrain"][k]
                    for k in ["vertices", "triangles"]
                ),
            )
            # same에 기준값 True을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
            same = True
            for key, value in data["rays"].items():
                original = baseline["rays"][key]
                same = same and value["blocking"] == original["blocking"]
                if value["blocking"] and original["blocking"]:
                    # 차이의 부호를 없애 크기만 비교한다. 오차 허용 범위 검사에 자주 사용한다.
                    same = (
                        same
                        and max(abs(a - b) for a, b in zip(value["impact"], original["impact"]))
                        < 0.01
                        and max(abs(a - b) for a, b in zip(value["normal"], original["normal"]))
                        < 0.001
                    )
            check("reset: all collision probes repeat within 0.01cm", same)
            state["status"] = "passed"
            state["elapsed_seconds"] = time.time() - state["started"]
            unreal.unregister_slate_post_tick_callback(state["handle"])
            state["handle"] = None
            write()
            # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
            return
        state["phase"] += 1
        state["stable"] = 0
        state["request_time"] = time.time()
        # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
        assert unreal.FeatureLabRuntimeLibrary.set_lab_mesh_terrain_variant(
            terrain(), phases[state["phase"]][1]
        )
        write()
    except Exception:
        state["status"] = "failed"
        state["error"] = traceback.format_exc()
        unreal.unregister_slate_post_tick_callback(state["handle"])
        state["handle"] = None
        unreal.FeatureLabRuntimeLibrary.set_lab_mesh_terrain_variant(terrain(), 0)
        write()


# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert unreal.FeatureLabRuntimeLibrary.set_lab_mesh_terrain_variant(terrain(), 0)
state["handle"] = unreal.register_slate_post_tick_callback(tick)
write()
RESULT = {"status": "running", "report": str(target), "phases": [x[0] for x in phases]}
```

<a id="source-lab-lab-test-meshterrain-movement-py"></a>

### lab_test_meshterrain_movement.py

```python
# 파일 역할: 완성 결과를 실제 값과 비교하는 검증 작업. 생성 코드와 검사 코드를 구분한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

import builtins, json, runpy, time, traceback
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
assert world and root.name == "EpicFeatureLab"
walker = next(
    a for a in unreal.ObjectIterator(unreal.FeatureLabTerrainWalker) if a.get_world() == world
)
assert getattr(builtins, "_fl11_movement_state", {}).get("status") != "running"
state = {
    "status": "running",
    "phase": "settle",
    "started": time.time(),
    "phase_time": unreal.GameplayStatics.get_time_seconds(world),
    "checks": [],
    "samples": [],
    "handle": None,
}
builtins._fl11_movement_state = state
target = root / "Evidence/case11-movement-validation.json"


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


# 함수 stage: 이름은 stage이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: name
def stage(name):
    state["phase"] = name
    state["phase_time"] = unreal.GameplayStatics.get_time_seconds(world)
    write()


# 함수 capture: 이름은 capture이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: 별도 입력 없음 JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
def capture():
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다. JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
    return json.loads(walker.capture_movement())


# 함수 finish: 이름은 finish이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: status 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
def finish(status):
    state["status"] = status
    state["elapsed_seconds"] = time.time() - state["started"]
    unreal.unregister_slate_post_tick_callback(state["handle"])
    state["handle"] = None
    write()


# 함수 tick: 이름은 tick이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: dt
def tick(dt):
    # 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다.
    try:
        now = unreal.GameplayStatics.get_time_seconds(world)
        age = now - state["phase_time"]
        snap = capture()
        if time.time() - state["started"] > 180:
            raise TimeoutError("Character movement test timed out")
        if state["phase"] == "settle" and age > 1:
            probe = runpy.run_path(str(root / "Scripts/Lab/lab_probe_meshterrain.py"))["RESULT"]
            state["runtime_terrain_probe"] = probe
            # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: (not probe['rays']['solid']['blocking'] or not probe['rays']['ceiling']['blocking']) and age < 45
            if (
                not probe["rays"]["solid"]["blocking"]
                or not probe["rays"]["ceiling"]["blocking"]
            ) and age < 45:
                write()
                # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
                return
            check(
                "runtime contains a blocking terrain cliff",
                probe["rays"]["solid"]["blocking"],
                probe["rays"]["solid"],
            )
            # 차이의 부호를 없애 크기만 비교한다. 오차 허용 범위 검사에 자주 사용한다.
            check(
                "runtime contains the cave ceiling",
                probe["rays"]["ceiling"]["blocking"]
                and abs(probe["rays"]["ceiling"]["impact"][2] - 320) < 5,
                probe["rays"]["ceiling"],
            )
            # 차이의 부호를 없애 크기만 비교한다. 오차 허용 범위 검사에 자주 사용한다.
            check(
                "runtime cave floor is independent of lab floor",
                probe["rays"]["floor"]["blocking"]
                and abs(probe["rays"]["floor"]["impact"][2]) < 3
                and probe["rays"]["floor"]["component"] != "StaticMeshComponent",
                probe["rays"]["floor"],
            )
            # 차이의 부호를 없애 크기만 비교한다. 오차 허용 범위 검사에 자주 사용한다.
            check(
                "runtime contains the raised overhang",
                probe["rays"]["overhang"]["blocking"]
                and abs(probe["rays"]["overhang"]["impact"][2] - 550) < 3,
                probe["rays"]["overhang"],
            )
            check(
                "runtime cave is passable by humanoid capsule",
                not probe["cave_capsule_sweep"]["blocking"],
                probe["cave_capsule_sweep"],
            )
            check("character settles on exterior ground", snap["on_walkable_floor"], snap)
            state["initial"] = snap
            walker.walk_forward()
            stage("forward")
        elif state["phase"] == "forward":
            if not state["samples"] or now - state["samples"][-1]["game_time"] > 0.2:
                state["samples"].append({"game_time": now, **snap})
            if age > 15 or snap["location"][1] > 1920:
                check("character crosses both cave entrances", snap["location"][1] > 1800, snap)
                middle = [s for s in state["samples"] if -1200 < s["location"][1] < 1200]
                check("movement is observed inside tunnel", len(middle) > 10, len(middle))
                check(
                    "walking collision follows cave floor",
                    sum(s["on_walkable_floor"] for s in middle) / max(len(middle), 1) > 0.8,
                )
                check(
                    "character walks on the higher curved cave floor",
                    min(s["location"][2] for s in middle) > 85
                    and max(s["location"][2] for s in middle)
                    - min(s["location"][2] for s in middle)
                    > 15,
                )
                # 차이의 부호를 없애 크기만 비교한다. 오차 허용 범위 검사에 자주 사용한다.
                check(
                    "character remains centered in tunnel",
                    max(abs(s["location"][0] - 400) for s in state["samples"]) < 5,
                )
                state["forward_end"] = snap
                walker.stop_walking()
                stage("stopped")
        elif state["phase"] == "stopped" and age > 0.5:
            check("stop cancels velocity", sum(v * v for v in snap["velocity"]) < 0.01, snap)
            walker.walk_backward()
            stage("backward")
        elif state["phase"] == "backward" and (age > 15 or snap["location"][1] < -1820):
            check("character returns through the cave", snap["location"][1] < -1750, snap)
            walker.reset_walk()
            stage("reset")
        elif state["phase"] == "reset" and age > 1:
            # 차이의 부호를 없애 크기만 비교한다. 오차 허용 범위 검사에 자주 사용한다.
            check(
                "reset restores horizontal start",
                abs(snap["location"][0] - 400) < 0.01
                and abs(snap["location"][1] + 1850) < 0.01,
                snap,
            )
            # 차이의 부호를 없애 크기만 비교한다. 오차 허용 범위 검사에 자주 사용한다.
            check(
                "reset restores grounded position",
                snap["on_walkable_floor"]
                and abs(snap["location"][2] - state["initial"]["location"][2]) < 0.02,
                snap,
            )
            check(
                "reset stops locomotion",
                not snap["walking_requested"] and sum(v * v for v in snap["velocity"]) < 0.01,
                snap,
            )
            finish("passed")
    except Exception:
        state["error"] = traceback.format_exc()
        walker.stop_walking()
        finish("failed")


walker.reset_walk()
state["handle"] = unreal.register_slate_post_tick_callback(tick)
write()
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "status": "running",
    "report": str(target),
    "workflow": "Actual CharacterMovement through baked Mesh Terrain, reverse, stop and reset; no actor-position simulation",
}
```

<a id="source-lab-lab-test-meshterrain-pcg-py"></a>

### lab_test_meshterrain_pcg.py

```python
# 파일 역할: 완성 결과를 실제 값과 비교하는 검증 작업. 생성 코드와 검사 코드를 구분한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Terrain/PCG_LabTerrainSurface

import builtins, json, runpy, time, traceback
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
assert (
    root.name == "EpicFeatureLab"
    and not unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
)
assert getattr(builtins, "_fl11_pcg_state", {}).get("status") != "running"
state = {
    "status": "running",
    "phase": 0,
    "subphase": "terrain",
    "started": time.time(),
    "requested": time.time(),
    "checks": [],
    "snapshots": {},
    "handle": None,
}
builtins._fl11_pcg_state = state
phases = [("baseline", 0, 104), ("without_overhang", 3, 100), ("reset", 0, 104)]
target = root / "Evidence/case11-pcg-validation.json"


# 함수 terrain: 이름은 terrain이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: 별도 입력 없음 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
def terrain():
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다. 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
    return next(
        a
        for a in unreal.get_editor_subsystem(unreal.EditorActorSubsystem).get_all_level_actors()
        if isinstance(a, unreal.MeshPartition)
    )


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
    write()


# 함수 positions: 이름은 positions이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: data
def positions(data):
    return sorted(tuple(x["position"]) for x in data["placements"])


# 함수 tick: 이름은 tick이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: dt
def tick(dt):
    # 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다.
    try:
        if time.time() - state["started"] > 120:
            raise TimeoutError("PCG terrain integration timed out")
        if time.time() - state["requested"] < 1.5:
            # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
            return
        if state["subphase"] == "terrain":
            # JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
            info = json.loads(
                unreal.FeatureLabRuntimeLibrary.inspect_lab_mesh_terrain(terrain())
            )
            if info["any_preview_build_active"] or info["pending_preview_builds"]:
                # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
                return
            # 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
            unreal.FeatureLabRuntimeLibrary.create_lab_terrain_pcg(
                unreal.EditorAssetLibrary.load_asset(
                    "/Game/FeatureLab/Terrain/PCG_LabTerrainSurface"
                )
            )
            state["subphase"] = "pcg"
            state["requested"] = time.time()
            # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
            return
        data = runpy.run_path(str(root / "Scripts/Lab/lab_inspect_meshterrain_pcg.py"))[
            "RESULT"
        ]
        if data["status"] == "generating":
            # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
            return
        name, variant, count = phases[state["phase"]]
        state["snapshots"][name] = data
        check(
            name + ": actual generated instances",
            data["instance_count"] == count,
            data["instance_count"],
        )
        check(
            name + ": output points match rendered instances",
            any(x.get("point_count") == count for x in data["outputs"]),
        )
        check(
            name + ": every marker lands on Mesh Terrain",
            all(x["surface_actor_class"] == "PreviewSection" for x in data["placements"]),
        )
        check(
            name + ": surface height error below 0.01cm",
            data["max_height_error_cm"] is not None and data["max_height_error_cm"] < 0.01,
            data["max_height_error_cm"],
        )
        check(
            name + ": native terrain interop outputs one actual section",
            any(
                x.get("items") == 1 and x.get("soft_references", {}).get("ActorReference")
                for x in data["outputs"]
            ),
        )
        points = positions(data)
        check(
            name + ": distribution spans terrain",
            max(p[0] for p in points) - min(p[0] for p in points) > 2000
            and max(p[1] for p in points) - min(p[1] for p in points) > 2500,
        )
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: variant == 3
        if variant == 3:
            check(
                "modifier rebuild removes unsupported overhang markers",
                max(p[2] for p in points) < 500,
            )
        if name == "reset":
            check(
                "reset: all 104 world transforms repeat",
                positions(data) == positions(state["snapshots"]["baseline"]),
            )
            check(
                "reset: generated components do not accumulate",
                len(data["instance_inventory"]) == 1,
                len(data["instance_inventory"]),
            )
            finish("passed")
            # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
            return
        state["phase"] += 1
        state["subphase"] = "terrain"
        state["requested"] = time.time()
        # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
        assert unreal.FeatureLabRuntimeLibrary.set_lab_mesh_terrain_variant(
            terrain(), phases[state["phase"]][1]
        )
        write()
    except Exception:
        state["error"] = traceback.format_exc()
        unreal.FeatureLabRuntimeLibrary.set_lab_mesh_terrain_variant(terrain(), 0)
        finish("failed")


# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert unreal.FeatureLabRuntimeLibrary.set_lab_mesh_terrain_variant(terrain(), 0)
state["handle"] = unreal.register_slate_post_tick_callback(tick)
write()
RESULT = {"status": "running", "report": str(target), "phases": phases}
```

<a id="source-lab-lab-verify-meshterrain-roundtrip-py"></a>

### lab_verify_meshterrain_roundtrip.py

```python
# 파일 역할: 완성 결과를 실제 값과 비교하는 검증 작업. 생성 코드와 검사 코드를 구분한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Terrain/TP_LabGameplayPrecision
#   /Game/FeatureLab/Terrain/MPD_LabTerrain

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, runpy, unreal
from pathlib import Path

root = Path(unreal.Paths.project_dir()).resolve()
saved = json.loads((root / "Evidence/case11-saved-variant.json").read_text(encoding="utf-8"))
assert saved["status"] == "saved" and saved["variant"] == 3
physics = runpy.run_path(str(root / "Scripts/Lab/lab_probe_meshterrain.py"))["RESULT"]
pcg = runpy.run_path(str(root / "Scripts/Lab/lab_inspect_meshterrain_pcg.py"))["RESULT"]
checks = []


# 함수 check: 이름은 check이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: name, condition, actual 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
def check(name, condition, actual=None):
    checks.append({"name": name, "passed": bool(condition), "actual": actual})
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert condition, name


check(
    "World Partition level is reopened",
    physics["world"].split(".")[-1] == "FL_11_MeshTerrain_WP",
)
check("all three saved source modifiers are loaded", len(physics["terrain"]["modifiers"]) == 3)
# 차이의 부호를 없애 크기만 비교한다. 오차 허용 범위 검사에 자주 사용한다.
check(
    "overhang remains disabled after process restart",
    physics["rays"]["overhang"]["blocking"]
    and abs(physics["rays"]["overhang"]["impact"][2] + 10) < 0.1,
)
check(
    "cave remains open after restart",
    not physics["rays"]["cave"]["blocking"] and not physics["cave_capsule_sweep"]["blocking"],
)
check(
    "regenerated geometry counts match saved variant",
    all(
        physics["terrain"][k] == saved["physics"]["terrain"][k]
        for k in ["vertices", "triangles"]
    ),
)
check("100 PCG instances survive restart", pcg["instance_count"] == 100, pcg["instance_count"])
positions = lambda data: sorted(tuple(x["position"]) for x in data["placements"])
check("all saved surface positions repeat", positions(pcg) == positions(saved["pcg"]))
# 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 compiled_section_build_variants이다.
check(
    "saved collision precision pipeline is retained",
    any(
        str(v.get_editor_property("name")) == "Common_GameplayData"
        and v.get_editor_property("transformer_pipeline")
        .get_path_name()
        .startswith("/Game/FeatureLab/Terrain/TP_LabGameplayPrecision")
        for v in unreal.EditorAssetLibrary.load_asset(
            "/Game/FeatureLab/Terrain/MPD_LabTerrain"
        ).get_editor_property("compiled_section_build_variants")
    ),
)
# 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
walker = next(
    a
    for a in unreal.get_editor_subsystem(unreal.EditorActorSubsystem).get_all_level_actors()
    if isinstance(a, unreal.FeatureLabTerrainWalker)
)
# 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다.
check(
    "saved inspection cameras reference the current level",
    all(
        walker.get_editor_property(p)
        and walker.get_editor_property(p).get_world() == walker.get_world()
        for p in ["overview_camera", "cave_camera"]
    ),
)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "status": "passed",
    "checks": checks,
    "physics": physics,
    "pcg": pcg,
    "restoration": "Verified before applying reset or manually regenerating the saved PCG graph",
}
(root / "Evidence/case11-roundtrip-validation.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-verify-meshterrain-runtime-pcg-py"></a>

### lab_verify_meshterrain_runtime_pcg.py

```python
# 파일 역할: 완성 결과를 실제 값과 비교하는 검증 작업. 생성 코드와 검사 코드를 구분한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, runpy, unreal
from pathlib import Path

root = Path(unreal.Paths.project_dir()).resolve()
# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert world
pcg = runpy.run_path(str(root / "Scripts/Lab/lab_inspect_meshterrain_pcg.py"))["RESULT"]
walker = next(
    a for a in unreal.ObjectIterator(unreal.FeatureLabTerrainWalker) if a.get_world() == world
)
# JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
movement = json.loads(walker.capture_movement())
checks = []


# 함수 check: 이름은 check이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: name, condition, actual 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
def check(name, condition, actual=None):
    checks.append({"name": name, "passed": bool(condition), "actual": actual})
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert condition, name


check(
    "native startup refresh occurs once after runtime terrain collision is ready",
    movement["runtime_pcg_refresh_count"] == 1,
    movement["runtime_pcg_refresh_count"],
)
check("runtime generation completes", pcg["status"] == "generated")
check("104 actual runtime instances exist", pcg["instance_count"] == 104, pcg["instance_count"])
check(
    "runtime output points match instances",
    any(x.get("point_count") == 104 for x in pcg["outputs"]),
)
check(
    "all runtime placements use compiled Mesh Terrain",
    all(x["surface_actor_class"] == "CompiledSection" for x in pcg["placements"]),
)
check(
    "runtime height error is below 0.01cm",
    pcg["max_height_error_cm"] is not None and pcg["max_height_error_cm"] < 0.01,
    pcg["max_height_error_cm"],
)
references = [
    p for x in pcg["outputs"] for paths in x.get("soft_references", {}).values() for p in paths
]
check(
    "native interop references compiled sections rather than preview actors",
    bool(references)
    and all("CompiledSection_" in p and "PreviewSection" not in p for p in references),
    references,
)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "status": "passed",
    "checks": checks,
    "pcg": pcg,
    "native_movement_state": movement,
    "manual_runtime_regeneration_used": False,
}
(root / "Evidence/case11-runtime-pcg-validation.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-source-mutablesample-featurelabterrain-cpp"></a>

### FeatureLabTerrain.cpp

```cpp
// 파일 역할: 11번 실제 입체 지형의 제작·충돌·PCG 연결과 워커 이동
// 클래스=작업 종류, 객체=실제 한 개, 포인터(* 또는 TObjectPtr)=다른 객체를 가리키는 참조.
// nullptr은 대상 없음, bool은 참/거짓, TArray는 순서 있는 목록, FString은 문자열이다.
// WITH_EDITOR 구간은 에디터 빌드에서만 사용하는 코드다. 원본과의 토큰 비교 결과는 code-validation.json에 기록한다.

#include "FeatureLabTerrain.h"
#include "FeatureLabRuntime.h"
#include "Serialization/JsonSerializer.h"
#include "Camera/CameraComponent.h"
#include "GameFramework/SpringArmComponent.h"
#include "GameFramework/CharacterMovementComponent.h"
#include "GameFramework/PlayerController.h"
#include "Components/CapsuleComponent.h"
#include "Components/SkeletalMeshComponent.h"
#include "Components/InputComponent.h"
#include "Kismet/GameplayStatics.h"
#include "Engine/Engine.h"
#include "EngineUtils.h"
#include "PCGComponent.h"
// 빌드 조건에 따라 포함할 코드를 고른다. 게임 실행 중의 if 조건과 달리 빌드할 때 구분한다.
#if WITH_EDITOR
#include "Editor.h"
#include "EngineUtils.h"
#include "MeshPartition.h"
#include "MeshPartitionDefinition.h"
#include "MeshPartitionEditorComponent.h"
#include "MeshPartitionEditorSubsystem.h"
#include "MeshPartitionPreviewSection.h"
#include "MeshPartitionModifierActor.h"
#include "Modifiers/MeshPartitionBooleanModifier.h"
#include "Modifiers/MeshPartitionMeshProvider.h"
#include "DynamicMesh/DynamicMesh3.h"
#include "DynamicMesh/MeshNormals.h"
#include "DynamicMesh/DynamicMeshAttributeSet.h"
#include "AssetRegistry/AssetRegistryModule.h"
#include "Engine/StaticMesh.h"
#include "Components/SceneComponent.h"
#include "UObject/UnrealType.h"
#include "Components/DynamicMeshComponent.h"
#include "Components/StaticMeshComponent.h"
#include "Components/BoxComponent.h"
#include "PCGComponent.h"
#include "PCGGraph.h"
#endif
namespace
{
FString TerrainJson(const TSharedRef<FJsonObject> &O)
{
    FString S;
    auto W = TJsonWriterFactory<>::Create(&S);
    FJsonSerializer::Serialize(O, W);
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return S;
}
// 빌드 조건에 따라 포함할 코드를 고른다. 게임 실행 중의 if 조건과 달리 빌드할 때 구분한다.
#if WITH_EDITOR
using namespace UE::MeshPartition;
using namespace UE::Geometry;
TSharedPtr<FJsonValue> TerrainVector(const FVector &P)
{
    TArray<TSharedPtr<FJsonValue>> V;
    V.Add(MakeShared<FJsonValueNumber>(P.X));
    V.Add(MakeShared<FJsonValueNumber>(P.Y));
    V.Add(MakeShared<FJsonValueNumber>(P.Z));
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return MakeShared<FJsonValueArray>(V);
}
FDynamicMesh3 MakeLabTerrainBase()
{
    FDynamicMesh3 Mesh(true, false, false, true);
    Mesh.EnableAttributes();
    Mesh.Attributes()->EnableMaterialID();
    constexpr int32 N = 41;
    int32 Top[N][N], Bottom[N][N];
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (int32 Y = 0; Y < N; ++Y)
        // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
        for (int32 X = 0; X < N; ++X)
        {
            const double PX = -1600 + X * 80., PY = -1600 + Y * 80.;
            const double Ramp = FMath::Clamp((PX + 1600) / 1200., 0., 1.);
            const double H = 400 * Ramp + 60 * Ramp * FMath::Sin(PX / 450) * FMath::Cos(PY / 450);
            Top[Y][X] = Mesh.AppendVertex(FVector3d(PX, PY, H));
            Bottom[Y][X] = Mesh.AppendVertex(FVector3d(PX, PY, -250));
        }
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (int32 Y = 0; Y < N - 1; ++Y)
        // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
        for (int32 X = 0; X < N - 1; ++X)
        {
            Mesh.AppendTriangle(Top[Y][X], Top[Y][X + 1], Top[Y + 1][X + 1]);
            Mesh.AppendTriangle(Top[Y][X], Top[Y + 1][X + 1], Top[Y + 1][X]);
            Mesh.AppendTriangle(Bottom[Y][X], Bottom[Y + 1][X + 1], Bottom[Y][X + 1]);
            Mesh.AppendTriangle(Bottom[Y][X], Bottom[Y + 1][X], Bottom[Y + 1][X + 1]);
        }
    auto Side = [&](int32 A, int32 B, int32 BA, int32 BB) {
        Mesh.AppendTriangle(A, BA, BB);
        Mesh.AppendTriangle(A, BB, B);
    };
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (int32 I = 0; I < N - 1; ++I)
    {
        Side(Top[0][I], Top[0][I + 1], Bottom[0][I], Bottom[0][I + 1]);
        Side(Top[I][N - 1], Top[I + 1][N - 1], Bottom[I][N - 1], Bottom[I + 1][N - 1]);
        Side(Top[N - 1][I + 1], Top[N - 1][I], Bottom[N - 1][I + 1], Bottom[N - 1][I]);
        Side(Top[I + 1][0], Top[I][0], Bottom[I + 1][0], Bottom[I][0]);
    }
    // Match the clockwise top-surface winding used by Epic's MeshPartition rectangle generator.
    Mesh.ReverseOrientation(false);
    auto *UV = Mesh.Attributes()->PrimaryUV();
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (int32 TID : Mesh.TriangleIndicesItr())
    {
        const auto T = Mesh.GetTriangle(TID);
        const FVector3d Normal = Mesh.GetTriNormal(TID);
        FIndex3i Elements;
        // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
        for (int32 K = 0; K < 3; ++K)
        {
            const FVector3d P = Mesh.GetVertex(T[K]);
            FVector2f PUV;
            // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
            if (FMath::Abs(Normal.Z) >= FMath::Max(FMath::Abs(Normal.X), FMath::Abs(Normal.Y)))
                PUV = FVector2f(P.X / 400, P.Y / 400);
            else if (FMath::Abs(Normal.X) >= FMath::Abs(Normal.Y))
                PUV = FVector2f(P.Y / 400, P.Z / 400);
            else
                PUV = FVector2f(P.X / 400, P.Z / 400);
            Elements[K] = UV->AppendElement(PUV);
        }
        UV->SetTriangle(TID, Elements);
    }
    FMeshNormals::QuickComputeVertexNormals(Mesh);
    FMeshNormals::InitializeOverlayToPerVertexNormals(Mesh.Attributes()->PrimaryNormals());
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return Mesh;
}
AModifierActor *AddLabBoolean(UWorld *World, AMeshPartition *Terrain, const TCHAR *Label,
                              UStaticMesh *Mesh, const FVector &Position, const FVector &Scale,
                              EBooleanOperation Op, double Priority)
{
    auto *Actor = World->SpawnActor<AModifierActor>();
    Actor->SetActorLabel(Label);
    Actor->Tags = {TEXT("FeatureLab_Owned"), TEXT("FeatureLab_11")};
    // 액터 위치를 바꾼다. 별도 이동 시스템이 가진 속도·예측 상태 초기화까지 자동으로 해결되는 것은 아니다.
    Actor->SetActorLocation(Position);
    Actor->SetActorScale3D(Scale);
    auto *Modifier = NewObject<UBooleanModifier>(Actor, NAME_None, RF_Transactional);
    Actor->Modifier = Modifier;
    Modifier->SetupAttachment(Actor->GetRootComponent());
    Actor->AddInstanceComponent(Modifier);
    Modifier->OnComponentCreated();
    // This engine version exposes BooleanOp to the property editor, with no C++ setter.
    auto *OpProperty = FindFProperty<FEnumProperty>(Modifier->GetClass(), TEXT("BooleanOp"));
    check(OpProperty);
    OpProperty->GetUnderlyingProperty()->SetIntPropertyValue(
        OpProperty->ContainerPtrToValuePtr<void>(Modifier), static_cast<uint64>(Op));
    Modifier->SetPriority(Priority);
    FBaseGrowth Growth;
    Growth.X = Growth.Y = Op == EBooleanOperation::Union;
    Growth.Z = true;
    // SetBaseGrowth is not DLL-exported in the installed engine; initialize its reflected editor
    // property before registration.
    auto *GrowthProperty = FindFProperty<FStructProperty>(Modifier->GetClass(), TEXT("BaseGrowth"));
    check(GrowthProperty);
    GrowthProperty->CopyCompleteValue(GrowthProperty->ContainerPtrToValuePtr<void>(Modifier),
                                      &Growth);
    Modifier->SetExpandOperatorBounds(FVector3d(150, 150, 800));
    Modifier->SetMeshSourceMode(EModifierMeshSourceMode::StaticMesh);
    Modifier->SetStaticMesh(Mesh);
    Modifier->SetAffectedMeshPartition(Terrain);
    Modifier->RegisterComponent();
    Actor->AttachToActor(Terrain, FAttachmentTransformRules::KeepWorldTransform);
    Actor->PostEditChange();
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return Actor;
}
#endif
} // namespace
// 【함수 역할】뒤의 처리에 필요한 객체·에셋·구성을 준비한다. 에디터 전용 구간과 런타임 구간이 나뉘는지, 기존 자료를 재사용하는지 함께 확인한다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
UObject *UFeatureLabRuntimeLibrary::CreateLabMeshTerrain()
{
// 빌드 조건에 따라 포함할 코드를 고른다. 게임 실행 중의 if 조건과 달리 빌드할 때 구분한다.
#if WITH_EDITOR
    UWorld *World = GEditor ? GEditor->GetEditorWorldContext().World() : nullptr;
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!World || !World->GetName().StartsWith(TEXT("FL_11_")))
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return nullptr;
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (TActorIterator<AMeshPartition> It(World); It; ++It)
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (It->ActorHasTag(TEXT("FeatureLab_11")))
        {
            // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
            for (TActorIterator<AActor> Base(World); Base; ++Base)
            {
                // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
                if (Base->GetActorLabel() == TEXT("FL11_HeightfieldBase"))
                    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
                    if (auto *Provider = Base->GetComponentByClass<UMeshProviderModifier>())
                        Provider->SetMesh(MakeLabTerrainBase());
                // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
                if (Base->GetActorLabel() == TEXT("FL11_CaveTool") ||
                    Base->GetActorLabel() == TEXT("FL11_OverhangTool"))
                    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
                    if (auto *Modifier = Base->GetComponentByClass<UBooleanModifier>())
                    {
                        Modifier->SetExpandOperatorBounds(FVector3d(150, 150, 800));
                        FBaseGrowth Growth;
                        Growth.X = Growth.Y = Base->GetActorLabel() == TEXT("FL11_OverhangTool");
                        Growth.Z = true;
                        auto *Property = FindFProperty<FStructProperty>(Modifier->GetClass(),
                                                                        TEXT("BaseGrowth"));
                        check(Property);
                        Property->CopyCompleteValue(
                            Property->ContainerPtrToValuePtr<void>(Modifier), &Growth);
                        Modifier->PostEditChange();
                    }
            }
            auto *Editor = Cast<UMeshPartitionEditorComponent>(It->GetMeshPartitionComponent());
            // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
            if (Editor)
            {
                Editor->ForceRebuildAllSections(EChangeType::StateChange);
                Editor->Update();
            }
            // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
            return *It;
        }
    auto *Terrain = World->SpawnActor<AMeshPartition>();
    Terrain->SetActorLabel(TEXT("FL11_MeshTerrain"));
    Terrain->Tags = {TEXT("FeatureLab_Owned"), TEXT("FeatureLab_11")};
    const FString DefPackage = TEXT("/Game/FeatureLab/Terrain/MPD_LabTerrain");
    auto *Definition =
        LoadObject<UMeshPartitionDefinition>(nullptr, *(DefPackage + TEXT(".MPD_LabTerrain")));
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Definition)
    {
        auto *Source = Terrain->GetMeshPartitionDefinition();
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (!Source)
            // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
            return nullptr;
        Definition = DuplicateObject<UMeshPartitionDefinition>(Source, CreatePackage(*DefPackage),
                                                               TEXT("MPD_LabTerrain"));
        Definition->SetFlags(RF_Public | RF_Standalone | RF_Transactional);
        Definition->ClearFlags(RF_Transient);
        Definition->MarkPackageDirty();
        FAssetRegistryModule::AssetCreated(Definition);
    }
    Terrain->SetMeshPartitionDefinition(Definition);
    auto *Editor = NewObject<UMeshPartitionEditorComponent>(Terrain, TEXT("MeshTerrainEditor"),
                                                            RF_Transactional);
    Terrain->AddInstanceComponent(Editor);
    Terrain->SetMeshPartitionComponent(Editor);
    TArray<UMaterialInterface *> Materials;
    Materials.Add(Editor->GetDefinitionMaterial());
    auto *Base = Editor->SpawnBaseModifier(MakeLabTerrainBase(), Materials, FTransform::Identity);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Base)
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return nullptr;
    Base->SetActorLabel(TEXT("FL11_HeightfieldBase"));
    Base->Tags = {TEXT("FeatureLab_Owned"), TEXT("FeatureLab_11")};
    auto *Sphere = LoadObject<UStaticMesh>(nullptr, TEXT("/Engine/BasicShapes/Sphere.Sphere"));
    auto *Cube = LoadObject<UStaticMesh>(nullptr, TEXT("/Engine/BasicShapes/Cube.Cube"));
    AddLabBoolean(World, Terrain, TEXT("FL11_CaveTool"), Sphere, FVector(400, 0, 160),
                  FVector(10, 45, 3.2), EBooleanOperation::Subtract, 1);
    AddLabBoolean(World, Terrain, TEXT("FL11_OverhangTool"), Cube, FVector(900, -1500, 450),
                  FVector(14, 12, 2), EBooleanOperation::Union, 2);
    Editor->UpdateModifierList();
    Editor->ForceRebuildAllSections(EChangeType::StateChange);
    Editor->Update();
    Terrain->MarkPackageDirty();
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return Terrain;
#else
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return nullptr;
#endif
}
// 【함수 역할】입력이나 현재 선택값을 실제 객체의 상태에 반영한다. 값 저장과 화면·물리·애니메이션 갱신 호출을 함께 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
bool UFeatureLabRuntimeLibrary::SetLabMeshTerrainVariant(UObject *Object, int32 Variant)
{
// 빌드 조건에 따라 포함할 코드를 고른다. 게임 실행 중의 if 조건과 달리 빌드할 때 구분한다.
#if WITH_EDITOR
    auto *Terrain = Cast<AMeshPartition>(Object);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Terrain || !Terrain->ActorHasTag(TEXT("FeatureLab_11")) || Variant < 0 || Variant > 3)
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return false;
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (TActorIterator<AModifierActor> It(Terrain->GetWorld()); It; ++It)
    {
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (!It->ActorHasTag(TEXT("FeatureLab_11")))
            continue;
        // World Partition stores these source actors in external packages; runtime setters alone do
        // not mark them for save.
        It->Modify();
        It->Modifier->Modify();
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (It->GetActorLabel() == TEXT("FL11_CaveTool"))
        {
            // 액터 위치를 바꾼다. 별도 이동 시스템이 가진 속도·예측 상태 초기화까지 자동으로 해결되는 것은 아니다.
            It->SetActorLocation(FVector(Variant == 2 ? -400 : 400, 0, 160));
            It->Modifier->SetIsDisabledFlag(Variant == 1);
        }
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (It->GetActorLabel() == TEXT("FL11_OverhangTool"))
            It->Modifier->SetIsDisabledFlag(Variant == 3);
        It->Modifier->MarkPackageDirty();
        It->MarkPackageDirty();
    }
    auto *Editor = Cast<UMeshPartitionEditorComponent>(Terrain->GetMeshPartitionComponent());
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Editor)
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return false;
    Editor->ForceRebuildAllSections(EChangeType::StateChange);
    Editor->Update();
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return true;
#else
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return false;
#endif
}
// 【함수 역할】현재 객체와 실행 결과를 읽어 검증용 자료로 반환한다. 결과를 만드는 함수와 결과를 측정하는 함수를 구분해서 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
FString UFeatureLabRuntimeLibrary::InspectLabMeshTerrain(UObject *Object)
{
    auto O = MakeShared<FJsonObject>();
// 빌드 조건에 따라 포함할 코드를 고른다. 게임 실행 중의 if 조건과 달리 빌드할 때 구분한다.
#if WITH_EDITOR
    auto *Terrain = Cast<AMeshPartition>(Object);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Terrain || !Terrain->ActorHasTag(TEXT("FeatureLab_11")))
    {
        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
        O->SetStringField(TEXT("error"), TEXT("Owned terrain required"));
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return TerrainJson(O);
    }
    auto *Editor = Cast<UMeshPartitionEditorComponent>(Terrain->GetMeshPartitionComponent());
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Editor)
    {
        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
        O->SetStringField(TEXT("error"), TEXT("No terrain editor component"));
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return TerrainJson(O);
    }
    Editor->Update();
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetBoolField(TEXT("any_preview_build_active"), Editor->IsAnyPreviewSectionBuildActive());
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetStringField(TEXT("actor"), Terrain->GetPathName());
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetStringField(TEXT("definition"), Terrain->GetMeshPartitionDefinition()
                                              ? Terrain->GetMeshPartitionDefinition()->GetPathName()
                                              : TEXT("null"));
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("pending_preview_builds"),
                      UMeshPartitionEditorSubsystem::Get()->GetTotalPreviewSectionBuildNumber());
    TArray<TSharedPtr<FJsonValue>> Sections;
    int32 Vertices = 0, Triangles = 0;
    Editor->ForAllPreviewSections([&](APreviewSection *Section) {
        auto S = MakeShared<FJsonObject>();
        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
        S->SetStringField(TEXT("actor"), Section->GetPathName());
        TSet<UStaticMesh *> Meshes;
        TArray<UStaticMeshComponent *> Components;
        Section->GetComponents(Components);
        int32 SV = 0, ST = 0;
        // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
        for (auto *Component : Components)
            // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
            if (UStaticMesh *Mesh = Component->GetStaticMesh())
                // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
                if (!Meshes.Contains(Mesh))
                {
                    Meshes.Add(Mesh);
                    SV += Mesh->GetNumVertices(0);
                    ST += Mesh->GetNumTriangles(0);
                }
        FVector Origin, Extent;
        Section->GetActorBounds(false, Origin, Extent);
        S->SetField(TEXT("min"), TerrainVector(Origin - Extent));
        S->SetField(TEXT("max"), TerrainVector(Origin + Extent));
        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
        S->SetNumberField(TEXT("vertices"), SV);
        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
        S->SetNumberField(TEXT("triangles"), ST);
        Vertices += SV;
        Triangles += ST;
        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
        S->SetNumberField(TEXT("render_meshes"), Meshes.Num());
        Sections.Add(MakeShared<FJsonValueObject>(S));
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return true;
    });
    O->SetArrayField(TEXT("sections"), Sections);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("vertices"), Vertices);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("triangles"), Triangles);
    TArray<TSharedPtr<FJsonValue>> Modifiers;
    Editor->ForAllCurrentModifiers([&](UModifierComponent *M) {
        auto V = MakeShared<FJsonObject>();
        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
        V->SetStringField(TEXT("class"), M->GetClass()->GetName());
        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
        V->SetStringField(TEXT("owner"), M->GetOwner()->GetActorLabel());
        V->SetField(TEXT("location"), TerrainVector(M->GetOwner()->GetActorLocation()));
        Modifiers.Add(MakeShared<FJsonValueObject>(V));
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return true;
    });
    O->SetArrayField(TEXT("modifiers"), Modifiers);
#else
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetStringField(TEXT("error"), TEXT("Editor authoring helper"));
#endif
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return TerrainJson(O);
}
// 【함수 역할】뒤의 처리에 필요한 객체·에셋·구성을 준비한다. 에디터 전용 구간과 런타임 구간이 나뉘는지, 기존 자료를 재사용하는지 함께 확인한다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
UObject *UFeatureLabRuntimeLibrary::CreateLabTerrainPCG(UObject *GraphObject)
{
// 빌드 조건에 따라 포함할 코드를 고른다. 게임 실행 중의 if 조건과 달리 빌드할 때 구분한다.
#if WITH_EDITOR
    auto *Graph = Cast<UPCGGraph>(GraphObject);
    UWorld *World = GEditor ? GEditor->GetEditorWorldContext().World() : nullptr;
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Graph || !Graph->GetPathName().StartsWith(TEXT("/Game/FeatureLab/Terrain/")) || !World ||
        !World->GetName().StartsWith(TEXT("FL_11_")))
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return nullptr;
    AActor *Actor = nullptr;
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (TActorIterator<AActor> It(World); It; ++It)
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (It->GetActorLabel() == TEXT("FL11_TerrainPCG"))
        {
            Actor = *It;
            break;
        }
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Actor)
    {
        Actor = World->SpawnActor<AActor>();
        Actor->SetActorLabel(TEXT("FL11_TerrainPCG"));
        Actor->Tags = {TEXT("FeatureLab_Owned"), TEXT("FeatureLab_11")};
        auto *Bounds = NewObject<UBoxComponent>(Actor, TEXT("PCGBounds"), RF_Transactional);
        Bounds->SetBoxExtent(FVector(2600, 2600, 1400));
        Bounds->SetCollisionEnabled(ECollisionEnabled::NoCollision);
        Actor->SetRootComponent(Bounds);
        Actor->AddInstanceComponent(Bounds);
        Bounds->RegisterComponent();
        // 액터 위치를 바꾼다. 별도 이동 시스템이 가진 속도·예측 상태 초기화까지 자동으로 해결되는 것은 아니다.
        Actor->SetActorLocation(FVector(0, 0, 400));
    }
    auto *PCG = Actor->GetComponentByClass<UPCGComponent>();
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!PCG)
    {
        PCG = NewObject<UPCGComponent>(Actor, TEXT("TerrainPCG"), RF_Transactional);
        Actor->AddInstanceComponent(PCG);
        PCG->bIsComponentPartitioned = false;
        PCG->GenerationTrigger = EPCGComponentGenerationTrigger::GenerateOnLoad;
        PCG->RegisterComponent();
    }
    PCG->SetGraphLocal(Graph);
    PCG->NotifyPropertiesChangedFromBlueprint();
    PCG->GenerateLocal(true);
    Actor->MarkPackageDirty();
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return PCG;
#else
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return nullptr;
#endif
}
// 【함수 역할】클래스의 기본 부품과 기본값을 준비하는 생성자다. 이 시점에는 게임 월드가 모두 준비됐다고 가정하지 않는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
AFeatureLabTerrainWalker::AFeatureLabTerrainWalker()
{
    PrimaryActorTick.bCanEverTick = true;
    GetCapsuleComponent()->InitCapsuleSize(34, 88);
    GetCharacterMovement()->bRunPhysicsWithNoController = true;
    GetCharacterMovement()->MaxWalkSpeed = 300;
    GetCharacterMovement()->MaxStepHeight = 80;
    GetCharacterMovement()->SetWalkableFloorAngle(50);
    GetMesh()->SetRelativeLocation(FVector(0, 0, -88));
    // 이 액터의 기본 컴포넌트를 만든다. 부품 생성 뒤 장면 부착·재질·충돌 설정이 이어지는지 확인한다.
    Arm = CreateDefaultSubobject<USpringArmComponent>(TEXT("FollowArm"));
    Arm->SetupAttachment(RootComponent);
    Arm->TargetArmLength = 450;
    Arm->SetRelativeRotation(FRotator(-5, 0, 0));
    Arm->SetRelativeLocation(FVector(0, 0, 35));
    Arm->bDoCollisionTest = false;
    // 이 액터의 기본 컴포넌트를 만든다. 부품 생성 뒤 장면 부착·재질·충돌 설정이 이어지는지 확인한다.
    Camera = CreateDefaultSubobject<UCameraComponent>(TEXT("FollowCamera"));
    Camera->SetupAttachment(Arm);
}
// 【함수 역할】액터가 게임 월드에서 실행을 시작할 때 엔진이 호출한다. 생성자에서 부품을 만든 뒤 실제 월드·플레이어·입력과 연결하는 초기 준비 단계다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabTerrainWalker::BeginPlay()
{
    // 부모 클래스의 기본 처리를 먼저/함께 실행한다. 자식 클래스의 추가 작업만으로 엔진 기본 동작을 대체하지 않는다.
    Super::BeginPlay();
    ResetWalk();
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
        InputComponent->BindKey(EKeys::W, IE_Pressed, this, &AFeatureLabTerrainWalker::WalkForward);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::S, IE_Pressed, this,
                                &AFeatureLabTerrainWalker::WalkBackward);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::P, IE_Pressed, this, &AFeatureLabTerrainWalker::StopWalking);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::R, IE_Pressed, this, &AFeatureLabTerrainWalker::ResetWalk);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::C, IE_Pressed, this, &AFeatureLabTerrainWalker::CycleView);
    }
}
// 【함수 역할】매 갱신 시점에 상태를 확인하고 동작을 진행한다. DeltaSeconds는 이번 갱신까지 지난 시간이며, 함수가 1초에 정확히 60번 불린다고 가정하지 않는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabTerrainWalker::Tick(float DeltaSeconds)
{
    // 부모 클래스의 기본 처리를 먼저/함께 실행한다. 자식 클래스의 추가 작업만으로 엔진 기본 동작을 대체하지 않는다.
    Super::Tick(DeltaSeconds);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!bTerrainPCGReady)
    {
        FHitResult Hit;
        FCollisionQueryParams Params(SCENE_QUERY_STAT(FeatureLabTerrainReady), true, this);
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (GetWorld()->LineTraceSingleByChannel(Hit, FVector(400, 0, 160), FVector(400, 0, 800),
                                                 ECC_Visibility, Params) &&
            Hit.Component.IsValid() &&
            Hit.Component->GetClass()->GetName() == TEXT("MeshPartitionCollisionComponent"))
        {
            // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
            for (TActorIterator<AActor> It(GetWorld()); It; ++It)
                // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
                if (It->ActorHasTag(TEXT("FeatureLab_11")))
                    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
                    if (auto *PCG = It->GetComponentByClass<UPCGComponent>())
                    {
                        PCG->GenerateLocal(true);
                        bTerrainPCGReady = true;
                        ++RuntimePCGRefreshCount;
                    }
        }
    }
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (bWalking)
    {
        AddMovementInput(FVector(0, Direction, 0), 1, true);
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (Direction * GetActorLocation().Y > 1950)
            StopWalking();
    }
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (GEngine)
        GEngine->AddOnScreenDebugMessage(
            reinterpret_cast<uint64>(this), 0, FColor::Green,
            TEXT(
                "Mesh Terrain: W walk / S return / P stop / R reset / C overview-cave-follow. Edit CaveTool and OverhangTool outside Play, then rebuild."));
}
// 【함수 역할】이름은 WalkForward이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabTerrainWalker::WalkForward()
{
    Direction = 1;
    bWalking = true;
}
// 【함수 역할】이름은 WalkBackward이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabTerrainWalker::WalkBackward()
{
    Direction = -1;
    bWalking = true;
}
// 【함수 역할】이름은 StopWalking이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabTerrainWalker::StopWalking()
{
    bWalking = false;
    ConsumeMovementInputVector();
    GetCharacterMovement()->StopMovementImmediately();
    GetCharacterMovement()->ClearAccumulatedForces();
}
// 【함수 역할】이전 이동 입력과 속도를 정지하고 동굴 입구의 기준 위치로 이동한다. 이후 바닥 상태는 CharacterMovement가 다시 판단한다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabTerrainWalker::ResetWalk()
{
    StopWalking();
    Direction = 1;
    ++ResetCount;
    // 액터 위치를 바꾼다. 별도 이동 시스템이 가진 속도·예측 상태 초기화까지 자동으로 해결되는 것은 아니다.
    SetActorLocation(FVector(400, -1850, 90), false, nullptr, ETeleportType::TeleportPhysics);
    SetActorRotation(FRotator(0, 90, 0));
    GetCharacterMovement()->SetMovementMode(MOVE_Falling);
}
// 【함수 역할】현재 선택 상태를 다음 상태로 바꾸고 결과에 반영한다. 켬·끔 전환인지 여러 선택지 순환인지 조건문을 따라 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabTerrainWalker::CycleView()
{
    View = (View + 1) % 3;
    // 【함수 역할】이후 작업에 사용할 객체나 값을 찾는다. 찾지 못했을 때 빈 참조가 반환될 수 있으므로 호출하는 쪽의 검사도 필요하다.
    // 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (auto *PC = UGameplayStatics::GetPlayerController(this, 0))
    {
        AActor *Target = View == 0 ? OverviewCamera.Get() : View == 1 ? CaveCamera.Get() : this;
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (Target)
            PC->SetViewTarget(Target);
    }
}
// 【함수 역할】현재 객체와 실행 결과를 읽어 검증용 자료로 반환한다. 결과를 만드는 함수와 결과를 측정하는 함수를 구분해서 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
FString AFeatureLabTerrainWalker::CaptureMovement() const
{
    auto O = MakeShared<FJsonObject>();
    auto Vec = [](const FVector &P) {
        TArray<TSharedPtr<FJsonValue>> V;
        V.Add(MakeShared<FJsonValueNumber>(P.X));
        V.Add(MakeShared<FJsonValueNumber>(P.Y));
        V.Add(MakeShared<FJsonValueNumber>(P.Z));
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return V;
    };
    O->SetArrayField(TEXT("location"), Vec(GetActorLocation()));
    O->SetArrayField(TEXT("velocity"), Vec(GetVelocity()));
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetBoolField(TEXT("walking_requested"), bWalking);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("direction"), Direction);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("movement_mode"), GetCharacterMovement()->MovementMode);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetBoolField(TEXT("on_walkable_floor"),
                    GetCharacterMovement()->CurrentFloor.IsWalkableFloor());
    O->SetArrayField(TEXT("floor_normal"),
                     Vec(GetCharacterMovement()->CurrentFloor.HitResult.ImpactNormal));
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("reset_count"), ResetCount);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("view"), View);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("runtime_pcg_refresh_count"), RuntimePCGRefreshCount);
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return TerrainJson(O);
}
```

<a id="source-source-mutablesample-featurelabterrain-h"></a>

### FeatureLabTerrain.h

```cpp
// 파일 역할: 11번 실제 입체 지형의 제작·충돌·PCG 연결과 워커 이동
// 클래스=작업 종류, 객체=실제 한 개, 포인터(* 또는 TObjectPtr)=다른 객체를 가리키는 참조.
// nullptr은 대상 없음, bool은 참/거짓, TArray는 순서 있는 목록, FString은 문자열이다.
// WITH_EDITOR 구간은 에디터 빌드에서만 사용하는 코드다. 원본과의 토큰 비교 결과는 code-validation.json에 기록한다.

#pragma once
#include "CoreMinimal.h"
#include "GameFramework/Character.h"
#include "FeatureLabTerrain.generated.h"
class UCameraComponent;
class USpringArmComponent;
// 아래 클래스 또는 구조체를 언리얼이 인식하도록 선언한다. 일반 C++ 선언에 엔진 등록 정보를 덧붙인 것이다.
UCLASS()
class MUTABLESAMPLE_API AFeatureLabTerrainWalker : public ACharacter
{
    // 언리얼 헤더 도구가 필요한 보조 코드를 연결하는 매크로다. 함수 본문을 직접 작성하는 자리가 아니다.
    GENERATED_BODY()
  public:
    AFeatureLabTerrainWalker();
    virtual void BeginPlay() override;
    virtual void Tick(float DeltaSeconds) override;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, Category = "FeatureLab") TObjectPtr<AActor> OverviewCamera;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, Category = "FeatureLab") TObjectPtr<AActor> CaveCamera;
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void WalkForward();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void WalkBackward();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void StopWalking();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, CallInEditor, Category = "FeatureLab") void ResetWalk();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void CycleView();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") FString CaptureMovement() const;

  private:
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY() TObjectPtr<USpringArmComponent> Arm;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY() TObjectPtr<UCameraComponent> Camera;
    bool bWalking = false;
    float Direction = 1;
    int32 View = 0;
    int32 ResetCount = 0;
    bool bTerrainPCGReady = false;
    int32 RuntimePCGRefreshCount = 0;
};
```
