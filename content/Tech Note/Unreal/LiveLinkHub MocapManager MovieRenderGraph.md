

이번에는 실제 사람을 촬영하지 않았다. 디지털 캐릭터 애니메이션을 별도 송신기에서 내보내고, Live Link Hub가 받아 녹화하도록 했다. 녹화 자료를 다시 재생해 Mocap Manager의 테이크로 저장한 뒤 Movie Render Graph로 영상을 만들었다.

도구 셋의 역할은 `신호 수신·중계 → 촬영 자료 정리 → 최종 영상 출력`으로 나눠 보면 된다. FBX 파일을 하나 가져오는 것만으로 이 세 과정을 사용했다고 처리하지 않았다.

![녹화 테이크와 기준 애니메이션의 실제 렌더 결과](Tech%20Note/Unreal/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/16/result.png)

## 완성된 리뷰부터 보기

1. `Content → FeatureLab → Maps → FL_16_DigitalPerformance`를 연다.
2. **▶ Play**를 누른다. 왼쪽은 녹화 테이크, 오른쪽은 디지털 기준 애니메이션이다.
3. **P**로 왼쪽의 녹화 결과를 멈추고 다시 재생한다.
4. **R**로 처음부터 재생한다.
5. **■ Stop** 후 `Content → FeatureLab → Cinematics → LS_LabDigitalReview`를 연다. 이것이 리뷰 장면의 시퀀스다.

![실제 실행 영상](Tech%20Note/Unreal/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/16/review.mp4)

[실제 MRG 출력 MP4 열기 — 3초·무음](Tech%20Note/Unreal/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/16/review.mp4)

## 1단계: Hub가 받을 신호 만들기

별도 디지털 송신기는 공식 디지털 애니메이션의 뼈 93개에 대한 이름과 변환을 전송했다. 변환은 뼈의 위치·회전·크기 정보다. 공급자 이름은 `FeatureLab Digital Animation`, Subject는 `FeatureLab_Body`다. Subject는 Hub 안에서 구분하는 신호 이름이다.

실제 송신 코드는 [FeatureLabLiveLink.cpp](#source-source-mutablesample-featurelablivelink-cpp)에 있다. 일반 PIE를 실행할 때 같은 송신기가 중복으로 생기지 않도록 전용 실행 옵션을 확인하는 조건을 넣었다. 송신기가 두 개면 녹화본을 보고 있는지 생방송을 보고 있는지 헷갈릴 수 있다.

## 2단계: Hub 녹화와 재생을 구분하기

Hub에서 디지털 소스를 수신해 실제 녹화 파일 `EpicFeatureLab_DigitalBody_tk01.uasset`을 만들었다. 파일은 약 8.10MB다. 이 파일은 게임 캐릭터 블루프린트가 아니라 Hub의 원시 녹화 자료다.

녹화가 끝나면 **원래 송신기를 종료한 상태에서** Hub 녹화본을 재생했다. 움직이는 프레임 18개가 서로 다른지, 정지하면 수신 포즈도 멈추는지, 첫 프레임으로 돌아갔을 때 93개 뼈 변환이 다시 같은지 확인했다.

외부 타임코드가 없는 이번 디지털 실험은 평가 모드를 Latest로 사용했다. 평가 모드를 바꾸면 버퍼가 비워질 수 있어 녹화 자료를 다시 재생해야 했다. Hub 녹화본을 열면 클라이언트 연결이 초기화되는 조건도 있어, 녹화본을 연 뒤 에디터를 다시 연결하는 순서로 확인했다.

## 3단계: 촬영 세션과 퍼포머 준비

Mocap Manager에는 `EpicFeatureLab` 제작과 `20261101_DigitalAnimation` 세션을 만들었다. 제작은 작업 전체, 세션은 그 안의 한 촬영 묶음, 퍼포머는 신호를 받아 움직일 대상, 테이크는 한 번 녹화한 결과로 이해하면 된다.

프로젝트의 `Cinematics/Productions/EpicFeatureLab/20261101_DigitalAnimation` 아래에 Performers, Takes, Scene 등의 자료가 있다. 퍼포머는 `Lab_DigitalPerformer`, 연결 Subject는 앞서 정한 `FeatureLab_Body`다. 이름을 다르게 입력하면 신호가 있어도 엉뚱한 대상을 찾을 수 있다.

![시퀀서와 촬영 자료를 확인하는 실제 에디터](Tech%20Note/Unreal/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/16/folder.png)

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
| `Live Link Hub` | 애니메이션 스트림을 받고 기록·재생하는 별도 프로그램. |
| `Source / Subject` | 데이터를 보내는 연결 / 그 연결에서 구분하는 대상 이름. |
| `Mocap Manager` | 촬영 제작·세션·테이크를 관리하는 도구. |
| `Production / Session / Stage` | 제작 단위 / 촬영 세션 / 촬영 환경 단위. |
| `Performer / Take` | 연기 대상 / 한 번 기록한 촬영 결과. |
| `Sequencer / Level Sequence` | 시간 순서로 동작을 편집하는 도구 / 타임라인 에셋. |
| `Track / Frame / FPS` | 시간에 따라 자료를 놓는 줄 / 한 장면 / 초당 프레임 수. |
| `Movie Render Graph / MRG` | 영상 출력 작업을 노드로 구성하는 도구 / 그 약칭. |
| `Render Layer / Output` | 렌더 대상 레이어 / 출력. |
| `Warmup` | 본 촬영 전에 계산·화면 상태를 안정시키는 준비 프레임. |
| `PNG / MP4 / H.264` | 정지 이미지 파일 / 동영상 컨테이너 / 이번 동영상의 영상 압축 형식. |
| `Master_720p / Review_360p` | 정식 1280×720 출력 / 가벼운 640×360 검토 출력 이름. |
| `LS_LabDigitalReview / MRG_LabDigitalPerformance` | 몸 동작을 비교하는 타임라인 / 그 타임라인을 출력하는 그래프 이름. |


세션 생성과 대상 등록은 전체 소스의 `lab_create_capture_session_deferred.py`, `lab_build_mocap_performer.py`에 있다. 이미 존재하는 세션에서 생성 스크립트를 반복 실행하지 않고, 완성 자료의 구조와 연결부터 확인한다.

## 4단계: 정식 테이크 02 저장하기

초기 24fps 시험 테이크와 정식 결과를 구분했다. 정식 결과는 **DigitalBodyHubReplay_02**, 30fps, 약 5.86초다. 원시 Live Link 트랙에는 837개 채널이 있고, 재사용할 수 있는 스켈레탈 애니메이션도 함께 만들었다.

원시 채널 수는 뼈 93개 × 위치·회전·크기 각 3축, 총 9값과 대응한다. 채널은 시간에 따른 개별 숫자 기록이다. 테이크 데이터베이스에 Live Link 사용 여부가 기록됐는지도 확인했다. 단순히 폴더에 영상이 있다는 것과 촬영 도구가 정상 테이크로 관리한다는 것은 다르다.

## 5단계: 리뷰 시퀀스와 카메라 만들기

`LS_LabDigitalReview`는 원본 테이크를 덮어쓰지 않고, 녹화 결과의 애니메이션으로 별도 편집했다. 카메라와 좌우 비교 구도를 만들고 촬영 스테이지의 불필요한 표시를 숨겼다. 이 시퀀스는 30fps의 90프레임, 즉 3초다.

원시 테이크, 재사용 애니메이션, 편집된 리뷰 시퀀스는 각각 다른 결과물이다. 나중에 수정할 때 어느 것을 열어야 하는지 구분해 두면 원본 촬영을 보존하기 쉽다.

## 6단계: Movie Render Graph로 출력하기

`Cinematics/MRG_LabDigitalPerformance`를 더블클릭한다. 렌더 그래프는 출력 설정과 처리 흐름을 노드로 구성하는 파일이다. `MRQ_LabDigitalPerformance`에는 세 출력 작업이 있다.

![실제 Movie Render Graph](Tech%20Note/Unreal/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/16/settings.png)

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
| `Live Link Hub` | 애니메이션 스트림을 받고 기록·재생하는 별도 프로그램. |
| `Source / Subject` | 데이터를 보내는 연결 / 그 연결에서 구분하는 대상 이름. |
| `Mocap Manager` | 촬영 제작·세션·테이크를 관리하는 도구. |
| `Production / Session / Stage` | 제작 단위 / 촬영 세션 / 촬영 환경 단위. |
| `Performer / Take` | 연기 대상 / 한 번 기록한 촬영 결과. |
| `Sequencer / Level Sequence` | 시간 순서로 동작을 편집하는 도구 / 타임라인 에셋. |
| `Track / Frame / FPS` | 시간에 따라 자료를 놓는 줄 / 한 장면 / 초당 프레임 수. |
| `Movie Render Graph / MRG` | 영상 출력 작업을 노드로 구성하는 도구 / 그 약칭. |
| `Render Layer / Output` | 렌더 대상 레이어 / 출력. |
| `Warmup` | 본 촬영 전에 계산·화면 상태를 안정시키는 준비 프레임. |
| `PNG / MP4 / H.264` | 정지 이미지 파일 / 동영상 컨테이너 / 이번 동영상의 영상 압축 형식. |
| `Master_720p / Review_360p` | 정식 1280×720 출력 / 가벼운 640×360 검토 출력 이름. |
| `LS_LabDigitalReview / MRG_LabDigitalPerformance` | 몸 동작을 비교하는 타임라인 / 그 타임라인을 출력하는 그래프 이름. |


| 작업 | 해상도 | 확인한 결과 |
|---|---|---|
| Master_720p | 1280×720 | PNG 90장 + H.264 MP4 1개 |
| Review_360p | 640×360 | PNG 90장 + H.264 MP4 1개 |
| Reset_720p | 1280×720 | 원래 출력값 복구 후 동일 형식 출력 |

해상도는 가로·세로 픽셀 수다. H.264는 MP4 안에 들어간 영상 압축 방식이다. 파일 확장자가 mp4라는 사실만 보지 않고 실제 코덱, 크기, 프레임 수와 재생 길이도 확인했다. 기본값으로 복귀한 결과의 0·45·89번 프레임은 원래 720p 결과와 픽셀 차이가 0이었다.

고해상도 원본은 [review.mp4](Tech%20Note/Unreal/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/16/review.mp4)에 함께 넣었다. GIF에는 소리가 없다.

전체 그래프 작성: [lab_build_movie_graph.py](#source-lab-lab-build-movie-graph-py). 리뷰 작성: [lab_build_capture_review.py](#source-lab-lab-build-capture-review-py). 렌더 실행: [lab_render_movie_graph.py](#source-lab-lab-render-movie-graph-py). 에디터가 백그라운드일 때 미리보기가 멈추면 실시간 뷰포트와 수신 재생 상태도 확인한다.


## 편집 화면을 더 자세히 보기

![왼쪽 기록 동작과 오른쪽 기준 동작을 연결한 타임라인](Tech%20Note/Unreal/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/16/sequencer.png)

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
| `Live Link Hub` | 애니메이션 스트림을 받고 기록·재생하는 별도 프로그램. |
| `Source / Subject` | 데이터를 보내는 연결 / 그 연결에서 구분하는 대상 이름. |
| `Mocap Manager` | 촬영 제작·세션·테이크를 관리하는 도구. |
| `Production / Session / Stage` | 제작 단위 / 촬영 세션 / 촬영 환경 단위. |
| `Performer / Take` | 연기 대상 / 한 번 기록한 촬영 결과. |
| `Sequencer / Level Sequence` | 시간 순서로 동작을 편집하는 도구 / 타임라인 에셋. |
| `Track / Frame / FPS` | 시간에 따라 자료를 놓는 줄 / 한 장면 / 초당 프레임 수. |
| `Movie Render Graph / MRG` | 영상 출력 작업을 노드로 구성하는 도구 / 그 약칭. |
| `Render Layer / Output` | 렌더 대상 레이어 / 출력. |
| `Warmup` | 본 촬영 전에 계산·화면 상태를 안정시키는 준비 프레임. |
| `PNG / MP4 / H.264` | 정지 이미지 파일 / 동영상 컨테이너 / 이번 동영상의 영상 압축 형식. |
| `Master_720p / Review_360p` | 정식 1280×720 출력 / 가벼운 640×360 검토 출력 이름. |
| `LS_LabDigitalReview / MRG_LabDigitalPerformance` | 몸 동작을 비교하는 타임라인 / 그 타임라인을 출력하는 그래프 이름. |



<!-- korean-ui-explanations -->


## 별도 프로그램인 Live Link Hub 화면

![추가 촬영 시점의 실제 Live Link Hub](Tech%20Note/Unreal/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/16/live-link-hub.jpg)

| 화면의 영어 | 한국어 뜻과 확인할 곳 |
|---|---|
| Live Data | 실시간 스트림을 보는 화면 배치. 이 사진은 재생 검증 완료 당시 화면을 재현한 것이 아니라 추가 촬영 시점의 UI다. |
| Session / Slate / Take | Hub 기록 세션 이름 / 촬영 구분 이름 / 테이크 번호. Mocap Manager의 Production·Session 구조와 별도로 읽는다. |
| Record | 들어오는 자료를 기록하는 버튼. 이 사진에서는 녹화를 새로 시작하지 않았다. |
| Data Devices / Sources | 입력 장치 목록 / 데이터 송신 연결 목록. |
| FeatureLab Digital Animation | 이 프로젝트에서 보낸 디지털 애니메이션 연결의 이름. |
| FeatureLab_Body / Animation | 몸 애니메이션 대상 이름 / 이 대상이 사용하는 데이터 역할. |
| Recordings List / Choose Recording Folder / Reset to Default | 기록 목록 / 기록 폴더 선택 / 기본 폴더로 복구. |
| Clients / Add Client | 데이터를 받을 클라이언트 목록 / 받을 대상 추가. |
| Machine / Level / Status | 컴퓨터 이름 / 연결된 맵 / 연결 상태. |
| Connected / Disconnected | 연결됨 / 연결되지 않음. |
| Details / Client Details | 선택한 입력의 상세 정보 / 선택한 클라이언트의 상세 정보. |
| Recording Path | 기록을 저장하는 경로. |
| FPS / ms / Mem | 초당 프레임 수 / 한 프레임 시간(밀리초) / 메모리 사용량. 이 UI 숫자를 이번 실험의 고정 성능 수치로 쓰지 않았다. |
| Playback / Capture Manager | 재생용 / 반입 관리용 화면 배치 이름. Capture Manager를 Mocap Manager와 같은 이름으로 바꾸어 설명하지 않는다. |

사진의 클라이언트 맵이 `FL_01_DigitalHuman`인 것은 블로그용 메타휴먼 촬영 뒤 확인한 현재 연결 상태이기 때문이다. 16번의 원 송신기 종료·Hub 재생·테이크 녹화 검증은 앞에서 설명한 실제 기록과 take 02를 기준으로 읽는다.


## Mocap Manager에서 선택한 제작·세션 확인하기

1. Content Browser에서 `FeatureLab → Maps → FL_16_DigitalPerformance`를 먼저 연다.
2. 이 프로젝트에서 사용한 [lab_open_mocap_manager.py](#source-lab-lab-open-mocap-manager-py)를 에디터의 **Tools → Execute Python Script**로 실행한다. 이 파일은 Take Recorder 패널과 엔진의 `EW_MocapManager` 작업 창을 연다.
3. 위쪽 Production과 Session에 실제 사용할 제작·세션 이름이 표시되는지 확인한다. 이번 값은 아래 사진과 같다.
4. 새 세션을 만들기 전에는 기존 세션을 선택하는 **Swap Session**과 새로 만드는 **Create New Session**을 구분한다.

![실제 디지털 촬영 세션을 연 Mocap Manager](Tech%20Note/Unreal/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/16/mocap-manager.png)

| 화면의 영어 | 한국어 뜻과 역할 |
|---|---|
| Mocap Manager | 촬영 작업을 관리하는 도구 창. |
| Production / Session | 제작 전체 / 그 제작 안의 한 촬영 묶음. 사진 위쪽의 현재 선택값을 먼저 읽는다. |
| EpicFeatureLab / 20261101_DigitalAnimation | 이번 프로젝트에서 등록한 제작 / 디지털 애니메이션 세션 이름. |
| Stage / Motion / Face / Cameras | 촬영 환경 / 몸 동작 / 얼굴 / 카메라 관련 단계. 각 단계 표시가 모든 입력 종류를 실제 사용했다는 뜻은 아니다. |
| Record / Review | 테이크 기록 / 기록 결과 검토 단계. |
| Create New Production / Create New Session | 새 제작 / 새 촬영 세션 만들기. |
| New Session Name / New Session Notes | 새 세션 이름 / 그 세션에 남길 메모. |
| + Session | 입력한 조건으로 새 세션을 추가하는 버튼. 이번 캡처에서는 새로 추가하지 않았다. |
| Swap Session / Production List | 기존 세션 선택 전환 / 제작 목록. |
| Name Template Details / Template | 폴더·이름 생성 규칙 상세 / 그 규칙을 담은 자료. |
| Root Folder | 작업 결과를 구성할 프로젝트 콘텐츠의 시작 경로. |
| Production Name / Session Name | 이름 규칙에서 사용할 제작·세션 이름 값. 위쪽의 현재 선택된 제작·세션 표시와 읽는 위치를 구분한다. |
| Session Token | 세션 이름 규칙에서 치환하는 항목. |
| Folders / Session Folder / Session Subfolders | 폴더 규칙 / 세션 폴더 / 그 아래에 만드는 하위 폴더. |
| Take Recorder | 실제 테이크 녹화를 수행하는 도구 연결. |
| Admin | 관리용 설정 묶음. |
| Digital animation and Hub replay validation | 디지털 애니메이션과 Hub 재생을 확인한 세션이라는 메모. |
| 녹색 체크 / 빨간 느낌표 | 해당 UI 단계가 준비됐다는 표시 / 확인할 조건이 있다는 표시. 실제 데이터가 기록·재생됐는지는 테이크와 검증 기록으로 별도 확인한다. |

추가 촬영에서는 Hub 맵에서 관리창을 열어 둔 채 16번 맵으로 바꿀 때 `Set Facial Target Folder Error. No valid session template found for Current Session` 로그를 관찰했다. 한국어로는 ‘현재 세션의 유효한 템플릿을 찾지 못해 얼굴 결과 저장 폴더를 설정하지 못했다’는 뜻이다. 관리창을 다시 연 뒤에도 이 경로의 UI 경고가 관찰돼, 얼굴 저장 폴더 UI까지 정상이라고 기록하지 않았다.

이번 16번의 실제 검증 대상은 디지털 **몸** 스트림의 수신·Hub 재생·take 02 녹화·영상 출력이다. 이 경고와 녹색 단계 표시를 기존 몸 테이크의 검증 결과와 섞지 않는다. 얼굴 애니메이션 생성은 2편의 MetaHuman Animator에서 따로 설명했다.


<a id="code-index"></a>

## 이 장면을 만든 코드

아래는 제작과 검증에 사용한 전체 코드에 한국어 주석을 더한 설명본이다. `.py`는 언리얼 에디터에서 실행하는 제작·검사 코드, `.cpp`와 `.h`는 프로젝트에 넣어 빌드하는 코드다. 파일마다 첫 주석에 역할과 입력 조건을 적었다.


<a id="source-lab-lab-build-capture-review-py"></a>

### lab_build_capture_review.py

```python
# 파일 역할: 에셋·그래프·장면을 구성하는 제작 작업. 이미 있는 원본을 대상으로 재실행해도 되는지 가드 조건부터 읽는다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Cinematics/LS_LabDigitalReview
#   /Game/FeatureLab/Cinematics

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, unreal
from pathlib import Path

root = Path(unreal.Paths.project_dir()).resolve()
assert root.name == "EpicFeatureLab"
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert not unreal.TakeRecorderBlueprintLibrary.is_recording()
# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
actors = unreal.get_editor_subsystem(unreal.EditorActorSubsystem)
lib = unreal.EditorAssetLibrary
assets = unreal.AssetToolsHelpers.get_asset_tools()
structure = json.loads((root / "Evidence/case16-take-structure.json").read_text())
clip = unreal.load_asset(structure["animations"][0]["asset"])
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert clip


# 함수 actor: 이름은 actor이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: cls, label, loc 지정한 클래스의 실제 액터를 편집 장면에 만든다. 에셋 파일 생성과는 다르다.
def actor(cls, label, loc):
    # 지정한 클래스의 실제 액터를 편집 장면에 만든다. 에셋 파일 생성과는 다르다.
    a = next(
        (a for a in actors.get_all_level_actors() if a.get_actor_label() == label), None
    ) or actors.spawn_actor_from_class(cls, unreal.Vector(*loc))
    a.set_actor_label(label)
    a.tags = ["FeatureLab_Owned", "FeatureLab_16"]
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return a


# 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
source = next(
    a
    for a in actors.get_all_level_actors()
    if a.get_actor_label() == "FL16_DigitalAnimationSource"
)
# 액터 방향을 바꾼다. 위치 이동과 구분한다.
source.set_actor_rotation(unreal.Rotator(pitch=0, yaw=180, roll=0), False)
# 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
light = next(
    a for a in actors.get_all_level_actors() if a.get_actor_label() == "FL16_KeySoftbox"
)
# 액터 위치를 바꾼다. 별도 이동 시뮬레이션이 소유한 상태까지 자동 초기화되는지는 확인해야 한다.
light.set_actor_location(unreal.Vector(0, -500, 450), False, False)
# 액터 방향을 바꾼다. 위치 이동과 구분한다.
light.set_actor_rotation(
    unreal.MathLibrary.find_look_at_rotation(
        light.get_actor_location(), unreal.Vector(0, 0, 100)
    ),
    False,
)
lc = light.get_component_by_class(unreal.RectLightComponent)
lc.set_intensity(18000.0)
lc.set_editor_properties({"source_width": 900.0, "source_height": 600.0})
labels = []
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 (label, text, x)의 값이 매번 바뀐다. 액터 방향을 바꾼다. 위치 이동과 구분한다.
for label, text, x in [
    ("FL16_ReferenceLabel", "DIGITAL REFERENCE", -180),
    ("FL16_TakeLabel", "RECORDED TAKE 02", 180),
]:
    a = actor(unreal.TextRenderActor, label, (x, -15, 225))
    # 액터 방향을 바꾼다. 위치 이동과 구분한다.
    a.set_actor_rotation(unreal.Rotator(pitch=0, yaw=-90, roll=0), False)
    tc = a.get_component_by_class(unreal.TextRenderComponent)
    tc.set_text(text)
    tc.set_world_size(13.0)
    tc.set_horizontal_alignment(unreal.HorizTextAligment.EHTA_CENTER)
    a.set_actor_hidden_in_game(True)
    # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    labels.append(a)
review = actor(unreal.SkeletalMeshActor, "FL16_RecordedTakeReview", (180, 0, 0))
# 액터 방향을 바꾼다. 위치 이동과 구분한다.
review.set_actor_rotation(unreal.Rotator(pitch=0, yaw=180, roll=0), False)
body = review.get_component_by_class(unreal.SkeletalMeshComponent)
body.set_skeletal_mesh_asset(
    source.get_component_by_class(unreal.SkeletalMeshComponent).get_skeletal_mesh_asset()
)
body.override_animation_data(clip, False, False, 0, 1)
review.set_actor_hidden_in_game(True)
camera = actor(unreal.CineCameraActor, "FL16_ReviewCamera", (0, -850, 185))
# 액터 방향을 바꾼다. 위치 이동과 구분한다.
camera.set_actor_rotation(
    unreal.MathLibrary.find_look_at_rotation(
        camera.get_actor_location(), unreal.Vector(0, 0, 100)
    ),
    False,
)
component = camera.get_cine_camera_component()
# component.current_focal_length에 기준값 40.0을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
component.current_focal_length = 40.0
focus = component.focus_settings
focus.focus_method = unreal.CameraFocusMethod.DISABLE
component.focus_settings = focus
# component.constrain_aspect_ratio에 기준값 False을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
component.constrain_aspect_ratio = False
pp = component.post_process_settings
# 여러 속성을 이름:값 사전으로 한 번에 설정한다. 각 항목이 개별 설정과 대응한다.
pp.set_editor_properties(
    {
        "override_auto_exposure_min_brightness": True,
        "override_auto_exposure_max_brightness": True,
        "auto_exposure_min_brightness": 4.0,
        "auto_exposure_max_brightness": 4.0,
        "override_auto_exposure_bias": True,
        "auto_exposure_bias": 0.0,
    }
)
component.post_process_settings = pp
path = "/Game/FeatureLab/Cinematics/LS_LabDigitalReview"
# 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
seq = unreal.load_asset(path)
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not seq 지정한 경로·이름·종류로 새 에셋을 만든다. 같은 이름의 원본이 있는지 검사하는 코드와 함께 읽는다.
if not seq:
    # 지정한 경로·이름·종류로 새 에셋을 만든다. 같은 이름의 원본이 있는지 검사하는 코드와 함께 읽는다.
    seq = assets.create_asset(
        "LS_LabDigitalReview",
        "/Game/FeatureLab/Cinematics",
        unreal.LevelSequence,
        unreal.LevelSequenceFactoryNew(),
    )
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert seq
seq.set_display_rate(unreal.FrameRate(30, 1))
seq.set_playback_start(0)
seq.set_playback_end(90)
bindings = {str(b.get_name()): b for b in seq.get_bindings()}
binding = bindings.get(review.get_actor_label()) or seq.add_possessable(review)
track = next(
    (t for t in binding.get_tracks() if isinstance(t, unreal.MovieSceneSkeletalAnimationTrack)),
    None,
) or binding.add_track(unreal.MovieSceneSkeletalAnimationTrack)
section = next(iter(track.get_sections()), None) or track.add_section()
section.set_range(0, 90)
params = section.params
params.animation = clip
# params.force_custom_mode에 기준값 True을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
params.force_custom_mode = True
section.params = params
visibility = []
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 (target, visible)의 값이 매번 바뀐다. 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
for target, visible in (
    [(review, True)]
    + [(a, True) for a in labels]
    + [
        (a, False)
        for a in actors.get_all_level_actors()
        if isinstance(a, unreal.CapturePerformer)
        or a.get_actor_label() == "FL16_VirtualCaptureStage"
    ]
):
    binding = bindings.get(target.get_actor_label()) or seq.add_possessable(target)
    track = next(
        (t for t in binding.get_tracks() if isinstance(t, unreal.MovieSceneVisibilityTrack)),
        None,
    ) or binding.add_track(unreal.MovieSceneVisibilityTrack)
    s = next(iter(track.get_sections()), None) or track.add_section()
    s.set_range(0, 90)
    unreal.MovieSceneSectionExtensions.get_all_channels(s)[0].set_default(visible)
    visibility.append({"actor": target.get_actor_label(), "visible_during_review": visible})
binding = bindings.get(camera.get_actor_label()) or seq.add_possessable(camera)
cut_track = next(
    (t for t in seq.get_tracks() if isinstance(t, unreal.MovieSceneCameraCutTrack)), None
) or seq.add_track(unreal.MovieSceneCameraCutTrack)
cut = next(iter(cut_track.get_sections()), None) or cut_track.add_section()
cut.set_range(0, 90)
identifier = unreal.MovieSceneObjectBindingID()
identifier.set_editor_property("guid", binding.get_id())
cut.set_camera_binding_id(identifier)
# JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
lib.set_metadata_tag(
    seq,
    "FeatureLabSourceTake",
    json.loads((root / "Evidence/case16-mocap-take.json").read_text())["sequence"],
)
lib.set_metadata_tag(seq, "FeatureLabSourceAnimation", clip.get_path_name())
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
assert lib.save_loaded_asset(seq, False)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
assert unreal.get_editor_subsystem(unreal.LevelEditorSubsystem).save_all_dirty_levels()
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "status": "review_sequence_saved",
    "sequence": seq.get_path_name(),
    "captured_animation": clip.get_path_name(),
    "raw_take_preserved": True,
    "review_actor": review.get_path_name(),
    "camera": camera.get_path_name(),
    "visibility": visibility,
    "frame_range": [0, 90],
    "frame_rate": 30,
}
(root / "Evidence/case16-cinematic-review-authoring.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-build-capture-scene-py"></a>

### lab_build_capture_scene.py

```python
# 파일 역할: 에셋·그래프·장면을 구성하는 제작 작업. 이미 있는 원본을 대상으로 재실행해도 되는지 가드 조건부터 읽는다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Maps/FL_16_DigitalPerformance
#   /Game/FeatureLab/Cinematics
#   /Game/Characters/UEFN_Mannequin/Meshes/SKM_UEFN_Mannequin
#   /Game/Characters/UEFN_Mannequin/Animations/Idle/M_Neutral_Stand_Idle_Break_v06
#   /Game/FeatureLab/Lighting/M_LabRoomWhite
#   /Game/FeatureLab/Cinematics/Productions
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
assets = unreal.AssetToolsHelpers.get_asset_tools()
# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
editor = unreal.get_editor_subsystem(unreal.LevelEditorSubsystem)
# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
actors = unreal.get_editor_subsystem(unreal.EditorActorSubsystem)
path = "/Game/FeatureLab/Maps/FL_16_DigitalPerformance"
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world().get_name() != 'FL_16_DigitalPerformance' 작업할 맵을 연다. 현재 맵과 다른 맵이므로 실행 중인 PIE를 먼저 끝내는지 확인한다.
if (
    unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world().get_name()
    != "FL_16_DigitalPerformance"
):
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 작업할 맵을 연다. 현재 맵과 다른 맵이므로 실행 중인 PIE를 먼저 끝내는지 확인한다.
    assert editor.load_level(path) if lib.does_asset_exist(path) else editor.new_level(path)


# 함수 actor: 이름은 actor이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: cls, label, position 지정한 클래스의 실제 액터를 편집 장면에 만든다. 에셋 파일 생성과는 다르다.
def actor(cls, label, position):
    # 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
    found = [a for a in actors.get_all_level_actors() if a.get_actor_label() == label]
    # 지정한 클래스의 실제 액터를 편집 장면에 만든다. 에셋 파일 생성과는 다르다.
    obj = found[0] if found else actors.spawn_actor_from_class(cls, unreal.Vector(*position))
    obj.set_actor_label(label)
    obj.tags = ["FeatureLab_Owned", "FeatureLab_16"]
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return obj


mesh = lib.load_asset("/Game/Characters/UEFN_Mannequin/Meshes/SKM_UEFN_Mannequin")
# 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
animation = lib.load_asset(
    "/Game/Characters/UEFN_Mannequin/Animations/Idle/M_Neutral_Stand_Idle_Break_v06"
)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert mesh and animation
source = actor(unreal.SkeletalMeshActor, "FL16_DigitalAnimationSource", (-180, 0, 0))
source.skeletal_mesh_component.set_skeletal_mesh_asset(mesh)
source.skeletal_mesh_component.override_animation_data(animation, True, True, 0.0, 1.0)
# 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 visibility_based_anim_tick_option이다.
source.skeletal_mesh_component.set_editor_property(
    "visibility_based_anim_tick_option",
    unreal.VisibilityBasedAnimTickOption.ALWAYS_TICK_POSE_AND_REFRESH_BONES,
)
source.skeletal_mesh_component.set_update_animation_in_editor(True)
# 액터 방향을 바꾼다. 위치 이동과 구분한다.
source.set_actor_rotation(unreal.Rotator(pitch=0, yaw=-90, roll=0), False)
publisher = actor(unreal.FeatureLabLiveLinkSource, "FL16_LiveLinkPublisher", (0, 0, 0))
# 여러 속성을 이름:값 사전으로 한 번에 설정한다. 각 항목이 개별 설정과 대응한다.
publisher.set_editor_properties(
    {
        "source_actor": source,
        "source_component_name": source.skeletal_mesh_component.get_fname(),
        "bPublishInEditor": True,
    }
)
publisher.set_publishing(True)
floor = actor(unreal.StaticMeshActor, "FL16_Stage", (0, 0, -10))
floor.static_mesh_component.set_static_mesh(lib.load_asset("/Engine/BasicShapes/Cube"))
# 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
floor.static_mesh_component.set_material(
    0, lib.load_asset("/Game/FeatureLab/Lighting/M_LabRoomWhite")
)
floor.set_actor_scale3d(unreal.Vector(16, 12, 0.2))
light = actor(unreal.RectLight, "FL16_KeySoftbox", (-400, -450, 450))
# 액터 방향을 바꾼다. 위치 이동과 구분한다.
light.set_actor_rotation(
    unreal.MathLibrary.find_look_at_rotation(
        light.get_actor_location(), unreal.Vector(0, 0, 100)
    ),
    False,
)
component = light.get_component_by_class(unreal.RectLightComponent)
component.set_mobility(unreal.ComponentMobility.MOVABLE)
component.set_intensity_units(unreal.LightUnits.LUMENS)
component.set_intensity(12000)
component.set_editor_properties({"source_width": 500.0, "source_height": 400.0})
camera = actor(unreal.CineCameraActor, "FL16_PerformanceCamera", (0, -1100, 300))
# 액터 방향을 바꾼다. 위치 이동과 구분한다.
camera.set_actor_rotation(
    unreal.MathLibrary.find_look_at_rotation(
        camera.get_actor_location(), unreal.Vector(0, 0, 105)
    ),
    False,
)
component = camera.get_cine_camera_component()
component.set_editor_property("current_focal_length", 35.0)
focus = component.get_editor_property("focus_settings")
focus.set_editor_property("focus_method", unreal.CameraFocusMethod.DISABLE)
component.set_editor_property("focus_settings", focus)
component.set_editor_property("constrain_aspect_ratio", False)
pp = component.get_editor_property("post_process_settings")
# 여러 속성을 이름:값 사전으로 한 번에 설정한다. 각 항목이 개별 설정과 대응한다.
pp.set_editor_properties(
    {
        "override_auto_exposure_min_brightness": True,
        "override_auto_exposure_max_brightness": True,
        "auto_exposure_min_brightness": 2.0,
        "auto_exposure_max_brightness": 2.0,
        "override_auto_exposure_bias": True,
        "auto_exposure_bias": 0.0,
    }
)
component.set_editor_property("post_process_settings", pp)
actor(unreal.PlayerStart, "FL16_PlayerStart", (0, -1100, 300))
# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 편집 중인 월드를 얻는다. 게임 실행 월드와 다르므로 대상을 혼동하지 않는다.
world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world()
# 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 default_game_mode이다.
world.get_world_settings().set_editor_property(
    "default_game_mode",
    lib.load_asset("/Game/FeatureLab/Crowds/BP_LabCrowdGameMode").generated_class(),
)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert editor.save_current_level()
editor.pilot_level_actor(camera)
folder = "/Game/FeatureLab/Cinematics"
settings = unreal.get_default_object(unreal.PerformanceCaptureSettings)
tables = {}
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 (name, struct)의 값이 매번 바뀐다. 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
for name, struct in [
    ("DT_LabCaptureSessions", unreal.PCapSessionRecord),
    ("DT_LabCaptureProductions", unreal.PCapProductionRecord),
]:
    table = lib.load_asset(folder + "/" + name)
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not table 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 struct이다.
    if not table:
        factory = unreal.PCapDataTableFactory()
        factory.set_editor_property("struct", struct.static_struct())
        # 지정한 경로·이름·종류로 새 에셋을 만든다. 같은 이름의 원본이 있는지 검사하는 코드와 함께 읽는다.
        table = assets.create_asset(name, folder, unreal.PCapDataTable, factory)
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert table
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
    assert lib.save_loaded_asset(table, False)
    tables[name] = table
settings.set_session_table(tables["DT_LabCaptureSessions"])
settings.set_production_table(tables["DT_LabCaptureProductions"])
template = lib.load_asset(folder + "/DST_LabDigitalSession")
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not template 기존 에셋을 다른 경로로 복제한다. 복제본이 참조하는 다른 에셋까지 모두 독립 복제되는지는 별도로 확인한다.
if not template:
    # 기존 에셋을 다른 경로로 복제한다. 복제본이 참조하는 다른 에셋까지 모두 독립 복제되는지는 별도로 확인한다.
    template = lib.duplicate_asset(
        "/PerformanceCaptureWorkflow/Core/DefaultSessionTemplate",
        folder + "/DST_LabDigitalSession",
    )
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert template
template.call_method(
    "SetRootFolder", (unreal.DirectoryPath("/Game/FeatureLab/Cinematics/Productions"),)
)
template.call_method("SetProductionName", ("EpicFeatureLab",))
template.call_method("SetSessionName", ("DigitalAnimation",))
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
assert lib.save_loaded_asset(template, False)
settings.set_default_session_template(template)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "status": "digital_stage_and_capture_databases_saved",
    "map": path,
    "source_mesh": mesh.get_path_name(),
    "source_animation": animation.get_path_name(),
    "publisher": {
        "actor": publisher.get_path_name(),
        "bones": publisher.get_editor_property("published_bone_count"),
        "frames": publisher.get_editor_property("frames_published"),
    },
    "tables": {k: v.get_path_name() for k, v in tables.items()},
    "template": template.get_path_name(),
    "source_policy": "Digital animation only. No RealityScan or markerless capture, deletion or cache cleanup.",
}
(root / "Evidence/case16-stage-authoring.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-build-mocap-performer-py"></a>

### lab_build_mocap_performer.py

```python
# 파일 역할: 에셋·그래프·장면을 구성하는 제작 작업. 이미 있는 원본을 대상으로 재실행해도 되는지 가드 조건부터 읽는다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Cinematics/Productions/EpicFeatureLab/20261101_DigitalAnimation/Performers/Lab_DigitalPerformer
#   /Game/Characters/UEFN_Mannequin/Meshes/SKM_UEFN_Mannequin
#   /Game/Characters/UEFN_Mannequin/Rigs/IK_UEFN_Mannequin

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, unreal
from pathlib import Path

root = Path(unreal.Paths.project_dir()).resolve()
vm = unreal.find_object(None, "/Engine/Transient.VM_PCapWorkflow_C_0")
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert vm
settings = unreal.get_default_object(unreal.PerformanceCaptureSettings)
# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
actors = unreal.get_editor_subsystem(unreal.EditorActorSubsystem)
# 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
stage = next(
    (
        a
        for a in actors.get_all_level_actors()
        if a.get_actor_label() == "FL16_VirtualCaptureStage"
    ),
    None,
)
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not stage 지정한 클래스의 실제 액터를 편집 장면에 만든다. 에셋 파일 생성과는 다르다.
if not stage:
    # 지정한 클래스의 실제 액터를 편집 장면에 만든다. 에셋 파일 생성과는 다르다.
    stage = actors.spawn_actor_from_class(
        settings.get_editor_property("stage_root"), unreal.Vector(100, 0, 0)
    )
    stage.set_actor_label("FL16_VirtualCaptureStage")
    stage.tags = ["FeatureLab_Owned", "FeatureLab_16"]
# 액터 방향을 바꾼다. 위치 이동과 구분한다.
stage.set_actor_rotation(unreal.Rotator(pitch=0, yaw=-90, roll=0), False)
mesh = unreal.load_asset("/Game/Characters/UEFN_Mannequin/Meshes/SKM_UEFN_Mannequin")
rig = unreal.load_asset("/Game/Characters/UEFN_Mannequin/Rigs/IK_UEFN_Mannequin")
subject = unreal.LiveLinkSubjectName(name="FeatureLab_Body")
# 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 PerformerColor이다.
vm.call_method(
    "UpdatePerformerProperties",
    (
        unreal.Name("Lab_DigitalPerformer"),
        vm.get_editor_property("PerformerColor"),
        unreal.CapturePerformer.static_class(),
        subject,
        mesh,
        mesh,
        rig,
    ),
)
folder = "/Game/FeatureLab/Cinematics/Productions/EpicFeatureLab/20261101_DigitalAnimation/Performers/Lab_DigitalPerformer"
asset = unreal.load_asset(folder + "/CPF_Lab_DigitalPerformer")
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not asset
if not asset:
    created = vm.call_method("CreatePerformerDataAsset", ())
    asset = created[1] if isinstance(created, tuple) else created
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert asset
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert asset
# 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
performer = next(
    (
        a
        for a in actors.get_all_level_actors()
        if isinstance(a, unreal.CapturePerformer)
        and a.get_actor_label() == "Lab_DigitalPerformer"
    ),
    None,
)
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not performer
if not performer:
    performer = vm.call_method("SpawnPerformerFromDataAsset", (asset,))
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert performer
performer.attach_to_actor(
    stage,
    unreal.Name("None"),
    unreal.AttachmentRule.SNAP_TO_TARGET,
    unreal.AttachmentRule.SNAP_TO_TARGET,
    unreal.AttachmentRule.KEEP_WORLD,
    False,
)
performer.set_mocap_mesh(mesh)
performer.set_live_link_subject(subject)
performer.set_evaluate_live_link_data(True)
body = performer.get_component_by_class(unreal.SkeletalMeshComponent)
body.set_update_animation_in_editor(True)
# 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 visibility_based_anim_tick_option이다.
body.set_editor_property(
    "visibility_based_anim_tick_option",
    unreal.VisibilityBasedAnimTickOption.ALWAYS_TICK_POSE_AND_REFRESH_BONES,
)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
assert unreal.get_editor_subsystem(unreal.LevelEditorSubsystem).save_all_dirty_levels()
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "status": "performer_created_bound_and_saved",
    "stage": stage.get_path_name(),
    "performer_asset": asset.get_path_name(),
    "actor": performer.get_path_name(),
    "mesh": body.get_skeletal_mesh_asset().get_path_name(),
    "subject": str(performer.get_live_link_subject().get_editor_property("name")),
    "live_evaluation": performer.get_evaluate_live_link_data(),
    "animation_class": str(body.get_editor_property("anim_class")),
    "proportion_policy": "The digital source and performer use the identical Epic UEFN skeleton and mesh proportions; no physical performer measurements are used.",
}
(root / "Evidence/case16-mocap-performer.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-build-movie-graph-py"></a>

### lab_build_movie_graph.py

```python
# 파일 역할: 에셋·그래프·장면을 구성하는 제작 작업. 이미 있는 원본을 대상으로 재실행해도 되는지 가드 조건부터 읽는다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Cinematics
#   /Game/FeatureLab/Maps/FL_16_DigitalPerformance.FL_16_DigitalPerformance

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, unreal
from pathlib import Path

root = Path(unreal.Paths.project_dir()).resolve()
assert root.name == "EpicFeatureLab"
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert not unreal.TakeRecorderBlueprintLibrary.is_recording()
lib = unreal.EditorAssetLibrary
assets = unreal.AssetToolsHelpers.get_asset_tools()
folder = "/Game/FeatureLab/Cinematics"
path = folder + "/MRG_LabDigitalPerformance"
# 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
graph = unreal.load_asset(path)
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not graph 지정한 경로·이름·종류로 새 에셋을 만든다. 같은 이름의 원본이 있는지 검사하는 코드와 함께 읽는다.
if not graph:
    # 지정한 경로·이름·종류로 새 에셋을 만든다. 같은 이름의 원본이 있는지 검사하는 코드와 함께 읽는다.
    graph = assets.create_asset(
        "MRG_LabDigitalPerformance", folder, unreal.MovieGraphConfig, None
    )
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert graph


# 함수 node: 이름은 node이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: cls
def node(cls):
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return next(
        (
            n
            for n in unreal.ObjectIterator(unreal.MovieGraphNode)
            if n.get_outer() == graph and n.get_class() == cls.static_class()
        ),
        None,
    ) or graph.create_node_by_class(cls)


output = node(unreal.MovieGraphGlobalOutputSettingNode)
warm = node(unreal.MovieGraphWarmUpSettingNode)
png = node(unreal.MovieGraphImageSequenceOutputNode_PNG)
mp4 = node(unreal.MovieGraphMP4EncoderNode)
deferred = node(unreal.MovieGraphDeferredRenderPassNode)
layer = node(unreal.MovieGraphRenderLayerNode)
# output.override_output_resolution에 기준값 True을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
output.override_output_resolution = True
output.output_resolution = unreal.MovieGraphLibrary.named_resolution_from_size(1280, 720)
# output.override_output_directory에 기준값 True을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
output.override_output_directory = True
output.output_directory = unreal.DirectoryPath(
    "K:/EpicResources/Outputs/FeatureLab/Case16/ReviewCut/Default"
)
# output.override_output_frame_rate에 기준값 True을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
output.override_output_frame_rate = True
output.output_frame_rate = unreal.FrameRate(30, 1)
# output.override_custom_playback_range_start에 기준값 True을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
output.override_custom_playback_range_start = True
output.custom_playback_range_start = unreal.MovieGraphSequencePlaybackRangeBound(
    type=unreal.MovieGraphSequenceRangeType.CUSTOM, value=0
)
# output.override_custom_playback_range_end에 기준값 True을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
output.override_custom_playback_range_end = True
output.custom_playback_range_end = unreal.MovieGraphSequencePlaybackRangeBound(
    type=unreal.MovieGraphSequenceRangeType.CUSTOM, value=90
)
# warm.override_num_warm_up_frames에 기준값 True을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
warm.override_num_warm_up_frames = True
# warm.num_warm_up_frames에 기준값 8을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
warm.num_warm_up_frames = 8
mp4.set_editor_property("bOverride_bIncludeAudio", True)
# mp4.include_audio에 기준값 False을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
mp4.include_audio = False
# mp4.override_average_bitrate_in_mbps에 기준값 True을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
mp4.override_average_bitrate_in_mbps = True
# mp4.average_bitrate_in_mbps에 기준값 8.0을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
mp4.average_bitrate_in_mbps = 8.0
# layer.override_layer_name에 기준값 True을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
layer.override_layer_name = True
layer.layer_name = "DigitalPerformance"
inp = graph.get_input_node()
out = graph.get_output_node()
if not out.get_input_pin("Beauty"):
    graph.add_output().set_member_name("Beauty")
if not inp.get_output_pin("Beauty"):
    graph.add_input().set_member_name("Beauty")
edges = [
    (inp, "Globals", output, ""),
    (output, "", warm, ""),
    (warm, "", png, ""),
    (png, "", mp4, ""),
    (mp4, "", out, "Globals"),
    (inp, "Beauty", deferred, ""),
    (deferred, "", layer, ""),
    (layer, "", out, "Beauty"),
]
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 (a, ap, b, bp)의 값이 매번 바뀐다.
for a, ap, b, bp in edges:
    graph.add_labeled_edge(a, ap, b, bp)
variables = {str(v.get_member_name()): v for v in graph.get_variables()}
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 (name, prop, struct, value)의 값이 매번 바뀐다.
for name, prop, struct, value in [
    (
        "ReviewResolution",
        "OutputResolution",
        unreal.MovieGraphNamedResolution,
        unreal.MovieGraphLibrary.named_resolution_from_size(1280, 720),
    ),
    (
        "RenderDestination",
        "OutputDirectory",
        unreal.DirectoryPath,
        unreal.DirectoryPath("K:/EpicResources/Outputs/FeatureLab/Case16/ReviewCut/Default"),
    ),
]:
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not output.get_input_pin(prop)
    if not output.get_input_pin(prop):
        output.toggle_promote_property_to_pin(prop)
    var = variables.get(name)
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not var
    if not var:
        var = graph.add_variable(name)
        var.set_value_type(unreal.MovieGraphValueType.STRUCT, struct.static_struct())
    var.set_value_serialized_string(value.export_text())
    getter = next(
        (
            n
            for n in unreal.ObjectIterator(unreal.MovieGraphVariableNode)
            if n.get_outer() == graph and n.get_variable() == var
        ),
        None,
    )
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not getter
    if not getter:
        getter = graph.create_node_by_class(unreal.MovieGraphVariableNode)
        getter.set_variable(var)
    graph.add_labeled_edge(getter, var.get_member_name(), output, prop)
layout = [
    (inp, -1000, 0),
    (output, -700, 0),
    (warm, -400, 0),
    (png, -100, 0),
    (mp4, 200, 0),
    (deferred, -400, 400),
    (layer, 0, 400),
    (out, 600, 0),
]
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 (n, x, y)의 값이 매번 바뀐다.
for n, x, y in layout:
    n.set_node_pos_x(x)
    n.set_node_pos_y(y)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
assert lib.save_loaded_asset(graph, False)
# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
actors = unreal.get_editor_subsystem(unreal.EditorActorSubsystem)
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 a의 값이 매번 바뀐다. 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
for a in actors.get_all_level_actors():
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: isinstance(a, unreal.FeatureLabLiveLinkSource) and a.get_editor_property('provider_name') == 'FeatureLab Digital Animation' 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 provider_name이다.
    if (
        isinstance(a, unreal.FeatureLabLiveLinkSource)
        and a.get_editor_property("provider_name") == "FeatureLab Digital Animation"
    ):
        a.set_publishing(True)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
assert unreal.get_editor_subsystem(unreal.LevelEditorSubsystem).save_all_dirty_levels()
queue = unreal.load_asset(folder + "/MRQ_LabDigitalPerformance")
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not queue 지정한 경로·이름·종류로 새 에셋을 만든다. 같은 이름의 원본이 있는지 검사하는 코드와 함께 읽는다.
if not queue:
    # 지정한 경로·이름·종류로 새 에셋을 만든다. 같은 이름의 원본이 있는지 검사하는 코드와 함께 읽는다.
    queue = assets.create_asset(
        "MRQ_LabDigitalPerformance", folder, unreal.MoviePipelineQueue, None
    )
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert queue
existing = {str(j.job_name): j for j in queue.get_jobs()}
report = json.loads((root / "Evidence/case16-mocap-take.json").read_text())
assert report["status"] == "recorded"
# JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
review_report = json.loads(
    (root / "Evidence/case16-cinematic-review-authoring.json").read_text()
)
report["sequence"] = review_report["sequence"]
variables = {str(v.get_member_name()): v for v in graph.get_variables()}
jobs = []
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 (name, size, enabled)의 값이 매번 바뀐다.
for name, size, enabled in [
    ("Master_720p", (1280, 720), False),
    ("Review_360p", (640, 360), True),
    ("Reset_720p", (1280, 720), False),
]:
    job = existing.get(name) or queue.allocate_new_job(unreal.MoviePipelineExecutorJob)
    job.job_name = name
    job.map = unreal.SoftObjectPath(
        "/Game/FeatureLab/Maps/FL_16_DigitalPerformance.FL_16_DigitalPerformance"
    )
    job.sequence = unreal.SoftObjectPath(report["sequence"])
    job.set_graph_preset(graph)
    overrides = job.get_or_create_variable_overrides(graph)
    overrides.set_variable_assignment_enable_state(variables["ReviewResolution"], enabled)
    overrides.set_value_serialized_string(
        variables["ReviewResolution"],
        unreal.MovieGraphLibrary.named_resolution_from_size(*size).export_text(),
    )
    overrides.set_variable_assignment_enable_state(variables["RenderDestination"], True)
    destination = "K:/EpicResources/Outputs/FeatureLab/Case16/ReviewCut/" + name
    overrides.set_value_serialized_string(
        variables["RenderDestination"], unreal.DirectoryPath(destination).export_text()
    )
    # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    jobs.append(
        {
            "name": name,
            "resolution": list(size),
            "resolution_override_enabled": enabled,
            "output": destination,
            "sequence": report["sequence"],
        }
    )
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
assert lib.save_loaded_asset(queue, False)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "status": "graph_and_three_job_queue_saved",
    "graph": graph.get_path_name(),
    "queue": queue.get_path_name(),
    "settings_nodes": [
        n.get_class().get_name() for n in [output, warm, png, mp4, deferred, layer]
    ],
    "edges": len(edges) + 2,
    "variables": list(variables),
    "jobs": jobs,
    "frame_range": [0, 90],
    "frame_rate": 30,
    "preservation": "No data or caches removed; actual captured take is the graph input.",
}
(root / "Evidence/case16-movie-graph-authoring.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-create-capture-session-deferred-py"></a>

### lab_create_capture_session_deferred.py

```python
# 파일 역할: 에셋·그래프·장면을 구성하는 제작 작업. 이미 있는 원본을 대상으로 재실행해도 되는지 가드 조건부터 읽는다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import builtins, json, traceback, unreal
from pathlib import Path

target = Path(unreal.Paths.project_dir(), "Evidence/case16-session-create-action.json")
state = {"status": "scheduled", "handle": None}
builtins._fl16_create_session = state


# 함수 write: 이름은 write이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: 별도 입력 없음 문자열을 파일에 기록한다. 결과 JSON이나 보고서인지, 실제 코드·설정 파일인지 경로를 확인한다.
def write():
    # 문자열을 파일에 기록한다. 결과 JSON이나 보고서인지, 실제 코드·설정 파일인지 경로를 확인한다.
    target.write_text(
        json.dumps({k: v for k, v in state.items() if k != "handle"}, indent=2),
        encoding="utf-8",
    )


# 함수 run: 이름은 run이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: dt 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
def run(dt):
    unreal.unregister_slate_post_tick_callback(state["handle"])
    state["handle"] = None
    # 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다.
    try:
        state["status"] = "executing"
        write()
        state["clicked"] = unreal.get_default_object(unreal.SlateInspectorToolset).call_method(
            "Click", ("g76", "left", False, unreal.SlateInspectorToolsetModifierKeys())
        )
        state["status"] = "completed"
    except Exception:
        state["status"] = "failed"
        state["error"] = traceback.format_exc()
    write()


state["handle"] = unreal.register_slate_post_tick_callback(run)
write()
RESULT = {"status": "scheduled", "report": str(target)}
```

<a id="source-lab-lab-create-mocap-session-py"></a>

### lab_create_mocap_session.py

```python
# 파일 역할: 에셋·그래프·장면을 구성하는 제작 작업. 이미 있는 원본을 대상으로 재실행해도 되는지 가드 조건부터 읽는다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Cinematics/Productions
#   /Game/FeatureLab/Cinematics/DT_LabCaptureSessions

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, unreal
from pathlib import Path

root = Path(unreal.Paths.project_dir()).resolve()
assert unreal.EditorAssetLibrary.make_directory("/Game/FeatureLab/Cinematics/Productions")
table = unreal.load_asset("/Game/FeatureLab/Cinematics/DT_LabCaptureSessions")
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert not unreal.DataTableFunctionLibrary.get_data_table_row_names(
    table
), "A session already exists; inspect instead of creating a duplicate"
vm = unreal.find_object(None, "/Engine/Transient.VM_PCapWorkflow_C_0")
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert vm
result = vm.call_method(
    "CreateNewSession",
    (
        unreal.Text("DigitalAnimation"),
        unreal.Text("Digital animation and Hub replay validation; no physical capture."),
        unreal.Name("DB16942E48DBD22D82E107A8691E6EEB"),
        unreal.Name("EpicFeatureLab"),
    ),
)
# JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
rows = json.loads(unreal.DataTableFunctionLibrary.export_data_table_to_json_string(table))
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "status": "session_created" if rows else "failed",
    "return_values": str(result),
    "records": rows,
}
(root / "Evidence/case16-mocap-session.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-enable-capture-preview-py"></a>

### lab_enable_capture_preview.py

```python
# 파일 역할: EpicFeatureLab의 lab_enable_capture_preview 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, unreal
from pathlib import Path

# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
level = unreal.get_editor_subsystem(unreal.LevelEditorSubsystem)
keys = list(level.get_viewport_config_keys())
values = []
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 key의 값이 매번 바뀐다.
for key in keys:
    level.editor_set_viewport_realtime(True, key)
# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
actors = unreal.get_editor_subsystem(unreal.EditorActorSubsystem)
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 a의 값이 매번 바뀐다. 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
for a in actors.get_all_level_actors():
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: isinstance(a, unreal.CapturePerformer) 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    if isinstance(a, unreal.CapturePerformer):
        b = a.get_component_by_class(unreal.SkeletalMeshComponent)
        # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
        values.append(
            {
                "actor": a.get_actor_label(),
                "pause_anims": b.get_editor_property("pause_anims"),
                "rate": b.get_editor_property("global_anim_rate_scale"),
                "subject": str(a.get_live_link_subject().name),
            }
        )
        b.set_editor_property("pause_anims", False)
        b.set_update_animation_in_editor(True)
        b.get_anim_instance().set_subject(unreal.LiveLinkSubjectName(name="FeatureLab_Body"))
        actors.set_selected_level_actors([a])
# 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
camera = next(
    a for a in actors.get_all_level_actors() if a.get_actor_label() == "FL16_PerformanceCamera"
)
level.pilot_level_actor(camera)
RESULT = {"viewports": [str(k) for k in keys], "performers": values}
Path(unreal.Paths.project_dir(), "Evidence/case16-preview-settings.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-inspect-capture-performer-py"></a>

### lab_inspect_capture_performer.py

```python
# 파일 역할: 현재 에셋·객체·실행 상태를 읽어 기록하는 관찰 작업.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, unreal
from pathlib import Path

# 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
a = next(
    a
    for a in unreal.get_editor_subsystem(unreal.EditorActorSubsystem).get_all_level_actors()
    if isinstance(a, unreal.CapturePerformer)
)
b = a.get_component_by_class(unreal.SkeletalMeshComponent)
p = a.get_component_by_class(unreal.PerformerComponent)
i = b.get_anim_instance()
b.set_component_tick_enabled(True)
a.set_live_link_subject(unreal.LiveLinkSubjectName(name="FeatureLab_Body"))
a.set_evaluate_live_link_data(True)
p.set_controlled_mesh(b)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "actor": a.get_actor_label(),
    "subject": str(a.get_live_link_subject()),
    "evaluation": a.get_evaluate_live_link_data(),
    "component_tick_enabled": b.is_component_tick_enabled(),
    "anim_instance": str(i),
    "anim_methods": [m for m in dir(i) if "subject" in m or "live_link" in m],
    "animation_mode": str(b.get_editor_property("animation_mode")),
    "update_in_editor": b.get_editor_property("update_animation_in_editor"),
    "transform": str(b.get_socket_transform("hand_l", unreal.RelativeTransformSpace.RTS_WORLD)),
}
Path(unreal.Paths.project_dir(), "Evidence/case16-performer-inspection.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-inspect-capture-timing-py"></a>

### lab_inspect_capture_timing.py

```python
# 파일 역할: 현재 에셋·객체·실행 상태를 읽어 기록하는 관찰 작업.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, unreal
from pathlib import Path

root = Path(unreal.Paths.project_dir()).resolve()
items = []
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 obj의 값이 매번 바뀐다. 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
for obj in unreal.ObjectIterator(unreal.LiveLinkSourceSettings):
    if obj.get_path_name().startswith("/Engine/Transient"):
        # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
        items.append(
            {
                "path": obj.get_path_name(),
                "class": obj.get_class().get_name(),
                "mode": str(obj.get_editor_property("mode")),
                "connection": str(obj.get_editor_property("connection_string")),
            }
        )
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
RESULT = {
    "settings": items,
    "received": json.loads(
        unreal.FeatureLabRuntimeLibrary.inspect_lab_live_link("FeatureLab_Body")
    ),
}
(root / "Evidence/case16-timing-settings.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-inspect-capture-workflow-py"></a>

### lab_inspect_capture_workflow.py

```python
# 파일 역할: 현재 에셋·객체·실행 상태를 읽어 기록하는 관찰 작업.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Cinematics/

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, unreal
from pathlib import Path

root = Path(unreal.Paths.project_dir()).resolve()
# 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
publisher = next(
    a
    for a in unreal.get_editor_subsystem(unreal.EditorActorSubsystem).get_all_level_actors()
    if isinstance(a, unreal.FeatureLabLiveLinkSource)
)
tables = {}
for name in ["DT_LabCaptureProductions", "DT_LabCaptureSessions"]:
    table = unreal.load_asset("/Game/FeatureLab/Cinematics/" + name)
    # JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
    tables[name] = json.loads(
        unreal.DataTableFunctionLibrary.export_data_table_to_json_string(table)
    )
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
RESULT = {
    "tables": tables,
    "publisher": {
        "bones": publisher.get_editor_property("published_bone_count"),
        "frames": publisher.get_editor_property("frames_published"),
    },
    "received": json.loads(
        unreal.FeatureLabRuntimeLibrary.inspect_lab_live_link("FeatureLab_Body")
    ),
}
(root / "Evidence/case16-workflow-last-state.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-inspect-mocap-take-py"></a>

### lab_inspect_mocap_take.py

```python
# 파일 역할: 현재 에셋·객체·실행 상태를 읽어 기록하는 관찰 작업.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, unreal
from pathlib import Path

root = Path(unreal.Paths.project_dir()).resolve()
report = json.loads((root / "Evidence/case16-mocap-take.json").read_text())
assert report["status"] == "recorded"
seq = unreal.load_asset(report["sequence"])
visited = set()
sequences = []
animations = []


# 함수 walk: 이름은 walk이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: s 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
def walk(s):
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: s.get_path_name() in visited
    if s.get_path_name() in visited:
        # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
        return
    visited.add(s.get_path_name())
    item = {
        "asset": s.get_path_name(),
        "start": s.get_playback_start(),
        "end": s.get_playback_end(),
        "rate": s.get_display_rate().numerator,
        "tracks": [],
    }
    tracks = list(s.get_tracks())
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 binding의 값이 매번 바뀐다.
    for binding in s.get_bindings():
        tracks.extend(binding.get_tracks())
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 track의 값이 매번 바뀐다. 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    for track in tracks:
        sections = []
        # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 section의 값이 매번 바뀐다. 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
        for section in track.get_sections():
            record = {
                "class": section.get_class().get_name(),
                "start": section.get_start_frame(),
                "end": section.get_end_frame(),
            }
            # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: isinstance(section, unreal.MovieSceneSubSection)
            if isinstance(section, unreal.MovieSceneSubSection):
                walk(section.get_sequence())
            # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: isinstance(section, unreal.MovieSceneSkeletalAnimationSection) 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
            if isinstance(section, unreal.MovieSceneSkeletalAnimationSection):
                anim = section.params.animation
                # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: anim 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
                if anim:
                    # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
                    animations.append(
                        {
                            "asset": anim.get_path_name(),
                            "length": anim.sequence_length,
                            "skeleton": anim.get_editor_property("skeleton").get_path_name(),
                        }
                    )
                    record["animation"] = anim.get_path_name()
            if "LiveLink" in track.get_class().get_name():
                channels = unreal.MovieSceneSectionExtensions.get_all_channels(section)
                record["channel_count"] = len(channels)
                record["keys_per_first_channels"] = [c.get_num_keys() for c in channels[:6]]
            # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
            sections.append(record)
        item["tracks"].append({"class": track.get_class().get_name(), "sections": sections})
    # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    sequences.append(item)


walk(seq)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "status": "take_structure_inspected",
    "sequences": sequences,
    "animations": animations,
    "raw_live_link_tracks": sum(
        "LiveLink" in t["class"] for s in sequences for t in s["tracks"]
    ),
}
(root / "Evidence/case16-take-structure.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-inspect-mocap-widgets-py"></a>

### lab_inspect_mocap_widgets.py

```python
# 파일 역할: 현재 에셋·객체·실행 상태를 읽어 기록하는 관찰 작업.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, unreal
from pathlib import Path

items = []
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 obj의 값이 매번 바뀐다. 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
for obj in unreal.ObjectIterator(unreal.EditorUtilityWidget):
    name = obj.get_class().get_name()
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: name in ['EW_SessionManager_C', 'EW_MocapManager_C', 'EW_RecordManager_C', 'EW_MotionManager_C'] 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    if name in [
        "EW_SessionManager_C",
        "EW_MocapManager_C",
        "EW_RecordManager_C",
        "EW_MotionManager_C",
    ]:
        # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
        items.append(
            {
                "class": name,
                "path": obj.get_path_name(),
                "members": [
                    m
                    for m in dir(obj)
                    if any(
                        q in m.lower()
                        for q in [
                            "session",
                            "production",
                            "create",
                            "record",
                            "name",
                            "vm_",
                            "viewmodel",
                        ]
                    )
                ],
            }
        )
RESULT = {"widgets": items}
Path(unreal.Paths.project_dir(), "Evidence/case16-mocap-widget-inspection.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-list-capture-subjects-py"></a>

### lab_list_capture_subjects.py

```python
# 파일 역할: 현재 에셋·객체·실행 상태를 읽어 기록하는 관찰 작업.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, unreal
from pathlib import Path

items = []
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 subject의 값이 매번 바뀐다. 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
for subject in unreal.LiveLinkBlueprintLibrary.get_live_link_subjects(True, True):
    # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    items.append(
        {
            "name": str(
                subject.get_editor_property("subject_name").get_editor_property("name")
            ),
            "source": str(subject.get_editor_property("source")),
            "enabled": unreal.LiveLinkBlueprintLibrary.is_specific_live_link_subject_enabled(
                subject, False
            ),
        }
    )
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
RESULT = {
    "subjects": items,
    "frame": json.loads(
        unreal.FeatureLabRuntimeLibrary.inspect_lab_live_link("FeatureLab_Body")
    ),
}
Path(unreal.Paths.project_dir(), "Evidence/case16-subject-list.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-open-mocap-manager-py"></a>

### lab_open_mocap_manager.py

```python
# 파일 역할: EpicFeatureLab의 lab_open_mocap_manager 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

panel = unreal.TakeRecorderBlueprintLibrary.open_take_recorder_panel()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert panel
widget = unreal.load_asset("/PerformanceCaptureWorkflow/Core/EW_MocapManager")
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert widget
# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
tab = unreal.get_editor_subsystem(unreal.EditorUtilitySubsystem).spawn_and_register_tab(widget)
RESULT = {"opened": bool(tab), "widget": widget.get_path_name()}
```

<a id="source-lab-lab-peek-capture-stream-py"></a>

### lab_peek_capture_stream.py

```python
# 파일 역할: 현재 에셋·객체·실행 상태를 읽어 기록하는 관찰 작업.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, unreal
from pathlib import Path

# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
actors = unreal.get_editor_subsystem(unreal.EditorActorSubsystem)
# 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
publisher = next(
    a for a in actors.get_all_level_actors() if isinstance(a, unreal.FeatureLabLiveLinkSource)
)
source = publisher.get_editor_property("source_actor")
body = source.get_component_by_class(unreal.SkeletalMeshComponent)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 frames_published이다.
RESULT = {
    "publisher_frames": publisher.get_editor_property("frames_published"),
    "publisher_bones": publisher.get_editor_property("published_bone_count"),
    "publisher_tick_enabled": publisher.is_actor_tick_enabled(),
    "editor_publish": publisher.get_editor_property("bPublishInEditor"),
    "animation": body.get_animation_mode().name,
    "animation_time": getattr(body.get_anim_instance(), "get_current_time", lambda: None)(),
    "received": json.loads(
        unreal.FeatureLabRuntimeLibrary.inspect_lab_live_link("FeatureLab_Body")
    ),
}
Path(unreal.Paths.project_dir(), "Evidence/case16-stream-last-state.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-prepare-take-slate-py"></a>

### lab_prepare_take_slate.py

```python
# 파일 역할: EpicFeatureLab의 lab_prepare_take_slate 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Cinematics/LS_LabCaptureSlate
#   /Game/FeatureLab/Cinematics

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, unreal
from pathlib import Path

root = Path(unreal.Paths.project_dir()).resolve()
path = "/Game/FeatureLab/Cinematics/LS_LabCaptureSlate"
# 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
sequence = unreal.load_asset(path)
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not sequence 지정한 경로·이름·종류로 새 에셋을 만든다. 같은 이름의 원본이 있는지 검사하는 코드와 함께 읽는다.
if not sequence:
    # 지정한 경로·이름·종류로 새 에셋을 만든다. 같은 이름의 원본이 있는지 검사하는 코드와 함께 읽는다.
    sequence = unreal.AssetToolsHelpers.get_asset_tools().create_asset(
        "LS_LabCaptureSlate",
        "/Game/FeatureLab/Cinematics",
        unreal.LevelSequence,
        unreal.LevelSequenceFactoryNew(),
    )
sequence.set_display_rate(unreal.FrameRate(30, 1))
sequence.set_playback_start(0)
sequence.set_playback_end(120)
metadata = sequence.find_or_add_meta_data_by_class(unreal.TakeMetaData)
metadata.set_slate("DigitalBody")
metadata.set_take_number(1)
metadata.set_frame_rate(unreal.FrameRate(30, 1))
metadata.set_description(
    "EpicFeatureLab digital animation, streamed through Live Link Hub; no physical mocap source."
)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
assert unreal.EditorAssetLibrary.save_loaded_asset(sequence, False)
panel = unreal.TakeRecorderBlueprintLibrary.open_take_recorder_panel()
panel.setup_for_recording_level_sequence(sequence)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "slate": sequence.get_path_name(),
    "metadata": metadata.get_path_name(),
    "panel": bool(panel),
}
(root / "Evidence/case16-take-slate.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-record-mocap-take-py"></a>

### lab_record_mocap_take.py

```python
# 파일 역할: EpicFeatureLab의 lab_record_mocap_take 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Cinematics/LS_LabCaptureSlate
#   /Game/FeatureLab/Cinematics/Productions/EpicFeatureLab/20261101_DigitalAnimation/Takes
#   /Game/FeatureLab/Cinematics/Productions/EpicFeatureLab/20261101_DigitalAnimation/Takes/Takes_20261101_DigitalAnimation

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import builtins, json, time, unreal
from pathlib import Path

root = Path(unreal.Paths.project_dir()).resolve()
assert root.name == "EpicFeatureLab"
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert not unreal.TakeRecorderBlueprintLibrary.is_recording()
assert not hasattr(builtins, "_fl16_take_handle")
vm = unreal.find_object(None, "/Engine/Transient.VM_PCapWorkflow_C_0")
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert vm
vm.call_method("ConfigureTakeRecorder", ())
seq = unreal.load_asset("/Game/FeatureLab/Cinematics/LS_LabCaptureSlate")
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert seq
seq.set_display_rate(unreal.FrameRate(30, 1))
seq.set_playback_start(0)
seq.set_playback_end(180)
metadata = seq.find_or_add_meta_data_by_class(unreal.TakeMetaData)
metadata.set_slate("DigitalBodyHubReplay")
metadata.set_take_number(1)
metadata.set_frame_rate(unreal.FrameRate(30, 1))
metadata.set_description(
    "Recorded Hub playback with the independent digital publisher stopped. Raw Live Link plus baked 93-bone performer and stage camera."
)
sources = seq.find_or_add_meta_data_by_class(unreal.TakeRecorderSources)
# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
actors = unreal.get_editor_subsystem(unreal.EditorActorSubsystem)
# 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
performer = next(
    a for a in actors.get_all_level_actors() if isinstance(a, unreal.CapturePerformer)
)
# 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
camera = next(
    a for a in actors.get_all_level_actors() if a.get_actor_label() == "FL16_PerformanceCamera"
)
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 target의 값이 매번 바뀐다. 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 enabled이다.
for target in [performer, camera]:
    source = unreal.TakeRecorderActorSource.add_source_for_actor(target, sources)
    source.set_editor_property("enabled", True)
    source.set_editor_property("reduce_keys", False)
    source.set_editor_property("record_type", unreal.TakeRecorderActorRecordType.POSSESSABLE)
raw = next(
    (s for s in sources.get_sources_copy() if isinstance(s, unreal.TakeRecorderLiveLinkSource)),
    None,
)
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not raw
if not raw:
    raw = sources.add_source(unreal.TakeRecorderLiveLinkSource)
# 여러 속성을 이름:값 사전으로 한 번에 설정한다. 각 항목이 개별 설정과 대응한다.
raw.set_editor_properties(
    {
        "subject_name": unreal.Name("FeatureLab_Body"),
        "enabled": True,
        "reduce_keys": False,
        "use_source_timecode": False,
        "discard_samples_before_start": False,
        "save_subject_settings": True,
    }
)
panel = unreal.TakeRecorderBlueprintLibrary.open_take_recorder_panel()
panel.setup_for_recording_level_sequence(seq)
seq = panel.get_level_sequence()
sources = panel.get_sources()
metadata = panel.get_take_meta_data()
metadata.set_slate("DigitalBodyHubReplay")
metadata.set_take_number(2)
subsystem = unreal.get_engine_subsystem(unreal.TakeRecorderSubsystem)
subsystem.set_frame_rate(unreal.FrameRate(30, 1))
metadata.set_frame_rate(unreal.FrameRate(30, 1))
params = subsystem.get_global_record_settings()
user = params.user
# user.countdown_seconds에 기준값 0.0을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
user.countdown_seconds = 0.0
# user.stop_at_playback_end에 기준값 False을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
user.stop_at_playback_end = False
# user.stop_on_rollover에 기준값 False을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
user.stop_on_rollover = False
# user.save_recorded_assets에 기준값 True을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
user.save_recorded_assets = True
# user.auto_lock에 기준값 False을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
user.auto_lock = False
# user.maximize_viewport에 기준값 False을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
user.maximize_viewport = False
params.user = user
project = params.project
project.root_take_save_dir = unreal.DirectoryPath(
    "/Game/FeatureLab/Cinematics/Productions/EpicFeatureLab/20261101_DigitalAnimation/Takes"
)
project.take_save_dir = "{slate}_{take}"
project.recording_clock_source = unreal.UpdateClockSource.PLATFORM
# project.start_at_current_timecode에 기준값 False을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
project.start_at_current_timecode = False
# project.record_sources_into_sub_sequences에 기준값 True을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
project.record_sources_into_sub_sequences = True
# project.record_to_possessable에 기준값 True을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
project.record_to_possessable = True
params.project = project
# params.open_sequencer에 기준값 False을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
params.open_sequencer = False
params.start_frame = unreal.FrameNumber(0)
perf = unreal.load_object(None, "/Script/UnrealEd.Default__EditorPerformanceSettings")
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert perf
previous = perf.get_editor_property("bThrottleCPUWhenNotForeground")
perf.set_editor_property("bThrottleCPUWhenNotForeground", False)
recorder = unreal.TakeRecorderBlueprintLibrary.start_recording(seq, sources, metadata, params)
assert recorder, "Take Recorder refused to start"
state = {
    "status": "recording",
    "started": time.monotonic(),
    "sequence": recorder.get_sequence().get_path_name(),
    "source_types": [s.get_class().get_name() for s in sources.get_sources_copy()],
    "samples": [],
    "target": performer.get_path_name(),
    "original_publisher_required": False,
}
path = root / "Evidence/case16-mocap-take.json"


# 함수 tick: 이름은 tick이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: _ 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
def tick(_):
    # 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다. 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    try:
        elapsed = time.monotonic() - state["started"]
        if not state["samples"] or elapsed - state["samples"][-1]["elapsed"] >= 0.25:
            body = performer.get_component_by_class(unreal.SkeletalMeshComponent)
            p = body.get_socket_transform(
                "hand_l", unreal.RelativeTransformSpace.RTS_WORLD
            ).translation
            state["samples"].append(
                {
                    "elapsed": elapsed,
                    "recording": unreal.TakeRecorderBlueprintLibrary.is_recording(),
                    "hand": [p.x, p.y, p.z],
                    "input": json.loads(
                        unreal.FeatureLabRuntimeLibrary.inspect_lab_live_link("FeatureLab_Body")
                    ),
                }
            )
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: elapsed >= 6 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
        if elapsed >= 6:
            # 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
            unreal.unregister_slate_post_tick_callback(builtins._fl16_take_handle)
            del builtins._fl16_take_handle
            unreal.TakeRecorderBlueprintLibrary.stop_recording()
            perf.set_editor_property("bThrottleCPUWhenNotForeground", previous)
            recorded = recorder.get_sequence()
            state["status"] = "recorded"
            state["sequence"] = recorded.get_path_name()
            state["start"] = recorded.get_playback_start()
            state["end"] = recorded.get_playback_end()
            state["rate"] = str(recorded.get_display_rate())
            state["unique_hands"] = len(
                {tuple(round(v, 3) for v in s["hand"]) for s in state["samples"]}
            )
            state["takes_table"] = (
                unreal.DataTableFunctionLibrary.export_data_table_to_json_string(
                    unreal.load_asset(
                        "/Game/FeatureLab/Cinematics/Productions/EpicFeatureLab/20261101_DigitalAnimation/Takes/Takes_20261101_DigitalAnimation"
                    )
                )
            )
            path.write_text(json.dumps(state, indent=2), encoding="utf-8")
    except Exception as e:
        if hasattr(builtins, "_fl16_take_handle"):
            # 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
            unreal.unregister_slate_post_tick_callback(builtins._fl16_take_handle)
            del builtins._fl16_take_handle
        perf.set_editor_property("bThrottleCPUWhenNotForeground", previous)
        state["status"] = "error"
        state["error"] = str(e)
        path.write_text(json.dumps(state, indent=2), encoding="utf-8")


# 에디터 갱신 뒤 호출할 함수를 등록한다. 작업이 끝나면 핸들로 해제해야 반복 호출이 남지 않는다.
builtins._fl16_take_handle = unreal.register_slate_post_tick_callback(tick)
builtins._fl16_take_refs = (recorder, sources, metadata, seq, performer)
path.write_text(json.dumps(state, indent=2), encoding="utf-8")
RESULT = {"status": "recording", "sequence": state["sequence"], "duration_seconds": 6}
```

<a id="source-lab-lab-render-movie-graph-py"></a>

### lab_render_movie_graph.py

```python
# 파일 역할: EpicFeatureLab의 lab_render_movie_graph 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Cinematics/MRQ_LabDigitalPerformance

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import builtins, gc, json, time, types, unreal
from pathlib import Path

root = Path(unreal.Paths.project_dir()).resolve()
assert root.name == "EpicFeatureLab"
# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
subsystem = unreal.get_editor_subsystem(unreal.MoviePipelineQueueSubsystem)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert not subsystem.is_rendering()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert not unreal.TakeRecorderBlueprintLibrary.is_recording()
queue = unreal.load_asset("/Game/FeatureLab/Cinematics/MRQ_LabDigitalPerformance")
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert queue and len(queue.get_jobs()) == 3
previous_queue = unreal.new_object(unreal.MoviePipelineQueue)
previous_queue.copy_from(subsystem.get_queue())
previous_job_count = len(previous_queue.get_jobs())
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert subsystem.load_queue(queue, prompt_on_replacing_dirty_queue=False)
perf = unreal.load_object(None, "/Script/UnrealEd.Default__EditorPerformanceSettings")
previous_throttle = perf.get_editor_property("bThrottleCPUWhenNotForeground")
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 old의 값이 매번 바뀐다.
for old in gc.get_objects():
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: isinstance(old, types.FunctionType) and old.__name__ == 'finished' and old.__code__.co_filename.replace('\\', '/').endswith('/Scripts/Lab/lab_render_movie_graph
    if (
        isinstance(old, types.FunctionType)
        and old.__name__ == "finished"
        and old.__code__.co_filename.replace("\\", "/").endswith(
            "/Scripts/Lab/lab_render_movie_graph.py"
        )
        and "previous_throttle" in old.__globals__
    ):
        previous_throttle = old.__globals__["previous_throttle"]
        break
state = {
    "status": "preparing",
    "started": time.monotonic(),
    "queue": queue.get_path_name(),
    "errors": [],
    "jobs": [str(j.job_name) for j in queue.get_jobs()],
    "previous_job_count": previous_job_count,
    "previous_throttle": previous_throttle,
    "outputs": [],
}
path = root / "Evidence/case16-movie-render.json"
executor = unreal.MoviePipelinePIEExecutor(subsystem)


# 함수 errored: 이름은 errored이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: _executor, _pipeline, is_fatal, error_text 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
def errored(_executor, _pipeline, is_fatal, error_text):
    state["errors"].append({"fatal": bool(is_fatal), "message": str(error_text)})
    path.write_text(json.dumps(state, indent=2), encoding="utf-8")


# 함수 finished: 이름은 finished이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: _executor, success 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 bThrottleCPUWhenNotForeground이다.
def finished(_executor, success):
    perf.set_editor_property("bThrottleCPUWhenNotForeground", previous_throttle)
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: previous_job_count
    if previous_job_count:
        subsystem.get_queue().copy_from(previous_queue)
    state["status"] = "rendered" if success else "failed"
    state["success"] = bool(success)
    state["elapsed_seconds"] = time.monotonic() - state["started"]
    base = Path("K:/EpicResources/Outputs/FeatureLab/Case16/ReviewCut")
    for job in state["jobs"]:
        folder = base / job
        pngs = list(folder.rglob("*.png")) if folder.exists() else []
        videos = list(folder.rglob("*.mp4")) if folder.exists() else []
        state["outputs"].append(
            {
                "job": job,
                "png_count": len(pngs),
                "png_first": str(pngs[0]) if pngs else None,
                "videos": [{"path": str(v), "bytes": v.stat().st_size} for v in videos],
            }
        )
    path.write_text(json.dumps(state, indent=2), encoding="utf-8")


executor.on_executor_finished_delegate.add_callable_unique(finished)
executor.on_executor_errored_delegate.add_callable_unique(errored)
builtins._fl16_movie_refs = (executor, queue, subsystem, previous_queue, finished, errored)
state["status"] = "rendering"
path.write_text(json.dumps(state, indent=2), encoding="utf-8")
perf.set_editor_property("bThrottleCPUWhenNotForeground", False)
# 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다. 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 bThrottleCPUWhenNotForeground이다.
try:
    subsystem.render_queue_with_executor_instance(executor)
except Exception:
    perf.set_editor_property("bThrottleCPUWhenNotForeground", previous_throttle)
    raise
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "status": "rendering",
    "jobs": state["jobs"],
    "expected_png_frames_per_job": 90,
    "native_mp4_encoder": True,
}
```

<a id="source-lab-lab-repair-capture-production-py"></a>

### lab_repair_capture_production.py

```python
# 파일 역할: EpicFeatureLab의 lab_repair_capture_production 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Cinematics/DT_LabCaptureProductions

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, unreal
from pathlib import Path

root = Path(unreal.Paths.project_dir()).resolve()
table = unreal.load_asset("/Game/FeatureLab/Cinematics/DT_LabCaptureProductions")
# JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
rows = json.loads(unreal.DataTableFunctionLibrary.export_data_table_to_json_string(table))
assert len(rows) == 1 and rows[0]["ProductionName"] == "None", rows
rows[0]["ProductionName"] = "EpicFeatureLab"
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. Python의 사전·목록을 JSON 문자열로 바꾼다. 저장 전 직렬화 단계다.
assert unreal.DataTableFunctionLibrary.fill_data_table_from_json_string(table, json.dumps(rows))
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
assert unreal.EditorAssetLibrary.save_loaded_asset(table, False)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
RESULT = {
    "repaired_owned_row_in_place": True,
    "reason": "The native UI text commit did not set the production name; preserve its UID and notes while correcting the owned database row.",
    "rows": json.loads(unreal.DataTableFunctionLibrary.export_data_table_to_json_string(table)),
}
(root / "Evidence/case16-production-record.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-sample-capture-replay-py"></a>

### lab_sample_capture_replay.py

```python
# 파일 역할: EpicFeatureLab의 lab_sample_capture_replay 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, time, unreal, builtins
from pathlib import Path

root = Path(unreal.Paths.project_dir()).resolve()
assert root.name == "EpicFeatureLab"
assert not hasattr(builtins, "_fl16_replay_handle")
# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
actors = unreal.get_editor_subsystem(unreal.EditorActorSubsystem)
# 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
performer = next(
    a
    for a in actors.get_all_level_actors()
    if isinstance(a, unreal.CapturePerformer) and a.get_actor_label() == "Lab_DigitalPerformer"
)
body = performer.get_component_by_class(unreal.SkeletalMeshComponent)
body.set_update_animation_in_editor(True)
# 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 visibility_based_anim_tick_option이다.
body.set_editor_property(
    "visibility_based_anim_tick_option",
    unreal.VisibilityBasedAnimTickOption.ALWAYS_TICK_POSE_AND_REFRESH_BONES,
)
state = {
    "status": "running",
    "started": time.monotonic(),
    "samples": [],
    "actor": performer.get_path_name(),
}
path = root / "Evidence/case16-replay-samples.json"


# 함수 tick: 이름은 tick이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: _ 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
def tick(_):
    # 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다. 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    try:
        now = time.monotonic()
        elapsed = now - state["started"]
        if not state["samples"] or elapsed - state["samples"][-1]["elapsed"] >= 0.15:
            # JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
            s = {
                "elapsed": elapsed,
                "received": json.loads(
                    unreal.FeatureLabRuntimeLibrary.inspect_lab_live_link("FeatureLab_Body")
                ),
                "sockets": {},
            }
            for bone in ["pelvis", "head", "hand_l", "hand_r"]:
                t = body.get_socket_transform(bone, unreal.RelativeTransformSpace.RTS_WORLD)
                p = t.translation
                r = t.rotation.rotator()
                s["sockets"][bone] = [p.x, p.y, p.z, r.pitch, r.yaw, r.roll]
            state["samples"].append(s)
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: elapsed >= 3 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
        if elapsed >= 3:
            # 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
            unreal.unregister_slate_post_tick_callback(builtins._fl16_replay_handle)
            del builtins._fl16_replay_handle
            state["status"] = "captured"
            state["valid_samples"] = sum(
                s["received"].get("frame_valid", False) for s in state["samples"]
            )
            state["unique_received_frames"] = len(
                {s["received"].get("scene_frame") for s in state["samples"]}
            )
            state["unique_performer_hand_positions"] = len(
                {
                    tuple(round(v, 3) for v in s["sockets"]["hand_l"][:3])
                    for s in state["samples"]
                }
            )
            path.write_text(json.dumps(state, indent=2), encoding="utf-8")
    except Exception as e:
        # 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
        unreal.unregister_slate_post_tick_callback(builtins._fl16_replay_handle)
        del builtins._fl16_replay_handle
        state["status"] = "error"
        state["error"] = str(e)
        path.write_text(json.dumps(state, indent=2), encoding="utf-8")


# 에디터 갱신 뒤 호출할 함수를 등록한다. 작업이 끝나면 핸들로 해제해야 반복 호출이 남지 않는다.
builtins._fl16_replay_handle = unreal.register_slate_post_tick_callback(tick)
path.write_text(json.dumps(state, indent=2), encoding="utf-8")
RESULT = {"status": "sampling", "duration_seconds": 3}
```

<a id="source-lab-lab-set-capture-latest-py"></a>

### lab_set_capture_latest.py

```python
# 파일 역할: 완성 결과를 실제 값과 비교하는 검증 작업. 생성 코드와 검사 코드를 구분한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, unreal
from pathlib import Path

root = Path(unreal.Paths.project_dir()).resolve()
changes = []
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 obj의 값이 매번 바뀐다. 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 mode이다.
for obj in unreal.ObjectIterator(unreal.LiveLinkSourceSettings):
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: obj.get_path_name().startswith('/Engine/Transient') and obj.get_class().get_name() == 'LiveLinkHubMessageBusSourceSettings' 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 mode이다.
    if (
        obj.get_path_name().startswith("/Engine/Transient")
        and obj.get_class().get_name() == "LiveLinkHubMessageBusSourceSettings"
    ):
        before = str(obj.get_editor_property("mode"))
        obj.set_editor_property("mode", unreal.LiveLinkSourceMode.LATEST)
        # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
        changes.append(
            {
                "path": obj.get_path_name(),
                "before": before,
                "after": str(obj.get_editor_property("mode")),
            }
        )
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
RESULT = {
    "changes": changes,
    "reason": "Digital recorded data is evaluated as latest samples without an external synchronized timecode clock.",
    "received": json.loads(
        unreal.FeatureLabRuntimeLibrary.inspect_lab_live_link("FeatureLab_Body")
    ),
}
(root / "Evidence/case16-latest-evaluation.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-set-capture-session-input-py"></a>

### lab_set_capture_session_input.py

```python
# 파일 역할: EpicFeatureLab의 lab_set_capture_session_input 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Cinematics/DT_LabCaptureProductions
#   /Game/FeatureLab/

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, unreal
from pathlib import Path

root = Path(unreal.Paths.project_dir()).resolve()
manager = next(
    obj
    for obj in unreal.ObjectIterator(unreal.EditorUtilityWidget)
    if obj.get_class().get_name() == "EW_SessionManager_C"
    and obj.get_path_name().startswith("/Game/FeatureLab/")
)
entry = manager.get_editor_property("NewSessionNameEntry")
inner = entry.get_editor_property("SessionNameEntry")
inner.set_text("DigitalAnimation")
manager.set_editor_property("NewSessionId", "DigitalAnimation")
selection = manager.get_editor_property("ProductionSelection")
table = unreal.load_asset("/Game/FeatureLab/Cinematics/DT_LabCaptureProductions")
# JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
rows = json.loads(unreal.DataTableFunctionLibrary.export_data_table_to_json_string(table))
assert len(rows) == 1 and rows[0]["ProductionName"] == "EpicFeatureLab"
key = rows[0]["Name"]
selection.clear_options()
selection.add_option(key)
selection.set_selected_option(key)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 NewSessionId이다.
RESULT = {
    "session_input": str(manager.get_editor_property("NewSessionId")),
    "visible_text": str(inner.get_text()),
    "selected_production": str(selection.get_selected_option()),
    "production_record": rows[0],
}
(root / "Evidence/case16-session-input.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-test-capture-isolation-py"></a>

### lab_test_capture_isolation.py

```python
# 파일 역할: 완성 결과를 실제 값과 비교하는 검증 작업. 생성 코드와 검사 코드를 구분한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import builtins, json, time, unreal
from pathlib import Path

root = Path(unreal.Paths.project_dir()).resolve()
assert root.name == "EpicFeatureLab"
# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
level = unreal.get_editor_subsystem(unreal.LevelEditorSubsystem)
# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
editor = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
assert not editor.get_game_world()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert not unreal.TakeRecorderBlueprintLibrary.is_recording()
assert not hasattr(builtins, "_fl16_isolation_handle")
# 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
source = next(
    a
    for a in unreal.get_editor_subsystem(unreal.EditorActorSubsystem).get_all_level_actors()
    if isinstance(a, unreal.FeatureLabLiveLinkSource)
    and a.get_editor_property("provider_name") == "FeatureLab Digital Animation"
)
source.set_publishing(True)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert level.save_all_dirty_levels()
state = {"status": "waiting_for_pie", "started": time.monotonic()}
path = root / "Evidence/case16-publisher-isolation.json"


# 함수 tick: 이름은 tick이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: _ 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
def tick(_):
    # 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
    try:
        # world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
        world = editor.get_game_world()
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: world 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
        if world:
            if "pie_started" not in state:
                state["pie_started"] = time.monotonic()
            if time.monotonic() - state["pie_started"] >= 2:
                sources = unreal.GameplayStatics.get_all_actors_of_class(
                    world, unreal.FeatureLabLiveLinkSource
                )
                # 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 provider_name이다.
                values = [
                    {
                        "provider": a.get_editor_property("provider_name"),
                        "publishing_requested": a.get_editor_property("publish"),
                        "frames": a.get_editor_property("frames_published"),
                        "bones": a.get_editor_property("published_bone_count"),
                    }
                    for a in sources
                ]
                state["sources"] = values
                state["status"] = (
                    "passed"
                    if len(values) == 1
                    and values[0]["publishing_requested"]
                    and values[0]["frames"] == 0
                    else "failed"
                )
                # 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
                unreal.unregister_slate_post_tick_callback(builtins._fl16_isolation_handle)
                del builtins._fl16_isolation_handle
                level.editor_request_end_play()
                path.write_text(json.dumps(state, indent=2), encoding="utf-8")
        elif time.monotonic() - state["started"] > 45:
            raise RuntimeError("PIE did not begin")
    except Exception as e:
        if hasattr(builtins, "_fl16_isolation_handle"):
            # 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
            unreal.unregister_slate_post_tick_callback(builtins._fl16_isolation_handle)
            del builtins._fl16_isolation_handle
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: editor.get_game_world() 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
        if editor.get_game_world():
            level.editor_request_end_play()
        state["status"] = "error"
        state["error"] = str(e)
        path.write_text(json.dumps(state, indent=2), encoding="utf-8")


# 에디터 갱신 뒤 호출할 함수를 등록한다. 작업이 끝나면 핸들로 해제해야 반복 호출이 남지 않는다.
builtins._fl16_isolation_handle = unreal.register_slate_post_tick_callback(tick)
path.write_text(json.dumps(state, indent=2), encoding="utf-8")
level.editor_request_begin_play()
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "status": "testing_normal_pie_does_not_start_digital_publisher",
    "duration_seconds": 2,
}
```

<a id="source-lab-lab-verify-capture-roundtrip-py"></a>

### lab_verify_capture_roundtrip.py

```python
# 파일 역할: 완성 결과를 실제 값과 비교하는 검증 작업. 생성 코드와 검사 코드를 구분한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Cinematics/DT_LabCaptureSessions
#   /Game/FeatureLab/Cinematics/Productions/EpicFeatureLab/20261101_DigitalAnimation/Takes/Takes_20261101_DigitalAnimation
#   /Game/FeatureLab/Cinematics/Productions/EpicFeatureLab/20261101_DigitalAnimation/Takes/DigitalBodyHubReplay_02_Subscenes/Animation/Lab_DigitalPerformer_DigitalBodyHubReplay_02
#   /Game/FeatureLab/Cinematics/LS_LabDigitalReview
#   /Game/FeatureLab/Cinematics/MRG_LabDigitalPerformance
#   /Game/FeatureLab/Cinematics/MRQ_LabDigitalPerformance
#   /Game/FeatureLab/Maps/FL_16_DigitalPerformance.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, unreal
from pathlib import Path

root = Path(unreal.Paths.project_dir()).resolve()
assert root.name == "EpicFeatureLab"
checks = []


# 함수 check: 이름은 check이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: name, value, actual 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
def check(name, value, actual=None):
    checks.append({"name": name, "passed": bool(value), "actual": actual})


# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 편집 중인 월드를 얻는다. 게임 실행 월드와 다르므로 대상을 혼동하지 않는다.
world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world()
check(
    "Saved digital performance map reopens",
    world.get_path_name().startswith("/Game/FeatureLab/Maps/FL_16_DigitalPerformance."),
    world.get_path_name(),
)
# 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
actors = unreal.get_editor_subsystem(unreal.EditorActorSubsystem).get_all_level_actors()
performers = [a for a in actors if isinstance(a, unreal.CapturePerformer)]
check(
    "Session sublevel restores its one capture performer",
    len(performers) == 1,
    [a.get_path_name() for a in performers],
)
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: performers
if performers:
    a = performers[0]
    check(
        "Performer restores the digital subject",
        str(a.get_live_link_subject().name) == "FeatureLab_Body",
        str(a.get_live_link_subject().name),
    )
    check(
        "Performer restores the 93-bone Epic source mesh",
        "SKM_UEFN_Mannequin"
        in a.get_component_by_class(unreal.SkeletalMeshComponent)
        .get_skeletal_mesh_asset()
        .get_path_name(),
    )
sessions = unreal.load_asset("/Game/FeatureLab/Cinematics/DT_LabCaptureSessions")
# JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
rows = json.loads(unreal.DataTableFunctionLibrary.export_data_table_to_json_string(sessions))
check(
    "Mocap session database survives reopening",
    len(rows) == 1 and rows[0]["SessionName"] == "20261101_DigitalAnimation",
    len(rows),
)
# 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
takes = unreal.load_asset(
    "/Game/FeatureLab/Cinematics/Productions/EpicFeatureLab/20261101_DigitalAnimation/Takes/Takes_20261101_DigitalAnimation"
)
# JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
rows = json.loads(unreal.DataTableFunctionLibrary.export_data_table_to_json_string(takes))
take = next(r for r in rows if "DigitalBodyHubReplay_02" in r["RecordedTake"])
check("Native session database restores both takes", len(rows) == 2, len(rows))
check(
    "Second take retains actual Live Link classification",
    take["bContainsLiveLinkSources"] and take["Framerate"]["Numerator"] == 30,
    {"raw": take["bContainsLiveLinkSources"], "rate": take["Framerate"]},
)
# 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
clip = unreal.load_asset(
    "/Game/FeatureLab/Cinematics/Productions/EpicFeatureLab/20261101_DigitalAnimation/Takes/DigitalBodyHubReplay_02_Subscenes/Animation/Lab_DigitalPerformer_DigitalBodyHubReplay_02"
)
check(
    "Saved captured skeletal animation is usable",
    bool(clip) and clip.sequence_length > 5.5,
    clip.sequence_length if clip else None,
)
sequence = unreal.load_asset("/Game/FeatureLab/Cinematics/LS_LabDigitalReview")
check(
    "Edited review sequence retains its 3s timeline",
    sequence.get_display_rate().numerator == 30
    and sequence.get_playback_start() == 0
    and sequence.get_playback_end() == 90,
)
clips = [
    s.params.animation
    for b in sequence.get_bindings()
    for t in b.get_tracks()
    if isinstance(t, unreal.MovieSceneSkeletalAnimationTrack)
    for s in t.get_sections()
]
check("Review is driven by the actual captured clip", clips == [clip], [str(c) for c in clips])
camera_tracks = [
    t for t in sequence.get_tracks() if isinstance(t, unreal.MovieSceneCameraCutTrack)
]
check(
    "Review has a saved camera cut",
    len(camera_tracks) == 1 and len(camera_tracks[0].get_sections()) == 1,
)
graph = unreal.load_asset("/Game/FeatureLab/Cinematics/MRG_LabDigitalPerformance")
global_nodes = graph.get_nodes_for_branch(unreal.MovieGraphSettingNode, "Globals")
beauty = graph.get_nodes_for_branch(unreal.MovieGraphSettingNode, "Beauty")
classes = [n.get_class().get_name() for n in global_nodes + beauty]
check(
    "Saved graph reconnects all six substantive settings",
    all(
        c in classes
        for c in [
            "MovieGraphGlobalOutputSettingNode",
            "MovieGraphWarmUpSettingNode",
            "MovieGraphImageSequenceOutputNode_PNG",
            "MovieGraphMP4EncoderNode",
            "MovieGraphDeferredRenderPassNode",
            "MovieGraphRenderLayerNode",
        ]
    ),
    classes,
)
variables = {str(v.get_member_name()): v for v in graph.get_variables()}
check(
    "Graph retains editable resolution and destination inputs",
    set(variables) == {"ReviewResolution", "RenderDestination"},
    list(variables),
)
queue = unreal.load_asset("/Game/FeatureLab/Cinematics/MRQ_LabDigitalPerformance")
jobs = queue.get_jobs()
check(
    "Saved queue restores master, review and reset jobs",
    [str(j.job_name) for j in jobs] == ["Master_720p", "Review_360p", "Reset_720p"],
)
check(
    "All jobs use the saved graph and edited capture",
    [j.get_graph_preset() for j in jobs] == [graph] * 3
    and all(j.sequence.export_text() == sequence.get_path_name() for j in jobs),
    [str(j.sequence) for j in jobs],
)
perf = unreal.load_object(None, "/Script/UnrealEd.Default__EditorPerformanceSettings")
# 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 bThrottleCPUWhenNotForeground이다.
check(
    "Temporary background-throttle preference was restored",
    perf.get_editor_property("bThrottleCPUWhenNotForeground") is True,
)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "status": "passed" if all(c["passed"] for c in checks) else "failed",
    "checks": checks,
    "checks_passed": sum(c["passed"] for c in checks),
}
(root / "Evidence/case16-roundtrip-validation.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-source-mutablesample-featurelablivelink-cpp"></a>

### FeatureLabLiveLink.cpp

```cpp
// 파일 역할: 16번 디지털 애니메이션의 별도 Live Link 송신
// 클래스=작업 종류, 객체=실제 한 개, 포인터(* 또는 TObjectPtr)=다른 객체를 가리키는 참조.
// nullptr은 대상 없음, bool은 참/거짓, TArray는 순서 있는 목록, FString은 문자열이다.
// WITH_EDITOR 구간은 에디터 빌드에서만 사용하는 코드다. 원본과의 토큰 비교 결과는 code-validation.json에 기록한다.

#include "FeatureLabRuntime.h"
#include "Features/IModularFeatures.h"
#include "ILiveLinkClient.h"
#include "Roles/LiveLinkAnimationRole.h"
#include "Roles/LiveLinkAnimationTypes.h"
#include "Dom/JsonObject.h"
#include "Serialization/JsonSerializer.h"

// 【함수 역할】현재 객체와 실행 결과를 읽어 검증용 자료로 반환한다. 결과를 만드는 함수와 결과를 측정하는 함수를 구분해서 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
FString UFeatureLabRuntimeLibrary::InspectLabLiveLink(const FString &Subject)
{
    auto Json = MakeShared<FJsonObject>();
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    Json->SetStringField(TEXT("subject"), Subject);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    Json->SetBoolField(TEXT("frame_valid"), false);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (Subject.StartsWith(TEXT("FeatureLab_")) &&
        IModularFeatures::Get().IsModularFeatureAvailable(ILiveLinkClient::ModularFeatureName))
    {
        ILiveLinkClient &Client = IModularFeatures::Get().GetModularFeature<ILiveLinkClient>(
            ILiveLinkClient::ModularFeatureName);
        TArray<TSharedPtr<FJsonValue>> Sources;
        // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
        for (const FLiveLinkSubjectKey &Key : Client.GetSubjects(true, false))
            // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
            if (Key.SubjectName.Name.ToString() == Subject)
            {
                auto Source = MakeShared<FJsonObject>();
                // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
                Source->SetStringField(TEXT("guid"), Key.Source.ToString());
                // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
                Source->SetStringField(TEXT("type"), Client.GetSourceType(Key.Source).ToString());
                // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
                Source->SetStringField(TEXT("machine"),
                                       Client.GetSourceMachineName(Key.Source).ToString());
                Sources.Add(MakeShared<FJsonValueObject>(Source));
            }
        Json->SetArrayField(TEXT("sources"), Sources);
        FLiveLinkSubjectFrameData Data;
        // 【함수 역할】이름은 StaticClass이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
        // 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (Client.EvaluateFrame_AnyThread(FName(*Subject), ULiveLinkAnimationRole::StaticClass(),
                                           Data))
        {
            const auto *Skeleton = Data.StaticData.Cast<FLiveLinkSkeletonStaticData>();
            const auto *Frame = Data.FrameData.Cast<FLiveLinkAnimationFrameData>();
            // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
            if (Skeleton && Frame)
            {
                // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
                Json->SetBoolField(TEXT("frame_valid"), true);
                // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
                Json->SetNumberField(TEXT("bones"), Skeleton->BoneNames.Num());
                // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
                Json->SetNumberField(TEXT("transforms"), Frame->Transforms.Num());
                // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
                Json->SetNumberField(TEXT("scene_frame"),
                                     Frame->MetaData.SceneTime.Time.AsDecimal());
                auto Samples = MakeShared<FJsonObject>();
                // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
                for (int32 Index = 0;
                     Index < Skeleton->BoneNames.Num() && Index < Frame->Transforms.Num(); ++Index)
                {
                    const FString Bone = Skeleton->BoneNames[Index].ToString();
                    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
                    if (Index < 3 || Bone == TEXT("head") || Bone == TEXT("hand_l") ||
                        Bone == TEXT("hand_r") || Bone == TEXT("foot_l") || Bone == TEXT("foot_r"))
                    {
                        const auto &Transform = Frame->Transforms[Index];
                        const FVector T = Transform.GetTranslation();
                        const FRotator R = Transform.Rotator();
                        TArray<TSharedPtr<FJsonValue>> Values;
                        // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
                        for (double V : {T.X, T.Y, T.Z, R.Pitch, R.Yaw, R.Roll})
                            Values.Add(MakeShared<FJsonValueNumber>(V));
                        Samples->SetArrayField(Bone, Values);
                    }
                }
                Json->SetObjectField(TEXT("bone_samples_translation_rotation"), Samples);
            }
        }
    }
    FString Out;
    auto Writer = TJsonWriterFactory<>::Create(&Out);
    FJsonSerializer::Serialize(Json, Writer);
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return Out;
}
```

<a id="source-source-mutablesample-featurelabnavigation-cpp"></a>

### FeatureLabNavigation.cpp

```cpp
// 파일 역할: 20번 시작 메뉴, 맵 이동, F10 입력 전환과 16번 리뷰 재생
// 클래스=작업 종류, 객체=실제 한 개, 포인터(* 또는 TObjectPtr)=다른 객체를 가리키는 참조.
// nullptr은 대상 없음, bool은 참/거짓, TArray는 순서 있는 목록, FString은 문자열이다.
// WITH_EDITOR 구간은 에디터 빌드에서만 사용하는 코드다. 원본과의 토큰 비교 결과는 code-validation.json에 기록한다.

#include "FeatureLabNavigation.h"
#include "FeatureLabVegetation.h"
#include "Blueprint/WidgetTree.h"
#include "Camera/CameraActor.h"
#include "Components/Border.h"
#include "Components/Button.h"
#include "Components/ButtonSlot.h"
#include "Components/CanvasPanel.h"
#include "Components/CanvasPanelSlot.h"
#include "Components/InputComponent.h"
#include "Components/ScrollBox.h"
#include "Components/TextBlock.h"
#include "Components/VerticalBox.h"
#include "Components/VerticalBoxSlot.h"
#include "Engine/Engine.h"
#include "Engine/World.h"
#include "EngineUtils.h"
#include "GameFramework/PlayerController.h"
#include "GameFramework/Pawn.h"
#include "Kismet/GameplayStatics.h"
#include "LevelSequence.h"
#include "LevelSequenceActor.h"
#include "LevelSequencePlayer.h"
#include "Misc/App.h"
#include "Misc/CommandLine.h"
#include "Misc/Parse.h"
#include "Serialization/JsonSerializer.h"
#include "TimerManager.h"
// 빌드 조건에 따라 포함할 코드를 고른다. 게임 실행 중의 if 조건과 달리 빌드할 때 구분한다.
#if WITH_EDITOR
#include "Editor.h"
#include "MoviePipelineQueueSubsystem.h"
#endif

namespace
{
struct FLabEntry
{
    int32 Id;
    const TCHAR *Title;
    const TCHAR *Features;
    const TCHAR *Map;
    const TCHAR *Help;
};
const TArray<FLabEntry> &Entries()
{
    static const TArray<FLabEntry> List = {
        {1, TEXT("01  디지털 인물 제작"), TEXT("MetaHuman Creator · Mesh to MetaHuman"),
         TEXT("/Game/FeatureLab/Maps/FL_01_DigitalHuman"),
         TEXT(
             "가상의 얼굴과 체형을 편집하고 리깅한 디지털 인물을 확인합니다. 제작 도구는 편집기에서 사용합니다.")},
        {2, TEXT("02  AI 음성으로 얼굴 연기"), TEXT("MetaHuman Animator"),
         TEXT("/Game/FeatureLab/Maps/FL_02_Performance"),
         TEXT("합성 음성에서 생성한 얼굴 애니메이션과 감정 변형을 비교합니다.")},
        {3, TEXT("03  캐릭터와 표정 직접 편집"),
         TEXT("Control Rig · Skeletal Editor · Direct Mesh Controls"),
         TEXT("/Game/FeatureLab/Maps/FL_03_RigLab"),
         TEXT(
             "직접 제작한 스켈레톤과 표정 리그입니다. 리그 편집, 변형 및 애니메이션 베이크는 편집기에서 확인합니다.")},
        {4, TEXT("04  물리로 움직이는 캐릭터"), TEXT("Control Rig Physics · Dynamics"),
         TEXT("/Game/FeatureLab/Maps/FL_04_SecondaryMotion"),
         TEXT(
             "물리 리그, 동역학 리그와 기준 캐릭터를 비교합니다. 화면의 조작 안내로 충돌과 혼합 비율을 바꿉니다.")},
        {5, TEXT("05  이동 애니메이션과 상호작용"), TEXT("GASP · Motion Matching · Mover"),
         TEXT("/Game/Levels/DefaultLevel"),
         TEXT(
             "직접 이동하며 경사, 점프와 스마트 벤치를 시험합니다. WASD 이동, 마우스로 시점을 조절합니다.")},
        {6, TEXT("06  애니메이션 조립과 학습"), TEXT("UAF · AnimGen"),
         TEXT("/Game/FeatureLab/Maps/FL_06_GenerativeAnimation"),
         TEXT(
             "직접 제작한 애니메이션 그래프와 학습 데이터의 재구성 결과를 비교합니다. 학습은 이 프로젝트에서 수행한 로컬 워크플로입니다.")},
        {606, TEXT("06  AnimGen 이동 제어기"), TEXT("AnimGen Controller · Mover"),
         TEXT("/Game/FeatureLab/Maps/FL_06_AnimGenControl"),
         TEXT("학습 기반 제어기가 출력하는 애니메이션을 실제 이동과 함께 확인합니다.")},
        {7, TEXT("07  실행 중 외형과 장비 조합"), TEXT("Mutable"),
         TEXT("/Game/FeatureLab/Maps/FL_07_MutableMover"),
         TEXT("신체, 의상, 머리와 무기를 조합하고 이동 중 메시와 충돌을 확인합니다.")},
        {8, TEXT("08  디지털 인물 군중"), TEXT("MetaHuman Crowds · Mass"),
         TEXT("/Game/FeatureLab/Maps/FL_08_MetaHumanCrowd"),
         TEXT(
             "16명, 64명, 256명 군중의 생성과 이동, LOD 변화를 시험합니다. 표시 인원은 카메라와 거리의 영향을 받습니다.")},
        {9, TEXT("09  망토와 데이터 기반 의상"), TEXT("Chaos Cloth · Dataflow"),
         TEXT("/Game/FeatureLab/Maps/FL_09_ClothDataflow"),
         TEXT("신체 충돌, 고정점, 바람과 중력에 반응하는 망토입니다. R로 초기 상태를 복구합니다.")},
        {10, TEXT("10  규칙으로 만드는 환경"), TEXT("PCG"),
         TEXT("/Game/FeatureLab/Maps/FL_10_ProceduralEnvironment"),
         TEXT(
             "시드, 밀도와 스플라인을 바꾸며 실제 생성 결과를 비교합니다. R로 같은 기준 배치를 재생성합니다.")},
        {11, TEXT("11  동굴과 돌출 지형"), TEXT("Mesh Terrain · World Partition · PCG"),
         TEXT("/Game/FeatureLab/Maps/FL_11_MeshTerrain_WP"),
         TEXT(
             "실제로 충돌하는 메시 지형을 걷습니다. W/S 이동, P 정지, C 시점, R 초기화. 지형 편집은 편집기에서 합니다.")},
        {12, TEXT("12  절차적 식생과 바람"), TEXT("PVE · Nanite Foliage · Megaplants"),
         TEXT("/Game/FeatureLab/Maps/FL_12_NaniteVegetation"),
         TEXT(
             "1/2/3 바람, D 방향, C 거리, F 숲, G 수종, V 은행나무 변형, R 초기화. 나무 제작 그래프는 편집기에서 확인합니다.")},
        {13, TEXT("13  다수의 동적 조명"), TEXT("MegaLights · Lumen Lite"),
         TEXT("/Game/FeatureLab/Maps/FL_13_DynamicLighting"),
         TEXT(
             "1 MegaLights, 2 High/Lite, 3 GI, D 조명 수, B 차폐물, P 정지, R 초기화. GPU 결과와 화면 변화를 비교합니다.")},
        {14, TEXT("14  층상 재질과 만화풍 셰이딩"), TEXT("Substrate · Toon Shader"),
         TEXT("/Game/FeatureLab/Maps/FL_14_SubstrateToon"),
         TEXT("1 코팅 두께, 2 거칠기, 3 Toon 램프, 4 색상, L 조명, C 시점, P 정지, R 초기화.")},
        {15, TEXT("15  AI 편집과 선택적 적용"),
         TEXT("Unreal MCP · AI Assistant · Sandboxed Editing"),
         TEXT("/Game/FeatureLab/Maps/FL_15_AIWorkflow"),
         TEXT(
             "편집기 워크플로입니다. 두 재질을 격리해서 제안하고 승인한 것만 원본에 적용한 뒤 복구합니다. AI Assistant의 실제 문서 응답도 검증했습니다.")},
        {16, TEXT("16  디지털 촬영과 영상 출력"),
         TEXT("Live Link Hub · Mocap Manager · Movie Render Graph"),
         TEXT("/Game/FeatureLab/Maps/FL_16_DigitalPerformance"),
         TEXT(
             "저장된 촬영 테이크를 재생합니다. P 재생/정지, R 처음부터. 원본 스트림 수신, 촬영 세션과 렌더 그래프 작업은 편집기에서 확인합니다.")},
        {17, TEXT("17  로컬 변경 이력과 복원"), TEXT("Lore · 외부 제작 워크플로"), TEXT(""),
         TEXT(
             "실제 프로젝트에 로컬 Lore 저장소가 있습니다. 변경 기록, 선택 복원과 저장소 무결성을 검증했습니다. 프로젝트의 ExternalWorkflows/LoreRuntime과 검증 자료를 확인하세요. 실행 게임 밖에서 사용하는 도구입니다.")},
        {18, TEXT("18  공식 에셋의 반입과 활용"), TEXT("Fab · Megaplants Ginkgo"),
         TEXT("/Game/FeatureLab/Maps/FL_12_NaniteVegetation"),
         TEXT(
             "Fab에서 반입한 공식 은행나무입니다. G 수종, V 변형, F 숲, 1/2/3 바람, R 초기화. 원본 라이선스와 출처 자료를 보존했습니다.")},
        {19, TEXT("19  차세대 엔진 제공 상태"), TEXT("UE6 · Verse · Scene Graph"), TEXT(""),
         TEXT(
             "현재 UE 5.8 프로젝트에서는 이 세 기능의 실제 실행을 구현했다고 주장하지 않습니다. UE6는 일반 사용 시점 이전이고, 로컬 Verse VM은 비활성화되어 있으며 Scene Graph는 UEFN의 Verse 기반 기능입니다. 공식 제공 상태와 실행 제약을 별도로 기록했습니다.")}};
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return List;
}
UTextBlock *Label(UWidgetTree *Tree, const FString &Text, int32 Size,
                  const FLinearColor &Color = FLinearColor::White)
{
    auto *W = Tree->ConstructWidget<UTextBlock>();
    W->SetText(FText::FromString(Text));
    auto Font = W->GetFont();
    Font.Size = Size;
    W->SetFont(Font);
    W->SetColorAndOpacity(FSlateColor(Color));
    W->SetAutoWrapText(true);
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return W;
}
} // namespace

// 【함수 역할】이름은 Configure이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void UFeatureLabMenuRow::Configure(AFeatureLabNavigator *InNavigator, int32 InIndex)
{
    Navigator = InNavigator;
    Index = InIndex;
}
// 【함수 역할】이름은 RebuildWidget이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
TSharedRef<SWidget> UFeatureLabMenuRow::RebuildWidget()
{
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!WidgetTree)
        WidgetTree = NewObject<UWidgetTree>(this);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!WidgetTree->RootWidget)
    {
        const auto &E = Entries()[Index];
        auto *Button = WidgetTree->ConstructWidget<UButton>();
        Button->SetBackgroundColor(FLinearColor(.045f, .065f, .10f, 1));
        Button->SetToolTipText(FText::FromString(E.Help));
        Button->OnClicked.AddDynamic(this, &UFeatureLabMenuRow::Choose);
        auto *Box = WidgetTree->ConstructWidget<UVerticalBox>();
        auto *RowButtonSlot = Cast<UButtonSlot>(Button->AddChild(Box));
        RowButtonSlot->SetHorizontalAlignment(HAlign_Fill);
        RowButtonSlot->SetPadding(FMargin(18.f, 10.f));
        Box->AddChildToVerticalBox(Label(WidgetTree, E.Title, 20));
        Box->AddChildToVerticalBox(Label(WidgetTree, E.Features, 14, FLinearColor(.47f, .75f, 1)));
        WidgetTree->RootWidget = Button;
    }
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return Super::RebuildWidget();
}
// 【함수 역할】이름은 Choose이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void UFeatureLabMenuRow::Choose()
{
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (Navigator)
        Navigator->OpenEntry(Index);
}
// 【함수 역할】이름은 Configure이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void UFeatureLabMenu::Configure(AFeatureLabNavigator *InNavigator)
{
    Navigator = InNavigator;
    SetIsFocusable(true);
}
// 【함수 역할】이름은 RebuildWidget이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
TSharedRef<SWidget> UFeatureLabMenu::RebuildWidget()
{
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!WidgetTree)
        WidgetTree = NewObject<UWidgetTree>(this);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!WidgetTree->RootWidget)
    {
        auto *Canvas = WidgetTree->ConstructWidget<UCanvasPanel>();
        WidgetTree->RootWidget = Canvas;
        MenuBorder = WidgetTree->ConstructWidget<UBorder>();
        MenuBorder->SetBrushColor(FLinearColor(.012f, .02f, .035f, .98f));
        MenuBorder->SetPadding(FMargin(26));
        auto *Panel = Cast<UCanvasPanelSlot>(Canvas->AddChild(MenuBorder));
        Panel->SetAnchors(FAnchors(.08f, .06f, .92f, .94f));
        Panel->SetOffsets(FMargin(0));
        auto *Box = WidgetTree->ConstructWidget<UVerticalBox>();
        MenuBorder->SetContent(Box);
        Box->AddChildToVerticalBox(Label(WidgetTree, TEXT("Epic 기능 실험실"), 30));
        Box->AddChildToVerticalBox(Label(WidgetTree,
                                         TEXT("1–18 로컬 워크플로 검증 완료 · 19 제공 상태 확인"),
                                         16, FLinearColor(.50f, .82f, .72f)));
        auto *Scroll = WidgetTree->ConstructWidget<UScrollBox>();
        auto *ScrollSlot = Box->AddChildToVerticalBox(Scroll);
        ScrollSlot->SetSize(FSlateChildSize(ESlateSizeRule::Fill));
        ScrollSlot->SetPadding(FMargin(0, 14, 0, 8));
        // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
        for (int32 I = 0; I < Entries().Num(); ++I)
        {
            auto *Row = CreateWidget<UFeatureLabMenuRow>(GetOwningPlayer());
            Row->Configure(Navigator, I);
            Scroll->AddChild(Row);
        }
        DetailText = Label(WidgetTree, TEXT("실험을 선택하세요. F10으로 목록을 열고 닫습니다."), 15,
                           FLinearColor(.82f, .86f, .92f));
        Box->AddChildToVerticalBox(DetailText);
        Box->AddChildToVerticalBox(Label(WidgetTree,
                                         TEXT("F10 목록 · Esc 돌아가기 · 마우스 휠로 스크롤"), 13,
                                         FLinearColor(.5f, .6f, .7f)));
        auto *Home = WidgetTree->ConstructWidget<UButton>();
        Home->OnClicked.AddDynamic(this, &UFeatureLabMenu::ToggleMenu);
        auto *HomeText = Label(WidgetTree, TEXT("F10  실험 목록"), 16);
        HomeText->SetAutoWrapText(false);
        Home->AddChild(HomeText);
        auto *HomeSlot = Cast<UCanvasPanelSlot>(Canvas->AddChild(Home));
        HomeSlot->SetAnchors(FAnchors(1, 1));
        HomeSlot->SetAlignment(FVector2D(1, 1));
        HomeSlot->SetPosition(FVector2D(-18, -18));
        HomeSlot->SetSize(FVector2D(190, 42));
    }
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return Super::RebuildWidget();
}
// 【함수 역할】이름은 ShowMenu이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void UFeatureLabMenu::ShowMenu(bool bShow)
{
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (MenuBorder)
        // 화면 표시 여부를 바꾼다. 뼈 포즈 계산이나 물리까지 중단하는 호출과는 다르다.
        MenuBorder->SetVisibility(bShow ? ESlateVisibility::Visible : ESlateVisibility::Collapsed);
}
// 【함수 역할】이름은 ShowDetails이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void UFeatureLabMenu::ShowDetails(const FText &Text)
{
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (DetailText)
        DetailText->SetText(Text);
}
// 【함수 역할】현재 선택 상태를 다음 상태로 바꾸고 결과에 반영한다. 켬·끔 전환인지 여러 선택지 순환인지 조건문을 따라 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void UFeatureLabMenu::ToggleMenu()
{
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (Navigator)
        Navigator->ToggleMenu();
}
// 【함수 역할】이름은 NativeOnKeyDown이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
FReply UFeatureLabMenu::NativeOnKeyDown(const FGeometry &Geometry, const FKeyEvent &Event)
{
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (Event.GetKey() == EKeys::F10 || Event.GetKey() == EKeys::Escape)
    {
        ToggleMenu();
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return FReply::Handled();
    }
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return Super::NativeOnKeyDown(Geometry, Event);
}

// 【함수 역할】클래스의 기본 부품과 기본값을 준비하는 생성자다. 이 시점에는 게임 월드가 모두 준비됐다고 가정하지 않는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
AFeatureLabNavigator::AFeatureLabNavigator()
{
    PrimaryActorTick.bCanEverTick = false;
}
// 【함수 역할】액터가 게임 월드에서 실행을 시작할 때 엔진이 호출한다. 생성자에서 부품을 만든 뒤 실제 월드·플레이어·입력과 연결하는 초기 준비 단계다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabNavigator::BeginPlay()
{
    // 부모 클래스의 기본 처리를 먼저/함께 실행한다. 자식 클래스의 추가 작업만으로 엔진 기본 동작을 대체하지 않는다.
    Super::BeginPlay();
    GetWorldTimerManager().SetTimerForNextTick(this, &AFeatureLabNavigator::SetupNavigation);
}
// 【함수 역할】플레이어와 입력을 얻고 메뉴를 준비한다. 16번 리뷰 시퀀스는 엔진 준비가 끝난 이 시점에 불러온다. 네이티브 생성자에서 너무 일찍 로드했던 시작 충돌을 피한다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabNavigator::SetupNavigation()
{
    Controller = UGameplayStatics::GetPlayerController(this, 0);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Controller || !Controller->IsLocalController())
        return;
    EnableInput(Controller);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (InputComponent)
    {
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        auto &Binding = InputComponent->BindKey(EKeys::F10, IE_Pressed, this,
                                                &AFeatureLabNavigator::ToggleMenu);
        Binding.bExecuteWhenPaused = true;
    }
    Menu = CreateWidget<UFeatureLabMenu>(Controller);
    Menu->Configure(this);
    Menu->AddToViewport(100);
    Menu->ShowMenu(false);
    const FString Name = GetWorld()->GetName();
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (Name.Contains(TEXT("FL_Hub")))
        ToggleMenu();
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (Name.Contains(TEXT("FL_09_ClothDataflow")))
    {
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (AActor *View = Controller->GetViewTarget(); View && View->IsA<ACameraActor>())
            View->AddActorWorldOffset(-View->GetActorForwardVector() * 200.f);
    }
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (Name.Contains(TEXT("FL_15_AIWorkflow")))
    {
        // This comparison uses its authored camera; the unused pawn is not a test object.
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (APawn *PreviewPawn = Controller->GetPawn())
            PreviewPawn->SetActorHiddenInGame(true);
        // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
        for (TActorIterator<ACameraActor> It(GetWorld()); It; ++It)
            // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
            if (It->ActorHasTag(TEXT("FeatureLab_15")))
            {
                Controller->SetViewTarget(*It);
                break;
            }
    }
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (Name.Contains(TEXT("FL_16_DigitalPerformance")))
    {
        // Actor locator fragment types are registered during engine initialization.
        // Loading this sequence from a native CDO constructor is too early in a
        // cooked game, so resolve it only after the capture world has begun play.
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (!ReviewSequence)
            ReviewSequence = LoadObject<ULevelSequence>(
                nullptr,
                TEXT("/Game/FeatureLab/Cinematics/LS_LabDigitalReview.LS_LabDigitalReview"));
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (ReviewSequence)
        {
            FMovieSceneSequencePlaybackSettings Settings;
            Settings.LoopCount.Value = -1;
            Settings.FinishCompletionStateOverride =
                EMovieSceneCompletionModeOverride::ForceRestoreState;
            ALevelSequenceActor *SequenceActor = nullptr;
            ReviewPlayer = ULevelSequencePlayer::CreateLevelSequencePlayer(
                GetWorld(), ReviewSequence, Settings, SequenceActor);
            // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
            if (ReviewPlayer)
                ReviewPlayer->Play();
            // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
            if (InputComponent)
            {
                // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
                InputComponent->BindKey(EKeys::P, IE_Pressed, this,
                                        &AFeatureLabNavigator::ToggleCapturePlayback);
                // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
                InputComponent->BindKey(EKeys::R, IE_Pressed, this,
                                        &AFeatureLabNavigator::ResetCapturePlayback);
            }
        }
    }
    const FString Requested = GetWorld()->URL.GetOption(TEXT("FeatureLabCase="), TEXT(""));
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (const auto &Entry : Entries())
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (Requested == FString::FromInt(Entry.Id))
            Menu->ShowDetails(FText::FromString(Entry.Help));
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (Requested == TEXT("18"))
    {
        // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
        for (TActorIterator<AFeatureLabVegetationActor> It(GetWorld()); It; ++It)
        {
            It->ToggleForestSpecies();
            It->ToggleForest();
            It->CycleView();
            It->CycleView();
            It->CycleView();
        }
    }
}
// 【함수 역할】현재 선택 상태를 다음 상태로 바꾸고 결과에 반영한다. 켬·끔 전환인지 여러 선택지 순환인지 조건문을 따라 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabNavigator::ToggleMenu()
{
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Controller || !Menu)
        return;
    bMenuOpen = !bMenuOpen;
    Menu->ShowMenu(bMenuOpen);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (bMenuOpen)
    {
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (GEngine)
        {
            bPreviousDebugDisplay = GEngine->bEnableOnScreenDebugMessagesDisplay;
            GEngine->bEnableOnScreenDebugMessagesDisplay = false;
        }
        bPreviousPause = UGameplayStatics::IsGamePaused(this);
        bPreviousCursor = Controller->bShowMouseCursor;
        UGameplayStatics::SetGamePaused(this, true);
        Controller->bShowMouseCursor = true;
        FInputModeGameAndUI Mode;
        Mode.SetWidgetToFocus(Menu->TakeWidget());
        Mode.SetLockMouseToViewportBehavior(EMouseLockMode::DoNotLock);
        Mode.SetHideCursorDuringCapture(false);
        Controller->SetInputMode(Mode);
    }
    else
    {
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (GEngine)
            GEngine->bEnableOnScreenDebugMessagesDisplay = bPreviousDebugDisplay;
        UGameplayStatics::SetGamePaused(this, bPreviousPause);
        Controller->bShowMouseCursor = bPreviousCursor;
        Controller->SetInputMode(FInputModeGameOnly());
    }
}
// 【함수 역할】이름은 OpenEntry이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabNavigator::OpenEntry(int32 Index)
{
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Entries().IsValidIndex(Index) || !Menu)
        return;
    const auto &E = Entries()[Index];
    LastOpened = Index;
    Menu->ShowDetails(FText::FromString(E.Help));
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!FCString::Strlen(E.Map))
        return;
    UGameplayStatics::SetGamePaused(this, false);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (Controller)
        Controller->bShowMouseCursor = false;
    UGameplayStatics::OpenLevel(this, FName(E.Map), true,
                                FString::Printf(TEXT("FeatureLabCase=%d"), E.Id));
}
// 【함수 역할】현재 선택 상태를 다음 상태로 바꾸고 결과에 반영한다. 켬·끔 전환인지 여러 선택지 순환인지 조건문을 따라 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabNavigator::ToggleCapturePlayback()
{
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (ReviewPlayer)
    {
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (ReviewPlayer->IsPlaying())
            ReviewPlayer->Pause();
        else
            ReviewPlayer->Play();
    }
}
// 【함수 역할】저장된 리뷰 시퀀스의 재생 위치를 처음으로 보내고 다시 재생한다. 원본 Hub 녹화 파일을 지우거나 새로 녹화하는 작업이 아니다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabNavigator::ResetCapturePlayback()
{
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (ReviewPlayer)
    {
        ReviewPlayer->SetPlaybackPosition(
            FMovieSceneSequencePlaybackParams(0.f, EUpdatePositionMethod::Jump));
        ReviewPlayer->Play();
    }
}
// 【함수 역할】현재 객체와 실행 결과를 읽어 검증용 자료로 반환한다. 결과를 만드는 함수와 결과를 측정하는 함수를 구분해서 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
FString AFeatureLabNavigator::CaptureNavigation() const
{
    auto O = MakeShared<FJsonObject>();
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetBoolField(TEXT("menu_open"), bMenuOpen);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("entry_count"), Entries().Num());
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetNumberField(TEXT("last_opened"), LastOpened);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetStringField(TEXT("map"), GetWorld()->GetName());
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    O->SetBoolField(TEXT("capture_review_available"), ReviewPlayer != nullptr);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (ReviewPlayer)
    {
        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
        O->SetBoolField(TEXT("capture_playing"), ReviewPlayer->IsPlaying());
        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
        O->SetNumberField(TEXT("capture_seconds"), ReviewPlayer->GetCurrentTime().AsSeconds());
    }
    FString S;
    auto Writer = TJsonWriterFactory<>::Create(&S);
    FJsonSerializer::Serialize(O, Writer);
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return S;
}
// 【함수 역할】레벨 이동이나 실행 종료 때 남은 콜백·참조·임시 상태를 정리한다. 다음 실행에 이전 작업이 남지 않도록 하는 종료 단계다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabNavigator::EndPlay(const EEndPlayReason::Type Reason)
{
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (bMenuOpen && GEngine)
        GEngine->bEnableOnScreenDebugMessagesDisplay = bPreviousDebugDisplay;
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (Menu)
        Menu->RemoveFromParent();
    // 부모 클래스의 기본 처리를 먼저/함께 실행한다. 자식 클래스의 추가 작업만으로 엔진 기본 동작을 대체하지 않는다.
    Super::EndPlay(Reason);
}
// 【함수 역할】이름은 DoesSupportWorldType이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
bool UFeatureLabNavigationSubsystem::DoesSupportWorldType(EWorldType::Type Type) const
{
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return Type == EWorldType::Game || Type == EWorldType::PIE;
}
// 【함수 역할】이름은 OnWorldBeginPlay이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void UFeatureLabNavigationSubsystem::OnWorldBeginPlay(UWorld &InWorld)
{
    // 부모 클래스의 기본 처리를 먼저/함께 실행한다. 자식 클래스의 추가 작업만으로 엔진 기본 동작을 대체하지 않는다.
    Super::OnWorldBeginPlay(InWorld);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (FString(FApp::GetProjectName()) != TEXT("EpicFeatureLab") ||
        InWorld.GetNetMode() == NM_DedicatedServer ||
        FParse::Param(FCommandLine::Get(), TEXT("FeatureLabDigitalPublisher")))
        return;
// 빌드 조건에 따라 포함할 코드를 고른다. 게임 실행 중의 if 조건과 달리 빌드할 때 구분한다.
#if WITH_EDITOR
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (GEditor)
    {
        auto *Queue = GEditor->GetEditorSubsystem<UMoviePipelineQueueSubsystem>();
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (Queue && Queue->IsRendering())
            return;
    }
#endif
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (TActorIterator<AFeatureLabNavigator> It(&InWorld); It; ++It)
        return;
    InWorld.SpawnActor<AFeatureLabNavigator>();
}
```

<a id="source-source-mutablesample-featurelabnavigation-h"></a>

### FeatureLabNavigation.h

```cpp
// 파일 역할: 20번 시작 메뉴, 맵 이동, F10 입력 전환과 16번 리뷰 재생
// 클래스=작업 종류, 객체=실제 한 개, 포인터(* 또는 TObjectPtr)=다른 객체를 가리키는 참조.
// nullptr은 대상 없음, bool은 참/거짓, TArray는 순서 있는 목록, FString은 문자열이다.
// WITH_EDITOR 구간은 에디터 빌드에서만 사용하는 코드다. 원본과의 토큰 비교 결과는 code-validation.json에 기록한다.

#pragma once
#include "CoreMinimal.h"
#include "Blueprint/UserWidget.h"
#include "GameFramework/Actor.h"
#include "Subsystems/WorldSubsystem.h"
#include "FeatureLabNavigation.generated.h"
class UBorder;
class UTextBlock;
class ULevelSequence;
class ULevelSequencePlayer;
class AFeatureLabNavigator;

// 아래 클래스 또는 구조체를 언리얼이 인식하도록 선언한다. 일반 C++ 선언에 엔진 등록 정보를 덧붙인 것이다.
UCLASS()
class MUTABLESAMPLE_API UFeatureLabMenuRow : public UUserWidget
{
    // 언리얼 헤더 도구가 필요한 보조 코드를 연결하는 매크로다. 함수 본문을 직접 작성하는 자리가 아니다.
    GENERATED_BODY()
  public:
    void Configure(AFeatureLabNavigator *InNavigator, int32 InIndex);

  protected:
    virtual TSharedRef<SWidget> RebuildWidget() override;
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION() void Choose();

  private:
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY() TObjectPtr<AFeatureLabNavigator> Navigator;
    int32 Index = 0;
};

// 아래 클래스 또는 구조체를 언리얼이 인식하도록 선언한다. 일반 C++ 선언에 엔진 등록 정보를 덧붙인 것이다.
UCLASS()
class MUTABLESAMPLE_API UFeatureLabMenu : public UUserWidget
{
    // 언리얼 헤더 도구가 필요한 보조 코드를 연결하는 매크로다. 함수 본문을 직접 작성하는 자리가 아니다.
    GENERATED_BODY()
  public:
    void Configure(AFeatureLabNavigator *InNavigator);
    void ShowMenu(bool bShow);
    void ShowDetails(const FText &Details);

  protected:
    virtual TSharedRef<SWidget> RebuildWidget() override;
    virtual FReply NativeOnKeyDown(const FGeometry &Geometry, const FKeyEvent &Event) override;
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION() void ToggleMenu();

  private:
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY() TObjectPtr<AFeatureLabNavigator> Navigator;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY() TObjectPtr<UBorder> MenuBorder;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY() TObjectPtr<UTextBlock> DetailText;
};

// 아래 클래스 또는 구조체를 언리얼이 인식하도록 선언한다. 일반 C++ 선언에 엔진 등록 정보를 덧붙인 것이다.
UCLASS()
class MUTABLESAMPLE_API AFeatureLabNavigator : public AActor
{
    // 언리얼 헤더 도구가 필요한 보조 코드를 연결하는 매크로다. 함수 본문을 직접 작성하는 자리가 아니다.
    GENERATED_BODY()
  public:
    AFeatureLabNavigator();
    virtual void BeginPlay() override;
    virtual void EndPlay(const EEndPlayReason::Type Reason) override;
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void ToggleMenu();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void OpenEntry(int32 Index);
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void ToggleCapturePlayback();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void ResetCapturePlayback();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") FString CaptureNavigation() const;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, Category = "FeatureLab") TObjectPtr<ULevelSequence> ReviewSequence;

  private:
    void SetupNavigation();
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY() TObjectPtr<UFeatureLabMenu> Menu;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY() TObjectPtr<ULevelSequencePlayer> ReviewPlayer;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY() TObjectPtr<APlayerController> Controller;
    bool bMenuOpen = false, bPreviousPause = false, bPreviousCursor = false,
         bPreviousDebugDisplay = true;
    int32 LastOpened = -1;
};

// 아래 클래스 또는 구조체를 언리얼이 인식하도록 선언한다. 일반 C++ 선언에 엔진 등록 정보를 덧붙인 것이다.
UCLASS()
class MUTABLESAMPLE_API UFeatureLabNavigationSubsystem : public UWorldSubsystem
{
    // 언리얼 헤더 도구가 필요한 보조 코드를 연결하는 매크로다. 함수 본문을 직접 작성하는 자리가 아니다.
    GENERATED_BODY()
  public:
    virtual void OnWorldBeginPlay(UWorld &InWorld) override;

  protected:
    virtual bool DoesSupportWorldType(EWorldType::Type Type) const override;
};
```
