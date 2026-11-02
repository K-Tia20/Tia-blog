

‘생성형 애니메이션을 써 봤다’는 말 안에는 서로 다른 작업이 들어갈 수 있다. 이번 실험은 두 가지를 분리했다. 직접 만든 인형의 동작을 작은 모델로 학습해 재구성했고, 별도 장면에서는 에픽의 사전 학습 AnimGen 이동 제어기를 실행했다.

직접 학습한 모델과 공식 사전 학습 모델을 같은 것으로 소개하지 않는다. UAF는 애니메이션을 연결해 실행하는 그래프에, AnimGen은 학습과 생성형 제어 실험에 사용했다.

![기준 동작·UAF 실행·재구성 결과 비교](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/06/result.png)

**참고 — 사진과 작업에 나온 영어 이름**

| 영어 표시 | 한국어 뜻과 쓰임 |
|---|---|
| `Authored input` | 직접 제작한 기준 동작 |
| `UAF graph` | UAF 그래프를 통해 실행한 동작 |
| `Neural reconstruction` | 학습한 모델로 재구성한 동작 |


## 먼저 두 장면을 열어 본다

1. `Content → FeatureLab → Maps → FL_06_GenerativeAnimation`을 연다.
2. **▶ Play**를 누른다. 기준, UAF, 재구성 결과를 나란히 본다.
3. **1**은 걷기, **2**는 달리기다. 세 결과의 움직임을 비교한다.
4. **P**로 함께 멈추고 **R**로 재생 위치를 초기화한다.
5. **■ Stop**을 누르고 `FL_06_AnimGenControl`을 연다.
6. 다시 Play한 뒤 **WASD**로 움직인다. 오른쪽 마우스는 조준, 왼쪽 마우스는 발사 입력, **R**은 플레이어와 제어 상태 초기화다.

두 번째 장면의 공식 제어기가 움직인다고 해서 첫 번째 인형 모델이 새로운 이동을 일반화했다고 해석하면 안 된다.

## 걷기와 달리기를 연결한 UAF 그래프

`Content → FeatureLab → UAF`에서 `AG_PuppetLocomotion`을 연다. 이번 그래프는 5개 노드와 `UseRun` 입력을 사용한다. 입력이 거짓이면 걷기, 참이면 달리기를 선택하도록 구성했다. 참·거짓은 두 상태 중 하나를 나타내는 값이다.

![UAF 그래프를 찾는 폴더](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/06/folder.png)

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
| `UAF` | 애니메이션 실행 구성을 연결하는 프레임워크. |
| `AnimGen` | 학습·생성형 애니메이션 작업에 사용하는 도구 묶음. |
| `Training / Training arguments` | 학습 / 반복 수·장치 같은 학습 설정. |
| `CPU` | 컴퓨터의 중앙 연산 장치. 이번 작은 인형 학습에 사용했다. |
| `Training complete` | 학습 처리가 완료됐다는 상태 표시. 새로운 동작에서의 성능까지 보증하는 문구는 아니다. |
| `Autoencoder / Encoding` | 입력을 압축했다 복원하는 모델 / 압축한 중간 표현. |
| `Database / Assets` | 학습에 사용할 동작 목록 / 사용할 애셋 목록. |
| `Walk / Run` | 걷기 / 달리기. |
| `UseRun / bCondition` | 달리기를 선택할 참·거짓 입력 / 선택 조건 핀. |
| `FalseChild / TrueChild` | 조건이 거짓 / 참일 때 사용할 포즈 입력. |
| `Result` | 노드가 계산한 출력 결과. |
| `ForceLoop` | 해당 동작을 반복 재생하도록 지정하는 값. |
| `Authored input / UAF graph / Neural reconstruction` | 직접 제작한 기준 동작 / UAF로 실행한 동작 / 학습 모델로 재구성한 동작. |
| `AG_PuppetLocomotion / AGAE_PuppetMotion` | 인형의 UAF 실행 그래프 / 인형 동작을 학습한 모델 파일 이름. |


![실제 AnimGen 학습 모델 편집 화면](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/06/settings.png)

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
| `UAF` | 애니메이션 실행 구성을 연결하는 프레임워크. |
| `AnimGen` | 학습·생성형 애니메이션 작업에 사용하는 도구 묶음. |
| `Training / Training arguments` | 학습 / 반복 수·장치 같은 학습 설정. |
| `CPU` | 컴퓨터의 중앙 연산 장치. 이번 작은 인형 학습에 사용했다. |
| `Training complete` | 학습 처리가 완료됐다는 상태 표시. 새로운 동작에서의 성능까지 보증하는 문구는 아니다. |
| `Autoencoder / Encoding` | 입력을 압축했다 복원하는 모델 / 압축한 중간 표현. |
| `Database / Assets` | 학습에 사용할 동작 목록 / 사용할 애셋 목록. |
| `Walk / Run` | 걷기 / 달리기. |
| `UseRun / bCondition` | 달리기를 선택할 참·거짓 입력 / 선택 조건 핀. |
| `FalseChild / TrueChild` | 조건이 거짓 / 참일 때 사용할 포즈 입력. |
| `Result` | 노드가 계산한 출력 결과. |
| `ForceLoop` | 해당 동작을 반복 재생하도록 지정하는 값. |
| `Authored input / UAF graph / Neural reconstruction` | 직접 제작한 기준 동작 / UAF로 실행한 동작 / 학습 모델로 재구성한 동작. |
| `AG_PuppetLocomotion / AGAE_PuppetMotion` | 인형의 UAF 실행 그래프 / 인형 동작을 학습한 모델 파일 이름. |


각 동작은 반복 재생되도록 `ForceLoop`를 사용했다. 기준 애니메이션과 UAF 결과를 같은 시점에서 비교해 뼈 위치가 일치하는지 확인했다. 그래프에 시퀀스 이름이 적혀 있는 것만으로 실행 성공을 판단하지 않았다.

## 작은 인형으로 학습 입력 만들기

훈련 자료는 직접 만든 23개 뼈 인형의 동작 8개, 총 1,928프레임이다. 모델이 읽을 자세 값은 225개, 압축한 중간 값은 24개로 구성했다. 오토인코더는 입력을 작은 표현으로 압축한 뒤 다시 복원하도록 배우는 모델이다.

`Training/ADB_PuppetMotion`은 입력 동작 데이터베이스, `AGAE_PuppetMotion`은 학습 모델이다. 데이터베이스는 여러 동작을 모아 학습에 사용할 자료 목록으로 이해하면 된다.

학습은 CPU에서 6,000회 진행했다. 시드 7421을 고정했다. 시드는 무작위 선택의 출발점을 정하는 숫자라서 같은 조건을 반복할 때 도움이 된다. 같은 입력으로 반복 학습과 추론 결과도 비교했다.

## 손실이 줄어든 뒤 실제 움직임을 확인했다

학습 손실은 처음 약 0.2150에서 마지막 약 0.00555로 줄었다. 손실은 모델의 복원 오차를 학습에 사용할 숫자로 표현한 것이다. 이 숫자 하나가 캐릭터의 모든 관절이 자연스럽다는 점수를 뜻하지는 않는다.

실제 뼈 위치를 비교한 평균 오차는 약 1.09cm, 최대 오차는 약 12.41cm였다. 특히 **학습에 사용한 동작을 다시 복원한 결과**다. 처음 보는 동작을 따로 떼어 평가한 일반화 성능은 아니다. 원래 루트 위치와 방향도 제공한 조건이다.

![실제 애니메이션 비교 장면](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/06/motion.gif)

## 공식 제어기 장면에서 확인한 것

`FL_06_AnimGenControl`은 공식 `AGC_AnimGenCharacter` 모델을 사용한다. 이쪽 메시에는 92개 뼈가 있다. 단순한 시퀀스 플레이어를 연결해 놓고 생성형 제어라고 부르지 않도록 활성 모델과 이동 상태를 따로 확인했다.

R을 눌렀을 때 위치만 돌아오고 내부 신경망 상태가 남으면 다음 입력이 달라질 수 있다. 플레이어 위치·속도와 모델 상태를 함께 초기화했다. 비교 장면에서는 프레임 끝에 한 번만 실행되는 콜백으로 세 출력의 재시작 시점도 맞췄다. 콜백은 정해진 시점에 호출되도록 등록한 함수다.

## 실제 파일을 읽는 순서

먼저 [lab_build_uaf_puppet_graph.py](#source-lab-lab-build-uaf-puppet-graph-py)에서 노드 생성과 연결을 본다. 다음으로 [lab_prepare_puppet_training.py](#source-lab-lab-prepare-puppet-training-py)의 입력 준비를 본다. 실행 비교와 초기화 처리는 [FeatureLabGenerative.cpp](#source-source-mutablesample-featurelabgenerative-cpp)에 있다.

나머지 학습·검증 파일도 [06번 작업 목록](#code-index)에 전체 경로와 함께 묶었다. 학습 파일이 있다고 자동으로 훈련이 시작되는 것은 아니다. 생성, 학습, 결과 내보내기, 재생 연결 순서를 나눠 확인한다.


## 편집 화면을 더 자세히 보기

![현재 UAF 에셋의 전체 연결을 옮긴 설명 도식 — 에디터 캡처 아님](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/06/graph.svg)

**참고 — 사진과 작업에 나온 영어 이름**

| 영어 표시 | 한국어 뜻과 쓰임 |
|---|---|
| `UAF` | 애니메이션 실행 구성을 연결하는 프레임워크. |
| `AnimGen` | 학습·생성형 애니메이션 작업에 사용하는 도구 묶음. |
| `Training / Training arguments` | 학습 / 반복 수·장치 같은 학습 설정. |
| `CPU` | 컴퓨터의 중앙 연산 장치. 이번 작은 인형 학습에 사용했다. |
| `Training complete` | 학습 처리가 완료됐다는 상태 표시. 새로운 동작에서의 성능까지 보증하는 문구는 아니다. |
| `Autoencoder / Encoding` | 입력을 압축했다 복원하는 모델 / 압축한 중간 표현. |
| `Database / Assets` | 학습에 사용할 동작 목록 / 사용할 애셋 목록. |
| `Walk / Run` | 걷기 / 달리기. |
| `UseRun / bCondition` | 달리기를 선택할 참·거짓 입력 / 선택 조건 핀. |
| `FalseChild / TrueChild` | 조건이 거짓 / 참일 때 사용할 포즈 입력. |
| `Result` | 노드가 계산한 출력 결과. |
| `ForceLoop` | 해당 동작을 반복 재생하도록 지정하는 값. |
| `Authored input / UAF graph / Neural reconstruction` | 직접 제작한 기준 동작 / UAF로 실행한 동작 / 학습 모델로 재구성한 동작. |
| `AG_PuppetLocomotion / AGAE_PuppetMotion` | 인형의 UAF 실행 그래프 / 인형 동작을 학습한 모델 파일 이름. |


![별도 공식 AnimGen 제어기 장면](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/06/result-control.png)

![공식 제어기 장면의 실제 연속 프레임](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/06/motion-control.gif)



학습 모델 사진의 `AGAE_PuppetMotion`과 UAF 실행 그래프 `AG_PuppetLocomotion`은 별도 파일이다. 위 도식은 현재 UAF 그래프에서 실제로 읽은 5개 노드와 4개 연결을 설명한다. 전체 핀·기본값은 [전체 UAF 그래프 표](#source-ag-puppetlocomotion-md)에 있다.

<!-- korean-ui-explanations -->


<a id="code-index"></a>

## 이 장면을 만든 코드

아래는 제작과 검증에 사용한 전체 코드에 한국어 주석을 더한 설명본이다. `.py`는 언리얼 에디터에서 실행하는 제작·검사 코드, `.cpp`와 `.h`는 프로젝트에 넣어 빌드하는 코드다. 파일마다 첫 주석에 역할과 입력 조건을 적었다.


<a id="source-lab-lab-arm-uaf-keyboard-reset-py"></a>

### lab_arm_uaf_keyboard_reset.py

```python
# 파일 역할: 실험에서 바꾼 상태를 기준으로 복구하는 작업.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

import json
import math
import time
import traceback
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

# ROOT: 프로젝트 루트 경로. 결과 파일을 어느 프로젝트에 쓰는지 정하는 기준이다.
ROOT = Path(unreal.Paths.project_dir()).resolve()
# 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
WORLD = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert WORLD
ACTOR = unreal.GameplayStatics.get_all_actors_of_class(WORLD, unreal.FeatureLabUAFActor)[0]
MESHES = [ACTOR.get_editor_property(n) for n in ["UAFMesh", "OriginalMesh"]]
# 반복에 쓸 정수 순서를 만든다. 끝 값은 포함되지 않는다.
BONES = [str(MESHES[0].get_bone_name(i)) for i in range(MESHES[0].get_num_bones())]
BASE_COUNT = ACTOR.get_editor_property("RestartCount")
START = time.monotonic()
STATE = {"done": False, "reset_time": None}
REPORT = {"status": "armed", "before_count": BASE_COUNT, "samples": []}
OUT = ROOT / "Evidence" / "case06-keyboard-reset-sync.json"
# HANDLE: 나중에 콜백을 해제하기 위해 보관하는 등록 표식이다.
HANDLE = None


# 함수 finish: 이름은 finish이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: error 문자열을 파일에 기록한다. 결과 JSON이나 보고서인지, 실제 코드·설정 파일인지 경로를 확인한다.
def finish(error=None):
    global WORLD, ACTOR, MESHES, HANDLE
    STATE["done"] = True
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: HANDLE is not None 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
    if HANDLE is not None:
        # 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
        unreal.unregister_slate_post_tick_callback(HANDLE)
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: error 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 RestartCount이다.
    if error:
        REPORT.update(status="failed", error=error)
    else:
        stable = [s for s in REPORT["samples"] if s["elapsed"] >= 0.1]
        REPORT["max_settled_bone_difference_cm"] = max(s["difference"] for s in stable)
        REPORT["after_count"] = ACTOR.get_editor_property("RestartCount")
        REPORT["checks"] = {
            "physical_R_restarts_once": REPORT["after_count"] == BASE_COUNT + 1,
            "all_23_bones_observed": len(BONES) == 23,
            "physical_reset_keeps_reference_in_sync": REPORT["max_settled_bone_difference_cm"]
            < 0.001,
        }
        REPORT["status"] = "passed" if all(REPORT["checks"].values()) else "failed_checks"
    OUT.write_text(json.dumps(REPORT, indent=2), encoding="utf-8")
    # WORLD에 기준값 None을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
    WORLD = ACTOR = MESHES = None


# 함수 tick: 이름은 tick이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: delta 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
def tick(delta):
    if STATE["done"]:
        # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
        return
    # 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다. 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    try:
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: time.monotonic() - START > 45
        if time.monotonic() - START > 45:
            raise RuntimeError("No physical R input observed within the test window")
        if ACTOR.get_editor_property("RestartCount") <= BASE_COUNT:
            # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
            return
        now = unreal.GameplayStatics.get_time_seconds(WORLD)
        if STATE["reset_time"] is None:
            STATE["reset_time"] = now
        poses = [
            [
                list(
                    m.get_socket_transform(
                        b, unreal.RelativeTransformSpace.RTS_COMPONENT
                    ).translation.to_tuple()
                )
                for b in BONES
            ]
            for m in MESHES
        ]
        REPORT["samples"].append(
            {
                "elapsed": now - STATE["reset_time"],
                "difference": max(math.dist(a, b) for a, b in zip(*poses)),
                "source_clip_position": MESHES[1].get_position(),
            }
        )
        if now - STATE["reset_time"] >= 1.0:
            finish()
    except Exception:
        finish(traceback.format_exc())


OUT.write_text(json.dumps(REPORT, indent=2), encoding="utf-8")
# HANDLE: 나중에 콜백을 해제하기 위해 보관하는 등록 표식이다. 에디터 갱신 뒤 호출할 함수를 등록한다. 작업이 끝나면 핸들로 해제해야 반복 호출이 남지 않는다.
HANDLE = unreal.register_slate_post_tick_callback(tick)
RESULT = {"status": "armed", "report": str(OUT)}
```

<a id="source-lab-lab-audit-animgen-inputs-py"></a>

### lab_audit_animgen_inputs.py

```python
# 파일 역할: EpicFeatureLab의 lab_audit_animgen_inputs 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

import json
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
assert root.name == "EpicFeatureLab"


# 함수 value: 이름은 value이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: item
def value(item):
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: isinstance(item, unreal.Object)
    if isinstance(item, unreal.Object):
        return {"path": item.get_path_name(), "class": item.get_class().get_name()}
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: isinstance(item, (str, int, float, bool)) or item is None
    if isinstance(item, (str, int, float, bool)) or item is None:
        # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
        return item
    # 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다.
    try:
        # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
        return item.export_text()
    except Exception:
        # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
        return str(item)


# 함수 inspect: 이름은 inspect이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: obj, names 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다.
def inspect(obj, names):
    result = {"object": value(obj), "properties": {}}
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 name의 값이 매번 바뀐다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다.
    for name in names:
        # 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다.
        try:
            result["properties"][name] = value(obj.get_editor_property(name))
        except Exception as exc:
            result["properties"][name] = {"error": str(exc)}
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return result


report = {"status": "input_audit", "assets": [], "modifies_source_assets": False}
base = "/AnimGenExample/Characters/UEFN_Mannequin/Animations/"
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 name의 값이 매번 바뀐다. 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
for name in [
    "AGAE_AnimGenNPC",
    "AGAE_AnimGenCharacter",
    "AGC_AnimGenNPC",
    "AGC_AnimGenCharacter",
]:
    # 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
    asset = unreal.load_asset(base + name)
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert asset, name
    entry = inspect(
        asset,
        [
            "TrainedSkeleton",
            "TrainedBoneLocations",
            "TrainedBoneRotations",
            "EncoderSize",
            "DecoderSize",
            "AutoEncoder",
            "ControlEncoderSize",
            "DenoiserSize",
            "FrameRate",
        ],
    )
    # 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다.
    try:
        settings = unreal.FeatureLabRuntimeLibrary.read_lab_editor_object(
            asset, "TrainingSettings"
        )
        entry["training"] = inspect(
            settings,
            [
                "Database",
                "FrameRanges",
                "Device",
                "NumberOfIterations",
                "BatchSize",
                "HiddenUnitNum",
                "LayerNum",
                "EncodingSize",
                "AutoEncoder",
                "Behavior",
            ],
        )
        entry["training"]["callable_names"] = [
            n
            for n in dir(settings)
            if not n.startswith("_")
            and any(
                s in n.lower() for s in ["train", "refresh", "database", "iteration", "device"]
            )
        ]
    except Exception as exc:
        entry["training_error"] = str(exc)
    report["assets"].append(entry)

report["uaf"] = []
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 path의 값이 매번 바뀐다. 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
for path in [
    "/UAF/Templates/BasicCharacter/S_DefaultCharacter",
    "/UAF/Templates/BasicCharacter/AG_DefaultCharacter",
    "/UAF/Templates/BasicCharacter/DA_DefaultCharacter",
]:
    # 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
    asset = unreal.load_asset(path)
    entry = inspect(asset, ["EditorData", "Variables", "Entries", "System", "AnimationGraph"])
    entry["callable_names"] = [
        n
        for n in dir(asset)
        if not n.startswith("_")
        and any(
            s in n.lower()
            for s in ["graph", "variable", "controller", "execute", "compile", "entry"]
        )
    ]
    report["uaf"].append(entry)
    if hasattr(asset, "can_execute"):
        graphs = unreal.FeatureLabRuntimeLibrary.get_lab_uaf_graphs(asset)
        entry["graphs"] = [
            {"path": g.get_path_name(), "nodes": len(g.get_nodes())} for g in graphs
        ]
        commands = list(unreal.FeatureLabRuntimeLibrary.export_lab_uaf_python(asset))
        entry["python_command_count"] = len(commands)
        (root / "Evidence" / ("case06-" + asset.get_name() + "-commands.py")).write_text(
            "\n".join(commands), encoding="utf-8"
        )

# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = report
(root / "Evidence" / "case06-input-audit.json").write_text(
    json.dumps(report, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-build-animgen-control-scene-py"></a>

### lab_build_animgen_control_scene.py

```python
# 파일 역할: 에셋·그래프·장면을 구성하는 제작 작업. 이미 있는 원본을 대상으로 재실행해도 되는지 가드 조건부터 읽는다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Maps/FL_06_AnimGenControl

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
path = "/Game/FeatureLab/Maps/FL_06_AnimGenControl"
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world().get_name() != 'FL_06_AnimGenControl' 작업할 맵을 연다. 현재 맵과 다른 맵이므로 실행 중인 PIE를 먼저 끝내는지 확인한다.
if (
    unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world().get_name()
    != "FL_06_AnimGenControl"
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
    result.tags = ["FeatureLab_Owned", "FeatureLab_06"]
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return result


# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 편집 중인 월드를 얻는다. 게임 실행 월드와 다르므로 대상을 혼동하지 않는다.
world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world()
mode = lib.load_blueprint_class("/AnimGenExample/Blueprints/GM_AnimGenExample")
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert mode
world.get_world_settings().set_editor_property("default_game_mode", mode)
floor = actor(unreal.StaticMeshActor, "FL06B_Floor", (0, 0, -10))
floor.static_mesh_component.set_static_mesh(lib.load_asset("/Engine/BasicShapes/Cube"))
floor.static_mesh_component.set_collision_enabled(unreal.CollisionEnabled.QUERY_AND_PHYSICS)
floor.set_actor_scale3d(unreal.Vector(50, 50, 0.2))
actor(unreal.PlayerStart, "FL06B_PlayerStart", (0, 0, 88))
visuals = lib.load_blueprint_class("/AnimGenExample/Levels/LevelPrototyping/LevelVisuals")
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert visuals
actor(visuals, "FL06B_Lighting", (0, 0, 0))
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 (index, position)의 값이 매번 바뀐다. 반복할 항목과 0부터 시작하는 순번을 함께 꺼낸다.
for index, position in enumerate(
    [(1000, 1000, 100), (-1000, 1000, 100), (-1000, -1000, 100), (1000, -1000, 100)]
):
    marker = actor(unreal.StaticMeshActor, "FL06B_Marker" + str(index), position)
    marker.static_mesh_component.set_static_mesh(lib.load_asset("/Engine/BasicShapes/Cube"))
    marker.set_actor_scale3d(unreal.Vector(0.7, 0.7, 2))
reset = (
    actor(unreal.FeatureLabAnimGenReset, "FL06B_Reset", (0, 0, 0))
    if hasattr(unreal, "FeatureLabAnimGenReset")
    else None
)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert editor.save_current_level()
report = {
    "status": (
        "scene_saved_runtime_pending" if reset else "scene_saved_reset_actor_pending_build"
    ),
    "map": path,
    "game_mode": mode.get_path_name(),
    "controller_asset": "/AnimGenExample/Characters/UEFN_Mannequin/Animations/AGC_AnimGenCharacter",
    "reset_actor": reset.get_path_name() if reset else None,
    "controls": {
        "WASD": "Move",
        "Right Mouse": "Aim",
        "Left Mouse": "Fire",
        "R": "Reset player and neural animation state",
    },
    "original_example_map_modified": False,
}
(root / "Evidence" / "case06-animgen-control-scene.json").write_text(
    json.dumps(report, indent=2), encoding="utf-8"
)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = report
```

<a id="source-lab-lab-build-uaf-puppet-graph-py"></a>

### lab_build_uaf_puppet_graph.py

```python
# 파일 역할: 에셋·그래프·장면을 구성하는 제작 작업. 이미 있는 원본을 대상으로 재실행해도 되는지 가드 조건부터 읽는다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/UAF

import json
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
assert root.name == "EpicFeatureLab"
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
assert not unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
lib = unreal.EditorAssetLibrary
folder = "/Game/FeatureLab/UAF"
path = folder + "/AG_PuppetLocomotion"
# 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
asset = lib.load_asset(path) if lib.does_asset_exist(path) else None
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not asset 지정한 경로·이름·종류로 새 에셋을 만든다. 같은 이름의 원본이 있는지 검사하는 코드와 함께 읽는다.
if not asset:
    # 지정한 경로·이름·종류로 새 에셋을 만든다. 같은 이름의 원본이 있는지 검사하는 코드와 함께 읽는다.
    asset = unreal.AssetToolsHelpers.get_asset_tools().create_asset(
        "AG_PuppetLocomotion", folder, unreal.UAFAnimGraph, unreal.UAFAnimGraphFactory()
    )
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert asset
graphs = list(unreal.FeatureLabRuntimeLibrary.get_lab_uaf_graphs(asset))
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not graphs
if not graphs:
    asset.add_animation_graph("Root")
    graphs = list(unreal.FeatureLabRuntimeLibrary.get_lab_uaf_graphs(asset))
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert len(graphs) == 1, [g.get_path_name() for g in graphs]
graph = graphs[0]
controller = unreal.FeatureLabRuntimeLibrary.get_lab_uaf_controller(asset, graph.get_name())
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert controller
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 node의 값이 매번 바뀐다.
for node in list(graph.get_nodes()):
    if node.get_name() != "RigUnit_AnimNextGraphRoot":
        # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
        assert controller.remove_node(node, False, False)
root_node = next(n for n in graph.get_nodes() if n.get_name() == "RigUnit_AnimNextGraphRoot")
variable = asset.find_entry("UseRun")
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not variable
if not variable:
    variable = asset.add_variable(
        "UseRun",
        unreal.PropertyBagPropertyType.BOOL,
        default_value="False",
        setup_undo_redo=False,
        print_python_command=False,
    )
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert variable
variable.set_editor_property("access", unreal.AnimNextExportAccessSpecifier.PUBLIC)


# 함수 make_stack: 이름은 make_stack이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: name, template_type, position
def make_stack(name, template_type, position):
    node = controller.add_unit_node(
        unreal.RigUnit_AnimNextTraitStack.static_struct(),
        "Execute",
        position,
        name,
        False,
        False,
    )
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert node, name
    template = unreal.get_default_object(template_type)
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert template.configure_new_node(controller, node), name
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return node, template


walk, walk_template = make_stack(
    "Walk", unreal.UAFGraphNodeTemplate_SequencePlayer, unreal.Vector2D(-600, -120)
)
run, run_template = make_stack(
    "Run", unreal.UAFGraphNodeTemplate_SequencePlayer, unreal.Vector2D(-600, 160)
)
for node, template, name in [(walk, walk_template, "Walk"), (run, run_template, "Run")]:
    playback_path = folder + "/Playback/AS_Source_" + name
    # 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
    clip = lib.load_asset(
        playback_path
        if lib.does_asset_exist(playback_path)
        else folder + "/Training/AS_Train_" + name
    )
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert clip
    template.handle_asset_dropped(controller, node, clip)
blend, _ = make_stack(
    "WalkRunBlend", unreal.UAFGraphNodeTemplate_BlendByBool, unreal.Vector2D(-200, 0)
)


# 함수 all_pins: 이름은 all_pins이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: node
def all_pins(node):
    # 함수 visit: 이름은 visit이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: pin
    def visit(pin):
        # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
        return [pin] + [child for sub in pin.get_sub_pins() for child in visit(sub)]

    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return [child for pin in node.get_pins() for child in visit(pin)]


# 함수 pin: 이름은 pin이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: node, name
def pin(node, name):
    found = [p for p in all_pins(node) if p.get_name() == name]
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert len(found) == 1, (node.get_name(), name, [p.get_pin_path() for p in all_pins(node)])
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return found[0].get_pin_path()


# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 sequence_node의 값이 매번 바뀐다.
for sequence_node in [walk, run]:
    assert controller.set_pin_default_value(pin(sequence_node, "LoopMode"), "ForceLoop")
assert controller.add_link(pin(walk, "Result"), pin(blend, "FalseChild"))
assert controller.add_link(pin(run, "Result"), pin(blend, "TrueChild"))
assert controller.add_link(pin(blend, "Result"), pin(root_node, "Result"))
getter = controller.add_variable_node(
    "UseRun",
    "bool",
    None,
    True,
    "False",
    unreal.Vector2D(-600, 430),
    "UseRunInput",
    False,
    False,
)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert getter
assert controller.add_link(pin(getter, "Value"), pin(blend, "bCondition"))
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert unreal.FeatureLabRuntimeLibrary.compile_lab_uaf(asset)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
assert lib.save_loaded_asset(asset, False)

encoder = lib.load_asset(folder + "/Training/AGAE_PuppetMotion")
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert encoder and encoder.is_valid()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
assert lib.save_loaded_asset(encoder, False)
training = {
    "status": "trained_runtime_reconstruction_pending",
    "encoder": encoder.get_path_name(),
    "valid": encoder.is_valid(),
    "pose_vector_size": encoder.get_pose_vector_size(),
    "encoding_size": encoder.get_encoding_size(),
    "bone_count": encoder.get_bone_num(),
    "encoder_kb": encoder.get_editor_property("encoder_size"),
    "decoder_kb": encoder.get_editor_property("decoder_size"),
    "configured_iterations": 6000,
    "training_device": "CPU",
    "observed_editor_status": "Status: Training complete.",
}
(root / "Evidence" / "case06-autoencoder-model.json").write_text(
    json.dumps(training, indent=2), encoding="utf-8"
)
report = {
    "status": "graph_compiled_runtime_pending",
    "asset": asset.get_path_name(),
    "graphs": [
        {
            "name": graph.get_name(),
            "nodes": [
                {
                    "name": n.get_name(),
                    "pins": [
                        {
                            "name": p.get_name(),
                            "type": p.get_cpp_type(),
                            "default": p.get_default_value(),
                        }
                        for p in all_pins(n)
                    ],
                }
                for n in graph.get_nodes()
            ],
        }
    ],
    "public_variables": list(map(str, asset.get_script_accessible_variables())),
    "model": training,
}
(root / "Evidence" / "case06-uaf-graph.json").write_text(
    json.dumps(report, indent=2), encoding="utf-8"
)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "status": report["status"],
    "asset": report["asset"],
    "nodes": len(graph.get_nodes()),
    "public_variables": report["public_variables"],
    "model": training,
}
```

<a id="source-lab-lab-build-uaf-scene-py"></a>

### lab_build_uaf_scene.py

```python
# 파일 역할: 에셋·그래프·장면을 구성하는 제작 작업. 이미 있는 원본을 대상으로 재실행해도 되는지 가드 조건부터 읽는다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Maps/FL_06_GenerativeAnimation
#   /Game/FeatureLab/Framework/BP_LabViewerGameMode
#   /Game/FeatureLab/UAF/AG_PuppetLocomotion
#   /Game/FeatureLab/UAF

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
path = "/Game/FeatureLab/Maps/FL_06_GenerativeAnimation"
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world().get_name() != 'FL_06_GenerativeAnimation' 작업할 맵을 연다. 현재 맵과 다른 맵이므로 실행 중인 PIE를 먼저 끝내는지 확인한다.
if (
    unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world().get_name()
    != "FL_06_GenerativeAnimation"
):
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 작업할 맵을 연다. 현재 맵과 다른 맵이므로 실행 중인 PIE를 먼저 끝내는지 확인한다.
    assert editor.load_level(path) if lib.does_asset_exist(path) else editor.new_level(path)


# 함수 actor: 이름은 actor이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: cls, label, position 지정한 클래스의 실제 액터를 편집 장면에 만든다. 에셋 파일 생성과는 다르다.
def actor(cls, label, position):
    # 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
    found = [a for a in actors.get_all_level_actors() if a.get_actor_label() == label]
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert len(found) <= 1, label
    # 지정한 클래스의 실제 액터를 편집 장면에 만든다. 에셋 파일 생성과는 다르다.
    result = found[0] if found else actors.spawn_actor_from_class(cls, unreal.Vector(*position))
    result.set_actor_label(label)
    result.tags = ["FeatureLab_Owned", "FeatureLab_06"]
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
viewer_mode = lib.load_blueprint_class("/Game/FeatureLab/Framework/BP_LabViewerGameMode")
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert viewer_mode
world.get_world_settings().set_editor_property("default_game_mode", viewer_mode)
# JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
inputs = json.loads(
    (root / "Evidence" / "case06-puppet-training-input.json").read_text(encoding="utf-8")
)
lab = actor(unreal.FeatureLabUAFActor, "FL06_UAFPuppet", (0, 0, 0))
lab.set_editor_property("puppet_mesh", lib.load_asset(inputs["mesh"]))
# 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 animation_graph이다.
lab.set_editor_property(
    "animation_graph", lib.load_asset("/Game/FeatureLab/UAF/AG_PuppetLocomotion")
)
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 (prop, asset)의 값이 매번 바뀐다. 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다.
for prop, asset in [
    ("walk_animation", "/Playback/AS_Source_Walk"),
    ("run_animation", "/Playback/AS_Source_Run"),
    ("decoded_walk_animation", "/Decoded/AS_Decode_Walk"),
    ("decoded_run_animation", "/Decoded/AS_Decode_Run"),
]:
    lab.set_editor_property(prop, lib.load_asset("/Game/FeatureLab/UAF" + asset))
lab.restart_playback()
lab.get_editor_property("UAFMesh").set_editor_property("bEnableAnimation", False)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 output_component이다.
assert (
    "UAFMesh"
    in lab.get_editor_property("UAFComponent")
    .get_editor_property("output_component")
    .export_text()
)
for prop in ["UAFMesh", "OriginalMesh", "ReconstructedMesh"]:
    # 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다.
    lab.get_editor_property(prop).set_forced_lod(1)
floor = actor(unreal.StaticMeshActor, "FL06_Floor", (0, 0, -5))
floor.static_mesh_component.set_static_mesh(lib.load_asset("/Engine/BasicShapes/Cube"))
floor.static_mesh_component.set_collision_enabled(unreal.CollisionEnabled.NO_COLLISION)
floor.set_actor_scale3d(unreal.Vector(11, 8, 0.1))
actor(unreal.PlayerStart, "FL06_ViewerStart", (0, 1200, 110))
camera = actor(unreal.CineCameraActor, "FL06_OverviewCamera", (0, 1050, 250))
look(camera, (0, 0, 105))
camera.set_editor_property("auto_activate_for_player", unreal.AutoReceiveInput.PLAYER0)
cine = camera.get_cine_camera_component()
cine.set_editor_property("current_focal_length", 35.0)
focus = cine.get_editor_property("focus_settings")
focus.set_editor_property("focus_method", unreal.CameraFocusMethod.DISABLE)
cine.set_editor_property("focus_settings", focus)
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 (label, position, intensity)의 값이 매번 바뀐다.
for label, position, intensity in [
    ("Key", (0, 450, 390), 130),
    ("Fill", (500, 150, 260), 70),
    ("Rim", (-400, -250, 330), 95),
]:
    light = actor(unreal.RectLight, "FL06_" + label, position)
    look(light, (0, 0, 110))
    component = light.get_component_by_class(unreal.RectLightComponent)
    component.set_intensity(float(intensity))
    component.set_editor_property("source_width", 500.0)
    component.set_editor_property("source_height", 260.0)
    component.set_attenuation_radius(1600)
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 (label, text, x)의 값이 매번 바뀐다. 액터 위치를 바꾼다. 별도 이동 시뮬레이션이 소유한 상태까지 자동 초기화되는지는 확인해야 한다.
for label, text, x in [
    ("SourceLabel", "Authored input", -285),
    ("UAFLabel", "UAF graph", -45),
    ("DecodedLabel", "Neural reconstruction", 130),
]:
    item = actor(unreal.TextRenderActor, "FL06_" + label, (x, 0, 205))
    # 액터 위치를 바꾼다. 별도 이동 시뮬레이션이 소유한 상태까지 자동 초기화되는지는 확인해야 한다.
    item.set_actor_location(unreal.Vector(x, 0, 205), False, False)
    # 액터 방향을 바꾼다. 위치 이동과 구분한다.
    item.set_actor_rotation(unreal.Rotator(pitch=0, yaw=90, roll=0), False)
    component = item.get_component_by_class(unreal.TextRenderComponent)
    component.set_text(unreal.Text(text))
    component.set_world_size(17)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert editor.save_current_level()
report = {
    "status": "scene_saved_runtime_pending",
    "map": path,
    "actor": lab.get_path_name(),
    "camera": camera.get_path_name(),
    "controls": {"1": "Walk", "2": "Run", "P": "Pause all outputs", "R": "Restart all outputs"},
    "columns": ["Authored input", "UAF graph", "Neural reconstruction"],
    "capture_exclusions_untouched": True,
}
(root / "Evidence" / "case06-scene-build.json").write_text(
    json.dumps(report, indent=2), encoding="utf-8"
)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = report
```

<a id="source-lab-lab-decode-puppet-training-py"></a>

### lab_decode_puppet_training.py

```python
# 파일 역할: 06번 학습 입력·모델 처리·동작 재구성 작업. 모델 실행과 게임 캐릭터 재생은 별도 단계다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/UAF

import json
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
assert root.name == "EpicFeatureLab"
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
assert not unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
lib = unreal.EditorAssetLibrary
tools = unreal.AssetToolsHelpers.get_asset_tools()
folder = "/Game/FeatureLab/UAF"
# JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
inputs = json.loads(
    (root / "Evidence" / "case06-puppet-training-input.json").read_text(encoding="utf-8")
)
encoder = lib.load_asset(inputs["encoder"])
database = lib.load_asset(inputs["database"])
skeleton = database.get_editor_property("skeleton")
lib.make_directory(folder + "/Decoded")
outputs = []
for entry in inputs["clips"]:
    label = entry["asset"].split(".")[-1].removeprefix("AS_Train_")
    name = "AS_Decode_" + label
    path = folder + "/Decoded/" + name
    # 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
    target = lib.load_asset(path) if lib.does_asset_exist(path) else None
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not target 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 target_skeleton이다.
    if not target:
        factory = unreal.AnimSequenceFactory()
        factory.set_editor_property("target_skeleton", skeleton)
        target = tools.create_asset(name, folder + "/Decoded", unreal.AnimSequence, factory)
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert target
    # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    outputs.append(target)
# JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
report = json.loads(
    unreal.FeatureLabRuntimeLibrary.reconstruct_lab_auto_encoder(encoder, database, outputs)
)
assert report["status"] == "neural_reconstruction_exported", report
report["output_assets"] = [a.get_path_name() for a in outputs]
report["checks"] = {
    "actual_trained_model": encoder.is_valid(),
    "all_input_frames_reconstructed": report["frames"] == inputs["total_frames"],
    "all_eight_sequences_exported": report["exported_sequences"] == 8,
    "all_23_bones_evaluated": report["bones"] == 23,
    "latent_dimension_below_20_percent": encoder.get_encoding_size()
    / encoder.get_pose_vector_size()
    < 0.2,
    "same_input_repeat_difference_below_1e7": report["repeat_max_difference"] < 1e-7,
    "mean_global_bone_error_under_5cm": report["mean_global_bone_error_cm"] < 5.0,
    "max_global_bone_error_under_30cm": report["max_global_bone_error_cm"] < 30.0,
}
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 target의 값이 매번 바뀐다. 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 force_root_lock이다.
for target in outputs:
    target.set_editor_property("force_root_lock", True)
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
    assert lib.save_loaded_asset(target, False)
lib.make_directory(folder + "/Playback")
report["root_locked_comparison_inputs"] = []
for label in ["Walk", "Run"]:
    source = folder + "/Training/AS_Train_" + label
    destination = folder + "/Playback/AS_Source_" + label
    # 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
    target = (
        lib.load_asset(destination)
        if lib.does_asset_exist(destination)
        else lib.duplicate_asset(source, destination)
    )
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert target
    target.set_editor_property("force_root_lock", True)
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
    assert lib.save_loaded_asset(target, False)
    report["root_locked_comparison_inputs"].append(target.get_path_name())
report["comparison_root_policy"] = (
    "Training inputs retain authored trajectories. Separate display copies and decoded clips lock the root for a stationary side-by-side comparison. Reconstruction metrics above include the supplied original root transforms."
)
report["status"] = "passed" if all(report["checks"].values()) else "failed_quality_checks"
(root / "Evidence" / "case06-autoencoder-reconstruction.json").write_text(
    json.dumps(report, indent=2), encoding="utf-8"
)
RESULT = {k: v for k, v in report.items() if k != "normalized_output_sample_frame31"}
```

<a id="source-lab-lab-finish-training-repeat-py"></a>

### lab_finish_training_repeat.py

```python
# 파일 역할: 06번 학습 입력·모델 처리·동작 재구성 작업. 모델 실행과 게임 캐릭터 재생은 별도 단계다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/UAF/Training/AGAE_PuppetMotion

import json
from pathlib import Path
from tensorboard.backend.event_processing.event_accumulator import EventAccumulator
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
assert root.name == "EpicFeatureLab"
# JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
baseline = json.loads(
    (root / "Evidence" / "case06-autoencoder-first-run.json").read_text(encoding="utf-8")
)
# JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
current = json.loads(
    (root / "Evidence" / "case06-autoencoder-reconstruction.json").read_text(encoding="utf-8")
)
assert baseline["status"] == current["status"] == "passed"
events = sorted(
    (root / "Intermediate" / "AnimGen").glob("AGAE_PuppetMotion_*/events.out.tfevents.*"),
    key=lambda p: p.stat().st_mtime,
)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert events
accumulator = EventAccumulator(str(events[-1].parent), size_guidance={"scalars": 0})
accumulator.Reload()
scalars = {}
for tag in accumulator.Tags()["scalars"]:
    values = accumulator.Scalars(tag)
    scalars[tag] = {
        "count": len(values),
        "first_step": values[0].step,
        "last_step": values[-1].step,
        "first": values[0].value,
        "last": values[-1].value,
        "first100_mean": sum(v.value for v in values[:100]) / len(values[:100]),
        "last100_mean": sum(v.value for v in values[-100:]) / len(values[-100:]),
    }
loss_tags = [n for n in scalars if "loss" in n.lower()]
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert loss_tags, list(scalars)
loss_tag = next((n for n in loss_tags if "total" in n.lower()), loss_tags[0])
loss = scalars[loss_tag]
# 차이의 부호를 없애 크기만 비교한다. 오차 허용 범위 검사에 자주 사용한다.
repeat_difference = max(
    abs(a - b)
    for a, b in zip(
        baseline["normalized_output_sample_frame31"],
        current["normalized_output_sample_frame31"],
    )
)
report = {
    "status": "checking",
    "event_file": str(events[-1]),
    "loss_tag": loss_tag,
    "scalars": scalars,
    "same_seed_output_max_difference": repeat_difference,
    "first_run_mean_bone_error_cm": baseline["mean_global_bone_error_cm"],
    "repeat_mean_bone_error_cm": current["mean_global_bone_error_cm"],
    "checks": {
        "loss_history_covers_6000_iterations": loss["last_step"] >= 5999,
        "loss_decreases": loss["last100_mean"] < loss["first100_mean"] * 0.5,
        "same_seed_retraining_reproduces_output": repeat_difference < 1e-7,
        "retrained_reconstruction_passed": current["status"] == "passed",
    },
}
report["status"] = "passed" if all(report["checks"].values()) else "failed_checks"
report["sampled_output_frame"] = 31
report["sampled_output_values"] = len(current["normalized_output_sample_frame31"])
report["checks"]["same_seed_retraining_reproduces_sampled_output"] = report["checks"].pop(
    "same_seed_retraining_reproduces_output"
)
(root / "Evidence" / "case06-training-repeat.json").write_text(
    json.dumps(report, indent=2), encoding="utf-8"
)
training_path = root / "Evidence" / "case06-autoencoder-training.json"
training = json.loads(training_path.read_text(encoding="utf-8"))
training.update(
    status=report["status"],
    phase="training_loss_and_repeat_verified",
    repeat_report="case06-training-repeat.json",
)
training_path.write_text(json.dumps(training, indent=2), encoding="utf-8")
# 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
unreal.EditorAssetLibrary.save_loaded_asset(
    unreal.load_asset("/Game/FeatureLab/UAF/Training/AGAE_PuppetMotion"), False
)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = report
```

<a id="source-lab-lab-inspect-animgen-runtime-py"></a>

### lab_inspect_animgen_runtime.py

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
pawn = unreal.GameplayStatics.get_player_pawn(world, 0)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert pawn
pc = unreal.GameplayStatics.get_player_controller(world, 0)
report = {
    "pawn": pawn.get_path_name(),
    "class": pawn.get_class().get_path_name(),
    "location": list(pawn.get_actor_location().to_tuple()),
    "controller_class": pc.get_class().get_path_name(),
    "meshes": [],
    "properties": {},
}
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 mesh의 값이 매번 바뀐다. 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
for mesh in pawn.get_components_by_class(unreal.SkeletalMeshComponent):
    anim = mesh.get_anim_instance()
    report["meshes"].append(
        {
            "component": mesh.get_path_name(),
            "mesh": mesh.get_skeletal_mesh_asset().get_path_name(),
            "animation_class": anim.get_class().get_path_name() if anim else None,
            "bones": mesh.get_num_bones(),
            "animgen": (
                json.loads(unreal.FeatureLabRuntimeLibrary.inspect_lab_anim_gen(anim))
                if anim
                else None
            ),
        }
    )
for name in ["Min Speed", "Max Speed", "Aiming", "Move Input", "Lookat Direction"]:
    # 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다.
    try:
        report["properties"][name] = str(pawn.get_editor_property(name))
    except Exception as exc:
        report["properties"][name] = {"error": str(exc)}
mover = pawn.get_component_by_class(unreal.MoverComponent)
report["mover"] = mover.get_path_name() if mover else None
report["mode"] = str(mover.get_movement_mode_name()) if mover else None
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = report
(root / "Evidence" / "case06-animgen-runtime-inspection.json").write_text(
    json.dumps(report, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-inspect-uaf-templates-py"></a>

### lab_inspect_uaf_templates.py

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
report = {"assets": []}
for name in ["S_DefaultCharacter", "AG_DefaultCharacter"]:
    asset = unreal.load_asset("/UAF/Templates/BasicCharacter/" + name)
    entry = {
        "asset": asset.get_path_name(),
        "variables": list(map(str, asset.get_script_accessible_variables())),
        "graphs": [],
    }
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 graph의 값이 매번 바뀐다. 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    for graph in unreal.FeatureLabRuntimeLibrary.get_lab_uaf_graphs(asset):
        controller = unreal.FeatureLabRuntimeLibrary.get_lab_uaf_controller(
            asset, graph.get_name()
        )
        info = {
            "name": graph.get_name(),
            "controller_class": controller.get_class().get_name() if controller else None,
            "controller_methods": [
                n
                for n in dir(controller)
                if any(s in n for s in ["trait", "template", "node", "variable"])
                and not n.startswith("_")
            ],
            "nodes": [],
        }
        # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 node의 값이 매번 바뀐다. 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
        for node in graph.get_nodes():
            info["nodes"].append(
                {
                    "name": node.get_name(),
                    "class": node.get_class().get_name(),
                    "pins": [
                        {
                            "name": p.get_name(),
                            "type": p.get_cpp_type(),
                            "default": p.get_default_value(),
                            "links": [q.get_pin_path() for q in p.get_linked_source_pins()],
                        }
                        for p in node.get_pins()
                    ],
                }
            )
        entry["graphs"].append(info)
    report["assets"].append(entry)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = report
(root / "Evidence" / "case06-uaf-template-inspection.json").write_text(
    json.dumps(report, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-open-animgen-reference-py"></a>

### lab_open_animgen_reference.py

```python
# 파일 역할: EpicFeatureLab의 lab_open_animgen_reference 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/
#   /Game/FeatureLab/UAF/Training/AGAE_PuppetMotion

import json
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
assert root.name == "EpicFeatureLab"
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
assert not unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
assert (
    json.loads((root / "Evidence" / "case06-training-repeat.json").read_text(encoding="utf-8"))[
        "status"
    ]
    == "passed"
)
# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
editor = unreal.get_editor_subsystem(unreal.LevelEditorSubsystem)
# 편집 중인 월드를 얻는다. 게임 실행 월드와 다르므로 대상을 혼동하지 않는다.
current = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world()
assert current.get_path_name().startswith("/Game/FeatureLab/")
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert editor.save_current_level()
# current에 기준값 None을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
current = None
unreal.LevelSequenceEditorBlueprintLibrary.close_level_sequence()
encoder = unreal.load_asset("/Game/FeatureLab/UAF/Training/AGAE_PuppetMotion")
# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
unreal.get_editor_subsystem(unreal.AssetEditorSubsystem).close_all_editors_for_asset(encoder)
reference = "/AnimGenExample/Levels/AnimGenExampleLevel"
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 작업할 맵을 연다. 현재 맵과 다른 맵이므로 실행 중인 PIE를 먼저 끝내는지 확인한다.
assert editor.load_level(reference)
# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 편집 중인 월드를 얻는다. 게임 실행 월드와 다르므로 대상을 혼동하지 않는다.
world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world()
game_mode = world.get_world_settings().get_editor_property("default_game_mode")
# 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
actors = unreal.get_editor_subsystem(unreal.EditorActorSubsystem).get_all_level_actors()
report = {
    "status": "reference_loaded_read_only",
    "map": reference,
    "source_map_saved": False,
    "game_mode": game_mode.get_path_name() if game_mode else None,
    "actors": [
        {
            "label": a.get_actor_label(),
            "class": a.get_class().get_path_name(),
            "location": list(a.get_actor_location().to_tuple()),
        }
        for a in actors
        if "AnimGen" in a.get_class().get_path_name() or isinstance(a, unreal.PlayerStart)
    ],
}
(root / "Evidence" / "case06-animgen-reference.json").write_text(
    json.dumps(report, indent=2), encoding="utf-8"
)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = report
```

<a id="source-lab-lab-peek-feature6-controls-py"></a>

### lab_peek_feature6_controls.py

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
uaf = unreal.GameplayStatics.get_all_actors_of_class(world, unreal.FeatureLabUAFActor)
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: uaf 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 bUseRun이다.
if uaf:
    actor = uaf[0]
    # 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 bUseRun이다.
    report = {
        "scene": "UAF",
        "run": actor.get_editor_property("bUseRun"),
        "paused": actor.get_editor_property("bPaused"),
        "restart_count": actor.get_editor_property("RestartCount"),
        "input_applied": actor.get_editor_property("bLastInputApplied"),
        "uaf_legacy_animation_disabled": not actor.get_editor_property(
            "UAFMesh"
        ).get_editor_property("bEnableAnimation"),
        "foot_positions": [
            list(
                actor.get_editor_property(n)
                .get_socket_transform("foot_l", unreal.RelativeTransformSpace.RTS_COMPONENT)
                .translation.to_tuple()
            )
            for n in ["UAFMesh", "OriginalMesh", "ReconstructedMesh"]
        ],
    }
else:
    actor = unreal.GameplayStatics.get_all_actors_of_class(
        world, unreal.FeatureLabAnimGenReset
    )[0]
    pawn = unreal.GameplayStatics.get_player_pawn(world, 0)
    # 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 ResetCount이다.
    report = {
        "scene": "AnimGen",
        "reset_count": actor.get_editor_property("ResetCount"),
        "reset_ready": actor.get_editor_property("bReady"),
        "reset_queued": actor.get_editor_property("bLastTeleportQueued"),
        "location": list(pawn.get_actor_location().to_tuple()),
        "aiming": pawn.get_editor_property("Aiming"),
        "speed": pawn.get_velocity().length(),
    }
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = report
(root / "Evidence" / "case06-keyboard-live.json").write_text(
    json.dumps(report, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-peek-uaf-runtime-py"></a>

### lab_peek_uaf_runtime.py

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
items = unreal.GameplayStatics.get_all_actors_of_class(world, unreal.FeatureLabUAFActor)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert len(items) == 1
actor = items[0]
# 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 bUseRun이다.
report = {
    "time": unreal.GameplayStatics.get_time_seconds(world),
    "actor": actor.get_path_name(),
    "use_run": actor.get_editor_property("bUseRun"),
    "paused": actor.get_editor_property("bPaused"),
    "input_applied": actor.get_editor_property("bLastInputApplied"),
    "meshes": [],
}
system = actor.get_editor_property("UAFComponent")
report["system"] = {
    "output": system.get_editor_property("OutputComponent").export_text(),
    "mode": str(system.get_editor_property("SkeletalMeshComponentOutputMode")),
    "init": str(system.get_editor_property("InitMethod")),
    "active": system.is_active(),
    "asset": system.get_editor_property("AssetData").export_text(),
}
report["mesh_component_order"] = [
    c.get_name() for c in actor.get_components_by_class(unreal.SkeletalMeshComponent)
]
for prop in ["UAFMesh", "OriginalMesh", "ReconstructedMesh"]:
    # 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다.
    component = actor.get_editor_property(prop)
    entry = {"name": prop, "animation_mode": str(component.get_animation_mode()), "bones": {}}
    for bone in ["Bone01", "pelvis", "chest", "head", "hand_l", "foot_l", "foot_r", "tail_4"]:
        t = component.get_socket_transform(bone, unreal.RelativeTransformSpace.RTS_COMPONENT)
        entry["bones"][bone] = {
            "position": list(t.translation.to_tuple()),
            "rotation": list(t.rotation.to_tuple()),
        }
    report["meshes"].append(entry)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = report
(root / "Evidence" / "case06-runtime-peek.json").write_text(
    json.dumps(report, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-prepare-puppet-training-py"></a>

### lab_prepare_puppet_training.py

```python
# 파일 역할: 06번 학습 입력·모델 처리·동작 재구성 작업. 모델 실행과 게임 캐릭터 재생은 별도 단계다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/UAF/Training

import json
import math
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
assert root.name == "EpicFeatureLab"
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
assert not unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
lib = unreal.EditorAssetLibrary
tools = unreal.AssetToolsHelpers.get_asset_tools()
folder = "/Game/FeatureLab/UAF/Training"
lib.make_directory(folder)
# JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
geometry = json.loads(
    (root / "Evidence" / "case03-puppet-geometry.json").read_text(encoding="utf-8")
)
mesh = unreal.load_asset(geometry["mesh"])
skeleton = mesh.get_editor_property("skeleton")
modifier = unreal.SkeletonModifier()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert modifier.set_skeletal_mesh(mesh)
bones = list(map(str, modifier.get_all_bone_names()))
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert len(bones) == 23, bones
references = {n: modifier.get_bone_transform(n, False) for n in bones}
motions = [
    ("Breathe", 0.0, 0.5, 4.0, 0.0),
    ("Walk", 110.0, 1.0, 25.0, 0.0),
    ("Run", 220.0, 1.6, 45.0, 0.0),
    ("BackStep", -70.0, 0.9, -20.0, 0.0),
    ("TurnLeft", 70.0, 1.0, 22.0, 25.0),
    ("TurnRight", 70.0, 1.0, 22.0, -25.0),
    ("Reach", 0.0, 0.5, 8.0, 0.0),
    ("Celebrate", 0.0, 1.0, 20.0, 0.0),
]
clips = []
report = {
    "status": "authoring",
    "input_provenance": "Procedurally authored transforms on the FeatureLab 23-bone puppet. No captured people, MetaHuman training data, downloaded animation or RealityScan inputs.",
    "mesh": mesh.get_path_name(),
    "bone_count": len(bones),
    "clips": [],
}
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 (label, speed, frequency, amplitude, turn)의 값이 매번 바뀐다. 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
for label, speed, frequency, amplitude, turn in motions:
    asset_name = "AS_Train_" + label
    animation = lib.load_asset(folder + "/" + asset_name)
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not animation 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 target_skeleton이다.
    if not animation:
        factory = unreal.AnimSequenceFactory()
        factory.set_editor_property("target_skeleton", skeleton)
        # 지정한 경로·이름·종류로 새 에셋을 만든다. 같은 이름의 원본이 있는지 검사하는 코드와 함께 읽는다.
        animation = tools.create_asset(asset_name, folder, unreal.AnimSequence, factory)
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert animation
    controller = animation.get_editor_property("controller")
    controller.open_bracket("Author reproducible puppet motion dataset", False)
    # 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다.
    try:
        controller.set_frame_rate(unreal.FrameRate(30, 1), False)
        controller.set_number_of_frames(unreal.FrameNumber(120), False)
        controller.remove_all_bone_tracks(False)
        # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 bone의 값이 매번 바뀐다. 반복에 쓸 정수 순서를 만든다. 끝 값은 포함되지 않는다.
        for bone in bones:
            reference = references[bone]
            positions, rotations = [], []
            # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 frame의 값이 매번 바뀐다. 반복에 쓸 정수 순서를 만든다. 끝 값은 포함되지 않는다.
            for frame in range(121):
                t = frame / 30.0
                phase = 2.0 * math.pi * frequency * t
                wave = math.sin(phase)
                delta = unreal.Vector()
                # roll에 기준값 0.0을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
                roll = pitch = yaw = 0.0
                side = 1.0 if bone.endswith("_l") else -1.0
                if bone == "Bone01":
                    delta = unreal.Vector(0.0, speed * t, 0.0)
                    yaw = turn * t
                elif bone == "pelvis":
                    delta = unreal.Vector(
                        0.0, 0.0, (1.5 if label == "Breathe" else 4.0) * math.sin(phase * 2.0)
                    )
                    yaw = 5.0 * wave
                elif bone == "chest":
                    roll, yaw = 4.0 * wave - (8.0 if label == "Run" else 0.0), -6.0 * wave
                elif bone == "head":
                    pitch, yaw = 5.0 * math.sin(phase * 0.5), 8.0 * wave
                elif bone.startswith("thigh_"):
                    roll = side * amplitude * wave
                elif bone.startswith("shin_"):
                    # 차이의 부호를 없애 크기만 비교한다. 오차 허용 범위 검사에 자주 사용한다.
                    roll = -abs(amplitude) * max(0.0, -side * wave)
                elif bone.startswith("foot_"):
                    roll = -side * amplitude * 0.35 * wave
                elif bone.startswith("upperarm_"):
                    roll = -side * amplitude * 0.7 * wave
                    if label == "Reach":
                        roll = -55.0 * (0.5 + 0.5 * wave)
                    if label == "Celebrate":
                        pitch = side * (65.0 + 20.0 * wave)
                elif bone.startswith("lowerarm_"):
                    roll = -12.0 - 15.0 * max(0.0, side * wave)
                elif bone.startswith("hand_"):
                    yaw = side * 10.0 * wave
                elif bone.startswith("tail_"):
                    index = int(bone[-1])
                    yaw = 16.0 * math.sin(phase - index * 0.55)
                    roll = 6.0 * math.cos(phase - index * 0.55)
                elif bone == "jaw":
                    roll = 10.0 * max(0.0, wave)
                elif bone.startswith("brow_"):
                    delta = unreal.Vector(0.0, 0.0, 3.0 * max(0.0, side * wave))
                # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
                positions.append(reference.translation + delta)
                # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
                rotations.append(
                    reference.rotation
                    * unreal.Rotator(pitch=pitch, yaw=yaw, roll=roll).quaternion()
                )
            # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
            assert controller.add_bone_curve(bone, False)
            # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
            assert controller.set_bone_track_keys(
                bone, positions, rotations, [reference.scale3d] * 121, False
            )
    finally:
        controller.close_bracket(False)
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert unreal.FeatureLabRuntimeLibrary.finalize_authored_animation(animation)
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
    assert lib.save_loaded_asset(animation, False)
    # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    clips.append(animation)
    report["clips"].append(
        {
            "asset": animation.get_path_name(),
            "duration": animation.get_play_length(),
            "tracks": len(bones),
            "keys_per_track": 121,
            "speed_cm_s": speed,
            "frequency_hz": frequency,
            "turn_deg_s": turn,
        }
    )

database = lib.load_asset(folder + "/ADB_PuppetMotion")
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not database 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 data_asset_class이다.
if not database:
    factory = unreal.DataAssetFactory()
    factory.set_editor_property("data_asset_class", unreal.AnimDatabase)
    database = tools.create_asset("ADB_PuppetMotion", folder, unreal.AnimDatabase, factory)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert database
database.set_editor_property("skeleton", skeleton)
database.set_editor_property("frame_rate", unreal.FrameRate(60, 1))
database.set_editor_property("entries", clips)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
assert lib.save_loaded_asset(database, False)

encoder = lib.load_asset(folder + "/AGAE_PuppetMotion")
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not encoder 지정한 경로·이름·종류로 새 에셋을 만든다. 같은 이름의 원본이 있는지 검사하는 코드와 함께 읽는다.
if not encoder:
    # 지정한 경로·이름·종류로 새 에셋을 만든다. 같은 이름의 원본이 있는지 검사하는 코드와 함께 읽는다.
    encoder = tools.create_asset(
        "AGAE_PuppetMotion",
        folder,
        unreal.AnimGenAutoEncoder,
        unreal.AnimGenAutoEncoderEditorFactory(),
    )
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert encoder
settings = unreal.FeatureLabRuntimeLibrary.read_lab_editor_object(encoder, "TrainingSettings")
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert settings
training = {
    "Database": database,
    "FrameRanges": None,
    "Device": unreal.AnimGenTrainingDevice.CPU,
    "EncodingSize": 24,
    "HiddenUnitNum": 128,
    "LayerNum": 2,
    "NumberOfIterations": 6000,
    "BatchSize": 128,
    "WarmupIterations": 200,
    "RandomSeed": 7421,
    "LearningRate": 0.001,
    "bUseCompressedLinearLayers": False,
}
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 (name, item)의 값이 매번 바뀐다. 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다.
for name, item in training.items():
    # 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다.
    settings.set_editor_property(name, item)
settings.call_method("ForceRefresh", ())
viewport = unreal.FeatureLabRuntimeLibrary.read_lab_editor_object(encoder, "ViewportSettings")
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert viewport
viewport.set_editor_property("PreviewMesh", mesh)
viewport.set_editor_property("bDrawOriginalSkeleton", True)
viewport.set_editor_property("bDrawReconstructedSkeleton", True)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
assert lib.save_loaded_asset(encoder, False)
report.update(
    status="dataset_and_cpu_training_configured",
    database=database.get_path_name(),
    total_frames=database.get_total_frame_num(),
    sequence_count=database.get_sequence_num(),
    encoder=encoder.get_path_name(),
    training={
        k: str(v) if isinstance(v, unreal.Object) or k == "Device" else v
        for k, v in training.items()
    },
)
(root / "Evidence" / "case06-puppet-training-input.json").write_text(
    json.dumps(report, indent=2), encoding="utf-8"
)
report["editor_opened"] = unreal.get_editor_subsystem(
    unreal.AssetEditorSubsystem
).open_editor_for_assets([encoder])
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = report
```

<a id="source-lab-lab-prepare-training-repeat-py"></a>

### lab_prepare_training_repeat.py

```python
# 파일 역할: 06번 학습 입력·모델 처리·동작 재구성 작업. 모델 실행과 게임 캐릭터 재생은 별도 단계다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/UAF/Training/AGAE_PuppetMotion

import importlib.util
import json
from datetime import datetime
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
assert root.name == "EpicFeatureLab"
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
assert not unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert importlib.util.find_spec(
    "tensorboard"
), "Loss logging dependency must be available before repeating training"
proof = root / "Evidence" / "case06-autoencoder-reconstruction.json"
baseline = root / "Evidence" / "case06-autoencoder-first-run.json"
report = json.loads(proof.read_text(encoding="utf-8"))
assert report["status"] == "passed"
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not baseline.exists() 문자열을 파일에 기록한다. 결과 JSON이나 보고서인지, 실제 코드·설정 파일인지 경로를 확인한다.
if not baseline.exists():
    baseline.write_text(proof.read_text(encoding="utf-8"), encoding="utf-8")
encoder = unreal.load_asset("/Game/FeatureLab/UAF/Training/AGAE_PuppetMotion")
settings = unreal.FeatureLabRuntimeLibrary.read_lab_editor_object(encoder, "TrainingSettings")
settings.set_editor_property("bEnableTensorboard", True)
assert settings.get_editor_property("NumberOfIterations") == 6000
assert settings.get_editor_property("RandomSeed") == 7421
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
assert unreal.EditorAssetLibrary.save_loaded_asset(encoder, False)
# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
opened = unreal.get_editor_subsystem(unreal.AssetEditorSubsystem).open_editor_for_assets(
    [encoder]
)
report = {
    "status": "processing",
    "phase": "awaiting_repeat_train_click",
    "started_at": datetime.now().isoformat(),
    "encoder": encoder.get_path_name(),
    "baseline": str(baseline),
    "iterations": 6000,
    "seed": 7421,
    "device": "CPU",
    "tensorboard_enabled": True,
    "editor_opened": opened,
    "purpose": "Record training loss and verify a second same-seed training run reproduces the learned outputs.",
}
(root / "Evidence" / "case06-autoencoder-training.json").write_text(
    json.dumps(report, indent=2), encoding="utf-8"
)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = report
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

<a id="source-lab-lab-test-animgen-controller-py"></a>

### lab_test_animgen_controller.py

```python
# 파일 역할: 완성 결과를 실제 값과 비교하는 검증 작업. 생성 코드와 검사 코드를 구분한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

import json
import math
import statistics
import time
import traceback
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
PC = unreal.GameplayStatics.get_player_controller(WORLD, 0)
MESH = next(
    c
    for c in PAWN.get_components_by_class(unreal.SkeletalMeshComponent)
    if c.get_anim_instance()
)
MESH.visibility_based_anim_tick_option = (
    unreal.VisibilityBasedAnimTickOption.ALWAYS_TICK_POSE_AND_REFRESH_BONES
)
ANIM = MESH.get_anim_instance()
MOVER = PAWN.get_component_by_class(unreal.MoverComponent)
RESET = unreal.GameplayStatics.get_all_actors_of_class(WORLD, unreal.FeatureLabAnimGenReset)[0]
assert RESET.get_editor_property("bReady")
library = unreal.get_default_object(
    unreal.load_class(None, "/Script/Engine.SubsystemBlueprintLibrary")
)
INPUT = library.call_method(
    "GetLocalPlayerSubSystemFromPlayerController",
    (PC, unreal.EnhancedInputLocalPlayerSubsystem.static_class()),
)
ACTIONS = {n: unreal.load_asset("/AnimGenExample/Input/IA_" + n) for n in ["Move", "Aim"]}
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert all(ACTIONS.values())
# 반복에 쓸 정수 순서를 만든다. 끝 값은 포함되지 않는다.
BONES = [str(MESH.get_bone_name(i)) for i in range(MESH.get_num_bones())]
STATS = unreal.FeatureLabRuntimeLibrary.inspect_mesh(MESH)
# 반복에 쓸 정수 순서를 만든다. 끝 값은 포함되지 않는다.
INDICES = list(range(0, STATS.vertices, max(1, STATS.vertices // 96)))
START_POSITION = list(PAWN.get_actor_location().to_tuple())
START_RESETS = RESET.get_editor_property("ResetCount")
PHASES = [
    ("idle", 1.0, (0, 0), False),
    ("slow", 1.8, (0, 0.25), False),
    ("fast", 1.8, (0, 1), False),
    ("strafe", 1.8, (1, 0), False),
    ("coast", 0.8, (0, 0), False),
    ("aim", 1.2, (0, 0), True),
    ("release", 0.8, (0, 0), False),
    ("reset", 0.8, (0, 0), False),
]
OUT = ROOT / "Evidence" / "case06-animgen-controller-validation.json"
# REPORT: 이번 작업의 입력·측정·성공 여부를 모을 기록용 사전이다. 게임의 실행 상태 자체와는 다르다. JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
REPORT = {
    "status": "running",
    "phase": "idle",
    "samples": [],
    "checks": {},
    "network_before": json.loads(unreal.FeatureLabRuntimeLibrary.inspect_lab_anim_gen(ANIM)),
    "vertex_probe_count": len(INDICES),
    "mesh_bones": len(BONES),
}
STATE = {"index": 0, "start": 0.0, "last": -1.0, "busy": False, "done": False}
# HANDLE: 나중에 콜백을 해제하기 위해 보관하는 등록 표식이다.
HANDLE = None
WALL_START = time.monotonic()


# 함수 clock: 이름은 clock이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: 별도 입력 없음
def clock():
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return unreal.GameplayStatics.get_time_seconds(WORLD)


# 함수 save: 이름은 save이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: 별도 입력 없음 문자열을 파일에 기록한다. 결과 JSON이나 보고서인지, 실제 코드·설정 파일인지 경로를 확인한다.
def save():
    OUT.write_text(json.dumps(REPORT, indent=2), encoding="utf-8")


# 함수 inject: 이름은 inject이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: name, x, y
def inject(name, x, y=0):
    INPUT.inject_input_vector_for_action(ACTIONS[name], unreal.Vector(x, y, 0), [], [])


# 함수 sample: 이름은 sample이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: 별도 입력 없음
def sample():
    velocity = PAWN.get_velocity()
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return {
        "phase": PHASES[STATE["index"]][0],
        "phase_time": clock() - STATE["start"],
        "time": clock(),
        "position": list(PAWN.get_actor_location().to_tuple()),
        "velocity": list(velocity.to_tuple()),
        "speed": math.hypot(velocity.x, velocity.y),
        "aiming": bool(PAWN.get_editor_property("Aiming")),
        "mode": str(MOVER.get_movement_mode_name()),
        "poses": [
            list(
                MESH.get_socket_transform(
                    b, unreal.RelativeTransformSpace.RTS_COMPONENT
                ).translation.to_tuple()
            )
            for b in BONES
        ],
        "skin": [
            [v.x, v.y, v.z]
            for v in unreal.FeatureLabRuntimeLibrary.sample_skinned_vertices(MESH, INDICES)
        ],
    }


# 함수 motion: 이름은 motion이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: samples 여러 목록의 같은 위치 항목을 묶어 순서대로 비교한다.
def motion(samples):
    return max(math.dist(a, b) for s in samples for a, b in zip(samples[0]["skin"], s["skin"]))


# 함수 finish: 이름은 finish이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: error 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
def finish(error=None):
    global HANDLE, WORLD, PAWN, PC, MESH, ANIM, MOVER, RESET, INPUT
    STATE["done"] = True
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: HANDLE is not None 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
    if HANDLE is not None:
        # 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
        unreal.unregister_slate_post_tick_callback(HANDLE)
        # HANDLE: 나중에 콜백을 해제하기 위해 보관하는 등록 표식이다.
        HANDLE = None
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: error
    if error:
        REPORT.update(status="failed", error=error)
    else:
        groups = {
            name: [
                s for s in REPORT["samples"] if s["phase"] == name and s["phase_time"] > 0.35
            ]
            for name, *_ in PHASES
        }
        speeds = {
            name: statistics.median(s["speed"] for s in values)
            for name, values in groups.items()
        }
        vx = statistics.mean(s["velocity"][0] for s in groups["fast"])
        vy = statistics.mean(s["velocity"][1] for s in groups["fast"])
        sx = statistics.mean(s["velocity"][0] for s in groups["strafe"])
        sy = statistics.mean(s["velocity"][1] for s in groups["strafe"])
        cosine = (vx * sx + vy * sy) / max(1e-9, math.hypot(vx, vy) * math.hypot(sx, sy))
        # JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
        network = json.loads(
            unreal.FeatureLabRuntimeLibrary.inspect_lab_anim_gen(MESH.get_anim_instance())
        )
        REPORT.update(
            median_speeds_cm_s=speeds,
            forward_strafe_velocity_cosine=cosine,
            fast_generated_skin_motion_cm=motion(groups["fast"]),
            slow_generated_skin_motion_cm=motion(groups["slow"]),
            network_after=network,
            reset_xy_error_cm=math.dist(
                START_POSITION[:2], groups["reset"][-1]["position"][:2]
            ),
        )
        before_nodes = REPORT["network_before"]["nodes"]
        REPORT["checks"] = {
            "trained_neural_controller_active": bool(before_nodes)
            and all(n["active_model_valid"] for n in before_nodes),
            "generated_pose_path_has_no_sequence_players": REPORT["network_before"][
                "sequence_player_nodes"
            ]
            == 0,
            "all_samples_finite": all(
                math.isfinite(v) for s in REPORT["samples"] for p in s["poses"] for v in p
            ),
            "slow_input_moves_character": speeds["slow"] > 20,
            "larger_input_increases_speed": speeds["fast"] > speeds["slow"] * 1.5,
            "strafe_changes_movement_direction": abs(cosine) < 0.5,
            "slow_neural_skin_moves": REPORT["slow_generated_skin_motion_cm"] > 5,
            "fast_neural_skin_moves": REPORT["fast_generated_skin_motion_cm"] > 10,
            "aim_control_reaches_character": all(s["aiming"] for s in groups["aim"]),
            "aim_release_reaches_character": not any(s["aiming"] for s in groups["release"]),
            "zero_input_stops_character": speeds["release"] < 5,
            "reset_queued_inside_mover": RESET.get_editor_property("bLastTeleportQueued"),
            "reset_count_incremented": RESET.get_editor_property("ResetCount")
            == START_RESETS + 1,
            "reset_returns_to_start_xy": REPORT["reset_xy_error_cm"] < 1.0,
            "reset_retains_valid_neural_controller": bool(network["nodes"])
            and all(n["active_model_valid"] for n in network["nodes"]),
            "root_stays_grounded": all(s["mode"] == "Walking" for s in REPORT["samples"]),
        }
        REPORT["status"] = "passed" if all(REPORT["checks"].values()) else "failed_checks"
    save()
    # WORLD에 기준값 None을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
    WORLD = PAWN = PC = MESH = ANIM = MOVER = RESET = INPUT = None


STATE["start"] = clock()
save()


# 함수 tick: 이름은 tick이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: delta
def tick(delta):
    if STATE["done"] or STATE["busy"]:
        # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
        return
    STATE["busy"] = True
    # 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다.
    try:
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: time.monotonic() - WALL_START > 100
        if time.monotonic() - WALL_START > 100:
            raise RuntimeError("AnimGen control test exceeded bounded wall time")
        name, duration, vector, aim = PHASES[STATE["index"]]
        inject("Move", *vector)
        inject("Aim", 1 if aim else 0)
        elapsed = clock() - STATE["start"]
        if elapsed - STATE["last"] >= 0.15:
            REPORT["samples"].append(sample())
            STATE["last"] = elapsed
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: elapsed >= duration
        if elapsed >= duration:
            STATE["index"] += 1
            if STATE["index"] == len(PHASES):
                finish()
                # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
                return
            STATE.update(start=clock(), last=-1.0)
            REPORT["phase"] = PHASES[STATE["index"]][0]
            if REPORT["phase"] == "reset":
                RESET.reset_player()
            save()
    except Exception:
        finish(traceback.format_exc())
    finally:
        STATE["busy"] = False


# HANDLE: 나중에 콜백을 해제하기 위해 보관하는 등록 표식이다. 에디터 갱신 뒤 호출할 함수를 등록한다. 작업이 끝나면 핸들로 해제해야 반복 호출이 남지 않는다.
HANDLE = unreal.register_slate_post_tick_callback(tick)
RESULT = {"status": "running", "phase": "idle", "report": str(OUT)}
```

<a id="source-lab-lab-test-uaf-runtime-py"></a>

### lab_test_uaf_runtime.py

```python
# 파일 역할: 완성 결과를 실제 값과 비교하는 검증 작업. 생성 코드와 검사 코드를 구분한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/UAF/Training/AGAE_PuppetMotion

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
# 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
WORLD = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert WORLD
ACTOR = unreal.GameplayStatics.get_all_actors_of_class(WORLD, unreal.FeatureLabUAFActor)[0]
# 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다.
MESHES = [
    ACTOR.get_editor_property(n) for n in ["UAFMesh", "OriginalMesh", "ReconstructedMesh"]
]
ENCODER = unreal.load_asset("/Game/FeatureLab/UAF/Training/AGAE_PuppetMotion")
BONES = list(map(str, ENCODER.get_bone_names()))
# 반복에 쓸 정수 순서를 만든다. 끝 값은 포함되지 않는다.
INDICES = list(range(0, unreal.FeatureLabRuntimeLibrary.inspect_mesh(MESHES[0]).vertices, 64))
OUT = ROOT / "Evidence" / "case06-uaf-runtime-validation.json"
# REPORT: 이번 작업의 입력·측정·성공 여부를 모을 기록용 사전이다. 게임의 실행 상태 자체와는 다르다.
REPORT = {
    "status": "running",
    "phase": "walk",
    "checks": {},
    "samples": [],
    "vertex_probe_count": len(INDICES),
    "bones": len(BONES),
}
STATE = {
    "phase": "walk",
    "start": 0.0,
    "last": -1.0,
    "done": False,
    "busy": False,
    "pause_baseline": None,
}
WALL_START = time.monotonic()
# HANDLE: 나중에 콜백을 해제하기 위해 보관하는 등록 표식이다.
HANDLE = None


# 함수 now: 이름은 now이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: 별도 입력 없음
def now():
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return unreal.GameplayStatics.get_time_seconds(WORLD)


# 함수 save: 이름은 save이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: 별도 입력 없음 문자열을 파일에 기록한다. 결과 JSON이나 보고서인지, 실제 코드·설정 파일인지 경로를 확인한다.
def save():
    OUT.write_text(json.dumps(REPORT, indent=2), encoding="utf-8")


# 함수 difference: 이름은 difference이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: a, b 여러 목록의 같은 위치 항목을 묶어 순서대로 비교한다.
def difference(a, b):
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다. 여러 목록의 같은 위치 항목을 묶어 순서대로 비교한다.
    return max(math.dist(x, y) for x, y in zip(a, b))


# 함수 capture: 이름은 capture이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: 별도 입력 없음 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 bUseRun이다.
def capture():
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 bUseRun이다.
    return {
        "time": now(),
        "phase": STATE["phase"],
        "phase_time": now() - STATE["start"],
        "run": ACTOR.get_editor_property("bUseRun"),
        "paused": ACTOR.get_editor_property("bPaused"),
        "input_applied": ACTOR.get_editor_property("bLastInputApplied"),
        "clip_positions": [m.get_position() for m in MESHES[1:]],
        "poses": [
            [
                list(
                    m.get_socket_transform(
                        b, unreal.RelativeTransformSpace.RTS_COMPONENT
                    ).translation.to_tuple()
                )
                for b in BONES
            ]
            for m in MESHES
        ],
        "skins": [
            [
                [v.x, v.y, v.z]
                for v in unreal.FeatureLabRuntimeLibrary.sample_skinned_vertices(m, INDICES)
            ]
            for m in MESHES
        ],
    }


# 함수 transition: 이름은 transition이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: phase
def transition(phase):
    STATE.update(phase=phase, start=now(), last=-1.0)
    REPORT["phase"] = phase
    save()


# 함수 finish: 이름은 finish이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: error 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
def finish(error=None):
    global HANDLE, WORLD, ACTOR, MESHES, ENCODER
    STATE["done"] = True
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: HANDLE is not None 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
    if HANDLE is not None:
        # 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
        unreal.unregister_slate_post_tick_callback(HANDLE)
        # HANDLE: 나중에 콜백을 해제하기 위해 보관하는 등록 표식이다.
        HANDLE = None
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: error
    if error:
        REPORT.update(status="failed", error=error)
    else:
        samples = REPORT["samples"]
        walk = [s for s in samples if s["phase"] == "walk" and s["phase_time"] > 0.4]
        run = [s for s in samples if s["phase"] == "run" and s["phase_time"] > 0.6]
        stable = walk + run
        source_errors = [difference(s["poses"][0], s["poses"][1]) for s in stable]
        # 여러 목록의 같은 위치 항목을 묶어 순서대로 비교한다.
        skin_errors = [
            math.dist(a, b) for s in stable for a, b in zip(s["skins"][1], s["skins"][2])
        ]
        REPORT["max_uaf_source_bone_difference_cm"] = max(source_errors)
        REPORT["mean_source_decoded_vertex_difference_cm"] = sum(skin_errors) / len(skin_errors)
        REPORT["max_source_decoded_vertex_difference_cm"] = max(skin_errors)
        REPORT["checks"].update(
            {
                "public_graph_input_applied": all(s["input_applied"] for s in stable),
                "walk_output_moves_all_three_meshes": all(
                    difference(walk[0]["skins"][i], walk[-1]["skins"][i]) > 3 for i in range(3)
                ),
                "run_output_moves_all_three_meshes": all(
                    difference(run[0]["skins"][i], run[-1]["skins"][i]) > 3 for i in range(3)
                ),
                "uaf_matches_source_after_blending_under_1cm": max(source_errors) < 1.0,
                "neural_skin_mean_error_under_5cm": REPORT[
                    "mean_source_decoded_vertex_difference_cm"
                ]
                < 5.0,
                "neural_skin_max_error_under_25cm": max(skin_errors) < 25.0,
                "run_selection_reaches_graph": all(s["run"] for s in run),
                "reset_clip_times_zero": all(
                    abs(v) < 1e-7 for row in REPORT["reset_clip_positions"] for v in row
                ),
                "reset_returns_to_walk": not REPORT["reset_sample"]["run"],
                "reset_graph_again_matches_source": difference(
                    REPORT["reset_sample"]["poses"][0], REPORT["reset_sample"]["poses"][1]
                )
                < 1.0,
            }
        )
        REPORT["status"] = "passed" if all(REPORT["checks"].values()) else "failed_checks"
    save()
    # WORLD에 기준값 None을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
    WORLD = ACTOR = ENCODER = None
    # MESHES에 기준값 None을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
    MESHES = None


ACTOR.select_walk()
ACTOR.restart_playback()
STATE["start"] = now()
REPORT["reset_clip_positions"] = [[m.get_position() for m in MESHES[1:]]]
save()


# 함수 tick: 이름은 tick이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: delta 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
def tick(delta):
    if STATE["done"] or STATE["busy"]:
        # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
        return
    STATE["busy"] = True
    # 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다. 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    try:
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: time.monotonic() - WALL_START > 90
        if time.monotonic() - WALL_START > 90:
            raise RuntimeError("UAF runtime test exceeded bounded wall time")
        elapsed = now() - STATE["start"]
        if elapsed - STATE["last"] >= 0.1:
            sample = capture()
            REPORT["samples"].append(sample)
            STATE["last"] = elapsed
        phase = STATE["phase"]
        if phase == "walk" and elapsed >= 10.0:
            ACTOR.select_run()
            transition("run")
        elif phase == "run" and elapsed >= 10.0:
            ACTOR.toggle_pause()
            transition("pause")
        elif phase == "pause":
            if elapsed >= 0.2 and STATE["pause_baseline"] is None:
                STATE["pause_baseline"] = capture()
            # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: elapsed >= 0.8
            if elapsed >= 0.8:
                paused = capture()
                baseline = STATE["pause_baseline"]
                # 반복에 쓸 정수 순서를 만든다. 끝 값은 포함되지 않는다.
                errors = [
                    difference(baseline["skins"][i], paused["skins"][i]) for i in range(3)
                ]
                REPORT["pause_vertex_differences_cm"] = errors
                REPORT["checks"]["pause_freezes_all_three_meshes"] = (
                    max(errors) < 0.001 and paused["paused"]
                )
                ACTOR.toggle_pause()
                transition("resume")
        elif phase == "resume" and elapsed >= 0.8:
            current = capture()
            baseline = STATE["pause_baseline"]
            REPORT["checks"]["resume_moves_all_three_meshes"] = all(
                difference(current["skins"][i], baseline["skins"][i]) > 3 for i in range(3)
            )
            ACTOR.select_walk()
            ACTOR.restart_playback()
            REPORT["reset_clip_positions"].append([m.get_position() for m in MESHES[1:]])
            transition("reset")
        elif phase == "reset" and elapsed >= 0.8:
            REPORT["reset_sample"] = capture()
            finish()
    except Exception:
        finish(traceback.format_exc())
    finally:
        STATE["busy"] = False


# HANDLE: 나중에 콜백을 해제하기 위해 보관하는 등록 표식이다. 에디터 갱신 뒤 호출할 함수를 등록한다. 작업이 끝나면 핸들로 해제해야 반복 호출이 남지 않는다.
HANDLE = unreal.register_slate_post_tick_callback(tick)
RESULT = {"status": "running", "phase": "walk", "report": str(OUT)}
```

<a id="source-lab-lab-validate-uaf-loops-py"></a>

### lab_validate_uaf_loops.py

```python
# 파일 역할: 완성 결과를 실제 값과 비교하는 검증 작업. 생성 코드와 검사 코드를 구분한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

import json
import math
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
path = root / "Evidence" / "case06-uaf-runtime-validation.json"
report = json.loads(path.read_text(encoding="utf-8"))
assert report["status"] == "passed"
for phase in ["walk", "run"]:
    samples = [s for s in report["samples"] if s["phase"] == phase and s["phase_time"] > 8.2]
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert len(samples) >= 8, phase
    # 반복에 쓸 정수 순서를 만든다. 끝 값은 포함되지 않는다.
    movement = [
        max(
            math.dist(a, b)
            for s in samples
            for a, b in zip(samples[0]["skins"][i], s["skins"][i])
        )
        for i in range(3)
    ]
    report.setdefault("late_loop_motion_cm", {})[phase] = movement
    report["checks"][phase + "_continues_moving_beyond_two_clip_periods"] = all(
        v > 3 for v in movement
    )
report["locomotion_phase_duration_seconds"] = 10
report["source_clip_duration_seconds"] = 4
report["status"] = "passed" if all(report["checks"].values()) else "failed_checks"
path.write_text(json.dumps(report, indent=2), encoding="utf-8")
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "status": report["status"],
    "checks": report["checks"],
    "late_loop_motion_cm": report["late_loop_motion_cm"],
}
```

<a id="source-source-mutablesample-featurelabgenerative-cpp"></a>

### FeatureLabGenerative.cpp

```cpp
// 파일 역할: 06번 UAF 실행, 인형 동작 재구성과 AnimGen 제어기 연결
// 클래스=작업 종류, 객체=실제 한 개, 포인터(* 또는 TObjectPtr)=다른 객체를 가리키는 참조.
// nullptr은 대상 없음, bool은 참/거짓, TArray는 순서 있는 목록, FString은 문자열이다.
// WITH_EDITOR 구간은 에디터 빌드에서만 사용하는 코드다. 원본과의 토큰 비교 결과는 code-validation.json에 기록한다.

#include "FeatureLabRuntime.h"
#include "Animation/AnimSequence.h"
#include "Animation/AnimInstance.h"
#include "Components/InputComponent.h"
#include "Components/SceneComponent.h"
#include "Components/SkeletalMeshComponent.h"
#include "Component/AnimNextComponent.h"
#include "UAF/UAFAssetData.h"
#include "UAF/UAFAssetFactory.h"
#include "Variables/AnimNextVariableReference.h"
#include "Engine/Engine.h"
#include "Engine/World.h"
#include "GameFramework/PlayerController.h"
#include "GameFramework/Pawn.h"
#include "Kismet/GameplayStatics.h"
#include "UObject/UnrealType.h"
#include "Misc/CoreDelegates.h"

// 빌드 조건에 따라 포함할 코드를 고른다. 게임 실행 중의 if 조건과 달리 빌드할 때 구분한다.
#if WITH_EDITOR
#include "AnimGenAutoEncoder.h"
#include "AnimNode_AnimGenController.h"
#include "AnimDatabase.h"
#include "AnimDatabasePose.h"
#include "AnimDatabaseFrameAttribute.h"
#include "LearningNeuralNetwork.h"
#include "Animation/AnimData/IAnimationDataController.h"
#include "Dom/JsonObject.h"
#include "Serialization/JsonSerializer.h"
#include "Serialization/JsonWriter.h"
#endif

// 【함수 역할】현재 객체와 실행 결과를 읽어 검증용 자료로 반환한다. 결과를 만드는 함수와 결과를 측정하는 함수를 구분해서 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
FString UFeatureLabRuntimeLibrary::InspectLabAnimGen(UAnimInstance *Instance)
{
// 빌드 조건에 따라 포함할 코드를 고른다. 게임 실행 중의 if 조건과 달리 빌드할 때 구분한다.
#if WITH_EDITOR
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!IsValid(Instance))
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return TEXT("{\"status\":\"invalid_instance\"}");
    TArray<TSharedPtr<FJsonValue>> Nodes;
    int32 SequenceNodes = 0;
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (TFieldIterator<FStructProperty> It(Instance->GetClass()); It; ++It)
    {
        FStructProperty *Property = *It;
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (Property->Struct->GetName().Contains(TEXT("SequencePlayer")))
            ++SequenceNodes;
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (Property->Struct != FAnimNode_AnimGenController::StaticStruct())
            continue;
        FAnimNode_AnimGenController *Node =
            Property->ContainerPtrToValuePtr<FAnimNode_AnimGenController>(Instance);
        UAnimGenController *Active = nullptr;
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (const FObjectPropertyBase *ActiveProperty =
                FindFProperty<FObjectPropertyBase>(Property->Struct, TEXT("ActiveController")))
            Active =
                Cast<UAnimGenController>(ActiveProperty->GetObjectPropertyValue_InContainer(Node));
        TSharedRef<FJsonObject> Entry = MakeShared<FJsonObject>();
        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
        Entry->SetStringField(TEXT("node"), Property->GetName());
        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
        Entry->SetStringField(TEXT("controller"), GetPathNameSafe(Node->Controller.Get()));
        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
        Entry->SetStringField(TEXT("active_controller"), GetPathNameSafe(Active));
        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
        Entry->SetBoolField(TEXT("active_model_valid"), Active && Active->IsValid());
        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
        Entry->SetNumberField(TEXT("lod"), Node->LODLevel);
        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
        Entry->SetNumberField(TEXT("seed"), Node->Seed);
        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
        Entry->SetNumberField(TEXT("evaluation_period_in_frames"), Node->EvaluationPeriodInFrames);
        Nodes.Add(MakeShared<FJsonValueObject>(Entry));
    }
    TSharedRef<FJsonObject> Report = MakeShared<FJsonObject>();
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    Report->SetStringField(TEXT("instance"), Instance->GetPathName());
    Report->SetArrayField(TEXT("nodes"), Nodes);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    Report->SetNumberField(TEXT("sequence_player_nodes"), SequenceNodes);
    FString Text;
    FJsonSerializer::Serialize(Report, TJsonWriterFactory<>::Create(&Text));
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return Text;
#else
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return TEXT("{\"status\":\"editor_only\"}");
#endif
}

// 【함수 역할】이름은 ReconstructLabAutoEncoder이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
FString UFeatureLabRuntimeLibrary::ReconstructLabAutoEncoder(UObject *EncoderObject,
                                                             UObject *DatabaseObject,
                                                             const TArray<UAnimSequence *> &Outputs)
{
// 빌드 조건에 따라 포함할 코드를 고른다. 게임 실행 중의 if 조건과 달리 빌드할 때 구분한다.
#if WITH_EDITOR
    UAnimGenAutoEncoder *Encoder = Cast<UAnimGenAutoEncoder>(EncoderObject);
    UAnimDatabase *Database = Cast<UAnimDatabase>(DatabaseObject);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Encoder || !Database || !Encoder->IsValid() ||
        !Encoder->GetPathName().StartsWith(TEXT("/Game/FeatureLab/UAF/")) ||
        !Database->GetPathName().StartsWith(TEXT("/Game/FeatureLab/UAF/")))
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return TEXT("{\"status\":\"failed\",\"error\":\"Invalid owned model or database\"}");
    const int32 SequenceNum = Database->GetSequenceNum();
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (Outputs.Num() != SequenceNum || Encoder->GetBoneNum() != Database->GetBoneNum() ||
        SequenceNum < 1)
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return TEXT("{\"status\":\"failed\",\"error\":\"Input/output shape mismatch\"}");
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (UAnimSequence *Target : Outputs)
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (!Target || !Target->GetPathName().StartsWith(TEXT("/Game/FeatureLab/UAF/Decoded/")) ||
            Target->GetSkeleton() != Database->GetSkeleton())
            // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
            return TEXT(
                "{\"status\":\"failed\",\"error\":\"Output must be a matching owned decoded animation\"}");
    TArray<int32> SequenceIndices, Starts, Lengths;
    TArray<float> Times;
    const FFrameRate Rate = Database->GetFrameRate();
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (int32 Sequence = 0; Sequence < SequenceNum; ++Sequence)
    {
        Starts.Add(Times.Num());
        const int32 Length = Database->GetSequenceFrameNum(Sequence);
        Lengths.Add(Length);
        // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
        for (int32 Frame = 0; Frame < Length; ++Frame)
        {
            SequenceIndices.Add(Sequence);
            Times.Add(float(Frame / Rate.AsDecimal()));
        }
    }
    const int32 Rows = Times.Num(), Bones = Encoder->GetBoneNum(),
                Features = Encoder->GetPoseVectorSize();
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (Rows < 2 || Rows > 4096)
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return TEXT("{\"status\":\"failed\",\"error\":\"Unexpected bounded dataset size\"}");
    FAnimDatabasePoseState Original = UAnimDatabasePoseStateLibrary::MakePoseState();
    FAnimDatabasePoseState Decoded = UAnimDatabasePoseStateLibrary::MakePoseState();
    Original.CurrPoseData->Resize(Rows, Bones, {}, {});
    Original.PoseGlobalBoneData->Resize(Rows, Bones);
    Decoded.CurrPoseData->Resize(Rows, Bones, {}, {});
    Decoded.PoseGlobalBoneData->Resize(Rows, Bones);
    TArray<int32> BoneIndices;
    BoneIndices.SetNumUninitialized(Bones);
    Database->FindBoneIndicesFromArrayViews(BoneIndices, Encoder->GetBoneNames());
    TArray<FAnimDatabaseFrameAttribute> Attributes;
    Database->WaitForCompressionOnAnimSequences(SequenceIndices);
    Database->SamplePoseSubsetData(Original.CurrPoseData->View(), SequenceIndices, Times,
                                   BoneIndices, Attributes);
    TLearningArray<2, float> Input, Encoded, Reconstruction, Repeated;
    Input.SetNumUninitialized({Rows, Features});
    Encoded.SetNumUninitialized({Rows, Encoder->GetEncodingSize()});
    Reconstruction.SetNumUninitialized({Rows, Features});
    Repeated.SetNumUninitialized({Rows, Features});
    Encoder->ToPoseVectors(Input, Original.CurrPoseData->ConstView());
    Encoder->ClampPoseVectors(Input);
    Encoder->NormalizePoseVectors(Input);
    auto EncodeInference = Encoder->EncoderNetwork->GetNetwork()->CreateInferenceObject(Rows);
    auto DecodeInference = Encoder->DecoderNetwork->GetNetwork()->CreateInferenceObject(Rows);
    EncodeInference->Evaluate(Encoded, Input);
    DecodeInference->Evaluate(Reconstruction, Encoded);
    DecodeInference->Evaluate(Repeated, Encoded);
    double ErrorSum = 0.0, RepeatMax = 0.0;
    TArray<TSharedPtr<FJsonValue>> FirstDecoded;
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (int32 Row = 0; Row < Rows; ++Row)
        // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
        for (int32 Feature = 0; Feature < Features; ++Feature)
        {
            const float V = Reconstruction[Row][Feature];
            // 【함수 역할】이름은 IsFinite이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
            // 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
            // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
            if (!FMath::IsFinite(V))
                // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
                return TEXT("{\"status\":\"failed\",\"error\":\"Nonfinite neural output\"}");
            ErrorSum += FMath::Abs(double(V - Input[Row][Feature]));
            RepeatMax = FMath::Max(RepeatMax, FMath::Abs(double(V - Repeated[Row][Feature])));
            // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
            if (Row == 31)
                FirstDecoded.Add(MakeShared<FJsonValueNumber>(V));
        }
    Encoder->DenormalizePoseVectors(Reconstruction);
    Encoder->ClampPoseVectors(Reconstruction);
    Encoder->FromPoseVectors(Decoded.CurrPoseData->View(), Reconstruction,
                             Original.CurrPoseData->RootData.RootLocations,
                             Original.CurrPoseData->RootData.RootRotations);
    UE::AnimDatabase::PoseData::ForwardKinematics(
        Original.PoseGlobalBoneData->View(), Original.CurrPoseData->LocalBoneData.ConstView(),
        Original.CurrPoseData->RootData.ConstView(), Encoder->GetBoneParents());
    UE::AnimDatabase::PoseData::ForwardKinematics(
        Decoded.PoseGlobalBoneData->View(), Decoded.CurrPoseData->LocalBoneData.ConstView(),
        Decoded.CurrPoseData->RootData.ConstView(), Encoder->GetBoneParents());
    double BoneErrorSum = 0.0, BoneErrorMax = 0.0;
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (int32 Row = 0; Row < Rows; ++Row)
        // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
        for (int32 Bone = 0; Bone < Bones; ++Bone)
        {
            const double Error =
                FVector::Distance(Original.PoseGlobalBoneData->BoneLocations[Row][Bone],
                                  Decoded.PoseGlobalBoneData->BoneLocations[Row][Bone]);
            BoneErrorSum += Error;
            BoneErrorMax = FMath::Max(BoneErrorMax, Error);
        }
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (int32 Sequence = 0; Sequence < SequenceNum; ++Sequence)
    {
        UAnimSequence *Target = Outputs[Sequence];
        IAnimationDataController &Controller = Target->GetController();
        Controller.OpenBracket(FText::FromString(TEXT("Bake actual AnimGen neural decoder output")),
                               false);
        Controller.SetFrameRate(Rate, false);
        Controller.SetNumberOfFrames(FFrameNumber(Lengths[Sequence] - 1), false);
        Controller.RemoveAllBoneTracks(false);
        // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
        for (int32 Bone = 0; Bone < Bones; ++Bone)
        {
            TArray<FVector3f> Locations, Scales;
            TArray<FQuat4f> Rotations;
            // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
            for (int32 Frame = 0; Frame < Lengths[Sequence]; ++Frame)
            {
                const int32 Row = Starts[Sequence] + Frame;
                Locations.Add(Bone == 0
                                  ? FVector3f(Decoded.PoseGlobalBoneData->BoneLocations[Row][Bone])
                                  : Decoded.CurrPoseData->LocalBoneData.BoneLocations[Row][Bone]);
                Rotations.Add(Bone == 0
                                  ? Decoded.PoseGlobalBoneData->BoneRotations[Row][Bone]
                                  : Decoded.CurrPoseData->LocalBoneData.BoneRotations[Row][Bone]);
                Scales.Add(Decoded.CurrPoseData->LocalBoneData.BoneScales[Row][Bone]);
            }
            Controller.AddBoneCurve(Encoder->GetBoneName(Bone), false);
            Controller.SetBoneTrackKeys(Encoder->GetBoneName(Bone), Locations, Rotations, Scales,
                                        false);
        }
        Controller.NotifyPopulated();
        Controller.CloseBracket(false);
        Target->MarkPackageDirty();
    }
    TSharedRef<FJsonObject> Report = MakeShared<FJsonObject>();
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    Report->SetStringField(TEXT("status"), TEXT("neural_reconstruction_exported"));
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    Report->SetNumberField(TEXT("frames"), Rows);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    Report->SetNumberField(TEXT("bones"), Bones);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    Report->SetNumberField(TEXT("normalized_pose_mae"), ErrorSum / (Rows * Features));
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    Report->SetNumberField(TEXT("repeat_max_difference"), RepeatMax);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    Report->SetNumberField(TEXT("mean_global_bone_error_cm"), BoneErrorSum / (Rows * Bones));
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    Report->SetNumberField(TEXT("max_global_bone_error_cm"), BoneErrorMax);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    Report->SetNumberField(TEXT("exported_sequences"), Outputs.Num());
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    Report->SetBoolField(TEXT("root_positions_and_orientations_supplied_from_source"), true);
    Report->SetArrayField(TEXT("normalized_output_sample_frame31"), FirstDecoded);
    FString Text;
    FJsonSerializer::Serialize(Report, TJsonWriterFactory<>::Create(&Text));
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return Text;
#else
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return TEXT("{\"status\":\"editor_only\"}");
#endif
}

// 【함수 역할】클래스의 기본 부품과 기본값을 준비하는 생성자다. 이 시점에는 게임 월드가 모두 준비됐다고 가정하지 않는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
AFeatureLabUAFActor::AFeatureLabUAFActor()
{
    PrimaryActorTick.bCanEverTick = true;
    PrimaryActorTick.TickGroup = TG_PostUpdateWork;
    // 이 액터의 기본 컴포넌트를 만든다. 부품 생성 뒤 장면 부착·재질·충돌 설정이 이어지는지 확인한다.
    SetRootComponent(CreateDefaultSubobject<USceneComponent>(TEXT("Root")));
    // 이 액터의 기본 컴포넌트를 만든다. 부품 생성 뒤 장면 부착·재질·충돌 설정이 이어지는지 확인한다.
    UAFMesh = CreateDefaultSubobject<USkeletalMeshComponent>(TEXT("UAFMesh"));
    // 이 액터의 기본 컴포넌트를 만든다. 부품 생성 뒤 장면 부착·재질·충돌 설정이 이어지는지 확인한다.
    OriginalMesh = CreateDefaultSubobject<USkeletalMeshComponent>(TEXT("OriginalMesh"));
    // 이 액터의 기본 컴포넌트를 만든다. 부품 생성 뒤 장면 부착·재질·충돌 설정이 이어지는지 확인한다.
    ReconstructedMesh = CreateDefaultSubobject<USkeletalMeshComponent>(TEXT("ReconstructedMesh"));
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (USkeletalMeshComponent *Mesh :
         {UAFMesh.Get(), OriginalMesh.Get(), ReconstructedMesh.Get()})
    {
        Mesh->SetupAttachment(RootComponent);
        Mesh->VisibilityBasedAnimTickOption =
            EVisibilityBasedAnimTickOption::AlwaysTickPoseAndRefreshBones;
        Mesh->SetCollisionEnabled(ECollisionEnabled::NoCollision);
    }
    OriginalMesh->SetRelativeLocation(FVector(-230.f, 0.f, 0.f));
    ReconstructedMesh->SetRelativeLocation(FVector(230.f, 0.f, 0.f));
    // 이 액터의 기본 컴포넌트를 만든다. 부품 생성 뒤 장면 부착·재질·충돌 설정이 이어지는지 확인한다.
    UAFComponent = CreateDefaultSubobject<UUAFComponent>(TEXT("UAFSystem"));
}

// 【함수 역할】이름은 OnConstruction이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabUAFActor::OnConstruction(const FTransform &Transform)
{
    // 부모 클래스의 기본 처리를 먼저/함께 실행한다. 자식 클래스의 추가 작업만으로 엔진 기본 동작을 대체하지 않는다.
    Super::OnConstruction(Transform);
    RestartPlayback();
}

// 【함수 역할】액터가 게임 월드에서 실행을 시작할 때 엔진이 호출한다. 생성자에서 부품을 만든 뒤 실제 월드·플레이어·입력과 연결하는 초기 준비 단계다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabUAFActor::BeginPlay()
{
    // 부모 클래스의 기본 처리를 먼저/함께 실행한다. 자식 클래스의 추가 작업만으로 엔진 기본 동작을 대체하지 않는다.
    Super::BeginPlay();
    RestartPlayback();
    // 【함수 역할】이후 작업에 사용할 객체나 값을 찾는다. 찾지 못했을 때 빈 참조가 반환될 수 있으므로 호출하는 쪽의 검사도 필요하다.
    // 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (APlayerController *PC = UGameplayStatics::GetPlayerController(this, 0))
    {
        EnableInput(PC);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::One, IE_Pressed, this, &AFeatureLabUAFActor::SelectWalk);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::Two, IE_Pressed, this, &AFeatureLabUAFActor::SelectRun);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::P, IE_Pressed, this, &AFeatureLabUAFActor::TogglePause);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::R, IE_Pressed, this, &AFeatureLabUAFActor::RequestRestart);
    }
}

// 【함수 역할】입력이나 현재 선택값을 실제 객체의 상태에 반영한다. 값 저장과 화면·물리·애니메이션 갱신 호출을 함께 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabUAFActor::SetComparisonClips()
{
    OriginalMesh->PlayAnimation(bUseRun ? RunAnimation : WalkAnimation, true);
    ReconstructedMesh->PlayAnimation(bUseRun ? DecodedRunAnimation : DecodedWalkAnimation, true);
    OriginalMesh->bPauseAnims = bPaused;
    ReconstructedMesh->bPauseAnims = bPaused;
}

// 【함수 역할】입력이나 현재 선택값을 실제 객체의 상태에 반영한다. 값 저장과 화면·물리·애니메이션 갱신 호출을 함께 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabUAFActor::ApplyGraphInput()
{
    UUAFComponent *Component = Cast<UUAFComponent>(UAFComponent);
    bLastInputApplied =
        Component && AnimationGraph &&
        Component->SetVariable(FAnimNextVariableReference::FromName(TEXT("UseRun"), AnimationGraph),
                               bUseRun);
}

// 【함수 역할】실험 상태를 코드에 적힌 기준값으로 되돌린다. 위치·속도·재생 시간·물리 상태 중 무엇을 복구하는지 아래 대입과 호출을 확인한다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabUAFActor::RestartPlayback()
{
    ++RestartCount;
    bPaused = false;
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (USkeletalMeshComponent *Mesh :
         {UAFMesh.Get(), OriginalMesh.Get(), ReconstructedMesh.Get()})
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (PuppetMesh)
            Mesh->SetSkeletalMeshAsset(PuppetMesh);
    UAFMesh->SetAnimationMode(EAnimationMode::AnimationCustomMode);
    UAFMesh->bEnableAnimation = false;
    SetComparisonClips();
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (UUAFComponent *Component = Cast<UUAFComponent>(UAFComponent))
    {
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (AnimationGraph &&
            AnimationGraph->GetPathName().StartsWith(TEXT("/Game/FeatureLab/UAF/")))
        {
            auto AssetData =
                UE::UAF::FAssetDataFactory::CreateUAFAssetDataFromObject<FUAFSystemFactoryAsset>(
                    AnimationGraph);
            // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
            if (AssetData.IsValid())
            {
                const bool WasRegistered = Component->IsRegistered();
                // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
                if (WasRegistered)
                    Component->UnregisterComponent();
                // UE 5.8 exposes output selection as a defaults-only property. Set our own
                // component's reference explicitly.
                // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
                if (const FStructProperty *OutputProperty = FindFProperty<FStructProperty>(
                        Component->GetClass(), TEXT("OutputComponent")))
                {
                    // 【함수 역할】이름은 StaticStruct이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
                    // 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
                    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
                    if (OutputProperty->Struct == FComponentReference::StaticStruct())
                    {
                        FComponentReference *Output =
                            OutputProperty->ContainerPtrToValuePtr<FComponentReference>(Component);
                        *Output = FComponentReference();
                        Output->ComponentProperty =
                            GET_MEMBER_NAME_CHECKED(AFeatureLabUAFActor, UAFMesh);
                    }
                }
                Component->SetAsset(MoveTemp(AssetData));
                // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
                if (WasRegistered)
                    Component->RegisterComponent();
                UAFComponent->Activate(true);
            }
        }
    }
    ApplyGraphInput();
}

// 【함수 역할】이름은 SelectWalk이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabUAFActor::SelectWalk()
{
    bUseRun = false;
    SetComparisonClips();
    ApplyGraphInput();
}
// 【함수 역할】이름은 SelectRun이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabUAFActor::SelectRun()
{
    bUseRun = true;
    SetComparisonClips();
    ApplyGraphInput();
}
// 【함수 역할】이름은 RequestRestart이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabUAFActor::RequestRestart()
{
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!RestartAtFrameEndHandle.IsValid())
        RestartAtFrameEndHandle =
            FCoreDelegates::OnEndFrame.AddUObject(this, &AFeatureLabUAFActor::RestartAtFrameEnd);
}

// 【함수 역할】실험 상태를 코드에 적힌 기준값으로 되돌린다. 위치·속도·재생 시간·물리 상태 중 무엇을 복구하는지 아래 대입과 호출을 확인한다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabUAFActor::RestartAtFrameEnd()
{
    FCoreDelegates::OnEndFrame.Remove(RestartAtFrameEndHandle);
    RestartAtFrameEndHandle.Reset();
    RestartPlayback();
}

// 【함수 역할】레벨 이동이나 실행 종료 때 남은 콜백·참조·임시 상태를 정리한다. 다음 실행에 이전 작업이 남지 않도록 하는 종료 단계다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabUAFActor::EndPlay(const EEndPlayReason::Type EndPlayReason)
{
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (RestartAtFrameEndHandle.IsValid())
    {
        FCoreDelegates::OnEndFrame.Remove(RestartAtFrameEndHandle);
        RestartAtFrameEndHandle.Reset();
    }
    // 부모 클래스의 기본 처리를 먼저/함께 실행한다. 자식 클래스의 추가 작업만으로 엔진 기본 동작을 대체하지 않는다.
    Super::EndPlay(EndPlayReason);
}

// 【함수 역할】현재 선택 상태를 다음 상태로 바꾸고 결과에 반영한다. 켬·끔 전환인지 여러 선택지 순환인지 조건문을 따라 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabUAFActor::TogglePause()
{
    bPaused = !bPaused;
    OriginalMesh->bPauseAnims = bPaused;
    ReconstructedMesh->bPauseAnims = bPaused;
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (bPaused)
        UAFComponent->Deactivate();
    else
        UAFComponent->Activate(false);
}

// 【함수 역할】매 갱신 시점에 상태를 확인하고 동작을 진행한다. DeltaSeconds는 이번 갱신까지 지난 시간이며, 함수가 1초에 정확히 60번 불린다고 가정하지 않는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabUAFActor::Tick(float DeltaSeconds)
{
    // 부모 클래스의 기본 처리를 먼저/함께 실행한다. 자식 클래스의 추가 작업만으로 엔진 기본 동작을 대체하지 않는다.
    Super::Tick(DeltaSeconds);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!bLastInputApplied && !bPaused)
        ApplyGraphInput();
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (GEngine && GetWorld() && GetWorld()->IsGameWorld())
        GEngine->AddOnScreenDebugMessage(
            600, 0.f, FColor::Cyan,
            FString::Printf(
                TEXT(
                    "6: %s | 1 Walk / 2 Run / P Pause / R Reset\nLeft: authored input   Center: UAF graph   Right: neural reconstruction"),
                bUseRun ? TEXT("Run") : TEXT("Walk")));
}

// 【함수 역할】클래스의 기본 부품과 기본값을 준비하는 생성자다. 이 시점에는 게임 월드가 모두 준비됐다고 가정하지 않는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
AFeatureLabAnimGenReset::AFeatureLabAnimGenReset()
{
    PrimaryActorTick.bCanEverTick = true;
    // 이 액터의 기본 컴포넌트를 만든다. 부품 생성 뒤 장면 부착·재질·충돌 설정이 이어지는지 확인한다.
    SetRootComponent(CreateDefaultSubobject<USceneComponent>(TEXT("Root")));
}

// 【함수 역할】액터가 게임 월드에서 실행을 시작할 때 엔진이 호출한다. 생성자에서 부품을 만든 뒤 실제 월드·플레이어·입력과 연결하는 초기 준비 단계다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabAnimGenReset::BeginPlay()
{
    // 부모 클래스의 기본 처리를 먼저/함께 실행한다. 자식 클래스의 추가 작업만으로 엔진 기본 동작을 대체하지 않는다.
    Super::BeginPlay();
    // 【함수 역할】이후 작업에 사용할 객체나 값을 찾는다. 찾지 못했을 때 빈 참조가 반환될 수 있으므로 호출하는 쪽의 검사도 필요하다.
    // 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (APlayerController *PC = UGameplayStatics::GetPlayerController(this, 0))
    {
        EnableInput(PC);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::R, IE_Pressed, this, &AFeatureLabAnimGenReset::ResetPlayer);
    }
}

// 【함수 역할】매 갱신 시점에 상태를 확인하고 동작을 진행한다. DeltaSeconds는 이번 갱신까지 지난 시간이며, 함수가 1초에 정확히 60번 불린다고 가정하지 않는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabAnimGenReset::Tick(float DeltaSeconds)
{
    // 부모 클래스의 기본 처리를 먼저/함께 실행한다. 자식 클래스의 추가 작업만으로 엔진 기본 동작을 대체하지 않는다.
    Super::Tick(DeltaSeconds);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!bReady)
        // 【함수 역할】이후 작업에 사용할 객체나 값을 찾는다. 찾지 못했을 때 빈 참조가 반환될 수 있으므로 호출하는 쪽의 검사도 필요하다.
        // 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (APawn *Pawn = UGameplayStatics::GetPlayerPawn(this, 0))
        {
            InitialTransform = Pawn->GetActorTransform();
            // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
            if (APlayerController *PC = UGameplayStatics::GetPlayerController(this, 0))
                InitialControlRotation = PC->GetControlRotation();
            bReady = true;
        }
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (GEngine && GetWorld() && GetWorld()->IsGameWorld())
        GEngine->AddOnScreenDebugMessage(
            601, 0.f, FColor::Cyan,
            TEXT("6B: AnimGen | WASD Move / Right Mouse Aim / Left Mouse Fire / R Reset"));
}

// 【함수 역할】실험 상태를 코드에 적힌 기준값으로 되돌린다. 위치·속도·재생 시간·물리 상태 중 무엇을 복구하는지 아래 대입과 호출을 확인한다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabAnimGenReset::ResetPlayer()
{
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!bReady)
        return;
    APawn *Pawn = UGameplayStatics::GetPlayerPawn(this, 0);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Pawn)
        return;
    bLastTeleportQueued = UFeatureLabRuntimeLibrary::TeleportMover(
        Pawn, InitialTransform.GetLocation(), InitialTransform.Rotator());
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!bLastTeleportQueued)
        return;
    TArray<USkeletalMeshComponent *> Meshes;
    Pawn->GetComponents(Meshes);
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (USkeletalMeshComponent *Mesh : Meshes)
        Mesh->SetAnimationMode(EAnimationMode::AnimationBlueprint, true);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (APlayerController *PC = UGameplayStatics::GetPlayerController(this, 0))
        PC->SetControlRotation(InitialControlRotation);
    ++ResetCount;
}
```


<a id="source-ag-puppetlocomotion-md"></a>

### AG_PuppetLocomotion.md


걷기·달리기 선택과 반복 재생. 이 표는 현재 프로젝트의 에셋을 읽어 작성했으며, 제작 스크립트가 만든 초기 상태와 이후 수정된 상태를 혼동하지 않도록 최종 에셋을 기준으로 했다.

에셋 경로: `/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion`. 노드 5개, 연결 4개.

핀은 노드 사이에 값을 주고받는 접점이다. `Input`은 들어오는 값, `Output`은 나가는 값, `IO`는 양방향 상태를 뜻한다. `Value.Translation.Z`처럼 점으로 이어진 이름은 구조체 안의 세부 값이다. Translation은 위치이고 Z는 위아래 축이다.

## 모든 연결

| 출발 핀 | 도착 핀 |
|---|---|
| `Walk.Result` | `WalkRunBlend.AnimNextBlendByBoolTraitSharedData.FalseChild` |
| `Run.Result` | `WalkRunBlend.AnimNextBlendByBoolTraitSharedData.TrueChild` |
| `WalkRunBlend.Result` | `RigUnit_AnimNextGraphRoot.Result` |
| `UseRunInput.Value` | `WalkRunBlend.AnimNextBlendByBoolTraitSharedData.bCondition` |

## RigUnit_AnimNextGraphRoot

| 핀 전체 경로 | 값의 종류 | 방향 | 연결이 없을 때의 기본값 |
|---|---|---|---|
| `RigUnit_AnimNextGraphRoot.Result` | `FAnimNextTraitHandle` | `<RigVMPinDirection.INPUT: 0>` | `(PackedTraitIndexAndNodeHandle=16777215)` |
| `RigUnit_AnimNextGraphRoot.ExecuteContext` | `FRigVMExecuteContext` | `<RigVMPinDirection.HIDDEN: 4>` | `()` |
| `RigUnit_AnimNextGraphRoot.EntryPoint` | `FName` | `<RigVMPinDirection.HIDDEN: 4>` | `Root` |

## Walk

| 핀 전체 경로 | 값의 종류 | 방향 | 연결이 없을 때의 기본값 |
|---|---|---|---|
| `Walk.Result` | `FAnimNextTraitHandle` | `<RigVMPinDirection.OUTPUT: 1>` | `(PackedTraitIndexAndNodeHandle=16777215)` |
| `Walk.AnimNextSequencePlayerTraitSharedData` | `FRigDecorator_AnimNextCppDecorator` | `<RigVMPinDirection.INPUT: 0>` | `(DecoratorSharedDataStruct=/Script/UAFAnimGraph.AnimNextSequencePlayerTraitSharedData,Name="AnimNextSequencePlayerTraitSharedData",AnimSequence=/Game/FeatureLab/UAF/Playback/AS_Source_Walk.AS_Source_Walk,PlayRate=1.000000,StartPosition=0.000000,LoopMode=ForceLoop)` |
| `Walk.AnimNextSequencePlayerTraitSharedData.DecoratorSharedDataStruct` | `TObjectPtr<UScriptStruct>` | `<RigVMPinDirection.HIDDEN: 4>` | `/Script/UAFAnimGraph.AnimNextSequencePlayerTraitSharedData` |
| `Walk.AnimNextSequencePlayerTraitSharedData.AnimSequence` | `TObjectPtr<UAnimSequence>` | `<RigVMPinDirection.INPUT: 0>` | `/Game/FeatureLab/UAF/Playback/AS_Source_Walk.AS_Source_Walk` |
| `Walk.AnimNextSequencePlayerTraitSharedData.PlayRate` | `float` | `<RigVMPinDirection.INPUT: 0>` | `1.000000` |
| `Walk.AnimNextSequencePlayerTraitSharedData.StartPosition` | `float` | `<RigVMPinDirection.INPUT: 0>` | `0.000000` |
| `Walk.AnimNextSequencePlayerTraitSharedData.LoopMode` | `EAnimAssetLoopMode` | `<RigVMPinDirection.INPUT: 0>` | `ForceLoop` |
| `Walk.AnimNextNotifyDispatcherTraitSharedData` | `FRigDecorator_AnimNextCppDecorator` | `<RigVMPinDirection.INPUT: 0>` | `(DecoratorSharedDataStruct=/Script/UAFAnimGraph.AnimNextNotifyDispatcherTraitSharedData,Name="AnimNextNotifyDispatcherTraitSharedData")` |
| `Walk.AnimNextNotifyDispatcherTraitSharedData.DecoratorSharedDataStruct` | `TObjectPtr<UScriptStruct>` | `<RigVMPinDirection.HIDDEN: 4>` | `/Script/UAFAnimGraph.AnimNextNotifyDispatcherTraitSharedData` |

## Run

| 핀 전체 경로 | 값의 종류 | 방향 | 연결이 없을 때의 기본값 |
|---|---|---|---|
| `Run.Result` | `FAnimNextTraitHandle` | `<RigVMPinDirection.OUTPUT: 1>` | `(PackedTraitIndexAndNodeHandle=16777215)` |
| `Run.AnimNextSequencePlayerTraitSharedData` | `FRigDecorator_AnimNextCppDecorator` | `<RigVMPinDirection.INPUT: 0>` | `(DecoratorSharedDataStruct=/Script/UAFAnimGraph.AnimNextSequencePlayerTraitSharedData,Name="AnimNextSequencePlayerTraitSharedData",AnimSequence=/Game/FeatureLab/UAF/Playback/AS_Source_Run.AS_Source_Run,PlayRate=1.000000,StartPosition=0.000000,LoopMode=ForceLoop)` |
| `Run.AnimNextSequencePlayerTraitSharedData.DecoratorSharedDataStruct` | `TObjectPtr<UScriptStruct>` | `<RigVMPinDirection.HIDDEN: 4>` | `/Script/UAFAnimGraph.AnimNextSequencePlayerTraitSharedData` |
| `Run.AnimNextSequencePlayerTraitSharedData.AnimSequence` | `TObjectPtr<UAnimSequence>` | `<RigVMPinDirection.INPUT: 0>` | `/Game/FeatureLab/UAF/Playback/AS_Source_Run.AS_Source_Run` |
| `Run.AnimNextSequencePlayerTraitSharedData.PlayRate` | `float` | `<RigVMPinDirection.INPUT: 0>` | `1.000000` |
| `Run.AnimNextSequencePlayerTraitSharedData.StartPosition` | `float` | `<RigVMPinDirection.INPUT: 0>` | `0.000000` |
| `Run.AnimNextSequencePlayerTraitSharedData.LoopMode` | `EAnimAssetLoopMode` | `<RigVMPinDirection.INPUT: 0>` | `ForceLoop` |
| `Run.AnimNextNotifyDispatcherTraitSharedData` | `FRigDecorator_AnimNextCppDecorator` | `<RigVMPinDirection.INPUT: 0>` | `(DecoratorSharedDataStruct=/Script/UAFAnimGraph.AnimNextNotifyDispatcherTraitSharedData,Name="AnimNextNotifyDispatcherTraitSharedData")` |
| `Run.AnimNextNotifyDispatcherTraitSharedData.DecoratorSharedDataStruct` | `TObjectPtr<UScriptStruct>` | `<RigVMPinDirection.HIDDEN: 4>` | `/Script/UAFAnimGraph.AnimNextNotifyDispatcherTraitSharedData` |

## WalkRunBlend

| 핀 전체 경로 | 값의 종류 | 방향 | 연결이 없을 때의 기본값 |
|---|---|---|---|
| `WalkRunBlend.Result` | `FAnimNextTraitHandle` | `<RigVMPinDirection.OUTPUT: 1>` | `(PackedTraitIndexAndNodeHandle=16777215)` |
| `WalkRunBlend.AnimNextBlendByBoolTraitSharedData` | `FRigDecorator_AnimNextCppDecorator` | `<RigVMPinDirection.INPUT: 0>` | `(DecoratorSharedDataStruct=/Script/UAFAnimGraph.AnimNextBlendByBoolTraitSharedData,Name="AnimNextBlendByBoolTraitSharedData",TrueChild=(PackedTraitIndexAndNodeHandle=16777215),FalseChild=(PackedTraitIndexAndNodeHandle=16777215),bCondition=False,bAlwaysUpdateTrueChild=False)` |
| `WalkRunBlend.AnimNextBlendByBoolTraitSharedData.DecoratorSharedDataStruct` | `TObjectPtr<UScriptStruct>` | `<RigVMPinDirection.HIDDEN: 4>` | `/Script/UAFAnimGraph.AnimNextBlendByBoolTraitSharedData` |
| `WalkRunBlend.AnimNextBlendByBoolTraitSharedData.TrueChild` | `FAnimNextTraitHandle` | `<RigVMPinDirection.INPUT: 0>` | `(PackedTraitIndexAndNodeHandle=16777215)` |
| `WalkRunBlend.AnimNextBlendByBoolTraitSharedData.FalseChild` | `FAnimNextTraitHandle` | `<RigVMPinDirection.INPUT: 0>` | `(PackedTraitIndexAndNodeHandle=16777215)` |
| `WalkRunBlend.AnimNextBlendByBoolTraitSharedData.bCondition` | `bool` | `<RigVMPinDirection.INPUT: 0>` | `False` |
| `WalkRunBlend.AnimNextBlendByBoolTraitSharedData.bAlwaysUpdateTrueChild` | `bool` | `<RigVMPinDirection.INPUT: 0>` | `False` |
| `WalkRunBlend.AnimNextBlendSmootherTraitSharedData` | `FRigDecorator_AnimNextCppDecorator` | `<RigVMPinDirection.INPUT: 0>` | `(DecoratorSharedDataStruct=/Script/UAFAnimGraph.AnimNextBlendSmootherTraitSharedData,Name="AnimNextBlendSmootherTraitSharedData",BlendType=HermiteCubic)` |
| `WalkRunBlend.AnimNextBlendSmootherTraitSharedData.DecoratorSharedDataStruct` | `TObjectPtr<UScriptStruct>` | `<RigVMPinDirection.HIDDEN: 4>` | `/Script/UAFAnimGraph.AnimNextBlendSmootherTraitSharedData` |
| `WalkRunBlend.AnimNextBlendSmootherTraitSharedData.BlendTimes` | `TArray<float>` | `<RigVMPinDirection.INPUT: 0>` | `()` |
| `WalkRunBlend.AnimNextBlendSmootherTraitSharedData.BlendType` | `EAlphaBlendOption` | `<RigVMPinDirection.INPUT: 0>` | `HermiteCubic` |
| `WalkRunBlend.AnimNextBlendSmootherTraitSharedData.CustomBlendCurve` | `TObjectPtr<UCurveFloat>` | `<RigVMPinDirection.INPUT: 0>` | 비어 있음 |

## UseRunInput

| 핀 전체 경로 | 값의 종류 | 방향 | 연결이 없을 때의 기본값 |
|---|---|---|---|
| `UseRunInput.Variable` | `FName` | `<RigVMPinDirection.HIDDEN: 4>` | `UseRun` |
| `UseRunInput.Value` | `bool` | `<RigVMPinDirection.OUTPUT: 1>` | `False` |

[전체 클립보드 텍스트](#source-ag-puppetlocomotion-unreal-txt), `구조 JSON`. 클립보드 텍스트에는 형식 유지를 위해 해설을 끼우지 않았다.



<a id="source-ag-puppetlocomotion-unreal-txt"></a>

### AG_PuppetLocomotion.unreal.txt

```text
Begin Object Class=/Script/RigVMDeveloper.RigVMUnitNode Name="RigUnit_AnimNextGraphRoot" ExportPath="/Script/RigVMDeveloper.RigVMUnitNode'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.RigUnit_AnimNextGraphRoot'"

   Begin Object Class=/Script/RigVMDeveloper.RigVMPin Name="Result" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.RigUnit_AnimNextGraphRoot.Result'"

   End Object

   Begin Object Class=/Script/RigVMDeveloper.RigVMPin Name="ExecuteContext" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.RigUnit_AnimNextGraphRoot.ExecuteContext'"

   End Object

   Begin Object Class=/Script/RigVMDeveloper.RigVMPin Name="EntryPoint" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.RigUnit_AnimNextGraphRoot.EntryPoint'"

   End Object

   Begin Object Name="Result" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.RigUnit_AnimNextGraphRoot.Result'"

      Direction=Input

      CPPType="FAnimNextTraitHandle"

      CPPTypeObject="/Script/CoreUObject.ScriptStruct'/Script/UAFAnimGraph.AnimNextTraitHandle'"

      CPPTypeObjectPath="/Script/UAFAnimGraph.AnimNextTraitHandle"

      DefaultValue="(PackedTraitIndexAndNodeHandle=16777215)"

   End Object

   Begin Object Name="ExecuteContext" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.RigUnit_AnimNextGraphRoot.ExecuteContext'"

      Direction=Hidden

      bIsDynamicArray=True

      CPPType="FRigVMExecuteContext"

      CPPTypeObject="/Script/CoreUObject.ScriptStruct'/Script/RigVM.RigVMExecuteContext'"

      CPPTypeObjectPath="/Script/RigVM.RigVMExecuteContext"

      DefaultValue="()"

   End Object

   Begin Object Name="EntryPoint" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.RigUnit_AnimNextGraphRoot.EntryPoint'"

      Direction=Hidden

      bIsDynamicArray=True

      CPPType="FName"

      DefaultValue="Root"

   End Object

   ResolvedFunctionName="FRigUnit_AnimNextGraphRoot::DummyExecute"

   NodeTitle="Animation Output"

   Position=(X=-400.000000,Y=0.000000)

   NodeColor=(R=1.000000,G=0.000000,B=0.000000,A=1.000000)

   Pins(0)="/Script/RigVMDeveloper.RigVMPin'Result'"

   Pins(1)="/Script/RigVMDeveloper.RigVMPin'ExecuteContext'"

   Pins(2)="/Script/RigVMDeveloper.RigVMPin'EntryPoint'"

End Object

Begin Object Class=/Script/RigVMDeveloper.RigVMUnitNode Name="Walk" ExportPath="/Script/RigVMDeveloper.RigVMUnitNode'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.Walk'"

   Begin Object Class=/Script/RigVMDeveloper.RigVMPin Name="Result" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.Walk.Result'"

   End Object

   Begin Object Class=/Script/RigVMDeveloper.RigVMPin Name="AnimNextSequencePlayerTraitSharedData" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.Walk.AnimNextSequencePlayerTraitSharedData'"

      Begin Object Class=/Script/RigVMDeveloper.RigVMPin Name="StartPosition" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.Walk.AnimNextSequencePlayerTraitSharedData.StartPosition'"

      End Object

      Begin Object Class=/Script/RigVMDeveloper.RigVMPin Name="PlayRate" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.Walk.AnimNextSequencePlayerTraitSharedData.PlayRate'"

      End Object

      Begin Object Class=/Script/RigVMDeveloper.RigVMPin Name="LoopMode" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.Walk.AnimNextSequencePlayerTraitSharedData.LoopMode'"

      End Object

      Begin Object Class=/Script/RigVMDeveloper.RigVMPin Name="DecoratorSharedDataStruct" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.Walk.AnimNextSequencePlayerTraitSharedData.DecoratorSharedDataStruct'"

      End Object

      Begin Object Class=/Script/RigVMDeveloper.RigVMPin Name="AnimSequence" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.Walk.AnimNextSequencePlayerTraitSharedData.AnimSequence'"

      End Object

   End Object

   Begin Object Class=/Script/RigVMDeveloper.RigVMPin Name="AnimNextNotifyDispatcherTraitSharedData" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.Walk.AnimNextNotifyDispatcherTraitSharedData'"

      Begin Object Class=/Script/RigVMDeveloper.RigVMPin Name="DecoratorSharedDataStruct" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.Walk.AnimNextNotifyDispatcherTraitSharedData.DecoratorSharedDataStruct'"

      End Object

   End Object

   Begin Object Name="Result" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.Walk.Result'"

      Direction=Output

      CPPType="FAnimNextTraitHandle"

      CPPTypeObject="/Script/CoreUObject.ScriptStruct'/Script/UAFAnimGraph.AnimNextTraitHandle'"

      CPPTypeObjectPath="/Script/UAFAnimGraph.AnimNextTraitHandle"

      DefaultValue="(PackedTraitIndexAndNodeHandle=16777215)"

   End Object

   Begin Object Name="AnimNextSequencePlayerTraitSharedData" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.Walk.AnimNextSequencePlayerTraitSharedData'"

      Begin Object Name="StartPosition" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.Walk.AnimNextSequencePlayerTraitSharedData.StartPosition'"

         Direction=Input

         bIsDynamicArray=True

         bIsLazy=True

         CPPType="float"

         DefaultValue="0.000000"

      End Object

      Begin Object Name="PlayRate" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.Walk.AnimNextSequencePlayerTraitSharedData.PlayRate'"

         Direction=Input

         bIsDynamicArray=True

         bIsLazy=True

         CPPType="float"

         DefaultValue="1.000000"

      End Object

      Begin Object Name="LoopMode" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.Walk.AnimNextSequencePlayerTraitSharedData.LoopMode'"

         Direction=Input

         bIsDynamicArray=True

         bIsLazy=True

         CPPType="EAnimAssetLoopMode"

         CPPTypeObject="/Script/CoreUObject.Enum'/Script/UAFAnimGraph.EAnimAssetLoopMode'"

         CPPTypeObjectPath="/Script/UAFAnimGraph.EAnimAssetLoopMode"

         DefaultValue="ForceLoop"

      End Object

      Begin Object Name="DecoratorSharedDataStruct" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.Walk.AnimNextSequencePlayerTraitSharedData.DecoratorSharedDataStruct'"

         Direction=Hidden

         bIsDynamicArray=True

         CPPType="TObjectPtr<UScriptStruct>"

         CPPTypeObject="/Script/CoreUObject.Class'/Script/CoreUObject.ScriptStruct'"

         CPPTypeObjectPath="/Script/CoreUObject.ScriptStruct"

         DefaultValueObject="/Script/CoreUObject.ScriptStruct'/Script/UAFAnimGraph.AnimNextSequencePlayerTraitSharedData'"

      End Object

      Begin Object Name="AnimSequence" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.Walk.AnimNextSequencePlayerTraitSharedData.AnimSequence'"

         Direction=Input

         bIsDynamicArray=True

         bIsLazy=True

         CPPType="TObjectPtr<UAnimSequence>"

         CPPTypeObject="/Script/CoreUObject.Class'/Script/Engine.AnimSequence'"

         CPPTypeObjectPath="/Script/Engine.AnimSequence"

         DefaultValueObject="/Script/Engine.AnimSequence'/Game/FeatureLab/UAF/Playback/AS_Source_Walk.AS_Source_Walk'"

         UserDefinedCategory="Default"

         IndexInCategory=0

      End Object

      Direction=Input

      CPPType="FRigDecorator_AnimNextCppDecorator"

      CPPTypeObject="/Script/CoreUObject.ScriptStruct'/Script/UAFAnimGraph.RigDecorator_AnimNextCppDecorator'"

      CPPTypeObjectPath="/Script/UAFAnimGraph.RigDecorator_AnimNextCppDecorator"

      DefaultValueObject="/Script/CoreUObject.ScriptStruct'/Script/UAFAnimGraph.RigDecorator_AnimNextCppDecorator'"

      SubPins(0)="/Script/RigVMDeveloper.RigVMPin'DecoratorSharedDataStruct'"

      SubPins(1)="/Script/RigVMDeveloper.RigVMPin'AnimSequence'"

      SubPins(2)="/Script/RigVMDeveloper.RigVMPin'PlayRate'"

      SubPins(3)="/Script/RigVMDeveloper.RigVMPin'StartPosition'"

      SubPins(4)="/Script/RigVMDeveloper.RigVMPin'LoopMode'"

   End Object

   Begin Object Name="AnimNextNotifyDispatcherTraitSharedData" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.Walk.AnimNextNotifyDispatcherTraitSharedData'"

      Begin Object Name="DecoratorSharedDataStruct" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.Walk.AnimNextNotifyDispatcherTraitSharedData.DecoratorSharedDataStruct'"

         Direction=Hidden

         bIsDynamicArray=True

         CPPType="TObjectPtr<UScriptStruct>"

         CPPTypeObject="/Script/CoreUObject.Class'/Script/CoreUObject.ScriptStruct'"

         CPPTypeObjectPath="/Script/CoreUObject.ScriptStruct"

         DefaultValueObject="/Script/CoreUObject.ScriptStruct'/Script/UAFAnimGraph.AnimNextNotifyDispatcherTraitSharedData'"

      End Object

      Direction=Input

      CPPType="FRigDecorator_AnimNextCppDecorator"

      CPPTypeObject="/Script/CoreUObject.ScriptStruct'/Script/UAFAnimGraph.RigDecorator_AnimNextCppDecorator'"

      CPPTypeObjectPath="/Script/UAFAnimGraph.RigDecorator_AnimNextCppDecorator"

      DefaultValueObject="/Script/CoreUObject.ScriptStruct'/Script/UAFAnimGraph.RigDecorator_AnimNextCppDecorator'"

      SubPins(0)="/Script/RigVMDeveloper.RigVMPin'DecoratorSharedDataStruct'"

   End Object

   ResolvedFunctionName="FRigUnit_AnimNextTraitStack::Execute"

   NodeTitle="Play AS_Source_Walk"

   Position=(X=-600.000000,Y=-120.000000)

   NodeColor=(R=0.000000,G=1.000000,B=1.000000,A=1.000000)

   TraitRootPinNames(0)="AnimNextSequencePlayerTraitSharedData"

   TraitRootPinNames(1)="AnimNextNotifyDispatcherTraitSharedData"

   TraitDefaultValues=(("AnimNextSequencePlayerTraitSharedData", (PropertyBag=(Value=/Engine/Transient.PropertyBag_ac2ec18a91ba8d06(DefaultValue=(DecoratorSharedDataStruct="/Script/CoreUObject.ScriptStruct'/Script/UAFAnimGraph.AnimNextSequencePlayerTraitSharedData'",Name="AnimNextSequencePlayerTraitSharedData"))))),("AnimNextNotifyDispatcherTraitSharedData", (PropertyBag=(Value=/Engine/Transient.PropertyBag_ac2ec18a91ba8d06(DefaultValue=(DecoratorSharedDataStruct="/Script/CoreUObject.ScriptStruct'/Script/UAFAnimGraph.AnimNextNotifyDispatcherTraitSharedData'",Name="AnimNextNotifyDispatcherTraitSharedData"))))))

   Pins(0)="/Script/RigVMDeveloper.RigVMPin'Result'"

   Pins(1)="/Script/RigVMDeveloper.RigVMPin'AnimNextSequencePlayerTraitSharedData'"

   Pins(2)="/Script/RigVMDeveloper.RigVMPin'AnimNextNotifyDispatcherTraitSharedData'"

   PinCategories(0)="Default"

End Object

Begin Object Class=/Script/RigVMDeveloper.RigVMUnitNode Name="Run" ExportPath="/Script/RigVMDeveloper.RigVMUnitNode'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.Run'"

   Begin Object Class=/Script/RigVMDeveloper.RigVMPin Name="Result" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.Run.Result'"

   End Object

   Begin Object Class=/Script/RigVMDeveloper.RigVMPin Name="AnimNextSequencePlayerTraitSharedData" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.Run.AnimNextSequencePlayerTraitSharedData'"

      Begin Object Class=/Script/RigVMDeveloper.RigVMPin Name="StartPosition" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.Run.AnimNextSequencePlayerTraitSharedData.StartPosition'"

      End Object

      Begin Object Class=/Script/RigVMDeveloper.RigVMPin Name="PlayRate" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.Run.AnimNextSequencePlayerTraitSharedData.PlayRate'"

      End Object

      Begin Object Class=/Script/RigVMDeveloper.RigVMPin Name="LoopMode" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.Run.AnimNextSequencePlayerTraitSharedData.LoopMode'"

      End Object

      Begin Object Class=/Script/RigVMDeveloper.RigVMPin Name="DecoratorSharedDataStruct" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.Run.AnimNextSequencePlayerTraitSharedData.DecoratorSharedDataStruct'"

      End Object

      Begin Object Class=/Script/RigVMDeveloper.RigVMPin Name="AnimSequence" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.Run.AnimNextSequencePlayerTraitSharedData.AnimSequence'"

      End Object

   End Object

   Begin Object Class=/Script/RigVMDeveloper.RigVMPin Name="AnimNextNotifyDispatcherTraitSharedData" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.Run.AnimNextNotifyDispatcherTraitSharedData'"

      Begin Object Class=/Script/RigVMDeveloper.RigVMPin Name="DecoratorSharedDataStruct" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.Run.AnimNextNotifyDispatcherTraitSharedData.DecoratorSharedDataStruct'"

      End Object

   End Object

   Begin Object Name="Result" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.Run.Result'"

      Direction=Output

      CPPType="FAnimNextTraitHandle"

      CPPTypeObject="/Script/CoreUObject.ScriptStruct'/Script/UAFAnimGraph.AnimNextTraitHandle'"

      CPPTypeObjectPath="/Script/UAFAnimGraph.AnimNextTraitHandle"

      DefaultValue="(PackedTraitIndexAndNodeHandle=16777215)"

   End Object

   Begin Object Name="AnimNextSequencePlayerTraitSharedData" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.Run.AnimNextSequencePlayerTraitSharedData'"

      Begin Object Name="StartPosition" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.Run.AnimNextSequencePlayerTraitSharedData.StartPosition'"

         Direction=Input

         bIsDynamicArray=True

         bIsLazy=True

         CPPType="float"

         DefaultValue="0.000000"

      End Object

      Begin Object Name="PlayRate" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.Run.AnimNextSequencePlayerTraitSharedData.PlayRate'"

         Direction=Input

         bIsDynamicArray=True

         bIsLazy=True

         CPPType="float"

         DefaultValue="1.000000"

      End Object

      Begin Object Name="LoopMode" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.Run.AnimNextSequencePlayerTraitSharedData.LoopMode'"

         Direction=Input

         bIsDynamicArray=True

         bIsLazy=True

         CPPType="EAnimAssetLoopMode"

         CPPTypeObject="/Script/CoreUObject.Enum'/Script/UAFAnimGraph.EAnimAssetLoopMode'"

         CPPTypeObjectPath="/Script/UAFAnimGraph.EAnimAssetLoopMode"

         DefaultValue="ForceLoop"

      End Object

      Begin Object Name="DecoratorSharedDataStruct" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.Run.AnimNextSequencePlayerTraitSharedData.DecoratorSharedDataStruct'"

         Direction=Hidden

         bIsDynamicArray=True

         CPPType="TObjectPtr<UScriptStruct>"

         CPPTypeObject="/Script/CoreUObject.Class'/Script/CoreUObject.ScriptStruct'"

         CPPTypeObjectPath="/Script/CoreUObject.ScriptStruct"

         DefaultValueObject="/Script/CoreUObject.ScriptStruct'/Script/UAFAnimGraph.AnimNextSequencePlayerTraitSharedData'"

      End Object

      Begin Object Name="AnimSequence" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.Run.AnimNextSequencePlayerTraitSharedData.AnimSequence'"

         Direction=Input

         bIsDynamicArray=True

         bIsLazy=True

         CPPType="TObjectPtr<UAnimSequence>"

         CPPTypeObject="/Script/CoreUObject.Class'/Script/Engine.AnimSequence'"

         CPPTypeObjectPath="/Script/Engine.AnimSequence"

         DefaultValueObject="/Script/Engine.AnimSequence'/Game/FeatureLab/UAF/Playback/AS_Source_Run.AS_Source_Run'"

         UserDefinedCategory="Default"

         IndexInCategory=0

      End Object

      Direction=Input

      CPPType="FRigDecorator_AnimNextCppDecorator"

      CPPTypeObject="/Script/CoreUObject.ScriptStruct'/Script/UAFAnimGraph.RigDecorator_AnimNextCppDecorator'"

      CPPTypeObjectPath="/Script/UAFAnimGraph.RigDecorator_AnimNextCppDecorator"

      DefaultValueObject="/Script/CoreUObject.ScriptStruct'/Script/UAFAnimGraph.RigDecorator_AnimNextCppDecorator'"

      SubPins(0)="/Script/RigVMDeveloper.RigVMPin'DecoratorSharedDataStruct'"

      SubPins(1)="/Script/RigVMDeveloper.RigVMPin'AnimSequence'"

      SubPins(2)="/Script/RigVMDeveloper.RigVMPin'PlayRate'"

      SubPins(3)="/Script/RigVMDeveloper.RigVMPin'StartPosition'"

      SubPins(4)="/Script/RigVMDeveloper.RigVMPin'LoopMode'"

   End Object

   Begin Object Name="AnimNextNotifyDispatcherTraitSharedData" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.Run.AnimNextNotifyDispatcherTraitSharedData'"

      Begin Object Name="DecoratorSharedDataStruct" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.Run.AnimNextNotifyDispatcherTraitSharedData.DecoratorSharedDataStruct'"

         Direction=Hidden

         bIsDynamicArray=True

         CPPType="TObjectPtr<UScriptStruct>"

         CPPTypeObject="/Script/CoreUObject.Class'/Script/CoreUObject.ScriptStruct'"

         CPPTypeObjectPath="/Script/CoreUObject.ScriptStruct"

         DefaultValueObject="/Script/CoreUObject.ScriptStruct'/Script/UAFAnimGraph.AnimNextNotifyDispatcherTraitSharedData'"

      End Object

      Direction=Input

      CPPType="FRigDecorator_AnimNextCppDecorator"

      CPPTypeObject="/Script/CoreUObject.ScriptStruct'/Script/UAFAnimGraph.RigDecorator_AnimNextCppDecorator'"

      CPPTypeObjectPath="/Script/UAFAnimGraph.RigDecorator_AnimNextCppDecorator"

      DefaultValueObject="/Script/CoreUObject.ScriptStruct'/Script/UAFAnimGraph.RigDecorator_AnimNextCppDecorator'"

      SubPins(0)="/Script/RigVMDeveloper.RigVMPin'DecoratorSharedDataStruct'"

   End Object

   ResolvedFunctionName="FRigUnit_AnimNextTraitStack::Execute"

   NodeTitle="Play AS_Source_Run"

   Position=(X=-600.000000,Y=160.000000)

   NodeColor=(R=0.000000,G=1.000000,B=1.000000,A=1.000000)

   TraitRootPinNames(0)="AnimNextSequencePlayerTraitSharedData"

   TraitRootPinNames(1)="AnimNextNotifyDispatcherTraitSharedData"

   TraitDefaultValues=(("AnimNextSequencePlayerTraitSharedData", (PropertyBag=(Value=/Engine/Transient.PropertyBag_ac2ec18a91ba8d06(DefaultValue=(DecoratorSharedDataStruct="/Script/CoreUObject.ScriptStruct'/Script/UAFAnimGraph.AnimNextSequencePlayerTraitSharedData'",Name="AnimNextSequencePlayerTraitSharedData"))))),("AnimNextNotifyDispatcherTraitSharedData", (PropertyBag=(Value=/Engine/Transient.PropertyBag_ac2ec18a91ba8d06(DefaultValue=(DecoratorSharedDataStruct="/Script/CoreUObject.ScriptStruct'/Script/UAFAnimGraph.AnimNextNotifyDispatcherTraitSharedData'",Name="AnimNextNotifyDispatcherTraitSharedData"))))))

   Pins(0)="/Script/RigVMDeveloper.RigVMPin'Result'"

   Pins(1)="/Script/RigVMDeveloper.RigVMPin'AnimNextSequencePlayerTraitSharedData'"

   Pins(2)="/Script/RigVMDeveloper.RigVMPin'AnimNextNotifyDispatcherTraitSharedData'"

   PinCategories(0)="Default"

End Object

Begin Object Class=/Script/RigVMDeveloper.RigVMUnitNode Name="WalkRunBlend" ExportPath="/Script/RigVMDeveloper.RigVMUnitNode'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.WalkRunBlend'"

   Begin Object Class=/Script/RigVMDeveloper.RigVMPin Name="Result" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.WalkRunBlend.Result'"

   End Object

   Begin Object Class=/Script/RigVMDeveloper.RigVMPin Name="AnimNextBlendSmootherTraitSharedData" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.WalkRunBlend.AnimNextBlendSmootherTraitSharedData'"

      Begin Object Class=/Script/RigVMDeveloper.RigVMPin Name="DecoratorSharedDataStruct" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.WalkRunBlend.AnimNextBlendSmootherTraitSharedData.DecoratorSharedDataStruct'"

      End Object

      Begin Object Class=/Script/RigVMDeveloper.RigVMPin Name="CustomBlendCurve" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.WalkRunBlend.AnimNextBlendSmootherTraitSharedData.CustomBlendCurve'"

      End Object

      Begin Object Class=/Script/RigVMDeveloper.RigVMPin Name="BlendType" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.WalkRunBlend.AnimNextBlendSmootherTraitSharedData.BlendType'"

      End Object

      Begin Object Class=/Script/RigVMDeveloper.RigVMPin Name="BlendTimes" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.WalkRunBlend.AnimNextBlendSmootherTraitSharedData.BlendTimes'"

      End Object

   End Object

   Begin Object Class=/Script/RigVMDeveloper.RigVMPin Name="AnimNextBlendByBoolTraitSharedData" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.WalkRunBlend.AnimNextBlendByBoolTraitSharedData'"

      Begin Object Class=/Script/RigVMDeveloper.RigVMPin Name="TrueChild" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.WalkRunBlend.AnimNextBlendByBoolTraitSharedData.TrueChild'"

      End Object

      Begin Object Class=/Script/RigVMDeveloper.RigVMPin Name="FalseChild" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.WalkRunBlend.AnimNextBlendByBoolTraitSharedData.FalseChild'"

      End Object

      Begin Object Class=/Script/RigVMDeveloper.RigVMPin Name="DecoratorSharedDataStruct" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.WalkRunBlend.AnimNextBlendByBoolTraitSharedData.DecoratorSharedDataStruct'"

      End Object

      Begin Object Class=/Script/RigVMDeveloper.RigVMPin Name="bCondition" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.WalkRunBlend.AnimNextBlendByBoolTraitSharedData.bCondition'"

      End Object

      Begin Object Class=/Script/RigVMDeveloper.RigVMPin Name="bAlwaysUpdateTrueChild" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.WalkRunBlend.AnimNextBlendByBoolTraitSharedData.bAlwaysUpdateTrueChild'"

      End Object

   End Object

   Begin Object Name="Result" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.WalkRunBlend.Result'"

      Direction=Output

      CPPType="FAnimNextTraitHandle"

      CPPTypeObject="/Script/CoreUObject.ScriptStruct'/Script/UAFAnimGraph.AnimNextTraitHandle'"

      CPPTypeObjectPath="/Script/UAFAnimGraph.AnimNextTraitHandle"

      DefaultValue="(PackedTraitIndexAndNodeHandle=16777215)"

   End Object

   Begin Object Name="AnimNextBlendSmootherTraitSharedData" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.WalkRunBlend.AnimNextBlendSmootherTraitSharedData'"

      Begin Object Name="DecoratorSharedDataStruct" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.WalkRunBlend.AnimNextBlendSmootherTraitSharedData.DecoratorSharedDataStruct'"

         Direction=Hidden

         bIsDynamicArray=True

         CPPType="TObjectPtr<UScriptStruct>"

         CPPTypeObject="/Script/CoreUObject.Class'/Script/CoreUObject.ScriptStruct'"

         CPPTypeObjectPath="/Script/CoreUObject.ScriptStruct"

         DefaultValueObject="/Script/CoreUObject.ScriptStruct'/Script/UAFAnimGraph.AnimNextBlendSmootherTraitSharedData'"

      End Object

      Begin Object Name="CustomBlendCurve" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.WalkRunBlend.AnimNextBlendSmootherTraitSharedData.CustomBlendCurve'"

         Direction=Input

         bIsDynamicArray=True

         CPPType="TObjectPtr<UCurveFloat>"

         CPPTypeObject="/Script/CoreUObject.Class'/Script/Engine.CurveFloat'"

         CPPTypeObjectPath="/Script/Engine.CurveFloat"

         DefaultValueType=Unset

      End Object

      Begin Object Name="BlendType" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.WalkRunBlend.AnimNextBlendSmootherTraitSharedData.BlendType'"

         Direction=Input

         bIsDynamicArray=True

         CPPType="EAlphaBlendOption"

         CPPTypeObject="/Script/CoreUObject.Enum'/Script/Engine.EAlphaBlendOption'"

         CPPTypeObjectPath="/Script/Engine.EAlphaBlendOption"

         DefaultValue="HermiteCubic"

      End Object

      Begin Object Name="BlendTimes" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.WalkRunBlend.AnimNextBlendSmootherTraitSharedData.BlendTimes'"

         Direction=Input

         bIsDynamicArray=True

         CPPType="TArray<float>"

         DefaultValueType=Unset

      End Object

      Direction=Input

      CPPType="FRigDecorator_AnimNextCppDecorator"

      CPPTypeObject="/Script/CoreUObject.ScriptStruct'/Script/UAFAnimGraph.RigDecorator_AnimNextCppDecorator'"

      CPPTypeObjectPath="/Script/UAFAnimGraph.RigDecorator_AnimNextCppDecorator"

      DefaultValueObject="/Script/CoreUObject.ScriptStruct'/Script/UAFAnimGraph.RigDecorator_AnimNextCppDecorator'"

      SubPins(0)="/Script/RigVMDeveloper.RigVMPin'DecoratorSharedDataStruct'"

      SubPins(1)="/Script/RigVMDeveloper.RigVMPin'BlendTimes'"

      SubPins(2)="/Script/RigVMDeveloper.RigVMPin'BlendType'"

      SubPins(3)="/Script/RigVMDeveloper.RigVMPin'CustomBlendCurve'"

   End Object

   Begin Object Name="AnimNextBlendByBoolTraitSharedData" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.WalkRunBlend.AnimNextBlendByBoolTraitSharedData'"

      Begin Object Name="TrueChild" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.WalkRunBlend.AnimNextBlendByBoolTraitSharedData.TrueChild'"

         DisplayName="True"

         Direction=Input

         bIsDynamicArray=True

         CPPType="FAnimNextTraitHandle"

         CPPTypeObject="/Script/CoreUObject.ScriptStruct'/Script/UAFAnimGraph.AnimNextTraitHandle'"

         CPPTypeObjectPath="/Script/UAFAnimGraph.AnimNextTraitHandle"

         DefaultValue="(PackedTraitIndexAndNodeHandle=16777215)"

         UserDefinedCategory="Default"

         IndexInCategory=0

      End Object

      Begin Object Name="FalseChild" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.WalkRunBlend.AnimNextBlendByBoolTraitSharedData.FalseChild'"

         DisplayName="False"

         Direction=Input

         bIsDynamicArray=True

         CPPType="FAnimNextTraitHandle"

         CPPTypeObject="/Script/CoreUObject.ScriptStruct'/Script/UAFAnimGraph.AnimNextTraitHandle'"

         CPPTypeObjectPath="/Script/UAFAnimGraph.AnimNextTraitHandle"

         DefaultValue="(PackedTraitIndexAndNodeHandle=16777215)"

         UserDefinedCategory="Default"

         IndexInCategory=1

      End Object

      Begin Object Name="DecoratorSharedDataStruct" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.WalkRunBlend.AnimNextBlendByBoolTraitSharedData.DecoratorSharedDataStruct'"

         Direction=Hidden

         bIsDynamicArray=True

         CPPType="TObjectPtr<UScriptStruct>"

         CPPTypeObject="/Script/CoreUObject.Class'/Script/CoreUObject.ScriptStruct'"

         CPPTypeObjectPath="/Script/CoreUObject.ScriptStruct"

         DefaultValueObject="/Script/CoreUObject.ScriptStruct'/Script/UAFAnimGraph.AnimNextBlendByBoolTraitSharedData'"

      End Object

      Begin Object Name="bCondition" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.WalkRunBlend.AnimNextBlendByBoolTraitSharedData.bCondition'"

         Direction=Input

         bIsDynamicArray=True

         bIsLazy=True

         CPPType="bool"

         DefaultValue="False"

         UserDefinedCategory="Default"

         IndexInCategory=2

      End Object

      Begin Object Name="bAlwaysUpdateTrueChild" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.WalkRunBlend.AnimNextBlendByBoolTraitSharedData.bAlwaysUpdateTrueChild'"

         Direction=Input

         bIsDynamicArray=True

         CPPType="bool"

         DefaultValue="False"

      End Object

      Direction=Input

      bIsExpanded=True

      CPPType="FRigDecorator_AnimNextCppDecorator"

      CPPTypeObject="/Script/CoreUObject.ScriptStruct'/Script/UAFAnimGraph.RigDecorator_AnimNextCppDecorator'"

      CPPTypeObjectPath="/Script/UAFAnimGraph.RigDecorator_AnimNextCppDecorator"

      DefaultValueObject="/Script/CoreUObject.ScriptStruct'/Script/UAFAnimGraph.RigDecorator_AnimNextCppDecorator'"

      SubPins(0)="/Script/RigVMDeveloper.RigVMPin'DecoratorSharedDataStruct'"

      SubPins(1)="/Script/RigVMDeveloper.RigVMPin'TrueChild'"

      SubPins(2)="/Script/RigVMDeveloper.RigVMPin'FalseChild'"

      SubPins(3)="/Script/RigVMDeveloper.RigVMPin'bCondition'"

      SubPins(4)="/Script/RigVMDeveloper.RigVMPin'bAlwaysUpdateTrueChild'"

   End Object

   ResolvedFunctionName="FRigUnit_AnimNextTraitStack::Execute"

   NodeTitle="Trait Stack"

   Position=(X=-200.000000,Y=0.000000)

   NodeColor=(R=0.000000,G=1.000000,B=1.000000,A=1.000000)

   TraitRootPinNames(0)="AnimNextBlendByBoolTraitSharedData"

   TraitRootPinNames(1)="AnimNextBlendSmootherTraitSharedData"

   TraitDefaultValues=(("AnimNextBlendByBoolTraitSharedData", (PropertyBag=(Value=/Engine/Transient.PropertyBag_ac2ec18a91ba8d06(DefaultValue=(DecoratorSharedDataStruct="/Script/CoreUObject.ScriptStruct'/Script/UAFAnimGraph.AnimNextBlendByBoolTraitSharedData'",Name="AnimNextBlendByBoolTraitSharedData"))))),("AnimNextBlendSmootherTraitSharedData", (PropertyBag=(Value=/Engine/Transient.PropertyBag_ac2ec18a91ba8d06(DefaultValue=(DecoratorSharedDataStruct="/Script/CoreUObject.ScriptStruct'/Script/UAFAnimGraph.AnimNextBlendSmootherTraitSharedData'",Name="AnimNextBlendSmootherTraitSharedData"))))))

   Pins(0)="/Script/RigVMDeveloper.RigVMPin'Result'"

   Pins(1)="/Script/RigVMDeveloper.RigVMPin'AnimNextBlendByBoolTraitSharedData'"

   Pins(2)="/Script/RigVMDeveloper.RigVMPin'AnimNextBlendSmootherTraitSharedData'"

   PinCategories(0)="Default"

End Object

Begin Object Class=/Script/RigVMDeveloper.RigVMVariableNode Name="UseRunInput" ExportPath="/Script/RigVMDeveloper.RigVMVariableNode'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.UseRunInput'"

   Begin Object Class=/Script/RigVMDeveloper.RigVMPin Name="Variable" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.UseRunInput.Variable'"

   End Object

   Begin Object Class=/Script/RigVMDeveloper.RigVMPin Name="Value" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.UseRunInput.Value'"

   End Object

   Begin Object Name="Variable" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.UseRunInput.Variable'"

      Direction=Hidden

      CPPType="FName"

      DefaultValue="UseRun"

      CustomWidgetName="VariableName"

   End Object

   Begin Object Name="Value" ExportPath="/Script/RigVMDeveloper.RigVMPin'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.UseRunInput.Value'"

      Direction=Output

      CPPType="bool"

      DefaultValue="False"

   End Object

   VariableGuid=23BE60084460671DED3C48BE2ECF0827

   Position=(X=-600.000000,Y=430.000000)

   Pins(0)="/Script/RigVMDeveloper.RigVMPin'Variable'"

   Pins(1)="/Script/RigVMDeveloper.RigVMPin'Value'"

End Object

Begin Object Class=/Script/RigVMDeveloper.RigVMLink Name="RigVMLink_0" ExportPath="/Script/RigVMDeveloper.RigVMLink'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.RigVMLink_0'"

   SourcePinPath="Walk.Result"

   TargetPinPath="WalkRunBlend.AnimNextBlendByBoolTraitSharedData.FalseChild"

End Object

Begin Object Class=/Script/RigVMDeveloper.RigVMLink Name="RigVMLink_1" ExportPath="/Script/RigVMDeveloper.RigVMLink'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.RigVMLink_1'"

   SourcePinPath="Run.Result"

   TargetPinPath="WalkRunBlend.AnimNextBlendByBoolTraitSharedData.TrueChild"

End Object

Begin Object Class=/Script/RigVMDeveloper.RigVMLink Name="RigVMLink_2" ExportPath="/Script/RigVMDeveloper.RigVMLink'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.RigVMLink_2'"

   SourcePinPath="WalkRunBlend.Result"

   TargetPinPath="RigUnit_AnimNextGraphRoot.Result"

End Object

Begin Object Class=/Script/RigVMDeveloper.RigVMLink Name="RigVMLink_3" ExportPath="/Script/RigVMDeveloper.RigVMLink'/Game/FeatureLab/UAF/AG_PuppetLocomotion.AG_PuppetLocomotion:EditorData.RigVMGraph.RigVMLink_3'"

   SourcePinPath="UseRunInput.Value"

   TargetPinPath="WalkRunBlend.AnimNextBlendByBoolTraitSharedData.bCondition"

End Object
```
