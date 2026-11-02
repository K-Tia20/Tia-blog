

캐릭터가 대사를 말할 때 입만 열리고 닫히면 금방 어색해진다. 이번 실험에서는 같은 AI 음성을 넣고 표정의 분위기를 바꿨다. 음성 파일에서 얼굴 애니메이션을 만드는 도구는 **MetaHuman Animator**를 사용했다.

입력은 로컬 Piper로 생성한 약 **12.55초 음성**이다. 개인 목소리를 녹음하거나 얼굴 영상을 촬영하지 않았다. 처리 결과가 실제 메타휴먼의 눈, 입, 볼과 턱에 반영되는지 확인했다.

![음성 기반 메타휴먼 얼굴 재생](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/02/result.png)

## 파일 네 종류를 먼저 구분하기

| 종류 | 역할 |
|---|---|
| WAV | 외부에서 만든 실제 소리 파일. |
| SoundWave | WAV를 언리얼에 가져온 에셋. 이름은 파형이지만 ‘언리얼이 사용할 음성 재료’로 보면 된다. |
| MetaHuman Performance | 어느 음성을 어떤 방식으로 처리할지 설정하는 작업 파일. |
| Animation Sequence | 처리가 끝난 뒤 캐릭터에서 재생하는 애니메이션 파일. |

파일 네 개를 한 파일로 생각하면 어떤 단계에서 문제가 생겼는지 찾기 어렵다. 음성이 잘 들리는지, 처리가 끝났는지, 완성 애니메이션이 캐릭터에 연결됐는지를 나눠 확인했다.

## 완성 결과를 먼저 비교해 보기

1. `Content → FeatureLab → Maps`에서 `FL_02_Performance`를 더블클릭한다.
2. 위쪽 **▶ Play**를 누른 뒤 게임 화면을 한 번 클릭한다.
3. **C**로 얼굴 시점을 확인한다.
4. **M**을 눌러 감정 변형을 바꾼다. 같은 음성인데 얼굴의 분위기가 달라지는 부분을 본다.
5. **P**를 누르면 얼굴과 음성이 함께 멈춘다. 다시 누르면 이어진다.
6. **R**로 현재 선택한 표정과 음성을 처음부터 재생한다.
7. 에셋을 열어 보려면 **■ Stop**을 누른다.

## 에디터에서 음성 처리 파일 열기

콘텐츠 브라우저의 검색창에 `MHP_`를 입력한다. 이 프로젝트에는 기본 음성 처리 파일과 AI 음성·감정 비교 파일이 함께 있으므로 이름만 보고 판단하지 않고, 에셋을 연 뒤 **Audio Sample에 연결된 소리**를 확인한다. AI 비교 결과는 `Capture` 아래의 `AIEmotion` 관련 에셋을 기준으로 읽는다.

![처리 에셋을 찾는 위치](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/02/folder.png)

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
| `MetaHuman Performance` | 입력 음성을 처리해 얼굴 연기를 만드는 작업 에셋. |
| `Process` | 현재 입력과 옵션으로 분석·생성 처리를 실행한다. |
| `Export Animation` | 처리 결과를 애니메이션 에셋으로 내보낸다. |
| `Export Level Sequence` | 결과를 타임라인 작업에 사용할 시퀀스 형태로 내보내는 선택지. |
| `Input Type / Audio` | 입력 자료의 종류 / 음성 입력 사용. |
| `Audio` | 분석에 사용할 SoundWave 음성 에셋. |
| `SoundWave` | 언리얼 안에서 사용하는 소리 에셋. 원본 WAV 파일을 가져온 결과다. |
| `Visualization Object` | 미리보기에 사용할 대상. 사진의 None은 대상이 지정되지 않았다는 뜻이다. |
| `Frame Range` | 처리할 프레임 구간. 프레임은 시간에 따라 이어지는 한 장면이다. |
| `Solve Overrides` | 기본 처리 옵션 대신 지정할 설정. |
| `Mood / Mood Intensity` | 표정 분위기 / 그 분위기의 강도. |
| `Neutral / Anger / Happiness` | 중립 / 분노 / 행복. 같은 음성에 다른 표정 조건을 적용할 때 쓴 이름이다. |
| `Generate Blinks` | 자동 눈 깜박임 생성 옵션. |
| `MHP_AI_Neutral` | 이 프로젝트에서 AI 음성의 중립 표정 처리를 위해 만든 파일 이름. |
| `MHP_ / AS_` | 이 프로젝트에서 Performance 작업 파일 / 애니메이션 시퀀스를 구분하는 이름. |


![입력 음성과 처리 옵션을 확인하는 에디터](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/02/settings.png)

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
| `MetaHuman Performance` | 입력 음성을 처리해 얼굴 연기를 만드는 작업 에셋. |
| `Process` | 현재 입력과 옵션으로 분석·생성 처리를 실행한다. |
| `Export Animation` | 처리 결과를 애니메이션 에셋으로 내보낸다. |
| `Export Level Sequence` | 결과를 타임라인 작업에 사용할 시퀀스 형태로 내보내는 선택지. |
| `Input Type / Audio` | 입력 자료의 종류 / 음성 입력 사용. |
| `Audio` | 분석에 사용할 SoundWave 음성 에셋. |
| `SoundWave` | 언리얼 안에서 사용하는 소리 에셋. 원본 WAV 파일을 가져온 결과다. |
| `Visualization Object` | 미리보기에 사용할 대상. 사진의 None은 대상이 지정되지 않았다는 뜻이다. |
| `Frame Range` | 처리할 프레임 구간. 프레임은 시간에 따라 이어지는 한 장면이다. |
| `Solve Overrides` | 기본 처리 옵션 대신 지정할 설정. |
| `Mood / Mood Intensity` | 표정 분위기 / 그 분위기의 강도. |
| `Neutral / Anger / Happiness` | 중립 / 분노 / 행복. 같은 음성에 다른 표정 조건을 적용할 때 쓴 이름이다. |
| `Generate Blinks` | 자동 눈 깜박임 생성 옵션. |
| `MHP_AI_Neutral` | 이 프로젝트에서 AI 음성의 중립 표정 처리를 위해 만든 파일 이름. |
| `MHP_ / AS_` | 이 프로젝트에서 Performance 작업 파일 / 애니메이션 시퀀스를 구분하는 이름. |


동일한 작업을 새로 해 보려면 콘텐츠 브라우저 빈 곳을 우클릭하고 **MetaHuman Animator → MetaHuman Performance**로 작업 파일을 만든다. 연 파일에서 다음을 지정한다.

1. **Input Type**은 `Audio`로 둔다. 영상 입력이 아니다.
2. **Audio**에서 사용할 SoundWave를 선택한다.
3. **Visualization Object**를 확인한다. 사진의 작업 파일은 `None`이어서 가운데 미리보기가 비어 있다. 이번 배치 처리에서는 애니메이션을 대상 얼굴 스켈레톤으로 내보내 실제 캐릭터에서 확인했다.
4. 처리할 프레임 범위를 확인한다. 프레임은 애니메이션의 한 장면이다.
5. 표정 분위기를 비교할 때는 **Solve Overrides의 Mood**와 강도를 바꾼다.
6. **Process**를 누르고 처리가 끝날 때까지 기다린다.
7. 결과를 확인한 뒤 **Export Animation**으로 애니메이션 에셋을 내보낸다.

메뉴 이름은 영어 UI 기준이다. 이번 프로젝트의 여러 감정 변형은 이 입력·처리·내보내기 과정을 Python으로 반복 실행해 만들었다. 화면에서 매번 같은 설정을 누르는 부분을 자동화한 것이다.

## 비교할 때 바꾼 것과 고정한 것

감정 이름을 바꿀 때마다 다른 음성을 넣으면 표정 차이가 어느 입력에서 온 것인지 알기 어렵다. 음성은 같게 두고 감정과 강도만 바꿨다. 비교를 흐리지 않도록 처리 단계의 자동 눈 깜박임 생성도 끈 조건을 사용했다.

기록에는 **13개 감정 모드**, 강도 차이와 반복 처리를 포함한 **15번의 처리**, 런타임에서 고를 수 있는 **14개 변형**이 있다. 서로 다른 개수다. ‘감정이 15종류다’라고 정리하지 않았다.

한 처리 결과는 376프레임과 260개 곡선을 포함했다. 곡선은 시간에 따라 바뀌는 제어값이다. 예를 들어 입을 벌리는 값이 시간 순서대로 저장된다고 생각하면 된다. 실제 결과에는 여러 얼굴 제어값이 함께 들어 있다.

## 파일이 만들어진 다음이 더 중요했다

애니메이션 에셋 생성만으로 끝내지 않고, 캐릭터에서 최종 피부가 변하는지 측정했다. 감정별로 얼굴 정점 위치가 달랐고, Neutral을 같은 조건으로 다시 처리한 곡선 차이는 기록상 0이었다. 얼굴 재생을 초기화했을 때 피부도 기준 위치로 돌아왔다.

![실제 실행 영상](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/02/voice-demo.mp4)

[소리가 포함된 짧은 MP4 열기](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/02/voice-demo.mp4)

*실제 실행 프레임과 같은 재생 시점의 원본 음성을 묶은 발췌 영상이다. 영상의 시간 간격은 실제 촬영 기록을 사용했다.*

이 값은 이번 음성과 이 캐릭터에서 확인한 반복 결과다. 어떤 문장이나 어떤 목소리에서도 항상 같은 품질이 나온다는 평가로 넓히지는 않았다.

## 소리는 나는데 표정이 안 움직인다면

- Performance 파일의 입력이 Audio인지 확인한다.
- Audio 항목이 비어 있지 않은지 확인한다. 이름이 비슷한 기본 음성과 AI 음성을 구분한다.
- 얼굴 메시와 내보낸 애니메이션의 대상 스켈레톤이 맞는지 확인한다. 스켈레톤은 뼈대 구조다.
- Play 상태인지 확인한다. 에셋을 레벨에 놓기만 했다고 자동으로 재생되지는 않는다.
- 음성과 얼굴이 어긋나면 둘의 시작 시간을 함께 돌리는지 확인한다. 이 프로젝트의 R은 두 재생 위치를 함께 초기화한다.

## 실제 소스와 참고

[전체 소스 폴더](%EC%97%90%EB%94%94%ED%84%B0%20%ED%99%94%EB%A9%B4%EA%B3%BC%20%EA%B8%B0%EB%B3%B8%20%EC%9A%A9%EC%96%B4.md#code-reading)의 `Lab`에서 `ai`, `mood`, `performance`가 들어간 생성·검증 파일을 확인할 수 있다. 기본 재생 장면 작성은 [lab_build_performance.py](#source-lab-lab-build-performance-py), 런타임 재생 동기화는 [FeatureLabRuntime.cpp](#source-source-mutablesample-featurelabruntime-cpp)에 있다. 입력 생성과 감정 처리에 사용한 추가 파일은 이 글의 [작업 파일 목록](#code-index)에 연결했다.

공식 설명: [Audio Driven Animation](https://dev.epicgames.com/documentation/en-us/metahuman/audio-driven-animation).


## 영상 속 대사는 무슨 뜻인가

원본 입력 문장은 “The signal tower is awake. We found the hidden path, and the bridge is safe. Keep moving, watch the lights, and meet me at the next beacon. This voice was generated by a local neural model.”이다.

한국어로는 ‘신호탑이 깨어났다. 숨겨진 길을 찾았고 다리는 안전하다. 계속 이동하면서 불빛을 보고, 다음 신호 지점에서 만나자. 이 음성은 로컬 신경망 모델로 만들었다’는 뜻이다. 위 영상은 이 음성의 일부 구간을 실제 얼굴 재생과 함께 보여 준다. 입력 WAV 전체도 같은 영상 폴더에 보관했다.

<!-- korean-ui-explanations -->


## 사진 오른쪽에 보이는 나머지 항목 읽기

| 실제 화면의 영어 | 한국어 뜻 |
|---|---|
| Image Review | 입력 영상을 검토하는 영역. 이번 음성 입력에서는 비어 있다. |
| A\|B Viewport | 미리보기 두 상태를 비교하는 화면. 현재 Visualization Object가 None이라 얼굴이 보이지 않는다. |
| Data | 입력 자료를 지정하는 설정 묶음. |
| Timecode Alignment / Relative | 타임코드를 맞추는 방식 / 상대적인 기준으로 맞추기. |
| Visualization Object / None | 미리보기 대상 / 대상이 지정되지 않은 상태. |
| Control Rig | 얼굴 제어값을 표현하는 리그 연결. |
| Head Movement / Transform Track | 머리 움직임 처리 / 위치·회전 트랙으로 표현하는 방식. |
| Processing Parameters | 실제 처리 범위를 정하는 설정. |
| Start Frame to Process / End Frame to Process | 처리할 시작 / 끝 프레임. 사진의 0과 376을 확인한다. |
| Realtime Audio | 실시간 음성 처리 방식. 사진에서는 체크하지 않은 배치 처리 조건이다. |
| Downmix Channels | 여러 음성 채널을 처리용으로 합쳐 줄이는 옵션. |
| Cancel | 진행 중인 처리를 중단하는 버튼. |

미리보기 얼굴이 비어 있다는 이유만으로 처리된 애니메이션까지 없다고 판단하지 않는다. 오른쪽 입력과 처리 범위, 아래 음성 파형, 내보낸 애니메이션과 실제 실행 영상 순서로 확인한다.


<a id="code-index"></a>

## 이 장면을 만든 코드

아래는 제작과 검증에 사용한 전체 코드에 한국어 주석을 더한 설명본이다. `.py`는 언리얼 에디터에서 실행하는 제작·검사 코드, `.cpp`와 `.h`는 프로젝트에 넣어 빌드하는 코드다. 파일마다 첫 주석에 역할과 입력 조건을 적었다.


<a id="source-lab-lab-build-performance-py"></a>

### lab_build_performance.py

```python
# 파일 역할: 에셋·그래프·장면을 구성하는 제작 작업. 이미 있는 원본을 대상으로 재실행해도 되는지 가드 조건부터 읽는다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Maps/FL_02_Performance
#   /Game/FeatureLab/Capture/AS_AudioSpeech_MH58_Face
#   /Game/MetaHumans/Assembled/MH_MCP_Test/BP_MH_MCP_Test

"""Inspect the real solved curves and prepare an assembled MetaHuman playback scene."""

import json
import traceback
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

# ROOT: 프로젝트 루트 경로. 결과 파일을 어느 프로젝트에 쓰는지 정하는 기준이다.
ROOT = Path(unreal.Paths.project_dir()).resolve()
assert ROOT.name == "EpicFeatureLab"
OUT = ROOT / "Evidence" / "case02-playback-build.json"
report = {"status": "building", "visual_validation": "pending", "personal_input_used": False}
# 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다. 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
try:
    # 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
    animation = unreal.EditorAssetLibrary.load_asset(
        "/Game/FeatureLab/Capture/AS_AudioSpeech_MH58_Face"
    )
    assert animation, "Audio solve must finish before building playback"
    curve_names = unreal.AnimationLibrary.get_animation_curve_names(
        animation, unreal.RawCurveTrackTypes.RCT_FLOAT
    )
    ranges = []
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 name의 값이 매번 바뀐다. 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    for name in curve_names:
        times, values = unreal.AnimationLibrary.get_float_keys(animation, name)
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: values 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
        if values:
            low, high = min(values), max(values)
            # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: high - low > 0.0001 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
            if high - low > 0.0001:
                # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
                ranges.append(
                    {
                        "name": str(name),
                        "keys": len(values),
                        "min": low,
                        "max": high,
                        "range": high - low,
                    }
                )
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert (
        len(ranges) > 10
    ), "A valid speech solve should have multiple changing facial controls"
    report["curve_count"] = len(curve_names)
    report["varying_curve_count"] = len(ranges)
    report["varying_curves"] = sorted(ranges, key=lambda x: x["range"], reverse=True)
    # 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
    editor = unreal.get_editor_subsystem(unreal.LevelEditorSubsystem)
    # 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
    actors = unreal.get_editor_subsystem(unreal.EditorActorSubsystem)
    level = "/Game/FeatureLab/Maps/FL_02_Performance"
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: unreal.EditorAssetLibrary.does_asset_exist(level) 작업할 맵을 연다. 현재 맵과 다른 맵이므로 실행 중인 PIE를 먼저 끝내는지 확인한다.
    if unreal.EditorAssetLibrary.does_asset_exist(level):
        # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 작업할 맵을 연다. 현재 맵과 다른 맵이므로 실행 중인 PIE를 먼저 끝내는지 확인한다.
        assert editor.load_level(level)
    else:
        # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
        assert editor.new_level(level)
    # 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
    owned = [
        actor
        for actor in actors.get_all_level_actors()
        if "FeatureLab_02" in [str(x) for x in actor.tags]
    ]
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 actor의 값이 매번 바뀐다.
    for actor in owned:
        actors.destroy_actor(actor)

    # 함수 spawn: 이름은 spawn이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: cls, loc, label, rotation 지정한 클래스의 실제 액터를 편집 장면에 만든다. 에셋 파일 생성과는 다르다.
    def spawn(cls, loc, label, rotation=None):
        # 지정한 클래스의 실제 액터를 편집 장면에 만든다. 에셋 파일 생성과는 다르다.
        actor = actors.spawn_actor_from_class(
            cls, unreal.Vector(*loc), rotation or unreal.Rotator()
        )
        actor.set_actor_label(label)
        actor.tags = ["FeatureLab_02"]
        # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
        return actor

    floor = spawn(unreal.StaticMeshActor, (0, 0, -50), "FL02_Floor")
    # 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
    floor.static_mesh_component.set_static_mesh(
        unreal.EditorAssetLibrary.load_asset("/Engine/BasicShapes/Cube")
    )
    floor.set_actor_scale3d(unreal.Vector(24, 24, 1))
    spawn(unreal.DirectionalLight, (0, 0, 900), "FL02_Sun", unreal.Rotator(-45, -25, 0))
    spawn(unreal.SkyLight, (0, 0, 400), "FL02_Sky")
    spawn(unreal.SkyAtmosphere, (0, 0, 0), "FL02_Atmosphere")
    hero_class = unreal.EditorAssetLibrary.load_blueprint_class(
        "/Game/MetaHumans/Assembled/MH_MCP_Test/BP_MH_MCP_Test"
    )
    assert hero_class, "Assembled MetaHuman missing"
    hero = spawn(hero_class, (0, 0, 0), "FL02_MetaHuman_AudioSpeech")
    components = hero.get_components_by_class(unreal.SkeletalMeshComponent)
    report["skeletal_components"] = [
        {
            "name": c.get_name(),
            "mesh": (
                c.get_skeletal_mesh_asset().get_path_name()
                if c.get_skeletal_mesh_asset()
                else None
            ),
        }
        for c in components
    ]
    faces = [c for c in components if c.get_name().lower() == "face"]
    assert len(faces) == 1, "Could not uniquely identify assembled facial component"
    face = faces[0]
    # 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 visibility_based_anim_tick_option이다.
    face.set_editor_property(
        "visibility_based_anim_tick_option",
        unreal.VisibilityBasedAnimTickOption.ALWAYS_TICK_POSE_AND_REFRESH_BONES,
    )
    # Editing a generated assembly component reconstructs its owning Blueprint.
    # Resolve Face again instead of continuing with the invalid TRASH component.
    face = [
        c
        for c in hero.get_components_by_class(unreal.SkeletalMeshComponent)
        if c.get_name().lower() == "face"
    ][0]
    face_mesh = face.get_skeletal_mesh_asset()
    assert face_mesh, "Reconstructed Face lost its skeletal mesh"
    face.override_animation_data(animation, True, True, 0.0, 1.0)
    face = [
        c
        for c in hero.get_components_by_class(unreal.SkeletalMeshComponent)
        if c.get_name().lower() == "face"
    ][0]
    report["face_component"] = face.get_path_name()
    report["face_skeleton"] = face_mesh.get_editor_property("skeleton").get_path_name()
    report["animation_skeleton"] = animation.get_editor_property("skeleton").get_path_name()
    camera = spawn(unreal.CineCameraActor, (240, -65, 170), "FL02_FaceInspectionCamera")
    # 액터 방향을 바꾼다. 위치 이동과 구분한다.
    camera.set_actor_rotation(
        unreal.MathLibrary.find_look_at_rotation(
            camera.get_actor_location(), unreal.Vector(0, 0, 155)
        ),
        False,
    )
    camera.get_cine_camera_component().set_editor_property("current_focal_length", 50.0)
    spawn(unreal.PlayerStart, (450, 0, 110), "FL02_PlayerStart", unreal.Rotator(0, 180, 0))
    sign = spawn(
        unreal.TextRenderActor, (0, -350, 230), "FL02_Instructions", unreal.Rotator(0, 90, 0)
    )
    text = sign.get_component_by_class(unreal.TextRenderComponent)
    text.set_text(
        "02 | 합성 음성 → 실제 MetaHuman 표정 곡선\n얼굴 카메라: FL02_FaceInspectionCamera\n입력 WAV·대본: ExternalWorkflows/CaptureInputs"
    )
    text.set_world_size(24)
    editor.save_current_level()
    report.update(
        status="authored_curve_data_verified",
        map=level,
        animation=animation.get_path_name(),
        actor=hero.get_path_name(),
        remaining=[
            "PIE facial-bone motion",
            "visual speech playback",
            "mood control and repeat verification",
        ],
    )
except Exception:
    report.update(status="failed", error=traceback.format_exc())
OUT.write_text(json.dumps(report, indent=2, ensure_ascii=False), encoding="utf-8")
RESULT = {k: v for k, v in report.items() if k != "varying_curves"}
```

<a id="source-lab-lab-connect-ai-moods-py"></a>

### lab_connect_ai_moods.py

```python
# 파일 역할: EpicFeatureLab의 lab_connect_ai_moods 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Maps/FL_02_Performance
#   /Game/FeatureLab/Framework/BP_LabViewerGameMode
#   /Game/FeatureLab/Capture/AIEmotion/FeatureLabAISpeech

import json
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
assert root.name == "EpicFeatureLab"
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
assert not unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
batch = json.loads(
    (root / "Evidence" / "case02-ai-mood-batch.json").read_text(encoding="utf-8")
)
assert batch["status"] == "processed_exported_curve_validation_passed"
# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
editor = unreal.get_editor_subsystem(unreal.LevelEditorSubsystem)
assert editor.load_level("/Game/FeatureLab/Maps/FL_02_Performance")
viewer = unreal.EditorAssetLibrary.load_blueprint_class(
    "/Game/FeatureLab/Framework/BP_LabViewerGameMode"
)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 default_pawn_class이다.
assert (
    viewer
    and unreal.get_default_object(viewer).get_editor_property("default_pawn_class")
    == unreal.SpectatorPawn.static_class()
)
# 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 default_game_mode이다.
unreal.get_editor_subsystem(
    unreal.UnrealEditorSubsystem
).get_editor_world().get_world_settings().set_editor_property("default_game_mode", viewer)
# 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
actors = unreal.get_editor_subsystem(unreal.EditorActorSubsystem).get_all_level_actors()
controllers = [a for a in actors if isinstance(a, unreal.FeatureLabFacePlayback)]
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert len(controllers) == 1
controller = controllers[0]
variants = [unreal.load_asset(v["animation"]) for v in batch["runtime_variants"]]
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert len(variants) == 14 and all(variants)
wave = unreal.load_asset("/Game/FeatureLab/Capture/AIEmotion/FeatureLabAISpeech")
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert wave
controller.set_editor_property("facial_variants", variants)
# 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 facial_variant_names이다.
controller.set_editor_property(
    "facial_variant_names",
    [
        v["name"] + (" (25%)" if v["intensity"] == 0.25 else "")
        for v in batch["runtime_variants"]
    ],
)
controller.set_editor_property("facial_animation", variants[0])
controller.set_editor_property("speech", wave)
controller.set_editor_property("feature_caption", "02 | Neural AI speech -> MetaHuman face")
face = controller.get_face()
assert face and face.get_skeletal_mesh_asset().get_editor_property("skeleton") == variants[
    0
].get_editor_property("skeleton")
face.play_animation(variants[0], True)
face.set_editor_property("forced_lod_model", 1)
overview = next((a for a in actors if a.get_actor_label() == "FL02_OverviewCamera"), None)
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not overview 지정한 클래스의 실제 액터를 편집 장면에 만든다. 에셋 파일 생성과는 다르다.
if not overview:
    # 지정한 클래스의 실제 액터를 편집 장면에 만든다. 에셋 파일 생성과는 다르다.
    overview = unreal.get_editor_subsystem(unreal.EditorActorSubsystem).spawn_actor_from_class(
        unreal.CineCameraActor, unreal.Vector(0, 500, 145)
    )
    overview.set_actor_label("FL02_OverviewCamera")
    overview.tags = ["FeatureLab_02"]
# 액터 위치를 바꾼다. 별도 이동 시뮬레이션이 소유한 상태까지 자동 초기화되는지는 확인해야 한다.
overview.set_actor_location(unreal.Vector(0, 500, 145), False, False)
# 액터 방향을 바꾼다. 위치 이동과 구분한다.
overview.set_actor_rotation(
    unreal.MathLibrary.find_look_at_rotation(
        overview.get_actor_location(), unreal.Vector(0, 0, 115)
    ),
    False,
)
overview.set_editor_property("auto_activate_for_player", unreal.AutoReceiveInput.PLAYER0)
camera = overview.get_cine_camera_component()
camera.set_editor_property("current_focal_length", 40.0)
focus = camera.get_editor_property("focus_settings")
focus.set_editor_property("focus_method", unreal.CameraFocusMethod.DISABLE)
camera.set_editor_property("focus_settings", focus)
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 actor의 값이 매번 바뀐다.
for actor in actors:
    if actor.get_actor_label() == "FL02_Instructions":
        actor.get_component_by_class(unreal.TextRenderComponent).set_text(
            "02 | Local neural AI voice -> MetaHuman Animator\nM: emotion | P: pause | R: restart | C: face camera\n13 moods + happiness intensity comparison"
        )
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert editor.save_current_level()
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "status": "connected",
    "map": "/Game/FeatureLab/Maps/FL_02_Performance",
    "controller": controller.get_actor_label(),
    "variants": len(variants),
    "speech": wave.get_path_name(),
    "default_view": overview.get_actor_label(),
    "preserved_existing_scene_cameras_and_lights": True,
}
(root / "Evidence" / "case02-ai-mood-scene.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-generate-ai-moods-py"></a>

### lab_generate_ai_moods.py

```python
# 파일 역할: EpicFeatureLab의 lab_generate_ai_moods 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Capture/AIEmotion
#   /Game/MetaHumans/Assembled/MH_MCP_Test/Face/SKM_MH_ToolTest_FaceMesh

import hashlib
import bisect
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
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
assert not unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
VOICE = json.loads(
    (ROOT / "Evidence" / "case02-ai-voice-input.json").read_text(encoding="utf-8")
)
assert VOICE["uses_neural_network"] and VOICE["duration_seconds"] > 10
# LIB: 에디터 에셋 작업에 사용할 API 묶음이다.
LIB = unreal.EditorAssetLibrary
FOLDER = "/Game/FeatureLab/Capture/AIEmotion"
OUT = ROOT / "Evidence" / "case02-ai-mood-batch.json"
SPECS = [
    ("Neutral", "NEUTRAL", 1.0),
    ("Happiness", "HAPPINESS", 1.0),
    ("Sadness", "SADNESS", 1.0),
    ("Anger", "ANGER", 1.0),
    ("Surprise", "SURPRISE", 1.0),
    ("Fear", "FEAR", 1.0),
    ("Disgust", "DISGUST", 1.0),
    ("Confidence", "CONFIDENCE", 1.0),
    ("Confusion", "CONFUSION", 1.0),
    ("Excitement", "EXCITEMENT", 1.0),
    ("Playfulness", "PLAYFULNESS", 1.0),
    ("Boredom", "BOREDOM", 1.0),
    ("AutoDetect", "AUTO_DETECT", 1.0),
    ("HappinessSoft", "HAPPINESS", 0.25),
    ("NeutralRepeat", "NEUTRAL", 1.0),
]
# REPORT: 이번 작업의 입력·측정·성공 여부를 모을 기록용 사전이다. 게임의 실행 상태 자체와는 다르다.
REPORT = {
    "status": "preparing",
    "input_voice": VOICE["output"],
    "input_sha256": VOICE["output_sha256"],
    "total": len(SPECS),
    "results": {},
    "checks": {},
}
# HANDLE: 나중에 콜백을 해제하기 위해 보관하는 등록 표식이다.
HANDLE = None
# INDEX에 기준값 0을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
INDEX = 0
# PERFORMANCE에 기준값 None을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
PERFORMANCE = None
# STARTED에 기준값 0을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
STARTED = 0
# DONE에 기준값 False을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
DONE = False
# NEUTRAL에 기준값 None을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
NEUTRAL = None
# HAPPY에 기준값 None을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
HAPPY = None
MESH = LIB.load_asset("/Game/MetaHumans/Assembled/MH_MCP_Test/Face/SKM_MH_ToolTest_FaceMesh")
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert MESH
TARGET_SKELETON = MESH.get_editor_property("skeleton")
LIB.make_directory(FOLDER)
WAVE = LIB.load_asset(FOLDER + "/FeatureLabAISpeech")
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not WAVE 여러 속성을 이름:값 사전으로 한 번에 설정한다. 각 항목이 개별 설정과 대응한다.
if not WAVE:
    task = unreal.AssetImportTask()
    # 여러 속성을 이름:값 사전으로 한 번에 설정한다. 각 항목이 개별 설정과 대응한다.
    task.set_editor_properties(
        {
            "filename": VOICE["output"],
            "destination_path": FOLDER,
            "destination_name": "FeatureLabAISpeech",
            "automated": True,
            "save": True,
        }
    )
    unreal.AssetToolsHelpers.get_asset_tools().import_asset_tasks([task])
    WAVE = LIB.load_asset(FOLDER + "/FeatureLabAISpeech")
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert WAVE


# 함수 save: 이름은 save이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: 별도 입력 없음 문자열을 파일에 기록한다. 결과 JSON이나 보고서인지, 실제 코드·설정 파일인지 경로를 확인한다.
def save():
    OUT.write_text(json.dumps(REPORT, indent=2), encoding="utf-8")


# 함수 unregister: 이름은 unregister이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: 별도 입력 없음 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
def unregister():
    global HANDLE
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: HANDLE 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
    if HANDLE:
        # 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
        unreal.unregister_slate_post_tick_callback(HANDLE)
    # HANDLE: 나중에 콜백을 해제하기 위해 보관하는 등록 표식이다.
    HANDLE = None


# 함수 finish: 이름은 finish이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: exception
def finish(exception=None):
    global DONE, PERFORMANCE, MESH, TARGET_SKELETON, WAVE, NEUTRAL, HAPPY
    unregister()
    # DONE에 기준값 True을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
    DONE = True
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: exception
    if exception:
        REPORT["error"] = exception
    REPORT["status"] = (
        "processed_exported_curve_validation_passed"
        if not exception and all(REPORT["checks"].values())
        else "failed"
    )
    save()
    # PERFORMANCE에 기준값 None을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
    PERFORMANCE = MESH = TARGET_SKELETON = WAVE = NEUTRAL = HAPPY = None


# 함수 differences: 이름은 differences이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: a, b, tokens 여러 목록의 같은 위치 항목을 묶어 순서대로 비교한다.
def differences(a, b, tokens=None):
    # square에 기준값 0.0을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
    square = 0.0
    # count에 기준값 0을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
    count = 0
    # maximum에 기준값 0.0을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
    maximum = 0.0
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 (name, values)의 값이 매번 바뀐다. 여러 목록의 같은 위치 항목을 묶어 순서대로 비교한다.
    for name, values in a.items():
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: name not in b or (tokens and (not any((t in name.lower() for t in tokens))))
        if name not in b or (tokens and not any(t in name.lower() for t in tokens)):
            continue
        # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
        assert len(values) == len(b[name]), name
        # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 (x, y)의 값이 매번 바뀐다. 여러 목록의 같은 위치 항목을 묶어 순서대로 비교한다.
        for x, y in zip(values, b[name]):
            # 차이의 부호를 없애 크기만 비교한다. 오차 허용 범위 검사에 자주 사용한다.
            d = abs(x - y)
            square += d * d
            count += 1
            maximum = max(maximum, d)
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return {
        "rms": math.sqrt(square / count) if count else 0.0,
        "maximum": maximum,
        "samples": count,
    }


# 함수 start_next: 이름은 start_next이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: 별도 입력 없음 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
def start_next():
    global PERFORMANCE, STARTED, HANDLE
    name, enum_name, intensity = SPECS[INDEX]
    path = FOLDER + "/MHP_AI_" + name
    # 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
    PERFORMANCE = LIB.load_asset(path)
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not PERFORMANCE 지정한 경로·이름·종류로 새 에셋을 만든다. 같은 이름의 원본이 있는지 검사하는 코드와 함께 읽는다.
    if not PERFORMANCE:
        # 지정한 경로·이름·종류로 새 에셋을 만든다. 같은 이름의 원본이 있는지 검사하는 코드와 함께 읽는다.
        PERFORMANCE = unreal.AssetToolsHelpers.get_asset_tools().create_asset(
            "MHP_AI_" + name,
            FOLDER,
            unreal.MetaHumanPerformance,
            unreal.MetaHumanPerformanceFactoryNew(),
        )
    assert not PERFORMANCE.is_processing(), "Do not overlap an active audio solve"
    # SetInputType/SetAudio need their individual PostEditChangeProperty events
    # to initialize the audio frame limits. Bulk editing skips that initialization.
    PERFORMANCE.set_editor_property("input_type", unreal.DataInputType.AUDIO)
    PERFORMANCE.set_editor_property("audio", None)
    PERFORMANCE.set_editor_property("audio", WAVE)
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 (prop, value)의 값이 매번 바뀐다. 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다.
    for prop, value in {
        "downmix_channels": True,
        "bRealtimeAudio": False,
        "bGenerateBlinks": False,
        "AudioDrivenAnimationOutputControls": unreal.AudioDrivenAnimationOutputControls.FULL_FACE,
    }.items():
        # 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다.
        PERFORMANCE.set_editor_property(prop, value)
    overrides = unreal.AudioDrivenAnimationSolveOverrides(
        mood=getattr(unreal.AudioDrivenAnimationMood, enum_name), mood_intensity=intensity
    )
    PERFORMANCE.set_editor_property("AudioDrivenAnimationSolveOverrides", overrides)
    PERFORMANCE.set_blocking_processing(False)
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert PERFORMANCE.can_process(), name
    result = PERFORMANCE.start_pipeline(True)
    STARTED = time.monotonic()
    REPORT.update(status="processing", current=name, completed=INDEX)
    REPORT["results"][name] = {
        "status": "processing",
        "performance": path,
        "mood": enum_name,
        "intensity": intensity,
        "start_result": str(result),
        "solve_settings": overrides.export_text(),
    }
    save()
    # HANDLE: 나중에 콜백을 해제하기 위해 보관하는 등록 표식이다. 에디터 갱신 뒤 호출할 함수를 등록한다. 작업이 끝나면 핸들로 해제해야 반복 호출이 남지 않는다.
    HANDLE = unreal.register_slate_post_tick_callback(tick)


# 함수 tick: 이름은 tick이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: delta
def tick(delta):
    global INDEX, NEUTRAL, HAPPY
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: DONE
    if DONE:
        # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
        return
    # 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다.
    try:
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: PERFORMANCE.is_processing()
        if PERFORMANCE.is_processing():
            # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: time.monotonic() - STARTED > 300
            if time.monotonic() - STARTED > 300:
                PERFORMANCE.cancel_pipeline()
                raise RuntimeError("Audio solve timeout: " + SPECS[INDEX][0])
            # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
            return
        unregister()
        name, enum_name, intensity = SPECS[INDEX]
        entry = REPORT["results"][name]
        frames = PERFORMANCE.get_number_of_processed_frames()
        # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
        assert PERFORMANCE.contains_animation_data() and frames > 200, (name, frames)
        settings = (
            unreal.MetaHumanPerformanceExportUtils.get_export_animation_sequence_settings(
                PERFORMANCE
            )
        )
        settings.target_skeleton_or_skeletal_mesh = MESH
        # settings.show_export_dialog에 기준값 False을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
        settings.show_export_dialog = False
        settings.package_path = FOLDER
        settings.asset_name = "AS_AI_" + name
        # settings.auto_save_anim_sequence에 기준값 True을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
        settings.auto_save_anim_sequence = True
        animation = unreal.MetaHumanPerformanceExportUtils.export_animation_sequence(
            PERFORMANCE, settings
        )
        assert animation and animation.get_editor_property("skeleton") == TARGET_SKELETON
        names = unreal.AnimationLibrary.get_animation_curve_names(
            animation, unreal.RawCurveTrackTypes.RCT_FLOAT
        )
        curves = {}
        # varying에 기준값 0을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
        varying = 0
        # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 curve의 값이 매번 바뀐다. 반복에 쓸 정수 순서를 만든다. 끝 값은 포함되지 않는다.
        for curve in names:
            times, values = unreal.AnimationLibrary.get_float_keys(animation, curve)
            # Export key reduction differs by emotion. Reconstruct each curve on
            # the common 30 Hz input timeline before comparing output values.
            source_times = [float(t) for t in times]
            source_values = [float(v) for v in values]
            values = []
            # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 frame의 값이 매번 바뀐다. 반복에 쓸 정수 순서를 만든다. 끝 값은 포함되지 않는다.
            for frame in range(frames):
                sample = frame / 30.0
                k = bisect.bisect_right(source_times, sample)
                # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not source_values
                if not source_values:
                    # value에 기준값 0.0을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
                    value = 0.0
                # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: k == 0
                elif k == 0:
                    value = source_values[0]
                # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: k == len(source_values)
                elif k == len(source_values):
                    value = source_values[-1]
                else:
                    a = (sample - source_times[k - 1]) / (source_times[k] - source_times[k - 1])
                    value = source_values[k - 1] * (1.0 - a) + source_values[k] * a
                # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
                values.append(value)
            # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
            assert all(math.isfinite(v) for v in values)
            curves[str(curve)] = values
            # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: values and max(values) - min(values) > 0.0001
            if values and max(values) - min(values) > 0.0001:
                varying += 1
        # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
        assert varying > 20 and len(curves) > 100
        entry.update(
            status="processed_exported",
            animation=animation.get_path_name(),
            processed_frames=frames,
            curve_count=len(curves),
            varying_curve_count=varying,
            comparison_sampling="30Hz linear reconstruction of exported reduced curve keys",
            curve_sha256=hashlib.sha256(
                json.dumps(curves, sort_keys=True, separators=(",", ":")).encode()
            ).hexdigest(),
            elapsed_seconds=round(time.monotonic() - STARTED, 3),
        )
        if name == "Neutral":
            NEUTRAL = curves
        else:
            entry["difference_from_neutral"] = differences(curves, NEUTRAL)
            entry["upper_face_difference"] = differences(
                curves, NEUTRAL, ["brow", "eye", "cheek", "nose"]
            )
        if name == "Happiness":
            HAPPY = curves
        if name == "HappinessSoft":
            entry["difference_from_full_happiness"] = differences(curves, HAPPY)
        # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
        assert LIB.save_loaded_asset(PERFORMANCE, False)
        INDEX += 1
        REPORT["completed"] = INDEX
        save()
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: INDEX < len(SPECS)
        if INDEX < len(SPECS):
            start_next()
        else:
            entries = REPORT["results"]
            fixed = [
                s[0] for s in SPECS if s[0] not in ["Neutral", "AutoDetect", "NeutralRepeat"]
            ]
            REPORT["checks"] = {
                "all_requested_solves_exported": all(
                    e["status"] == "processed_exported" for e in entries.values()
                ),
                "same_audio_frame_count": len({e["processed_frames"] for e in entries.values()})
                == 1,
                "all_named_moods_change_face": all(
                    entries[n]["difference_from_neutral"]["rms"] > 0.00001 for n in fixed
                ),
                "happiness_and_sadness_change_upper_face": all(
                    entries[n]["upper_face_difference"]["rms"] > 0.00001
                    for n in ["Happiness", "Sadness"]
                ),
                "mood_intensity_changes_result": entries["HappinessSoft"][
                    "difference_from_full_happiness"
                ]["rms"]
                > 0.00001,
                "repeat_produces_valid_same_length_animation": entries["NeutralRepeat"][
                    "processed_frames"
                ]
                == entries["Neutral"]["processed_frames"]
                and entries["NeutralRepeat"]["varying_curve_count"] > 20,
            }
            REPORT["runtime_variants"] = [
                {"name": n, "animation": e["animation"], "intensity": e["intensity"]}
                for n, e in entries.items()
                if n != "NeutralRepeat"
            ]
            finish()
    except Exception:
        finish(traceback.format_exc())


# 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다.
try:
    start_next()
except Exception:
    finish(traceback.format_exc())
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "status": REPORT["status"],
    "current": REPORT.get("current"),
    "total": len(SPECS),
    "evidence": str(OUT),
    "error": REPORT.get("error"),
}
```

<a id="source-lab-lab-inspect-native-face-input-py"></a>

### lab_inspect_native_face_input.py

```python
# 파일 역할: 현재 에셋·객체·실행 상태를 읽어 기록하는 관찰 작업.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal
import json
from pathlib import Path

# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert world
controller = unreal.GameplayStatics.get_all_actors_of_class(
    world, unreal.FeatureLabFacePlayback
)[0]
pc = unreal.GameplayStatics.get_player_controller(world, 0)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "input_components": [
        c.get_path_name() for c in controller.get_components_by_class(unreal.InputComponent)
    ],
    "paused": (
        controller.b_paused
        if hasattr(controller, "b_paused")
        else controller.get_editor_property("paused")
    ),
    "position": controller.get_face().get_position(),
    "player_controller": pc.get_path_name(),
}
(Path(unreal.Paths.project_dir()) / "Evidence" / "case02-keyboard-state.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-light-face-scene-py"></a>

### lab_light_face_scene.py

```python
# 파일 역할: EpicFeatureLab의 lab_light_face_scene 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
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
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
assert not unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
editor = unreal.get_editor_subsystem(unreal.LevelEditorSubsystem)
# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 편집 중인 월드를 얻는다. 게임 실행 월드와 다르므로 대상을 혼동하지 않는다.
world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world()
assert world.get_name() == "FL_02_Performance"
# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
actors = unreal.get_editor_subsystem(unreal.EditorActorSubsystem)
# 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
all_actors = actors.get_all_level_actors()
camera = next(a for a in all_actors if a.get_actor_label() == "FL02_FaceInspectionCamera")
target = unreal.Vector(0, 8, 158)
# 액터 위치를 바꾼다. 별도 이동 시뮬레이션이 소유한 상태까지 자동 초기화되는지는 확인해야 한다.
camera.set_actor_location(unreal.Vector(55, 240, 170), False, True)
# 액터 방향을 바꾼다. 위치 이동과 구분한다.
camera.set_actor_rotation(
    unreal.MathLibrary.find_look_at_rotation(camera.get_actor_location(), target), False
)
cine = camera.get_cine_camera_component()
focus = cine.get_editor_property("focus_settings")
focus.set_editor_property("manual_focus_distance", 240.0)
cine.set_editor_property("focus_settings", focus)
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 (label, location, intensity, color)의 값이 매번 바뀐다. 액터 방향을 바꾼다. 위치 이동과 구분한다.
for label, location, intensity, color in [
    ("FL02_Key", (160, 200, 220), 30, (1.0, 0.9, 0.8)),
    ("FL02_Fill", (-160, 160, 185), 10, (0.75, 0.85, 1.0)),
    ("FL02_Rim", (0, -150, 225), 20, (1.0, 0.9, 0.8)),
]:
    matches = [a for a in all_actors if a.get_actor_label() == label]
    # 지정한 클래스의 실제 액터를 편집 장면에 만든다. 에셋 파일 생성과는 다르다.
    light = (
        matches[0]
        if matches
        else actors.spawn_actor_from_class(unreal.RectLight, unreal.Vector(*location))
    )
    light.set_actor_label(label)
    # 액터 방향을 바꾼다. 위치 이동과 구분한다.
    light.set_actor_rotation(
        unreal.MathLibrary.find_look_at_rotation(light.get_actor_location(), target), False
    )
    component = light.get_component_by_class(unreal.RectLightComponent)
    component.set_intensity(intensity)
    component.set_light_color(unreal.LinearColor(*color, 1.0), True)
    component.set_editor_property("source_width", 120.0)
    component.set_editor_property("source_height", 120.0)
    component.set_attenuation_radius(650.0)
    light.tags = ["FeatureLab_02", "FeatureLab_Owned"]
start = next(a for a in all_actors if isinstance(a, unreal.PlayerStart))
# 액터 위치를 바꾼다. 별도 이동 시뮬레이션이 소유한 상태까지 자동 초기화되는지는 확인해야 한다.
start.set_actor_location(unreal.Vector(0, 450, 110), False, True)
# 액터 방향을 바꾼다. 위치 이동과 구분한다.
start.set_actor_rotation(unreal.Rotator(0, -90, 0), False)
playback = next(a for a in all_actors if isinstance(a, unreal.FeatureLabFacePlayback))
playback.get_component_by_class(unreal.AudioComponent).set_volume_multiplier(0.3)
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 actor의 값이 매번 바뀐다.
for actor in all_actors:
    if actor.get_actor_label() == "FL02_Instructions":
        actor.set_actor_hidden_in_game(True)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert editor.save_current_level()
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "saved": True,
    "camera": [55, 240, 170],
    "target": [0, 8, 158],
    "lighting": "three-point face inspection",
    "volume": 0.3,
}
(ROOT / "Evidence" / "case02-face-presentation.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-mha-audio-py"></a>

### lab_mha_audio.py

```python
# 파일 역할: EpicFeatureLab의 lab_mha_audio 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Capture

import json
import time
import traceback
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

# ROOT: 프로젝트 루트 경로. 결과 파일을 어느 프로젝트에 쓰는지 정하는 기준이다.
ROOT = Path(unreal.Paths.project_dir()).resolve()
assert ROOT.name == "EpicFeatureLab"
# LIB: 에디터 에셋 작업에 사용할 API 묶음이다.
LIB = unreal.EditorAssetLibrary
OUTPUT = ROOT / "Evidence" / "case02-audio-performance.json"
REPORT = {"status": "preparing", "personal_recording_used": False}
# TICK에 기준값 None을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
TICK = None
# DONE에 기준값 False을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
DONE = False


# 함수 save_report: 이름은 save_report이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: 별도 입력 없음 문자열을 파일에 기록한다. 결과 JSON이나 보고서인지, 실제 코드·설정 파일인지 경로를 확인한다.
def save_report():
    OUTPUT.write_text(json.dumps(REPORT, indent=2, ensure_ascii=False), encoding="utf-8")


# 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다. 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
try:
    folder = "/Game/FeatureLab/Capture"
    LIB.make_directory(folder)
    wave_path = folder + "/FeatureLabSpeech"
    # 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
    wave = LIB.load_asset(wave_path)
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not wave 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 filename이다.
    if not wave:
        task = unreal.AssetImportTask()
        # 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 filename이다.
        task.set_editor_property(
            "filename",
            str(ROOT / "ExternalWorkflows" / "CaptureInputs" / "FeatureLabSpeech.wav"),
        )
        task.set_editor_property("destination_path", folder)
        task.set_editor_property("automated", True)
        task.set_editor_property("save", True)
        unreal.AssetToolsHelpers.get_asset_tools().import_asset_tasks([task])
        # 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
        wave = LIB.load_asset(wave_path)
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not wave
    if not wave:
        raise RuntimeError("Synthetic speech did not import as a SoundWave")
    path = folder + "/MHP_AudioSpeech"
    # 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
    performance = LIB.load_asset(path)
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not performance 지정한 경로·이름·종류로 새 에셋을 만든다. 같은 이름의 원본이 있는지 검사하는 코드와 함께 읽는다.
    if not performance:
        # 지정한 경로·이름·종류로 새 에셋을 만든다. 같은 이름의 원본이 있는지 검사하는 코드와 함께 읽는다.
        performance = unreal.AssetToolsHelpers.get_asset_tools().create_asset(
            "MHP_AudioSpeech",
            folder,
            unreal.MetaHumanPerformance,
            unreal.MetaHumanPerformanceFactoryNew(),
        )
    performance.set_editor_property("input_type", unreal.DataInputType.AUDIO)
    performance.set_editor_property("audio", wave)
    performance.set_editor_property("downmix_channels", True)
    performance.set_blocking_processing(False)
    REPORT.update(
        performance=path, sound=wave.get_path_name(), can_process=performance.can_process()
    )
    if not REPORT["can_process"]:
        raise RuntimeError("MetaHuman Performance is not ready to process this audio")
    started = performance.start_pipeline(True)
    REPORT.update(status="processing", start_result=str(started))
    START = time.monotonic()
    save_report()

    # 함수 tick: 이름은 tick이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: delta 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
    def tick(delta):
        global TICK, DONE
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: DONE
        if DONE:
            # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
            return
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: performance.is_processing()
        if performance.is_processing():
            # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: time.monotonic() - START > 300
            if time.monotonic() - START > 300:
                performance.cancel_pipeline()
                REPORT.update(status="failed", error="Audio pipeline exceeded 300 seconds")
            else:
                # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
                return
        # DONE에 기준값 True을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
        DONE = True
        handle, TICK = TICK, None
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: handle is not None 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
        if handle is not None:
            # 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
            unreal.unregister_slate_post_tick_callback(handle)
        # 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다. 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 show_export_dialog이다.
        try:
            REPORT["processed_frames"] = performance.get_number_of_processed_frames()
            REPORT["contains_animation"] = performance.contains_animation_data()
            if not REPORT["contains_animation"] or REPORT["processed_frames"] < 1:
                raise RuntimeError(
                    "The pipeline did not produce valid animation frames: " + str(started)
                )
            settings = (
                unreal.MetaHumanPerformanceExportUtils.get_export_animation_sequence_settings(
                    performance
                )
            )
            settings.set_editor_property("show_export_dialog", False)
            settings.set_editor_property("package_path", folder)
            settings.set_editor_property("asset_name", "AS_AudioSpeech_Face")
            settings.set_editor_property("auto_save_anim_sequence", True)
            animation = unreal.MetaHumanPerformanceExportUtils.export_animation_sequence(
                performance, settings
            )
            # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not animation
            if not animation:
                raise RuntimeError("Animation export did not return an AnimSequence")
            # 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
            LIB.save_loaded_asset(performance, False)
            REPORT.update(
                status="processed_and_exported",
                animation=animation.get_path_name(),
                can_export=performance.can_export_animation(),
                elapsed_seconds=round(time.monotonic() - START, 2),
                remaining=[
                    "face playback and measurable curve changes",
                    "visual speech playback",
                    "mood control and repeat verification",
                ],
            )
        except Exception:
            REPORT.update(status="failed", error=traceback.format_exc())
        save_report()

    # 에디터 갱신 뒤 호출할 함수를 등록한다. 작업이 끝나면 핸들로 해제해야 반복 호출이 남지 않는다.
    TICK = unreal.register_slate_post_tick_callback(tick)
except Exception:
    REPORT.update(status="failed", error=traceback.format_exc())
    save_report()
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = REPORT
```

<a id="source-lab-lab-peek-ai-mood-controls-py"></a>

### lab_peek_ai_mood_controls.py

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
controller = unreal.GameplayStatics.get_all_actors_of_class(
    world, unreal.FeatureLabFacePlayback
)[0]
pc = unreal.GameplayStatics.get_player_controller(world, 0)
audio = controller.get_component_by_class(unreal.AudioComponent)
face = controller.get_face()
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 bPaused이다.
RESULT = {
    "variant": controller.facial_variant_index,
    "variant_count": len(controller.facial_variants),
    "name": controller.facial_variant_names[controller.facial_variant_index],
    "paused": controller.get_editor_property("bPaused"),
    "position": face.get_position(),
    "restart_count": controller.restart_count,
    "audio_state": str(audio.get_play_state()),
    "speech": controller.speech.get_path_name(),
    "animation": controller.facial_animation.get_path_name(),
    "camera": pc.get_view_target().get_name(),
    "inspection": pc.get_view_target() == controller.inspection_camera,
}
(Path(unreal.Paths.project_dir()) / "Evidence" / "case02-ai-keyboard-state.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-reexport-face-py"></a>

### lab_reexport_face.py

```python
# 파일 역할: EpicFeatureLab의 lab_reexport_face 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Capture/AS_AudioSpeech_MH58_Face
#   /Game/MetaHumans/Assembled/MH_MCP_Test/Face/SKM_MH_ToolTest_FaceMesh
#   /Game/FeatureLab/Capture/MHP_AudioSpeech
#   /Game/FeatureLab/Capture

import json
import traceback
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
assert root.name == "EpicFeatureLab"
report = {"status": "started"}
# 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다. 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
try:
    # 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
    mesh = unreal.EditorAssetLibrary.load_asset(
        "/Game/MetaHumans/Assembled/MH_MCP_Test/Face/SKM_MH_ToolTest_FaceMesh"
    )
    # 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
    performance = unreal.EditorAssetLibrary.load_asset(
        "/Game/FeatureLab/Capture/MHP_AudioSpeech"
    )
    target = "/Game/FeatureLab/Capture/AS_AudioSpeech_MH58_Face"
    # 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
    animation = unreal.EditorAssetLibrary.load_asset(target)
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not animation
    if not animation:
        settings = (
            unreal.MetaHumanPerformanceExportUtils.get_export_animation_sequence_settings(
                performance
            )
        )
        settings.target_skeleton_or_skeletal_mesh = mesh
        # settings.show_export_dialog에 기준값 False을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
        settings.show_export_dialog = False
        settings.package_path = "/Game/FeatureLab/Capture"
        settings.asset_name = "AS_AudioSpeech_MH58_Face"
        # settings.auto_save_anim_sequence에 기준값 True을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
        settings.auto_save_anim_sequence = True
        animation = unreal.MetaHumanPerformanceExportUtils.export_animation_sequence(
            performance, settings
        )
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert animation
    source_skeleton = animation.get_editor_property("skeleton")
    target_skeleton = mesh.get_editor_property("skeleton")
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert (
        source_skeleton == target_skeleton
    ), "Export must use this assembled UE 5.8 face skeleton"
    report.update(
        status="passed",
        animation=animation.get_path_name(),
        skeleton=source_skeleton.get_path_name(),
        processed_frames=performance.get_number_of_processed_frames(),
    )
except Exception:
    report.update(status="failed", error=traceback.format_exc())
(root / "Evidence" / "case02-targeted-export.json").write_text(
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

<a id="source-lab-lab-test-ai-mood-runtime-py"></a>

### lab_test_ai_mood_runtime.py

```python
# 파일 역할: 완성 결과를 실제 값과 비교하는 검증 작업. 생성 코드와 검사 코드를 구분한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

"""Check every generated mood on the actual MetaHuman's final skinned face."""

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
OUT = ROOT / "Evidence" / "case02-ai-mood-runtime.json"
# 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
WORLD = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert WORLD
CONTROLLER = unreal.GameplayStatics.get_all_actors_of_class(
    WORLD, unreal.FeatureLabFacePlayback
)[0]
FACE = CONTROLLER.get_face()
AUDIO = CONTROLLER.get_component_by_class(unreal.AudioComponent)
# JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
BATCH = json.loads(
    (ROOT / "Evidence" / "case02-ai-mood-batch.json").read_text(encoding="utf-8")
)
VARIANTS = BATCH["runtime_variants"]
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert len(CONTROLLER.facial_variants) == len(VARIANTS) == 14
assert FACE.get_bone_index("head") >= 0
STATS = unreal.FeatureLabRuntimeLibrary.inspect_mesh(FACE)
# 반복에 쓸 정수 순서를 만든다. 끝 값은 포함되지 않는다.
INDICES = list(range(0, STATS.vertices, max(1, STATS.vertices // 96)))
# JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
NAMES = [
    r["name"]
    for r in json.loads(
        (ROOT / "Evidence" / "case02-playback-build.json").read_text(encoding="utf-8")
    )["varying_curves"][:20]
]
# 반복에 쓸 정수 순서를 만든다. 끝 값은 포함되지 않는다.
STEPS = [(i, t) for i in range(len(VARIANTS)) for t in (0.0, 4.0)] + [(0, 0.0)]
STATE = {"step": 0, "started": 0.0, "done": False, "busy": False, "warmup": True}
# REPORT: 이번 작업의 입력·측정·성공 여부를 모을 기록용 사전이다. 게임의 실행 상태 자체와는 다르다.
REPORT = {
    "status": "running",
    "samples": [],
    "selections": [],
    "vertex_probe_count": len(INDICES),
    "sample_space": "Face component skin vertices transformed into the current head bone's local space; rigid head motion removed",
}
# HANDLE: 나중에 콜백을 해제하기 위해 보관하는 등록 표식이다.
HANDLE = None


# 함수 save: 이름은 save이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: 별도 입력 없음 문자열을 파일에 기록한다. 결과 JSON이나 보고서인지, 실제 코드·설정 파일인지 경로를 확인한다.
def save():
    OUT.write_text(json.dumps(REPORT, indent=2), encoding="utf-8")


# 함수 distance: 이름은 distance이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: a, b 여러 목록의 같은 위치 항목을 묶어 순서대로 비교한다.
def distance(a, b):
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다. 여러 목록의 같은 위치 항목을 묶어 순서대로 비교한다.
    return max(math.dist(x, y) for x, y in zip(a, b))


# 함수 prepare: 이름은 prepare이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: 별도 입력 없음 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
def prepare():
    i, t = STEPS[STATE["step"]]
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: t == 0.0 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    if t == 0.0:
        CONTROLLER.select_facial_variant(i)
        REPORT["selections"].append(
            {
                "index": i,
                "selected": CONTROLLER.facial_variant_index,
                "reset_position": FACE.get_position(),
                "audio_playing_before_pause": AUDIO.is_playing(),
                "speech": CONTROLLER.speech.get_path_name(),
                "clip": CONTROLLER.facial_animation.get_path_name(),
            }
        )
    if not CONTROLLER.get_editor_property("bPaused"):
        CONTROLLER.toggle_pause()
    FACE.set_position(t, False)
    STATE["started"] = time.monotonic()


# 함수 snapshot: 이름은 snapshot이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: 별도 입력 없음 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
def snapshot():
    i, t = STEPS[STATE["step"]]
    vertices = unreal.FeatureLabRuntimeLibrary.sample_final_skin_vertices(FACE, INDICES)
    # The skin helper refreshes LOD0 bones; use that same pose for alignment.
    head = FACE.get_socket_transform("head", unreal.RelativeTransformSpace.RTS_COMPONENT)
    positions = []
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 vertex의 값이 매번 바뀐다. 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    for vertex in vertices:
        p = unreal.MathLibrary.inverse_transform_location(head, vertex)
        # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
        positions.append([p.x, p.y, p.z])
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert len(positions) == len(INDICES) and all(
        math.isfinite(v) for p in positions for v in p
    )
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 bPaused이다.
    return {
        "index": i,
        "name": VARIANTS[i]["name"],
        "requested_time": t,
        "position": FACE.get_position(),
        "paused": CONTROLLER.get_editor_property("bPaused"),
        "audio_state": str(AUDIO.get_play_state()),
        "skin": positions,
        "curves": {n: FACE.get_anim_instance().get_curve_value(n) for n in NAMES},
    }


# 함수 finish: 이름은 finish이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: error 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
def finish(error=None):
    global WORLD, CONTROLLER, FACE, AUDIO
    STATE["done"] = True
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: HANDLE 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
    if HANDLE:
        # 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
        unreal.unregister_slate_post_tick_callback(HANDLE)
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: error
    if error:
        REPORT.update(status="failed", error=error)
    save()
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: CONTROLLER
    if CONTROLLER:
        CONTROLLER.select_facial_variant(0)
    # WORLD에 기준값 None을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
    WORLD = CONTROLLER = FACE = AUDIO = None


# 함수 tick: 이름은 tick이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: delta 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
def tick(delta):
    if STATE["done"] or STATE["busy"]:
        # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
        return
    STATE["busy"] = True
    # 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다. 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    try:
        if time.monotonic() - STATE["started"] < (2.0 if STATE["warmup"] else 0.45):
            # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
            return
        if STATE["warmup"]:
            # Initialize the CPU LOD0 skin path before taking the first baseline.
            unreal.FeatureLabRuntimeLibrary.sample_final_skin_vertices(FACE, INDICES)
            STATE.update(warmup=False, started=time.monotonic())
            # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
            return
        REPORT["samples"].append(snapshot())
        STATE["step"] += 1
        if STATE["step"] < len(STEPS):
            prepare()
            # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
            return
        samples = REPORT["samples"]
        neutral = samples[1]["skin"]
        # 반복에 쓸 정수 순서를 만든다. 끝 값은 포함되지 않는다.
        movement = {
            VARIANTS[i]["name"]: distance(samples[2 * i]["skin"], samples[2 * i + 1]["skin"])
            for i in range(len(VARIANTS))
        }
        # 반복에 쓸 정수 순서를 만든다. 끝 값은 포함되지 않는다.
        moods = {
            VARIANTS[i]["name"]: distance(neutral, samples[2 * i + 1]["skin"])
            for i in range(1, len(VARIANTS))
        }
        reset = distance(samples[0]["skin"], samples[-1]["skin"])
        intensity = distance(samples[3]["skin"], samples[27]["skin"])
        before = CONTROLLER.restart_count
        CONTROLLER.select_facial_variant(-1)
        CONTROLLER.select_facial_variant(len(VARIANTS))
        invalid_ignored = (
            CONTROLLER.restart_count == before and CONTROLLER.facial_variant_index == 0
        )
        CONTROLLER.select_facial_variant(len(VARIANTS) - 1)
        CONTROLLER.cycle_facial_variant()
        wrapped = CONTROLLER.facial_variant_index == 0
        selections = REPORT["selections"]
        checks = {
            "every_runtime_variant_selected": {s["index"] for s in selections}
            == set(range(14)),
            "every_selection_restarts_correct_clip": all(
                s["selected"] == s["index"]
                and s["clip"] == VARIANTS[s["index"]]["animation"]
                and abs(s["reset_position"]) < 0.0001
                for s in selections
            ),
            "every_selection_restarts_ai_audio": all(
                s["audio_playing_before_pause"]
                and "/AIEmotion/FeatureLabAISpeech." in s["speech"]
                for s in selections
            ),
            "paused_playheads_match_requested_times": all(
                s["paused"] and abs(s["position"] - s["requested_time"]) < 0.0001
                for s in samples
            ),
            "audio_pauses_with_face": all(
                "PAUSED" in s["audio_state"].upper() for s in samples
            ),
            "every_mood_has_speech_geometry_motion": all(v > 0.01 for v in movement.values()),
            "every_fixed_mood_changes_actual_face": all(
                v > 0.001 for n, v in moods.items() if n != "AutoDetect"
            ),
            "intensity_changes_actual_face": intensity > 0.001,
            "neutral_reset_repeats_actual_skin": reset < 0.001,
            "invalid_selection_ignored": invalid_ignored,
            "cycle_wraps_to_neutral": wrapped,
            "real_face_geometry": STATS.bones > 500 and STATS.vertices > 10000,
        }
        REPORT.update(
            status="passed" if all(checks.values()) else "failed",
            checks=checks,
            speech_geometry_motion_cm=movement,
            head_aligned_mood_geometry_difference_cm=moods,
            intensity_geometry_difference_cm=intensity,
            neutral_reset_skin_error_cm=reset,
            mesh={
                "bones": STATS.bones,
                "vertices": STATS.vertices,
                "triangles": STATS.triangles,
            },
        )
        finish()
    except Exception:
        finish(traceback.format_exc())
    finally:
        STATE["busy"] = False


prepare()
save()
# HANDLE: 나중에 콜백을 해제하기 위해 보관하는 등록 표식이다. 에디터 갱신 뒤 호출할 함수를 등록한다. 작업이 끝나면 핸들로 해제해야 반복 호출이 남지 않는다.
HANDLE = unreal.register_slate_post_tick_callback(tick)
RESULT = {"status": "running", "steps": len(STEPS), "output": str(OUT)}
```

<a id="source-lab-lab-test-face-runtime-py"></a>

### lab_test_face_runtime.py

```python
# 파일 역할: 완성 결과를 실제 값과 비교하는 검증 작업. 생성 코드와 검사 코드를 구분한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Capture/AS_AudioSpeech_MH58_Face

"""Measure real PIE facial curves, facial bones, playback, and deterministic scrub reset."""

import json
import time
import traceback
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

# ROOT: 프로젝트 루트 경로. 결과 파일을 어느 프로젝트에 쓰는지 정하는 기준이다.
ROOT = Path(unreal.Paths.project_dir()).resolve()
assert ROOT.name == "EpicFeatureLab"
OUT = ROOT / "Evidence" / "case02-face-runtime.json"
# 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
WORLD = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
assert WORLD, "Start PIE in FL_02_Performance first"
HERO = next(
    a
    for a in unreal.GameplayStatics.get_all_actors_of_class(WORLD, unreal.Actor)
    if a.get_name().startswith("BP_MH_MCP_Test_C")
)
FACE = next(
    c
    for c in HERO.get_components_by_class(unreal.SkeletalMeshComponent)
    if c.get_name() == "Face"
)
# 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 visibility_based_anim_tick_option이다.
FACE.set_editor_property(
    "visibility_based_anim_tick_option",
    unreal.VisibilityBasedAnimTickOption.ALWAYS_TICK_POSE_AND_REFRESH_BONES,
)
FACE = next(
    c
    for c in HERO.get_components_by_class(unreal.SkeletalMeshComponent)
    if c.get_name() == "Face"
)
ANIMATION_PATH = "/Game/FeatureLab/Capture/AS_AudioSpeech_MH58_Face"
# EditorAssetLibrary intentionally refuses asset operations during PIE.
# Generic runtime loading is required here.
# 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
ANIMATION = unreal.load_asset(ANIMATION_PATH)
assert ANIMATION, "Targeted facial animation must exist before changing playback"
FACE.play_animation(ANIMATION, True)
FACE.set_component_tick_enabled(True)
# JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
NAMES = [
    r["name"]
    for r in json.loads(
        (ROOT / "Evidence" / "case02-playback-build.json").read_text(encoding="utf-8")
    )["varying_curves"][:20]
]
# 반복에 쓸 정수 순서를 만든다. 끝 값은 포함되지 않는다.
BONES = [
    str(FACE.get_bone_name(i))
    for i in range(FACE.get_num_bones())
    if any(s in str(FACE.get_bone_name(i)).lower() for s in ["jaw", "lip", "eyelid"])
][:80]
START = time.monotonic()
SAMPLES = []
PHASES = {}
STATE = {"phase": "live", "last": -1.0, "phase_start": START, "done": False, "busy": False}
# HANDLE: 나중에 콜백을 해제하기 위해 보관하는 등록 표식이다.
HANDLE = None


# 함수 snapshot: 이름은 snapshot이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: 별도 입력 없음
def snapshot():
    instance = FACE.get_anim_instance()
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return {
        "elapsed": round(time.monotonic() - START, 3),
        "position": FACE.get_position(),
        "curves": {name: instance.get_curve_value(name) for name in NAMES},
        "bones": {
            name: [v for v in (lambda p: (p.x, p.y, p.z))(FACE.get_socket_location(name))]
            for name in BONES
        },
    }


# 함수 finish: 이름은 finish이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: report 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
def finish(report):
    STATE["done"] = True
    # 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
    unreal.unregister_slate_post_tick_callback(HANDLE)
    report.update(
        samples=SAMPLES,
        scrub=PHASES,
        visual_validation="pending",
        actor=HERO.get_path_name() if HERO else None,
        animation=ANIMATION_PATH,
    )
    OUT.write_text(json.dumps(report, indent=2), encoding="utf-8")


# 함수 tick: 이름은 tick이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: delta 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
def tick(delta):
    if STATE["done"] or STATE["busy"]:
        # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
        return
    STATE["busy"] = True
    # 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다. 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    try:
        elapsed = time.monotonic() - START
        if elapsed - STATE["last"] < 0.2:
            # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
            return
        STATE["last"] = elapsed
        phase = STATE["phase"]
        if phase == "live":
            # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
            SAMPLES.append(snapshot())
            # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: elapsed >= 5
            if elapsed >= 5:
                FACE.set_play_rate(0.0)
                FACE.set_position(0.0, False)
                STATE.update(phase="zero_before", phase_start=time.monotonic())
        elif time.monotonic() - STATE["phase_start"] >= 0.8:
            PHASES[phase] = snapshot()
            if phase == "zero_before":
                FACE.set_position(3.0, False)
                STATE.update(phase="speech", phase_start=time.monotonic())
            elif phase == "speech":
                FACE.set_position(0.0, False)
                STATE.update(phase="zero_after", phase_start=time.monotonic())
            else:
                varying_curves = {
                    name: max(s["curves"][name] for s in SAMPLES)
                    - min(s["curves"][name] for s in SAMPLES)
                    for name in NAMES
                }
                # 반복에 쓸 정수 순서를 만든다. 끝 값은 포함되지 않는다.
                moving_bones = {
                    name: max(
                        max(s["bones"][name][i] for s in SAMPLES)
                        - min(s["bones"][name][i] for s in SAMPLES)
                        for i in range(3)
                    )
                    for name in BONES
                }
                # 차이의 부호를 없애 크기만 비교한다. 오차 허용 범위 검사에 자주 사용한다.
                reset_error = max(
                    abs(
                        PHASES["zero_before"]["curves"][name]
                        - PHASES["zero_after"]["curves"][name]
                    )
                    for name in NAMES
                )
                checks = {
                    "playhead_advances": max(s["position"] for s in SAMPLES)
                    - min(s["position"] for s in SAMPLES)
                    > 1.0,
                    "live_curves_change": sum(v > 0.001 for v in varying_curves.values()) >= 3,
                    "facial_bones_move": sum(v > 0.001 for v in moving_bones.values()) >= 3,
                    "zero_scrub_repeats": reset_error < 0.0001,
                }
                FACE.set_play_rate(1.0)
                finish(
                    {
                        "status": "passed" if all(checks.values()) else "failed",
                        "checks": checks,
                        "curve_ranges": varying_curves,
                        "bone_motion_cm": moving_bones,
                        "reset_curve_error": reset_error,
                    }
                )
    except Exception:
        finish({"status": "failed", "error": traceback.format_exc()})
    finally:
        STATE["busy"] = False


# 문자열을 파일에 기록한다. 결과 JSON이나 보고서인지, 실제 코드·설정 파일인지 경로를 확인한다.
OUT.write_text(
    json.dumps({"status": "running", "visual_validation": "pending"}), encoding="utf-8"
)
# HANDLE: 나중에 콜백을 해제하기 위해 보관하는 등록 표식이다. 에디터 갱신 뒤 호출할 함수를 등록한다. 작업이 끝나면 핸들로 해제해야 반복 호출이 남지 않는다.
HANDLE = unreal.register_slate_post_tick_callback(tick)
RESULT = {"status": "running", "output": str(OUT)}
```

<a id="source-lab-lab-test-native-face-controls-py"></a>

### lab_test_native_face_controls.py

```python
# 파일 역할: 완성 결과를 실제 값과 비교하는 검증 작업. 생성 코드와 검사 코드를 구분한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

import json
import time
import traceback
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

# ROOT: 프로젝트 루트 경로. 결과 파일을 어느 프로젝트에 쓰는지 정하는 기준이다.
ROOT = Path(unreal.Paths.project_dir()).resolve()
assert ROOT.name == "EpicFeatureLab"
OUT = ROOT / "Evidence" / "case02-native-controls.json"
# 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
WORLD = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert WORLD
CONTROLLER = unreal.GameplayStatics.get_all_actors_of_class(
    WORLD, unreal.FeatureLabFacePlayback
)[0]
PC = unreal.GameplayStatics.get_player_controller(WORLD, 0)
FACE = CONTROLLER.get_face()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert FACE
AUDIO = CONTROLLER.get_component_by_class(unreal.AudioComponent)
INITIAL_CAMERA = PC.get_view_target()
STATE = {"phase": "play", "start": time.monotonic(), "done": False, "busy": False}
# REPORT: 이번 작업의 입력·측정·성공 여부를 모을 기록용 사전이다. 게임의 실행 상태 자체와는 다르다.
REPORT = {
    "status": "running",
    "initial_position": FACE.get_position(),
    "initial_restart_count": CONTROLLER.restart_count,
    "visual_validation": "pending",
}
# HANDLE: 나중에 콜백을 해제하기 위해 보관하는 등록 표식이다.
HANDLE = None


# 함수 finish: 이름은 finish이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: 별도 입력 없음 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
def finish():
    STATE["done"] = True
    # 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
    unreal.unregister_slate_post_tick_callback(HANDLE)
    OUT.write_text(json.dumps(REPORT, indent=2), encoding="utf-8")


# 함수 phase: 이름은 phase이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: name
def phase(name):
    STATE.update(phase=name, start=time.monotonic())


# 함수 tick: 이름은 tick이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: delta
def tick(delta):
    if STATE["done"] or STATE["busy"]:
        # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
        return
    STATE["busy"] = True
    # 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다.
    try:
        elapsed = time.monotonic() - STATE["start"]
        name = STATE["phase"]
        if name == "play" and elapsed > 1.0:
            REPORT["playing_position"] = FACE.get_position()
            REPORT["audio_is_playing"] = AUDIO.is_playing()
            CONTROLLER.toggle_pause()
            REPORT["paused_start"] = FACE.get_position()
            phase("paused")
        elif name == "paused" and elapsed > 0.8:
            REPORT["paused_end"] = FACE.get_position()
            CONTROLLER.toggle_pause()
            phase("resumed")
        elif name == "resumed" and elapsed > 1.0:
            REPORT["resumed_position"] = FACE.get_position()
            CONTROLLER.restart_playback()
            phase("reset")
        elif name == "reset" and elapsed > 0.12:
            REPORT["reset_position"] = FACE.get_position()
            REPORT["reset_count"] = CONTROLLER.restart_count
            CONTROLLER.toggle_camera()
            phase("camera")
        elif name == "camera" and elapsed > 0.35:
            REPORT["inspection_camera_selected"] = (
                PC.get_view_target() == CONTROLLER.inspection_camera
            )
            CONTROLLER.toggle_camera()
            phase("camera_return")
        elif name == "camera_return" and elapsed > 0.35:
            REPORT["original_camera_restored"] = PC.get_view_target() == INITIAL_CAMERA
            stats = unreal.FeatureLabRuntimeLibrary.inspect_mesh(FACE)
            REPORT["mesh_stats"] = {
                "bones": stats.bones,
                "vertices": stats.vertices,
                "triangles": stats.triangles,
                "materials": stats.materials,
                "physics_bodies": stats.physics_bodies,
            }
            # 차이의 부호를 없애 크기만 비교한다. 오차 허용 범위 검사에 자주 사용한다.
            checks = {
                "autoplay": REPORT["playing_position"] > REPORT["initial_position"] + 0.5,
                "pause_holds_position": abs(REPORT["paused_end"] - REPORT["paused_start"])
                < 0.0001,
                "resume_advances": REPORT["resumed_position"] > REPORT["paused_end"] + 0.5,
                "reset_returns_start": REPORT["reset_position"] < 0.35
                and REPORT["reset_count"] > REPORT["initial_restart_count"],
                "audio_playing": REPORT["audio_is_playing"],
                "camera_round_trip": REPORT["inspection_camera_selected"]
                and REPORT["original_camera_restored"],
                "real_rigged_face_geometry": stats.bones > 50 and stats.vertices > 1000,
            }
            REPORT.update(status="passed" if all(checks.values()) else "failed", checks=checks)
            finish()
    except Exception:
        REPORT.update(status="failed", error=traceback.format_exc())
        finish()
    finally:
        STATE["busy"] = False


OUT.write_text(json.dumps(REPORT), encoding="utf-8")
# HANDLE: 나중에 콜백을 해제하기 위해 보관하는 등록 표식이다. 에디터 갱신 뒤 호출할 함수를 등록한다. 작업이 끝나면 핸들로 해제해야 반복 호출이 남지 않는다.
HANDLE = unreal.register_slate_post_tick_callback(tick)
RESULT = {"status": "running", "output": str(OUT)}
```

<a id="source-source-mutablesample-featurelabmetahuman-cpp"></a>

### FeatureLabMetaHuman.cpp

```cpp
// 파일 역할: 01·02·08번의 실제 메타휴먼 피부·텍스처·변형 자료 처리
// 클래스=작업 종류, 객체=실제 한 개, 포인터(* 또는 TObjectPtr)=다른 객체를 가리키는 참조.
// nullptr은 대상 없음, bool은 참/거짓, TArray는 순서 있는 목록, FString은 문자열이다.
// WITH_EDITOR 구간은 에디터 빌드에서만 사용하는 코드다. 원본과의 토큰 비교 결과는 code-validation.json에 기록한다.

#include "FeatureLabRuntime.h"
// 빌드 조건에 따라 포함할 코드를 고른다. 게임 실행 중의 if 조건과 달리 빌드할 때 구분한다.
#if WITH_EDITOR
#include "MetaHumanCharacter.h"
#include "MetaHumanCharacterEditorSubsystem.h"
#include "Engine/Texture2D.h"
#include "Materials/MaterialInstance.h"
#include "Serialization/JsonSerializer.h"
#include "AssetRegistry/AssetRegistryModule.h"
#endif

// 【함수 역할】현재 객체와 실행 결과를 읽어 검증용 자료로 반환한다. 결과를 만드는 함수와 결과를 측정하는 함수를 구분해서 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
FString UFeatureLabRuntimeLibrary::InspectLabMetaHumanTextures(UObject *Object)
{
// 빌드 조건에 따라 포함할 코드를 고른다. 게임 실행 중의 if 조건과 달리 빌드할 때 구분한다.
#if WITH_EDITOR
    UMetaHumanCharacter *Character = Cast<UMetaHumanCharacter>(Object);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Character || !Character->GetPathName().StartsWith(TEXT("/Game/FeatureLab/Characters/")))
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return TEXT("{}");
    auto *Sub = UMetaHumanCharacterEditorSubsystem::Get();
    TSharedRef<FJsonObject> Report = MakeShared<FJsonObject>();
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    Report->SetBoolField(TEXT("synthesis_model_valid"), Sub->IsTextureSynthesisEnabled());
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    Report->SetBoolField(TEXT("has_stored_synthesis"), Character->HasSynthesizedTextures());
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    Report->SetBoolField(TEXT("has_high_resolution_sources"),
                         Character->HasHighResolutionTextures());
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    Report->SetNumberField(TEXT("preview_material"), (int32)Character->PreviewMaterialType);
    TArray<TSharedPtr<FJsonValue>> Textures;
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (const auto &Pair : Character->GetValidFaceTextures())
    {
        TSharedRef<FJsonObject> Item = MakeShared<FJsonObject>();
        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
        Item->SetNumberField(TEXT("type"), (int32)Pair.Key);
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (UTexture2D *Texture = Pair.Value)
        {
            // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
            Item->SetStringField(TEXT("asset"), Texture->GetPathName());
            // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
            Item->SetNumberField(TEXT("width"), Texture->GetSizeX());
            // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
            Item->SetNumberField(TEXT("height"), Texture->GetSizeY());
            // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
            Item->SetBoolField(TEXT("source_valid"), Texture->Source.IsValid());
        }
        Textures.Add(MakeShared<FJsonValueObject>(Item));
    }
    Report->SetArrayField(TEXT("valid_face_textures"), Textures);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (const auto *Ref = Sub->GetMetaHumanCharacterEditorData(Character))
    {
        const auto &Data = **Ref;
        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
        Report->SetNumberField(TEXT("cached_image_count"), Data.CachedSynthesizedImages.Num());
        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
        Report->SetNumberField(TEXT("face_texture_future_count"),
                               Data.SynthesizedFaceTexturesFutures.Num());
        TArray<TSharedPtr<FJsonValue>> Images;
        // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
        for (const auto &Pair : Data.CachedSynthesizedImages)
        {
            TSharedRef<FJsonObject> Item = MakeShared<FJsonObject>();
            // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
            Item->SetNumberField(TEXT("type"), (int32)Pair.Key);
            // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
            Item->SetNumberField(TEXT("width"), Pair.Value.SizeX);
            // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
            Item->SetNumberField(TEXT("height"), Pair.Value.SizeY);
            // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
            Item->SetNumberField(TEXT("bytes"), (double)Pair.Value.RawData.Num());
            Images.Add(MakeShared<FJsonValueObject>(Item));
        }
        Report->SetArrayField(TEXT("cached_images"), Images);
        TArray<TSharedPtr<FJsonValue>> Materials;
        Data.HeadMaterials.ForEachSkinMaterial<UMaterialInstance>(
            [&](EMetaHumanCharacterSkinMaterialSlot Slot, UMaterialInstance *Material) {
                TSharedRef<FJsonObject> Item = MakeShared<FJsonObject>();
                // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
                Item->SetNumberField(TEXT("slot"), (int32)Slot);
                // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
                Item->SetStringField(TEXT("material"),
                                     Material ? Material->GetPathName() : TEXT(""));
                // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
                for (const FName Name :
                     {FName(TEXT("Basecolor Original")), FName(TEXT("Basecolor Original VT"))})
                {
                    UTexture *Texture = nullptr;
                    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
                    if (Material &&
                        Material->GetTextureParameterValue(FMaterialParameterInfo(Name), Texture) &&
                        Texture)
                        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
                        Item->SetStringField(Name.ToString(), Texture->GetPathName());
                }
                Materials.Add(MakeShared<FJsonValueObject>(Item));
            });
        Report->SetArrayField(TEXT("skin_materials"), Materials);
    }
    FString Text;
    FJsonSerializer::Serialize(Report, TJsonWriterFactory<>::Create(&Text));
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return Text;
#else
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return TEXT("{}");
#endif
}

// 【함수 역할】이름은 EnableLabMetaHumanSkin이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
bool UFeatureLabRuntimeLibrary::EnableLabMetaHumanSkin(UObject *Object)
{
// 빌드 조건에 따라 포함할 코드를 고른다. 게임 실행 중의 if 조건과 달리 빌드할 때 구분한다.
#if WITH_EDITOR
    UMetaHumanCharacter *Character = Cast<UMetaHumanCharacter>(Object);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Character || !Character->GetPathName().StartsWith(TEXT("/Game/FeatureLab/Characters/")))
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return false;
    auto *Sub = UMetaHumanCharacterEditorSubsystem::Get();
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Sub->IsObjectAddedForEditing(Character) && !Sub->TryAddObjectToEdit(Character))
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return false;
    Sub->UpdateCharacterPreviewMaterial(Character,
                                        EMetaHumanCharacterSkinPreviewMaterial::Editable);
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return true;
#else
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return false;
#endif
}

// 【함수 역할】이름은 PublishLabMetaHumanSkinTextures이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
TArray<UObject *> UFeatureLabRuntimeLibrary::PublishLabMetaHumanSkinTextures(UObject *Object)
{
    TArray<UObject *> Result;
// 빌드 조건에 따라 포함할 코드를 고른다. 게임 실행 중의 if 조건과 달리 빌드할 때 구분한다.
#if WITH_EDITOR
    UMetaHumanCharacter *Character = Cast<UMetaHumanCharacter>(Object);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Character || !Character->GetPathName().StartsWith(TEXT("/Game/FeatureLab/Characters/")))
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return Result;
    auto *Sub = UMetaHumanCharacterEditorSubsystem::Get();
    const auto *Ref = Sub->GetMetaHumanCharacterEditorData(Character);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Ref)
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return Result;
    const auto &Data = **Ref;
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (const auto &Pair : Data.CachedSynthesizedImages)
    {
        const int32 Type = (int32)Pair.Key;
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (Type != 0 && Type != 4 && Type != 8)
            continue;
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (Pair.Value.SizeX <= 0 || Pair.Value.SizeY <= 0 || Pair.Value.RawData.IsEmpty())
            continue;
        const FString Name = FString::Printf(TEXT("%s_Skin_%d"), *Character->GetName(), Type);
        const FString PackageName = TEXT("/Game/FeatureLab/Crowds/SkinTextures/") + Name;
        UTexture2D *Texture = LoadObject<UTexture2D>(nullptr, *(PackageName + TEXT(".") + Name));
        const bool bNew = Texture == nullptr;
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (!Texture)
            Texture = NewObject<UTexture2D>(CreatePackage(*PackageName), *Name,
                                            RF_Public | RF_Standalone | RF_Transactional);
        Texture->Source.Init(Pair.Value);
        Texture->SRGB = Pair.Value.GammaSpace != EGammaSpace::Linear;
        Texture->CompressionSettings = Type == 4 ? TC_Normalmap : Type == 8 ? TC_Masks : TC_Default;
        Texture->LODGroup = Type == 4   ? TEXTUREGROUP_CharacterNormalMap
                            : Type == 8 ? TEXTUREGROUP_CharacterSpecular
                                        : TEXTUREGROUP_Character;
        Texture->PostEditChange();
        Texture->MarkPackageDirty();
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (bNew)
            FAssetRegistryModule::AssetCreated(Texture);
        Result.Add(Texture);
    }
#endif
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return Result;
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
