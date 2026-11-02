

캐릭터의 옷을 바꿨는데 몸이 뚫고 나오거나 애니메이션이 멈추면, 외형 변경 버튼만 만든 셈이 된다. 이번에는 Mutable로 외형을 다시 생성하고 GASP의 애니메이션과 Mover 이동에 연결했다.

Mutable은 선택한 설정에 맞춰 캐릭터 메시와 재질 등을 조합하는 도구다. 이번에는 공식 샘플의 `CO_Character`, `COI_Cyborg`, `COI_Weapon`을 사용했다. 샘플 재료를 사용한 부분과 이동에 연결한 코드를 구분했다.

![Mutable 캐릭터의 실제 실행 화면](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/07/result.png)

## 먼저 바꿔 볼 순서

1. `Content → FeatureLab → Maps → FL_07_MutableMover`를 연다.
2. **▶ Play**를 누르고 게임 영역을 클릭한다.
3. **1**로 의상, **2**로 체형, **3**으로 색, **4**로 무기를 바꾼다.
4. 한 항목을 바꾼 뒤 결과가 반영될 때까지 잠시 기다린다. 메시 생성은 단순한 색상 숫자 변경보다 작업량이 크다.
5. **WASD**로 이동하고 **Space**로 점프한다. 바뀐 모습에서도 애니메이션이 이어지는지 본다.
6. **R**을 눌러 기본 외형으로 돌아온다. 이 장면의 R은 이동 위치 초기화 버튼이 아니라 외형 초기화다.
7. **■ Stop**을 누르고 에셋을 살펴본다.

## CO와 COI는 무엇이 다른가

콘텐츠 브라우저에서 `CO_Character`를 검색하고 연다. 이번 프로젝트에서는 `/Game/Character/CO_Character`를 사용한다. `CO`는 조합 규칙을 가진 Customizable Object, `COI`는 그 규칙에 넣을 선택값을 가진 인스턴스다. 규칙 파일과 선택 결과를 같은 파일로 생각하지 않으면 구조가 덜 복잡해진다.

![Mutable 에셋 검색 위치](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/07/folder.png)

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
| `Mutable / Customizable Object` | 여러 외형 조합으로 메시를 생성하는 기능 / 그 생성 규칙 에셋. |
| `Compile Only Selected` | 선택한 항목을 중심으로 컴파일하는 명령. |
| `Compile / Texture Memory Analyzer` | 생성 규칙 컴파일 / 텍스처 메모리 사용 분석 도구. |
| `Parameters` | 실행 중 바꿀 수 있도록 만든 선택값 목록. |
| `Jacket` | 상의·재킷 선택 매개변수 이름. |
| `Body Blend` | 몸 형태를 섞는 매개변수 이름. |
| `Base Color` | 기본 색 매개변수 이름. |
| `Barrels` | 무기 총열 선택 매개변수 이름. |
| `Preview Instance` | 현재 외형 조합을 미리 보는 인스턴스. |
| `CO_Character / COI_` | 이 샘플의 캐릭터 생성 규칙 / 그 규칙의 선택값을 가진 인스턴스 이름. |
| `Retarget` | 서로 다른 뼈대에 동작을 맞춰 전달하는 처리. |
| `Capsule` | 캐릭터 이동에 사용하는 캡슐 모양 충돌체. |


![조합 규칙을 보는 실제 Mutable 편집기](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/07/settings.png)

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
| `Mutable / Customizable Object` | 여러 외형 조합으로 메시를 생성하는 기능 / 그 생성 규칙 에셋. |
| `Compile Only Selected` | 선택한 항목을 중심으로 컴파일하는 명령. |
| `Compile / Texture Memory Analyzer` | 생성 규칙 컴파일 / 텍스처 메모리 사용 분석 도구. |
| `Parameters` | 실행 중 바꿀 수 있도록 만든 선택값 목록. |
| `Jacket` | 상의·재킷 선택 매개변수 이름. |
| `Body Blend` | 몸 형태를 섞는 매개변수 이름. |
| `Base Color` | 기본 색 매개변수 이름. |
| `Barrels` | 무기 총열 선택 매개변수 이름. |
| `Preview Instance` | 현재 외형 조합을 미리 보는 인스턴스. |
| `CO_Character / COI_` | 이 샘플의 캐릭터 생성 규칙 / 그 규칙의 선택값을 가진 인스턴스 이름. |
| `Retarget` | 서로 다른 뼈대에 동작을 맞춰 전달하는 처리. |
| `Capsule` | 캐릭터 이동에 사용하는 캡슐 모양 충돌체. |


조합 결과는 `선택값 → 생성 요청 → 실제 메시·재질·텍스처 생성 → 캐릭터에 적용` 순서로 흐른다. 생성 요청 직후에 옛 메시를 측정하면 바뀌지 않은 것처럼 보일 수 있다. 완료된 메시가 설치된 뒤 결과를 확인했다.

## 새 외형에 기존 움직임 연결하기

GASP 캐릭터에서 계산하는 움직임을 새 외형에 전달했다. 서로 다른 뼈대의 움직임을 맞추는 작업을 리타게팅이라고 한다. 외형이 바뀌어도 몸과 머리의 실제 생성 메시가 설치됐는지, 발 움직임이 이어지는지 확인했다.

충돌도 새 몸에 맞췄다. 이번 샘플의 생성 메시에는 완성형 래그돌 Physics Asset이 제공되는 구성이 아니었으므로, 이동에 쓰는 캡슐을 적용된 몸과 머리의 범위에 맞췄다. 캡슐은 캐릭터가 벽과 바닥에 부딪힐 때 사용하는 단순한 충돌 모양이다.

메시가 같은 객체 안에서 갱신되는 경우도 있어, 메시 교체뿐 아니라 경계 크기의 변화도 살폈다. 경계는 물건이 차지하는 공간을 감싸는 상자 범위다.

## 패키지에서 원래 마네킹이 뚫고 나온 문제

초기 실행본에서는 새 의상 사이로 원래 GASP 마네킹이 보였다. 새 Mutable 메시의 문제로 보기 쉬웠지만 원인은 원본 캐릭터 쪽에 남은 시각용 메시였다. 드라이버 역할의 메시 하나만 숨겨서는 충분하지 않았다.

최종 코드는 원본 Pawn이 가진 스켈레탈 메시 컴포넌트를 모두 찾아 화면에서 숨겼다. 다만 움직임 계산까지 멈추지 않도록 포즈 갱신은 유지했다. 새 Mutable 몸·머리·무기는 별도 액터의 컴포넌트이므로 표시된다.

핵심 함수는 `HideSourceVisuals()`다. [FeatureLabRuntime.cpp](#source-source-mutablesample-featurelabruntime-cpp)의 주석 설명본에서 ‘왜 화면은 숨기면서 포즈 갱신은 유지하는지’를 함께 설명했다.

## 초기화가 실제로 돌아가는지 확인하기

의상 변경 전 몸 정점은 42,483개, 다른 의상 조합은 65,702개였다. 무기의 삼각형 수도 달랐다. 버튼에 표시되는 이름만 바뀐 것이 아니라 실제 생성 결과가 바뀌는지 확인한 수치다.

R 이후에는 색상 파라미터와 생성 재질의 지문을 비교했다. 지문은 파일이나 데이터가 같은지 확인할 수 있도록 계산한 값이다. 기본 외형을 다시 만들었을 때 기준과 같은 재질 결과로 복구되는지 검사했다.

![외형 실험 장면의 연속 프레임](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/07/motion.gif)

## 다음에 같은 문제를 만나면

옷 밖으로 다른 몸이 보이면 새 메시만 보지 말고 원본 캐릭터의 컴포넌트 목록도 확인한다. 외형은 바뀌는데 걷지 않으면 애니메이션 원본과 리타게팅 대상을 확인한다. 벽에 파묻히면 보이는 표면 크기와 이동 캡슐이 같은 기준인지 본다.

전체 코드는 [FeatureLabRuntime.h](#source-source-mutablesample-featurelabruntime-h)와 [FeatureLabRuntime.cpp](#source-source-mutablesample-featurelabruntime-cpp)에 있다. 샘플 에셋의 그래프와 프로젝트에서 추가한 실행 코드는 [노드·블루프린트 안내](%EC%97%90%EB%94%94%ED%84%B0%20%ED%99%94%EB%A9%B4%EA%B3%BC%20%EA%B8%B0%EB%B3%B8%20%EC%9A%A9%EC%96%B4.md#node-basics)에서 구분해 정리했다.


위 GIF는 방향 입력을 넣기 전 기본 대기 상태의 연속 프레임이다. 이동·외형 변경·상호작용 입력의 결과와 반복 검사는 본문의 단계 및 연결한 검증 기록에서 확인한다.

<!-- korean-ui-explanations -->


<a id="code-index"></a>

## 이 장면을 만든 코드

아래는 제작과 검증에 사용한 전체 코드에 한국어 주석을 더한 설명본이다. `.py`는 언리얼 에디터에서 실행하는 제작·검사 코드, `.cpp`와 `.h`는 프로젝트에 넣어 빌드하는 코드다. 파일마다 첫 주석에 역할과 입력 조건을 적었다.


<a id="source-lab-lab-center-mutable-view-py"></a>

### lab_center_mutable_view.py

```python
# 파일 역할: EpicFeatureLab의 lab_center_mutable_view 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

from pathlib import Path
import json
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

assert Path(unreal.Paths.project_dir()).resolve().name == "EpicFeatureLab"
proof = Path(unreal.Paths.project_dir()) / "Evidence/case07-mutable-mover.json"
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: proof.exists() JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
if proof.exists():
    assert json.loads(proof.read_text(encoding="utf-8-sig")).get("status") not in [
        "running",
        "processing",
    ], "Wait for the Mutable movement test before changing the view"
# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert world
pawn = unreal.GameplayStatics.get_player_pawn(world, 0)
pc = unreal.GameplayStatics.get_player_controller(world, 0)
queued = unreal.FeatureLabRuntimeLibrary.teleport_mover(
    pawn, unreal.Vector(-800, 0, 95), unreal.Rotator(pitch=0, yaw=0, roll=0)
)
pc.set_control_rotation(unreal.Rotator(pitch=-10, yaw=180, roll=0))
RESULT = {"queued": queued, "camera": "front orbit for appearance inspection"}
```

<a id="source-lab-lab-fix-mutable-retarget-py"></a>

### lab_fix_mutable_retarget.py

```python
# 파일 역할: EpicFeatureLab의 lab_fix_mutable_retarget 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/Blueprints/RetargetedCharacters/ABP_GenericRetarget

import json
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

# ROOT: 프로젝트 루트 경로. 결과 파일을 어느 프로젝트에 쓰는지 정하는 기준이다.
ROOT = Path(unreal.Paths.project_dir()).resolve()
assert ROOT.name == "EpicFeatureLab"
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
assert not unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
actors = unreal.get_editor_subsystem(unreal.EditorActorSubsystem)
# 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
controller = next(
    a
    for a in actors.get_all_level_actors()
    if isinstance(a, unreal.FeatureLabMutableController)
)
cls = unreal.EditorAssetLibrary.load_blueprint_class(
    "/Game/Blueprints/RetargetedCharacters/ABP_GenericRetarget"
)
cdo = unreal.get_default_object(cls)
mapping = cdo.get_editor_property("IKRetargeter_Map")
rows = {str(key): str(value) for key, value in mapping.items()}
keys = [key for key, value in mapping.items() if "metahuman_nrw" in str(value).lower()]
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert len(keys) == 1, str(rows)
controller.body.set_editor_property("component_tags", [keys[0]])
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
assert unreal.get_editor_subsystem(unreal.LevelEditorSubsystem).save_current_level()
RESULT = {"retargeter_map": rows, "selected_component_tag": str(keys[0]), "saved": True}
(ROOT / "Evidence" / "case07-retarget-binding.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-inspect-mutable-py"></a>

### lab_inspect_mutable.py

```python
# 파일 역할: 현재 에셋·객체·실행 상태를 읽어 기록하는 관찰 작업.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

import json
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

# ROOT: 프로젝트 루트 경로. 결과 파일을 어느 프로젝트에 쓰는지 정하는 기준이다.
ROOT = Path(unreal.Paths.project_dir()).resolve()
assert ROOT.name == "EpicFeatureLab"
# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert world
rows = []
seen = set()
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 actor의 값이 매번 바뀐다.
for actor in unreal.GameplayStatics.get_all_actors_of_class(world, unreal.Actor):
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 component의 값이 매번 바뀐다.
    for component in actor.get_components_by_class(unreal.CustomizableSkeletalComponent):
        instance = component.get_customizable_object_instance()
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not instance or instance.get_path_name() in seen
        if not instance or instance.get_path_name() in seen:
            continue
        seen.add(instance.get_path_name())
        obj = instance.get_customizable_object()
        parameters = []
        # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 index의 값이 매번 바뀐다. 반복에 쓸 정수 순서를 만든다. 끝 값은 포함되지 않는다.
        for index in range(obj.get_parameter_count()):
            name = obj.get_parameter_name(index)
            kind = str(obj.get_parameter_type_by_name(name))
            row = {"name": name, "type": kind}
            if "INT" in kind.upper():
                # 반복에 쓸 정수 순서를 만든다. 끝 값은 포함되지 않는다.
                row.update(
                    value=instance.get_int_parameter_selected_option(name),
                    options=[
                        obj.get_enum_parameter_value(name, i)
                        for i in range(obj.get_enum_parameter_num_values(name))
                    ],
                )
            elif "FLOAT" in kind.upper():
                row["value"] = instance.get_float_parameter_selected_option(name)
            elif "BOOL" in kind.upper():
                row["value"] = instance.get_bool_parameter_selected_option(name)
            # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
            parameters.append(row)
        meshes = []
        # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 index의 값이 매번 바뀐다. 반복에 쓸 정수 순서를 만든다. 끝 값은 포함되지 않는다.
        for index in range(obj.get_component_count()):
            name = obj.get_component_name(index)
            mesh = instance.get_skeletal_mesh_component_skeletal_mesh(name)
            # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
            meshes.append(
                {"component": str(name), "mesh": mesh.get_path_name() if mesh else None}
            )
        # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
        rows.append(
            {
                "actor": actor.get_path_name(),
                "component": component.get_path_name(),
                "instance": instance.get_path_name(),
                "object": obj.get_path_name(),
                "generated": instance.has_any_skeletal_mesh(),
                "meshes": meshes,
                "parameters": parameters,
            }
        )
(ROOT / "Evidence" / "case07-mutable-inspection.json").write_text(
    json.dumps(rows, indent=2), encoding="utf-8"
)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = rows
```

<a id="source-lab-lab-inspect-mutable-parameters-py"></a>

### lab_inspect_mutable_parameters.py

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
actor = unreal.GameplayStatics.get_all_actors_of_class(
    world, unreal.FeatureLabMutableController
)[0]
instance = actor.get_character_instance()
obj = instance.get_customizable_object()
rows = []
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 index의 값이 매번 바뀐다. 반복에 쓸 정수 순서를 만든다. 끝 값은 포함되지 않는다.
for index in range(obj.get_parameter_count()):
    name = obj.get_parameter_name(index)
    kind = str(obj.get_parameter_type_by_name(name))
    entry = {"name": name, "type": kind}
    # 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다.
    try:
        if "COLOR" in kind.upper() or "VECTOR" in kind.upper():
            v = instance.get_vector_parameter_selected_option(name)
            entry["value"] = [v.get_editor_property(n) for n in ["X", "Y", "Z", "W"]]
        elif "INT" in kind.upper():
            entry["value"] = instance.get_int_parameter_selected_option(name)
        elif "BOOL" in kind.upper():
            entry["value"] = instance.get_bool_parameter_selected_option(name)
        elif "FLOAT" in kind.upper():
            entry["value"] = instance.get_float_parameter_selected_option(name)
    except Exception as exc:
        entry["error"] = str(exc)
    # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    rows.append(entry)
RESULT = {"object": obj.get_path_name(), "parameters": rows}
(Path(unreal.Paths.project_dir()) / "Evidence/case07-parameter-inventory.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-inspect-mutable-view-py"></a>

### lab_inspect_mutable_view.py

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
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert world
controller = unreal.GameplayStatics.get_all_actors_of_class(
    world, unreal.FeatureLabMutableController
)[0]
pawn = unreal.GameplayStatics.get_player_pawn(world, 0)
pc = unreal.GameplayStatics.get_player_controller(world, 0)
camera = pc.player_camera_manager
color = controller.get_character_instance().get_vector_parameter_selected_option("Base Color")
report = {
    "control_rotation_before": str(pc.get_control_rotation()),
    "pawn_rotation": str(pawn.get_actor_rotation()),
    "camera_location_before": list(camera.get_camera_location().to_tuple()),
    "camera_rotation_before": str(camera.get_camera_rotation()),
    "color_type": type(color).__name__,
    "color_text": color.export_text(),
    "color_fields": {},
}
for name in ["X", "Y", "Z", "W"]:
    # 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다.
    try:
        report["color_fields"][name] = color.get_editor_property(name)
    except Exception as exc:
        report["color_fields"][name] = str(exc)
pc.set_control_rotation(unreal.Rotator(pitch=-10, yaw=0, roll=0))
report["requested_rotation"] = str(pc.get_control_rotation())
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = report
(root / "Evidence" / "case07-view-inspection.json").write_text(
    json.dumps(report, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-open-mutable-gameplay-py"></a>

### lab_open_mutable_gameplay.py

```python
# 파일 역할: EpicFeatureLab의 lab_open_mutable_gameplay 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Maps/FL_07_MutableMover

import json
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
assert root.name == "EpicFeatureLab"
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
assert not unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
editor = unreal.get_editor_subsystem(unreal.LevelEditorSubsystem)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert editor.save_current_level()
path = "/Game/FeatureLab/Maps/FL_07_MutableMover"
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 작업할 맵을 연다. 현재 맵과 다른 맵이므로 실행 중인 PIE를 먼저 끝내는지 확인한다.
assert editor.load_level(path)
# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 편집 중인 월드를 얻는다. 게임 실행 월드와 다르므로 대상을 혼동하지 않는다.
world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world()
mode = world.get_world_settings().get_editor_property("default_game_mode")
# 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
controllers = [
    a
    for a in unreal.get_editor_subsystem(unreal.EditorActorSubsystem).get_all_level_actors()
    if isinstance(a, unreal.FeatureLabMutableController)
]
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert len(controllers) == 1
actor = controllers[0]
# 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
level_actors = list(
    unreal.get_editor_subsystem(unreal.EditorActorSubsystem).get_all_level_actors()
)
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 item의 값이 매번 바뀐다. 액터 방향을 바꾼다. 위치 이동과 구분한다.
for item in level_actors:
    if item.get_actor_label() == "FL07_PlayerStart":
        # 액터 방향을 바꾼다. 위치 이동과 구분한다.
        item.set_actor_rotation(unreal.Rotator(pitch=-10, yaw=0, roll=0), False)
    if item.get_actor_label() == "FL07_Sun":
        # 액터 방향을 바꾼다. 위치 이동과 구분한다.
        item.set_actor_rotation(unreal.Rotator(pitch=-35, yaw=180, roll=0), False)
    if item.get_actor_label() == "FL07_Sky":
        item.get_component_by_class(unreal.SkyLightComponent).set_intensity(1.5)
fills = [a for a in level_actors if a.get_actor_label() == "FL07_FrontFill"]
# 지정한 클래스의 실제 액터를 편집 장면에 만든다. 에셋 파일 생성과는 다르다.
fill = (
    fills[0]
    if fills
    else unreal.get_editor_subsystem(unreal.EditorActorSubsystem).spawn_actor_from_class(
        unreal.RectLight, unreal.Vector(-250, -250, 350)
    )
)
fill.set_actor_label("FL07_FrontFill")
fill.tags = ["FeatureLab_Owned", "FeatureLab_07"]
# 액터 방향을 바꾼다. 위치 이동과 구분한다.
fill.set_actor_rotation(
    unreal.MathLibrary.find_look_at_rotation(
        fill.get_actor_location(), unreal.Vector(-800, 0, 110)
    ),
    False,
)
light = fill.get_component_by_class(unreal.RectLightComponent)
light.set_intensity(200)
light.set_editor_property("source_width", 500.0)
light.set_editor_property("source_height", 400.0)
light.set_attenuation_radius(2200)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert editor.save_current_level()
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "map": path,
    "game_mode": mode.get_path_name() if mode else None,
    "controller": actor.get_path_name(),
    "source_pawn": actor.source_pawn.get_path_name() if actor.source_pawn else None,
    "character_template": actor.character_template.get_path_name(),
    "weapon_template": actor.weapon_template.get_path_name(),
}
(root / "Evidence" / "case07-gameplay-scene.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-peek-mutable-controls-py"></a>

### lab_peek_mutable_controls.py

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
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert world
controller = unreal.GameplayStatics.get_all_actors_of_class(
    world, unreal.FeatureLabMutableController
)[0]
character = controller.get_character_instance()
weapon = controller.get_weapon_instance()
pawn = unreal.GameplayStatics.get_player_pawn(world, 0)


# 함수 mesh_info: 이름은 mesh_info이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: component
def mesh_info(component):
    mesh = component.get_skeletal_mesh_asset()
    stats = unreal.FeatureLabRuntimeLibrary.inspect_mesh(component)
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return {
        "asset": mesh.get_path_name() if mesh else None,
        "vertices": stats.vertices,
        "triangles": stats.triangles,
        "materials": stats.materials,
        "bones": stats.bones,
        "bounds_extent": list(stats.bounds_extent.to_tuple()),
    }


color = character.get_vector_parameter_selected_option("Base Color") if character else None
report = {
    "character_updates": controller.character_updates,
    "weapon_updates": controller.weapon_updates,
    "character_instance": character.get_path_name() if character else None,
    "weapon_instance": weapon.get_path_name() if weapon else None,
    "jacket": character.get_int_parameter_selected_option("Jacket") if character else None,
    "body_blend": (
        character.get_float_parameter_selected_option("Body Blend") if character else None
    ),
    "color": [color.get_editor_property(n) for n in ["X", "Y", "Z", "W"]] if color else None,
    "barrel": weapon.get_int_parameter_selected_option("Barrels") if weapon else None,
    "body": mesh_info(controller.body),
    "head": mesh_info(controller.head),
    "weapon": mesh_info(controller.weapon),
    "capsule": list(controller.get_movement_capsule_size().to_tuple()),
    "pawn_location": list(pawn.get_actor_location().to_tuple()),
}
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = report
report["character_meshes_applied"] = controller.are_character_meshes_applied()
report["weapon_mesh_applied"] = controller.is_weapon_mesh_applied()
report["appearance_applications"] = controller.get_editor_property("AppearanceApplications")
report["expected_capsule"] = list(controller.get_expected_movement_capsule_size().to_tuple())
report["game_seconds"] = unreal.GameplayStatics.get_time_seconds(world)
report["active_colors"] = {}
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 name의 값이 매번 바뀐다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다.
for name in [
    "Base Color",
    "Color Cloth and Shoes",
    "Scifi Base Color",
    "Shoes Color 1",
    "Shoes Color 2",
]:
    value = character.get_vector_parameter_selected_option(name)
    report["active_colors"][name] = [value.get_editor_property(n) for n in ["X", "Y", "Z", "W"]]
(root / "Evidence" / "case07-keyboard-live.json").write_text(
    json.dumps(report, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-prepare-mutable-py"></a>

### lab_prepare_mutable.py

```python
# 파일 역할: EpicFeatureLab의 lab_prepare_mutable 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/Lobby/Lobby

import json
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
assert root.name == "EpicFeatureLab"
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
assert not unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
assert unreal.get_editor_subsystem(unreal.LevelEditorSubsystem).load_level("/Game/Lobby/Lobby")
# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 편집 중인 월드를 얻는다. 게임 실행 월드와 다르므로 대상을 혼동하지 않는다.
world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world()
mode = world.get_world_settings().get_editor_property("default_game_mode")
RESULT = {"map": world.get_path_name(), "game_mode": mode.get_path_name() if mode else None}
(root / "Evidence" / "case07-mutable-preparation.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-probe-mutable-textures-py"></a>

### lab_probe_mutable_textures.py

```python
# 파일 역할: EpicFeatureLab의 lab_probe_mutable_textures 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
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
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert world
actor = unreal.GameplayStatics.get_all_actors_of_class(
    world, unreal.FeatureLabMutableController
)[0]
report = {"status": "texture_probe", "components": []}
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 component의 값이 매번 바뀐다. 반복에 쓸 정수 순서를 만든다. 끝 값은 포함되지 않는다.
for component in [actor.body, actor.head, actor.weapon]:
    entry = {"component": component.get_name(), "materials": []}
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 index의 값이 매번 바뀐다. 반복에 쓸 정수 순서를 만든다. 끝 값은 포함되지 않는다.
    for index in range(component.get_num_materials()):
        material = component.get_material(index)
        info = {
            "slot": index,
            "material": material.get_path_name() if material else None,
            "textures": [],
            "vectors": {},
        }
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: material
        if material:
            # 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다.
            try:
                names = unreal.MaterialEditingLibrary.get_texture_parameter_names(material)
                # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 name의 값이 매번 바뀐다. 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
                for name in names:
                    texture = (
                        material.get_texture_parameter_value(name)
                        if isinstance(material, unreal.MaterialInstanceDynamic)
                        else unreal.MaterialEditingLibrary.get_material_instance_texture_parameter_value(
                            material, name
                        )
                    )
                    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: texture 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
                    if texture:
                        item = {
                            "parameter": str(name),
                            "texture": texture.get_path_name(),
                            "class": texture.get_class().get_name(),
                        }
                        # 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다.
                        try:
                            item.update(
                                width=texture.blueprint_get_size_x(),
                                height=texture.blueprint_get_size_y(),
                            )
                        except Exception as exc:
                            item["size_error"] = str(exc)
                        info["textures"].append(item)
                # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: isinstance(material, unreal.MaterialInstanceDynamic)
                if isinstance(material, unreal.MaterialInstanceDynamic):
                    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 name의 값이 매번 바뀐다.
                    for name in unreal.MaterialEditingLibrary.get_vector_parameter_names(
                        material
                    ):
                        v = material.get_vector_parameter_value(name)
                        info["vectors"][str(name)] = [v.r, v.g, v.b, v.a]
            except Exception as exc:
                info["error"] = str(exc)
        entry["materials"].append(info)
    report["components"].append(entry)
report["checks"] = {}
for component in report["components"]:
    textures = [
        t
        for m in component["materials"]
        for t in m["textures"]
        if t["texture"].startswith("/Engine/Transient.")
    ]
    report["checks"][component["component"] + "_has_generated_textures"] = bool(textures)
    report["checks"][component["component"] + "_generated_texture_sizes_valid"] = bool(
        textures
    ) and all(t.get("width", 0) > 0 and t.get("height", 0) > 0 for t in textures)
report["status"] = "passed" if all(report["checks"].values()) else "failed_checks"
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = report
(root / "Evidence" / "case07-generated-texture-probe.json").write_text(
    json.dumps(report, indent=2), encoding="utf-8"
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

<a id="source-lab-lab-test-collision-only-py"></a>

### lab_test_collision_only.py

```python
# 파일 역할: 완성 결과를 실제 값과 비교하는 검증 작업. 생성 코드와 검사 코드를 구분한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/Input/IA_Move

import json
import math
import time
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

# ROOT: 프로젝트 루트 경로. 결과 파일을 어느 프로젝트에 쓰는지 정하는 기준이다.
ROOT = Path(unreal.Paths.project_dir()).resolve()
assert ROOT.name == "EpicFeatureLab"
# 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
WORLD = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert WORLD
PAWN = unreal.GameplayStatics.get_player_pawn(WORLD, 0)
# 액터 위치를 바꾼다. 별도 이동 시뮬레이션이 소유한 상태까지 자동 초기화되는지는 확인해야 한다.
PAWN.set_actor_location(unreal.Vector(-800, 0, 95), False, True)
INPUT = next(
    obj
    for obj in unreal.ObjectIterator(unreal.EnhancedInputLocalPlayerSubsystem)
    if not obj.get_name().startswith("Default__")
)
ACTION = unreal.load_asset("/Game/Input/IA_Move")
START_GAME = unreal.GameplayStatics.get_time_seconds(WORLD)
START_WALL = time.monotonic()
START = PAWN.get_actor_location()
SAMPLES = []
STATE = {"done": False, "last": -1.0}
# HANDLE: 나중에 콜백을 해제하기 위해 보관하는 등록 표식이다.
HANDLE = None
OUT = ROOT / "Evidence" / "case07-collision-only.json"


# 함수 tick: 이름은 tick이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: delta
def tick(delta):
    if STATE["done"]:
        # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
        return
    elapsed = unreal.GameplayStatics.get_time_seconds(WORLD) - START_GAME
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: elapsed < 8.0
    if elapsed < 8.0:
        INPUT.inject_input_vector_for_action(ACTION, unreal.Vector(0, 1, 0), [], [])
    if elapsed - STATE["last"] > 0.1:
        p = PAWN.get_actor_location()
        v = PAWN.get_velocity()
        # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
        SAMPLES.append(
            {
                "game_seconds": elapsed,
                "position": [p.x, p.y, p.z],
                "speed": math.hypot(v.x, v.y),
            }
        )
        STATE["last"] = elapsed
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: elapsed > 9.0 or time.monotonic() - START_WALL > 90 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
    if elapsed > 9.0 or time.monotonic() - START_WALL > 90:
        STATE["done"] = True
        # 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
        unreal.unregister_slate_post_tick_callback(HANDLE)
        end = SAMPLES[-1]["position"]
        # 차이의 부호를 없애 크기만 비교한다. 오차 허용 범위 검사에 자주 사용한다.
        checks = {
            "moved_to_barrier": math.dist([START.x, START.y], end[:2]) > 100,
            "inside_arena": -1500 < end[0] < -100 and -700 < end[1] < 700,
            "near_wall": min(
                abs(end[0] + 1500), abs(end[0] + 100), abs(end[1] + 700), abs(end[1] - 700)
            )
            < 90,
            "blocked_while_input_held": any(
                5.0 < s["game_seconds"] < 8.0
                and s["speed"] < 20
                and min(
                    abs(s["position"][0] + 1500),
                    abs(s["position"][0] + 100),
                    abs(s["position"][1] + 700),
                    abs(s["position"][1] - 700),
                )
                < 90
                for s in SAMPLES
            ),
        }
        report = {
            "status": "passed" if all(checks.values()) else "failed",
            "checks": checks,
            "samples": SAMPLES,
            "game_seconds": elapsed,
            "wall_seconds": time.monotonic() - START_WALL,
            "timing_note": "Simulation-time duration remains valid when the editor throttles background rendering.",
        }
        OUT.write_text(json.dumps(report, indent=2), encoding="utf-8")


OUT.write_text(json.dumps({"status": "running"}), encoding="utf-8")
# HANDLE: 나중에 콜백을 해제하기 위해 보관하는 등록 표식이다. 에디터 갱신 뒤 호출할 함수를 등록한다. 작업이 끝나면 핸들로 해제해야 반복 호출이 남지 않는다.
HANDLE = unreal.register_slate_post_tick_callback(tick)
RESULT = {"status": "running", "output": str(OUT)}
```

<a id="source-lab-lab-test-mutable-cycle-py"></a>

### lab_test_mutable_cycle.py

```python
# 파일 역할: 완성 결과를 실제 값과 비교하는 검증 작업. 생성 코드와 검사 코드를 구분한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/Lobby/Instances/COI_Cyborg
#   /Game/Lobby/Instances/COI_Weapon
#   /Game/Character/CO_Character.CO_Character
#   /Game/
#   /Game/Weapon/CO_Weapon.CO_Weapon

"""Regenerate real character/weapon outputs on transient clones, then restore them."""

import json
import time
import traceback
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

# ROOT: 프로젝트 루트 경로. 결과 파일을 어느 프로젝트에 쓰는지 정하는 기준이다.
ROOT = Path(unreal.Paths.project_dir()).resolve()
assert ROOT.name == "EpicFeatureLab"
OUT = ROOT / "Evidence" / "case07-mutable-cycle.json"
# 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
WORLD = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert WORLD
TOUCHED = {
    "character": {
        "Jacket": "enum",
        "Pants": "enum",
        "Head Accessories": "enum",
        "Shoes": "enum",
        "Body Blend": "float",
        "Base Color": "color",
    },
    "weapon": {
        "Barrels": "enum",
        "Scopes": "enum",
        "Color Pattern": "enum",
        "Glow Color": "float",
    },
}
# 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
SOURCES = {
    "character": unreal.load_asset("/Game/Lobby/Instances/COI_Cyborg"),
    "weapon": unreal.load_asset("/Game/Lobby/Instances/COI_Weapon"),
}
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert all(SOURCES.values())
INSTANCES = {}
COUNTS = {"character": 0, "weapon": 0}
CALLBACKS = {}
BINDINGS = []
PHASES = {}
STATE = {
    "phase": "baseline",
    "start": time.monotonic(),
    "busy": False,
    "done": False,
    "expected": {},
    "events": [],
}
# HANDLE: 나중에 콜백을 해제하기 위해 보관하는 등록 표식이다.
HANDLE = None


# 함수 values: 이름은 values이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: instance, key
def values(instance, key):
    result = {}
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 (name, kind)의 값이 매번 바뀐다.
    for name, kind in TOUCHED[key].items():
        if kind == "enum":
            result[name] = instance.get_int_parameter_selected_option(name)
        elif kind == "float":
            result[name] = instance.get_float_parameter_selected_option(name)
        else:
            v = instance.get_vector_parameter_selected_option(name)
            result[name] = [v.get_editor_property(axis) for axis in ("x", "y", "z", "w")]
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return result


# 함수 set_values: 이름은 set_values이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: instance, key, data
def set_values(instance, key, data):
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 (name, value)의 값이 매번 바뀐다.
    for name, value in data.items():
        kind = TOUCHED[key][name]
        if kind == "enum":
            instance.set_int_parameter_selected_option(name, value)
        elif kind == "float":
            instance.set_float_parameter_selected_option(name, value)
        else:
            color = unreal.Vector4f()
            color.set_editor_properties(dict(zip(("x", "y", "z", "w"), value)))
            instance.set_vector_parameter_selected_option(name, color)


# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 actor의 값이 매번 바뀐다.
for actor in unreal.GameplayStatics.get_all_actors_of_class(WORLD, unreal.Actor):
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 component의 값이 매번 바뀐다. 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    for component in actor.get_components_by_class(unreal.CustomizableSkeletalComponent):
        source = component.get_customizable_object_instance()
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not source
        if not source:
            continue
        path = source.get_customizable_object().get_path_name()
        key = (
            "character"
            if path == "/Game/Character/CO_Character.CO_Character"
            else "weapon" if path == "/Game/Weapon/CO_Weapon.CO_Weapon" else None
        )
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: key 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
        if key:
            # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
            BINDINGS.append((key, component))
assert set(SOURCES) == {"character", "weapon"}
ORIGINAL = {key: values(instance, key) for key, instance in SOURCES.items()}
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 (key, source)의 값이 매번 바뀐다.
for key, source in SOURCES.items():
    instance = source.clone()
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert instance and not instance.get_path_name().startswith(
        "/Game/"
    ), "Only transient instances may be changed"
    instance.set_replace_physics_assets(True)
    INSTANCES[key] = instance

    # 함수 make_callback: 이름은 make_callback이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: subject 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    def make_callback(subject):
        # 함수 updated: 이름은 updated이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: instance 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
        def updated(instance):
            COUNTS[subject] += 1
            STATE["events"].append(
                {"subject": subject, "phase": STATE["phase"], "count": COUNTS[subject]}
            )

        # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
        return updated

    CALLBACKS[key] = make_callback(key)
    instance.updated_delegate.add_callable(CALLBACKS[key])
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 (key, component)의 값이 매번 바뀐다.
for key, component in BINDINGS:
    component.set_customizable_object_instance(INSTANCES[key])


# 함수 vec: 이름은 vec이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: v
def vec(v):
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return [round(v.x, 5), round(v.y, 5), round(v.z, 5)]


# 함수 snapshot: 이름은 snapshot이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: key 반복에 쓸 정수 순서를 만든다. 끝 값은 포함되지 않는다.
def snapshot(key):
    instance = INSTANCES[key]
    obj = instance.get_customizable_object()
    output = []
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 index의 값이 매번 바뀐다. 반복에 쓸 정수 순서를 만든다. 끝 값은 포함되지 않는다.
    for index in range(obj.get_component_count()):
        name = obj.get_component_name(index)
        mesh = instance.get_skeletal_mesh_component_skeletal_mesh(name)
        assert mesh, "Generated component has no mesh: " + str(name)
        bounds = mesh.get_bounds()
        physics = mesh.get_editor_property("physics_asset")
        materials = []
        overrides = list(instance.get_skeletal_mesh_component_override_materials(name))
        for slot in mesh.get_editor_property("materials"):
            material = slot.get_editor_property("material_interface")
            # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
            materials.append(
                {
                    "slot": str(slot.get_editor_property("material_slot_name")),
                    "material": material.get_path_name() if material else None,
                }
            )
        textures = []
        # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 material의 값이 매번 바뀐다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 texture_parameter_values이다.
        for material in overrides:
            # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not material
            if not material:
                continue
            # 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 texture_parameter_values이다.
            try:
                for parameter in material.get_editor_property("texture_parameter_values"):
                    texture = parameter.get_editor_property("parameter_value")
                    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: texture 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
                    if texture:
                        # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
                        textures.append(
                            {
                                "parameter": str(
                                    parameter.get_editor_property(
                                        "parameter_info"
                                    ).get_editor_property("name")
                                ),
                                "texture": texture.get_path_name(),
                            }
                        )
            except Exception:
                pass
        # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
        output.append(
            {
                "name": str(name),
                "mesh": mesh.get_path_name(),
                "origin": vec(bounds.get_editor_property("origin")),
                "extent": vec(bounds.get_editor_property("box_extent")),
                "materials": materials,
                "override_materials": [m.get_path_name() if m else None for m in overrides],
                "textures": textures,
                "physics": physics.get_path_name() if physics else None,
                "physics_body_count": None,
            }
        )
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return {
        "instance": instance.get_path_name(),
        "parameters": values(instance, key),
        "outputs": output,
        "updates": COUNTS[key],
    }


# 함수 request: 이름은 request이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: phase 문자열을 파일에 기록한다. 결과 JSON이나 보고서인지, 실제 코드·설정 파일인지 경로를 확인한다.
def request(phase):
    STATE.update(phase=phase, start=time.monotonic(), expected=dict(COUNTS))
    # 문자열을 파일에 기록한다. 결과 JSON이나 보고서인지, 실제 코드·설정 파일인지 경로를 확인한다.
    OUT.write_text(
        json.dumps({"status": "running", "phase": phase, "updates": COUNTS}), encoding="utf-8"
    )
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 instance의 값이 매번 바뀐다.
    for instance in INSTANCES.values():
        instance.update_skeletal_mesh_async(True, True)


# 함수 finish: 이름은 finish이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: report 문자열을 파일에 기록한다. 결과 JSON이나 보고서인지, 실제 코드·설정 파일인지 경로를 확인한다.
def finish(report):
    STATE["done"] = True
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: HANDLE is not None 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
    if HANDLE is not None:
        # 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
        unreal.unregister_slate_post_tick_callback(HANDLE)
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 (key, instance)의 값이 매번 바뀐다.
    for key, instance in INSTANCES.items():
        instance.updated_delegate.remove_callable(CALLBACKS[key])
    report.update(
        phases=PHASES,
        events=STATE["events"],
        source_assets={key: value.get_path_name() for key, value in SOURCES.items()},
        visual_validation="pending",
        remaining=[
            "visual wardrobe and material inspection",
            "repeat from sample UI",
            "gameplay collision checks",
        ],
    )
    OUT.write_text(json.dumps(report, indent=2), encoding="utf-8")


# 함수 tick: 이름은 tick이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: delta
def tick(delta):
    if STATE["done"] or STATE["busy"]:
        # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
        return
    STATE["busy"] = True
    # 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다.
    try:
        if time.monotonic() - STATE["start"] > 120:
            raise RuntimeError("Mutable update timed out in " + STATE["phase"])
        if time.monotonic() - STATE["start"] < 0.5 or not all(
            COUNTS[key] > STATE["expected"][key] for key in INSTANCES
        ):
            # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
            return
        # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
        assert all(instance.has_any_skeletal_mesh() for instance in INSTANCES.values())
        phase = STATE["phase"]
        PHASES[phase] = {key: snapshot(key) for key in INSTANCES}
        if phase == "baseline":
            set_values(
                INSTANCES["character"],
                "character",
                {
                    "Jacket": "Jacket_B",
                    "Pants": "Scifi Pants",
                    "Head Accessories": "Helmet_B",
                    "Shoes": "Sneakers",
                },
            )
            set_values(
                INSTANCES["weapon"], "weapon", {"Barrels": "Mutablaster", "Scopes": "Snope"}
            )
            request("wardrobe_and_parts")
        elif phase == "wardrobe_and_parts":
            set_values(
                INSTANCES["character"],
                "character",
                {"Body Blend": 1.0, "Base Color": [0.08, 0.2, 0.8, 1.0]},
            )
            set_values(
                INSTANCES["weapon"], "weapon", {"Color Pattern": "Tool", "Glow Color": 0.85}
            )
            request("body_and_material")
        elif phase == "body_and_material":
            # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 (key, instance)의 값이 매번 바뀐다.
            for key, instance in INSTANCES.items():
                set_values(instance, key, ORIGINAL[key])
            request("reset")
        else:
            base = PHASES["baseline"]
            parts = PHASES["wardrobe_and_parts"]
            changed = PHASES["body_and_material"]
            reset = PHASES["reset"]
            body_extent = lambda state: next(
                o["extent"] for o in state["character"]["outputs"] if o["name"] == "Body"
            )
            # 차이의 부호를 없애 크기만 비교한다. 오차 허용 범위 검사에 자주 사용한다.
            distance = lambda a, b: max(abs(x - y) for x, y in zip(a, b))
            layout = lambda state, key: [
                (o["name"], [m["slot"] for m in o["materials"]]) for o in state[key]["outputs"]
            ]
            checks = {
                "transient_instances_only": all(
                    not item.get_path_name().startswith("/Game/") for item in INSTANCES.values()
                ),
                "saved_parameters_unchanged": all(
                    values(source, key) == ORIGINAL[key] for key, source in SOURCES.items()
                ),
                "character_mesh_regenerated": base["character"]["outputs"][0]["mesh"]
                != parts["character"]["outputs"][0]["mesh"],
                "weapon_mesh_regenerated": base["weapon"]["outputs"][0]["mesh"]
                != parts["weapon"]["outputs"][0]["mesh"],
                "wardrobe_material_layout_changes": layout(base, "character")
                != layout(parts, "character"),
                "body_geometry_bounds_change": distance(
                    body_extent(parts), body_extent(changed)
                )
                > 0.1,
                "material_color_parameter_changes": changed["character"]["parameters"][
                    "Base Color"
                ]
                != base["character"]["parameters"]["Base Color"],
                "all_reset_parameters_match": all(
                    reset[key]["parameters"] == ORIGINAL[key] for key in INSTANCES
                ),
                "body_reset_bounds_match": distance(body_extent(base), body_extent(reset))
                < 0.1,
                "physics_output_present": any(
                    o["physics"] for o in reset["character"]["outputs"]
                ),
                "all_updates_completed": all(COUNTS[key] >= 4 for key in COUNTS),
            }
            finish({"status": "passed" if all(checks.values()) else "failed", "checks": checks})
    except Exception:
        finish({"status": "failed", "error": traceback.format_exc()})
    finally:
        STATE["busy"] = False


request("baseline")
# HANDLE: 나중에 콜백을 해제하기 위해 보관하는 등록 표식이다. 에디터 갱신 뒤 호출할 함수를 등록한다. 작업이 끝나면 핸들로 해제해야 반복 호출이 남지 않는다.
HANDLE = unreal.register_slate_post_tick_callback(tick)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "status": "running",
    "output": str(OUT),
    "instances": {key: value.get_path_name() for key, value in INSTANCES.items()},
}
```

<a id="source-lab-lab-test-mutable-mover-py"></a>

### lab_test_mutable_mover.py

```python
# 파일 역할: 완성 결과를 실제 값과 비교하는 검증 작업. 생성 코드와 검사 코드를 구분한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/Input/IA_Move
#   /Game/

"""Test the authored Mutable+GASP integration, including actual movement collision."""

import json
import math
import time
import traceback
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

# ROOT: 프로젝트 루트 경로. 결과 파일을 어느 프로젝트에 쓰는지 정하는 기준이다.
ROOT = Path(unreal.Paths.project_dir()).resolve()
assert ROOT.name == "EpicFeatureLab"
OUT = ROOT / "Evidence" / "case07-mutable-mover.json"
# 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
WORLD = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert WORLD
CONTROLLER = unreal.GameplayStatics.get_all_actors_of_class(
    WORLD, unreal.FeatureLabMutableController
)[0]
PUBLISHER = unreal.GameplayStatics.get_all_actors_of_class(
    WORLD, unreal.FeatureLabLiveLinkSource
)[0]
PAWN = unreal.GameplayStatics.get_player_pawn(WORLD, 0)
MOVER = PAWN.get_component_by_class(unreal.MoverComponent)
CAPSULE = PAWN.get_component_by_class(unreal.CapsuleComponent)
PC = unreal.GameplayStatics.get_player_controller(WORLD, 0)
subsystems = unreal.get_default_object(
    unreal.load_class(None, "/Script/Engine.SubsystemBlueprintLibrary")
)
INPUT = subsystems.call_method(
    "GetLocalPlayerSubSystemFromPlayerController",
    (PC, unreal.EnhancedInputLocalPlayerSubsystem.static_class()),
)
MOVE = unreal.load_asset("/Game/Input/IA_Move")
STATE = {
    "phase": "baseline",
    "start": time.monotonic(),
    "game_start": unreal.GameplayStatics.get_time_seconds(WORLD),
    "expected_character": 0,
    "expected_weapon": 0,
    "busy": False,
    "done": False,
}
PHASES = {}
MOVEMENT = []
# HANDLE: 나중에 콜백을 해제하기 위해 보관하는 등록 표식이다.
HANDLE = None


# 함수 vec: 이름은 vec이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: v
def vec(v):
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return [round(v.x, 4), round(v.y, 4), round(v.z, 4)]


# 함수 color: 이름은 color이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: instance 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다.
def color(instance):
    value = instance.get_vector_parameter_selected_option("Base Color")
    return [value.get_editor_property(n) for n in ["X", "Y", "Z", "W"]]


# 함수 template_parameters: 이름은 template_parameters이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: 별도 입력 없음
def template_parameters():
    c = CONTROLLER.character_template
    w = CONTROLLER.weapon_template
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return {
        "jacket": c.get_int_parameter_selected_option("Jacket"),
        "body_blend": c.get_float_parameter_selected_option("Body Blend"),
        "color": color(c),
        "barrel": w.get_int_parameter_selected_option("Barrels"),
    }


TEMPLATE_PARAMETERS = template_parameters()


# 함수 metrics: 이름은 metrics이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: component
def metrics(component):
    mesh = component.get_skeletal_mesh_asset()
    stats = unreal.FeatureLabRuntimeLibrary.inspect_mesh(component)
    instance = component.get_anim_instance()
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return {
        "mesh": mesh.get_path_name() if mesh else None,
        "bones": stats.bones,
        "vertices": stats.vertices,
        "triangles": stats.triangles,
        "materials": stats.materials,
        "physics_bodies": stats.physics_bodies,
        "extent": vec(stats.bounds_extent),
        "animation_class": instance.get_class().get_path_name() if instance else None,
    }


# 함수 snapshot: 이름은 snapshot이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: 별도 입력 없음
def snapshot():
    character = CONTROLLER.get_character_instance()
    weapon = CONTROLLER.get_weapon_instance()
    body = CONTROLLER.body
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return {
        "character_updates": CONTROLLER.character_updates,
        "weapon_updates": CONTROLLER.weapon_updates,
        "character_instance": character.get_path_name(),
        "weapon_instance": weapon.get_path_name(),
        "jacket": character.get_int_parameter_selected_option("Jacket"),
        "body_blend": character.get_float_parameter_selected_option("Body Blend"),
        "color": color(character),
        "barrel": weapon.get_int_parameter_selected_option("Barrels"),
        "body": metrics(body),
        "head": metrics(CONTROLLER.head),
        "weapon": metrics(CONTROLLER.weapon),
        "capsule": vec(CONTROLLER.get_movement_capsule_size()),
        "expected_capsule": vec(CONTROLLER.get_expected_movement_capsule_size()),
        "character_applied": CONTROLLER.are_character_meshes_applied(),
        "weapon_applied": CONTROLLER.is_weapon_mesh_applied(),
        "collision": str(CAPSULE.get_collision_enabled()),
        "location": vec(PAWN.get_actor_location()),
        "publisher_frames": PUBLISHER.frames_published,
        "publisher_bones": PUBLISHER.published_bone_count,
    }


# 함수 phase: 이름은 phase이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: name 문자열을 파일에 기록한다. 결과 JSON이나 보고서인지, 실제 코드·설정 파일인지 경로를 확인한다.
def phase(name):
    STATE.update(
        phase=name,
        start=time.monotonic(),
        game_start=unreal.GameplayStatics.get_time_seconds(WORLD),
        expected_character=CONTROLLER.character_updates,
        expected_weapon=CONTROLLER.weapon_updates,
    )
    OUT.write_text(json.dumps({"status": "running", "phase": name}), encoding="utf-8")


# 함수 finish: 이름은 finish이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: report 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
def finish(report):
    global WORLD, CONTROLLER, PUBLISHER, PAWN, MOVER, CAPSULE, INPUT, PC, HANDLE
    STATE["done"] = True
    # 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
    unreal.unregister_slate_post_tick_callback(HANDLE)
    report.update(
        phases=PHASES,
        movement=MOVEMENT,
        visual_validation="pending",
        remaining=["visual retarget/clothing inspection", "keyboard input repeat"],
        time_basis="Movement duration and samples use game seconds",
    )
    OUT.write_text(json.dumps(report, indent=2), encoding="utf-8")
    # HANDLE: 나중에 콜백을 해제하기 위해 보관하는 등록 표식이다.
    HANDLE = None
    # WORLD에 기준값 None을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
    WORLD = CONTROLLER = PUBLISHER = PAWN = MOVER = CAPSULE = INPUT = PC = None


# 함수 tick: 이름은 tick이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: delta
def tick(delta):
    if STATE["done"] or STATE["busy"]:
        # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
        return
    STATE["busy"] = True
    # 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다.
    try:
        name = STATE["phase"]
        wall_elapsed = time.monotonic() - STATE["start"]
        elapsed = (
            unreal.GameplayStatics.get_time_seconds(WORLD) - STATE["game_start"]
            if name == "movement"
            else wall_elapsed
        )
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: wall_elapsed > 120
        if wall_elapsed > 120:
            raise RuntimeError("Integration update timed out in " + name)
        if name == "movement":
            # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: elapsed < 8.0
            if elapsed < 8.0:
                INPUT.inject_input_vector_for_action(MOVE, unreal.Vector(0, 1, 0), [], [])
            if not MOVEMENT or elapsed - MOVEMENT[-1]["time"] > 0.12:
                location = PAWN.get_actor_location()
                body = CONTROLLER.body
                # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
                MOVEMENT.append(
                    {
                        "time": elapsed,
                        "location": vec(location),
                        "velocity": vec(PAWN.get_velocity()),
                        "mode": str(MOVER.get_movement_mode_name()),
                        "feet": {
                            bone: vec(body.get_socket_location(bone) - location)
                            for bone in ["foot_l", "foot_r"]
                        },
                    }
                )
            # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: elapsed > 8.5
            if elapsed > 8.5:
                PHASES["after_movement"] = snapshot()
                base = PHASES["baseline"]
                changed = PHASES["outfit"]
                body_phase = PHASES["body_color_weapon"]
                reset = PHASES["reset"]
                # 차이의 부호를 없애 크기만 비교한다. 오차 허용 범위 검사에 자주 사용한다.
                distance = lambda a, b: max(abs(x - y) for x, y in zip(a, b))
                # 반복에 쓸 정수 순서를 만든다. 끝 값은 포함되지 않는다.
                foot_motion = max(
                    max(sample["feet"][bone][axis] for sample in MOVEMENT)
                    - min(sample["feet"][bone][axis] for sample in MOVEMENT)
                    for bone in ["foot_l", "foot_r"]
                    for axis in range(3)
                )
                start = reset["location"]
                end = MOVEMENT[-1]["location"]
                checks = {
                    "character_and_weapon_generated": base["body"]["vertices"] > 1000
                    and base["weapon"]["vertices"] > 100,
                    "transient_instances": not base["character_instance"].startswith("/Game/")
                    and not base["weapon_instance"].startswith("/Game/"),
                    "clothing_topology_changes": base["body"]["vertices"]
                    != changed["body"]["vertices"]
                    or base["body"]["triangles"] != changed["body"]["triangles"],
                    "body_bounds_change": distance(
                        changed["body"]["extent"], body_phase["body"]["extent"]
                    )
                    > 0.1,
                    "capsule_follows_body": distance(changed["capsule"], body_phase["capsule"])
                    > 0.01,
                    "weapon_parts_change": changed["weapon"]["vertices"]
                    != body_phase["weapon"]["vertices"]
                    or changed["barrel"] != body_phase["barrel"],
                    "appearance_resets": base["jacket"] == reset["jacket"]
                    and abs(base["body_blend"] - reset["body_blend"]) < 0.001
                    and base["barrel"] == reset["barrel"],
                    "geometry_resets": base["body"]["vertices"] == reset["body"]["vertices"]
                    and distance(base["body"]["extent"], reset["body"]["extent"]) < 0.1,
                    "capsule_resets": distance(base["capsule"], reset["capsule"]) < 0.1,
                    "retarget_instance_running": bool(reset["body"]["animation_class"]),
                    "retargeted_feet_animate": foot_motion > 3,
                    "mover_moves_character": math.dist(start[:2], end[:2]) > 200,
                    "wall_blocks_movement": (
                        -1500 < end[0] < -100
                        and -700 < end[1] < 700
                        and min(
                            abs(end[0] + 1500),
                            abs(end[0] + 100),
                            abs(end[1] + 700),
                            abs(end[1] - 700),
                        )
                        < 90
                        and any(
                            6 < s["time"] < 8 and math.hypot(*s["velocity"][:2]) < 20
                            for s in MOVEMENT
                        )
                    ),
                    "publisher_sends_bones": PHASES["after_movement"]["publisher_frames"] > 20
                    and PHASES["after_movement"]["publisher_bones"] > 50,
                    "captures_wait_for_applied_meshes": all(
                        p["character_applied"] and p["weapon_applied"] for p in PHASES.values()
                    ),
                    "capsules_fit_current_meshes": all(
                        distance(p["capsule"], p["expected_capsule"]) < 0.001
                        for p in PHASES.values()
                    ),
                    "color_parameter_changes": distance(base["color"], body_phase["color"])
                    > 0.1,
                    "color_resets": distance(base["color"], reset["color"]) < 0.00001,
                    "saved_templates_unchanged": template_parameters() == TEMPLATE_PARAMETERS,
                }
                finish(
                    {
                        "status": "passed" if all(checks.values()) else "failed",
                        "checks": checks,
                        "foot_motion_cm": foot_motion,
                    }
                )
            # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
            return
        # An unchanged weapon descriptor is legitimately served from cache and
        # need not broadcast a second update during the outfit-only phase.
        wait_weapon = name != "outfit"
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: elapsed < 0.8 or CONTROLLER.character_updates <= STATE['expected_character'] or (wait_weapon and CONTROLLER.weapon_updates <= STATE['expected_weapon'])
        if (
            elapsed < 0.8
            or CONTROLLER.character_updates <= STATE["expected_character"]
            or (wait_weapon and CONTROLLER.weapon_updates <= STATE["expected_weapon"])
        ):
            # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
            return
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not CONTROLLER.are_character_meshes_applied() or not CONTROLLER.is_weapon_mesh_applied()
        if (
            not CONTROLLER.are_character_meshes_applied()
            or not CONTROLLER.is_weapon_mesh_applied()
        ):
            # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
            return
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: (CONTROLLER.get_movement_capsule_size() - CONTROLLER.get_expected_movement_capsule_size()).length() > 0.001
        if (
            CONTROLLER.get_movement_capsule_size()
            - CONTROLLER.get_expected_movement_capsule_size()
        ).length() > 0.001:
            # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
            return
        PHASES[name] = snapshot()
        if name == "baseline":
            phase("outfit")
            CONTROLLER.set_outfit_preset(1)
            CONTROLLER.set_weapon_preset(0)
        elif name == "outfit":
            phase("body_color_weapon")
            CONTROLLER.set_body_blend(1.0)
            CONTROLLER.set_color_preset(1)
            CONTROLLER.set_weapon_preset(1)
        elif name == "body_color_weapon":
            phase("reset")
            CONTROLLER.reset_appearance()
        else:
            phase("movement")
    except Exception:
        finish({"status": "failed", "error": traceback.format_exc()})
    finally:
        STATE["busy"] = False


OUT.write_text(json.dumps({"status": "running", "phase": "baseline"}), encoding="utf-8")
# HANDLE: 나중에 콜백을 해제하기 위해 보관하는 등록 표식이다. 에디터 갱신 뒤 호출할 함수를 등록한다. 작업이 끝나면 핸들로 해제해야 반복 호출이 남지 않는다.
HANDLE = unreal.register_slate_post_tick_callback(tick)
RESULT = {"status": "running", "output": str(OUT)}
```

<a id="source-source-mutablesample-featurelabruntime-cpp"></a>

### FeatureLabRuntime.cpp

```cpp
// 파일 역할: 메타휴먼·표정·리그·Mutable 실험에 필요한 공통 실행과 검증 기능
// 클래스=작업 종류, 객체=실제 한 개, 포인터(* 또는 TObjectPtr)=다른 객체를 가리키는 참조.
// nullptr은 대상 없음, bool은 참/거짓, TArray는 순서 있는 목록, FString은 문자열이다.
// WITH_EDITOR 구간은 에디터 빌드에서만 사용하는 코드다. 원본과의 토큰 비교 결과는 code-validation.json에 기록한다.

#include "FeatureLabRuntime.h"
#include "Animation/AnimSequence.h"
#include "Animation/AnimData/IAnimationDataController.h"
#include "Animation/MorphTarget.h"
#include "Components/AudioComponent.h"
#include "Components/CapsuleComponent.h"
#include "Components/InputComponent.h"
#include "Components/SkeletalMeshComponent.h"
#include "Components/StaticMeshComponent.h"
#include "ControlRig.h"
#include "ControlRigComponent.h"
#include "ControlRigAssetReference.h"
#include "Engine/StaticMesh.h"
#include "Materials/MaterialInterface.h"
#include "Rigs/RigHierarchy.h"
#include "UObject/ConstructorHelpers.h"
#include "Engine/Engine.h"
#include "Engine/SkeletalMesh.h"
#include "GameFramework/PlayerController.h"
#include "Kismet/GameplayStatics.h"
#include "Misc/CommandLine.h"
#include "Misc/Parse.h"
#include "LiveLinkProvider.h"
#include "Roles/LiveLinkAnimationRole.h"
#include "Roles/LiveLinkAnimationTypes.h"
#include "MuCO/CustomizableObjectInstance.h"
#include "MuCO/CustomizableSkeletalComponent.h"
#include "PhysicsEngine/PhysicsAsset.h"
#include "Rendering/SkeletalMeshRenderData.h"
#include "Rendering/SkinWeightVertexBuffer.h"
#include "SkeletalRenderPublic.h"
#include "TimerManager.h"
#include "MoverComponent.h"
#include "DefaultMovementSet/InstantMovementEffects/BasicInstantMovementEffects.h"
#include "Engine/World.h"
#include "UObject/UnrealType.h"
// 빌드 조건에 따라 포함할 코드를 고른다. 게임 실행 중의 if 조건과 달리 빌드할 때 구분한다.
#if WITH_EDITOR
#include "MeshDescription.h"
#include "SkeletalMeshAttributes.h"
#include "ScopedTransaction.h"
#include "AnimNextRigVMAssetEditorData.h"
#include "RigVMModel/RigVMClient.h"
#include "RigVMModel/RigVMController.h"
#include "RigVMModel/RigVMGraph.h"
#endif

// 【함수 역할】이후 작업에 사용할 객체나 값을 찾는다. 찾지 못했을 때 빈 참조가 반환될 수 있으므로 호출하는 쪽의 검사도 필요하다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
UObject *UFeatureLabRuntimeLibrary::ReadLabEditorObject(UObject *Asset, FName PropertyName)
{
// 빌드 조건에 따라 포함할 코드를 고른다. 게임 실행 중의 if 조건과 달리 빌드할 때 구분한다.
#if WITH_EDITOR
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!IsValid(Asset))
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return nullptr;
    const FString Path = Asset->GetPathName();
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Path.StartsWith(TEXT("/Game/FeatureLab/")) && !Path.StartsWith(TEXT("/AnimGenExample/")) &&
        !Path.StartsWith(TEXT("/UAF/Templates/")))
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return nullptr;
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (PropertyName != TEXT("TrainingSettings") && PropertyName != TEXT("ViewportSettings") &&
        PropertyName != TEXT("EditorData"))
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return nullptr;
    const FObjectPropertyBase *Property =
        FindFProperty<FObjectPropertyBase>(Asset->GetClass(), PropertyName);
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return Property ? Property->GetObjectPropertyValue_InContainer(Asset) : nullptr;
#else
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return nullptr;
#endif
}

// 【함수 역할】이후 작업에 사용할 객체나 값을 찾는다. 찾지 못했을 때 빈 참조가 반환될 수 있으므로 호출하는 쪽의 검사도 필요하다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
TArray<UObject *> UFeatureLabRuntimeLibrary::GetLabUAFGraphs(UObject *Asset)
{
    TArray<UObject *> Result;
// 빌드 조건에 따라 포함할 코드를 고른다. 게임 실행 중의 if 조건과 달리 빌드할 때 구분한다.
#if WITH_EDITOR
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (UUAFRigVMAssetEditorData *Data =
            Cast<UUAFRigVMAssetEditorData>(ReadLabEditorObject(Asset, TEXT("EditorData"))))
        // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
        for (URigVMGraph *Graph :
             static_cast<IRigVMClientHost *>(Data)->GetRigVMClient()->GetAllModels(false, true))
            Result.Add(Graph);
#endif
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return Result;
}

// 【함수 역할】이후 작업에 사용할 객체나 값을 찾는다. 찾지 못했을 때 빈 참조가 반환될 수 있으므로 호출하는 쪽의 검사도 필요하다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
UObject *UFeatureLabRuntimeLibrary::GetLabUAFController(UObject *Asset, const FString &GraphName)
{
// 빌드 조건에 따라 포함할 코드를 고른다. 게임 실행 중의 if 조건과 달리 빌드할 때 구분한다.
#if WITH_EDITOR
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (UUAFRigVMAssetEditorData *Data =
            Cast<UUAFRigVMAssetEditorData>(ReadLabEditorObject(Asset, TEXT("EditorData"))))
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return static_cast<IRigVMClientHost *>(Data)->GetControllerByName(GraphName);
#endif
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return nullptr;
}

// 【함수 역할】이름은 ExportLabUAFPython이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
TArray<FString> UFeatureLabRuntimeLibrary::ExportLabUAFPython(UObject *Asset)
{
// 빌드 조건에 따라 포함할 코드를 고른다. 게임 실행 중의 if 조건과 달리 빌드할 때 구분한다.
#if WITH_EDITOR
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (UUAFRigVMAssetEditorData *Data =
            Cast<UUAFRigVMAssetEditorData>(ReadLabEditorObject(Asset, TEXT("EditorData"))))
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return static_cast<IRigVMClientHost *>(Data)->GeneratePythonCommands();
#endif
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return {};
}

// 【함수 역할】이름은 CompileLabUAF이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
bool UFeatureLabRuntimeLibrary::CompileLabUAF(UObject *Asset)
{
// 빌드 조건에 따라 포함할 코드를 고른다. 게임 실행 중의 if 조건과 달리 빌드할 때 구분한다.
#if WITH_EDITOR
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!IsValid(Asset) || !Asset->GetPathName().StartsWith(TEXT("/Game/FeatureLab/UAF/")))
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return false;
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (UUAFRigVMAssetEditorData *Data =
            Cast<UUAFRigVMAssetEditorData>(ReadLabEditorObject(Asset, TEXT("EditorData"))))
    {
        static_cast<IRigVMClientHost *>(Data)->RecompileVM();
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return true;
    }
#endif
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return false;
}

// 【함수 역할】이름은 TeleportMover이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
bool UFeatureLabRuntimeLibrary::TeleportMover(AActor *Actor, FVector Location, FRotator Rotation)
{
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!IsValid(Actor) || Location.ContainsNaN() || Rotation.ContainsNaN())
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return false;
    UMoverComponent *Mover = Actor->FindComponentByClass<UMoverComponent>();
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Mover)
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return false;
    TSharedPtr<FApplyVelocityEffect> Stop = MakeShared<FApplyVelocityEffect>();
    Stop->VelocityToApply = FVector::ZeroVector;
    Stop->bAdditiveVelocity = false;
    Stop->ForceMovementMode = TEXT("Walking");
    Mover->QueueInstantMovementEffect(Stop);
    TSharedPtr<FTeleportEffect> Teleport = MakeShared<FTeleportEffect>();
    Teleport->TargetLocation = Location;
    Teleport->bUseActorRotation = false;
    Teleport->TargetRotation = Rotation;
    Mover->QueueInstantMovementEffect(Teleport);
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return true;
}

// 【함수 역할】이후 작업에 사용할 객체나 값을 찾는다. 찾지 못했을 때 빈 참조가 반환될 수 있으므로 호출하는 쪽의 검사도 필요하다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
TArray<UWorld *> UFeatureLabRuntimeLibrary::GetPlayWorlds()
{
    TArray<UWorld *> Result;
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (GEngine)
        // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
        for (const FWorldContext &Context : GEngine->GetWorldContexts())
            // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
            if (UWorld *World = Context.World())
                // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
                if (World->WorldType == EWorldType::PIE || World->WorldType == EWorldType::Game)
                    Result.AddUnique(World);
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return Result;
}

// 【함수 역할】현재 객체와 실행 결과를 읽어 검증용 자료로 반환한다. 결과를 만드는 함수와 결과를 측정하는 함수를 구분해서 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
FFeatureLabMeshStats UFeatureLabRuntimeLibrary::InspectMesh(USkeletalMeshComponent *Component)
{
    FFeatureLabMeshStats Result;
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Component || !Component->GetSkeletalMeshAsset())
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return Result;
    const USkeletalMesh *Mesh = Component->GetSkeletalMeshAsset();
    Result.Bones = Mesh->GetRefSkeleton().GetNum();
    Result.Materials = Mesh->GetMaterials().Num();
    Result.MorphTargets = Mesh->GetMorphTargets().Num();
    Result.BoundsExtent = Mesh->GetBounds().BoxExtent;
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (const FSkeletalMeshRenderData *Data = Mesh->GetResourceForRendering();
        Data && !Data->LODRenderData.IsEmpty())
    {
        Result.Vertices = Data->LODRenderData[0].GetNumVertices();
        Result.Triangles = Data->LODRenderData[0].GetTotalFaces();
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (const FSkinWeightVertexBuffer *Weights = Component->GetSkinWeightBuffer(0))
        {
            Result.SkinWeightVertices = Weights->GetNumVertices();
            Result.MaxSkinInfluences = Weights->GetMaxBoneInfluences();
        }
    }
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (const UPhysicsAsset *Physics = Component->GetPhysicsAsset())
        Result.PhysicsBodies = Physics->SkeletalBodySetups.Num();
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return Result;
}

// 【함수 역할】이름은 SampleSkinnedVertices이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
TArray<FVector> UFeatureLabRuntimeLibrary::SampleSkinnedVertices(USkeletalMeshComponent *Component,
                                                                 const TArray<int32> &VertexIndices)
{
    TArray<FVector> Result;
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Component || !Component->GetSkeletalMeshAsset() ||
        Component->GetComponentSpaceTransforms().IsEmpty())
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return Result;
    const FSkeletalMeshRenderData *Data =
        Component->GetSkeletalMeshAsset()->GetResourceForRendering();
    FSkinWeightVertexBuffer *Weights = Component->GetSkinWeightBuffer(0);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Data || Data->LODRenderData.IsEmpty() || !Weights)
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return Result;
    const FSkeletalMeshLODRenderData &LOD = Data->LODRenderData[0];
    TArray<FMatrix44f> RefToLocals;
    Component->GetCurrentRefToLocalMatrices(RefToLocals, 0);
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (int32 Index : VertexIndices)
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (Index >= 0 && static_cast<uint32>(Index) < LOD.GetNumVertices())
            Result.Add(FVector(USkinnedMeshComponent::GetSkinnedVertexPosition(
                Component, Index, LOD, *Weights, RefToLocals)));
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return Result;
}

// 【함수 역할】이름은 FinalizeAuthoredAnimation이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
bool UFeatureLabRuntimeLibrary::FinalizeAuthoredAnimation(UAnimSequence *Animation)
{
// 빌드 조건에 따라 포함할 코드를 고른다. 게임 실행 중의 if 조건과 달리 빌드할 때 구분한다.
#if WITH_EDITOR
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Animation)
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return false;
    Animation->GetController().NotifyPopulated();
    Animation->PostEditChange();
    Animation->MarkPackageDirty();
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return Animation->GetPlayLength() > 0.0f;
#else
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return false;
#endif
}

// 【함수 역할】이름은 SampleFinalSkinVertices이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
TArray<FVector> UFeatureLabRuntimeLibrary::SampleFinalSkinVertices(
    USkeletalMeshComponent *Component, const TArray<int32> &VertexIndices)
{
    TArray<FVector> Result;
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Component || !Component->GetSkeletalMeshAsset())
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return Result;
    TArray<FFinalSkinVertex> Vertices;
    Component->GetCPUSkinnedVertices(Vertices, 0);
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (int32 Index : VertexIndices)
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (Vertices.IsValidIndex(Index))
            Result.Add(FVector(Vertices[Index].Position));
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return Result;
}

// 【함수 역할】이름은 AuthorPuppetSurfaceData이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
bool UFeatureLabRuntimeLibrary::AuthorPuppetSurfaceData(USkeletalMesh *Mesh)
{
// 빌드 조건에 따라 포함할 코드를 고른다. 게임 실행 중의 if 조건과 달리 빌드할 때 구분한다.
#if WITH_EDITOR
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Mesh || !Mesh->GetOutermost()->GetName().StartsWith(TEXT("/Game/FeatureLab/Rigging/")))
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return false;
    FMeshDescription *Description = Mesh->GetMeshDescription(0);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Description)
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return false;
    const FScopedTransaction Transaction(NSLOCTEXT(
        "FeatureLab", "PuppetSurface", "FeatureLab morphs and direct mesh control regions"));
    Mesh->Modify();
    FSkeletalMeshAttributes Attributes(*Description);
    Attributes.RegisterMorphTargetAttribute(TEXT("Smile"), false);
    Attributes.RegisterMorphTargetAttribute(TEXT("Squint"), false);
    auto Smile = Attributes.GetVertexMorphPositionDelta(TEXT("Smile"));
    auto Squint = Attributes.GetVertexMorphPositionDelta(TEXT("Squint"));
    auto Positions = Description->GetVertexPositions();
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (FVertexID Vertex : Description->Vertices().GetElementIDs())
    {
        const FVector3f P = Positions[Vertex];
        Smile[Vertex] = FVector3f::ZeroVector;
        Squint[Vertex] = FVector3f::ZeroVector;
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (P.Y > 20.0f && P.Z > 135.0f && P.Z < 158.0f)
            Smile[Vertex] = FVector3f(
                0, 0, 9.0f * FMath::Square(FMath::Clamp(FMath::Abs(P.X) / 30.0f, 0.0f, 1.0f)));
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (P.Y > 25.0f && P.Z > 158.0f && P.Z < 180.0f && FMath::Abs(P.X) < 26.0f)
            Squint[Vertex] = FVector3f(0, 0, -(P.Z - 169.0f) * 0.6f);
    }
    auto Labels = Description->TriangleAttributes().RegisterAttribute<FName>(
        TEXT("dmc-polygroup"), 1, NAME_None, EMeshAttributeFlags::None);
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (FTriangleID Triangle : Description->Triangles().GetElementIDs())
    {
        FVector3f Center = FVector3f::ZeroVector;
        // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
        for (FVertexInstanceID Instance : Description->GetTriangleVertexInstances(Triangle))
            Center += Positions[Description->GetVertexInstanceVertex(Instance)];
        Center /= 3.0f;
        FName Group = TEXT("body");
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (Center.Z > 135.0f)
            Group = TEXT("head");
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (Center.Y > 18.0f && Center.Z > 135.0f && Center.Z < 158.0f)
            Group = TEXT("jaw");
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (Center.Y > 19.0f && Center.Z > 178.0f)
            Group = Center.X < 0 ? FName(TEXT("brow_l")) : FName(TEXT("brow_r"));
        Labels[Triangle] = Group;
    }
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Mesh->CommitMeshDescription(0))
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return false;
    Mesh->PostEditChange();
    Mesh->MarkPackageDirty();
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return true;
#else
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return false;
#endif
}

// 【함수 역할】클래스의 기본 부품과 기본값을 준비하는 생성자다. 이 시점에는 게임 월드가 모두 준비됐다고 가정하지 않는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
AFeatureLabFacePlayback::AFeatureLabFacePlayback()
{
    PrimaryActorTick.bCanEverTick = true;
    // 이 액터의 기본 컴포넌트를 만든다. 부품 생성 뒤 장면 부착·재질·충돌 설정이 이어지는지 확인한다.
    Audio = CreateDefaultSubobject<UAudioComponent>(TEXT("SpeechAudio"));
    SetRootComponent(Audio);
    Audio->SetAutoActivate(false);
}

// 【함수 역할】액터가 게임 월드에서 실행을 시작할 때 엔진이 호출한다. 생성자에서 부품을 만든 뒤 실제 월드·플레이어·입력과 연결하는 초기 준비 단계다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabFacePlayback::BeginPlay()
{
    // 부모 클래스의 기본 처리를 먼저/함께 실행한다. 자식 클래스의 추가 작업만으로 엔진 기본 동작을 대체하지 않는다.
    Super::BeginPlay();
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (APlayerController *PC = GetWorld()->GetFirstPlayerController())
    {
        EnableInput(PC);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::P, IE_Pressed, this, &AFeatureLabFacePlayback::TogglePause);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::R, IE_Pressed, this,
                                &AFeatureLabFacePlayback::RestartPlayback);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::C, IE_Pressed, this, &AFeatureLabFacePlayback::ToggleCamera);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::M, IE_Pressed, this,
                                &AFeatureLabFacePlayback::CycleFacialVariant);
    }
    Audio->OnAudioFinished.AddDynamic(this, &AFeatureLabFacePlayback::RestartPlayback);
    RestartPlayback();
}

// 【함수 역할】이후 작업에 사용할 객체나 값을 찾는다. 찾지 못했을 때 빈 참조가 반환될 수 있으므로 호출하는 쪽의 검사도 필요하다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
USkeletalMeshComponent *AFeatureLabFacePlayback::GetFace() const
{
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Performer)
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return nullptr;
    TArray<USkeletalMeshComponent *> Components;
    Performer->GetComponents(Components);
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (USkeletalMeshComponent *Component : Components)
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (Component->GetFName() == TEXT("Face"))
            // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
            return Component;
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return nullptr;
}

// 【함수 역할】이름은 PlaybackMeshes이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
TArray<USkeletalMeshComponent *> AFeatureLabFacePlayback::PlaybackMeshes(FName ComponentName) const
{
    TArray<USkeletalMeshComponent *> Result;
    TArray<AActor *> Actors;
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (IsValid(Performer))
        Actors.Add(Performer);
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (AActor *Actor : AdditionalPerformers)
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (IsValid(Actor))
            Actors.AddUnique(Actor);
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (AActor *Actor : Actors)
    {
        TArray<USkeletalMeshComponent *> Components;
        Actor->GetComponents(Components);
        // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
        for (USkeletalMeshComponent *Component : Components)
            // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
            if (Component->GetFName() == ComponentName && Component->GetSkeletalMeshAsset())
                Result.Add(Component);
    }
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return Result;
}

// 【함수 역할】실험 상태를 코드에 적힌 기준값으로 되돌린다. 위치·속도·재생 시간·물리 상태 중 무엇을 복구하는지 아래 대입과 호출을 확인한다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabFacePlayback::RestartPlayback()
{
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (FacialVariants.Num() > 0)
    {
        FacialVariantIndex = FMath::Clamp(FacialVariantIndex, 0, FacialVariants.Num() - 1);
        FacialAnimation = FacialVariants[FacialVariantIndex];
    }
    USkeletalMeshComponent *Face = GetFace();
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Face || !Face->GetSkeletalMeshAsset() || !FacialAnimation)
    {
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (++StartupAttempts < 30)
            GetWorldTimerManager().SetTimerForNextTick(this,
                                                       &AFeatureLabFacePlayback::RestartPlayback);
        return;
    }
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (USkeletalMeshComponent *Mesh : PlaybackMeshes(TEXT("Face")))
    {
        Mesh->VisibilityBasedAnimTickOption =
            EVisibilityBasedAnimTickOption::AlwaysTickPoseAndRefreshBones;
        Mesh->SetComponentTickEnabled(true);
        Mesh->PlayAnimation(FacialAnimation, true);
        Mesh->SetPlayRate(1.0f);
    }
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (BodyAnimation)
        // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
        for (USkeletalMeshComponent *Mesh : PlaybackMeshes(TEXT("Body")))
        {
            Mesh->VisibilityBasedAnimTickOption =
                EVisibilityBasedAnimTickOption::AlwaysTickPoseAndRefreshBones;
            Mesh->SetComponentTickEnabled(true);
            Mesh->PlayAnimation(BodyAnimation, true);
            Mesh->SetPlayRate(1.0f);
        }
    bPaused = false;
    ++RestartCount;
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (Speech)
    {
        Audio->SetSound(Speech);
        Audio->SetPaused(false);
        Audio->Play(0.0f);
    }
}

// 【함수 역할】현재 선택 상태를 다음 상태로 바꾸고 결과에 반영한다. 켬·끔 전환인지 여러 선택지 순환인지 조건문을 따라 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabFacePlayback::TogglePause()
{
    bPaused = !bPaused;
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (FName Name : {FName(TEXT("Face")), FName(TEXT("Body"))})
        // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
        for (USkeletalMeshComponent *Mesh : PlaybackMeshes(Name))
            // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
            if (Name == TEXT("Face") || BodyAnimation)
                Mesh->SetPlayRate(bPaused ? 0.0f : 1.0f);
    Audio->SetPaused(bPaused);
}

// 【함수 역할】현재 선택 상태를 다음 상태로 바꾸고 결과에 반영한다. 켬·끔 전환인지 여러 선택지 순환인지 조건문을 따라 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabFacePlayback::ToggleCamera()
{
    APlayerController *PC = GetWorld()->GetFirstPlayerController();
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!PC || !InspectionCamera)
        return;
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!bInspectionView)
    {
        PreviousViewTarget = PC->GetViewTarget();
        PC->SetViewTargetWithBlend(InspectionCamera, 0.25f);
    }
    else if (PreviousViewTarget.IsValid())
        PC->SetViewTargetWithBlend(PreviousViewTarget.Get(), 0.25f);
    bInspectionView = !bInspectionView;
}

// 【함수 역할】이름은 SelectFacialVariant이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabFacePlayback::SelectFacialVariant(int32 Index)
{
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!FacialVariants.IsValidIndex(Index) || !IsValid(FacialVariants[Index]))
        return;
    FacialVariantIndex = Index;
    RestartPlayback();
}

// 【함수 역할】현재 선택 상태를 다음 상태로 바꾸고 결과에 반영한다. 켬·끔 전환인지 여러 선택지 순환인지 조건문을 따라 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabFacePlayback::CycleFacialVariant()
{
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (FacialVariants.Num() > 0)
        SelectFacialVariant((FacialVariantIndex + 1) % FacialVariants.Num());
}

// 【함수 역할】매 갱신 시점에 상태를 확인하고 동작을 진행한다. DeltaSeconds는 이번 갱신까지 지난 시간이며, 함수가 1초에 정확히 60번 불린다고 가정하지 않는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabFacePlayback::Tick(float DeltaSeconds)
{
    // 부모 클래스의 기본 처리를 먼저/함께 실행한다. 자식 클래스의 추가 작업만으로 엔진 기본 동작을 대체하지 않는다.
    Super::Tick(DeltaSeconds);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (bShowHelp && GEngine)
    {
        const float Position = GetFace() ? GetFace()->GetPosition() : 0.0f;
        const FString VariantStatus =
            FacialVariants.Num() > 0
                ? FString::Printf(TEXT("\nM mood %d/%d: %s"), FacialVariantIndex + 1,
                                  FacialVariants.Num(),
                                  FacialVariantNames.IsValidIndex(FacialVariantIndex)
                                      ? *FacialVariantNames[FacialVariantIndex]
                                      : TEXT("Unnamed"))
                : FString();
        GEngine->AddOnScreenDebugMessage(
            static_cast<uint64>(GetUniqueID()), 0.15f, FColor::Cyan,
            FString::Printf(TEXT("%s%s | P pause | R restart | C face camera | %.2fs %s"),
                            *FeatureCaption, *VariantStatus, Position,
                            bPaused ? TEXT("PAUSED") : TEXT("PLAYING")));
    }
}

// 【함수 역할】레벨 이동이나 실행 종료 때 남은 콜백·참조·임시 상태를 정리한다. 다음 실행에 이전 작업이 남지 않도록 하는 종료 단계다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabFacePlayback::EndPlay(const EEndPlayReason::Type Reason)
{
    Audio->OnAudioFinished.RemoveDynamic(this, &AFeatureLabFacePlayback::RestartPlayback);
    Audio->Stop();
    // 부모 클래스의 기본 처리를 먼저/함께 실행한다. 자식 클래스의 추가 작업만으로 엔진 기본 동작을 대체하지 않는다.
    Super::EndPlay(Reason);
}

// 【함수 역할】클래스의 기본 부품과 기본값을 준비하는 생성자다. 이 시점에는 게임 월드가 모두 준비됐다고 가정하지 않는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
AFeatureLabMutableController::AFeatureLabMutableController()
{
    PrimaryActorTick.bCanEverTick = true;
    // 이 액터의 기본 컴포넌트를 만든다. 부품 생성 뒤 장면 부착·재질·충돌 설정이 이어지는지 확인한다.
    Body = CreateDefaultSubobject<USkeletalMeshComponent>(TEXT("MutableBody"));
    Body->ComponentTags.Add(TEXT("RTG_UEFN_to_Metahuman_nrw"));
    SetRootComponent(Body);
    // 이 액터의 기본 컴포넌트를 만든다. 부품 생성 뒤 장면 부착·재질·충돌 설정이 이어지는지 확인한다.
    Head = CreateDefaultSubobject<USkeletalMeshComponent>(TEXT("MutableHead"));
    Head->SetupAttachment(Body);
    // 이 액터의 기본 컴포넌트를 만든다. 부품 생성 뒤 장면 부착·재질·충돌 설정이 이어지는지 확인한다.
    Weapon = CreateDefaultSubobject<USkeletalMeshComponent>(TEXT("MutableWeapon"));
    Weapon->SetupAttachment(Body, TEXT("hand_r"));
    BodyGenerator =
        // 이 액터의 기본 컴포넌트를 만든다. 부품 생성 뒤 장면 부착·재질·충돌 설정이 이어지는지 확인한다.
        CreateDefaultSubobject<UCustomizableSkeletalComponent>(TEXT("MutableBodyGenerator"));
    BodyGenerator->SetupAttachment(Body);
    BodyGenerator->SetComponentName(TEXT("Body"));
    HeadGenerator =
        // 이 액터의 기본 컴포넌트를 만든다. 부품 생성 뒤 장면 부착·재질·충돌 설정이 이어지는지 확인한다.
        CreateDefaultSubobject<UCustomizableSkeletalComponent>(TEXT("MutableHeadGenerator"));
    HeadGenerator->SetupAttachment(Head);
    HeadGenerator->SetComponentName(TEXT("Head"));
    WeaponGenerator =
        // 이 액터의 기본 컴포넌트를 만든다. 부품 생성 뒤 장면 부착·재질·충돌 설정이 이어지는지 확인한다.
        CreateDefaultSubobject<UCustomizableSkeletalComponent>(TEXT("MutableWeaponGenerator"));
    WeaponGenerator->SetupAttachment(Weapon);
    WeaponGenerator->SetComponentName(TEXT("Gun"));
    Body->SetCollisionEnabled(ECollisionEnabled::NoCollision);
    Head->SetCollisionEnabled(ECollisionEnabled::NoCollision);
    Weapon->SetCollisionEnabled(ECollisionEnabled::NoCollision);
    Body->VisibilityBasedAnimTickOption =
        EVisibilityBasedAnimTickOption::AlwaysTickPoseAndRefreshBones;
    Head->VisibilityBasedAnimTickOption =
        EVisibilityBasedAnimTickOption::AlwaysTickPoseAndRefreshBones;
}

// 【함수 역할】액터가 게임 월드에서 실행을 시작할 때 엔진이 호출한다. 생성자에서 부품을 만든 뒤 실제 월드·플레이어·입력과 연결하는 초기 준비 단계다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabMutableController::BeginPlay()
{
    // 부모 클래스의 기본 처리를 먼저/함께 실행한다. 자식 클래스의 추가 작업만으로 엔진 기본 동작을 대체하지 않는다.
    Super::BeginPlay();
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (APlayerController *PC = GetWorld()->GetFirstPlayerController())
    {
        EnableInput(PC);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::One, IE_Pressed, this,
                                &AFeatureLabMutableController::ToggleOutfit);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::Two, IE_Pressed, this,
                                &AFeatureLabMutableController::ToggleBody);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::Three, IE_Pressed, this,
                                &AFeatureLabMutableController::ToggleColor);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::Four, IE_Pressed, this,
                                &AFeatureLabMutableController::ToggleWeapon);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::R, IE_Pressed, this,
                                &AFeatureLabMutableController::ResetAppearance);
    }
    Initialize();
}

// 【함수 역할】이름은 Initialize이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabMutableController::Initialize()
{
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!SourcePawn)
        SourcePawn = UGameplayStatics::GetPlayerPawn(this, 0);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!CharacterTemplate || !WeaponTemplate)
        return;
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!SourcePawn)
    {
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (++StartupAttempts < 30)
            GetWorldTimerManager().SetTimerForNextTick(this,
                                                       &AFeatureLabMutableController::Initialize);
        return;
    }
    Driver = SourcePawn->FindComponentByClass<USkeletalMeshComponent>();
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Driver || !Driver->GetSkeletalMeshAsset())
    {
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (++StartupAttempts < 30)
            GetWorldTimerManager().SetTimerForNextTick(this,
                                                       &AFeatureLabMutableController::Initialize);
        return;
    }
    Body->AttachToComponent(Driver, FAttachmentTransformRules::SnapToTargetNotIncludingScale);
    Driver->VisibilityBasedAnimTickOption =
        EVisibilityBasedAnimTickOption::AlwaysTickPoseAndRefreshBones;
    HideSourceVisuals();
    CharacterInstance = CharacterTemplate->Clone();
    WeaponInstance = WeaponTemplate->Clone();
    CharacterInstance->SetReplacePhysicsAssets(true);
    WeaponInstance->SetReplacePhysicsAssets(true);
    BodyGenerator->SetCustomizableObjectInstance(CharacterInstance);
    HeadGenerator->SetCustomizableObjectInstance(CharacterInstance);
    WeaponGenerator->SetCustomizableObjectInstance(WeaponInstance);
    CharacterInstance->UpdatedDelegate.AddDynamic(
        this, &AFeatureLabMutableController::OnCharacterUpdated);
    WeaponInstance->UpdatedDelegate.AddDynamic(this,
                                               &AFeatureLabMutableController::OnWeaponUpdated);
    UpdateCharacter();
    UpdateWeapon();
}

// 【함수 역할】이름은 Capsule이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
UCapsuleComponent *AFeatureLabMutableController::Capsule() const
{
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return SourcePawn ? SourcePawn->FindComponentByClass<UCapsuleComponent>() : nullptr;
}

// 【함수 역할】이후 작업에 사용할 객체나 값을 찾는다. 찾지 못했을 때 빈 참조가 반환될 수 있으므로 호출하는 쪽의 검사도 필요하다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
FVector AFeatureLabMutableController::GetMovementCapsuleSize() const
{
    const UCapsuleComponent *Value = Capsule();
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return Value ? FVector(Value->GetUnscaledCapsuleRadius(), Value->GetUnscaledCapsuleHalfHeight(),
                           0)
                 : FVector::ZeroVector;
}

// 【함수 역할】이름은 OnCharacterUpdated이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabMutableController::OnCharacterUpdated(UCustomizableObjectInstance *Instance)
{
    ++CharacterUpdates;
    // Mutable's instance delegate can run before every component usage has
    // installed its new mesh. Inspect the applied output on the next tick.
    GetWorldTimerManager().SetTimerForNextTick(
        this, &AFeatureLabMutableController::ApplyGeneratedAppearance);
}

// 【함수 역할】이름은 AreCharacterMeshesApplied이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
bool AFeatureLabMutableController::AreCharacterMeshesApplied() const
{
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return CharacterInstance && Body->GetSkeletalMeshAsset() && Head->GetSkeletalMeshAsset() &&
           Body->GetSkeletalMeshAsset() ==
               CharacterInstance->GetSkeletalMeshComponentSkeletalMesh(FName(TEXT("Body"))) &&
           Head->GetSkeletalMeshAsset() ==
               CharacterInstance->GetSkeletalMeshComponentSkeletalMesh(FName(TEXT("Head")));
}

// 【함수 역할】이름은 IsWeaponMeshApplied이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
bool AFeatureLabMutableController::IsWeaponMeshApplied() const
{
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return WeaponInstance && Weapon->GetSkeletalMeshAsset() &&
           Weapon->GetSkeletalMeshAsset() ==
               WeaponInstance->GetSkeletalMeshComponentSkeletalMesh(FName(TEXT("Gun")));
}

// 【함수 역할】이후 작업에 사용할 객체나 값을 찾는다. 찾지 못했을 때 빈 참조가 반환될 수 있으므로 호출하는 쪽의 검사도 필요하다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
FVector AFeatureLabMutableController::GetExpectedMovementCapsuleSize() const
{
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Body->GetSkeletalMeshAsset() || !Head->GetSkeletalMeshAsset())
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return FVector::ZeroVector;
    const FVector Extent = Body->GetSkeletalMeshAsset()->GetBounds().BoxExtent;
    FBox Combined = Body->GetSkeletalMeshAsset()->GetBounds().GetBox();
    Combined += Head->GetSkeletalMeshAsset()->GetBounds().GetBox();
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return FVector(
        FMath::Clamp(static_cast<float>(FMath::Max(Extent.X, Extent.Y)) * 0.65f, 25.0f, 55.0f),
        FMath::Clamp(static_cast<float>(Combined.GetExtent().Z), 80.0f, 130.0f), 0);
}

// 【함수 역할】Mutable이 실제로 생성한 메시와 재질을 실행 캐릭터에 적용한다. 비동기 생성 요청 직후의 예전 메시와 완료 결과를 구분하는 지점이다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabMutableController::ApplyGeneratedAppearance()
{
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!AreCharacterMeshesApplied())
        return;
    HideSourceVisuals();
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (RetargetAnimationClass)
        Body->SetAnimInstanceClass(RetargetAnimationClass);
    Head->SetLeaderPoseComponent(Body, true, false);
    FitMovementCapsule();
    AppliedBodyMesh = Body->GetSkeletalMeshAsset();
    AppliedHeadMesh = Head->GetSkeletalMeshAsset();
    ++AppearanceApplications;
}

// 【함수 역할】원본 Pawn의 모든 스켈레탈 메시를 화면에서 숨긴다. Mutable 옷 사이로 원래 마네킹이 보이던 문제를 고친 부분이다. 원본 뼈 계산은 계속해야 리타게팅이 작동하므로 포즈 갱신까지 끄지 않는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabMutableController::HideSourceVisuals()
{
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!SourcePawn)
        return;
    // GASP can own both an animation driver and a separate visual mesh.
    // Keep their animation evaluation, but render only Mutable's output.
    TArray<USkeletalMeshComponent *> SourceMeshes;
    SourcePawn->GetComponents(SourceMeshes);
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (USkeletalMeshComponent *Mesh : SourceMeshes)
    {
        Mesh->VisibilityBasedAnimTickOption =
            EVisibilityBasedAnimTickOption::AlwaysTickPoseAndRefreshBones;
        // 화면 표시 여부를 바꾼다. 뼈 포즈 계산이나 물리까지 중단하는 호출과는 다르다.
        Mesh->SetHiddenInGame(true, false);
        // 화면 표시 여부를 바꾼다. 뼈 포즈 계산이나 물리까지 중단하는 호출과는 다르다.
        Mesh->SetVisibility(false, false);
    }
}

// 【함수 역할】이름은 FitMovementCapsule이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabMutableController::FitMovementCapsule()
{
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!AreCharacterMeshesApplied())
        return;
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (UCapsuleComponent *Shape = Capsule(); Shape && Body->GetSkeletalMeshAsset())
    {
        const FVector Desired = GetExpectedMovementCapsuleSize();
        const float Radius = Desired.X;
        const float HalfHeight = Desired.Y;
        const float OldHeight = Shape->GetUnscaledCapsuleHalfHeight();
        Shape->SetCapsuleSize(Radius, HalfHeight, true);
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (Driver)
        {
            FVector Relative = Driver->GetRelativeLocation();
            Relative.Z -= HalfHeight - OldHeight;
            Driver->SetRelativeLocation(Relative);
        }
        SourcePawn->AddActorWorldOffset(FVector(0, 0, HalfHeight - OldHeight), false, nullptr,
                                        ETeleportType::TeleportPhysics);
    }
}

// 【함수 역할】이름은 OnWeaponUpdated이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabMutableController::OnWeaponUpdated(UCustomizableObjectInstance *Instance)
{
    ++WeaponUpdates;
}
// 【함수 역할】입력이나 현재 선택값을 실제 객체의 상태에 반영한다. 값 저장과 화면·물리·애니메이션 갱신 호출을 함께 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabMutableController::UpdateCharacter()
{
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (CharacterInstance)
        CharacterInstance->UpdateSkeletalMeshAsync(true, true);
}
// 【함수 역할】입력이나 현재 선택값을 실제 객체의 상태에 반영한다. 값 저장과 화면·물리·애니메이션 갱신 호출을 함께 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabMutableController::UpdateWeapon()
{
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (WeaponInstance)
        WeaponInstance->UpdateSkeletalMeshAsync(true, true);
}

// 【함수 역할】입력이나 현재 선택값을 실제 객체의 상태에 반영한다. 값 저장과 화면·물리·애니메이션 갱신 호출을 함께 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabMutableController::SetOutfitPreset(int32 Preset)
{
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!CharacterInstance)
        return;
    bOutfitVariant = Preset != 0;
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (const FString &Name : {FString(TEXT("Jacket")), FString(TEXT("Pants")),
                                FString(TEXT("Head Accessories")), FString(TEXT("Shoes"))})
    {
        FString Value = CharacterTemplate->GetIntParameterSelectedOption(Name);
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (bOutfitVariant)
        {
            // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
            if (Name == TEXT("Jacket"))
                Value = TEXT("Jacket_B");
            // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
            if (Name == TEXT("Pants"))
                Value = TEXT("Scifi Pants");
            // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
            if (Name == TEXT("Head Accessories"))
                Value = TEXT("Helmet_B");
            // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
            if (Name == TEXT("Shoes"))
                Value = TEXT("Sneakers");
        }
        CharacterInstance->SetIntParameterSelectedOption(Name, Value);
    }
    UpdateCharacter();
}

// 【함수 역할】입력이나 현재 선택값을 실제 객체의 상태에 반영한다. 값 저장과 화면·물리·애니메이션 갱신 호출을 함께 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabMutableController::SetBodyBlend(float Value)
{
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!CharacterInstance)
        return;
    CharacterInstance->SetFloatParameterSelectedOption(TEXT("Body Blend"),
                                                       FMath::Clamp(Value, 0.0f, 1.0f));
    UpdateCharacter();
}

// 【함수 역할】입력이나 현재 선택값을 실제 객체의 상태에 반영한다. 값 저장과 화면·물리·애니메이션 갱신 호출을 함께 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabMutableController::SetColorPreset(int32 Preset)
{
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!CharacterInstance)
        return;
    bColorVariant = Preset != 0;
    // Base Color alone does not drive the selected clothes in this sample.
    // Update the active garment and shoe parameters through Mutable as well.
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (const FString &Name : {FString(TEXT("Base Color")), FString(TEXT("Color Cloth and Shoes")),
                                FString(TEXT("Scifi Base Color")), FString(TEXT("Shoes Color 1")),
                                FString(TEXT("Shoes Color 2"))})
    {
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (!CharacterInstance->ContainsVectorParameter(Name))
            continue;
        const FVector4f Color = bColorVariant
                                    ? FVector4f(0.08f, 0.2f, 0.8f, 1.0f)
                                    : CharacterTemplate->GetVectorParameterSelectedOption(Name);
        CharacterInstance->SetVectorParameterSelectedOption(Name, Color);
    }
    UpdateCharacter();
}

// 【함수 역할】입력이나 현재 선택값을 실제 객체의 상태에 반영한다. 값 저장과 화면·물리·애니메이션 갱신 호출을 함께 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabMutableController::SetWeaponPreset(int32 Preset)
{
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!WeaponInstance)
        return;
    bWeaponVariant = Preset != 0;
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (const FString &Name :
         {FString(TEXT("Barrels")), FString(TEXT("Scopes")), FString(TEXT("Color Pattern"))})
    {
        FString Value = WeaponTemplate->GetIntParameterSelectedOption(Name);
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (bWeaponVariant)
        {
            // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
            if (Name == TEXT("Barrels"))
                Value = TEXT("Mutablaster");
            // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
            if (Name == TEXT("Scopes"))
                Value = TEXT("Snope");
            // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
            if (Name == TEXT("Color Pattern"))
                Value = TEXT("Tool");
        }
        WeaponInstance->SetIntParameterSelectedOption(Name, Value);
    }
    WeaponInstance->SetFloatParameterSelectedOption(
        TEXT("Glow Color"),
        bWeaponVariant ? 0.85f
                       : WeaponTemplate->GetFloatParameterSelectedOption(TEXT("Glow Color")));
    UpdateWeapon();
}

// 【함수 역할】실험 상태를 코드에 적힌 기준값으로 되돌린다. 위치·속도·재생 시간·물리 상태 중 무엇을 복구하는지 아래 대입과 호출을 확인한다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabMutableController::ResetAppearance()
{
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!CharacterInstance || !WeaponInstance)
        return;
    bBodyVariant = bColorVariant = false;
    CharacterInstance->SetFloatParameterSelectedOption(
        TEXT("Body Blend"), CharacterTemplate->GetFloatParameterSelectedOption(TEXT("Body Blend")));
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (const FString &Name : {FString(TEXT("Base Color")), FString(TEXT("Color Cloth and Shoes")),
                                FString(TEXT("Scifi Base Color")), FString(TEXT("Shoes Color 1")),
                                FString(TEXT("Shoes Color 2"))})
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (CharacterInstance->ContainsVectorParameter(Name))
            CharacterInstance->SetVectorParameterSelectedOption(
                Name, CharacterTemplate->GetVectorParameterSelectedOption(Name));
    SetOutfitPreset(0);
    SetWeaponPreset(0);
}

// 【함수 역할】현재 선택 상태를 다음 상태로 바꾸고 결과에 반영한다. 켬·끔 전환인지 여러 선택지 순환인지 조건문을 따라 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabMutableController::ToggleOutfit()
{
    SetOutfitPreset(bOutfitVariant ? 0 : 1);
}
// 【함수 역할】현재 선택 상태를 다음 상태로 바꾸고 결과에 반영한다. 켬·끔 전환인지 여러 선택지 순환인지 조건문을 따라 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabMutableController::ToggleBody()
{
    bBodyVariant = !bBodyVariant;
    SetBodyBlend(bBodyVariant ? 1.0f : 0.0f);
}
// 【함수 역할】현재 선택 상태를 다음 상태로 바꾸고 결과에 반영한다. 켬·끔 전환인지 여러 선택지 순환인지 조건문을 따라 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabMutableController::ToggleColor()
{
    bColorVariant = !bColorVariant;
    SetColorPreset(bColorVariant ? 1 : 0);
}
// 【함수 역할】현재 선택 상태를 다음 상태로 바꾸고 결과에 반영한다. 켬·끔 전환인지 여러 선택지 순환인지 조건문을 따라 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabMutableController::ToggleWeapon()
{
    SetWeaponPreset(bWeaponVariant ? 0 : 1);
}

// 【함수 역할】매 갱신 시점에 상태를 확인하고 동작을 진행한다. DeltaSeconds는 이번 갱신까지 지난 시간이며, 함수가 1초에 정확히 60번 불린다고 가정하지 않는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabMutableController::Tick(float DeltaSeconds)
{
    // 부모 클래스의 기본 처리를 먼저/함께 실행한다. 자식 클래스의 추가 작업만으로 엔진 기본 동작을 대체하지 않는다.
    Super::Tick(DeltaSeconds);
    // Instance updates can precede component mesh installation by more than one tick.
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (AreCharacterMeshesApplied() && (AppliedBodyMesh.Get() != Body->GetSkeletalMeshAsset() ||
                                        AppliedHeadMesh.Get() != Head->GetSkeletalMeshAsset()))
        ApplyGeneratedAppearance();
    else if (AreCharacterMeshesApplied() &&
             !GetMovementCapsuleSize().Equals(GetExpectedMovementCapsuleSize(), 0.001))
        FitMovementCapsule();
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (bShowHelp && GEngine)
    {
        const FVector Size = GetMovementCapsuleSize();
        GEngine->AddOnScreenDebugMessage(
            static_cast<uint64>(GetUniqueID()), 0.15f, FColor::Green,
            FString::Printf(
                TEXT(
                    "07 | Mutable + GASP/Mover | 1 outfit 2 body 3 color 4 weapon R reset | collider R %.1f H %.1f | updates %d/%d"),
                Size.X, Size.Y, CharacterUpdates, WeaponUpdates));
    }
}

// 【함수 역할】클래스의 기본 부품과 기본값을 준비하는 생성자다. 이 시점에는 게임 월드가 모두 준비됐다고 가정하지 않는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
AFeatureLabLiveLinkSource::AFeatureLabLiveLinkSource()
{
    PrimaryActorTick.bCanEverTick = true;
    PrimaryActorTick.TickGroup = TG_PostUpdateWork;
}

// 【함수 역할】이름은 InitializeSource이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
bool AFeatureLabLiveLinkSource::InitializeSource()
{
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!SourceActor)
        SourceActor = UGameplayStatics::GetPlayerPawn(this, 0);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!SourceActor)
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return false;
    TArray<USkeletalMeshComponent *> Components;
    SourceActor->GetComponents(Components);
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (USkeletalMeshComponent *Component : Components)
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (Component->GetFName() == SourceComponentName)
        {
            SourceMesh = Component;
            break;
        }
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!SourceMesh && !Components.IsEmpty())
        SourceMesh = Components[0];
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!SourceMesh || !SourceMesh->GetSkeletalMeshAsset())
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return false;
    Provider = ILiveLinkProvider::CreateLiveLinkProvider(ProviderName);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Provider.IsValid())
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return false;
    SourceMesh->VisibilityBasedAnimTickOption =
        EVisibilityBasedAnimTickOption::AlwaysTickPoseAndRefreshBones;
    FLiveLinkStaticDataStruct StaticData(FLiveLinkSkeletonStaticData::StaticStruct());
    FLiveLinkSkeletonStaticData *Skeleton = StaticData.Cast<FLiveLinkSkeletonStaticData>();
    const FReferenceSkeleton &Ref = SourceMesh->GetSkeletalMeshAsset()->GetRefSkeleton();
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (int32 Index = 0; Index < Ref.GetNum(); ++Index)
    {
        Skeleton->BoneNames.Add(Ref.GetBoneName(Index));
        Skeleton->BoneParents.Add(Ref.GetParentIndex(Index));
    }
    PublishedBoneCount = Ref.GetNum();
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return Provider->UpdateSubjectStaticData(SubjectName, ULiveLinkAnimationRole::StaticClass(),
                                             MoveTemp(StaticData));
}

// 【함수 역할】입력이나 현재 선택값을 실제 객체의 상태에 반영한다. 값 저장과 화면·물리·애니메이션 갱신 호출을 함께 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabLiveLinkSource::SetPublishing(bool bEnabled)
{
    bPublish = bEnabled;
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!bEnabled)
    {
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (Provider.IsValid())
            Provider->RemoveSubject(SubjectName);
        Provider.Reset();
        SourceMesh = nullptr;
    }
}

// 【함수 역할】매 갱신 시점에 상태를 확인하고 동작을 진행한다. DeltaSeconds는 이번 갱신까지 지난 시간이며, 함수가 1초에 정확히 60번 불린다고 가정하지 않는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabLiveLinkSource::Tick(float DeltaSeconds)
{
    // 부모 클래스의 기본 처리를 먼저/함께 실행한다. 자식 클래스의 추가 작업만으로 엔진 기본 동작을 대체하지 않는다.
    Super::Tick(DeltaSeconds);
    // Case 16 uses an explicitly launched, independent digital publisher. Review
    // renders and regular PIE must not create a second provider for that subject.
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (ProviderName == TEXT("FeatureLab Digital Animation") &&
        !FParse::Param(FCommandLine::Get(), TEXT("FeatureLabDigitalPublisher")))
        return;
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!bPublish || (!Provider.IsValid() && !InitializeSource()))
        return;
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!SourceMesh)
        return;
    const TArray<FTransform> Transforms = SourceMesh->GetBoneSpaceTransforms();
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (Transforms.Num() != PublishedBoneCount)
        return;
    FLiveLinkFrameDataStruct Data(FLiveLinkAnimationFrameData::StaticStruct());
    FLiveLinkAnimationFrameData *Frame = Data.Cast<FLiveLinkAnimationFrameData>();
    Frame->Transforms = Transforms;
    Frame->WorldTime = FLiveLinkWorldTime(FPlatformTime::Seconds());
    const int32 FrameNumber =
        static_cast<int32>(FMath::FloorToInt(GetWorld()->GetTimeSeconds() * 30.0));
    Frame->MetaData.SceneTime =
        FQualifiedFrameTime(FFrameTime(FFrameNumber(FrameNumber)), FFrameRate(30, 1));
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (Provider->UpdateSubjectFrameData(SubjectName, MoveTemp(Data)))
        ++FramesPublished;
}

// 【함수 역할】레벨 이동이나 실행 종료 때 남은 콜백·참조·임시 상태를 정리한다. 다음 실행에 이전 작업이 남지 않도록 하는 종료 단계다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabLiveLinkSource::EndPlay(const EEndPlayReason::Type Reason)
{
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (Provider.IsValid())
        Provider->RemoveSubject(SubjectName);
    Provider.Reset();
    // 부모 클래스의 기본 처리를 먼저/함께 실행한다. 자식 클래스의 추가 작업만으로 엔진 기본 동작을 대체하지 않는다.
    Super::EndPlay(Reason);
}

// 【함수 역할】클래스의 기본 부품과 기본값을 준비하는 생성자다. 이 시점에는 게임 월드가 모두 준비됐다고 가정하지 않는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
AFeatureLabRigController::AFeatureLabRigController()
{
    PrimaryActorTick.bCanEverTick = true;
    PrimaryActorTick.TickGroup = TG_PrePhysics;
    // 이 액터의 기본 컴포넌트를 만든다. 부품 생성 뒤 장면 부착·재질·충돌 설정이 이어지는지 확인한다.
    RootComponent = CreateDefaultSubobject<USceneComponent>(TEXT("LabRoot"));
    static ConstructorHelpers::FObjectFinder<UStaticMesh> Sphere(
        TEXT("/Engine/BasicShapes/Sphere.Sphere"));
    const TCHAR *MeshNames[] = {TEXT("BaselineMesh"), TEXT("PhysicsMesh"), TEXT("DynamicsMesh")};
    const TCHAR *RigNames[] = {TEXT("BaselineRig"), TEXT("PhysicsRig"), TEXT("DynamicsRig")};
    const TCHAR *BlockerNames[] = {TEXT("BaselineBlocker"), TEXT("PhysicsBlocker"),
                                   TEXT("DynamicsBlocker")};
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (int32 Index = 0; Index < 3; ++Index)
    {
        USkeletalMeshComponent *Mesh =
            // 이 액터의 기본 컴포넌트를 만든다. 부품 생성 뒤 장면 부착·재질·충돌 설정이 이어지는지 확인한다.
            CreateDefaultSubobject<USkeletalMeshComponent>(MeshNames[Index]);
        Mesh->SetupAttachment(RootComponent);
        Mesh->SetRelativeLocation(FVector((Index - 1) * 240.f, 0, 0));
        Mesh->SetCollisionEnabled(ECollisionEnabled::NoCollision);
        Mesh->VisibilityBasedAnimTickOption =
            EVisibilityBasedAnimTickOption::AlwaysTickPoseAndRefreshBones;
        Meshes.Add(Mesh);
        // 이 액터의 기본 컴포넌트를 만든다. 부품 생성 뒤 장면 부착·재질·충돌 설정이 이어지는지 확인한다.
        UControlRigComponent *Rig = CreateDefaultSubobject<UControlRigComponent>(RigNames[Index]);
        Rig->SetupAttachment(Mesh);
        Rig->PrimaryComponentTick.bStartWithTickEnabled = false;
        Rigs.Add(Rig);
        UStaticMeshComponent *Blocker =
            // 이 액터의 기본 컴포넌트를 만든다. 부품 생성 뒤 장면 부착·재질·충돌 설정이 이어지는지 확인한다.
            CreateDefaultSubobject<UStaticMeshComponent>(BlockerNames[Index]);
        Blocker->SetupAttachment(Mesh);
        Blocker->SetStaticMesh(Sphere.Object);
        Blocker->SetCollisionEnabled(ECollisionEnabled::NoCollision);
        Blockers.Add(Blocker);
    }
}

// 【함수 역할】이름은 OnConstruction이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabRigController::OnConstruction(const FTransform &Transform)
{
    // 부모 클래스의 기본 처리를 먼저/함께 실행한다. 자식 클래스의 추가 작업만으로 엔진 기본 동작을 대체하지 않는다.
    Super::OnConstruction(Transform);
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (USkeletalMeshComponent *Mesh : Meshes)
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (Mesh && Mesh->GetSkeletalMeshAsset() != PuppetMesh)
            Mesh->SetSkeletalMeshAsset(PuppetMesh);
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (UStaticMeshComponent *Blocker : Blockers)
    {
        Blocker->SetRelativeLocation(BlockerCenter);
        Blocker->SetRelativeScale3D(FVector(BlockerRadius / 50.f));
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (BlockerMaterial)
            Blocker->SetMaterial(0, BlockerMaterial);
        // 화면 표시 여부를 바꾼다. 뼈 포즈 계산이나 물리까지 중단하는 호출과는 다르다.
        Blocker->SetVisibility(bCollisionsEnabled);
    }
}

// 【함수 역할】이름은 MapRig이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabRigController::MapRig(UControlRigComponent *Component)
{
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Component)
        return;
    Component->ClearMappedElements();
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (USkeletalMeshComponent *Mesh = Cast<USkeletalMeshComponent>(Component->GetAttachParent()))
        Component->AddMappedCompleteSkeletalMesh(Mesh, EControlRigComponentMapDirection::Output);
}

// 【함수 역할】이름은 ConfigureRigs이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabRigController::ConfigureRigs()
{
    ReadyRigCount = 0;
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (int32 Index = 0; Index < Rigs.Num(); ++Index)
    {
        UControlRigComponent *Component = Rigs[Index];
        Component->OnPostInitializeDelegate.RemoveDynamic(this, &AFeatureLabRigController::MapRig);
        Component->OnPreConstructionDelegate.RemoveDynamic(this, &AFeatureLabRigController::MapRig);
        TSubclassOf<UControlRig> Selected =
            Index == 2
                ? (bCollisionsEnabled ? DynamicsRigClass : DynamicsNoColliderRigClass)
                : (Index == 0 || bCollisionsEnabled ? PhysicsRigClass : PhysicsNoColliderRigClass);
        Component->SetControlRigAssetReference(FControlRigAssetStrongReference());
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (!Selected)
            continue;
        Component->SetControlRigAssetReference(FControlRigAssetStrongReference(Selected));
        MapRig(Component);
        Component->SetComponentTickEnabled(false);
        Component->Update(0.f);
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (UControlRig *Rig = Component->GetControlRig())
            // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
            if (Rig->GetHierarchy()->Contains(
                    FRigElementKey(TEXT("tail_4"), ERigElementType::Bone)))
                ++ReadyRigCount;
    }
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (UStaticMeshComponent *Blocker : Blockers)
        // 화면 표시 여부를 바꾼다. 뼈 포즈 계산이나 물리까지 중단하는 호출과는 다르다.
        Blocker->SetVisibility(bCollisionsEnabled);
    SolveRigs(0.f);
}

// 【함수 역할】액터가 게임 월드에서 실행을 시작할 때 엔진이 호출한다. 생성자에서 부품을 만든 뒤 실제 월드·플레이어·입력과 연결하는 초기 준비 단계다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabRigController::BeginPlay()
{
    // 부모 클래스의 기본 처리를 먼저/함께 실행한다. 자식 클래스의 추가 작업만으로 엔진 기본 동작을 대체하지 않는다.
    Super::BeginPlay();
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (USkeletalMeshComponent *Mesh : Meshes)
        Mesh->AddTickPrerequisiteActor(this);
    // 【함수 역할】이후 작업에 사용할 객체나 값을 찾는다. 찾지 못했을 때 빈 참조가 반환될 수 있으므로 호출하는 쪽의 검사도 필요하다.
    // 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (APlayerController *PC = UGameplayStatics::GetPlayerController(this, 0))
    {
        EnableInput(PC);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::B, IE_Pressed, this, &AFeatureLabRigController::CycleBlend);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::V, IE_Pressed, this,
                                &AFeatureLabRigController::ToggleCollisions);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::SpaceBar, IE_Pressed, this, &AFeatureLabRigController::Kick);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::R, IE_Pressed, this,
                                &AFeatureLabRigController::RestartSimulation);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::P, IE_Pressed, this, &AFeatureLabRigController::TogglePause);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::C, IE_Pressed, this,
                                &AFeatureLabRigController::ToggleCamera);
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (OverviewCamera)
            PC->SetViewTarget(OverviewCamera);
    }
    ConfigureRigs();
}

// 【함수 역할】이름은 SolveRigs이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabRigController::SolveRigs(float DeltaSeconds)
{
    MotionInput = FMath::Sin(SimulationTime * (2.f * PI * 0.55f)) + KickOffset;
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (int32 Index = 0; Index < Rigs.Num(); ++Index)
    {
        UControlRigComponent *Component = Rigs[Index];
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (!Component || !Component->GetControlRig())
            continue;
        Component->SetControlFloat(TEXT("BaseMotion"), MotionInput);
        Component->SetControlFloat(TEXT("PhysicsAlpha"), Index == 0 ? 0.f : PhysicsAlpha);
        Component->Update(DeltaSeconds);
    }
    ++SolveCount;
}

// 【함수 역할】매 갱신 시점에 상태를 확인하고 동작을 진행한다. DeltaSeconds는 이번 갱신까지 지난 시간이며, 함수가 1초에 정확히 60번 불린다고 가정하지 않는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabRigController::Tick(float DeltaSeconds)
{
    // 부모 클래스의 기본 처리를 먼저/함께 실행한다. 자식 클래스의 추가 작업만으로 엔진 기본 동작을 대체하지 않는다.
    Super::Tick(DeltaSeconds);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!bPaused && ReadyRigCount == 3)
    {
        const float Step = FMath::Clamp(DeltaSeconds, 0.f, 0.05f);
        SimulationTime += Step;
        KickOffset = FMath::FInterpTo(KickOffset, 0.f, Step, 4.f);
        SolveRigs(Step);
    }
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (bShowHelp && GEngine)
        GEngine->AddOnScreenDebugMessage(
            static_cast<uint64>(GetUniqueID()), 0.15f, FColor::Cyan,
            FString::Printf(
                TEXT(
                    "04 | Physics + Dynamics | B blend %.0f%% | V contact %s | SPACE kick | R reset | P %s | C view | ready %d/3"),
                PhysicsAlpha * 100.f, bCollisionsEnabled ? TEXT("ON") : TEXT("OFF"),
                bPaused ? TEXT("PAUSED") : TEXT("PLAYING"), ReadyRigCount));
}

// 【함수 역할】입력이나 현재 선택값을 실제 객체의 상태에 반영한다. 값 저장과 화면·물리·애니메이션 갱신 호출을 함께 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabRigController::SetPhysicsBlend(float InAlpha)
{
    PhysicsAlpha = FMath::Clamp(InAlpha, 0.f, 1.f);
    SolveRigs(0.f);
}
// 【함수 역할】현재 선택 상태를 다음 상태로 바꾸고 결과에 반영한다. 켬·끔 전환인지 여러 선택지 순환인지 조건문을 따라 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabRigController::CycleBlend()
{
    SetPhysicsBlend(PhysicsAlpha < 0.25f ? 0.5f : PhysicsAlpha < 0.75f ? 1.f : 0.f);
}
// 【함수 역할】현재 선택 상태를 다음 상태로 바꾸고 결과에 반영한다. 켬·끔 전환인지 여러 선택지 순환인지 조건문을 따라 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabRigController::ToggleCollisions()
{
    bCollisionsEnabled = !bCollisionsEnabled;
    ConfigureRigs();
}
// 【함수 역할】이름은 Kick이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabRigController::Kick()
{
    KickOffset = 1.5f;
    ++KickCount;
    SolveRigs(0.f);
}
// 【함수 역할】실험 상태를 코드에 적힌 기준값으로 되돌린다. 위치·속도·재생 시간·물리 상태 중 무엇을 복구하는지 아래 대입과 호출을 확인한다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabRigController::RestartSimulation()
{
    SimulationTime = 0.f;
    KickOffset = 0.f;
    PhysicsAlpha = 1.f;
    bCollisionsEnabled = true;
    ++ResetCount;
    ConfigureRigs();
}
// 【함수 역할】현재 선택 상태를 다음 상태로 바꾸고 결과에 반영한다. 켬·끔 전환인지 여러 선택지 순환인지 조건문을 따라 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabRigController::TogglePause()
{
    bPaused = !bPaused;
}
// 【함수 역할】현재 선택 상태를 다음 상태로 바꾸고 결과에 반영한다. 켬·끔 전환인지 여러 선택지 순환인지 조건문을 따라 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabRigController::ToggleCamera()
{
    bInspectionView = !bInspectionView;
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (APlayerController *PC = UGameplayStatics::GetPlayerController(this, 0))
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (AActor *Target = bInspectionView ? InspectionCamera.Get() : OverviewCamera.Get())
            PC->SetViewTargetWithBlend(Target, 0.25f);
}
```

<a id="source-source-mutablesample-featurelabruntime-h"></a>

### FeatureLabRuntime.h

```cpp
// 파일 역할: 메타휴먼·표정·리그·Mutable 실험에 필요한 공통 실행과 검증 기능
// 클래스=작업 종류, 객체=실제 한 개, 포인터(* 또는 TObjectPtr)=다른 객체를 가리키는 참조.
// nullptr은 대상 없음, bool은 참/거짓, TArray는 순서 있는 목록, FString은 문자열이다.
// WITH_EDITOR 구간은 에디터 빌드에서만 사용하는 코드다. 원본과의 토큰 비교 결과는 code-validation.json에 기록한다.

#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "Kismet/BlueprintFunctionLibrary.h"
#include "FeatureLabRuntime.generated.h"

class UAnimSequence;
class UAnimInstance;
class UAudioComponent;
class USoundBase;
class USkeletalMeshComponent;
class USkeletalMesh;
class UCustomizableObjectInstance;
class UCustomizableSkeletalComponent;
class UCapsuleComponent;
class UControlRig;
class UControlRigComponent;
class UStaticMeshComponent;
class UMaterialInterface;
struct ILiveLinkProvider;

// 아래 클래스 또는 구조체를 언리얼이 인식하도록 선언한다. 일반 C++ 선언에 엔진 등록 정보를 덧붙인 것이다.
USTRUCT(BlueprintType)
struct FFeatureLabMeshStats
{
    // 언리얼 헤더 도구가 필요한 보조 코드를 연결하는 매크로다. 함수 본문을 직접 작성하는 자리가 아니다.
    GENERATED_BODY()
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(BlueprintReadOnly) int32 Bones = 0;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(BlueprintReadOnly) int32 Vertices = 0;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(BlueprintReadOnly) int32 Triangles = 0;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(BlueprintReadOnly) int32 Materials = 0;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(BlueprintReadOnly) int32 PhysicsBodies = 0;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(BlueprintReadOnly) int32 SkinWeightVertices = 0;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(BlueprintReadOnly) int32 MaxSkinInfluences = 0;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(BlueprintReadOnly) int32 MorphTargets = 0;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(BlueprintReadOnly) FVector BoundsExtent = FVector::ZeroVector;
};

// 아래 클래스 또는 구조체를 언리얼이 인식하도록 선언한다. 일반 C++ 선언에 엔진 등록 정보를 덧붙인 것이다.
UCLASS()
class MUTABLESAMPLE_API UFeatureLabRuntimeLibrary : public UBlueprintFunctionLibrary
{
    // 언리얼 헤더 도구가 필요한 보조 코드를 연결하는 매크로다. 함수 본문을 직접 작성하는 자리가 아니다.
    GENERATED_BODY()
  public:
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab|Editor")
    static UObject *PrepareLabCrowdCollection();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab|Editor")
    static UObject *GetLabCrowdEditorPipeline(UObject *Collection);
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab|Editor")
    static bool BuildLabCrowdCollection(UObject *Collection);
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab|Editor")
    static UObject *PrepareLabCrowdConfig(const TArray<UObject *> &Instances);
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab|Editor")
    static FString InspectLabMetaHumanTextures(UObject *Character);
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab|Editor")
    static bool EnableLabMetaHumanSkin(UObject *Character);
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab|Editor")
    static TArray<UObject *> PublishLabMetaHumanSkinTextures(UObject *Character);
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab|Editor")
    static UObject *PrepareLabClothCollision();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab|Editor")
    static FString InspectLabClothAsset(UObject *Asset);
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab|Editor")
    static UObject *CreateLabMeshTerrain();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab|Editor")
    static bool SetLabMeshTerrainVariant(UObject *Terrain, int32 Variant);
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab|Editor")
    static FString InspectLabMeshTerrain(UObject *Terrain);
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab|Editor")
    static UObject *CreateLabTerrainPCG(UObject *Graph);
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab|Editor")
    static UObject *GetLabVegetationGraph(UObject *Asset);
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab")
    static FString InspectLabVegetation(UObject *Asset);
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab")
    static FString CaptureLabViewport(const FString &Name);
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab|Editor")
    static FString ManageLabSandbox(const FString &Operation, const FString &Name,
                                    const TArray<FString> &Assets);
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab")
    static FString InspectLabLiveLink(const FString &Subject);
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab")
    static FString InspectLabRendering();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab|Editor")
    static FString ConfigureLabToonProfile(UObject *Asset, int32 Style);
    /** Read editor-owned settings without relying on Python's property wrappers. */
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab|Editor")
    static UObject *ReadLabEditorObject(UObject *Asset, FName PropertyName);
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab|Editor")
    static TArray<UObject *> GetLabUAFGraphs(UObject *Asset);
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab|Editor")
    static UObject *GetLabUAFController(UObject *Asset, const FString &GraphName);
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab|Editor")
    static TArray<FString> ExportLabUAFPython(UObject *Asset);
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab|Editor")
    static bool CompileLabUAF(UObject *Asset);
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab|Editor")
    static FString ReconstructLabAutoEncoder(UObject *Encoder, UObject *Database,
                                             const TArray<UAnimSequence *> &OutputAnimations);
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab|Editor")
    static FString InspectLabAnimGen(UAnimInstance *Instance);
    /** Teleport inside Mover's simulation and clear momentum, keeping its prediction state
     * consistent. */
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab")
    static bool TeleportMover(AActor *Actor, FVector Location, FRotator Rotation);
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintPure, Category = "FeatureLab")
    static TArray<UWorld *> GetPlayWorlds();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintPure, Category = "FeatureLab")
    static FFeatureLabMeshStats InspectMesh(USkeletalMeshComponent *Component);
    /** Evaluate selected LOD0 vertices using the actual current bone pose and skin weights.
     * Component space. */
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintPure, Category = "FeatureLab")
    static TArray<FVector> SampleSkinnedVertices(USkeletalMeshComponent *Component,
                                                 const TArray<int32> &VertexIndices);
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab")
    static bool FinalizeAuthoredAnimation(UAnimSequence *Animation);
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab")
    static bool AuthorPuppetSurfaceData(USkeletalMesh *Mesh);
    /** Full engine CPU skin evaluation, including active morphs. Only use for explicit
     * verification. */
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab")
    static TArray<FVector> SampleFinalSkinVertices(USkeletalMeshComponent *Component,
                                                   const TArray<int32> &VertexIndices);
};

// 아래 클래스 또는 구조체를 언리얼이 인식하도록 선언한다. 일반 C++ 선언에 엔진 등록 정보를 덧붙인 것이다.
UCLASS(Blueprintable)
class MUTABLESAMPLE_API AFeatureLabUAFActor : public AActor
{
    // 언리얼 헤더 도구가 필요한 보조 코드를 연결하는 매크로다. 함수 본문을 직접 작성하는 자리가 아니다.
    GENERATED_BODY()
  public:
    AFeatureLabUAFActor();
    virtual void OnConstruction(const FTransform &Transform) override;
    virtual void BeginPlay() override;
    virtual void EndPlay(const EEndPlayReason::Type EndPlayReason) override;
    virtual void Tick(float DeltaSeconds) override;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab")
    TObjectPtr<USkeletalMeshComponent> UAFMesh;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab")
    TObjectPtr<USkeletalMeshComponent> OriginalMesh;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab")
    TObjectPtr<USkeletalMeshComponent> ReconstructedMesh;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab")
    TObjectPtr<UActorComponent> UAFComponent;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TObjectPtr<USkeletalMesh> PuppetMesh;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TObjectPtr<UObject> AnimationGraph;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TObjectPtr<UAnimSequence> WalkAnimation;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TObjectPtr<UAnimSequence> RunAnimation;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TObjectPtr<UAnimSequence> DecodedWalkAnimation;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TObjectPtr<UAnimSequence> DecodedRunAnimation;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab") bool bUseRun = false;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab") bool bPaused = false;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab")
    bool bLastInputApplied = false;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab") int32 RestartCount = 0;
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void SelectWalk();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void SelectRun();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void TogglePause();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void RestartPlayback();

  private:
    void SetComparisonClips();
    void ApplyGraphInput();
    void RequestRestart();
    void RestartAtFrameEnd();
    FDelegateHandle RestartAtFrameEndHandle;
};

// 아래 클래스 또는 구조체를 언리얼이 인식하도록 선언한다. 일반 C++ 선언에 엔진 등록 정보를 덧붙인 것이다.
UCLASS(Blueprintable)
class MUTABLESAMPLE_API AFeatureLabAnimGenReset : public AActor
{
    // 언리얼 헤더 도구가 필요한 보조 코드를 연결하는 매크로다. 함수 본문을 직접 작성하는 자리가 아니다.
    GENERATED_BODY()
  public:
    AFeatureLabAnimGenReset();
    virtual void BeginPlay() override;
    virtual void Tick(float DeltaSeconds) override;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab") int32 ResetCount = 0;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab") bool bReady = false;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab")
    bool bLastTeleportQueued = false;
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void ResetPlayer();

  private:
    FTransform InitialTransform;
    FRotator InitialControlRotation = FRotator::ZeroRotator;
};

// 아래 클래스 또는 구조체를 언리얼이 인식하도록 선언한다. 일반 C++ 선언에 엔진 등록 정보를 덧붙인 것이다.
UCLASS(Blueprintable)
class MUTABLESAMPLE_API AFeatureLabFacePlayback : public AActor
{
    // 언리얼 헤더 도구가 필요한 보조 코드를 연결하는 매크로다. 함수 본문을 직접 작성하는 자리가 아니다.
    GENERATED_BODY()
  public:
    AFeatureLabFacePlayback();
    virtual void BeginPlay() override;
    virtual void Tick(float DeltaSeconds) override;
    virtual void EndPlay(const EEndPlayReason::Type Reason) override;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TObjectPtr<AActor> Performer;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TObjectPtr<AActor> InspectionCamera;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TObjectPtr<UAnimSequence> FacialAnimation;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TArray<TObjectPtr<UAnimSequence>> FacialVariants;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TArray<FString> FacialVariantNames;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab")
    int32 FacialVariantIndex = 0;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TObjectPtr<UAnimSequence> BodyAnimation;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TArray<TObjectPtr<AActor>> AdditionalPerformers;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    FString FeatureCaption = TEXT("02 | Speech -> MetaHuman");
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TObjectPtr<USoundBase> Speech;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab") bool bShowHelp = true;
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void SelectFacialVariant(int32 Index);
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void CycleFacialVariant();
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab") bool bPaused = false;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab") int32 RestartCount = 0;
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void RestartPlayback();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void TogglePause();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void ToggleCamera();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintPure, Category = "FeatureLab") USkeletalMeshComponent *GetFace() const;

  private:
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY() TObjectPtr<UAudioComponent> Audio;
    TWeakObjectPtr<AActor> PreviousViewTarget;
    bool bInspectionView = false;
    int32 StartupAttempts = 0;
    TArray<USkeletalMeshComponent *> PlaybackMeshes(FName ComponentName) const;
};

/** Mutable output follows the real GASP driver, preserving its Motion Matching/Mover behavior. */
// 아래 클래스 또는 구조체를 언리얼이 인식하도록 선언한다. 일반 C++ 선언에 엔진 등록 정보를 덧붙인 것이다.
UCLASS(Blueprintable)
class MUTABLESAMPLE_API AFeatureLabMutableController : public AActor
{
    // 언리얼 헤더 도구가 필요한 보조 코드를 연결하는 매크로다. 함수 본문을 직접 작성하는 자리가 아니다.
    GENERATED_BODY()
  public:
    AFeatureLabMutableController();
    virtual void BeginPlay() override;
    virtual void Tick(float DeltaSeconds) override;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TObjectPtr<AActor> SourcePawn;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TObjectPtr<UCustomizableObjectInstance> CharacterTemplate;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TObjectPtr<UCustomizableObjectInstance> WeaponTemplate;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TSubclassOf<UAnimInstance> RetargetAnimationClass;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab") bool bShowHelp = true;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab")
    int32 CharacterUpdates = 0;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab") int32 WeaponUpdates = 0;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab")
    TObjectPtr<USkeletalMeshComponent> Body;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab")
    TObjectPtr<USkeletalMeshComponent> Head;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab")
    TObjectPtr<USkeletalMeshComponent> Weapon;
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void SetOutfitPreset(int32 Preset);
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void SetBodyBlend(float Value);
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void SetColorPreset(int32 Preset);
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void SetWeaponPreset(int32 Preset);
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void ResetAppearance();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintPure, Category = "FeatureLab") bool AreCharacterMeshesApplied() const;
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintPure, Category = "FeatureLab") bool IsWeaponMeshApplied() const;
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintPure, Category = "FeatureLab")
    FVector GetExpectedMovementCapsuleSize() const;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab")
    int32 AppearanceApplications = 0;
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintPure, Category = "FeatureLab")
    UCustomizableObjectInstance *GetCharacterInstance() const
    {
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return CharacterInstance;
    }
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintPure, Category = "FeatureLab")
    UCustomizableObjectInstance *GetWeaponInstance() const
    {
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return WeaponInstance;
    }
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintPure, Category = "FeatureLab") FVector GetMovementCapsuleSize() const;

  private:
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY() TObjectPtr<UCustomizableSkeletalComponent> BodyGenerator;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY() TObjectPtr<UCustomizableSkeletalComponent> HeadGenerator;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY() TObjectPtr<UCustomizableSkeletalComponent> WeaponGenerator;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY() TObjectPtr<UCustomizableObjectInstance> CharacterInstance;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY() TObjectPtr<UCustomizableObjectInstance> WeaponInstance;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY() TObjectPtr<USkeletalMeshComponent> Driver;
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION() void OnCharacterUpdated(UCustomizableObjectInstance *Instance);
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION() void OnWeaponUpdated(UCustomizableObjectInstance *Instance);
    void ApplyGeneratedAppearance();
    void FitMovementCapsule();
    void HideSourceVisuals();
    void Initialize();
    void ToggleOutfit();
    void ToggleBody();
    void ToggleColor();
    void ToggleWeapon();
    void UpdateCharacter();
    void UpdateWeapon();
    UCapsuleComponent *Capsule() const;
    bool bOutfitVariant = false;
    bool bBodyVariant = false;
    bool bColorVariant = false;
    bool bWeaponVariant = false;
    int32 StartupAttempts = 0;
    TWeakObjectPtr<USkeletalMesh> AppliedBodyMesh;
    TWeakObjectPtr<USkeletalMesh> AppliedHeadMesh;
};

/** A digital animation publisher using the same Live Link provider protocol as DCC sources. */
// 아래 클래스 또는 구조체를 언리얼이 인식하도록 선언한다. 일반 C++ 선언에 엔진 등록 정보를 덧붙인 것이다.
UCLASS(Blueprintable)
class MUTABLESAMPLE_API AFeatureLabLiveLinkSource : public AActor
{
    // 언리얼 헤더 도구가 필요한 보조 코드를 연결하는 매크로다. 함수 본문을 직접 작성하는 자리가 아니다.
    GENERATED_BODY()
  public:
    AFeatureLabLiveLinkSource();
    virtual bool ShouldTickIfViewportsOnly() const override
    {
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return bPublishInEditor;
    }
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void SetPublishing(bool bEnabled);
    virtual void Tick(float DeltaSeconds) override;
    virtual void EndPlay(const EEndPlayReason::Type Reason) override;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TObjectPtr<AActor> SourceActor;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    FName SourceComponentName = TEXT("SkeletalMesh");
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    FName SubjectName = TEXT("FeatureLab_Body");
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    FString ProviderName = TEXT("FeatureLab Digital Animation");
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab") bool bPublish = true;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    bool bPublishInEditor = false;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab")
    int32 FramesPublished = 0;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab")
    int32 PublishedBoneCount = 0;

  private:
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY() TObjectPtr<USkeletalMeshComponent> SourceMesh;
    TSharedPtr<ILiveLinkProvider> Provider;
    bool InitializeSource();
};

/** Three identical authored characters: animation input, rigid-body rig, particle dynamics rig. */
// 아래 클래스 또는 구조체를 언리얼이 인식하도록 선언한다. 일반 C++ 선언에 엔진 등록 정보를 덧붙인 것이다.
UCLASS(Blueprintable)
class MUTABLESAMPLE_API AFeatureLabRigController : public AActor
{
    // 언리얼 헤더 도구가 필요한 보조 코드를 연결하는 매크로다. 함수 본문을 직접 작성하는 자리가 아니다.
    GENERATED_BODY()
  public:
    AFeatureLabRigController();
    virtual void OnConstruction(const FTransform &Transform) override;
    virtual void BeginPlay() override;
    virtual void Tick(float DeltaSeconds) override;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TObjectPtr<USkeletalMesh> PuppetMesh;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TSubclassOf<UControlRig> PhysicsRigClass;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TSubclassOf<UControlRig> PhysicsNoColliderRigClass;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TSubclassOf<UControlRig> DynamicsRigClass;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TSubclassOf<UControlRig> DynamicsNoColliderRigClass;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TObjectPtr<UMaterialInterface> BlockerMaterial;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TObjectPtr<AActor> OverviewCamera;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TObjectPtr<AActor> InspectionCamera;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    FVector BlockerCenter = FVector(0, -85, 56);
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab") float BlockerRadius = 18.f;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab") bool bShowHelp = true;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab")
    TArray<TObjectPtr<USkeletalMeshComponent>> Meshes;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab")
    TArray<TObjectPtr<UControlRigComponent>> Rigs;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab")
    TArray<TObjectPtr<UStaticMeshComponent>> Blockers;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab") float PhysicsAlpha = 1.f;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab")
    float SimulationTime = 0.f;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab") float MotionInput = 0.f;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab")
    bool bCollisionsEnabled = true;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab") bool bPaused = false;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab") int32 ReadyRigCount = 0;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab") int32 ResetCount = 0;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab") int32 KickCount = 0;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab") int32 SolveCount = 0;
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void SetPhysicsBlend(float InAlpha);
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void CycleBlend();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void ToggleCollisions();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void Kick();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void RestartSimulation();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void TogglePause();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void ToggleCamera();

  private:
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION() void MapRig(UControlRigComponent *Component);
    void ConfigureRigs();
    void SolveRigs(float DeltaSeconds);
    float KickOffset = 0.f;
    bool bInspectionView = false;
};
```
