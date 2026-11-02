

W를 눌렀을 때 캐릭터가 앞으로 가는 것과, 그 상황에 맞는 걸음이 자연스럽게 나오는 것은 별개다. 이번에는 에픽의 Game Animation Sample Project, 줄여서 **GASP**를 가져와 이동과 애니메이션을 함께 살폈다.

**Mover**는 캐릭터의 실제 이동을, **Motion Matching**은 이동에 맞는 애니메이션 포즈 선택을 맡는다. 이번 장면은 공식 샘플을 기반으로 경사, 점프, 스마트 벤치와 네트워크 복구 검증을 추가한 구성이다.

![공식 샘플 기반 이동 실험](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/05/result.png)

**참고 — 사진과 작업에 나온 영어 이름**

| 영어 표시 | 한국어 뜻과 쓰임 |
|---|---|
| `Game Animation Sample` | 에픽 공식 애니메이션 샘플의 실험 구역 |
| `Chooser` | 조건에 따라 사용할 동작 자료를 고르는 기능 |
| `Motion Matching` | 이동 상황에 알맞은 자세를 찾아 선택하는 방식 |


## 다른 실험과 맵 위치가 다르다

1. 콘텐츠 브라우저의 `Content → Levels`로 간다.
2. **DefaultLevel**을 더블클릭한다. `FeatureLab/Maps`만 검색하면 이 파일이 안 보일 수 있다.
3. 위쪽 **▶ Play**를 누르고 게임 화면을 클릭한다.
4. **WASD**로 이동하고 마우스로 시점을 바꾼다.
5. **Left Ctrl**로 걷기, **Left Shift**로 빠르게 이동하기를 비교한다.
6. **C**로 웅크리기, 빠르게 이동하는 동안 C로 슬라이드 상태를 확인한다.
7. **Space**로 점프와 장애물 통과를 확인한다.
8. `FL05_SmartBench` 앞에서는 **E**로 상호작용한다. 벤치가 캐릭터 앞에 있어야 한다.

## 캐릭터와 애니메이션 파일은 따로 열어 본다

**■ Stop**을 누르고 콘텐츠 브라우저에서 `SandboxCharacter_Mover`를 검색한다. 캐릭터 블루프린트를 열어 이동 부품을 확인한다. 이어서 `SandboxCharacter_Mover_ABP`를 찾는다. `ABP`는 Animation Blueprint, 즉 캐릭터의 애니메이션을 계산하는 파일이다.

![GASP 관련 에셋을 찾는 화면](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/05/folder.png)

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
| `GASP / Game Animation Sample` | 에픽의 게임 애니메이션 샘플 프로젝트. |
| `Motion Matching` | 현재 이동과 맞는 동작을 자료에서 검색해 고르는 방식. |
| `Pose Search Database` | 검색 후보 동작을 모아 둔 데이터베이스. |
| `Pose Search Schema` | 검색에서 어떤 자세·이동 특성을 비교할지 정한 기준. |
| `Trajectory` | 캐릭터가 이동할 것으로 예상하는 경로. |
| `Mover` | 이동 시뮬레이션과 이동 상태를 다루는 프레임워크. |
| `AnimGraph` | 애니메이션 포즈를 계산하는 그래프. |
| `EventGraph` | 이벤트가 발생했을 때 실행할 로직을 연결하는 그래프. |
| `State Machine` | 동작 상태와 상태 전환을 관리하는 구성. |
| `Debug / Preview Instance` | 실행 상태 확인 / 미리보기에서 사용할 인스턴스 선택. |
| `SandboxCharacter_Mover_ABP` | 이 프로젝트에서 사용하는 GASP 기반 Mover 애니메이션 Blueprint. |
| `Game Animation Sample 영역 표지` | 공식 샘플의 이동 시험 구역 표시. 이동 시험은 본문 키 입력과 실제 검사 기록을 함께 본다. |


![실제 이동 캐릭터 또는 애니메이션 에셋 편집기](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/05/settings.png)

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
| `GASP / Game Animation Sample` | 에픽의 게임 애니메이션 샘플 프로젝트. |
| `Motion Matching` | 현재 이동과 맞는 동작을 자료에서 검색해 고르는 방식. |
| `Pose Search Database` | 검색 후보 동작을 모아 둔 데이터베이스. |
| `Pose Search Schema` | 검색에서 어떤 자세·이동 특성을 비교할지 정한 기준. |
| `Trajectory` | 캐릭터가 이동할 것으로 예상하는 경로. |
| `Mover` | 이동 시뮬레이션과 이동 상태를 다루는 프레임워크. |
| `AnimGraph` | 애니메이션 포즈를 계산하는 그래프. |
| `EventGraph` | 이벤트가 발생했을 때 실행할 로직을 연결하는 그래프. |
| `State Machine` | 동작 상태와 상태 전환을 관리하는 구성. |
| `Debug / Preview Instance` | 실행 상태 확인 / 미리보기에서 사용할 인스턴스 선택. |
| `SandboxCharacter_Mover_ABP` | 이 프로젝트에서 사용하는 GASP 기반 Mover 애니메이션 Blueprint. |
| `Game Animation Sample 영역 표지` | 공식 샘플의 이동 시험 구역 표시. 이동 시험은 본문 키 입력과 실제 검사 기록을 함께 본다. |
| `Find / Hide Unrelated` | 그래프에서 찾기 / 선택 노드와 관계없는 부분 숨기기. |
| `Class Settings / Class Defaults` | 클래스 구성 / 클래스 기본값 편집. |
| `Parent class: Anim Instance` | 이 Blueprint의 부모가 애니메이션 실행 인스턴스 클래스라는 뜻. |
| `Pose Watch Manager / My Blueprint` | 포즈 관찰 도구 / 현재 Blueprint의 그래프·함수·변수 목록. |
| `Movement Analysis / Root Offset / Steering` | 이동 상태 분석 / 루트 위치·회전 보정 / 진행 방향 조향. |
| `Animation Layers / Interfaces` | 애니메이션 계산 층 / 약속된 함수 연결 규격. |
| `Functions / Override` | 함수 목록 / 부모가 제공한 함수를 이 Blueprint에서 구현하기. |
| `Blueprint Thread Safe Update Animation` | 애니메이션 값을 스레드 안전 조건에서 갱신하는 이벤트 함수. |
| `Just Teleported` | 방금 순간 이동했는지 판단하는 항목. |
| `Macros / Variables / Boolean` | 여러 노드 묶음 / 값 보관 이름 / 참·거짓 자료형. |
| `Aim Offset / Additive Lean / Foot Placement` | 조준 방향 보정 / 기울임을 추가하는 동작 / 발 배치 보정. |
| `Has Owning Actor / Has Mover` | 소유 액터가 있는지 / Mover가 있는지 확인하는 값. |
| `Compiler Results / Find Results` | 컴파일 검사 결과 / 그래프 검색 결과. |
| `Movement Mode / OnGround` | 이동 모드 / 지면 위 상태. |
| `Rotation Mode / OrientToMovement` | 회전 방식 / 이동 방향을 바라보는 방식. |
| `Movement State / Idle / Moving` | 이동 상태 / 대기 / 이동 중. |
| `Gait / Walk` | 보행 유형 / 걷기. |
| `Last Frame / Recent / Time / Last State Time` | 직전 프레임 값 / 최근 값 / 현재 상태 시간 / 이전 상태 시간. |
| `NOT YET FULLY TUNED` | 아직 완전히 조정되지 않았다는 공식 샘플의 주석. |
| `Steering - Node is experimental` | 조향 노드가 실험 단계라는 컴파일 경고. 오류와 구분해 읽는다. |
| `Bone manipulation is disabled in this mode` | 현재 미리보기 모드에서 뼈 직접 조작이 비활성화됐다는 안내. |
| `Post process Animation Blueprint / Disable / Edit` | 최종 후처리 애니메이션 Blueprint / 사용 끄기 / 열어 편집하기. 이번 사진을 따라 설정을 임의로 끄는 단계는 없다. |


Motion Matching은 준비된 동작 데이터에서 현재 자세와 앞으로의 이동 조건에 맞는 포즈를 찾는 방식이다. 이번에는 공식 샘플의 움직임 자료와 구조를 사용했다. 빈 애니메이션 그래프에서 걷기·달리기 전환만 만든 결과를 Motion Matching으로 부르지 않았다.

Mover에서는 위치와 속도만 보지 않고 현재 이동 상태, 바닥과의 접촉, 입력이 시뮬레이션에 적용되는 시점을 함께 확인했다. 시뮬레이션은 시간에 따라 이동 상태를 계산하는 과정이다.

## 경사로에서는 발뼈 위치만 재면 안 됐다

10·15·20·25·30·35·40도 경사에서 오르내리는 코스를 사용했다. 발이 바닥과 얼마나 떨어지는지 확인할 때 ‘발뼈의 중심’을 ‘발바닥 표면’과 같은 위치로 취급하면 측정이 틀어진다.

그래서 발의 낮은 쪽 ball 뼈와 실제 충돌 표면의 법선 방향을 기준으로 거리를 기록했다. 법선은 표면이 향하는 방향이다. 경사에서는 수직 Z 차이만 재는 것과 표면에 직각인 거리가 다르다. 이 기록을 발바닥 전체가 항상 완벽하게 붙는다는 주장으로 넓히지는 않았다.

점프는 실제 키 입력 후 높이 변화를 확인했고 약 119.33cm를 기록했다. 숫자는 이번 샘플 설정에서 측정한 값이다.

## 벤치는 장식이 아니라 상태 전환 실험이다

`FL05_SmartBench`는 약 `(-650, 1000, 0)` 위치에 배치했다. 캐릭터가 벤치 앞에 접근해 상호작용하면 진입·착석·이탈 과정이 이어지는지 확인했다. 앉는 애니메이션 파일을 단독 재생하는 것과 실제 상호작용 상태에 진입하는 것을 구분했다.

장면에서 벤치를 못 찾겠다면 실행을 멈춘 뒤 **Outliner 검색창**에 액터 이름을 넣는다. 액터를 선택하면 디테일의 Transform에서 위치를 확인할 수 있다. Transform은 위치·회전·크기를 모은 설정이다.

## 이동 초기화에서 직접 순간이동만 쓰지 않은 이유

처음 위치로 돌아가는 코드를 작성할 때 액터 좌표만 바꾸면, 다음 Mover 계산이 이전 상태를 다시 적용할 수 있다. 그래서 속도를 0으로 만드는 효과와 순간이동 효과를 **Mover 시뮬레이션 안에 전달**했다.

네트워크 확인은 실제 두 월드를 만들고 양쪽 송신에 100ms 지연을 적용했다. 입력을 놓은 뒤와 권한 상태로 복구한 뒤 위치 차이가 0으로 돌아오는지 검사했다. 실제 인터넷 서버 운영이나 모든 지연 조건을 검증한 것은 아니다.

![이동 샘플의 실행 장면](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/05/motion.gif)

## 따라 하며 확인할 것

캐릭터가 제자리에서 발만 움직이면 실제 위치와 애니메이션을 따로 본다. 장애물 앞에서 E가 반응하지 않으면 입력 초점과 캐릭터의 바라보는 방향을 확인한다. 네트워크 검증 후에는 원래 에디터 네트워크 설정으로 복구됐는지도 확인한다.

전체 구현·측정 코드는 [작업 파일 목록](#code-index)의 05번에 연결했다. 공통 런타임은 [FeatureLabRuntime.cpp](#source-source-mutablesample-featurelabruntime-cpp)와 [헤더](#source-source-mutablesample-featurelabruntime-h)에 있다. 공식 샘플의 파일은 샘플 내부 참조가 많으므로 캐릭터 파일 하나만 새 프로젝트에 복사하면 같은 구성이 완성되지 않는다.


위 GIF는 방향 입력을 넣기 전 기본 대기 상태의 연속 프레임이다. 이동·외형 변경·상호작용 입력의 결과와 반복 검사는 본문의 단계 및 연결한 검증 기록에서 확인한다.

<!-- korean-ui-explanations -->


<a id="code-index"></a>

## 이 장면을 만든 코드

아래는 제작과 검증에 사용한 전체 코드에 한국어 주석을 더한 설명본이다. `.py`는 언리얼 에디터에서 실행하는 제작·검사 코드, `.cpp`와 `.h`는 프로젝트에 넣어 빌드하는 코드다. 파일마다 첫 주석에 역할과 입력 조건을 적었다.


<a id="source-lab-lab-add-gasp-bench-py"></a>

### lab_add_gasp_bench.py

```python
# 파일 역할: EpicFeatureLab의 lab_add_gasp_bench 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/Levels/DefaultLevel
#   /Game/Blueprints/SmartObjects/Bench/BP_SmartBench

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
assert editor.load_level("/Game/Levels/DefaultLevel")
# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
actors = unreal.get_editor_subsystem(unreal.EditorActorSubsystem)
# 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
bench = next(
    (a for a in actors.get_all_level_actors() if a.get_actor_label() == "FL05_SmartBench"), None
)
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not bench 지정한 클래스의 실제 액터를 편집 장면에 만든다. 에셋 파일 생성과는 다르다.
if not bench:
    cls = unreal.EditorAssetLibrary.load_blueprint_class(
        "/Game/Blueprints/SmartObjects/Bench/BP_SmartBench"
    )
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert cls
    # 지정한 클래스의 실제 액터를 편집 장면에 만든다. 에셋 파일 생성과는 다르다.
    bench = actors.spawn_actor_from_class(
        cls, unreal.Vector(-650, 1000, 0), unreal.Rotator(pitch=0, yaw=180, roll=0)
    )
    bench.set_actor_label("FL05_SmartBench")
    bench.tags = ["FeatureLab_05"]
bench.set_actor_location_and_rotation(
    unreal.Vector(-650, 1000, 0), unreal.Rotator(pitch=0, yaw=180, roll=0), False, True
)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert editor.save_current_level()
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "status": "bench_added",
    "map": "/Game/Levels/DefaultLevel",
    "actor": bench.get_actor_label(),
    "source": "/Game/Blueprints/SmartObjects/Bench/BP_SmartBench",
    "location": [-650, 1000, 0],
    "approach_location": [-800, 1000, 90],
    "main_movement_lane_unchanged": True,
    "separate_from_controls_widgets": True,
}
(root / "Evidence" / "case05-bench-scene.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-arm-gasp-jump-py"></a>

### lab_arm_gasp_jump.py

```python
# 파일 역할: EpicFeatureLab의 lab_arm_gasp_jump 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

import json
import time
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

# ROOT: 프로젝트 루트 경로. 결과 파일을 어느 프로젝트에 쓰는지 정하는 기준이다.
ROOT = Path(unreal.Paths.project_dir()).resolve()
OUT = ROOT / "Evidence" / "case05-keyboard-jump.json"
# 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
WORLD = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert WORLD
PAWN = unreal.GameplayStatics.get_player_pawn(WORLD, 0)
MOVER = PAWN.get_component_by_class(unreal.MoverComponent)
START = PAWN.get_actor_location()
BEGIN = time.monotonic()
# REPORT: 이번 작업의 입력·측정·성공 여부를 모을 기록용 사전이다. 게임의 실행 상태 자체와는 다르다.
REPORT = {
    "status": "armed",
    "input_method": "Waiting for physical Space key; this script injects no input",
    "samples": [],
}
STATE = {"air": False, "done": False}
# HANDLE: 나중에 콜백을 해제하기 위해 보관하는 등록 표식이다.
HANDLE = None


# 함수 tick: 이름은 tick이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: delta 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
def tick(delta):
    global WORLD, PAWN, MOVER
    if STATE["done"]:
        # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
        return
    p = PAWN.get_actor_location()
    mode = str(MOVER.get_movement_mode_name())
    REPORT["samples"].append({"z": p.z, "mode": mode, "seconds": time.monotonic() - BEGIN})
    if mode != "Walking" and p.z > START.z + 10:
        STATE["air"] = True
    landed = STATE["air"] and mode == "Walking" and abs(p.z - START.z) < 5
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: landed or time.monotonic() - BEGIN > 45 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
    if landed or time.monotonic() - BEGIN > 45:
        STATE["done"] = True
        # 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
        unreal.unregister_slate_post_tick_callback(HANDLE)
        height = max(s["z"] for s in REPORT["samples"]) - START.z
        checks = {
            "physical_key_causes_takeoff": STATE["air"],
            "jump_raises_pawn": height > 30,
            "lands_back_on_ground": landed,
        }
        REPORT.update(
            status="passed" if all(checks.values()) else "failed",
            checks=checks,
            jump_height_cm=height,
        )
        OUT.write_text(json.dumps(REPORT, indent=2), encoding="utf-8")
        # WORLD에 기준값 None을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
        WORLD = PAWN = MOVER = None


OUT.write_text(json.dumps(REPORT), encoding="utf-8")
# HANDLE: 나중에 콜백을 해제하기 위해 보관하는 등록 표식이다. 에디터 갱신 뒤 호출할 함수를 등록한다. 작업이 끝나면 핸들로 해제해야 반복 호출이 남지 않는다.
HANDLE = unreal.register_slate_post_tick_callback(tick)
RESULT = {"status": "armed", "timeout_seconds": 45}
```

<a id="source-lab-lab-inspect-gasp-landmarks-py"></a>

### lab_inspect_gasp_landmarks.py

```python
# 파일 역할: 현재 에셋·객체·실행 상태를 읽어 기록하는 관찰 작업.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/Levels/DefaultLevel
#   /Game/Input

import json
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
assert root.name == "EpicFeatureLab"
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
assert not unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 작업할 맵을 연다. 현재 맵과 다른 맵이므로 실행 중인 PIE를 먼저 끝내는지 확인한다.
assert unreal.get_editor_subsystem(unreal.LevelEditorSubsystem).load_level(
    "/Game/Levels/DefaultLevel"
)
# 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
actors = unreal.get_editor_subsystem(unreal.EditorActorSubsystem).get_all_level_actors()
rows = []


# 함수 vector: 이름은 vector이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: v
def vector(v):
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return [round(v.x, 3), round(v.y, 3), round(v.z, 3)]


# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 a의 값이 매번 바뀐다.
for a in actors:
    label = a.get_actor_label()
    cls = a.get_class().get_name()
    rot = a.get_actor_rotation()
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: any((k in (label + cls).lower() for k in ['ramp', 'slope', 'stair', 'bench', 'slide', 'travers', 'playerstart'])) or abs(rot.pitch) > 3.0 or abs(rot.roll) > 3.0 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    if (
        any(
            k in (label + cls).lower()
            for k in ["ramp", "slope", "stair", "bench", "slide", "travers", "playerstart"]
        )
        or abs(rot.pitch) > 3.0
        or abs(rot.roll) > 3.0
    ):
        origin, extent = a.get_actor_bounds(False)
        mesh = a.get_component_by_class(unreal.StaticMeshComponent)
        # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
        rows.append(
            {
                "label": label,
                "class": cls,
                "location": vector(a.get_actor_location()),
                "rotation": [rot.pitch, rot.yaw, rot.roll],
                "bounds_origin": vector(origin),
                "bounds_extent": vector(extent),
                "mesh": mesh.static_mesh.get_path_name() if mesh and mesh.static_mesh else None,
            }
        )
actions = unreal.AssetRegistryHelpers.get_asset_registry().get_assets_by_path(
    "/Game/Input", True
)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "actors": len(actors),
    "landmarks": rows,
    "input_assets": [str(a.package_name) for a in actions],
}
(root / "Evidence" / "case05-level-landmarks.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-inspect-gasp-network-py"></a>

### lab_inspect_gasp_network.py

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
assert root.name == "EpicFeatureLab"
worlds = unreal.FeatureLabRuntimeLibrary.get_play_worlds()
rows = []
library = unreal.get_default_object(
    unreal.load_class(None, "/Script/Engine.SubsystemBlueprintLibrary")
)
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 world의 값이 매번 바뀐다. 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
for world in worlds:
    pawns = []
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 pawn의 값이 매번 바뀐다.
    for pawn in unreal.GameplayStatics.get_all_actors_of_class(world, unreal.Pawn):
        mover = pawn.get_component_by_class(unreal.MoverComponent)
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not mover
        if not mover:
            continue
        local = pawn.is_locally_controlled()
        controller = pawn.get_controller()
        # subsystem에 기준값 None을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
        subsystem = None
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: local and controller
        if local and controller:
            subsystem = library.call_method(
                "GetLocalPlayerSubSystemFromPlayerController",
                (controller, unreal.EnhancedInputLocalPlayerSubsystem.static_class()),
            )
        p = pawn.get_actor_location()
        # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
        pawns.append(
            {
                "pawn": pawn.get_name(),
                "role": str(pawn.get_local_role()),
                "local": local,
                "location": [p.x, p.y, p.z],
                "input_subsystem": subsystem.get_path_name() if subsystem else None,
                "components": [
                    c.get_class().get_name()
                    for c in pawn.get_components_by_class(unreal.ActorComponent)
                    if "Liaison" in c.get_class().get_name()
                ],
            }
        )
    rows.append({"world": world.get_path_name(), "pawns": pawns})
RESULT = {"world_count": len(worlds), "worlds": rows}
(root / "Evidence" / "case05-network-inspection.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-inspect-gasp-runtime-py"></a>

### lab_inspect_gasp_runtime.py

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
assert root.name == "EpicFeatureLab"
# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert world
pawn = unreal.GameplayStatics.get_player_pawn(world, 0)
mover = pawn.get_component_by_class(unreal.MoverComponent)
meshes = []
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 component의 값이 매번 바뀐다. 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
for component in pawn.get_components_by_class(unreal.SkeletalMeshComponent):
    component.visibility_based_anim_tick_option = (
        unreal.VisibilityBasedAnimTickOption.ALWAYS_TICK_POSE_AND_REFRESH_BONES
    )
    mesh = component.get_skeletal_mesh_asset()
    animation = component.get_anim_instance()
    # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    meshes.append(
        {
            "name": component.get_name(),
            "mesh": mesh.get_path_name() if mesh else None,
            "animation": animation.get_path_name() if animation else None,
            "animation_class": animation.get_class().get_path_name() if animation else None,
        }
    )
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "pawn": pawn.get_path_name(),
    "class": pawn.get_class().get_path_name(),
    "mover": mover.get_path_name() if mover else None,
    "mode": str(mover.get_movement_mode_name()) if mover else None,
    "meshes": meshes,
}
(root / "Evidence" / "case05-gasp-runtime-inspection.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-peek-gasp-controls-py"></a>

### lab_peek_gasp_controls.py

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
pawn = unreal.GameplayStatics.get_player_pawn(world, 0)
mesh = next(
    c
    for c in pawn.get_components_by_class(unreal.SkeletalMeshComponent)
    if c.get_anim_instance()
)
anim = mesh.get_anim_instance()
montage = anim.get_current_active_montage()
p = pawn.get_actor_location()
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "location": [p.x, p.y, p.z],
    "stance": str(anim.get_editor_property("Stance")),
    "gait": str(anim.get_editor_property("Gait")),
    "mode": str(pawn.get_component_by_class(unreal.MoverComponent).get_movement_mode_name()),
    "capsule_half_height": pawn.get_component_by_class(
        unreal.CapsuleComponent
    ).get_scaled_capsule_half_height(),
    "montage": montage.get_path_name() if montage else None,
    "pelvis_relative_z": mesh.get_socket_location("pelvis").z - p.z,
}
forward = pawn.get_actor_forward_vector()
RESULT.update(
    actor_yaw=pawn.get_actor_rotation().yaw,
    forward=[forward.x, forward.y, forward.z],
    control_yaw=unreal.GameplayStatics.get_player_controller(world, 0)
    .get_control_rotation()
    .yaw,
)
(Path(unreal.Paths.project_dir()) / "Evidence" / "case05-keyboard-state.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-prepare-bench-keyboard-py"></a>

### lab_prepare_bench_keyboard.py

```python
# 파일 역할: EpicFeatureLab의 lab_prepare_bench_keyboard 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
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
pawn = unreal.GameplayStatics.get_player_pawn(world, 0)
pc = unreal.GameplayStatics.get_player_controller(world, 0)
# JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
scene = json.loads(
    (Path(unreal.Paths.project_dir()) / "Evidence" / "case05-bench-scene.json").read_text(
        encoding="utf-8"
    )
)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert unreal.FeatureLabRuntimeLibrary.teleport_mover(
    pawn, unreal.Vector(*scene["approach_location"]), unreal.Rotator(pitch=0, yaw=0, roll=0)
)
pc.set_control_rotation(unreal.Rotator(pitch=0, yaw=0, roll=0))
RESULT = {"status": "bench_approach_queued", "input_injected": False}
```

<a id="source-lab-lab-prepare-gasp-network-py"></a>

### lab_prepare_gasp_network.py

```python
# 파일 역할: EpicFeatureLab의 lab_prepare_gasp_network 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
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
out = root / "Evidence" / "case05-network-session.json"
native = unreal.get_default_object(
    unreal.load_class(None, "/Script/ConfigSettingsToolset.ConfigSettingsToolset")
)
names = [
    "PlayNetMode",
    "RunUnderOneProcess",
    "PlayNumberOfClients",
    "ClientWindowWidth",
    "ServerPort",
    "bLaunchSeparateServer",
    "NetworkEmulationSettings",
]


# 함수 read: 이름은 read이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: 별도 입력 없음 JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
def read():
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다. JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
    return json.loads(
        native.call_method(
            "GetSectionPropertyValues", ("Editor", "LevelEditor", "PlayIn", names)
        )
    )


before = read()
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: out.exists() JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
if out.exists():
    previous = json.loads(out.read_text(encoding="utf-8"))
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert (
        not previous.get("restore_required") or before == previous["before"]
    ), "Restore the previous network test first"
target = dict(before)
target.update(
    PlayNetMode="PIE_ListenServer",
    RunUnderOneProcess=True,
    PlayNumberOfClients=2,
    ClientWindowWidth=800,
    bLaunchSeparateServer=False,
)
target["NetworkEmulationSettings"] = {
    "bIsNetworkEmulationEnabled": True,
    "emulationTarget": "Any",
    "currentProfile": "Custom",
    "outPackets": {"minLatency": 100, "maxLatency": 100, "packetLossPercentage": 0},
    "inPackets": {"minLatency": 0, "maxLatency": 0, "packetLossPercentage": 0},
}
report = {
    "status": "prepared",
    "restore_required": True,
    "before": before,
    "target": target,
    "section": {
        "containerName": "Editor",
        "categoryName": "LevelEditor",
        "sectionName": "PlayIn",
    },
    "configuration_tool": "ConfigSettingsToolset.ConfigSettingsToolset",
}
out.write_text(json.dumps(report, indent=2), encoding="utf-8")
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. Python의 사전·목록을 JSON 문자열로 바꾼다. 저장 전 직렬화 단계다.
assert native.call_method(
    "SetSectionProperties", ("Editor", "LevelEditor", "PlayIn", json.dumps(target))
)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert read() == target
report["status"] = "settings_applied"
out.write_text(json.dumps(report, indent=2), encoding="utf-8")
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = report
```

<a id="source-lab-lab-prepare-gasp-test-py"></a>

### lab_prepare_gasp_test.py

```python
# 파일 역할: 완성 결과를 실제 값과 비교하는 검증 작업. 생성 코드와 검사 코드를 구분한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/Levels/DefaultLevel
#   /Game/Input/

import json
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
assert root.name == "EpicFeatureLab"
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
assert not unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 작업할 맵을 연다. 현재 맵과 다른 맵이므로 실행 중인 PIE를 먼저 끝내는지 확인한다.
assert unreal.get_editor_subsystem(unreal.LevelEditorSubsystem).load_level(
    "/Game/Levels/DefaultLevel"
)
# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 편집 중인 월드를 얻는다. 게임 실행 월드와 다르므로 대상을 혼동하지 않는다.
world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world()
mode = world.get_world_settings().get_editor_property("default_game_mode")
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
RESULT = {
    "map": world.get_path_name(),
    "game_mode": mode.get_path_name() if mode else None,
    "input_assets": {
        name: bool(unreal.load_asset("/Game/Input/" + name))
        for name in ["IA_Move", "IA_Look", "IA_Jump", "IA_Walk", "IA_Strafe"]
    },
}
(root / "Evidence" / "case05-gasp-preparation.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-probe-gasp-surfaces-py"></a>

### lab_probe_gasp_surfaces.py

```python
# 파일 역할: EpicFeatureLab의 lab_probe_gasp_surfaces 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/Input/

import json
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
assert root.name == "EpicFeatureLab"
# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert world
pawn = unreal.GameplayStatics.get_player_pawn(world, 0)
mesh = next(
    c
    for c in pawn.get_components_by_class(unreal.SkeletalMeshComponent)
    if c.get_anim_instance()
)
anim = mesh.get_anim_instance()


# 함수 vector: 이름은 vector이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: v
def vector(v):
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return [round(v.x, 3), round(v.y, 3), round(v.z, 3)]


rows = []
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 y의 값이 매번 바뀐다. 반복에 쓸 정수 순서를 만든다. 끝 값은 포함되지 않는다.
for y in [1400.0, 1500.0]:
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 x의 값이 매번 바뀐다. 반복에 쓸 정수 순서를 만든다. 끝 값은 포함되지 않는다.
    for x in range(2200, 6601, 200):
        hit = unreal.SystemLibrary.line_trace_single(
            world,
            unreal.Vector(x, y, 3000),
            unreal.Vector(x, y, -1000),
            unreal.TraceTypeQuery.TRACE_TYPE_QUERY1,
            False,
            [pawn],
            unreal.DrawDebugTrace.NONE,
        )
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: hit 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
        if hit:
            parts = hit.to_tuple()
            rows.append({"x": x, "y": y, "point": vector(parts[5]), "normal": vector(parts[7])})
props = {}
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 name의 값이 매번 바뀐다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다.
for name in [
    "Stance",
    "Gait",
    "MovementState",
    "MovementMode",
    "OrientationMode",
    "EnableFootPlacement",
    "Enable Foot Placement",
    "BlendStackInputs",
    "Trajectory",
    "LocomotionAction",
]:
    # 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다.
    try:
        # 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다.
        v = anim.get_editor_property(name)
        props[name] = v.export_text() if hasattr(v, "export_text") else str(v)
    except Exception:
        pass
# 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 value_type이다.
actions = {
    name: str(unreal.load_asset("/Game/Input/" + name).get_editor_property("value_type"))
    for name in [
        "IA_Move",
        "IA_Move_WorldSpace",
        "IA_Crouch",
        "IA_Sprint",
        "IA_Strafe",
        "IA_Traverse",
        "IA_Interact",
    ]
}
components = [
    {"name": c.get_name(), "class": c.get_class().get_name()}
    for c in pawn.get_components_by_class(unreal.ActorComponent)
]
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "pawn_class": pawn.get_class().get_path_name(),
    "location": vector(pawn.get_actor_location()),
    "feet": {
        b: vector(mesh.get_socket_location(b)) for b in ["foot_l", "foot_r", "ball_l", "ball_r"]
    },
    "surfaces": rows,
    "animation_properties": props,
    "components": components,
    "input_value_types": actions,
    "dynamic_call_documentation": getattr(pawn.call_method, "__doc__", None),
}
(root / "Evidence" / "case05-surface-probe.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-restore-gasp-network-py"></a>

### lab_restore_gasp_network.py

```python
# 파일 역할: 실험에서 바꾼 상태를 기준으로 복구하는 작업.
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
out = root / "Evidence" / "case05-network-session.json"
report = json.loads(out.read_text(encoding="utf-8"))
native = unreal.get_default_object(
    unreal.load_class(None, "/Script/ConfigSettingsToolset.ConfigSettingsToolset")
)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. Python의 사전·목록을 JSON 문자열로 바꾼다. 저장 전 직렬화 단계다.
assert native.call_method(
    "SetSectionProperties", ("Editor", "LevelEditor", "PlayIn", json.dumps(report["before"]))
)
# JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
actual = json.loads(
    native.call_method(
        "GetSectionPropertyValues", ("Editor", "LevelEditor", "PlayIn", list(report["before"]))
    )
)
assert actual == report["before"]
report.update(status="restored", restore_required=False, restoration_readback=actual)
out.write_text(json.dumps(report, indent=2), encoding="utf-8")
proof = {
    "status": "passed",
    "original_settings_restored": True,
    "original": report["before"],
    "readback": actual,
    "section": report["section"],
}
(root / "Evidence" / "case05-network-settings-restoration.json").write_text(
    json.dumps(proof, indent=2), encoding="utf-8"
)
RESULT = {"status": "restored", "original_play_settings_restored": True}
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

<a id="source-lab-lab-test-gasp-bench-py"></a>

### lab_test_gasp_bench.py

```python
# 파일 역할: 완성 결과를 실제 값과 비교하는 검증 작업. 생성 코드와 검사 코드를 구분한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/Input/IA_

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
OUT = ROOT / "Evidence" / "case05-bench-runtime.json"
# 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
WORLD = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert WORLD
PAWN = unreal.GameplayStatics.get_player_pawn(WORLD, 0)
PC = unreal.GameplayStatics.get_player_controller(WORLD, 0)
MOVER = PAWN.get_component_by_class(unreal.MoverComponent)
MESH = next(
    c
    for c in PAWN.get_components_by_class(unreal.SkeletalMeshComponent)
    if c.get_anim_instance()
)
ANIM = MESH.get_anim_instance()
SMART = next(
    c
    for c in PAWN.get_components_by_class(unreal.ActorComponent)
    if c.get_class().get_name() == "AC_SmartObjectAnimation_C"
)
BENCH = next(
    a
    for a in unreal.GameplayStatics.get_all_actors_of_class(WORLD, unreal.Actor)
    if a.get_actor_label() == "FL05_SmartBench"
)
NATIVE = unreal.get_default_object(
    unreal.load_class(None, "/Script/Engine.SubsystemBlueprintLibrary")
)
INPUT = NATIVE.call_method(
    "GetLocalPlayerSubSystemFromPlayerController",
    (PC, unreal.EnhancedInputLocalPlayerSubsystem.static_class()),
)
ACTIONS = {n: unreal.load_asset("/Game/Input/IA_" + n) for n in ["Interact", "Move"]}
START = PAWN.get_actor_location()
ROTATION = PC.get_control_rotation()
scene = json.loads((ROOT / "Evidence" / "case05-bench-scene.json").read_text(encoding="utf-8"))
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert unreal.FeatureLabRuntimeLibrary.teleport_mover(
    PAWN, unreal.Vector(*scene["approach_location"]), unreal.Rotator(pitch=0, yaw=0, roll=0)
)
PC.set_control_rotation(unreal.Rotator(pitch=0, yaw=0, roll=0))
PHASES = [
    ("approach", 1.0),
    ("interact", 0.2),
    ("enter", 5.0),
    ("seated", 2.0),
    ("exit_interact", 0.2),
    ("exit_move", 2.0),
    ("settle", 1.5),
    ("reset", 1.0),
]
STATE = {
    "index": 0,
    "start": unreal.GameplayStatics.get_time_seconds(WORLD),
    "last": -1.0,
    "done": False,
    "busy": False,
    "reset": False,
}
REPORT = {"status": "running", "samples": [], "bench": BENCH.get_path_name()}
# HANDLE: 나중에 콜백을 해제하기 위해 보관하는 등록 표식이다.
HANDLE = None


# 함수 vector: 이름은 vector이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: v
def vector(v):
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return [v.x, v.y, v.z]


# 함수 clock: 이름은 clock이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: 별도 입력 없음
def clock():
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return unreal.GameplayStatics.get_time_seconds(WORLD)


# 함수 sample: 이름은 sample이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: phase
def sample(phase):
    montage = ANIM.get_current_active_montage()
    # payload에 기준값 None을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
    payload = None
    for name in ["IncomingAnimationPayload", "Incoming Animation Payload"]:
        # 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다.
        try:
            # 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다.
            payload = SMART.get_editor_property(name).export_text()
            break
        except Exception:
            pass
    location = PAWN.get_actor_location()
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return {
        "phase": phase,
        "seconds": clock(),
        "location": vector(location),
        "pelvis_z": MESH.get_socket_location("pelvis").z,
        "pelvis_relative_z": MESH.get_socket_location("pelvis").z - location.z,
        "montage": montage.get_path_name() if montage else None,
        "payload": payload,
        "mode": str(MOVER.get_movement_mode_name()),
    }


# 함수 finish: 이름은 finish이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: error 문자열을 파일에 기록한다. 결과 JSON이나 보고서인지, 실제 코드·설정 파일인지 경로를 확인한다.
def finish(error=None):
    global WORLD, PAWN, PC, MOVER, MESH, ANIM, SMART, BENCH, INPUT
    STATE["done"] = True
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: HANDLE 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
    if HANDLE:
        # 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
        unreal.unregister_slate_post_tick_callback(HANDLE)
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: error
    if error:
        REPORT.update(status="failed", error=error)
    OUT.write_text(json.dumps(REPORT, indent=2), encoding="utf-8")
    # WORLD에 기준값 None을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
    WORLD = PAWN = PC = MOVER = MESH = ANIM = SMART = BENCH = INPUT = None


# 함수 tick: 이름은 tick이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: delta
def tick(delta):
    if STATE["done"] or STATE["busy"]:
        # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
        return
    STATE["busy"] = True
    # 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다.
    try:
        phase, duration = PHASES[STATE["index"]]
        elapsed = clock() - STATE["start"]
        if phase in ["interact", "exit_interact"]:
            INPUT.inject_input_vector_for_action(
                ACTIONS["Interact"], unreal.Vector(1, 0, 0), [], []
            )
        if phase == "exit_move":
            INPUT.inject_input_vector_for_action(
                ACTIONS["Move"], unreal.Vector(0, -1, 0), [], []
            )
        if phase == "reset" and not STATE["reset"]:
            # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
            assert unreal.FeatureLabRuntimeLibrary.teleport_mover(
                PAWN, START, unreal.Rotator(pitch=0, yaw=0, roll=0)
            )
            PC.set_control_rotation(ROTATION)
            STATE["reset"] = True
        if elapsed - STATE["last"] >= 0.1:
            REPORT["samples"].append(sample(phase))
            STATE["last"] = elapsed
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: elapsed >= duration
        if elapsed >= duration:
            STATE["index"] += 1
            STATE.update(start=clock(), last=-1.0)
            if STATE["index"] == len(PHASES):
                samples = REPORT["samples"]
                baseline = [s for s in samples if s["phase"] == "approach"][-1]
                seated = [s for s in samples if s["phase"] in ["enter", "seated"]]
                settled = [s for s in samples if s["phase"] == "settle"][-1]
                drop = baseline["pelvis_relative_z"] - min(
                    s["pelvis_relative_z"] for s in seated
                )
                checks = {
                    "interaction_plays_real_montage": any(s["montage"] for s in seated),
                    "official_bench_animation_payload": any(
                        "Bench" in (s["payload"] or "") for s in seated
                    ),
                    "pelvis_lowers_into_seat": drop > 20,
                    "movement_exits_seat": settled["pelvis_relative_z"]
                    > min(s["pelvis_relative_z"] for s in seated) + 15,
                    "reset_returns_start": math.dist(samples[-1]["location"], vector(START))
                    < 8,
                }
                REPORT.update(
                    status="passed" if all(checks.values()) else "failed",
                    checks=checks,
                    pelvis_drop_cm=drop,
                )
                finish()
            else:
                REPORT["current"] = PHASES[STATE["index"]][0]
                OUT.write_text(json.dumps(REPORT, indent=2), encoding="utf-8")
    except Exception:
        finish(traceback.format_exc())
    finally:
        STATE["busy"] = False


OUT.write_text(json.dumps(REPORT), encoding="utf-8")
# HANDLE: 나중에 콜백을 해제하기 위해 보관하는 등록 표식이다. 에디터 갱신 뒤 호출할 함수를 등록한다. 작업이 끝나면 핸들로 해제해야 반복 호출이 남지 않는다.
HANDLE = unreal.register_slate_post_tick_callback(tick)
RESULT = {"status": "running", "output": str(OUT)}
```

<a id="source-lab-lab-test-gasp-core-py"></a>

### lab_test_gasp_core.py

```python
# 파일 역할: 완성 결과를 실제 값과 비교하는 검증 작업. 생성 코드와 검사 코드를 구분한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/Input/
#   /Game/Levels/DefaultLevel
#   /Game/Characters/UEFN_Mannequin/Animations/[A-Za-z0-9_./]+

"""Exercise real Enhanced Input and measure GASP/Mover output in the integrated lab."""

import json
import math
import re
import time
import traceback
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

# ROOT: 프로젝트 루트 경로. 결과 파일을 어느 프로젝트에 쓰는지 정하는 기준이다.
ROOT = Path(unreal.Paths.project_dir()).resolve()
assert ROOT.name == "EpicFeatureLab"
OUT = ROOT / "Evidence" / "case05-gasp-core.json"
# 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
WORLD = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert WORLD
PAWN = unreal.GameplayStatics.get_player_pawn(WORLD, 0)
PC = unreal.GameplayStatics.get_player_controller(WORLD, 0)
MOVER = PAWN.get_component_by_class(unreal.MoverComponent)
assert MOVER, "Expected the official Mover pawn"
MESH = next(
    c
    for c in PAWN.get_components_by_class(unreal.SkeletalMeshComponent)
    if c.get_anim_instance()
)
MESH.visibility_based_anim_tick_option = (
    unreal.VisibilityBasedAnimTickOption.ALWAYS_TICK_POSE_AND_REFRESH_BONES
)
ANIM = MESH.get_anim_instance()
SUBSYSTEMS = [
    x
    for x in unreal.ObjectIterator(unreal.EnhancedInputLocalPlayerSubsystem)
    if not x.get_name().startswith("Default__")
]
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert len(SUBSYSTEMS) == 1
INPUT = SUBSYSTEMS[0]
# 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
ACTIONS = {
    name: unreal.load_asset("/Game/Input/" + name)
    for name in ["IA_Move", "IA_Look", "IA_Jump", "IA_Walk"]
}
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert all(ACTIONS.values())
START_LOCATION = PAWN.get_actor_location()
START_ROTATION = PAWN.get_actor_rotation()
START_CONTROL = PC.get_control_rotation()
PHASES = [
    ("idle", 0.7),
    ("run", 2.0),
    ("settle", 0.8),
    ("walk", 1.6),
    ("settle_after_walk", 0.8),
    ("jump", 1.8),
    ("land", 0.8),
    ("camera", 0.8),
    ("reset", 1.0),
]
STATE = {
    "index": 0,
    "start": time.monotonic(),
    "last_sample": -1.0,
    "busy": False,
    "done": False,
    "reset_applied": False,
}
SAMPLES = []
# HANDLE: 나중에 콜백을 해제하기 위해 보관하는 등록 표식이다.
HANDLE = None


# 함수 vector: 이름은 vector이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: v
def vector(v):
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return [round(v.x, 4), round(v.y, 4), round(v.z, 4)]


# 함수 prop: 이름은 prop이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: name 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다.
def prop(name):
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다.
    return ANIM.get_editor_property(name)


# 함수 snapshot: 이름은 snapshot이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: phase
def snapshot(phase):
    location = PAWN.get_actor_location()
    camera = PC.player_camera_manager.get_camera_rotation()
    blend = prop("BlendStackInputs")
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return {
        "phase": phase,
        "world_seconds": unreal.GameplayStatics.get_time_seconds(WORLD),
        "location": vector(location),
        "velocity": vector(PAWN.get_velocity()),
        "mode": str(MOVER.get_movement_mode_name()),
        "camera": [camera.pitch, camera.yaw, camera.roll],
        "gait": str(prop("Gait")),
        "search_cost": float(prop("Search Cost")),
        "blend_stack": blend.export_text(),
        "feet_relative": {
            name: vector(MESH.get_socket_location(name) - location)
            for name in ["foot_l", "foot_r"]
        },
        "trajectory": prop("Trajectory").export_text(),
    }


# 함수 finish: 이름은 finish이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: report 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
def finish(report):
    STATE["done"] = True
    # 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
    unreal.unregister_slate_post_tick_callback(HANDLE)
    report.update(
        samples=SAMPLES,
        project=str(ROOT),
        map="/Game/Levels/DefaultLevel",
        visual_validation="pending",
        remaining=[
            "slide and bench interactions",
            "slopes and foot contact",
            "Mover prediction/network case",
            "visual control verification",
        ],
    )
    OUT.write_text(json.dumps(report, indent=2), encoding="utf-8")


# 함수 inject: 이름은 inject이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: name, x, y
def inject(name, x, y=0):
    INPUT.inject_input_vector_for_action(ACTIONS[name], unreal.Vector(x, y, 0), [], [])


# 함수 tick: 이름은 tick이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: delta
def tick(delta):
    if STATE["done"] or STATE["busy"]:
        # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
        return
    STATE["busy"] = True
    # 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다.
    try:
        phase, duration = PHASES[STATE["index"]]
        elapsed = time.monotonic() - STATE["start"]
        if phase in ["run", "walk"]:
            inject("IA_Move", 0, 1)
        if phase == "walk" and elapsed < 0.15:
            inject("IA_Walk", 1)
        if phase == "jump" and elapsed < 0.15:
            inject("IA_Jump", 1)
        if phase == "camera":
            inject("IA_Look", 0.25, -0.05)
        if phase == "reset" and not STATE["reset_applied"]:
            PAWN.set_actor_location_and_rotation(START_LOCATION, START_ROTATION, False, True)
            PC.set_control_rotation(START_CONTROL)
            STATE["reset_applied"] = True
        if elapsed - STATE["last_sample"] >= 0.12:
            # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
            SAMPLES.append(snapshot(phase))
            STATE["last_sample"] = elapsed
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: elapsed >= duration
        if elapsed >= duration:
            STATE["index"] += 1
            STATE.update(start=time.monotonic(), last_sample=-1.0)
            if STATE["index"] >= len(PHASES):
                initial = SAMPLES[0]
                runs = [s for s in SAMPLES if s["phase"] == "run"]
                jumps = [s for s in SAMPLES if s["phase"] in ["jump", "land"]]
                camera = [s for s in SAMPLES if s["phase"] == "camera"]
                all_blends = sorted(set(s["blend_stack"] for s in SAMPLES))
                clips = sorted(
                    set(
                        path
                        for s in SAMPLES
                        for path in re.findall(
                            r"/Game/Characters/UEFN_Mannequin/Animations/[A-Za-z0-9_./]+",
                            s["blend_stack"],
                        )
                    )
                )
                walks = [s for s in SAMPLES if s["phase"] == "walk"]
                speed = lambda s: math.hypot(s["velocity"][0], s["velocity"][1])
                # 반복에 쓸 정수 순서를 만든다. 끝 값은 포함되지 않는다.
                foot_motion = max(
                    max(s["feet_relative"][bone][axis] for s in runs)
                    - min(s["feet_relative"][bone][axis] for s in runs)
                    for bone in ["foot_l", "foot_r"]
                    for axis in range(3)
                )
                checks = {
                    "moves": max(math.dist(s["location"], initial["location"]) for s in runs)
                    > 100,
                    "run_speed": max(map(speed, runs)) > 100,
                    "jump_height": max(s["location"][2] for s in jumps)
                    - min(s["location"][2] for s in jumps)
                    > 30,
                    "in_air_and_landing": any(s["mode"] != "Walking" for s in jumps)
                    and SAMPLES[-1]["mode"] == "Walking",
                    "camera_changes": max(s["camera"][1] for s in camera)
                    - min(s["camera"][1] for s in camera)
                    > 5,
                    "animation_selection_changes": len(clips) >= 3,
                    "walk_gait_selected": any("WALK" in s["gait"] for s in walks),
                    "walk_slower_than_run": max(map(speed, walks))
                    < 0.8 * max(map(speed, runs)),
                    "foot_pose_changes": foot_motion > 5,
                    "trajectory_changes": len(set(s["trajectory"] for s in runs)) > 2,
                    "search_cost_finite": all(
                        math.isfinite(s["search_cost"]) and s["search_cost"] >= 0
                        for s in SAMPLES
                    ),
                    "reset_position": math.dist(SAMPLES[-1]["location"], initial["location"])
                    < 10,
                }
                finish(
                    {
                        "status": "passed" if all(checks.values()) else "failed",
                        "checks": checks,
                        "foot_motion_cm": foot_motion,
                        "max_run_speed_cm_s": max(map(speed, runs)),
                        "selected_animation_assets": clips,
                        "blend_states": all_blends,
                    }
                )
            else:
                # 문자열을 파일에 기록한다. 결과 JSON이나 보고서인지, 실제 코드·설정 파일인지 경로를 확인한다.
                OUT.write_text(
                    json.dumps(
                        {
                            "status": "running",
                            "phase": PHASES[STATE["index"]][0],
                            "samples": len(SAMPLES),
                        }
                    ),
                    encoding="utf-8",
                )
    except Exception:
        finish({"status": "failed", "error": traceback.format_exc()})
    finally:
        STATE["busy"] = False


OUT.write_text(json.dumps({"status": "running", "phase": "idle"}), encoding="utf-8")
# HANDLE: 나중에 콜백을 해제하기 위해 보관하는 등록 표식이다. 에디터 갱신 뒤 호출할 함수를 등록한다. 작업이 끝나면 핸들로 해제해야 반복 호출이 남지 않는다.
HANDLE = unreal.register_slate_post_tick_callback(tick)
RESULT = {"status": "running", "output": str(OUT)}
```

<a id="source-lab-lab-test-gasp-extended-py"></a>

### lab_test_gasp_extended.py

```python
# 파일 역할: 완성 결과를 실제 값과 비교하는 검증 작업. 생성 코드와 검사 코드를 구분한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/Input/IA_
#   /Game/Characters/UEFN_Mannequin/Animations/[A-Za-z0-9_./]+

"""Drive official GASP/Mover through gait changes and the 10–40 degree course."""

import bisect
import json
import math
import re
import statistics
import time
import traceback
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

# ROOT: 프로젝트 루트 경로. 결과 파일을 어느 프로젝트에 쓰는지 정하는 기준이다.
ROOT = Path(unreal.Paths.project_dir()).resolve()
assert ROOT.name == "EpicFeatureLab"
OUT = ROOT / "Evidence" / "case05-gasp-extended.json"
# 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
WORLD = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert WORLD
PAWN = unreal.GameplayStatics.get_player_pawn(WORLD, 0)
PC = unreal.GameplayStatics.get_player_controller(WORLD, 0)
MOVER = PAWN.get_component_by_class(unreal.MoverComponent)
MESH = next(
    c
    for c in PAWN.get_components_by_class(unreal.SkeletalMeshComponent)
    if c.get_anim_instance()
)
MESH.visibility_based_anim_tick_option = (
    unreal.VisibilityBasedAnimTickOption.ALWAYS_TICK_POSE_AND_REFRESH_BONES
)
ANIM = MESH.get_anim_instance()
INPUT = next(
    s
    for s in unreal.ObjectIterator(unreal.EnhancedInputLocalPlayerSubsystem)
    if not s.get_name().startswith("Default__")
)
# 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
ACTIONS = {
    n: unreal.load_asset("/Game/Input/IA_" + n)
    for n in ["Move", "Crouch", "Sprint", "Strafe", "Walk"]
}
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert all(ACTIONS.values())
IGNORE = [PAWN] + list(PAWN.get_all_child_actors(True))
ORIGINAL_LOCATION = PAWN.get_actor_location()
ORIGINAL_ROTATION = PAWN.get_actor_rotation()
ORIGINAL_CONTROL = PC.get_control_rotation()
PHASES = [
    ("idle", 0.6),
    ("crouch_enter", 0.3),
    ("crouch_move", 1.6),
    ("stand", 0.7),
    ("run", 2.5),
    ("sprint", 2.5),
    ("slide", 1.5),
    ("recover", 0.8),
    ("reverse", 2.0),
    ("strafe", 2.0),
    ("slope_prepare", 1.0),
    ("slope_up", 35.0),
    ("slope_settle", 0.8),
    ("slope_down", 35.0),
    ("slope_stop", 0.8),
    ("reset", 1.0),
]
STATE = {
    "index": 0,
    "start": unreal.GameplayStatics.get_time_seconds(WORLD),
    "last_sample": -1.0,
    "done": False,
    "busy": False,
    "teleported": False,
    "stand_toggle": False,
}
# REPORT: 이번 작업의 입력·측정·성공 여부를 모을 기록용 사전이다. 게임의 실행 상태 자체와는 다르다.
REPORT = {
    "status": "running",
    "samples": [],
    "phase_events": [],
    "course": {"y": 1500, "start_x": 2300, "upper_x": 6310, "lower_x": 2450},
    "prediction_comparison": "Trajectory future world XY versus interpolated actual pawn XY during the same flat-ground input phase",
}
# HANDLE: 나중에 콜백을 해제하기 위해 보관하는 등록 표식이다.
HANDLE = None


# 함수 clock: 이름은 clock이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: 별도 입력 없음
def clock():
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return unreal.GameplayStatics.get_time_seconds(WORLD)


# 함수 vector: 이름은 vector이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: v
def vector(v):
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return [float(v.x), float(v.y), float(v.z)]


# 함수 inject: 이름은 inject이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: name, x, y
def inject(name, x, y=0):
    INPUT.inject_input_vector_for_action(ACTIONS[name], unreal.Vector(x, y, 0), [], [])


# 함수 save: 이름은 save이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: 별도 입력 없음 문자열을 파일에 기록한다. 결과 JSON이나 보고서인지, 실제 코드·설정 파일인지 경로를 확인한다.
def save():
    OUT.write_text(json.dumps(REPORT, indent=2), encoding="utf-8")


# 함수 ground: 이름은 ground이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: point
def ground(point):
    hit = unreal.SystemLibrary.line_trace_single(
        WORLD,
        point + unreal.Vector(0, 0, 300),
        point - unreal.Vector(0, 0, 800),
        unreal.TraceTypeQuery.TRACE_TYPE_QUERY1,
        False,
        IGNORE,
        unreal.DrawDebugTrace.NONE,
    )
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not hit
    if not hit:
        # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
        return None
    values = hit.to_tuple()
    p, n = values[5], values[7]
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return {
        "point": vector(p),
        "normal": vector(n),
        "gap_cm": (point - p).dot(n),
        "slope_degrees": math.degrees(math.acos(max(-1.0, min(1.0, n.z)))),
    }


# 함수 sample: 이름은 sample이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: phase 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 Trajectory이다.
def sample(phase):
    location = PAWN.get_actor_location()
    trajectory = ANIM.get_editor_property("Trajectory")
    future = [s for s in trajectory.samples if s.time_in_seconds > 0.3]
    # 차이의 부호를 없애 크기만 비교한다. 오차 허용 범위 검사에 자주 사용한다.
    predicted = min(future, key=lambda s: abs(s.time_in_seconds - 0.5)) if future else None
    feet = {b: ground(MESH.get_socket_location(b)) for b in ["ball_l", "ball_r"]}
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return {
        "phase": phase,
        "seconds": clock(),
        "location": vector(location),
        "speed": math.hypot(PAWN.get_velocity().x, PAWN.get_velocity().y),
        "mode": str(MOVER.get_movement_mode_name()),
        "gait": str(ANIM.get_editor_property("Gait")),
        "stance": str(ANIM.get_editor_property("Stance")),
        "search_cost": float(ANIM.get_editor_property("Search Cost")),
        "blend": ANIM.get_editor_property("BlendStackInputs").export_text(),
        "capsule_half_height": PAWN.get_component_by_class(
            unreal.CapsuleComponent
        ).get_scaled_capsule_half_height(),
        "feet": feet,
        "ground": ground(location),
        "prediction": (
            {"horizon": predicted.time_in_seconds, "position": vector(predicted.position)}
            if predicted
            else None
        ),
    }


# 함수 finish: 이름은 finish이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: error 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
def finish(error=None):
    global WORLD, PAWN, PC, MOVER, MESH, ANIM, INPUT, IGNORE
    STATE["done"] = True
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: HANDLE 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
    if HANDLE:
        # 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
        unreal.unregister_slate_post_tick_callback(HANDLE)
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: error
    if error:
        REPORT.update(status="failed", error=error)
    save()
    # WORLD에 기준값 None을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
    WORLD = PAWN = PC = MOVER = MESH = ANIM = INPUT = None
    IGNORE = []


# 함수 analyze: 이름은 analyze이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: 별도 입력 없음
def analyze():
    samples = REPORT["samples"]
    phases = {n: [s for s in samples if s["phase"] == n] for n, d in PHASES}
    slope = [
        s
        for s in samples
        if s["phase"] in ["slope_up", "slope_down"] and s["ground"] and s["mode"] == "Walking"
    ]
    contacts = {}
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 s의 값이 매번 바뀐다. 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    for s in slope:
        angle = s["ground"]["slope_degrees"]
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: angle < 7
        if angle < 7:
            continue
        band = str(round(angle / 5) * 5)
        gaps = [f["gap_cm"] for f in s["feet"].values() if f]
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: len(gaps) == 2 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
        if len(gaps) == 2:
            # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
            contacts.setdefault(band, []).append(min(gaps))
    contact_stats = {
        k: {
            "samples": len(v),
            "median_lower_ball_gap_cm": statistics.median(v),
            "minimum_gap_cm": min(v),
            "p90_lower_ball_gap_cm": sorted(v)[int(0.9 * (len(v) - 1))],
        }
        for k, v in contacts.items()
    }
    times = [s["seconds"] for s in samples]
    errors = []
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 s의 값이 매번 바뀐다. 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    for s in samples:
        p = s["prediction"]
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not p or s['phase'] not in ['run', 'sprint', 'reverse', 'strafe'] or s['speed'] < 100
        if (
            not p
            or s["phase"] not in ["run", "sprint", "reverse", "strafe"]
            or s["speed"] < 100
        ):
            continue
        target = s["seconds"] + p["horizon"]
        j = bisect.bisect_right(times, target)
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: j == 0 or j >= len(samples)
        if j == 0 or j >= len(samples):
            continue
        a, b = samples[j - 1], samples[j]
        if a["phase"] != s["phase"] or b["phase"] != s["phase"]:
            continue
        alpha = (target - a["seconds"]) / (b["seconds"] - a["seconds"])
        actual = [a["location"][i] * (1 - alpha) + b["location"][i] * alpha for i in (0, 1)]
        errors.append(math.dist(p["position"][:2], actual))
    clips = sorted(
        set(
            path
            for s in samples
            for path in re.findall(
                r"/Game/Characters/UEFN_Mannequin/Animations/[A-Za-z0-9_./]+", s["blend"]
            )
        )
    )
    # 차이의 부호를 없애 크기만 비교한다. 오차 허용 범위 검사에 자주 사용한다.
    checks = {
        "crouch_changes_stance": any("CROUCH" in s["stance"] for s in phases["crouch_move"]),
        "stand_recovers": any("STAND" in s["stance"] for s in phases["run"]),
        "sprint_faster_than_run": max(s["speed"] for s in phases["sprint"])
        > 1.1 * max(s["speed"] for s in phases["run"]),
        "reverse_changes_travel_direction": phases["reverse"][-1]["location"][0]
        < phases["reverse"][0]["location"][0] - 100,
        "strafe_changes_lateral_position": abs(
            phases["strafe"][-1]["location"][1] - phases["strafe"][0]["location"][1]
        )
        > 100,
        "walks_complete_uphill_course": max(s["location"][0] for s in phases["slope_up"])
        > 6300,
        "walks_complete_downhill_course": min(s["location"][0] for s in phases["slope_down"])
        < 2460,
        "ground_height_changes_over_1400cm": max(s["location"][2] for s in slope)
        - min(s["location"][2] for s in slope)
        > 1400,
        "multiple_slope_bands_measured": len(contact_stats) >= 6,
        "foot_contact_on_each_slope": bool(contact_stats)
        and all(
            abs(v["median_lower_ball_gap_cm"]) < 12 and v["minimum_gap_cm"] > -10
            for v in contact_stats.values()
        ),
        "future_trajectory_matches_actual_movement": len(errors) >= 5
        and statistics.median(errors) < 35,
        "motion_search_finite_and_changes": all(
            math.isfinite(s["search_cost"]) for s in samples
        )
        and len(clips) >= 8,
        "reset_returns_original_location": math.dist(
            samples[-1]["location"], vector(ORIGINAL_LOCATION)
        )
        < 10,
    }
    REPORT.update(
        status="passed" if all(checks.values()) else "failed",
        checks=checks,
        contact_by_slope=contact_stats,
        prediction={
            "comparisons": len(errors),
            "median_xy_error_cm": statistics.median(errors) if errors else None,
            "maximum_xy_error_cm": max(errors) if errors else None,
        },
        selected_clips=clips,
        slide_observations={
            "modes": sorted({s["mode"] for s in phases["slide"]}),
            "stances": sorted({s["stance"] for s in phases["slide"]}),
            "clips": [c for c in clips if "Slide" in c],
        },
    )
    REPORT["checks"]["slide_uses_movement_mode_and_slide_animations"] = any(
        s["mode"] == "Sliding" for s in phases["slide"]
    ) and any("/Slide/" in c for c in clips)
    REPORT["status"] = "passed" if all(REPORT["checks"].values()) else "failed"


# 함수 tick: 이름은 tick이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: delta
def tick(delta):
    if STATE["done"] or STATE["busy"]:
        # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
        return
    STATE["busy"] = True
    # 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다.
    try:
        phase, duration = PHASES[STATE["index"]]
        elapsed = clock() - STATE["start"]
        if phase in ["crouch_enter", "crouch_move"]:
            inject("Crouch", 1)
        if phase in ["crouch_move", "run", "sprint", "slide", "slope_up"]:
            inject("Move", 0, 1)
        if phase in ["sprint", "slide"]:
            inject("Sprint", 1)
        if phase == "slide" and elapsed < 0.2:
            inject("Crouch", 1)
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: phase in ['stand', 'recover'] and elapsed > 0.2 and ('CROUCH' in str(ANIM.get_editor_property('Stance'))) and (not STATE['stand_toggle']) 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 Stance이다.
        if (
            phase in ["stand", "recover"]
            and elapsed > 0.2
            and "CROUCH" in str(ANIM.get_editor_property("Stance"))
            and not STATE["stand_toggle"]
        ):
            inject("Crouch", 1)
            STATE["stand_toggle"] = True
        if phase in ["reverse", "slope_down"]:
            inject("Move", 0, -1)
        if phase == "strafe":
            inject("Move", 1, 0)
            inject("Strafe", 1)
        if phase == "slope_prepare":
            if not STATE["teleported"]:
                # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
                assert unreal.FeatureLabRuntimeLibrary.teleport_mover(
                    PAWN, unreal.Vector(2300, 1500, 90), unreal.Rotator(pitch=0, yaw=0, roll=0)
                )
                PC.set_control_rotation(unreal.Rotator(pitch=0, yaw=0, roll=0))
                STATE["teleported"] = True
            # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: elapsed < 0.1
            if elapsed < 0.1:
                inject("Walk", 1)
        if phase == "reset" and not STATE["teleported"]:
            # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
            assert unreal.FeatureLabRuntimeLibrary.teleport_mover(
                PAWN, ORIGINAL_LOCATION, ORIGINAL_ROTATION
            )
            PC.set_control_rotation(ORIGINAL_CONTROL)
            STATE["teleported"] = True
        if elapsed - STATE["last_sample"] >= 0.1:
            REPORT["samples"].append(sample(phase))
            STATE["last_sample"] = elapsed
        completed = (
            elapsed >= duration
            or (phase == "slope_up" and PAWN.get_actor_location().x > 6310)
            or (phase == "slope_down" and PAWN.get_actor_location().x < 2450)
        )
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: completed 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
        if completed:
            REPORT["phase_events"].append(
                {
                    "phase": phase,
                    "duration_seconds": elapsed,
                    "end": vector(PAWN.get_actor_location()),
                }
            )
            STATE["index"] += 1
            STATE.update(start=clock(), last_sample=-1.0, teleported=False, stand_toggle=False)
            if STATE["index"] >= len(PHASES):
                analyze()
                finish()
            else:
                REPORT["current"] = PHASES[STATE["index"]][0]
                save()
    except Exception:
        finish(traceback.format_exc())
    finally:
        STATE["busy"] = False


save()
# HANDLE: 나중에 콜백을 해제하기 위해 보관하는 등록 표식이다. 에디터 갱신 뒤 호출할 함수를 등록한다. 작업이 끝나면 핸들로 해제해야 반복 호출이 남지 않는다.
HANDLE = unreal.register_slate_post_tick_callback(tick)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "status": "running",
    "output": str(OUT),
    "timing": "game seconds, with actual endpoint checks",
}
```

<a id="source-lab-lab-test-gasp-network-py"></a>

### lab_test_gasp_network.py

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
import traceback
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

# ROOT: 프로젝트 루트 경로. 결과 파일을 어느 프로젝트에 쓰는지 정하는 기준이다.
ROOT = Path(unreal.Paths.project_dir()).resolve()
assert ROOT.name == "EpicFeatureLab"
OUT = ROOT / "Evidence" / "case05-network-prediction.json"
WORLDS = unreal.FeatureLabRuntimeLibrary.get_play_worlds()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert len(WORLDS) == 2


# 함수 movers: 이름은 movers이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: world
def movers(world):
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return [
        p
        for p in unreal.GameplayStatics.get_all_actors_of_class(world, unreal.Pawn)
        if p.get_component_by_class(unreal.MoverComponent)
    ]


CLIENT_WORLD = next(
    w for w in WORLDS if any("AUTONOMOUS_PROXY" in str(p.get_local_role()) for p in movers(w))
)
SERVER_WORLD = next(w for w in WORLDS if w != CLIENT_WORLD)
CLIENT_PAWN = next(p for p in movers(CLIENT_WORLD) if p.is_locally_controlled())
SERVER_PAWN = next(p for p in movers(SERVER_WORLD) if not p.is_locally_controlled())
HOST_PAWN = next(p for p in movers(SERVER_WORLD) if p.is_locally_controlled())
CLIENT_PC = CLIENT_PAWN.get_controller()
LIBRARY = unreal.get_default_object(
    unreal.load_class(None, "/Script/Engine.SubsystemBlueprintLibrary")
)
INPUT = LIBRARY.call_method(
    "GetLocalPlayerSubSystemFromPlayerController",
    (CLIENT_PC, unreal.EnhancedInputLocalPlayerSubsystem.static_class()),
)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert INPUT
ACTION = unreal.load_asset("/Game/Input/IA_Move")
TARGET = unreal.Vector(-800, -1000, 90)
CLIENT_PC.set_control_rotation(unreal.Rotator(pitch=0, yaw=0, roll=0))
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert unreal.FeatureLabRuntimeLibrary.teleport_mover(
    SERVER_PAWN, TARGET, unreal.Rotator(pitch=0, yaw=0, roll=0)
)
HOST_START = HOST_PAWN.get_actor_location()
PHASES = [("warmup", 2.0), ("drive", 4.0), ("coast", 2.0), ("server_reset", 2.5)]
STATE = {
    "index": 0,
    "start": unreal.GameplayStatics.get_time_seconds(CLIENT_WORLD),
    "wall_start": time.monotonic(),
    "last": -1.0,
    "done": False,
    "busy": False,
    "reset_queued": False,
}
# JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
SESSION = json.loads(
    (ROOT / "Evidence" / "case05-network-session.json").read_text(encoding="utf-8")
)
LOG = (ROOT / "Evidence" / "graphical-editor-mover-reset.log").read_text(
    encoding="utf-8-sig", errors="replace"
)
# REPORT: 이번 작업의 입력·측정·성공 여부를 모을 기록용 사전이다. 게임의 실행 상태 자체와는 다르다.
REPORT = {
    "status": "running",
    "world_count": 2,
    "client_role": str(CLIENT_PAWN.get_local_role()),
    "server_role": str(SERVER_PAWN.get_local_role()),
    "input_subsystem": INPUT.get_path_name(),
    "configured_emulation": SESSION["target"]["NetworkEmulationSettings"],
    "net_driver_log_confirms_lag": "?PktLagMin=100?PktLagMax=100" in LOG,
    "samples": [],
    "phase_events": [],
}
# HANDLE: 나중에 콜백을 해제하기 위해 보관하는 등록 표식이다.
HANDLE = None


# 함수 vector: 이름은 vector이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: v
def vector(v):
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return [float(v.x), float(v.y), float(v.z)]


# 함수 clock: 이름은 clock이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: 별도 입력 없음
def clock():
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return unreal.GameplayStatics.get_time_seconds(CLIENT_WORLD)


# 함수 sample: 이름은 sample이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: phase
def sample(phase):
    client = CLIENT_PAWN.get_actor_location()
    server = SERVER_PAWN.get_actor_location()
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return {
        "phase": phase,
        "seconds": clock(),
        "client": vector(client),
        "server": vector(server),
        "separation_cm": (client - server).length(),
        "client_lead_x_cm": client.x - server.x,
        "client_speed": CLIENT_PAWN.get_velocity().length(),
        "server_speed": SERVER_PAWN.get_velocity().length(),
    }


# 함수 save: 이름은 save이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: 별도 입력 없음 문자열을 파일에 기록한다. 결과 JSON이나 보고서인지, 실제 코드·설정 파일인지 경로를 확인한다.
def save():
    OUT.write_text(json.dumps(REPORT, indent=2), encoding="utf-8")


# 함수 finish: 이름은 finish이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: error 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
def finish(error=None):
    global WORLDS, CLIENT_WORLD, SERVER_WORLD, CLIENT_PAWN, SERVER_PAWN, HOST_PAWN, CLIENT_PC, INPUT
    STATE["done"] = True
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: HANDLE 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
    if HANDLE:
        # 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
        unreal.unregister_slate_post_tick_callback(HANDLE)
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: INPUT
    if INPUT:
        INPUT.inject_input_vector_for_action(ACTION, unreal.Vector(), [], [])
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: error
    if error:
        REPORT.update(status="failed", error=error)
    save()
    WORLDS = []
    # CLIENT_WORLD에 기준값 None을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
    CLIENT_WORLD = SERVER_WORLD = CLIENT_PAWN = SERVER_PAWN = HOST_PAWN = CLIENT_PC = INPUT = (
        None
    )


# 함수 analyze: 이름은 analyze이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: 별도 입력 없음
def analyze():
    samples = REPORT["samples"]
    phase = {n: [s for s in samples if s["phase"] == n] for n, d in PHASES}
    warm = phase["warmup"][-1]
    drive = phase["drive"]
    coast = phase["coast"][-1]
    reset = phase["server_reset"][-1]
    host_error = math.dist(vector(HOST_PAWN.get_actor_location()), vector(HOST_START))
    backend = lambda p: any(
        c.get_class().get_name() == "MoverNetworkPredictionLiaisonComponent"
        for c in p.get_components_by_class(unreal.ActorComponent)
    )
    checks = {
        "real_autonomous_and_authority_roles": "AUTONOMOUS_PROXY" in REPORT["client_role"]
        and "AUTHORITY" in REPORT["server_role"],
        "actual_network_prediction_backend": backend(CLIENT_PAWN) and backend(SERVER_PAWN),
        "lag_applied_to_real_net_driver": REPORT["net_driver_log_confirms_lag"],
        "initial_authority_teleport_reaches_client": warm["separation_cm"] < 8
        and math.dist(warm["server"], vector(TARGET)) < 8,
        "client_input_moves_predicted_pawn": max(
            math.dist(s["client"], warm["client"]) for s in drive
        )
        > 200,
        "server_receives_client_movement": max(
            math.dist(s["server"], warm["server"]) for s in drive
        )
        > 200,
        "client_predicts_ahead_of_delayed_server": max(s["client_lead_x_cm"] for s in drive)
        > 12,
        "positions_converge_after_input_release": coast["separation_cm"] < 8,
        "authority_reset_replicates_and_converges": reset["separation_cm"] < 8
        and math.dist(reset["server"], vector(TARGET)) < 8,
        "reset_actually_moves_back": math.dist(coast["client"], reset["client"]) > 200,
        "host_input_remains_independent": host_error < 5,
    }
    REPORT.update(
        status="passed" if all(checks.values()) else "failed",
        checks=checks,
        maximum_client_lead_cm=max(s["client_lead_x_cm"] for s in drive),
        after_release_separation_cm=coast["separation_cm"],
        after_reset_separation_cm=reset["separation_cm"],
        host_movement_cm=host_error,
    )


# 함수 tick: 이름은 tick이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: delta
def tick(delta):
    if STATE["done"] or STATE["busy"]:
        # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
        return
    STATE["busy"] = True
    # 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다.
    try:
        if time.monotonic() - STATE["wall_start"] > 80:
            raise RuntimeError("Network test exceeded 80 wall seconds")
        phase, duration = PHASES[STATE["index"]]
        elapsed = clock() - STATE["start"]
        INPUT.inject_input_vector_for_action(
            ACTION, unreal.Vector(0, 1 if phase == "drive" else 0, 0), [], []
        )
        if phase == "server_reset" and not STATE["reset_queued"]:
            # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
            assert unreal.FeatureLabRuntimeLibrary.teleport_mover(
                SERVER_PAWN, TARGET, unreal.Rotator(pitch=0, yaw=0, roll=0)
            )
            STATE["reset_queued"] = True
        if elapsed - STATE["last"] >= 0.05:
            REPORT["samples"].append(sample(phase))
            STATE["last"] = elapsed
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: elapsed >= duration 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
        if elapsed >= duration:
            REPORT["phase_events"].append(REPORT["samples"][-1])
            STATE["index"] += 1
            STATE.update(start=clock(), last=-1.0)
            if STATE["index"] == len(PHASES):
                analyze()
                finish()
            else:
                REPORT["current"] = PHASES[STATE["index"]][0]
                save()
    except Exception:
        finish(traceback.format_exc())
    finally:
        STATE["busy"] = False


save()
# HANDLE: 나중에 콜백을 해제하기 위해 보관하는 등록 표식이다. 에디터 갱신 뒤 호출할 함수를 등록한다. 작업이 끝나면 핸들로 해제해야 반복 호출이 남지 않는다.
HANDLE = unreal.register_slate_post_tick_callback(tick)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "status": "running",
    "worlds": 2,
    "outgoing_lag_ms_each_endpoint": 100,
    "output": str(OUT),
}
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
