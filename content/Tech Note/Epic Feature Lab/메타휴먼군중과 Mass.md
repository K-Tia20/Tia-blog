

캐릭터 하나를 복사해서 많이 놓는 것과 군중 시스템으로 인물을 운영하는 것은 다르다. 이번에는 메타휴먼 인물 자료를 군중용으로 조립하고, **Mass**의 실제 엔티티를 생성해 이동시켰다.

MetaHuman Crowds는 인물의 시각 자료를 준비하는 쪽, Mass는 많은 개체의 상태와 처리를 운영하는 쪽으로 나눠 보면 이해하기 쉽다. 엔티티는 Mass가 관리하는 개체의 식별 단위다.

![실제 메타휴먼 군중](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/08/result.png)

## 화면에서 먼저 인원을 바꿔 보기

1. `Content → FeatureLab → Maps → FL_08_MetaHumanCrowd`를 더블클릭한다.
2. **▶ Play** 후 게임 영역을 클릭한다.
3. **1 → 2 → 3** 순서로 16명, 64명, 256명을 바꿔 본다.
4. **T**로 이동을 멈췄다가 재개한다.
5. **V**로 카메라를 바꿔 가까운 인물과 먼 인물을 비교한다.
6. **R**로 초기화한다. 최종 코드는 기본 64명으로 돌아간다.
7. **■ Stop**을 눌러 에디터로 돌아온다.

## 인물 자료와 Mass 설정 찾기

`Content → FeatureLab → Crowds`에서 `MC_LabCrowd`를 연다. 인물 컬렉션을 확인하는 파일이다. `MEC_LabCrowd`는 Mass 개체에 어떤 구성과 표현을 사용할지 정한 설정이다.

![군중 에셋 위치](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/08/folder.png)

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
| `MetaHuman Collection` | 여러 메타휴먼 인물과 조립 자료를 모은 컬렉션. |
| `Build / Auto Build` | 컬렉션 자료 생성 / 변경에 맞춰 자동으로 생성하는 설정. |
| `Skinning / Instanced Skinned Mesh` | 뼈 변형을 표면에 반영하는 처리 / 스킨드 메시를 여러 개 표현하는 자료. |
| `Instance Proxy` | 컬렉션에서 만들어진 개별 인물 자료를 확인하는 대상. |
| `Mass / Entity` | 많은 개체를 자료 중심으로 관리하는 시스템 / 그 시스템의 개체 한 개. |
| `Entity Config / Config` | 엔티티가 어떤 조각·기능을 가질지 정한 설정 / 설정 영역. |
| `Traits / Fragments` | 엔티티 구성에 넣을 기능 묶음 / 엔티티에 보관되는 자료 조각. |
| `LOD` | 거리와 필요에 따라 상세도를 나누는 단계. |
| `MC_LabCrowd / MEC_LabCrowd` | 인물 조립 컬렉션 / 실제 Mass 엔티티 구성 에셋 이름. |
| `Update / Reset` | 현재 설정 반영 / 기준 상태로 초기화. |


![컬렉션과 군중 설정을 확인하는 화면](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/08/settings.png)

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
| `MetaHuman Collection` | 여러 메타휴먼 인물과 조립 자료를 모은 컬렉션. |
| `Build / Auto Build` | 컬렉션 자료 생성 / 변경에 맞춰 자동으로 생성하는 설정. |
| `Skinning / Instanced Skinned Mesh` | 뼈 변형을 표면에 반영하는 처리 / 스킨드 메시를 여러 개 표현하는 자료. |
| `Instance Proxy` | 컬렉션에서 만들어진 개별 인물 자료를 확인하는 대상. |
| `Mass / Entity` | 많은 개체를 자료 중심으로 관리하는 시스템 / 그 시스템의 개체 한 개. |
| `Entity Config / Config` | 엔티티가 어떤 조각·기능을 가질지 정한 설정 / 설정 영역. |
| `Traits / Fragments` | 엔티티 구성에 넣을 기능 묶음 / 엔티티에 보관되는 자료 조각. |
| `LOD` | 거리와 필요에 따라 상세도를 나누는 단계. |
| `MC_LabCrowd / MEC_LabCrowd` | 인물 조립 컬렉션 / 실제 Mass 엔티티 구성 에셋 이름. |
| `Update / Reset` | 현재 설정 반영 / 기준 상태로 초기화. |


직접 만든 두 메타휴먼 정체성을 공식 군중 파이프라인으로 조립했다. 정체성은 인물의 외형을 구분하는 자료다. 여기에 GASP 보행을 리타게팅하고 베이크해 군중 개체에서 재생했다. 최종 장면은 실제 생성 피부를 사용한다. 임시 흰 피부를 사용했던 중간 상태와 구분했다.

## 준비한 자료를 실제 개체로 생성하기

흐름은 `인물 컬렉션 → 군중용 메시·애니메이션 자료 → Mass 설정 → 엔티티 생성 → 이동과 표시`다. 컬렉션 파일을 만들었다고 화면에 군중이 자동으로 생기는 것은 아니다. 생성 요청과 실제 엔티티 개수를 확인했다.

개체가 멀어지면 화면 표현을 바꾸거나 표시를 줄이는 LOD도 확인했다. LOD는 거리에 따라 세부 표현을 조절하는 방식이다. ‘256명 생성’과 ‘현재 화면에 256명이 모두 보임’은 다른 조건이다. 카메라 범위와 표시 거리 때문에 보이는 인원은 달라질 수 있다.

## R을 누르면 실행본이 꺼졌던 원인

초기 패키지에서 군중을 늘린 뒤 R을 누르면 Mass가 개체를 처리하는 도중 파괴 요청이 들어가 충돌했다. 버튼이 눌리는 순간 생성·파괴를 바로 수행했던 것이 문제였다.

수정 뒤에는 입력에서 ‘초기화 요청’만 남겼다. 실제 파괴와 재생성은 틱에서 Mass 엔티티 매니저가 처리 중인지 확인한 뒤 실행한다. 틱은 일정한 갱신 시점에 호출되는 함수다. 화면상으로는 같은 R 버튼이지만 실행 시점을 안전한 때로 옮긴 것이다.

이 코드는 [FeatureLabCrowdRuntime.cpp](#source-source-mutablesample-featurelabcrowdruntime-cpp)의 `ResetCrowd`와 `Tick`에서 읽을 수 있다. 주석 설명본에서 요청과 실제 처리의 차이를 구분했다.

## 에디터에서는 됐는데 패키지에서 문제가 난 부분

군중 컬렉션에는 편집기 전용 `DefaultInstance` 템플릿이 포함되는 문제가 있었다. 런타임에서 없는 템플릿을 찾다가 로딩 오류가 났다. 엔진을 고치지 않고, 이 프로젝트의 해당 컬렉션을 굽는 과정에서만 편집기 전용 대상을 제외했다. 원본 인물 에셋 파일은 변경하지 않았다.

또 다른 문제는 SM5 재질 출력이었다. 현재 실행 환경은 DX12·SM6인데 SM5 출력에서 실패한 재질 데이터가 함께 들어갔다. 프로젝트의 Windows 대상을 SM6로 맞추고 다시 굽자 해당 로딩 오류가 사라졌다. 구체적인 설정과 재패키징 순서는 20편에서 다룬다.

## 무엇까지 확인했나

두 인물 정체성과 실제 엔티티, 이동·정지, LOD, 반복 초기화와 저장 후 재개를 검사했다. 최종 실행본에서는 초기화 충돌이 사라졌고 관련 템플릿·ShaderMap 오류도 없어졌다.

에디터의 프레임 관찰에는 30fps 상한이 있었다. GPU 단독 성능이나 다른 PC에서의 군중 최대 인원을 측정한 자료는 아니다. 숫자만 보고 ‘256명은 무조건 가볍다’고 결론 내리지 않았다.

조립 쪽 전체 구현은 [FeatureLabCrowd.cpp](#source-source-mutablesample-featurelabcrowd-cpp), 실행 쪽은 [FeatureLabCrowdRuntime.h](#source-source-mutablesample-featurelabcrowdruntime-h)와 [CPP](#source-source-mutablesample-featurelabcrowdruntime-cpp), 굽기 예외 처리는 [MutableSample.cpp](#source-source-mutablesample-mutablesample-cpp)에 있다.


## 편집 화면을 더 자세히 보기

![Mass 설정과 구분되는 메타휴먼 인물 컬렉션](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/08/collection.png)

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
| `MetaHuman Collection` | 여러 메타휴먼 인물과 조립 자료를 모은 컬렉션. |
| `Build / Auto Build` | 컬렉션 자료 생성 / 변경에 맞춰 자동으로 생성하는 설정. |
| `Skinning / Instanced Skinned Mesh` | 뼈 변형을 표면에 반영하는 처리 / 스킨드 메시를 여러 개 표현하는 자료. |
| `Instance Proxy` | 컬렉션에서 만들어진 개별 인물 자료를 확인하는 대상. |
| `Mass / Entity` | 많은 개체를 자료 중심으로 관리하는 시스템 / 그 시스템의 개체 한 개. |
| `Entity Config / Config` | 엔티티가 어떤 조각·기능을 가질지 정한 설정 / 설정 영역. |
| `Traits / Fragments` | 엔티티 구성에 넣을 기능 묶음 / 엔티티에 보관되는 자료 조각. |
| `LOD` | 거리와 필요에 따라 상세도를 나누는 단계. |
| `MC_LabCrowd / MEC_LabCrowd` | 인물 조립 컬렉션 / 실제 Mass 엔티티 구성 에셋 이름. |
| `Update / Reset` | 현재 설정 반영 / 기준 상태로 초기화. |



<!-- korean-ui-explanations -->


<a id="code-index"></a>

## 이 장면을 만든 코드

아래는 제작과 검증에 사용한 전체 코드에 한국어 주석을 더한 설명본이다. `.py`는 언리얼 에디터에서 실행하는 제작·검사 코드, `.cpp`와 `.h`는 프로젝트에 넣어 빌드하는 코드다. 파일마다 첫 주석에 역할과 입력 조건을 적었다.


<a id="source-lab-lab-attach-skin-context-py"></a>

### lab_attach_skin_context.py

```python
# 파일 역할: EpicFeatureLab의 lab_attach_skin_context 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Characters/MHC_LabFictional

import json
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
sub = unreal.get_editor_subsystem(unreal.MetaHumanCharacterEditorSubsystem)
character = unreal.load_asset("/Game/FeatureLab/Characters/MHC_LabFictional")
assert not character.get_editor_property("has_high_resolution_textures")
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert sub.try_add_object_to_edit(character)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
assert unreal.EditorAssetLibrary.save_loaded_asset(character, False)
rows = []
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 material의 값이 매번 바뀐다. 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
for material in unreal.ObjectIterator(unreal.MaterialInstanceDynamic):
    for parameter in ["Basecolor Original", "Basecolor Original VT"]:
        texture = material.get_texture_parameter_value(parameter)
        if texture and "/Placeholders/" not in texture.get_path_name():
            # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
            rows.append(
                {
                    "material": material.get_path_name(),
                    "parameter": parameter,
                    "texture": texture.get_path_name(),
                    "width": texture.blueprint_get_size_x(),
                    "height": texture.blueprint_get_size_y(),
                }
            )
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 has_high_resolution_textures이다.
RESULT = {
    "editing": sub.is_object_added_for_editing(character),
    "non_placeholder_face_materials": rows,
    "high_resolution_sources": character.get_editor_property("has_high_resolution_textures"),
}
(root / "Evidence/case08-skin-context-attach.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-benchmark-crowd-py"></a>

### lab_benchmark_crowd.py

```python
# 파일 역할: EpicFeatureLab의 lab_benchmark_crowd 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

import json, time, statistics, traceback
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

OUT = Path(unreal.Paths.project_dir()) / "Evidence/case08-performance-observation.json"
# 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
WORLD = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert WORLD
CONTROLLER = unreal.GameplayStatics.get_all_actors_of_class(
    WORLD, unreal.FeatureLabCrowdController
)[0]
CONTROLLER.reset_crowd()
CONTROLLER.set_agent_count(16)
STATE = {
    "index": 0,
    "since": None,
    "last_game": None,
    "last_wall": None,
    "samples": [],
    "started": time.perf_counter(),
}
ROWS = []
COUNTS = [16, 64, 256]


# 함수 finish: 이름은 finish이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: error 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
def finish(error=None):
    global WORLD, CONTROLLER
    # 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
    unreal.unregister_slate_post_tick_callback(HANDLE)
    CONTROLLER.reset_crowd()
    checks = {
        "all_three_population_sizes_measured": len(ROWS) == 3,
        "official_entity_counts_match": all(r["count"] == r["official_entities"] for r in ROWS),
        "enough_actual_game_frames_observed": all(r["sample_frames"] >= 30 for r in ROWS),
    }
    # 문자열을 파일에 기록한다. 결과 JSON이나 보고서인지, 실제 코드·설정 파일인지 경로를 확인한다.
    OUT.write_text(
        json.dumps(
            {
                "status": "failed" if error or not all(checks.values()) else "passed",
                "checks": checks,
                "observations": ROWS,
                "frame_cap_fps": 30,
                "method": "PIE game-frame wall intervals, 1-second warmup and 3-second sample per population; includes editor and measurement overhead, GPU timing not measured",
                "error": error,
            },
            indent=2,
        ),
        encoding="utf-8",
    )
    # WORLD에 기준값 None을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
    WORLD = CONTROLLER = None


# 함수 tick: 이름은 tick이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: delta 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 bWaitingForSpawn이다.
def tick(delta):
    # 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 bWaitingForSpawn이다.
    try:
        wall = time.perf_counter()
        if wall - STATE["started"] > 180:
            raise RuntimeError("Observation timeout")
        now = unreal.GameplayStatics.get_time_seconds(WORLD)
        if CONTROLLER.get_editor_property("bWaitingForSpawn"):
            # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
            return
        if STATE["since"] is None:
            STATE["since"] = now
        if now == STATE["last_game"]:
            # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
            return
        if STATE["last_wall"] is not None and now - STATE["since"] > 1:
            STATE["samples"].append((wall - STATE["last_wall"]) * 1000)
        STATE["last_wall"], STATE["last_game"] = wall, now
        if now - STATE["since"] < 4:
            # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
            return
        values = sorted(STATE["samples"])
        stats = unreal.MetaHumanCrowdStatsLibrary.gather_meta_human_crowd_stats(WORLD)
        # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
        ROWS.append(
            {
                "count": COUNTS[STATE["index"]],
                "official_entities": stats.num_entities,
                "visible": stats.num_visible,
                "instanced_representations": stats.num_isk_ms,
                "sample_frames": len(values),
                "mean_wall_frame_ms": statistics.mean(values),
                "median_wall_frame_ms": statistics.median(values),
                "p95_wall_frame_ms": values[min(len(values) - 1, int(0.95 * len(values)))],
                "observed_mean_fps": 1000 / statistics.mean(values),
            }
        )
        STATE["index"] += 1
        if STATE["index"] == len(COUNTS):
            finish()
            # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
            return
        CONTROLLER.set_agent_count(COUNTS[STATE["index"]])
        STATE.update(since=None, last_game=None, last_wall=None, samples=[])
    except Exception:
        finish(traceback.format_exc())


OUT.write_text(json.dumps({"status": "running"}), encoding="utf-8")
# HANDLE: 나중에 콜백을 해제하기 위해 보관하는 등록 표식이다. 에디터 갱신 뒤 호출할 함수를 등록한다. 작업이 끝나면 핸들로 해제해야 반복 호출이 남지 않는다.
HANDLE = unreal.register_slate_post_tick_callback(tick)
RESULT = {"status": "running", "output": str(OUT)}
```

<a id="source-lab-lab-bind-published-skin-py"></a>

### lab_bind_published_skin.py

```python
# 파일 역할: EpicFeatureLab의 lab_bind_published_skin 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Crowds/Unpacked/Heads/
#   /Game/FeatureLab/Characters/Assembled/MH_
#   /Game/FeatureLab/Crowds/SkinTextures/

import json
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
assert root.name == "EpicFeatureLab"
rows = []
for name in ["MHC_LabFictional", "MHC_LabDigitalBody"]:
    # 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
    textures = {
        kind: unreal.load_asset(
            "/Game/FeatureLab/Crowds/SkinTextures/" + name + "_Skin_" + str(kind)
        )
        for kind in [0, 4, 8]
    }
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert all(textures.values())
    folders = [
        "/Game/FeatureLab/Crowds/Unpacked/Heads/" + name,
        "/Game/FeatureLab/Characters/Assembled/MH_"
        + name.removeprefix("MHC_")
        + "/Face/Materials",
    ]
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 folder의 값이 매번 바뀐다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
    for folder in folders:
        # count에 기준값 0을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
        count = 0
        # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 data의 값이 매번 바뀐다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
        for data in unreal.AssetRegistryHelpers.get_asset_registry().get_assets_by_path(
            folder, True
        ):
            if str(data.asset_class_path.asset_name) != "MaterialInstanceConstant":
                continue
            material = data.get_asset()
            parameters = {
                str(n)
                for n in unreal.MaterialEditingLibrary.get_texture_parameter_names(material)
            }
            if "Basecolor Original" not in parameters:
                continue
            # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 switch의 값이 매번 바뀐다.
            for switch in unreal.MaterialEditingLibrary.get_static_switch_parameter_names(
                material
            ):
                if "virtual" in str(switch).lower():
                    unreal.MaterialEditingLibrary.set_material_instance_static_switch_parameter_value(
                        material, switch, False
                    )
            bindings = []
            # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 (parameter, kind)의 값이 매번 바뀐다. 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
            for parameter, kind in [
                ("Basecolor Original", 0),
                ("Basecolor Baked", 0),
                ("Normal Original", 4),
                ("Normal Baked", 4),
                ("Normal LOD Baked", 4),
            ]:
                # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: parameter not in parameters
                if parameter not in parameters:
                    continue
                # UE 5.8 library setter always returns false; verify the actual value.
                unreal.MaterialEditingLibrary.set_material_instance_texture_parameter_value(
                    material, parameter, textures[kind]
                )
                actual = (
                    unreal.MaterialEditingLibrary.get_material_instance_texture_parameter_value(
                        material, parameter
                    )
                )
                # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
                assert actual == textures[kind], (material.get_path_name(), parameter)
                # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
                bindings.append(
                    {"parameter": parameter, "asset": actual.get_path_name(), "verified": True}
                )
            # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
            assert unreal.EditorAssetLibrary.save_loaded_asset(material, False)
            # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
            rows.append(
                {
                    "character": name,
                    "folder": folder,
                    "material": material.get_path_name(),
                    "bindings": bindings,
                }
            )
            count += 1
        assert count > 0, "No skin materials in " + folder
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "status": "all_skin_bindings_verified",
    "materials": rows,
    "material_count": len(rows),
    "texture_source": "Persistent MetaHuman neural skin synthesis images",
    "unchanged": "Geometry, skeletons, rigs and animation assets",
}
(root / "Evidence/case08-skin-binding-validation.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-build-crowd-scene-py"></a>

### lab_build_crowd_scene.py

```python
# 파일 역할: 에셋·그래프·장면을 구성하는 제작 작업. 이미 있는 원본을 대상으로 재실행해도 되는지 가드 조건부터 읽는다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Maps/FL_08_MetaHumanCrowd
#   /Game/FeatureLab/Crowds/BP_LabCrowdGameMode
#   /Game/FeatureLab/Crowds/MC_LabCrowd
#   /Game/FeatureLab/Crowds/Instances
#   /Game/FeatureLab/Crowds

import json
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
assert root.name == "EpicFeatureLab"
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
assert not unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
lib = unreal.EditorAssetLibrary
collection = lib.load_asset("/Game/FeatureLab/Crowds/MC_LabCrowd")
config = unreal.FeatureLabRuntimeLibrary.prepare_lab_crowd_config([collection])
assert config, "Reloaded crowd collection has no valid built data or config creation failed"
for path in lib.list_assets("/Game/FeatureLab/Crowds/Instances", True, False):
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 지정한 에셋의 현재 내용을 파일로 저장한다.
    assert lib.save_asset(path)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
assert lib.save_loaded_asset(config)
# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
editor = unreal.get_editor_subsystem(unreal.LevelEditorSubsystem)
# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
actors = unreal.get_editor_subsystem(unreal.EditorActorSubsystem)
unreal.LevelSequenceEditorBlueprintLibrary.close_level_sequence()
path = "/Game/FeatureLab/Maps/FL_08_MetaHumanCrowd"
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world().get_name() != 'FL_08_MetaHumanCrowd' 작업할 맵을 연다. 현재 맵과 다른 맵이므로 실행 중인 PIE를 먼저 끝내는지 확인한다.
if (
    unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world().get_name()
    != "FL_08_MetaHumanCrowd"
):
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 작업할 맵을 연다. 현재 맵과 다른 맵이므로 실행 중인 PIE를 먼저 끝내는지 확인한다.
    assert editor.load_level(path) if lib.does_asset_exist(path) else editor.new_level(path)


# 함수 actor: 이름은 actor이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: cls, label, position 지정한 클래스의 실제 액터를 편집 장면에 만든다. 에셋 파일 생성과는 다르다.
def actor(cls, label, position):
    # 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
    matches = [a for a in actors.get_all_level_actors() if a.get_actor_label() == label]
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert len(matches) <= 1
    # 지정한 클래스의 실제 액터를 편집 장면에 만든다. 에셋 파일 생성과는 다르다.
    item = (
        matches[0] if matches else actors.spawn_actor_from_class(cls, unreal.Vector(*position))
    )
    item.set_actor_label(label)
    item.tags = ["FeatureLab_Owned", "FeatureLab_08"]
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
mode_path = "/Game/FeatureLab/Crowds/BP_LabCrowdGameMode"
# 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
mode = lib.load_asset(mode_path)
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not mode 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 parent_class이다.
if not mode:
    factory = unreal.BlueprintFactory()
    factory.set_editor_property("parent_class", unreal.GameModeBase)
    # 지정한 경로·이름·종류로 새 에셋을 만든다. 같은 이름의 원본이 있는지 검사하는 코드와 함께 읽는다.
    mode = unreal.AssetToolsHelpers.get_asset_tools().create_asset(
        "BP_LabCrowdGameMode", "/Game/FeatureLab/Crowds", unreal.Blueprint, factory
    )
defaults = unreal.get_default_object(mode.generated_class())
defaults.set_editor_property("default_pawn_class", unreal.SpectatorPawn)
# 블루프린트 연결을 실행 가능한 상태로 컴파일한다. 저장과는 별도 작업이다.
unreal.BlueprintEditorLibrary.compile_blueprint(mode)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
assert lib.save_loaded_asset(mode)
world.get_world_settings().set_editor_property("default_game_mode", mode.generated_class())
floor = actor(unreal.StaticMeshActor, "FL08_Floor", (0, 0, -10))
floor.static_mesh_component.set_static_mesh(lib.load_asset("/Engine/BasicShapes/Cube"))
floor.set_actor_scale3d(unreal.Vector(55, 55, 0.2))
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 previous의 값이 매번 바뀐다. 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
for previous in actors.get_all_level_actors():
    if previous.get_actor_label() == "FL08_Lighting":
        # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
        assert actors.destroy_actor(previous)
sun = actor(unreal.DirectionalLight, "FL08_Sun", (0, 0, 900))
# 액터 방향을 바꾼다. 위치 이동과 구분한다.
sun.set_actor_rotation(unreal.Rotator(pitch=-40, yaw=-35, roll=0), False)
# 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 intensity이다.
sun.get_component_by_class(unreal.DirectionalLightComponent).set_editor_property(
    "intensity", 3.5
)
actor(unreal.SkyAtmosphere, "FL08_Atmosphere", (0, 0, 0))
sky = actor(unreal.SkyLight, "FL08_Sky", (0, 0, 500))
# 여러 속성을 이름:값 사전으로 한 번에 설정한다. 각 항목이 개별 설정과 대응한다.
sky.get_component_by_class(unreal.SkyLightComponent).set_editor_properties(
    {"intensity": 1.2, "real_time_capture": True}
)
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 (name, position, intensity)의 값이 매번 바뀐다. 여러 속성을 이름:값 사전으로 한 번에 설정한다. 각 항목이 개별 설정과 대응한다.
for name, position, intensity in [
    ("FrontFill", (0, -2000, 1400), 5000),
    ("BackFill", (0, 2200, 1600), 2500),
]:
    light = actor(unreal.RectLight, "FL08_" + name, position)
    look(light, (0, 0, 100))
    # 여러 속성을 이름:값 사전으로 한 번에 설정한다. 각 항목이 개별 설정과 대응한다.
    light.get_component_by_class(unreal.RectLightComponent).set_editor_properties(
        {
            "intensity": intensity,
            "source_width": 3600.0,
            "source_height": 1000.0,
            "attenuation_radius": 10000.0,
            "cast_shadows": False,
        }
    )
cameras = []
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 (name, position, target, focal)의 값이 매번 바뀐다. 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 current_focal_length이다.
for name, position, target, focal in [
    ("Overview", (0, -3700, 2300), (0, 0, 90), 27),
    ("Near", (0, -850, 240), (0, 0, 100), 32),
    ("Far", (0, -10500, 1100), (0, 0, 100), 35),
]:
    camera = actor(unreal.CineCameraActor, "FL08_Camera" + name, position)
    look(camera, target)
    cine = camera.get_cine_camera_component()
    cine.set_editor_property("current_focal_length", focal)
    cine.set_editor_property("constrain_aspect_ratio", False)
    focus = cine.get_editor_property("focus_settings")
    focus.set_editor_property("focus_method", unreal.CameraFocusMethod.DISABLE)
    cine.set_editor_property("focus_settings", focus)
    # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    cameras.append(camera)
controller = actor(unreal.FeatureLabCrowdController, "FL08_CrowdController", (0, 0, 0))
controller.set_editor_properties({"spawn_config": config, "cameras": cameras})
actor(unreal.PlayerStart, "FL08_ViewerStart", (0, -3700, 2300))
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert editor.save_current_level()
report = {
    "status": "scene_saved_runtime_pending",
    "map": path,
    "config": config.get_path_name(),
    "collection_round_trip_built_data_valid": True,
    "instances": list(lib.list_assets("/Game/FeatureLab/Crowds/Instances", True, False)),
    "controls": {
        "1": "16 agents",
        "2": "64 agents",
        "3": "256 agents",
        "T": "Move or stop (idle animation)",
        "V": "Overview / Near / Far camera",
        "R": "Reset 64 agents and seeded layout",
    },
    "representation": "Official MetaHuman Crowd Mass visualization and instanced skinned meshes; deterministic appearance provider and custom Mass steering processor",
}
(root / "Evidence/case08-scene-build.json").write_text(
    json.dumps(report, indent=2), encoding="utf-8"
)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = report
```

<a id="source-lab-lab-detach-skin-context-py"></a>

### lab_detach_skin_context.py

```python
# 파일 역할: EpicFeatureLab의 lab_detach_skin_context 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Characters/MHC_LabFictional

import json
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
assert root.name == "EpicFeatureLab"
# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
sub = unreal.get_editor_subsystem(unreal.MetaHumanCharacterEditorSubsystem)
character = unreal.load_asset("/Game/FeatureLab/Characters/MHC_LabFictional")
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert sub.is_object_added_for_editing(character)
settings = character.get_editor_property("skin_settings")
skin = settings.get_editor_property("skin")
u = skin.get_editor_property("u")
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 value의 값이 매번 바뀐다. 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 u이다.
for value in [u + 0.001, u]:
    skin.set_editor_property("u", value)
    settings.set_editor_property("skin", skin)
    sub.commit_skin_settings(character, settings)
assert not character.get_editor_property("has_high_resolution_textures")
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
assert unreal.EditorAssetLibrary.save_loaded_asset(character, False)
sub.remove_object_to_edit(character)
unreal.SystemLibrary.collect_garbage()
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 has_face_dna_blendshapes이다.
RESULT = {
    "detached": not sub.is_object_added_for_editing(character),
    "rig_preserved": character.get_editor_property("has_face_dna_blendshapes"),
    "purpose": "Recreate the editing texture map while local synthesized textures are active; no disk cleanup",
}
(root / "Evidence/case08-skin-context-detach.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-diagnose-metahuman-skin-py"></a>

### lab_diagnose_metahuman_skin.py

```python
# 파일 역할: EpicFeatureLab의 lab_diagnose_metahuman_skin 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Characters/MHC_LabFictional

import json
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
assert root.name == "EpicFeatureLab"
character = unreal.load_asset("/Game/FeatureLab/Characters/MHC_LabFictional")
# JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
before = json.loads(unreal.FeatureLabRuntimeLibrary.inspect_lab_meta_human_textures(character))
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert unreal.FeatureLabRuntimeLibrary.enable_lab_meta_human_skin(character)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
assert unreal.EditorAssetLibrary.save_loaded_asset(character, False)
# JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
after = json.loads(unreal.FeatureLabRuntimeLibrary.inspect_lab_meta_human_textures(character))
RESULT = {"before": before, "after": after}
(root / "Evidence/case08-native-skin-diagnosis.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-inspect-crowd-animation-outputs-py"></a>

### lab_inspect_crowd_animation_outputs.py

```python
# 파일 역할: 현재 에셋·객체·실행 상태를 읽어 기록하는 관찰 작업.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Crowds/Unpacked/Animations/AS_

import json, math
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert world
components = []
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 component의 값이 매번 바뀐다. 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
for component in unreal.ObjectIterator(unreal.InstancedSkinnedMeshComponent):
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: component.get_world() != world or component.get_instance_count() == 0
    if component.get_world() != world or component.get_instance_count() == 0:
        continue
    asset = component.get_skinned_asset()
    provider = component.get_transform_provider()
    # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    components.append(
        {
            "component": component.get_path_name(),
            "instances": component.get_instance_count(),
            "mesh": asset.get_path_name() if asset else None,
            "transform_provider": provider.get_path_name() if provider else None,
            "provider_class": provider.get_class().get_name() if provider else None,
            "provider_sequence_count": len(provider.get_sequences()) if provider else 0,
            "provider_mesh_matches": (
                provider.get_skinned_asset() == asset if provider else False
            ),
        }
    )
animations = []
for identity in ["MHC_LabFictional", "MHC_LabDigitalBody"]:
    for kind in ["Idle", "Walk"]:
        path = (
            "/Game/FeatureLab/Crowds/Unpacked/Animations/AS_" + identity + "_" + kind + "_Baked"
        )
        # 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
        clip = unreal.load_asset(path)
        # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
        assert clip, path
        movements = {}
        # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 bone의 값이 매번 바뀐다. 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
        for bone in [
            "pelvis",
            "spine_03",
            "thigh_l",
            "calf_l",
            "foot_l",
            "upperarm_r",
            "lowerarm_r",
            "head",
        ]:
            points = []
            # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 t의 값이 매번 바뀐다. 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
            for t in [0.0, 0.3, 0.6, 0.9, 1.2, 1.6, 2.0]:
                pose = unreal.AnimationLibrary.get_bone_pose_for_time(clip, bone, t, False)
                # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
                points.append(
                    [
                        list(
                            unreal.MathLibrary.transform_location(
                                pose, unreal.Vector(*axis)
                            ).to_tuple()
                        )
                        for axis in [(20, 0, 0), (0, 20, 0), (0, 0, 20)]
                    ]
                )
            # 반복에 쓸 정수 순서를 만든다. 끝 값은 포함되지 않는다.
            movements[bone] = max(
                math.dist(points[0][j], p[j]) for p in points for j in range(3)
            )
        # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
        animations.append(
            {
                "asset": path,
                "kind": kind,
                "seconds": clip.get_play_length(),
                "bone_probe_motion_cm": movements,
                "max_probe_motion_cm": max(movements.values()),
            }
        )
checks = {
    "both_meta_human_appearances_have_live_mesh_components": all(
        any(identity in c["mesh"] for c in components)
        for identity in ["MHC_LabFictional", "MHC_LabDigitalBody"]
    ),
    "face_and_body_instancing_outputs_present": len(components) >= 4,
    "live_components_have_animation_transform_providers": all(
        c["provider_class"] == "AnimSequenceTransformProviderDataInstance"
        and c["provider_sequence_count"] >= 2
        and c["provider_mesh_matches"]
        for c in components
    ),
    "baked_walk_contains_real_bone_motion": all(
        a["max_probe_motion_cm"] > 1 for a in animations if a["kind"] == "Walk"
    ),
    "baked_idle_contains_real_bone_motion": all(
        a["max_probe_motion_cm"] > 0.1 for a in animations if a["kind"] == "Idle"
    ),
}
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "status": "passed" if all(checks.values()) else "failed_checks",
    "checks": checks,
    "live_components": components,
    "baked_animations": animations,
    "measurement": "Movement of three 20cm probe axes transformed by sampled local bone poses; confirms rotation and translation in baked animation data",
}
(root / "Evidence/case08-animation-output-validation.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-inspect-crowd-face-materials-py"></a>

### lab_inspect_crowd_face_materials.py

```python
# 파일 역할: 현재 에셋·객체·실행 상태를 읽어 기록하는 관찰 작업.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Crowds/Unpacked/Heads/

import json
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
rows = []
for identity in ["MHC_LabFictional", "MHC_LabDigitalBody"]:
    # 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
    mesh = unreal.load_asset(
        "/Game/FeatureLab/Crowds/Unpacked/Heads/" + identity + "/SKM_" + identity + "_Inst"
    )
    for index, slot in enumerate(mesh.get_editor_property("materials")):
        material = slot.get_editor_property("material_interface")
        # 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 material_slot_name이다.
        row = {
            "identity": identity,
            "slot": index,
            "slot_name": str(slot.get_editor_property("material_slot_name")),
            "material": material.get_path_name() if material else None,
            "textures": [],
            "vectors": {},
            "scalars": {},
        }
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: isinstance(material, unreal.MaterialInstanceConstant)
        if isinstance(material, unreal.MaterialInstanceConstant):
            row["parent"] = material.get_editor_property("parent").get_path_name()
            # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 name의 값이 매번 바뀐다. 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
            for name in unreal.MaterialEditingLibrary.get_texture_parameter_names(material):
                texture = (
                    unreal.MaterialEditingLibrary.get_material_instance_texture_parameter_value(
                        material, name
                    )
                )
                # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: texture 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
                if texture:
                    entry = {
                        "parameter": str(name),
                        "texture": texture.get_path_name(),
                        "class": texture.get_class().get_name(),
                    }
                    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: isinstance(texture, unreal.Texture2D)
                    if isinstance(texture, unreal.Texture2D):
                        entry.update(
                            width=texture.blueprint_get_size_x(),
                            height=texture.blueprint_get_size_y(),
                        )
                    row["textures"].append(entry)
            # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 name의 값이 매번 바뀐다.
            for name in unreal.MaterialEditingLibrary.get_vector_parameter_names(material):
                color = (
                    unreal.MaterialEditingLibrary.get_material_instance_vector_parameter_value(
                        material, name
                    )
                )
                row["vectors"][str(name)] = [color.r, color.g, color.b, color.a]
            # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 name의 값이 매번 바뀐다.
            for name in unreal.MaterialEditingLibrary.get_scalar_parameter_names(material):
                # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: any((t in str(name).lower() for t in ['color', 'albedo', 'scale', 'gain', 'skin']))
                if any(
                    t in str(name).lower() for t in ["color", "albedo", "scale", "gain", "skin"]
                ):
                    row["scalars"][str(name)] = (
                        unreal.MaterialEditingLibrary.get_material_instance_scalar_parameter_value(
                            material, name
                        )
                    )
        # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
        rows.append(row)
RESULT = {"materials": rows}
(root / "Evidence/case08-face-materials.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-inspect-crowd-outputs-py"></a>

### lab_inspect_crowd_outputs.py

```python
# 파일 역할: 현재 에셋·객체·실행 상태를 읽어 기록하는 관찰 작업.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Crowds/Unpacked

import json
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
rows = []
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 data의 값이 매번 바뀐다.
for data in unreal.AssetRegistryHelpers.get_asset_registry().get_assets_by_path(
    "/Game/FeatureLab/Crowds/Unpacked", True
):
    if str(data.asset_class_path.asset_name) != "SkeletalMesh":
        continue
    mesh = data.get_asset()
    component = unreal.new_object(unreal.SkeletalMeshComponent)
    component.set_skeletal_mesh_asset(mesh)
    stats = unreal.FeatureLabRuntimeLibrary.inspect_mesh(component)
    # 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 skeleton이다.
    entry = {
        "asset": mesh.get_path_name(),
        "vertices": stats.vertices,
        "triangles": stats.triangles,
        "bones": stats.bones,
        "materials": stats.materials,
        "skeleton": mesh.get_editor_property("skeleton").get_path_name(),
    }
    entry["lod_count"] = unreal.get_editor_subsystem(
        unreal.SkeletalMeshEditorSubsystem
    ).get_lod_count(mesh)
    entry["bounds_extent"] = list(stats.bounds_extent.to_tuple())
    # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    rows.append(entry)
RESULT = {"status": "outputs_inspected", "meshes": rows}
(root / "Evidence/case08-generated-meshes.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-inspect-crowd-save-py"></a>

### lab_inspect_crowd_save.py

```python
# 파일 역할: 현재 에셋·객체·실행 상태를 읽어 기록하는 관찰 작업.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Crowds/

import json
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
dirty = unreal.EditorLoadingAndSavingUtils.get_dirty_content_packages()
results = []
owned_packages = {
    p.get_name() for p in dirty if p.get_name().startswith("/Game/FeatureLab/Crowds/")
}
objects = {name: [] for name in owned_packages}
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 obj의 값이 매번 바뀐다. 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
for obj in unreal.ObjectIterator(unreal.Object):
    outer = obj.get_outermost().get_name()
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: outer in objects 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    if outer in objects:
        objects[outer].append({"name": obj.get_name(), "class": obj.get_class().get_name()})
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 package의 값이 매번 바뀐다. 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
for package in dirty:
    name = package.get_name()
    if name.startswith("/Game/FeatureLab/Crowds/"):
        # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
        results.append(
            {"package": name, "saved": unreal.EditorAssetLibrary.save_asset(name, False)}
        )
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "dirty_packages_before": [p.get_name() for p in dirty],
    "package_objects": objects,
    "crowd_save_results": results,
    "dirty_packages_after": [
        p.get_name() for p in unreal.EditorLoadingAndSavingUtils.get_dirty_content_packages()
    ],
}
(root / "Evidence/case08-save-inspection.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-peek-crowd-py"></a>

### lab_peek_crowd.py

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
    world, unreal.FeatureLabCrowdController
)[0]
# JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
report = json.loads(controller.capture_crowd_state())
stats = unreal.MetaHumanCrowdStatsLibrary.gather_meta_human_crowd_stats(world)
report["official_stats"] = {
    name: stats.get_editor_property(name)
    for name in ["num_entities", "num_visible", "num_actors", "num_isk_ms"]
}
report["game_seconds"] = unreal.GameplayStatics.get_time_seconds(world)
report["camera"] = (
    unreal.GameplayStatics.get_player_camera_manager(world, 0).get_camera_location().to_tuple()
)
(root / "Evidence/case08-live-state.json").write_text(
    json.dumps(report, indent=2), encoding="utf-8"
)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = report
```

<a id="source-lab-lab-prepare-crowd-animations-py"></a>

### lab_prepare_crowd_animations.py

```python
# 파일 역할: EpicFeatureLab의 lab_prepare_crowd_animations 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Crowds/Animations
#   /Game/Characters/UEFN_Mannequin/Animations/Walk/M_Relaxed_Walk_Loop_F
#   /Game/FeatureLab/Crowds/MC_LabCrowd
#   /Game/MetaHumans/Common/Common/Rigs/RTG_UEFN_to_Metahuman_nrw
#   /Game/FeatureLab/Characters/Animations/AS_LabBodyMotion
#   /Game/Characters/UEFN_Mannequin/Meshes/SKM_UEFN_Mannequin
#   /Game/MetaHumans/Assembled/MH_MCP_Test/Body/SKM_MH_ToolTest_BodyMesh

import json
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
assert root.name == "EpicFeatureLab"
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
assert not unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
lib = unreal.EditorAssetLibrary
folder = "/Game/FeatureLab/Crowds/Animations"
lib.make_directory(folder)
idle_path = folder + "/AS_CrowdIdle"
# 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
idle = unreal.load_asset(idle_path)
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not idle 기존 에셋을 다른 경로로 복제한다. 복제본이 참조하는 다른 에셋까지 모두 독립 복제되는지는 별도로 확인한다.
if not idle:
    # 기존 에셋을 다른 경로로 복제한다. 복제본이 참조하는 다른 에셋까지 모두 독립 복제되는지는 별도로 확인한다.
    idle = lib.duplicate_asset(
        "/Game/FeatureLab/Characters/Animations/AS_LabBodyMotion", idle_path
    )
source = "/Game/Characters/UEFN_Mannequin/Animations/Walk/M_Relaxed_Walk_Loop_F"
walk_path = folder + "/FL08_M_Relaxed_Walk_Loop_F"
# 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
walk = unreal.load_asset(walk_path)
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not walk 여러 속성을 이름:값 사전으로 한 번에 설정한다. 각 항목이 개별 설정과 대응한다.
if not walk:
    inputs = unreal.IKRetargetBatchOperationInputs()
    # 여러 속성을 이름:값 사전으로 한 번에 설정한다. 각 항목이 개별 설정과 대응한다.
    inputs.set_editor_properties(
        {
            "assets_to_retarget": [lib.find_asset_data(source)],
            "source_mesh": lib.load_asset(
                "/Game/Characters/UEFN_Mannequin/Meshes/SKM_UEFN_Mannequin"
            ),
            "target_mesh": lib.load_asset(
                "/Game/MetaHumans/Assembled/MH_MCP_Test/Body/SKM_MH_ToolTest_BodyMesh"
            ),
            "ik_retarget_asset": lib.load_asset(
                "/Game/MetaHumans/Common/Common/Rigs/RTG_UEFN_to_Metahuman_nrw"
            ),
            "prefix": "FL08_",
            "target_path": folder,
            "use_source_path": False,
            "include_referenced_assets": False,
            "overwrite_existing_files": False,
        }
    )
    result = unreal.IKRetargetBatchOperation.run_batch_retarget(inputs)
    # 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
    walk = lib.load_asset(walk_path)
assert idle and walk, "Crowd source clips were not produced"
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 clip의 값이 매번 바뀐다. 여러 속성을 이름:값 사전으로 한 번에 설정한다. 각 항목이 개별 설정과 대응한다.
for clip in [idle, walk]:
    # 여러 속성을 이름:값 사전으로 한 번에 설정한다. 각 항목이 개별 설정과 대응한다.
    clip.set_editor_properties(
        {"enable_root_motion": False, "force_root_lock": True, "loop": True}
    )
    # 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
    lib.save_loaded_asset(clip)
config_path = folder + "/AC_LabCrowd"
# 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
config = lib.load_asset(config_path)
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not config 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 data_asset_class이다.
if not config:
    factory = unreal.DataAssetFactory()
    factory.set_editor_property("data_asset_class", unreal.MetaHumanCrowdAnimationConfig)
    # 지정한 경로·이름·종류로 새 에셋을 만든다. 같은 이름의 원본이 있는지 검사하는 코드와 함께 읽는다.
    config = unreal.AssetToolsHelpers.get_asset_tools().create_asset(
        "AC_LabCrowd", folder, unreal.MetaHumanCrowdAnimationConfig, factory
    )
entries = []
for name, clip in [("Idle", idle), ("Walk", walk)]:
    entry = unreal.MetaHumanCrowdBakeAnimationData()
    # 여러 속성을 이름:값 사전으로 한 번에 설정한다. 각 항목이 개별 설정과 대응한다.
    entry.set_editor_properties(
        {
            "name": name,
            "use_merged_animation": False,
            "body_anim_sequence": clip,
            "loop": True,
            "root_motion": False,
        }
    )
    # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    entries.append(entry)
config.set_editor_property("animations_to_bake", entries)
collection = lib.load_asset("/Game/FeatureLab/Crowds/MC_LabCrowd")
pipeline = unreal.FeatureLabRuntimeLibrary.get_lab_crowd_editor_pipeline(collection)
pipeline.set_editor_property("AnimationConfig", config)
# 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
lib.save_loaded_asset(config)
# 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
lib.save_loaded_asset(collection)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "status": "prepared",
    "animation_config": config.get_path_name(),
    "clips": [
        {
            "asset": c.get_path_name(),
            "seconds": c.get_play_length(),
            "skeleton": c.get_editor_property("skeleton").get_path_name(),
        }
        for c in [idle, walk]
    ],
    "walk_source": source,
    "retargeter": "/Game/MetaHumans/Common/Common/Rigs/RTG_UEFN_to_Metahuman_nrw",
    "root_motion_removed_for_mass_placement": True,
}
(root / "Evidence/case08-crowd-animation-input.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-prepare-crowd-collection-py"></a>

### lab_prepare_crowd_collection.py

```python
# 파일 역할: EpicFeatureLab의 lab_prepare_crowd_collection 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Crowds/SKEL_LabCrowd

import json
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
assert root.name == "EpicFeatureLab"
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
assert not unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
collection = unreal.FeatureLabRuntimeLibrary.prepare_lab_crowd_collection()
assert collection, "Crowd collection preparation failed"
pipeline = unreal.FeatureLabRuntimeLibrary.get_lab_crowd_editor_pipeline(collection)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert pipeline
target_path = "/Game/FeatureLab/Crowds/SKEL_LabCrowd"
# 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
target = unreal.load_asset(target_path)
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not target 기존 에셋을 다른 경로로 복제한다. 복제본이 참조하는 다른 에셋까지 모두 독립 복제되는지는 별도로 확인한다.
if not target:
    # 기존 에셋을 다른 경로로 복제한다. 복제본이 참조하는 다른 에셋까지 모두 독립 복제되는지는 별도로 확인한다.
    target = unreal.EditorAssetLibrary.duplicate_asset(
        "/MetaHumanCrowd/SKEL_MetaHumanCrowd_Template", target_path
    )
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert target
pipeline.set_editor_property("TargetSkeleton", target)
# 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
unreal.EditorAssetLibrary.save_loaded_asset(target)
# 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
unreal.EditorAssetLibrary.save_loaded_asset(collection)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "collection": collection.get_path_name(),
    "pipeline": pipeline.get_path_name(),
    "target_skeleton": target.get_path_name(),
    "slots": [str(n) for n in collection.get_slot_names()],
    "items": [
        {
            "display_name": str(collection.get_item_display_name(k)),
            "slot": str(collection.get_item_slot_name(k)),
            "key": k.export_text(),
        }
        for k in collection.get_all_item_keys()
    ],
}
(root / "Evidence/case08-crowd-input.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-prepare-crowd-texture-rebuild-py"></a>

### lab_prepare_crowd_texture_rebuild.py

```python
# 파일 역할: 에셋·그래프·장면을 구성하는 제작 작업. 이미 있는 원본을 대상으로 재실행해도 되는지 가드 조건부터 읽는다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Crowds/MC_LabCrowd
#   /Game/FeatureLab/Characters/

import json
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
assert root.name == "EpicFeatureLab"
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
assert not unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
sub = unreal.get_editor_subsystem(unreal.MetaHumanCharacterEditorSubsystem)
characters = []
for name in ["MHC_LabFictional", "MHC_LabDigitalBody"]:
    character = unreal.load_asset("/Game/FeatureLab/Characters/" + name)
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not sub.is_object_added_for_editing(character)
    if not sub.is_object_added_for_editing(character):
        # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
        assert sub.try_add_object_to_edit(character)
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert sub.is_object_added_for_editing(character)
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
    assert unreal.EditorAssetLibrary.save_loaded_asset(character, False)
    # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    characters.append(
        {
            "asset": character.get_path_name(),
            "editing_state_active": True,
            "high_resolution_sources": character.get_editor_property(
                "has_high_resolution_textures"
            ),
        }
    )
collection = unreal.load_asset("/Game/FeatureLab/Crowds/MC_LabCrowd")
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "status": "prepared",
    "characters": characters,
    "cache_policy": "The native builder refreshes the collection build cache before building",
    "reason": "Initialize texture synthesis before generating character/crowd materials",
}
(root / "Evidence/case08-texture-rebuild-preparation.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-publish-character-skin-py"></a>

### lab_publish_character_skin.py

```python
# 파일 역할: EpicFeatureLab의 lab_publish_character_skin 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Crowds/Unpacked/Heads/
#   /Game/FeatureLab/Characters/

import json
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
assert root.name == "EpicFeatureLab"
name = globals().get("SKIN_CHARACTER", "MHC_LabFictional")
assert name in ["MHC_LabFictional", "MHC_LabDigitalBody"]
character = unreal.load_asset("/Game/FeatureLab/Characters/" + name)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert unreal.FeatureLabRuntimeLibrary.enable_lab_meta_human_skin(character)
# JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
diagnosis = json.loads(
    unreal.FeatureLabRuntimeLibrary.inspect_lab_meta_human_textures(character)
)
textures = list(unreal.FeatureLabRuntimeLibrary.publish_lab_meta_human_skin_textures(character))
assert len(textures) == 3, "Expected neutral albedo, normal and cavity images: " + json.dumps(
    diagnosis
)
by_type = {int(t.get_name().rsplit("_", 1)[1]): t for t in textures}
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 texture의 값이 매번 바뀐다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
for texture in textures:
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
    assert unreal.EditorAssetLibrary.save_loaded_asset(texture, False)
rows = []
folder = "/Game/FeatureLab/Crowds/Unpacked/Heads/" + name
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 data의 값이 매번 바뀐다.
for data in unreal.AssetRegistryHelpers.get_asset_registry().get_assets_by_path(folder, True):
    if str(data.asset_class_path.asset_name) != "MaterialInstanceConstant":
        continue
    material = data.get_asset()
    parameters = {
        str(n) for n in unreal.MaterialEditingLibrary.get_texture_parameter_names(material)
    }
    if "Basecolor Original" not in parameters:
        continue
    changes = []
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 (parameter, kind)의 값이 매번 바뀐다. 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    for parameter, kind in [
        ("Basecolor Original", 0),
        ("Basecolor Baked", 0),
        ("Normal Original", 4),
        ("Normal Baked", 4),
        ("Normal LOD Baked", 4),
    ]:
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: parameter in parameters 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
        if parameter in parameters:
            changed = (
                unreal.MaterialEditingLibrary.set_material_instance_texture_parameter_value(
                    material, parameter, by_type[kind]
                )
            )
            actual = (
                unreal.MaterialEditingLibrary.get_material_instance_texture_parameter_value(
                    material, parameter
                )
            )
            verified = actual == by_type[kind]
            # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
            assert verified, (material.get_path_name(), parameter)
            # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
            changes.append(
                {
                    "parameter": parameter,
                    "setter_return_value": changed,
                    "readback_verified": verified,
                }
            )
    switches = {}
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 parameter의 값이 매번 바뀐다.
    for parameter in unreal.MaterialEditingLibrary.get_static_switch_parameter_names(material):
        key = str(parameter)
        value = (
            unreal.MaterialEditingLibrary.get_material_instance_static_switch_parameter_value(
                material, parameter
            )
        )
        switches[key] = value
        if "virtual" in key.lower() or key.lower() in ["use vt", "usevt", "use vt textures"]:
            unreal.MaterialEditingLibrary.set_material_instance_static_switch_parameter_value(
                material, parameter, False
            )
    unreal.MaterialEditingLibrary.update_material_instance(material)
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
    assert unreal.EditorAssetLibrary.save_loaded_asset(material, False)
    # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    rows.append(
        {
            "material": material.get_path_name(),
            "bound_parameters": changes,
            "static_switches_before": switches,
        }
    )
assert rows, "No crowd face skin materials found"
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
assert unreal.EditorAssetLibrary.save_loaded_asset(character, False)
# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
unreal.get_editor_subsystem(unreal.MetaHumanCharacterEditorSubsystem).remove_object_to_edit(
    character
)
unreal.SystemLibrary.collect_garbage()
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 srgb이다.
RESULT = {
    "status": "skin_assets_bound",
    "character": name,
    "textures": [
        {
            "asset": t.get_path_name(),
            "width": t.blueprint_get_size_x(),
            "height": t.blueprint_get_size_y(),
            "srgb": t.get_editor_property("srgb"),
        }
        for t in textures
    ],
    "materials": rows,
    "diagnosis": diagnosis,
    "source": "MetaHuman texture synthesis cached image buffers, published with valid texture source data",
    "policy": "Only owned project materials and generated textures are changed; source rig and animation data preserved",
}
(root / "Evidence" / ("case08-published-skin-" + name + ".json")).write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-rebuild-character-skin-py"></a>

### lab_rebuild_character_skin.py

```python
# 파일 역할: 에셋·그래프·장면을 구성하는 제작 작업. 이미 있는 원본을 대상으로 재실행해도 되는지 가드 조건부터 읽는다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Characters/

import json
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
assert root.name == "EpicFeatureLab"
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
assert not unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
sub = unreal.get_editor_subsystem(unreal.MetaHumanCharacterEditorSubsystem)
name = globals().get("SKIN_CHARACTER", "MHC_LabFictional")
assert name in ["MHC_LabFictional", "MHC_LabDigitalBody"]
character = unreal.load_asset("/Game/FeatureLab/Characters/" + name)
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not sub.is_object_added_for_editing(character)
if not sub.is_object_added_for_editing(character):
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert sub.try_add_object_to_edit(character)
settings = character.get_editor_property("skin_settings")
before = settings.export_text()
# 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 preview_material_type이다.
character.set_editor_property(
    "preview_material_type", unreal.MetaHumanCharacterSkinPreviewMaterial.EDITABLE
)
sub.commit_skin_settings(character, settings)
skin = settings.get_editor_property("skin")
original_u = skin.get_editor_property("u")
skin.set_editor_property("u", original_u + 0.001 if original_u < 0.999 else original_u - 0.001)
settings.set_editor_property("skin", skin)
sub.commit_skin_settings(character, settings)
skin.set_editor_property("u", original_u)
settings.set_editor_property("skin", skin)
sub.commit_skin_settings(character, settings)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 차이의 부호를 없애 크기만 비교한다. 오차 허용 범위 검사에 자주 사용한다.
assert (
    abs(
        character.get_editor_property("skin_settings")
        .get_editor_property("skin")
        .get_editor_property("u")
        - original_u
    )
    < 1e-7
)
assert character.get_editor_property("has_face_dna_blendshapes"), "Face rig must be preserved"
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
assert unreal.EditorAssetLibrary.save_loaded_asset(character, False)
after = character.get_editor_property("skin_settings").export_text()
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 has_high_resolution_textures이다.
RESULT = {
    "status": "skin_reapplied",
    "character": name,
    "high_resolution_sources_after": character.get_editor_property(
        "has_high_resolution_textures"
    ),
    "face_rig_preserved": True,
    "settings_before": before,
    "settings_after": after,
    "policy": "Reapply authored skin settings using the official subsystem; preserve face/body rig and meshes",
}
filename = (
    "case08-character-skin-rebuild.json"
    if name == "MHC_LabFictional"
    else "case08-digital-body-skin-rebuild.json"
)
(root / "Evidence" / filename).write_text(json.dumps(RESULT, indent=2), encoding="utf-8")
```

<a id="source-lab-lab-request-crowd-texture-sources-py"></a>

### lab_request_crowd_texture_sources.py

```python
# 파일 역할: EpicFeatureLab의 lab_request_crowd_texture_sources 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Characters/

import json, time, traceback
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

# ROOT: 프로젝트 루트 경로. 결과 파일을 어느 프로젝트에 쓰는지 정하는 기준이다.
ROOT = Path(unreal.Paths.project_dir()).resolve()
assert ROOT.name == "EpicFeatureLab"
OUT = ROOT / "Evidence/case08-texture-sources.json"
# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
SUB = unreal.get_editor_subsystem(unreal.MetaHumanCharacterEditorSubsystem)
# 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
CHARACTERS = [
    unreal.load_asset("/Game/FeatureLab/Characters/" + n)
    for n in ["MHC_LabFictional", "MHC_LabDigitalBody"]
]
START = time.monotonic()
STATE = {"busy": False, "last": 0.0}


# 함수 finish: 이름은 finish이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: report 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
def finish(report):
    global CHARACTERS, SUB
    # 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
    unreal.unregister_slate_post_tick_callback(HANDLE)
    OUT.write_text(json.dumps(report, indent=2), encoding="utf-8")
    CHARACTERS = []
    # SUB에 기준값 None을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
    SUB = None


# 함수 tick: 이름은 tick이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: delta
def tick(delta):
    if STATE["busy"] or time.monotonic() - STATE["last"] < 1:
        # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
        return
    STATE["busy"] = True
    STATE["last"] = time.monotonic()
    # 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다.
    try:
        # 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 has_high_resolution_textures이다.
        rows = [
            {
                "character": c.get_path_name(),
                "high_resolution_sources": c.get_editor_property(
                    "has_high_resolution_textures"
                ),
                "face_rig": c.get_editor_property("has_face_dna_blendshapes"),
            }
            for c in CHARACTERS
        ]
        report = {
            "status": "running",
            "characters": rows,
            "elapsed_seconds": time.monotonic() - START,
        }
        if all(r["high_resolution_sources"] and r["face_rig"] for r in rows):
            # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 c의 값이 매번 바뀐다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
            for c in CHARACTERS:
                # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
                assert unreal.EditorAssetLibrary.save_loaded_asset(c, False)
            report["texture_diagnostics"] = [
                json.loads(unreal.FeatureLabRuntimeLibrary.inspect_lab_meta_human_textures(c))
                for c in CHARACTERS
            ]
            # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 c의 값이 매번 바뀐다.
            for c in CHARACTERS:
                SUB.remove_object_to_edit(c)
            report["status"] = "ready"
            finish(report)
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: time.monotonic() - START > 600 문자열을 파일에 기록한다. 결과 JSON이나 보고서인지, 실제 코드·설정 파일인지 경로를 확인한다.
        elif time.monotonic() - START > 600:
            report["status"] = "timed_out"
            finish(report)
        else:
            OUT.write_text(json.dumps(report, indent=2), encoding="utf-8")
    except Exception:
        finish({"status": "failed", "error": traceback.format_exc()})
    finally:
        STATE["busy"] = False


# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 character의 값이 매번 바뀐다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 has_high_resolution_textures이다.
for character in CHARACTERS:
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert unreal.FeatureLabRuntimeLibrary.enable_lab_meta_human_skin(character)
    if not character.get_editor_property("has_high_resolution_textures"):
        params = unreal.MetaHumanCharacterTextureRequestParams()
        params.set_editor_properties({"blocking": False, "report_progress": False})
        SUB.request_texture_sources(character, params)
# 문자열을 파일에 기록한다. 결과 JSON이나 보고서인지, 실제 코드·설정 파일인지 경로를 확인한다.
OUT.write_text(
    json.dumps({"status": "running", "stage": "source_requests_submitted"}), encoding="utf-8"
)
# HANDLE: 나중에 콜백을 해제하기 위해 보관하는 등록 표식이다. 에디터 갱신 뒤 호출할 함수를 등록한다. 작업이 끝나면 핸들로 해제해야 반복 호출이 남지 않는다.
HANDLE = unreal.register_slate_post_tick_callback(tick)
RESULT = {"status": "running", "output": str(OUT)}
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

<a id="source-lab-lab-save-crowd-redirectors-py"></a>

### lab_save_crowd_redirectors.py

```python
# 파일 역할: EpicFeatureLab의 lab_save_crowd_redirectors 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Crowds/

import json
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
assert root.name == "EpicFeatureLab"
packages = [
    p
    for p in unreal.EditorLoadingAndSavingUtils.get_dirty_content_packages()
    if p.get_name().startswith("/Game/FeatureLab/Crowds/")
]
saved = unreal.EditorLoadingAndSavingUtils.save_packages(packages, True)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "saved": saved,
    "packages": [p.get_name() for p in packages],
    "dirty_after": [
        p.get_name() for p in unreal.EditorLoadingAndSavingUtils.get_dirty_content_packages()
    ],
    "policy": "Save generated redirector packages; no deletion or redirector removal",
}
(root / "Evidence/case08-redirector-save.json").write_text(
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

<a id="source-lab-lab-test-crowd-runtime-py"></a>

### lab_test_crowd_runtime.py

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
OUT = ROOT / "Evidence/case08-runtime-validation.json"
# 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
WORLD = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert WORLD
CONTROLLER = unreal.GameplayStatics.get_all_actors_of_class(
    WORLD, unreal.FeatureLabCrowdController
)[0]
assert not CONTROLLER.get_editor_property("bWaitingForSpawn")
assert CONTROLLER.get_count() == 64 and CONTROLLER.get_editor_property("bMovementEnabled")
STAGES = [
    "moving_start",
    "moving_end",
    "stopped_start",
    "stopped_end",
    "resumed",
    "count16",
    "count256",
    "near",
    "far",
    "overview",
    "reset",
    "repeat_reset",
]
STATE = {
    "index": 0,
    "since": unreal.GameplayStatics.get_time_seconds(WORLD),
    "started_wall": time.perf_counter(),
    "busy": False,
}
PHASES = {}


# 함수 snapshot: 이름은 snapshot이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: 별도 입력 없음 JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
def snapshot():
    # JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
    data = json.loads(CONTROLLER.capture_crowd_state())
    s = unreal.MetaHumanCrowdStatsLibrary.gather_meta_human_crowd_stats(WORLD)
    data["official_stats"] = {
        n: s.get_editor_property(n)
        for n in ["num_entities", "num_visible", "num_actors", "num_isk_ms"]
    }
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return data


# 함수 finish: 이름은 finish이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: report 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
def finish(report):
    global HANDLE, WORLD, CONTROLLER
    # 등록했던 콜백을 해제한다. 반복 작업을 끝내기 위한 처리다.
    unreal.unregister_slate_post_tick_callback(HANDLE)
    report["phases"] = PHASES
    OUT.write_text(json.dumps(report, indent=2), encoding="utf-8")
    # WORLD에 기준값 None을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
    WORLD = CONTROLLER = None


# 함수 origins: 이름은 origins이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: data
def origins(data):
    return sorted(tuple(round(v, 3) for v in a["origin"]) for a in data["agents"])


# 함수 speeds: 이름은 speeds이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: data
def speeds(data):
    return [math.dist(a["velocity"], [0, 0, 0]) for a in data["agents"]]


# 함수 displacement: 이름은 displacement이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: a, b 여러 목록의 같은 위치 항목을 묶어 순서대로 비교한다.
def displacement(a, b):
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다. 여러 목록의 같은 위치 항목을 묶어 순서대로 비교한다.
    return max(
        math.dist(x["location"], y["location"]) for x, y in zip(a["agents"], b["agents"])
    )


# 함수 tick: 이름은 tick이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: delta 문자열을 파일에 기록한다. 결과 JSON이나 보고서인지, 실제 코드·설정 파일인지 경로를 확인한다.
def tick(delta):
    if STATE["busy"]:
        # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
        return
    STATE["busy"] = True
    # 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다. 문자열을 파일에 기록한다. 결과 JSON이나 보고서인지, 실제 코드·설정 파일인지 경로를 확인한다.
    try:
        if time.perf_counter() - STATE["started_wall"] > 240:
            raise RuntimeError("Crowd validation timed out")
        now = unreal.GameplayStatics.get_time_seconds(WORLD)
        if CONTROLLER.get_editor_property("bWaitingForSpawn") or now - STATE["since"] < 2:
            # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
            return
        name = STAGES[STATE["index"]]
        data = snapshot()
        expected = (
            16
            if name == "count16"
            else 256 if name in ["count256", "near", "far", "overview"] else 64
        )
        if data["count"] != expected or data["official_stats"]["num_entities"] != expected:
            # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
            return
        PHASES[name] = data
        if name == "moving_end":
            CONTROLLER.toggle_movement()
        elif name == "stopped_end":
            CONTROLLER.toggle_movement()
        elif name == "resumed":
            CONTROLLER.set_agent_count(16)
        elif name == "count16":
            CONTROLLER.set_agent_count(256)
        elif name in ["count256", "near", "far"]:
            CONTROLLER.cycle_camera()
        elif name in ["overview", "reset"]:
            CONTROLLER.reset_crowd()
        if name == "repeat_reset":
            p = PHASES
            stopped = speeds(p["stopped_end"])
            checks = {
                "mass_count64_matches_official_meta_human_stats": p["moving_start"]["count"]
                == p["moving_start"]["official_stats"]["num_entities"]
                == 64,
                "official_instanced_skinned_representation_active": p["moving_start"][
                    "official_stats"
                ]["num_isk_ms"]
                > 40,
                "crowd_is_visible": p["moving_start"]["official_stats"]["num_visible"] > 40,
                "all_mass_fragments_initialize": all(
                    a["initialized"] for d in p.values() for a in d["agents"]
                ),
                "mass_processor_moves_actual_transforms": displacement(
                    p["moving_start"], p["moving_end"]
                )
                > 30,
                "moving_entities_select_baked_walk": sum(
                    a.get("animation_index") == 1 for a in p["moving_end"]["agents"]
                )
                > 40,
                "stop_input_clears_velocity": max(stopped) < 0.001,
                "stop_holds_entity_positions": displacement(
                    p["stopped_start"], p["stopped_end"]
                )
                < 0.001,
                "stopped_entities_select_baked_idle": all(
                    a.get("animation_index") == 0 for a in p["stopped_end"]["agents"]
                ),
                "resume_restores_movement": max(speeds(p["resumed"])) > 100,
                "count16_replaces_previous_entities": p["count16"]["count"]
                == p["count16"]["official_stats"]["num_entities"]
                == 16,
                "count256_replaces_previous_entities": p["count256"]["count"]
                == p["count256"]["official_stats"]["num_entities"]
                == 256,
                "stress256_renders_instanced_crowd": p["count256"]["official_stats"][
                    "num_isk_ms"
                ]
                > 180,
                "near_camera_changes_mass_lod": set(a.get("lod") for a in p["near"]["agents"])
                != set(a.get("lod") for a in p["count256"]["agents"]),
                "far_camera_culls_crowd_representations": p["far"]["official_stats"][
                    "num_isk_ms"
                ]
                == 0
                and p["far"]["official_stats"]["num_visible"] == 0,
                "return_camera_restores_representation": p["overview"]["official_stats"][
                    "num_isk_ms"
                ]
                > 180,
                "reset_returns_to64_without_ghost_entities": p["reset"]["count"]
                == p["reset"]["official_stats"]["num_entities"]
                == 64,
                "reset_restores_seeded_spawn_layout": origins(p["reset"])
                == origins(p["moving_start"]),
                "repeat_reset_layout_is_identical": origins(p["repeat_reset"])
                == origins(p["reset"]),
                "all_output_values_are_finite": all(
                    math.isfinite(v)
                    for d in p.values()
                    for a in d["agents"]
                    for key in ["location", "velocity", "origin"]
                    for v in a[key]
                ),
            }
            finish(
                {
                    "status": "passed" if all(checks.values()) else "failed_checks",
                    "checks": checks,
                    "moving_displacement_cm": displacement(p["moving_start"], p["moving_end"]),
                    "stopped_displacement_cm": displacement(
                        p["stopped_start"], p["stopped_end"]
                    ),
                    "seed": 7421,
                    "scope": "Official MetaHuman Crowd assembly/visualization and Mass ECS movement, representation, LOD, respawn and reset",
                }
            )
            # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
            return
        STATE["index"] += 1
        STATE["since"] = now
        # 문자열을 파일에 기록한다. 결과 JSON이나 보고서인지, 실제 코드·설정 파일인지 경로를 확인한다.
        OUT.write_text(
            json.dumps({"status": "running", "phase": STAGES[STATE["index"]]}), encoding="utf-8"
        )
    except Exception:
        finish({"status": "failed", "error": traceback.format_exc()})
    finally:
        STATE["busy"] = False


OUT.write_text(json.dumps({"status": "running", "phase": "moving_start"}), encoding="utf-8")
# HANDLE: 나중에 콜백을 해제하기 위해 보관하는 등록 표식이다. 에디터 갱신 뒤 호출할 함수를 등록한다. 작업이 끝나면 핸들로 해제해야 반복 호출이 남지 않는다.
HANDLE = unreal.register_slate_post_tick_callback(tick)
RESULT = {"status": "running", "output": str(OUT)}
```

<a id="source-lab-lab-verify-saved-skin-py"></a>

### lab_verify_saved_skin.py

```python
# 파일 역할: 완성 결과를 실제 값과 비교하는 검증 작업. 생성 코드와 검사 코드를 구분한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Crowds/SkinTextures/

import json
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
# JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
saved = json.loads(
    (root / "Evidence/case08-skin-binding-validation.json").read_text(encoding="utf-8-sig")
)
checks = {}
failures = []
for row in saved["materials"]:
    material = unreal.load_asset(row["material"])
    values = []
    for b in row["bindings"]:
        actual = (
            unreal.MaterialEditingLibrary.get_material_instance_texture_parameter_value(
                material, b["parameter"]
            )
            if material
            else None
        )
        actual_path = actual.get_path_name() if actual else None
        values.append(actual_path == b["asset"])
        if actual_path != b["asset"]:
            # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
            failures.append(
                {
                    "material": row["material"],
                    "parameter": b["parameter"],
                    "expected": b["asset"],
                    "actual": actual_path,
                }
            )
    checks[row["material"]] = all(values)
textures = []
for name in ["MHC_LabFictional", "MHC_LabDigitalBody"]:
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 kind의 값이 매번 바뀐다. 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
    for kind in [0, 4, 8]:
        # 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
        texture = unreal.load_asset(
            "/Game/FeatureLab/Crowds/SkinTextures/" + name + "_Skin_" + str(kind)
        )
        size = [texture.blueprint_get_size_x(), texture.blueprint_get_size_y()]
        checks[name + "_texture_" + str(kind)] = size == [
            1024,
            1024,
        ] and texture.get_editor_property("srgb") == bool(kind == 0)
        textures.append({"asset": texture.get_path_name(), "size": size})
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "status": "passed" if all(checks.values()) else "failed",
    "checks": checks,
    "textures": textures,
    "editor_process_stage": "crowd-skin-roundtrip",
    "failures": failures,
}
(root / "Evidence/case08-skin-roundtrip.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
unreal.AutomationLibrary.take_high_res_screenshot(
    1280, 720, str(root / "Evidence/case08-textured-crowd.png")
)
```

<a id="source-source-mutablesample-featurelabcrowd-cpp"></a>

### FeatureLabCrowd.cpp

```cpp
// 파일 역할: 08번 군중 제작 자료와 공식 조립 파이프라인 연결
// 클래스=작업 종류, 객체=실제 한 개, 포인터(* 또는 TObjectPtr)=다른 객체를 가리키는 참조.
// nullptr은 대상 없음, bool은 참/거짓, TArray는 순서 있는 목록, FString은 문자열이다.
// WITH_EDITOR 구간은 에디터 빌드에서만 사용하는 코드다. 원본과의 토큰 비교 결과는 code-validation.json에 기록한다.

#include "FeatureLabRuntime.h"
#include "MetaHumanCollection.h"
#include "MetaHumanCollectionPipeline.h"
#include "MetaHumanCollectionEditorPipeline.h"
#include "MetaHumanInstance.h"
#include "Misc/FileHelper.h"
#include "Misc/Paths.h"
#include "Serialization/JsonSerializer.h"
// 빌드 조건에 따라 포함할 코드를 고른다. 게임 실행 중의 if 조건과 달리 빌드할 때 구분한다.
#if WITH_EDITOR
#include "AssetRegistry/AssetRegistryModule.h"
#endif

namespace
{
bool bLabCrowdBuilding = false;
void WriteLabCrowdBuild(const FString &Status, UMetaHumanCollection *Collection,
                        const FString &Error = FString())
{
    TSharedRef<FJsonObject> Report = MakeShared<FJsonObject>();
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    Report->SetStringField(TEXT("status"), Status);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    Report->SetStringField(TEXT("collection"), Collection ? Collection->GetPathName() : TEXT(""));
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    Report->SetBoolField(TEXT("built_data_valid"),
                         Collection && Collection->GetBuiltData().IsValid());
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Error.IsEmpty())
        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
        Report->SetStringField(TEXT("error"), Error);
    FString Text;
    FJsonSerializer::Serialize(Report, TJsonWriterFactory<>::Create(&Text));
    FFileHelper::SaveStringToFile(
        Text, *(FPaths::ProjectDir() / TEXT("Evidence/case08-crowd-collection.json")),
        FFileHelper::EEncodingOptions::ForceUTF8WithoutBOM);
}
} // namespace

// 【함수 역할】뒤의 처리에 필요한 객체·에셋·구성을 준비한다. 에디터 전용 구간과 런타임 구간이 나뉘는지, 기존 자료를 재사용하는지 함께 확인한다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
UObject *UFeatureLabRuntimeLibrary::PrepareLabCrowdCollection()
{
// 빌드 조건에 따라 포함할 코드를 고른다. 게임 실행 중의 if 조건과 달리 빌드할 때 구분한다.
#if WITH_EDITOR
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!FPaths::GetBaseFilename(FPaths::GetProjectFilePath()).Equals(TEXT("EpicFeatureLab")))
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return nullptr;
    const TCHAR *AssetPath = TEXT("/Game/FeatureLab/Crowds/MC_LabCrowd.MC_LabCrowd");
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (UMetaHumanCollection *Existing = LoadObject<UMetaHumanCollection>(nullptr, AssetPath))
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return Existing;
    UClass *PipelineClass = LoadClass<UMetaHumanCollectionPipeline>(
        nullptr, TEXT("/MetaHumanCrowd/BP_CrowdPipeline.BP_CrowdPipeline_C"));
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!PipelineClass)
    {
        WriteLabCrowdBuild(TEXT("failed"), nullptr, TEXT("Crowd pipeline class unavailable"));
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return nullptr;
    }
    UPackage *Package = CreatePackage(TEXT("/Game/FeatureLab/Crowds/MC_LabCrowd"));
    UMetaHumanCollection *Collection = NewObject<UMetaHumanCollection>(
        Package, TEXT("MC_LabCrowd"), RF_Public | RF_Standalone | RF_Transactional);
    Collection->SetPipelineFromClass(PipelineClass);
    bool bFirst = true;
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (const FString &Name :
         {FString(TEXT("MHC_LabFictional")), FString(TEXT("MHC_LabDigitalBody"))})
    {
        const FSoftObjectPath CharacterPath(
            FString::Printf(TEXT("/Game/FeatureLab/Characters/%s.%s"), *Name, *Name));
        FMetaHumanPaletteItemKey HeadKey, BodyKey;
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (!Collection->TryAddItemFromPrincipalAsset(TEXT("Head"), CharacterPath, HeadKey) ||
            !Collection->TryAddItemFromPrincipalAsset(TEXT("Body"), CharacterPath, BodyKey))
        {
            WriteLabCrowdBuild(TEXT("failed"), Collection,
                               TEXT("Could not add authored character to crowd slots: ") + Name);
            // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
            return nullptr;
        }
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (bFirst)
        {
            Collection->GetMutableDefaultInstance()->SetSingleSlotSelection(TEXT("Head"), HeadKey);
            Collection->GetMutableDefaultInstance()->SetSingleSlotSelection(TEXT("Body"), BodyKey);
            bFirst = false;
        }
    }
    FAssetRegistryModule::AssetCreated(Collection);
    Collection->MarkPackageDirty();
    WriteLabCrowdBuild(TEXT("prepared"), Collection);
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return Collection;
#else
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return nullptr;
#endif
}

// 【함수 역할】이후 작업에 사용할 객체나 값을 찾는다. 찾지 못했을 때 빈 참조가 반환될 수 있으므로 호출하는 쪽의 검사도 필요하다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
UObject *UFeatureLabRuntimeLibrary::GetLabCrowdEditorPipeline(UObject *Object)
{
// 빌드 조건에 따라 포함할 코드를 고른다. 게임 실행 중의 if 조건과 달리 빌드할 때 구분한다.
#if WITH_EDITOR
    UMetaHumanCollection *Collection = Cast<UMetaHumanCollection>(Object);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (Collection && Collection->GetPathName().StartsWith(TEXT("/Game/FeatureLab/Crowds/")))
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return const_cast<UMetaHumanCollectionEditorPipeline *>(Collection->GetEditorPipeline());
#endif
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return nullptr;
}

// 【함수 역할】뒤의 처리에 필요한 객체·에셋·구성을 준비한다. 에디터 전용 구간과 런타임 구간이 나뉘는지, 기존 자료를 재사용하는지 함께 확인한다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
bool UFeatureLabRuntimeLibrary::BuildLabCrowdCollection(UObject *Object)
{
// 빌드 조건에 따라 포함할 코드를 고른다. 게임 실행 중의 if 조건과 달리 빌드할 때 구분한다.
#if WITH_EDITOR
    UMetaHumanCollection *Collection = Cast<UMetaHumanCollection>(Object);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (bLabCrowdBuilding || !Collection ||
        !Collection->GetPathName().StartsWith(TEXT("/Game/FeatureLab/Crowds/")))
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return false;
    const UMetaHumanCollectionEditorPipeline *Pipeline = Collection->GetEditorPipeline();
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Pipeline || !Pipeline->CanBuild())
    {
        WriteLabCrowdBuild(TEXT("failed"), Collection, TEXT("Crowd editor pipeline is not ready"));
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return false;
    }
    Collection->RefreshBuildCacheGuid();
    bLabCrowdBuilding = true;
    Collection->AddToRoot();
    WriteLabCrowdBuild(TEXT("building"), Collection);
    Collection->Build(
        FInstancedStruct(),
        // 【함수 역할】뒤의 처리에 필요한 객체·에셋·구성을 준비한다. 에디터 전용 구간과 런타임 구간이 나뉘는지, 기존 자료를 재사용하는지 함께 확인한다.
        // 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
        UMetaHumanCollection::FOnBuildComplete::CreateLambda([Collection](
                                                                 EMetaHumanBuildStatus Status) {
            // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
            if (Status != EMetaHumanBuildStatus::Succeeded || !Collection->GetBuiltData().IsValid())
            {
                WriteLabCrowdBuild(TEXT("failed"), Collection,
                                   TEXT("Crowd collection build failed"));
                bLabCrowdBuilding = false;
                Collection->RemoveFromRoot();
                return;
            }
            WriteLabCrowdBuild(TEXT("unpacking"), Collection);
            // 【함수 역할】뒤의 처리에 필요한 객체·에셋·구성을 준비한다. 에디터 전용 구간과 런타임 구간이 나뉘는지, 기존 자료를 재사용하는지 함께 확인한다.
            // 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
            Collection->UnpackAssets(FOnMetaHumanCharacterAssetsUnpacked::CreateLambda(
                [Collection](EMetaHumanCharacterAssetsUnpackResult Result) {
                    WriteLabCrowdBuild(Result == EMetaHumanCharacterAssetsUnpackResult::Succeeded
                                           ? TEXT("built_and_unpacked")
                                           : TEXT("failed_unpack"),
                                       Collection);
                    bLabCrowdBuilding = false;
                    Collection->RemoveFromRoot();
                }));
        }));
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return true;
#else
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return false;
#endif
}
```

<a id="source-source-mutablesample-featurelabcrowdruntime-cpp"></a>

### FeatureLabCrowdRuntime.cpp

```cpp
// 파일 역할: 08번 Mass 군중의 생성 수·이동·LOD·지연 초기화
// 클래스=작업 종류, 객체=실제 한 개, 포인터(* 또는 TObjectPtr)=다른 객체를 가리키는 참조.
// nullptr은 대상 없음, bool은 참/거짓, TArray는 순서 있는 목록, FString은 문자열이다.
// WITH_EDITOR 구간은 에디터 빌드에서만 사용하는 코드다. 원본과의 토큰 비교 결과는 code-validation.json에 기록한다.

#include "FeatureLabCrowdRuntime.h"
#include "FeatureLabRuntime.h"
#include "MassEntityConfigAsset.h"
#include "MassEntityTemplateRegistry.h"
#include "MassEntityUtils.h"
#include "MassEntityManager.h"
#include "MassExecutionContext.h"
#include "MassCommonFragments.h"
#include "MassMovementFragments.h"
#include "MassLODFragments.h"
#include "MassActorSubsystem.h"
#include "MassCrowdFragments.h"
#include "MassRepresentationFragments.h"
#include "MassSpawnLocationProcessor.h"
#include "Mass/MetaHumanMassRepresentationSubsystem.h"
#include "MetaHumanInstance.h"
#include "MetaHumanCollection.h"
#include "MetaHumanCollectionBlueprintLibrary.h"
#include "EngineUtils.h"
#include "Engine/Engine.h"
#include "Components/InputComponent.h"
#include "GameFramework/PlayerController.h"
#include "Kismet/GameplayStatics.h"
#include "Serialization/JsonSerializer.h"
// 빌드 조건에 따라 포함할 코드를 고른다. 게임 실행 중의 if 조건과 달리 빌드할 때 구분한다.
#if WITH_EDITOR
#include "AssetRegistry/AssetRegistryModule.h"
#endif

// 【함수 역할】이름은 Initialize_Implementation이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void UFeatureLabCrowdAppearanceProvider::Initialize_Implementation(
    UMetaHumanMassRepresentationSubsystem *, const TArray<UMetaHumanInstance *> &Instances)
{
    Pool.Reset();
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (UMetaHumanInstance *Instance : Instances)
        Pool.Add(Instance);
}
FMetaHumanCrowdAppearanceHandle UFeatureLabCrowdAppearanceProvider::
    AcquireAppearance_Implementation(UMetaHumanMassRepresentationSubsystem *Subsystem,
                                     const FVector &Location)
{
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Subsystem || Pool.IsEmpty())
        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return {};
    const uint32 Hash =
        GetTypeHash(FIntVector(FMath::RoundToInt(Location.X), FMath::RoundToInt(Location.Y), 0));
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return Subsystem->TryGetAppearanceHandleForInstance(Pool[Hash % Pool.Num()]);
}

// 【함수 역할】클래스의 기본 부품과 기본값을 준비하는 생성자다. 이 시점에는 게임 월드가 모두 준비됐다고 가정하지 않는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
UFeatureLabCrowdVisualizationTrait::UFeatureLabCrowdVisualizationTrait()
{
    AppearanceProviderClass = UFeatureLabCrowdAppearanceProvider::StaticClass();
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (int32 LOD = 0; LOD < 3; ++LOD)
        Params.LODRepresentation[LOD] = EMassRepresentationType::SkinnedMeshInstance;
    Params.LODRepresentation[EMassLOD::Off] = EMassRepresentationType::None;
    const float Distances[4] = {0.f, 800.f, 1800.f, 7000.f};
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (int32 LOD = 0; LOD < 4; ++LOD)
    {
        LODParams.BaseLODDistance[LOD] = Distances[LOD];
        LODParams.VisibleLODDistance[LOD] = Distances[LOD];
        LODParams.LODMaxCount[LOD] = 512;
    }
    SteadyStateTracksPerSequence = 3;
    MaxBlendTracks = 64;
    AnimBlendTime = .25f;
}
// 【함수 역할】뒤의 처리에 필요한 객체·에셋·구성을 준비한다. 에디터 전용 구간과 런타임 구간이 나뉘는지, 기존 자료를 재사용하는지 함께 확인한다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void UFeatureLabCrowdVisualizationTrait::BuildTemplate(FMassEntityTemplateBuildContext &Context,
                                                       const UWorld &World) const
{
    Context.AddFragment<FTransformFragment>();
    Context.AddFragment<FMassVelocityFragment>();
    Context.AddFragment<FMassActorFragment>();
    Context.AddFragment<FMassViewerInfoFragment>();
    Context.AddFragment<FFeatureLabCrowdFragment>();
    Context.AddTag<FMassCrowdTag>();
    Context.AddTag<FMassCollectLODViewerInfoTag>();
    // 부모 클래스의 기본 처리를 먼저/함께 실행한다. 자식 클래스의 추가 작업만으로 엔진 기본 동작을 대체하지 않는다.
    Super::BuildTemplate(Context, World);
}

// 【함수 역할】이름은 Generate이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void UFeatureLabCrowdSpawnGenerator::Generate(UObject &,
                                              TConstArrayView<FMassSpawnedEntityType> EntityTypes,
                                              int32 Count,
                                              FFinishedGeneratingSpawnDataSignature &Finished) const
{
    TArray<FMassEntitySpawnDataGeneratorResult> Results;
    BuildResultsFromEntityTypes(Count, EntityTypes, Results);
    FRandomStream Random(7421);
    int32 Index = 0;
    const int32 Columns = FMath::Min(16, Count), Rows = FMath::DivideAndRoundUp(Count, Columns);
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (FMassEntitySpawnDataGeneratorResult &Result : Results)
    {
        Result.SpawnDataProcessor = UMassSpawnLocationProcessor::StaticClass();
        FMassTransformsSpawnData &Data = Result.SpawnData.InitializeAs<FMassTransformsSpawnData>();
        Data.bRandomize = false;
        // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
        for (int32 I = 0; I < Result.NumEntities; ++I, ++Index)
        {
            const FVector Location(
                (Index % Columns - (Columns - 1) * .5) * 220 + Random.FRandRange(-8, 8),
                (Index / Columns - (Rows - 1) * .5) * 220 + Random.FRandRange(-8, 8), 0);
            Data.Transforms.Add(FTransform(FRotator::ZeroRotator, Location));
        }
    }
    Finished.ExecuteIfBound(Results);
}

// 【함수 역할】클래스의 기본 부품과 기본값을 준비하는 생성자다. 이 시점에는 게임 월드가 모두 준비됐다고 가정하지 않는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
UFeatureLabCrowdMovementProcessor::UFeatureLabCrowdMovementProcessor() : Query(*this)
{
    ExecutionFlags =
        (int32)(EProcessorExecutionFlags::Client | EProcessorExecutionFlags::Standalone);
    ExecutionOrder.ExecuteInGroup = UE::Mass::ProcessorGroupNames::Movement;
    bRequiresGameThreadExecution = true;
}
// 【함수 역할】이름은 ConfigureQueries이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void UFeatureLabCrowdMovementProcessor::ConfigureQueries(const TSharedRef<FMassEntityManager> &)
{
    Query.AddRequirement<FTransformFragment>(EMassFragmentAccess::ReadWrite);
    Query.AddRequirement<FMassVelocityFragment>(EMassFragmentAccess::ReadWrite);
    Query.AddRequirement<FFeatureLabCrowdFragment>(EMassFragmentAccess::ReadWrite);
}
// 【함수 역할】이름은 Execute이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void UFeatureLabCrowdMovementProcessor::Execute(FMassEntityManager &,
                                                FMassExecutionContext &Context)
{
    AFeatureLabCrowdController *Controller = nullptr;
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (TActorIterator<AFeatureLabCrowdController> It(Context.GetWorld()); It; ++It)
    {
        Controller = *It;
        break;
    }
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Controller)
        return;
    TArray<FVector> Positions;
    Query.ForEachEntityChunk(Context, [&](FMassExecutionContext &Chunk) {
        const auto Transforms = Chunk.GetFragmentView<FTransformFragment>();
        // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
        for (FMassExecutionContext::FEntityIterator It = Chunk.CreateEntityIterator(); It; ++It)
            Positions.Add(Transforms[It].GetTransform().GetLocation());
    });
    const float Delta = Context.GetDeltaTimeSeconds();
    Query.ForEachEntityChunk(Context, [&](FMassExecutionContext &Chunk) {
        auto Transforms = Chunk.GetMutableFragmentView<FTransformFragment>();
        auto Velocities = Chunk.GetMutableFragmentView<FMassVelocityFragment>();
        auto Agents = Chunk.GetMutableFragmentView<FFeatureLabCrowdFragment>();
        // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
        for (FMassExecutionContext::FEntityIterator It = Chunk.CreateEntityIterator(); It; ++It)
        {
            auto &Agent = Agents[It];
            FTransform &Transform = Transforms[It].GetMutableTransform();
            // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
            if (!Agent.bInitialized)
            {
                Agent.Origin = Transform.GetLocation();
                Agent.Phase = FMath::Fmod(
                    FMath::Abs(Agent.Origin.X * .017f + Agent.Origin.Y * .013f), 2 * PI);
                Agent.bInitialized = true;
            }
            FVector Velocity = FVector::ZeroVector;
            // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
            if (Controller->bMovementEnabled)
            {
                const float Angle = Controller->SimulationTime * .33f + Agent.Phase;
                const FVector Goal =
                    Agent.Origin + FVector(FMath::Cos(Angle) * 260, FMath::Sin(Angle) * 260, 0);
                Velocity = (Goal - Transform.GetLocation()).GetSafeNormal2D() * 135.f;
                // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
                for (const FVector &Other : Positions)
                {
                    FVector Offset = Transform.GetLocation() - Other;
                    Offset.Z = 0;
                    const double Distance = Offset.Size();
                    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
                    if (Distance > .01 && Distance < 85)
                        Velocity += Offset / Distance * ((85 - Distance) * 4.f);
                }
                Velocity = Velocity.GetClampedToMaxSize(190);
                Transform.SetLocation(Transform.GetLocation() + Velocity * Delta);
                // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
                if (!Velocity.IsNearlyZero())
                    Transform.SetRotation(Velocity.Rotation().Quaternion());
            }
            Velocities[It].Value = Velocity;
        }
    });
}

// 【함수 역할】클래스의 기본 부품과 기본값을 준비하는 생성자다. 이 시점에는 게임 월드가 모두 준비됐다고 가정하지 않는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
AFeatureLabCrowdController::AFeatureLabCrowdController()
{
    PrimaryActorTick.bCanEverTick = true;
    PrimaryActorTick.TickGroup = TG_PostPhysics;
    Count = 64;
    bAutoSpawnOnBeginPlay = false;
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!RootComponent)
        // 이 액터의 기본 컴포넌트를 만든다. 부품 생성 뒤 장면 부착·재질·충돌 설정이 이어지는지 확인한다.
        RootComponent = CreateDefaultSubobject<USceneComponent>(TEXT("LabRoot"));
}
// 【함수 역할】액터가 게임 월드에서 실행을 시작할 때 엔진이 호출한다. 생성자에서 부품을 만든 뒤 실제 월드·플레이어·입력과 연결하는 초기 준비 단계다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabCrowdController::BeginPlay()
{
    EntityTypes.Reset();
    SpawnDataGenerators.Reset();
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (SpawnConfig)
    {
        FMassSpawnedEntityType &Type = EntityTypes.AddDefaulted_GetRef();
        Type.EntityConfig = SpawnConfig;
        FMassSpawnDataGenerator &Generator = SpawnDataGenerators.AddDefaulted_GetRef();
        Generator.GeneratorInstance = NewObject<UFeatureLabCrowdSpawnGenerator>(this);
    }
    OnSpawningFinishedEvent.AddDynamic(this, &AFeatureLabCrowdController::SpawnFinished);
    // 부모 클래스의 기본 처리를 먼저/함께 실행한다. 자식 클래스의 추가 작업만으로 엔진 기본 동작을 대체하지 않는다.
    Super::BeginPlay();
    // 【함수 역할】이후 작업에 사용할 객체나 값을 찾는다. 찾지 못했을 때 빈 참조가 반환될 수 있으므로 호출하는 쪽의 검사도 필요하다.
    // 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (APlayerController *PC = UGameplayStatics::GetPlayerController(this, 0))
    {
        EnableInput(PC);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::One, IE_Pressed, this,
                                &AFeatureLabCrowdController::Select16);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::Two, IE_Pressed, this,
                                &AFeatureLabCrowdController::Select64);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::Three, IE_Pressed, this,
                                &AFeatureLabCrowdController::Select256);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::T, IE_Pressed, this,
                                &AFeatureLabCrowdController::ToggleMovement);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::R, IE_Pressed, this,
                                &AFeatureLabCrowdController::ResetCrowd);
        // 실제 키 입력과 함수를 연결한다. 앞의 키와 뒤의 함수 이름을 짝으로 읽는다.
        InputComponent->BindKey(EKeys::V, IE_Pressed, this,
                                &AFeatureLabCrowdController::CycleCamera);
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (!Cameras.IsEmpty())
            PC->SetViewTarget(Cameras[0]);
    }
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (SpawnConfig)
    {
        bWaitingForSpawn = true;
        DoSpawning();
    }
}
// 【함수 역할】이름은 SpawnFinished이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabCrowdController::SpawnFinished()
{
    bWaitingForSpawn = false;
    ++SpawnGeneration;
}
// 【함수 역할】입력이나 현재 선택값을 실제 객체의 상태에 반영한다. 값 저장과 화면·물리·애니메이션 갱신 호출을 함께 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabCrowdController::SetAgentCount(int32 NewCount)
{
    DesiredCount = FMath::Clamp(NewCount, 1, 256);
}
// 【함수 역할】현재 선택 상태를 다음 상태로 바꾸고 결과에 반영한다. 켬·끔 전환인지 여러 선택지 순환인지 조건문을 따라 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabCrowdController::ToggleMovement()
{
    bMovementEnabled = !bMovementEnabled;
}
// 【함수 역할】즉시 군중을 파괴하지 않는다. 기본 인원 64명과 초기화 요청만 기록하고, 실제 재생성은 Tick에서 Mass 처리가 끝난 시점에 수행한다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabCrowdController::ResetCrowd()
{
    // Player input can run while Mass is processing asynchronously.
    // Apply structural changes from Tick only after the entity manager is idle.
    DesiredCount = 64;
    // bResetRequested: 사용자가 초기화를 요청했다는 상태다. 요청 시점과 실제 개체 파괴·생성 시점을 나눈다.
    bResetRequested = true;
}
// 【함수 역할】현재 선택 상태를 다음 상태로 바꾸고 결과에 반영한다. 켬·끔 전환인지 여러 선택지 순환인지 조건문을 따라 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabCrowdController::CycleCamera()
{
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (Cameras.IsEmpty())
        return;
    CameraIndex = (CameraIndex + 1) % Cameras.Num();
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (APlayerController *PC = UGameplayStatics::GetPlayerController(this, 0))
        PC->SetViewTargetWithBlend(Cameras[CameraIndex], .2f);
}
// 【함수 역할】매 갱신 시점에 상태를 확인하고 동작을 진행한다. DeltaSeconds는 이번 갱신까지 지난 시간이며, 함수가 1초에 정확히 60번 불린다고 가정하지 않는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AFeatureLabCrowdController::Tick(float DeltaSeconds)
{
    // 부모 클래스의 기본 처리를 먼저/함께 실행한다. 자식 클래스의 추가 작업만으로 엔진 기본 동작을 대체하지 않는다.
    Super::Tick(DeltaSeconds);
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (bMovementEnabled && !bWaitingForSpawn)
        // DeltaSeconds: 이전 갱신 이후 지난 시간(초)이다. 프레임 수가 아니라 시간에 비례한 계산에 사용한다.
        SimulationTime += DeltaSeconds;
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!bWaitingForSpawn && (bResetRequested || Count != DesiredCount))
    {
        FMassEntityManager &Manager = UE::Mass::Utils::GetEntityManagerChecked(*GetWorld());
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (!Manager.IsProcessing())
        {
            // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
            if (bResetRequested)
            {
                bMovementEnabled = true;
                ++ResetCount;
            }
            // bResetRequested: 사용자가 초기화를 요청했다는 상태다. 요청 시점과 실제 개체 파괴·생성 시점을 나눈다.
            bResetRequested = false;
            DoDespawning();
            Count = DesiredCount;
            SimulationTime = 0;
            bWaitingForSpawn = true;
            DoSpawning();
        }
    }
    int32 Live = 0;
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (const auto &Group : AllSpawnedEntities)
        Live += Group.Entities.Num();
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (GEngine)
        GEngine->AddOnScreenDebugMessage(
            (uint64)GetUniqueID(), .15f, FColor::Cyan,
            FString::Printf(
                TEXT(
                    "08 | MetaHuman Crowd + Mass | agents %d | 1=16 2=64 3=256 | T move %s | V camera | R reset | generation %d"),
                Live, bMovementEnabled ? TEXT("ON") : TEXT("OFF"), SpawnGeneration));
}
// 【함수 역할】현재 객체와 실행 결과를 읽어 검증용 자료로 반환한다. 결과를 만드는 함수와 결과를 측정하는 함수를 구분해서 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
FString AFeatureLabCrowdController::CaptureCrowdState() const
{
    TSharedRef<FJsonObject> Report = MakeShared<FJsonObject>();
    TArray<TSharedPtr<FJsonValue>> Agents;
    FMassEntityManager &Manager = UE::Mass::Utils::GetEntityManagerChecked(*GetWorld());
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (const auto &Group : AllSpawnedEntities)
        // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
        for (FMassEntityHandle Entity : Group.Entities)
        {
            // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
            if (!Manager.IsEntityValid(Entity))
                continue;
            TSharedRef<FJsonObject> Item = MakeShared<FJsonObject>();
            auto AddVector = [&](const TCHAR *Name, const FVector &Value) {
                TArray<TSharedPtr<FJsonValue>> A;
                // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
                for (double V : {Value.X, Value.Y, Value.Z})
                    A.Add(MakeShared<FJsonValueNumber>(V));
                Item->SetArrayField(Name, A);
            };
            AddVector(TEXT("location"), Manager.GetFragmentDataChecked<FTransformFragment>(Entity)
                                            .GetTransform()
                                            .GetLocation());
            AddVector(TEXT("velocity"),
                      Manager.GetFragmentDataChecked<FMassVelocityFragment>(Entity).Value);
            const auto &Agent = Manager.GetFragmentDataChecked<FFeatureLabCrowdFragment>(Entity);
            AddVector(TEXT("origin"), Agent.Origin);
            // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
            Item->SetBoolField(TEXT("initialized"), Agent.bInitialized);
            // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
            if (const auto *LOD =
                    Manager.GetFragmentDataPtr<FMassRepresentationLODFragment>(Entity))
                // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
                Item->SetNumberField(TEXT("lod"), (int32)LOD->LOD);
            // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
            if (const auto *Rep = Manager.GetFragmentDataPtr<FMassRepresentationFragment>(Entity))
                // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
                Item->SetNumberField(TEXT("representation"), (int32)Rep->CurrentRepresentation);
            // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
            if (const auto *Anim =
                    Manager.GetFragmentDataPtr<FMassRepresentationAnimationFragment>(Entity))
                // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
                Item->SetNumberField(TEXT("animation_index"), Anim->AnimData.SequenceIndex);
            Agents.Add(MakeShared<FJsonValueObject>(Item));
        }
    Report->SetArrayField(TEXT("agents"), Agents);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    Report->SetNumberField(TEXT("count"), Agents.Num());
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    Report->SetNumberField(TEXT("generation"), SpawnGeneration);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    Report->SetNumberField(TEXT("reset_count"), ResetCount);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    Report->SetNumberField(TEXT("simulation_time"), SimulationTime);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    Report->SetBoolField(TEXT("waiting"), bWaitingForSpawn);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    Report->SetBoolField(TEXT("movement_enabled"), bMovementEnabled);
    FString Text;
    FJsonSerializer::Serialize(Report, TJsonWriterFactory<>::Create(&Text));
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return Text;
}

// 【함수 역할】뒤의 처리에 필요한 객체·에셋·구성을 준비한다. 에디터 전용 구간과 런타임 구간이 나뉘는지, 기존 자료를 재사용하는지 함께 확인한다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
UObject *UFeatureLabRuntimeLibrary::PrepareLabCrowdConfig(const TArray<UObject *> &Instances)
{
// 빌드 조건에 따라 포함할 코드를 고른다. 게임 실행 중의 if 조건과 달리 빌드할 때 구분한다.
#if WITH_EDITOR
    UMassEntityConfigAsset *Config = LoadObject<UMassEntityConfigAsset>(
        nullptr, TEXT("/Game/FeatureLab/Crowds/MEC_LabCrowd.MEC_LabCrowd"));
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Config)
    {
        Config = NewObject<UMassEntityConfigAsset>(
            CreatePackage(TEXT("/Game/FeatureLab/Crowds/MEC_LabCrowd")), TEXT("MEC_LabCrowd"),
            RF_Public | RF_Standalone | RF_Transactional);
        FAssetRegistryModule::AssetCreated(Config);
    }
    auto *Trait =
        Cast<UFeatureLabCrowdVisualizationTrait>(Config->GetMutableConfig().FindMutableTrait(
            UFeatureLabCrowdVisualizationTrait::StaticClass()));
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!Trait)
    {
        Trait = NewObject<UFeatureLabCrowdVisualizationTrait>(Config);
        Config->GetMutableConfig().AddTrait(*Trait);
    }
    Trait->CharacterInstances.Reset();
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (UObject *Object : Instances)
    {
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (UMetaHumanInstance *Instance = Cast<UMetaHumanInstance>(Object);
            Instance && Instance->GetPathName().StartsWith(TEXT("/Game/FeatureLab/Crowds/")))
            Trait->CharacterInstances.Add(Instance);
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (UMetaHumanCollection *Collection = Cast<UMetaHumanCollection>(Object);
            Collection && Collection->GetPathName().StartsWith(TEXT("/Game/FeatureLab/Crowds/")))
        {
            // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
            if (!Collection->GetBuiltData().IsValid())
                // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
                return nullptr;
            // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
            for (const FString &CharacterName :
                 {FString(TEXT("MHC_LabFictional")), FString(TEXT("MHC_LabDigitalBody"))})
            {
                const FString Name = TEXT("MHI_") + CharacterName;
                const FString PackageName = TEXT("/Game/FeatureLab/Crowds/Instances/") + Name;
                UMetaHumanInstance *Instance =
                    LoadObject<UMetaHumanInstance>(nullptr, *(PackageName + TEXT(".") + Name));
                // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
                if (!Instance)
                {
                    Instance =
                        NewObject<UMetaHumanInstance>(CreatePackage(*PackageName), *Name,
                                                      RF_Public | RF_Standalone | RF_Transactional);
                    FAssetRegistryModule::AssetCreated(Instance);
                }
                Instance->SetMetaHumanCollection(Collection);
                UObject *Character = LoadObject<UObject>(
                    nullptr, *FString::Printf(TEXT("/Game/FeatureLab/Characters/%s.%s"),
                                              *CharacterName, *CharacterName));
                // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
                for (const FMetaHumanPaletteItemKey &Key :
                     UMetaHumanCollectionBlueprintLibrary::GetItemKeysForPrincipalAsset(Collection,
                                                                                        Character))
                    Instance->SetSingleSlotSelection(
                        UMetaHumanCollectionBlueprintLibrary::GetItemSlotName(Collection, Key),
                        Key);
                Instance->Assemble();
                Instance->MarkPackageDirty();
                Trait->CharacterInstances.Add(Instance);
            }
        }
    }
    Config->MarkPackageDirty();
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return Config;
#else
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return nullptr;
#endif
}
```

<a id="source-source-mutablesample-featurelabcrowdruntime-h"></a>

### FeatureLabCrowdRuntime.h

```cpp
// 파일 역할: 08번 Mass 군중의 생성 수·이동·LOD·지연 초기화
// 클래스=작업 종류, 객체=실제 한 개, 포인터(* 또는 TObjectPtr)=다른 객체를 가리키는 참조.
// nullptr은 대상 없음, bool은 참/거짓, TArray는 순서 있는 목록, FString은 문자열이다.
// WITH_EDITOR 구간은 에디터 빌드에서만 사용하는 코드다. 원본과의 토큰 비교 결과는 code-validation.json에 기록한다.

#pragma once
#include "CoreMinimal.h"
#include "MassEntityTypes.h"
#include "MassEntityQuery.h"
#include "MassProcessor.h"
#include "MassSpawner.h"
#include "Mass/MetaHumanMassCrowdVisualizationTrait.h"
#include "Mass/MetaHumanCrowdAppearanceProvider.h"
#include "FeatureLabCrowdRuntime.generated.h"

class UMassEntityConfigAsset;
// 아래 클래스 또는 구조체를 언리얼이 인식하도록 선언한다. 일반 C++ 선언에 엔진 등록 정보를 덧붙인 것이다.
USTRUCT()
struct FFeatureLabCrowdFragment : public FMassFragment
{
    // 언리얼 헤더 도구가 필요한 보조 코드를 연결하는 매크로다. 함수 본문을 직접 작성하는 자리가 아니다.
    GENERATED_BODY()
    FVector Origin = FVector::ZeroVector;
    float Phase = 0.f;
    bool bInitialized = false;
};

// 아래 클래스 또는 구조체를 언리얼이 인식하도록 선언한다. 일반 C++ 선언에 엔진 등록 정보를 덧붙인 것이다.
UCLASS(EditInlineNew)
class MUTABLESAMPLE_API UFeatureLabCrowdAppearanceProvider
    : public UMetaHumanCrowdAppearanceProvider
{
    // 언리얼 헤더 도구가 필요한 보조 코드를 연결하는 매크로다. 함수 본문을 직접 작성하는 자리가 아니다.
    GENERATED_BODY()
  public:
    virtual void Initialize_Implementation(UMetaHumanMassRepresentationSubsystem *Subsystem,
                                           const TArray<UMetaHumanInstance *> &Instances) override;
    virtual FMetaHumanCrowdAppearanceHandle AcquireAppearance_Implementation(
        UMetaHumanMassRepresentationSubsystem *Subsystem, const FVector &SpawnLocation) override;

  private:
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY() TArray<TObjectPtr<UMetaHumanInstance>> Pool;
};

// 아래 클래스 또는 구조체를 언리얼이 인식하도록 선언한다. 일반 C++ 선언에 엔진 등록 정보를 덧붙인 것이다.
UCLASS(EditInlineNew)
class MUTABLESAMPLE_API UFeatureLabCrowdVisualizationTrait
    : public UMetaHumanMassCrowdVisualizationTrait
{
    // 언리얼 헤더 도구가 필요한 보조 코드를 연결하는 매크로다. 함수 본문을 직접 작성하는 자리가 아니다.
    GENERATED_BODY()
  public:
    UFeatureLabCrowdVisualizationTrait();
    virtual void BuildTemplate(FMassEntityTemplateBuildContext &Context,
                               const UWorld &World) const override;
};

// 아래 클래스 또는 구조체를 언리얼이 인식하도록 선언한다. 일반 C++ 선언에 엔진 등록 정보를 덧붙인 것이다.
UCLASS()
class MUTABLESAMPLE_API UFeatureLabCrowdSpawnGenerator : public UMassEntitySpawnDataGeneratorBase
{
    // 언리얼 헤더 도구가 필요한 보조 코드를 연결하는 매크로다. 함수 본문을 직접 작성하는 자리가 아니다.
    GENERATED_BODY()
  public:
    virtual void Generate(UObject &QueryOwner, TConstArrayView<FMassSpawnedEntityType> EntityTypes,
                          int32 Count,
                          FFinishedGeneratingSpawnDataSignature &Finished) const override;
};

// 아래 클래스 또는 구조체를 언리얼이 인식하도록 선언한다. 일반 C++ 선언에 엔진 등록 정보를 덧붙인 것이다.
UCLASS()
class MUTABLESAMPLE_API UFeatureLabCrowdMovementProcessor : public UMassProcessor
{
    // 언리얼 헤더 도구가 필요한 보조 코드를 연결하는 매크로다. 함수 본문을 직접 작성하는 자리가 아니다.
    GENERATED_BODY()
  public:
    UFeatureLabCrowdMovementProcessor();

  protected:
    virtual void ConfigureQueries(const TSharedRef<FMassEntityManager> &EntityManager) override;
    virtual void Execute(FMassEntityManager &EntityManager,
                         FMassExecutionContext &Context) override;
    FMassEntityQuery Query;
};

// 아래 클래스 또는 구조체를 언리얼이 인식하도록 선언한다. 일반 C++ 선언에 엔진 등록 정보를 덧붙인 것이다.
UCLASS(Blueprintable)
class MUTABLESAMPLE_API AFeatureLabCrowdController : public AMassSpawner
{
    // 언리얼 헤더 도구가 필요한 보조 코드를 연결하는 매크로다. 함수 본문을 직접 작성하는 자리가 아니다.
    GENERATED_BODY()
  public:
    AFeatureLabCrowdController();
    virtual void BeginPlay() override;
    virtual void Tick(float DeltaSeconds) override;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TObjectPtr<UMassEntityConfigAsset> SpawnConfig;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "FeatureLab")
    TArray<TObjectPtr<AActor>> Cameras;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab")
    bool bMovementEnabled = true;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab")
    bool bWaitingForSpawn = false;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab")
    int32 SpawnGeneration = 0;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab") int32 ResetCount = 0;
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "FeatureLab")
    float SimulationTime = 0.f;
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void SetAgentCount(int32 NewCount);
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void ToggleMovement();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void ResetCrowd();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") void CycleCamera();
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = "FeatureLab") FString CaptureCrowdState() const;

  private:
    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION() void SpawnFinished();
    void Select16()
    {
        SetAgentCount(16);
    }
    void Select64()
    {
        SetAgentCount(64);
    }
    void Select256()
    {
        SetAgentCount(256);
    }
    int32 DesiredCount = 64;
    int32 CameraIndex = 0;
    // bResetRequested: 사용자가 초기화를 요청했다는 상태다. 요청 시점과 실제 개체 파괴·생성 시점을 나눈다.
    bool bResetRequested = false;
};
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

<a id="source-source-mutablesample-mutablesample-cpp"></a>

### MutableSample.cpp

```cpp
// 파일 역할: EpicFeatureLab의 MutableSample 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
// 클래스=작업 종류, 객체=실제 한 개, 포인터(* 또는 TObjectPtr)=다른 객체를 가리키는 참조.
// nullptr은 대상 없음, bool은 참/거짓, TArray는 순서 있는 목록, FString은 문자열이다.
// WITH_EDITOR 구간은 에디터 빌드에서만 사용하는 코드다. 원본과의 토큰 비교 결과는 code-validation.json에 기록한다.

// Copyright Epic Games, Inc. All Rights Reserved.

#include "MutableSample.h"
#include "Modules/ModuleManager.h"
#include "UObject/UObjectGlobals.h"

class FMutableSampleModule final : public FDefaultGameModuleImpl
{
  public:
    virtual void StartupModule() override
    {
        FDefaultGameModuleImpl::StartupModule();
// 빌드 조건에 따라 포함할 코드를 고른다. 게임 실행 중의 if 조건과 달리 빌드할 때 구분한다.
#if WITH_EDITOR
        AssetLoadedHandle = FCoreUObjectDelegates::OnAssetLoaded.AddLambda([](UObject *Asset) {
            // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
            if (!IsRunningCookCommandlet() || !Asset ||
                Asset->GetPathName() != TEXT("/Game/FeatureLab/Crowds/MC_LabCrowd.MC_LabCrowd"))
                return;
            // UE's collection CDO creates this subobject only with editor data,
            // but marks it Public. Exclude the authoring-only default instance
            // from this project's cook; explicit assembled runtime instances stay.
            // This changes only the cook process's in-memory object flags.
            // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
            if (UObject *DefaultInstance =
                    // 【함수 역할】이름은 StaticClass이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
                    // 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
                    StaticFindObjectFast(UObject::StaticClass(), Asset, TEXT("DefaultInstance")))
            {
                DefaultInstance->SetFlags(RF_Transient);
                UE_LOG(LogTemp, Display,
                       TEXT("FeatureLab cook: excluding editor-only crowd DefaultInstance"));
            }
        });
#endif
    }
    virtual void ShutdownModule() override
    {
// 빌드 조건에 따라 포함할 코드를 고른다. 게임 실행 중의 if 조건과 달리 빌드할 때 구분한다.
#if WITH_EDITOR
        FCoreUObjectDelegates::OnAssetLoaded.Remove(AssetLoadedHandle);
#endif
        FDefaultGameModuleImpl::ShutdownModule();
    }

  private:
// 빌드 조건에 따라 포함할 코드를 고른다. 게임 실행 중의 if 조건과 달리 빌드할 때 구분한다.
#if WITH_EDITOR
    FDelegateHandle AssetLoadedHandle;
#endif
};

IMPLEMENT_PRIMARY_GAME_MODULE(FMutableSampleModule, MutableSample, "MutableSample");
```

<a id="source-source-mutablesample-mutablesample-h"></a>

### MutableSample.h

```cpp
// 파일 역할: EpicFeatureLab의 MutableSample 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
// 클래스=작업 종류, 객체=실제 한 개, 포인터(* 또는 TObjectPtr)=다른 객체를 가리키는 참조.
// nullptr은 대상 없음, bool은 참/거짓, TArray는 순서 있는 목록, FString은 문자열이다.
// WITH_EDITOR 구간은 에디터 빌드에서만 사용하는 코드다. 원본과의 토큰 비교 결과는 code-validation.json에 기록한다.

// Copyright Epic Games, Inc. All Rights Reserved.

#pragma once

#include "CoreMinimal.h"
```
