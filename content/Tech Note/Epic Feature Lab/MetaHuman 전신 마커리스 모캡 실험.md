카메라 영상 속 몸의 움직임을 읽어서, 언리얼에서 재생할 수 있는 뼈 애니메이션으로 만드는 실험이다. 몸에 반사 마커를 붙이는 방식이 아니라 영상에서 자세를 추정한다.

이번에는 사람을 촬영하지 않았다. 이미 만든 디지털 마네킹 장면에서 전신이 보이는 3초 영상을 따로 만들고, **그 영상을 실제 MetaHuman 몸 추적기에 넣어 처리했다.** 결과 파일만 만들어 둔 모의 실험이나, 기존 애니메이션을 추적 결과라고 바꿔 부른 작업이 아니다.

다만 입력은 합성 영상이다. 실제 사람 촬영에서의 정확도, 옷이나 가림에 대한 성능까지 검증한 결과는 아니다.

## 어떤 자료를 만들었나

![합성 전신 연구 입력 영상](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/MarkerlessMocap/synthetic-full-body-input.mp4)

영상 설명: 주황색 디지털 마네킹 하나가 머리부터 발끝까지 보이도록 만든 연구 입력이다. 소리는 없다. 원래 두 마네킹이 있던 렌더에서 한쪽을 잘라 720×880, 30fps, 90장의 프레임으로 준비했다.

| 순서 | 파일 또는 에셋 | 역할 |
|---|---|---|
| 입력 영상 | SyntheticFullBody.mp4 | 사람 촬영 대신 사용한 합성 연구 영상 |
| 연속 이미지 | frame_0001.png부터 frame_0090.png | 영상의 각 순간을 한 장씩 분리한 자료 |
| 이미지 소스 | IMG_SyntheticFullBody | 언리얼이 연속 이미지를 읽는 방법 |
| 촬영 자료 묶음 | FCD_SyntheticFullBody | 입력 이미지와 프레임 속도를 처리기에 전달 |
| 처리 작업 | MHP_SyntheticFullBody | 얼굴을 끄고 몸 추적을 실행하는 작업 에셋 |
| 출력 애니메이션 | AS_SyntheticFullBody | 실제로 추정한 뼈 움직임 |
| 출력 미리보기 메시 | SK_SyntheticFullBody | 추적 결과의 뼈대를 확인하는 표현 |

이름 앞의 IMG, FCD, MHP, AS, SK는 서로 다른 파일을 알아보기 위해 붙인 구분이다. 이름만 붙여서 기능이 생기는 것은 아니다.

## 1. 프로젝트와 플러그인 준비

실험용 프로젝트는 EpicCaptureStudy다. 기존 EpicFeatureLab의 제외 항목과 원본 파일은 그대로 두고 새 프로젝트에서 처리했다.

1. Unreal Engine 5.8.4로 빈 프로젝트를 연다.
2. 위쪽 Edit → Plugins를 누른다.
3. MetaHuman Animator와 MetaHuman 바디 마커리스 추적 플러그인이 설치되어 있는지 확인한다. 이 PC의 Fab 설치 항목은 [공식 몸 추적 플러그인](https://www.fab.com/listings/4095b8e0-3eff-44f1-acb4-cb40b99228b9)이다.
4. Python Editor Script Plugin과 Editor Scripting Utilities를 켠다. 아래의 자동 처리 코드를 실행할 때 필요하다.
5. 일반 영상 가져오기 경로까지 사용할 경우 Capture Manager Editor도 켠다.
6. 필요한 재시작을 마친다.

이번 실험의 몸 추적 플러그인은 실험 단계 기능이었다. Windows에서 오프라인으로 계산한 뒤 애니메이션을 내보냈다. 패키징한 게임이 플레이 도중 웹캠 영상을 실시간 전신 추적한 실험은 아니다.

MetaHuman Creator는 완성된 캐릭터 외형을 만들거나 해당 캐릭터를 미리보기 대상으로 지정할 때 별도로 필요할 수 있다. 이번 검증은 Performer Skeleton으로 내보낸 뼈대까지이며, 피부와 의상이 있는 완성 캐릭터에 리타기팅한 결과로 표시하지 않았다.

## 2. 영상을 연속 PNG로 준비

영상을 30fps로 나누면 3초 동안 90장의 이미지가 생긴다. 한 장이 한 순간을 뜻한다. 폴더에는 다른 사진을 섞지 않는다.

아래 명령은 FFmpeg가 설치된 Windows 터미널에서 실행한다. 실행 파일을 찾지 못하면 ffmpeg 대신 설치한 ffmpeg.exe의 전체 경로를 쓴다. 영상과 출력 폴더 경로는 본인 위치로 바꾼다.

FFmpeg가 처음이라면 [공식 다운로드 안내](https://ffmpeg.org/download.html)에서 Windows 실행 파일을 준비한다. 탐색기에서 영상 폴더를 연 뒤 주소 표시줄에 powershell을 입력하고 Enter를 누르면 그 위치에서 명령 창을 열 수 있다. 실행 파일 전체 경로를 쓸 때는 PowerShell에서 & '실행 파일 경로' 형태로 시작한다.

입력 자료를 만든 실제 가공 명령은 아래와 같다. 공개한 SyntheticFullBody 영상을 그대로 쓸 경우 이 가공 단계는 건너뛰고 PNG 분리부터 시작하면 된다. 원본 DigitalPerformance 영상은 앞서 만든 디지털 연기 렌더이며, 사람 촬영이 아니다.

```powershell
# 두 마네킹이 있는 원본에서 왼쪽 한 명의 전신 영역만 선택한다.
# crop의 네 숫자는 가로 크기, 세로 크기, 왼쪽 시작 위치, 위쪽 시작 위치다.
ffmpeg -i 'DigitalBodyHubReplay_02.DigitalPerformance.mp4' -t 3 -vf 'crop=360:440:320:180,scale=720:880,setsar=1' -r 30 -an -c:v libx264 -crf 18 -pix_fmt yuv420p 'SyntheticFullBody.mp4'
```

```powershell
# 먼저 출력용 폴더를 만든다. 이미 있어도 내용을 삭제하지 않는다.
New-Item -ItemType Directory -Force 'C:/CaptureStudy/Inputs/SyntheticFrames'
# 입력 영상에서 초당 30장을 PNG로 저장한다.
ffmpeg -i 'C:/CaptureStudy/Inputs/SyntheticFullBody.mp4' -vf fps=30 'C:/CaptureStudy/Inputs/SyntheticFrames/frame_%04d.png'
```

이 글의 입력 영상은 이미 30fps다. 새로운 실제 촬영 영상을 사용할 때는 머리와 발이 잘리지 않는지, 한 사람을 계속 볼 수 있는지, 팔다리가 오래 가려지지 않는지 먼저 확인한다. 상세 촬영 조건은 [공식 촬영 지침](https://dev.epicgames.com/documentation/metahuman/metahuman-animator-performance-capture-guidelines-in-unreal-engine)을 따른다.

## 3. 촬영 자료를 만드는 두 경로

이번에 **실제로 사용한 경로는 아래 전체 Python 코드로 연속 PNG와 Footage Capture Data를 연결하는 방식**이다. 프레임 수와 입력을 고정해 반복 실험하기 위해 선택했다.

일반 영상 파일을 화면에서 가져오려면 Live Link Hub의 Capture Manager에서 Mono Video 장치를 추가하고, 영상이 있는 Source Folder를 고른 다음 Add to Queue → Start로 가져올 수 있다. 이 경로도 최종적으로 Performance에 넘길 Footage Capture Data를 준비하는 과정이다. 이번 PNG 연구 경로를 Live Link Hub로 가져온 것처럼 기록하지 않았다.

단어 뜻: Mono Video는 단일 카메라 영상, Ingest는 촬영 자료를 작업용 형식으로 가져오기, Source Folder는 원본 영상 폴더, Queue는 처리 대기 목록이다.

처음 따라 한다면 이 글의 입력 영상을 저장하고, 연속 PNG를 만든 뒤 맨 아래 전체 코드를 실행하는 쪽이 이번 실험과 가장 가깝다. 코드 상단의 FRAMES 경로를 PNG 폴더로 바꾼다.

## 4. Performance에서 몸 추적 설정 확인

1. 코드 실행 후 Content Browser에서 Study/Capture를 연다.
2. MHP_SyntheticFullBody를 더블 클릭한다.
3. 오른쪽 Details의 Input Type이 Monocular Footage인지 확인한다.
4. Footage Capture Data에 FCD_SyntheticFullBody가 지정되었는지 본다.
5. Camera는 Camera 0을 선택한다.
6. 아래 Processing Parameters에서 Facial Tracking을 끄고 Body Tracking을 켠다.
7. Head Movement Mode는 Disabled로 둔다.

![실제 입력 영상과 몸 추적 결과](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/MarkerlessMocap/03-performance-monocular-input.png)

화면 용어: Input Type은 입력 종류, Monocular Footage는 단일 카메라 촬영 영상, Footage Capture Data는 촬영 자료 묶음, Camera는 사용할 카메라 입력, Timecode Alignment는 입력 시간 기준을 맞추는 방법이다. Image Review는 원본 이미지 확인, A/B Viewport는 비교 미리보기다.

![몸 추적과 얼굴 추적 설정](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/MarkerlessMocap/04-body-tracking-settings.png)

화면 용어: Processing Parameters는 처리 설정, Facial Tracking은 얼굴 추적, Body Tracking은 몸 추적, Head Movement Mode는 머리 움직임 처리 방식, Disabled는 사용 안 함이다. Show Skeleton은 뼈대 표시, Skeleton Color는 뼈대 표시 색이다.

얼굴 추적을 끈 이유는 이번에 몸만 확인하기 위해서다. 영상에 얼굴이 선명하게 담기지 않았는데 얼굴까지 처리했다고 말하지 않도록 범위를 나눴다.

## 5. Process로 실제 계산

1. 위쪽 Process를 누른다.
2. 처리가 끝날 때까지 기다린다. 아래의 자동 코드를 실행했다면 이미 같은 처리가 시작된 상태이므로 Process를 다시 누르지 않는다.
3. 왼쪽 원본 영상과 오른쪽 보라색 뼈대가 함께 보이는지 확인한다.
4. 아래 시간 막대를 앞뒤로 옮겨 몸 자세가 달라지는지 본다.

오른쪽은 계산한 뼈대다. 원본 마네킹의 색이나 피부를 다시 만드는 과정이 아니다. 팔·다리의 방향과 몸 자세를 애니메이션 값으로 바꾸는 것이 이 단계의 목적이다.

## 6. 애니메이션으로 내보내기

1. Export Animation을 누른다.
2. 얼굴 내보내기는 끄고 몸 내보내기를 켠다.
3. Skeleton은 Performer Skeleton을 선택한다.
4. Study/Capture에 AS_SyntheticFullBody라는 이름으로 저장한다.
5. 생성된 Animation Sequence를 더블 클릭한다.

![내보낸 애니메이션의 실제 트랙과 시점 수](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/MarkerlessMocap/02-exported-animation-and-tracks.png)

화면 용어: Export Animation은 애니메이션 에셋으로 내보내기, Performer Skeleton은 처리한 대상의 뼈대 기준 출력, Preview Mesh는 미리보기용 메시, Number of Tracks는 저장된 뼈 트랙 수, Number of Sampled Keys는 저장된 시점 수, Number of Sampled Frames는 그 시점 사이의 프레임 구간 수, Rate Scale은 재생 속도 배율이다.

![실제 몸 추적 결과 애니메이션의 에디터 미리보기](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/MarkerlessMocap/body-animation-preview.gif)

GIF 설명: 실제로 내보낸 애니메이션을 언리얼의 Animation Sequence 미리보기에서 재생하며 캡처했다. 확인용으로 간격을 두고 기록한 화면이므로 원본 30fps의 시간 간격을 재현한 영상은 아니다. 선으로 된 출력은 추정한 뼈대를 보여 주며, 완성된 MetaHuman 피부나 의상까지 적용한 결과는 아니다.

## 7. 파일이 생긴 것에서 한 단계 더 확인

이번에는 출력 에셋이 있다는 것만 보지 않고 실제 값도 확인했다.

| 검사 | 확인 결과 |
|---|---|
| 애니메이션 길이 | 약 2.9667초 |
| 저장 시점 | 90개 |
| 시점 사이 구간 | 89개 |
| 저장된 뼈 트랙 | 342개 |
| 0초와 1.5초 비교 | 골반 등 여러 뼈의 위치·회전 값 변화 확인 |
| 골반 위치 변화 | 약 3.81cm |
| 골반 회전 변화 | 약 7.06도 |

첫 시점을 0초로 두고 30fps에서 90개 시점을 저장하면 마지막 시점은 89/30초다. 그래서 길이가 3.0000초가 아니라 약 2.9667초로 보인다.

342개는 출력에 저장된 트랙 수다. 342개 관절을 각각 완벽하게 검출했다거나 모든 트랙이 독립적으로 움직였다는 의미는 아니다.

위치와 회전 차이는 해당 뼈의 부모를 기준으로 저장한 포즈 값을 비교한 것이다. 실제 사람의 이동 거리를 측정하거나 추적 오차를 계산한 값은 아니다.

### 중간에 헷갈렸던 검사 함수

이 버전에서 contains_animation_data()는 얼굴 자료만 확인했다. 몸 전용 추적이 성공해도 False가 나왔고, 얼굴 기준 processed frames 값도 0이었다.

그래서 이 값 하나로 실패라고 판단하지 않았다. can_export_animation()을 확인하고 실제 출력 애니메이션의 시점 수, 뼈 트랙, 두 시점의 자세 변화를 검사했다. 아래 코드의 검증 부분이 그 처리다.

## 8. 실제 처리와 검증에 사용한 전체 코드

새 프로젝트의 Tools → Execute Python Script로 실행한다. FRAMES를 본인의 연속 PNG 폴더로 바꾸고 .py로 저장한다. 한 번 실행하면 입력 에셋 생성, 몸 추적, 내보내기, 움직임 검사를 순서대로 진행한다.

파일을 처음 만들 때는 메모장에 아래 코드를 전부 붙여 넣고 다른 이름으로 저장을 누른다. 파일 형식은 모든 파일, 인코딩은 UTF-8로 고른 뒤 body_study.py라는 이름으로 저장한다. body_study.py.txt로 저장되지 않았는지도 확인한다. 그다음 언리얼의 Tools 메뉴에서 이 파일을 선택한다. 일반 Windows Python으로 더블 클릭해 실행하는 파일은 아니다.

계산 중 에디터를 멈추지 않으려고 완료 여부를 주기적으로 확인하도록 했다. 처리 중에는 같은 파일을 다시 실행하지 않는다. 기존 Study/Capture 실험을 덮어쓰지 않도록 같은 이름의 에셋이 있으면 중단한다. 다시 실험하려면 FOLDER를 새 경로로 바꾼다.

```python
"""연속된 전신 이미지에서 몸 움직임을 계산하고, 실제 출력 값을 확인한다."""
import json
import math
import time
import traceback
from pathlib import Path
import unreal

# 본인의 PNG 폴더로 바꾼다. 한 폴더 안에 시간순 이미지 90장이 들어 있다.
FRAMES = Path("C:/CaptureStudy/Inputs/SyntheticFrames")
# /Game은 프로젝트의 Content 폴더를 가리키는 언리얼 내부 주소다.
# 반복 실험은 Capture02처럼 새 이름으로 바꾼다.
FOLDER = "/Game/Study/Capture"
FPS = 30
OUTPUT = Path(unreal.Paths.project_saved_dir()) / "body-study-result.json"
report = {"input_kind": "synthetic whole-body video", "status": "preparing"}

def save_report():
    # 한글이 깨지지 않도록 UTF-8로 저장한다.
    OUTPUT.write_text(json.dumps(report, ensure_ascii=False, indent=2),
                      encoding="utf-8")

if not FRAMES.is_dir():
    raise RuntimeError("PNG 폴더를 찾지 못했다. FRAMES 경로를 확인한다.")
if len(list(FRAMES.glob("*.png"))) != 90:
    raise RuntimeError("이번 연구 입력은 PNG 90장이다. 프레임 추출 결과를 확인한다.")
if not hasattr(unreal, "MetaHumanPerformance"):
    raise RuntimeError("MetaHuman Animator 플러그인을 켠 뒤 재시작한다.")

library = unreal.EditorAssetLibrary
tools = unreal.AssetToolsHelpers.get_asset_tools()
# 이미 있는 실험을 덮어쓰지 않는다. 기존 결과가 있으면 FOLDER를 바꾼다.
for name in ["IMG_SyntheticFullBody", "FCD_SyntheticFullBody",
             "MHP_SyntheticFullBody", "AS_SyntheticFullBody"]:
    if library.does_asset_exist(FOLDER + "/" + name):
        raise RuntimeError("같은 이름의 실험이 있다. FOLDER에 새 폴더를 지정한다.")
library.make_directory(FOLDER)

# 1. PNG를 각각의 텍스처로 가져오는 대신, 연속 이미지 소스를 만든다.
# 재생 속도를 지정해야 90장이 30fps, 즉 약 3초 입력으로 읽힌다.
images = tools.create_asset("IMG_SyntheticFullBody", FOLDER,
                           unreal.ImgMediaSource, unreal.ImgMediaSourceFactoryNew())
images.set_sequence_path(str(FRAMES))
images.set_editor_property("frame_rate_override", unreal.FrameRate(FPS, 1))
library.save_loaded_asset(images, False)

# 2. 처리기에 전달할 촬영 자료 묶음을 만든다.
# 여기에는 이미지 소스와 촬영 속도 정보가 들어간다.
capture = tools.create_asset("FCD_SyntheticFullBody", FOLDER,
                            unreal.FootageCaptureData,
                            unreal.FootageCaptureDataFactory())
capture.set_editor_property("image_sequences", [images])
metadata = unreal.FootageCaptureMetadata()
metadata.set_editor_property("frame_rate", float(FPS))
metadata.set_editor_property("device_class", unreal.FootageDeviceClass.UNSPECIFIED)
capture.set_editor_property("metadata", metadata)
library.save_loaded_asset(capture, False)

# 3. 얼굴 처리와 몸 처리는 별도 옵션이다. 이번에는 몸만 처리한다.
performance = tools.create_asset("MHP_SyntheticFullBody", FOLDER,
                                unreal.MetaHumanPerformance,
                                unreal.MetaHumanPerformanceFactoryNew())
performance.set_editor_property("input_type", unreal.DataInputType.MONO_FOOTAGE)
performance.set_editor_property("face_tracking", False)
performance.set_editor_property("body_tracking", True)
performance.set_editor_property("footage_capture_data", capture)
performance.set_editor_property("camera", "Camera 0")
performance.set_editor_property("head_movement_mode",
                               unreal.PerformanceHeadMovementMode.DISABLED)
# 계산을 기다리는 동안에도 에디터가 화면을 갱신할 수 있게 한다.
performance.set_blocking_processing(False)
library.save_loaded_asset(performance, False)
if not performance.can_process():
    raise RuntimeError("처리를 시작할 수 없다. 입력 자료와 플러그인 상태를 확인한다.")
started = time.monotonic()
result = performance.start_pipeline(True)
if result != unreal.StartPipelineErrorType.NONE:
    raise RuntimeError("처리 시작 오류: " + str(result))
report["status"] = "processing"
save_report()
state = {"handle": None, "finished": False}

def finish_when_ready(delta_seconds):
    # 이 함수는 에디터가 화면을 갱신할 때마다 불린다.
    # 같은 결과를 두 번 내보내지 않도록 finished를 기록한다.
    if state["finished"]:
        return
    if performance.is_processing():
        if time.monotonic() - started < 900:
            return
        performance.cancel_pipeline()
        state["finished"] = True
        unreal.unregister_slate_post_tick_callback(state["handle"])
        report.update(status="timeout", message="15분 안에 처리가 끝나지 않았다.")
        save_report()
        return

    state["finished"] = True
    unreal.unregister_slate_post_tick_callback(state["handle"])
    try:
        # 몸 전용 결과를 얼굴용 검사 함수 하나로 판단하지 않는다.
        if not performance.can_export_animation():
            raise RuntimeError("내보낼 얼굴 또는 몸 애니메이션이 없다.")
        settings = unreal.MetaHumanPerformanceExportUtils.get_export_animation_sequence_settings(performance)
        settings.set_editor_property("show_export_dialog", False)
        settings.set_editor_property("package_path", FOLDER)
        settings.set_editor_property("asset_name", "AS_SyntheticFullBody")
        settings.set_editor_property("auto_save_anim_sequence", True)
        settings.set_editor_property("export_face", False)
        settings.set_editor_property("export_body", True)
        settings.set_editor_property("export_skeleton",
                                    unreal.PerformanceExportSkeleton.PERFORMER_SKELETON)
        animation = unreal.MetaHumanPerformanceExportUtils.export_animation_sequence(
            performance, settings)
        if not animation:
            raise RuntimeError("내보내기 후 애니메이션 에셋을 받지 못했다.")
        library.save_loaded_asset(performance, False)
        library.save_loaded_asset(animation, False)

        # 4. 파일 존재뿐 아니라 실제 뼈 트랙과 움직임도 확인한다.
        tracks = list(unreal.AnimationLibrary.get_animation_track_names(animation))
        moving = []
        for bone in tracks:
            # 같은 뼈의 0초와 1.5초 자세를 읽는다.
            first = unreal.AnimationLibrary.get_bone_pose_for_time(
                animation, bone, 0.0, False)
            second = unreal.AnimationLibrary.get_bone_pose_for_time(
                animation, bone, 1.5, False)
            distance = sum((getattr(first.translation, axis) -
                            getattr(second.translation, axis)) ** 2
                           for axis in ["x", "y", "z"]) ** 0.5
            # 회전을 저장하는 네 값의 내적으로 두 자세 사이 회전 각도를 구한다.
            dot = abs(sum(getattr(first.rotation, axis) *
                          getattr(second.rotation, axis)
                          for axis in ["x", "y", "z", "w"]))
            degrees = math.degrees(2 * math.acos(min(1.0, dot)))
            if distance > 0.00001 or degrees > 0.001:
                moving.append({"bone": str(bone), "distance_cm": distance,
                               "rotation_degrees": degrees})
        keys = unreal.AnimationLibrary.get_num_keys(animation)
        if len(tracks) < 10 or keys < 30 or len(moving) < 3:
            raise RuntimeError("입력의 움직임이 출력에 충분히 들어왔는지 재확인한다.")
        report.update(status="verified-body-animation",
                      animation=animation.get_path_name(),
                      duration_seconds=animation.get_play_length(),
                      sample_keys=keys,
                      frame_intervals=unreal.AnimationLibrary.get_num_frames(animation),
                      bone_track_count=len(tracks), moving_bones=moving)
        unreal.log("몸 추적과 실제 애니메이션 검증 완료: " + str(OUTPUT))
    except Exception:
        report.update(status="failed", error=traceback.format_exc())
        unreal.log_error(report["error"])
    save_report()

# 처리 완료를 기다리는 함수를 등록한다. 끝나면 함수 안에서 해제한다.
state["handle"] = unreal.register_slate_post_tick_callback(finish_when_ready)

```

## 9. 어디까지 확인했고 무엇이 남았나

합성 전신 영상에서 시작해서 실제 몸 추적과 뼈 애니메이션 내보내기, 언리얼 미리보기와 포즈 값 검증까지 확인했다.

실제 사람 영상의 정확도 비교, 다양한 옷이나 가림 조건, 발 미끄러짐 보정, 완성된 MetaHuman 캐릭터로의 리타기팅은 이번 검증 범위에 넣지 않았다. 해당 결과가 필요하면 별도 입력과 대상 캐릭터를 준비해 추가로 확인해야 한다.

이번 게임잼 기획에서는 이 전신 영상 추적을 사용하지 않는다. 기존 Maya·Fab 애니메이션과 디지털 연기 파이프라인은 별도로 활용할 수 있다.

**설치 자료, 입력 영상, 추적 결과, 모델 가중치는 삭제하지 않았다.** 특히 플러그인의 학습 모델은 단순 임시 캐시가 아니라 추적 실행에 필요한 자료다. 나중에 이 기능을 더 사용하지 않기로 결정했을 때 설치 파일과 캐시를 구분해서 정리한다.

참고: [MetaHuman Animator 시작하기](https://dev.epicgames.com/documentation/metahuman/getting-started-with-metahuman-animator), [단일 카메라 영상 처리](https://dev.epicgames.com/documentation/metahuman/metahuman-animation-from-mono-video-capture-in-unreal-engine), [처리와 내보내기](https://dev.epicgames.com/documentation/metahuman/metahuman-animator-02-process-and-export-your-animation-in-unreal-engine).
