

조명이 켜진 화면만 보고는 어떤 렌더링 경로가 쓰였는지 알기 어렵다. 이번에는 작은 방 안에 여러 Rect Light를 놓고, 조명 수와 간접광 모드를 바꾸며 실제 화면과 GPU 처리 기록을 함께 확인했다.

Rect Light는 면에서 빛이 나오는 조명이다. 직접광은 조명에서 물체로 바로 도달하는 빛, 간접광은 벽과 바닥 등에 반사되어 도달하는 빛이다. MegaLights와 Lumen 비교를 읽기 전에 이 둘을 나눠 두면 좋다.

![여러 동적 조명이 있는 비교 장면](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/13/result.png)

## 같은 방에서 조건 하나씩 바꾸기

1. `Content → FeatureLab → Maps → FL_13_DynamicLighting`을 연다.
2. **▶ Play**를 누른 뒤 게임 영역을 클릭한다.
3. **1**로 MegaLights를 켜고 끈다.
4. **2**로 Lumen High와 Lite를 바꾼다. **3**은 GI를 끄는 비교 조건이다. GI는 전역 조명, 여기서는 간접광 계산을 포함하는 설정이다.
5. **D**로 조명 수를 16개와 64개 사이에서 바꾼다.
6. **B**로 차폐물 조건을 바꾸고 **P**로 조명을 움직인다.
7. **R**로 High·16개 조명의 기준으로 복귀한다.

## 반사 구를 둔 이유

방 안에는 흰 물체와 반사 구를 함께 놓았다. 흰 물체로는 밝기와 그림자를 보고, 반사 구로는 조명의 위치와 수 변화가 화면에 반영되는지 확인하려고 했다. 카메라를 고정해야 조건을 바꿨을 때 같은 부분을 비교할 수 있다.

**■ Stop** 후 Outliner에서 `FeatureLabLightingActor` 계열의 실험 액터를 선택하면, 디테일에서 장면 구성과 연결을 볼 수 있다. 실제 조명과 카메라 설정 생성은 C++ 클래스가 맡는다. 존재하지 않는 블루프린트 이벤트 그래프를 따로 찾아 만들 필요는 없다.

![조명 실험을 선택한 에디터](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/13/settings.png)

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
| `MegaLights` | 많은 조명을 다루는 렌더링 기능. 사진의 체크는 프로젝트 기본값이다. |
| `MegaLights - High Quality Translucency` | 반투명 표면에 적용할 고품질 MegaLights 처리 옵션. |
| `Lumen / Global Illumination` | 간접광을 계산하는 시스템 / 물체 사이에 반사돼 퍼지는 빛. |
| `Lumen Lite` | 이번 비교에서 사용한 가벼운 간접광 경로. |
| `High / Lite / Off` | 높은 품질 조건 / 가벼운 조건 / 간접광 끄기. |
| `Post Process` | 카메라에 적용하는 화면 후처리 설정. |
| `Rect Light / Movable` | 사각 면 광원 / 실행 중 움직이거나 바뀔 수 있는 조명 상태. |
| `Occluder / Blocker` | 빛이나 시야를 가리는 물체. |
| `ScreenProbeGather / IrradianceFieldGather` | 이번 기록에서 High / Lite 경로를 확인할 때 사용한 실제 GPU 패스 이름. |


## 프로젝트 전체를 한꺼번에 바꾸지 않았다

MegaLights 비교는 이 방의 카메라·뷰 설정을 사용한다. 프로젝트 전체의 설정을 무조건 켜서 모든 기존 장면의 조명을 바꾸는 방식과 구분했다. 코드에서 어떤 설정이 해당 카메라에 적용되는지 확인한 뒤 비교했다.

Lumen High와 Lite도 화면의 이름만 바꾸지 않았다. 실제 GPU 기록에서 High는 `LumenScreenProbeGather`, Lite는 `LumenIrradianceFieldGather` 경로가 나타나는지 확인했다. 패스(Pass)는 화면을 완성하기 위해 GPU가 수행하는 처리 단계다.

GI를 끈 조건에서는 두 Gather 경로가 나타나지 않는지 확인했다. 이름만 다른 버튼을 만들어 같은 결과를 재생하는 구성을 피하려는 검사다.

![High와 Lite의 실제 화면 비교](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/13/gi-compare.gif)

*각 조건의 실제 캡처를 번갈아 표시한 비교 GIF다. 연속 카메라 녹화가 아니다. 개별 GPU 측정 당시의 화면이며 최종 통합 실행본에서도 표시와 모드 전환을 재검사했다.*

## 조명 수를 늘린 다음에는 그림자와 반사도 본다

64개 조건은 그림자가 있는 실제 이동식 조명을 사용했다. 조명 수만 숫자로 늘리고 일부를 꺼 두는 방식이 아니었다. 반사 구에서 빛의 수와 위치를 보고, 차폐물을 켰다 꺼서 가려지는 부분이 달라지는지 확인했다.

106개 개별 확인 항목에는 런타임 상태, GPU 프로파일, 키 입력, 저장 후 재개가 포함된다. 프로파일은 에디터 PIE의 단일 프레임 기록이다. PIE는 에디터 안에서 게임을 실행하는 모드다.

## ‘몇 배 빨라졌다’는 결론은 내리지 않았다

이번 기록에는 30fps 상한과 에디터 오버헤드가 있었다. 같은 패스 시간이 중첩 표시될 수도 있다. 이 조건의 숫자를 더해서 완성 게임의 FPS를 예측하거나, 모든 장면에서 두 배 빠르다고 결론 내릴 수는 없다.

이 실험의 목적은 **정말 다른 경로가 작동하는지, 화면이 변하는지, 처음 상태로 돌아오는지** 확인하는 것이었다. 최종 Substrate 설정을 적용한 뒤에도 방과 재질, 모드 전환을 Windows 실행본에서 다시 봤다.

전체 구현과 자세한 주석: [FeatureLabRendering.cpp](#source-source-mutablesample-featurelabrendering-cpp), [헤더](#source-source-mutablesample-featurelabrendering-h). 장면 생성: [lab_build_lighting_scene.py](#source-lab-lab-build-lighting-scene-py).


사진의 MegaLights 체크는 프로젝트의 기본값이다. 이번 비교 액터는 카메라의 Post Process에서 MegaLights 사용 여부를 별도로 전환한다. 사진에서 기본값이 꺼진 것과 실제 비교 장면의 조명 처리 상태를 함께 읽는다.

<!-- korean-ui-explanations -->


<a id="code-index"></a>

## 이 장면을 만든 코드

아래는 제작과 검증에 사용한 전체 코드에 한국어 주석을 더한 설명본이다. `.py`는 언리얼 에디터에서 실행하는 제작·검사 코드, `.cpp`와 `.h`는 프로젝트에 넣어 빌드하는 코드다. 파일마다 첫 주석에 역할과 입력 조건을 적었다.


<a id="source-lab-lab-build-lighting-scene-py"></a>

### lab_build_lighting_scene.py

```python
# 파일 역할: 에셋·그래프·장면을 구성하는 제작 작업. 이미 있는 원본을 대상으로 재실행해도 되는지 가드 조건부터 읽는다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Maps/FL_13_DynamicLighting
#   /Game/FeatureLab/Lighting/
#   /Game/FeatureLab/Lighting
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
path = "/Game/FeatureLab/Maps/FL_13_DynamicLighting"
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world().get_name() != 'FL_13_DynamicLighting' 작업할 맵을 연다. 현재 맵과 다른 맵이므로 실행 중인 PIE를 먼저 끝내는지 확인한다.
if (
    unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world().get_name()
    != "FL_13_DynamicLighting"
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
    item.tags = ["FeatureLab_Owned", "FeatureLab_13"]
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return item


# 함수 material: 이름은 material이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: name, color, metal, roughness 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
def material(name, color, metal=0.0, roughness=0.65):
    p = "/Game/FeatureLab/Lighting/" + name
    # 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
    item = lib.load_asset(p)
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not item 지정한 경로·이름·종류로 새 에셋을 만든다. 같은 이름의 원본이 있는지 검사하는 코드와 함께 읽는다.
    if not item:
        # 지정한 경로·이름·종류로 새 에셋을 만든다. 같은 이름의 원본이 있는지 검사하는 코드와 함께 읽는다.
        item = unreal.AssetToolsHelpers.get_asset_tools().create_asset(
            name, "/Game/FeatureLab/Lighting", unreal.Material, unreal.MaterialFactoryNew()
        )
        node = unreal.MaterialEditingLibrary.create_material_expression(
            item, unreal.MaterialExpressionConstant3Vector, -300, 0
        )
        # 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 constant이다.
        node.set_editor_property(
            "constant", unreal.LinearColor(r=color[0], g=color[1], b=color[2], a=1)
        )
        unreal.MaterialEditingLibrary.connect_material_property(
            node, "", unreal.MaterialProperty.MP_BASE_COLOR
        )
        # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 (value, prop, y)의 값이 매번 바뀐다. 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 r이다.
        for value, prop, y in [
            (roughness, unreal.MaterialProperty.MP_ROUGHNESS, 100),
            (metal, unreal.MaterialProperty.MP_METALLIC, 200),
        ]:
            scalar = unreal.MaterialEditingLibrary.create_material_expression(
                item, unreal.MaterialExpressionConstant, -300, y
            )
            scalar.set_editor_property("r", value)
            unreal.MaterialEditingLibrary.connect_material_property(scalar, "", prop)
        unreal.MaterialEditingLibrary.recompile_material(item)
        # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
        assert lib.save_loaded_asset(item, False)
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return item


white = material("M_LabRoomWhite", (0.7, 0.7, 0.7))
red = material("M_LabBounceRed", (0.75, 0.025, 0.015))
green = material("M_LabBounceGreen", (0.02, 0.55, 0.05))
metal = material("M_LabMirror", (0.6, 0.65, 0.7), 1.0, 0.12)


def mesh(label, position, scale, mat, shape="Cube"):
    item = actor(unreal.StaticMeshActor, label, position)
    item.static_mesh_component.set_static_mesh(lib.load_asset("/Engine/BasicShapes/" + shape))
    item.static_mesh_component.set_material(0, mat)
    item.set_actor_scale3d(unreal.Vector(*scale))
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return item


mesh("FL13_Floor", (0, 0, -15), (16, 16, 0.3), white)
mesh("FL13_BackWall", (0, 800, 300), (16, 0.3, 6), white)
mesh("FL13_LeftWall", (-800, 0, 300), (0.3, 16, 6), red)
mesh("FL13_RightWall", (800, 0, 300), (0.3, 16, 6), green)
blocker = mesh("FL13_ShadowBlocker", (0, 100, 190), (1.8, 1.8, 3.8), white)
mesh("FL13_MetalSphere", (-350, 0, 90), (1.8, 1.8, 1.8), metal, "Sphere")
mesh("FL13_WhiteSphere", (350, 0, 90), (1.8, 1.8, 1.8), white, "Sphere")
controller = actor(unreal.FeatureLabLightingActor, "FL13_Lighting", (0, 0, 0))
controller.set_editor_property("occluder", blocker)
controller.prepare_lighting()
camera = controller.get_editor_property("camera")
pp = camera.get_editor_property("post_process_settings")
# 여러 속성을 이름:값 사전으로 한 번에 설정한다. 각 항목이 개별 설정과 대응한다.
pp.set_editor_properties(
    {
        "override_auto_exposure_min_brightness": True,
        "override_auto_exposure_max_brightness": True,
        "auto_exposure_min_brightness": 5.0,
        "auto_exposure_max_brightness": 5.0,
        "override_auto_exposure_bias": True,
        "auto_exposure_bias": 0.0,
    }
)
camera.set_editor_property("post_process_settings", pp)
camera.set_relative_location(unreal.Vector(0, -2100, 850), False, False)
camera.set_relative_rotation(
    unreal.MathLibrary.find_look_at_rotation(
        unreal.Vector(0, -2100, 850), unreal.Vector(0, 50, 200)
    ),
    False,
    False,
)
start = actor(unreal.PlayerStart, "FL13_ViewerStart", (0, -2100, 850))
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
    "status": "scene_saved_validation_pending",
    "map": path,
    "lighting": json.loads(controller.capture_lighting()),
    "rendering": json.loads(unreal.FeatureLabRuntimeLibrary.inspect_lab_rendering()),
    "controls": {
        "1": "MegaLights on/off",
        "2": "Lumen High/Lite",
        "3": "GI disabled comparison",
        "D": "16/64 shadowed area lights",
        "B": "Occluder visibility",
        "P": "Dynamic light motion",
        "R": "Reset",
    },
}
(root / "Evidence/case13-lighting-scene.json").write_text(
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

<a id="source-lab-lab-test-lighting-runtime-py"></a>

### lab_test_lighting_runtime.py

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
    a for a in unreal.ObjectIterator(unreal.FeatureLabLightingActor) if a.get_world() == world
)
assert getattr(builtins, "_fl13_runtime", {}).get("status") != "running"
phases = [
    "high16_mega_on",
    "high16_mega_off",
    "high64_mega_on",
    "high64_mega_off",
    "lite16_mega_on",
    "gi_off16_mega_on",
    "blocker_off16_mega_on",
    "moving16_mega_on",
    "reset",
]
state = {
    "status": "running",
    "phase": 0,
    "subphase": "warmup",
    "started": time.time(),
    "phase_time": unreal.GameplayStatics.get_time_seconds(world),
    "checks": [],
    "snapshots": {},
    "captures": {},
    "handle": None,
    "gpu_log": str(
        max((root / "Evidence").glob("graphical-editor-*.log"), key=lambda p: p.stat().st_mtime)
    ),
}
builtins._fl13_runtime = state
target = root / "Evidence/case13-runtime-validation.json"
old = {
    name: unreal.SystemLibrary.get_console_variable_float_value(name)
    for name in ["r.ProfileGPU.ShowUI", "r.ProfileGPU.ThresholdPercent"]
}
for name, value in [("r.ProfileGPU.ShowUI", 0), ("r.ProfileGPU.ThresholdPercent", 0)]:
    unreal.SystemLibrary.execute_console_command(world, name + " " + str(value))


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
    controller.reset_lighting()
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 (name, value)의 값이 매번 바뀐다.
    for name, value in old.items():
        unreal.SystemLibrary.execute_console_command(world, name + " " + str(value))
    write()


# 함수 enter: 이름은 enter이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: name
def enter(name):
    controller.reset_lighting()
    if "64" in name:
        controller.toggle_density()
    if name.endswith("mega_off"):
        controller.toggle_mega_lights()
    if name.startswith("lite"):
        controller.toggle_gi()
    if name.startswith("gi_off"):
        controller.disable_gi()
    if name.startswith("blocker_off"):
        controller.toggle_occluder()
    if name.startswith("moving"):
        controller.toggle_motion()
    state["subphase"] = "warmup"
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
        if time.time() - state["started"] > 240:
            raise TimeoutError("Lighting runtime validation timed out")
        now = unreal.GameplayStatics.get_time_seconds(world)
        name = phases[state["phase"]]
        if state["subphase"] == "warmup":
            if now - state["phase_time"] < (6 if state["phase"] == 0 else 3):
                # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
                return
            unreal.log("FL13_PROFILE_BEGIN " + name)
            unreal.SystemLibrary.execute_console_command(world, "ProfileGPU")
            state["subphase"] = "profile"
            state["phase_time"] = now
            # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
            return
        if now - state["phase_time"] < 1:
            # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
            return
        unreal.log("FL13_PROFILE_END " + name)
        # JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
        snap = json.loads(controller.capture_lighting())
        snap["rendering"] = json.loads(unreal.FeatureLabRuntimeLibrary.inspect_lab_rendering())
        snap["lumen_indirect_allowed"] = unreal.SystemLibrary.get_console_variable_int_value(
            "r.Lumen.DiffuseIndirect.Allow"
        )
        snap["mega_hardware_tracing"] = unreal.SystemLibrary.get_console_variable_int_value(
            "r.MegaLights.HardwareRayTracing"
        )
        snap["light_heights"] = [
            c.get_editor_property("relative_location").z
            for c in controller.get_editor_property("lights")
        ]
        state["snapshots"][name] = snap
        expected_lights = 64 if "64" in name else 16
        quality = 1 if name.startswith("lite") else 0 if name.startswith("gi_off") else 2
        check(
            name + ": actual shadowed area-light population",
            snap["visible_lights"] == expected_lights
            and snap["shadow_casting_lights"] == expected_lights,
            expected_lights,
        )
        check(
            name + ": MegaLights camera request switches",
            snap["mega_lights_requested_in_camera"] != name.endswith("mega_off"),
        )
        check(
            name + ": hardware ray tracing available and enabled",
            snap["rendering"]["rhi_supports_ray_tracing"]
            and snap["rendering"]["r.RayTracing"] == 1
            and snap["mega_hardware_tracing"] == 1,
        )
        check(
            name + ": GI quality and true gather path match",
            snap["gi_quality"] == quality
            and snap["rendering"]["sg.GlobalIlluminationQuality"] == quality
            and snap["final_gather_method"] == (0 if quality == 1 else 1),
            snap["rendering"],
        )
        check(
            name + ": actual indirect-lighting enable state",
            snap["lumen_indirect_allowed"] == (0 if quality == 0 else 1),
            snap["lumen_indirect_allowed"],
        )
        if name.startswith("moving"):
            check(
                "moving lights change actual component heights",
                snap["motion_time"] > 1
                and max(snap["light_heights"]) - min(snap["light_heights"]) > 80,
            )
        if name.startswith("blocker_off"):
            check("occluder actually hidden", not snap["occluder_visible"])
        # JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
        image = json.loads(
            unreal.FeatureLabRuntimeLibrary.capture_lab_viewport("case13-" + name + ".png")
        )
        check(name + ": actual GPU frame saved", image.get("saved"), image)
        state["captures"][name] = image
        if name == "reset":
            check(
                "reset restores original complete lighting setup",
                snap["visible_lights"] == 16
                and snap["mega_lights_requested_in_camera"]
                and snap["gi_quality"] == 2
                and snap["occluder_visible"]
                and not snap["light_motion"],
            )
            finish("controls_passed_gpu_profile_analysis_pending")
            # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
            return
        state["phase"] += 1
        enter(phases[state["phase"]])
    except Exception:
        state["error"] = traceback.format_exc()
        finish("failed")
    finally:
        state["in_tick"] = False


enter(phases[0])
state["handle"] = unreal.register_slate_post_tick_callback(tick)
write()
RESULT = {"status": "running", "report": str(target), "phases": phases}
```

<a id="source-lab-lab-verify-lighting-roundtrip-py"></a>

### lab_verify_lighting_roundtrip.py

```python
# 파일 역할: 완성 결과를 실제 값과 비교하는 검증 작업. 생성 코드와 검사 코드를 구분한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Lighting/

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
target = root / "Evidence/case13-roundtrip-validation.json"
controller = next(
    a for a in unreal.ObjectIterator(unreal.FeatureLabLightingActor) if a.get_world() == world
)
# JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
snap = json.loads(controller.capture_lighting())
checks = [] if not game else json.loads(target.read_text(encoding="utf-8-sig"))["checks"]


# 함수 check: 이름은 check이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: name, value, actual 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
def check(name, value, actual=None):
    checks.append({"name": name, "passed": bool(value), "actual": actual})


# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not game 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 camera이다.
if not game:
    check(
        "Fresh process reopens saved lighting map", world.get_name() == "FL_13_DynamicLighting"
    )
    # 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 lights이다.
    check(
        "All64 area-light components persist",
        len(controller.get_editor_property("lights")) == 64,
    )
    check(
        "Initial16 shadow-casting lights persist",
        snap["visible_lights"] == 16 and snap["shadow_casting_lights"] == 16,
    )
    camera = controller.get_editor_property("camera")
    location = camera.get_editor_property("relative_location")
    # 차이의 부호를 없애 크기만 비교한다. 오차 허용 범위 검사에 자주 사용한다.
    check(
        "Front camera position persists",
        abs(location.x) < 0.01
        and abs(location.y + 2100) < 0.01
        and abs(location.z - 850) < 0.01,
    )
    pp = camera.get_editor_property("post_process_settings")
    # 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 override_auto_exposure_min_brightness이다.
    check(
        "Fixed comparison exposure persists",
        pp.get_editor_property("override_auto_exposure_min_brightness")
        and pp.get_editor_property("auto_exposure_min_brightness") == 5
        and pp.get_editor_property("auto_exposure_max_brightness") == 5,
    )
    # 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 override_b_mega_lights이다.
    check(
        "MegaLights override persists",
        pp.get_editor_property("override_b_mega_lights")
        and pp.get_editor_property("mega_lights"),
    )
    # 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 occluder이다.
    check(
        "Occluder reference persists",
        bool(controller.get_editor_property("occluder")) and snap["occluder_visible"],
    )
    check(
        "Four owned material assets persist",
        all(
            unreal.EditorAssetLibrary.does_asset_exist("/Game/FeatureLab/Lighting/" + n)
            for n in ["M_LabRoomWhite", "M_LabBounceRed", "M_LabBounceGreen", "M_LabMirror"]
        ),
    )
else:
    check(
        "Saved scene starts real High-quality Lumen",
        (
            snap["gi_quality"] == 2
            and snap["final_gather_method"] == 1
            and snap["rendering"]["r.RayTracing"] == 1
            if "rendering" in snap
            else snap["gi_quality"] == 2 and snap["final_gather_method"] == 1
        ),
    )
    controller.toggle_gi()
    # JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
    lite = json.loads(controller.capture_lighting())
    check(
        "Lumen Lite resumes after restart",
        lite["gi_quality"] == 1 and lite["final_gather_method"] == 0,
    )
    controller.toggle_mega_lights()
    # JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
    check(
        "MegaLights switch resumes after restart",
        not json.loads(controller.capture_lighting())["mega_lights_requested_in_camera"],
    )
    controller.reset_lighting()
    # JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
    reset = json.loads(controller.capture_lighting())
    check(
        "Full reset resumes after restart",
        reset["visible_lights"] == 16
        and reset["mega_lights_requested_in_camera"]
        and reset["gi_quality"] == 2
        and reset["occluder_visible"]
        and not reset["light_motion"],
    )
    # JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
    capture = json.loads(
        unreal.FeatureLabRuntimeLibrary.capture_lab_viewport("case13-reopened.png")
    )
    check("Reopened scene produces an actual GPU image", capture.get("saved"))
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
RESULT = {
    "status": (
        ("passed" if game else "editor_passed_runtime_pending")
        if all(c["passed"] for c in checks)
        else "failed"
    ),
    "checks": checks,
    "rendering": json.loads(unreal.FeatureLabRuntimeLibrary.inspect_lab_rendering()),
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
