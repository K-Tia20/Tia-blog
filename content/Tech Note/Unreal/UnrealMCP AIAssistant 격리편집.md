

AI 도구를 연결했을 때 궁금한 부분은 ‘대답을 하는가’보다 ‘무엇을 바꾸고, 어디까지 반영하며, 어떻게 되돌리는가’였다. 이번에는 재질 두 개를 격리된 작업 공간에서 바꾸고, 하나만 원본에 반영했다.

**Unreal MCP**는 실제 에디터 작업을 호출하는 연결, **AI Assistant**는 에디터 문맥에서 문서를 안내하는 도구, **Sandboxed Editing**은 원본과 분리해 변경을 제안하는 작업 방식으로 구분했다.

![재질 비교 장면](Tech%20Note/Unreal/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/15/result.png)

## 비교할 재료 두 개 준비

1. `Content → FeatureLab → AITools`를 연다.
2. `M_LabAIReviewBase`를 더블클릭해 기본 재질을 본다.
3. `MI_LabAIApproved`, `MI_LabAIRejected`를 각각 연다. MI는 Material Instance로, 기본 재질을 공유하면서 값만 바꾸는 파일이다.
4. 두 파일의 기준 색상은 `(0.2, 0.2, 0.2, 1)`이다. 앞의 세 값이 RGB, 마지막 값이 알파다.
5. `FL_15_AIWorkflow`를 열어 **▶ Play**하면 두 비교 구를 볼 수 있다. 이 화면은 결과 미리보기이며 게임 안에서 AI가 작업을 수행하는 데모는 아니다.

![작업 에셋을 찾는 위치](Tech%20Note/Unreal/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/15/folder.png)

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
| `Unreal MCP` | 외부 AI 도구가 에디터의 실제 도구·API를 호출하는 연결 방식. |
| `Epic Developer Assistant` | 에픽 문서를 바탕으로 언리얼 질문에 답하는 도구. |
| `Ask anything about UE` | 언리얼에 관한 질문을 입력하는 칸. |
| `Get step-by-step instructions` | 단계별 사용 방법을 물어볼 수 있다는 안내. |
| `Explain concepts & features` | 개념과 기능의 설명을 요청할 수 있다는 안내. |
| `Press F1 while hovering on anything` | 항목 위에 마우스를 놓고 F1을 눌러 관련 도움말을 여는 안내. |
| `FAQ / Terms of Service / Privacy Policy` | 자주 묻는 질문 / 이용 약관 / 개인정보 처리 안내. |
| `Sandbox` | 원본과 분리해 변경을 검토하는 작업 공간. |
| `enter / persist / leave` | 격리 공간 진입 / 선택한 변경 반영 / 격리 공간에서 나오기. |
| `Proposal / Rejected` | 반영을 검토하는 제안 / 반영하지 않은 제안. |
| `Material Instance` | 부모 재질을 사용하면서 일부 매개변수만 바꾼 재질 인스턴스. |
| `M_LabAIReviewBase` | 변경 전후를 비교할 기준 재질의 프로젝트 파일 이름. |


![기본 재질 그래프](Tech%20Note/Unreal/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/15/settings.png)

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
| `Unreal MCP` | 외부 AI 도구가 에디터의 실제 도구·API를 호출하는 연결 방식. |
| `Epic Developer Assistant` | 에픽 문서를 바탕으로 언리얼 질문에 답하는 도구. |
| `Ask anything about UE` | 언리얼에 관한 질문을 입력하는 칸. |
| `Get step-by-step instructions` | 단계별 사용 방법을 물어볼 수 있다는 안내. |
| `Explain concepts & features` | 개념과 기능의 설명을 요청할 수 있다는 안내. |
| `Press F1 while hovering on anything` | 항목 위에 마우스를 놓고 F1을 눌러 관련 도움말을 여는 안내. |
| `FAQ / Terms of Service / Privacy Policy` | 자주 묻는 질문 / 이용 약관 / 개인정보 처리 안내. |
| `Sandbox` | 원본과 분리해 변경을 검토하는 작업 공간. |
| `enter / persist / leave` | 격리 공간 진입 / 선택한 변경 반영 / 격리 공간에서 나오기. |
| `Proposal / Rejected` | 반영을 검토하는 제안 / 반영하지 않은 제안. |
| `Material Instance` | 부모 재질을 사용하면서 일부 매개변수만 바꾼 재질 인스턴스. |
| `M_LabAIReviewBase` | 변경 전후를 비교할 기준 재질의 프로젝트 파일 이름. |


## 격리 공간에 제안하기

샌드박스는 원본과 구분한 편집 공간이다. 이번에는 두 재질에 변경을 제안해도 원본 파일 바이트가 그대로인지 먼저 확인했다. 구의 색이 달라졌다는 화면만으로 원본 보호를 확인할 수는 없기 때문이다.

작업 순서는 다음과 같다.

```text
회색 원본 2개 → 격리 공간의 제안 2개 → Approved 하나만 반영
           → 격리 공간에서 나옴 → Rejected는 원래 회색 → 둘 다 기준값 복구
```

핵심 파일은 `lab_propose_ai_sandbox.py`, `lab_persist_ai_approved.py`, `lab_leave_ai_sandbox.py`, `lab_reset_ai_workflow.py`다. 각 파일은 [전체 코드](%EC%97%90%EB%94%94%ED%84%B0%20%ED%99%94%EB%A9%B4%EA%B3%BC%20%EA%B8%B0%EB%B3%B8%20%EC%9A%A9%EC%96%B4.md#code-reading)에 주석 설명본으로 넣었다. 이름 순서가 아니라 위의 작업 순서로 읽는다.

## 반영과 나가기를 따로 검사했다

Approved를 반영한 다음 원본에서 해당 파일만 바뀌었는지 확인했다. 샌드박스를 나간 뒤에는 Approved 색은 남고, 반영하지 않은 Rejected 색은 원본으로 복구되는지 확인했다. 샌드박스를 나가는 것과 원본 변경을 전부 취소하는 것은 같은 동작이 아니다.

그다음 둘을 회색으로 초기화하고 에디터를 재실행했다. 격리 공간이 활성 상태로 남아 있지 않은지, 기준값이 저장됐는지, 실제 GPU 화면에 두 재질이 보이는지를 확인했다.

## AI Assistant에서는 실제 문맥 질문을 사용했다

Toon 재질 편집기에서 대상 노드를 선택하고 **F1** 문맥 질문으로 공식 Assistant를 사용했다. 질문이 현재 재질과 선택 노드를 대상으로 전달되는지, 응답이 끝나고 실제 문서 참고가 포함되는지 확인했다.

![공식 Assistant의 실제 질문 화면](Tech%20Note/Unreal/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/15/assistant-question.png)

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
| `Unreal MCP` | 외부 AI 도구가 에디터의 실제 도구·API를 호출하는 연결 방식. |
| `Epic Developer Assistant` | 에픽 문서를 바탕으로 언리얼 질문에 답하는 도구. |
| `Ask anything about UE` | 언리얼에 관한 질문을 입력하는 칸. |
| `Get step-by-step instructions` | 단계별 사용 방법을 물어볼 수 있다는 안내. |
| `Explain concepts & features` | 개념과 기능의 설명을 요청할 수 있다는 안내. |
| `Press F1 while hovering on anything` | 항목 위에 마우스를 놓고 F1을 눌러 관련 도움말을 여는 안내. |
| `FAQ / Terms of Service / Privacy Policy` | 자주 묻는 질문 / 이용 약관 / 개인정보 처리 안내. |
| `Sandbox` | 원본과 분리해 변경을 검토하는 작업 공간. |
| `enter / persist / leave` | 격리 공간 진입 / 선택한 변경 반영 / 격리 공간에서 나오기. |
| `Proposal / Rejected` | 반영을 검토하는 제안 / 반영하지 않은 제안. |
| `Material Instance` | 부모 재질을 사용하면서 일부 매개변수만 바꾼 재질 인스턴스. |
| `M_LabAIReviewBase` | 변경 전후를 비교할 기준 재질의 프로젝트 파일 이름. |


![공식 Assistant가 반환한 실제 응답](Tech%20Note/Unreal/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/15/assistant-response.png)

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
| `Unreal MCP` | 외부 AI 도구가 에디터의 실제 도구·API를 호출하는 연결 방식. |
| `Epic Developer Assistant` | 에픽 문서를 바탕으로 언리얼 질문에 답하는 도구. |
| `Ask anything about UE` | 언리얼에 관한 질문을 입력하는 칸. |
| `Get step-by-step instructions` | 단계별 사용 방법을 물어볼 수 있다는 안내. |
| `Explain concepts & features` | 개념과 기능의 설명을 요청할 수 있다는 안내. |
| `Press F1 while hovering on anything` | 항목 위에 마우스를 놓고 F1을 눌러 관련 도움말을 여는 안내. |
| `FAQ / Terms of Service / Privacy Policy` | 자주 묻는 질문 / 이용 약관 / 개인정보 처리 안내. |
| `Sandbox` | 원본과 분리해 변경을 검토하는 작업 공간. |
| `enter / persist / leave` | 격리 공간 진입 / 선택한 변경 반영 / 격리 공간에서 나오기. |
| `Proposal / Rejected` | 반영을 검토하는 제안 / 반영하지 않은 제안. |
| `Material Instance` | 부모 재질을 사용하면서 일부 매개변수만 바꾼 재질 인스턴스. |
| `M_LabAIReviewBase` | 변경 전후를 비교할 기준 재질의 프로젝트 파일 이름. |


이 응답이 재질을 직접 작성했다는 뜻은 아니다. 문서 안내는 Assistant가, 프로젝트의 실제 에셋 작성과 수정은 MCP가 수행했다. 두 기능의 역할을 섞어 소개하지 않았다.

## 따라 할 때 확인할 순서

제안 전 원본 색을 기록한다. 제안 후 원본 파일이 변하지 않았는지 확인한다. 하나를 반영한 뒤 그 파일만 바뀌었는지 본다. 격리 공간을 나온 뒤 미반영 제안이 복구됐는지 본다. 마지막으로 기준값 복구와 재시작까지 확인한다.

완성 프로젝트에서 제안·반영 스크립트를 무작정 다시 실행하기보다, [처음 읽기](%EC%97%90%EB%94%94%ED%84%B0%20%ED%99%94%EB%A9%B4%EA%B3%BC%20%EA%B8%B0%EB%B3%B8%20%EC%9A%A9%EC%96%B4.md)의 복사 프로젝트 방식으로 연습한다. 이번 기록은 ‘AI가 만든 변경은 언제나 안전하다’는 평가가 아니라, 이 두 재질의 변경 범위를 확인한 실험이다.

네이티브 격리 작업은 [FeatureLabSandbox.cpp](#source-source-mutablesample-featurelabsandbox-cpp)에 있다. 문서: [Unreal MCP in Unreal Editor](https://dev.epicgames.com/documentation/unreal-engine/unreal-mcp-in-unreal-editor).

<!-- korean-ui-explanations -->


<a id="code-index"></a>

## 이 장면을 만든 코드

아래는 제작과 검증에 사용한 전체 코드에 한국어 주석을 더한 설명본이다. `.py`는 언리얼 에디터에서 실행하는 제작·검사 코드, `.cpp`와 `.h`는 프로젝트에 넣어 빌드하는 코드다. 파일마다 첫 주석에 역할과 입력 조건을 적었다.


<a id="source-lab-lab-build-ai-workflow-py"></a>

### lab_build_ai_workflow.py

```python
# 파일 역할: 에셋·그래프·장면을 구성하는 제작 작업. 이미 있는 원본을 대상으로 재실행해도 되는지 가드 조건부터 읽는다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/AITools
#   /Game/FeatureLab/Maps/FL_15_AIWorkflow
#   /Game/FeatureLab/Lighting/M_LabRoomWhite

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
mel = unreal.MaterialEditingLibrary
assets = unreal.AssetToolsHelpers.get_asset_tools()
folder = "/Game/FeatureLab/AITools"
base = lib.load_asset(folder + "/M_LabAIReviewBase")
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not base 지정한 경로·이름·종류로 새 에셋을 만든다. 같은 이름의 원본이 있는지 검사하는 코드와 함께 읽는다.
if not base:
    # 지정한 경로·이름·종류로 새 에셋을 만든다. 같은 이름의 원본이 있는지 검사하는 코드와 함께 읽는다.
    base = assets.create_asset(
        "M_LabAIReviewBase", folder, unreal.Material, unreal.MaterialFactoryNew()
    )
    slab = mel.create_material_expression(
        base, unreal.MaterialExpressionSubstrateSlabBSDF, 0, 0
    )
    color = mel.create_material_expression(
        base, unreal.MaterialExpressionVectorParameter, -400, 0
    )
    # 여러 속성을 이름:값 사전으로 한 번에 설정한다. 각 항목이 개별 설정과 대응한다.
    color.set_editor_properties(
        {"parameter_name": "ReviewColor", "default_value": unreal.LinearColor(0.2, 0.2, 0.2, 1)}
    )
    pin = next(
        n
        for n in mel.get_material_expression_input_names(slab)
        if "".join(c.lower() for c in n if c.isalnum()) == "diffusealbedo"
    )
    assert mel.connect_material_expressions(color, "", slab, pin)
    assert mel.connect_material_property(slab, "", unreal.MaterialProperty.MP_FRONT_MATERIAL)
    mel.recompile_material(base)
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
    assert lib.save_loaded_asset(base, False)
materials = {}
for name in ["MI_LabAIApproved", "MI_LabAIRejected"]:
    instance = lib.load_asset(folder + "/" + name)
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not instance 지정한 경로·이름·종류로 새 에셋을 만든다. 같은 이름의 원본이 있는지 검사하는 코드와 함께 읽는다.
    if not instance:
        # 지정한 경로·이름·종류로 새 에셋을 만든다. 같은 이름의 원본이 있는지 검사하는 코드와 함께 읽는다.
        instance = assets.create_asset(
            name,
            folder,
            unreal.MaterialInstanceConstant,
            unreal.MaterialInstanceConstantFactoryNew(),
        )
        mel.set_material_instance_parent(instance, base)
    mel.set_material_instance_vector_parameter_value(
        instance, "ReviewColor", unreal.LinearColor(0.2, 0.2, 0.2, 1)
    )
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
    assert lib.save_loaded_asset(instance, False)
    materials[name] = instance.get_path_name()
# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
editor = unreal.get_editor_subsystem(unreal.LevelEditorSubsystem)
# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
actors = unreal.get_editor_subsystem(unreal.EditorActorSubsystem)
path = "/Game/FeatureLab/Maps/FL_15_AIWorkflow"
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 작업할 맵을 연다. 현재 맵과 다른 맵이므로 실행 중인 PIE를 먼저 끝내는지 확인한다.
assert editor.load_level(path) if lib.does_asset_exist(path) else editor.new_level(path)


# 함수 actor: 이름은 actor이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: cls, label, position 지정한 클래스의 실제 액터를 편집 장면에 만든다. 에셋 파일 생성과는 다르다.
def actor(cls, label, position):
    # 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
    found = [a for a in actors.get_all_level_actors() if a.get_actor_label() == label]
    # 지정한 클래스의 실제 액터를 편집 장면에 만든다. 에셋 파일 생성과는 다르다.
    item = found[0] if found else actors.spawn_actor_from_class(cls, unreal.Vector(*position))
    item.set_actor_label(label)
    item.tags = ["FeatureLab_Owned", "FeatureLab_15"]
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return item


# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 (label, name, x)의 값이 매번 바뀐다.
for label, name, x in [
    ("FL15_Approved", "MI_LabAIApproved", -170),
    ("FL15_Rejected", "MI_LabAIRejected", 170),
]:
    obj = actor(unreal.StaticMeshActor, label, (x, 0, 120))
    obj.static_mesh_component.set_static_mesh(lib.load_asset("/Engine/BasicShapes/Sphere"))
    obj.static_mesh_component.set_material(0, lib.load_asset(folder + "/" + name))
    obj.set_actor_scale3d(unreal.Vector(2.4, 2.4, 2.4))
floor = actor(unreal.StaticMeshActor, "FL15_Stage", (0, 0, -10))
floor.static_mesh_component.set_static_mesh(lib.load_asset("/Engine/BasicShapes/Cube"))
# 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
floor.static_mesh_component.set_material(
    0, lib.load_asset("/Game/FeatureLab/Lighting/M_LabRoomWhite")
)
floor.set_actor_scale3d(unreal.Vector(12, 8, 0.2))
light = actor(unreal.DirectionalLight, "FL15_KeyLight", (0, 0, 700))
light.get_component_by_class(unreal.DirectionalLightComponent).set_mobility(
    unreal.ComponentMobility.MOVABLE
)
light.get_component_by_class(unreal.DirectionalLightComponent).set_intensity(4.0)
# 액터 방향을 바꾼다. 위치 이동과 구분한다.
light.set_actor_rotation(unreal.Rotator(pitch=-35, yaw=-40, roll=0), False)
camera = actor(unreal.CineCameraActor, "FL15_ReviewCamera", (0, -1000, 320))
# 액터 방향을 바꾼다. 위치 이동과 구분한다.
camera.set_actor_rotation(
    unreal.MathLibrary.find_look_at_rotation(
        camera.get_actor_location(), unreal.Vector(0, 0, 120)
    ),
    False,
)
component = camera.get_cine_camera_component()
component.set_editor_property("current_focal_length", 30.0)
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
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert editor.save_current_level()
editor.pilot_level_actor(camera)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
RESULT = {
    "status": "baseline_assets_saved",
    "map": path,
    "materials": materials,
    "baseline_color": [0.2, 0.2, 0.2, 1.0],
    "sandbox": json.loads(
        unreal.FeatureLabRuntimeLibrary.manage_lab_sandbox("inspect", "", [])
    ),
}
(root / "Evidence/case15-baseline.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-leave-ai-sandbox-py"></a>

### lab_leave_ai_sandbox.py

```python
# 파일 역할: EpicFeatureLab의 lab_leave_ai_sandbox 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/AITools/

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, unreal
from pathlib import Path

api = unreal.FeatureLabRuntimeLibrary
result = json.loads(api.manage_lab_sandbox("leave", "", []))
assert result["success"] and not result["active"], result
colors = {}
for name in ["MI_LabAIApproved", "MI_LabAIRejected"]:
    instance = unreal.load_asset("/Game/FeatureLab/AITools/" + name)
    value = unreal.MaterialEditingLibrary.get_material_instance_vector_parameter_value(
        instance, "ReviewColor"
    )
    colors[name] = [value.r, value.g, value.b, value.a]
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "status": "sandbox_left_originals_reloaded",
    "sandbox": result,
    "material_colors": colors,
    "discarded_proposal_files": "Preserved in the sandbox; no explicit sandbox deletion.",
}
Path(unreal.Paths.project_dir(), "Evidence/case15-sandbox-leave.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-persist-ai-approved-py"></a>

### lab_persist_ai_approved.py

```python
# 파일 역할: EpicFeatureLab의 lab_persist_ai_approved 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/AITools/MI_LabAIApproved

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, unreal
from pathlib import Path

api = unreal.FeatureLabRuntimeLibrary
# JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
result = json.loads(
    api.manage_lab_sandbox("persist", "", ["/Game/FeatureLab/AITools/MI_LabAIApproved"])
)
assert result["success"], result
RESULT = {"status": "only_approved_material_persisted", "sandbox": result}
Path(unreal.Paths.project_dir(), "Evidence/case15-sandbox-selective-apply.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-propose-ai-sandbox-py"></a>

### lab_propose_ai_sandbox.py

```python
# 파일 역할: EpicFeatureLab의 lab_propose_ai_sandbox 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/AITools/

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, time, unreal
from pathlib import Path

root = Path(unreal.Paths.project_dir()).resolve()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
assert not unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
api = unreal.FeatureLabRuntimeLibrary
assert not json.loads(api.manage_lab_sandbox("inspect", "", []))["active"]
name = "FL15_Review_" + time.strftime("%Y%m%d_%H%M%S")
sandbox = json.loads(api.manage_lab_sandbox("create", name, []))
assert sandbox["success"] and sandbox["active"], sandbox
colors = {
    "MI_LabAIApproved": (0.8, 0.12, 0.02, 1.0),
    "MI_LabAIRejected": (0.02, 0.15, 0.8, 1.0),
}
actual = {}
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 (name, color)의 값이 매번 바뀐다. 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
for name, color in colors.items():
    instance = unreal.load_asset("/Game/FeatureLab/AITools/" + name)
    unreal.MaterialEditingLibrary.set_material_instance_vector_parameter_value(
        instance, "ReviewColor", unreal.LinearColor(*color)
    )
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
    assert unreal.EditorAssetLibrary.save_loaded_asset(instance, False)
    value = unreal.MaterialEditingLibrary.get_material_instance_vector_parameter_value(
        instance, "ReviewColor"
    )
    actual[name] = [value.r, value.g, value.b, value.a]
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 차이의 부호를 없애 크기만 비교한다. 오차 허용 범위 검사에 자주 사용한다.
    assert max(abs(a - b) for a, b in zip(actual[name], color)) < 1e-5
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
RESULT = {
    "status": "proposals_saved_inside_real_file_sandbox",
    "sandbox": json.loads(api.manage_lab_sandbox("inspect", "", [])),
    "material_colors": actual,
    "proposal_source": "Codex authored two material proposals and applied them through the actual Unreal MCP editor connection. Epic AI Assistant response is verified separately.",
}
(root / "Evidence/case15-sandbox-proposals.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-reset-ai-workflow-py"></a>

### lab_reset_ai_workflow.py

```python
# 파일 역할: 실험에서 바꾼 상태를 기준으로 복구하는 작업.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Materials/M_LabToonInk
#   /Game/FeatureLab/AITools/

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, unreal
from pathlib import Path

root = Path(unreal.Paths.project_dir()).resolve()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
assert not unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
sandbox = json.loads(unreal.FeatureLabRuntimeLibrary.manage_lab_sandbox("inspect", "", []))
assert not sandbox["active"]
# 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
unreal.get_editor_subsystem(unreal.AssetEditorSubsystem).close_all_editors_for_asset(
    unreal.load_asset("/Game/FeatureLab/Materials/M_LabToonInk")
)
checks = [{"name": "Reset occurs outside any sandbox", "passed": not sandbox["active"]}]
for name in ["MI_LabAIApproved", "MI_LabAIRejected"]:
    material = unreal.load_asset("/Game/FeatureLab/AITools/" + name)
    unreal.MaterialEditingLibrary.set_material_instance_vector_parameter_value(
        material, "ReviewColor", unreal.LinearColor(0.2, 0.2, 0.2, 1)
    )
    # 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
    saved = unreal.EditorAssetLibrary.save_loaded_asset(material, False)
    value = unreal.MaterialEditingLibrary.get_material_instance_vector_parameter_value(
        material, "ReviewColor"
    )
    # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    checks.append(
        {
            "name": name + " returns to repeatable neutral baseline",
            "passed": saved and max(abs(c - 0.2) for c in [value.r, value.g, value.b]) < 1e-5,
            "actual": [value.r, value.g, value.b, value.a],
        }
    )
# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
actors = unreal.get_editor_subsystem(unreal.EditorActorSubsystem)
# 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
light = next(
    (a for a in actors.get_all_level_actors() if a.get_actor_label() == "FL15_Softbox"), None
)
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not light 지정한 클래스의 실제 액터를 편집 장면에 만든다. 에셋 파일 생성과는 다르다.
if not light:
    # 지정한 클래스의 실제 액터를 편집 장면에 만든다. 에셋 파일 생성과는 다르다.
    light = actors.spawn_actor_from_class(unreal.RectLight, unreal.Vector(-400, -450, 450))
    light.set_actor_label("FL15_Softbox")
    light.tags = ["FeatureLab_Owned", "FeatureLab_15"]
# 액터 방향을 바꾼다. 위치 이동과 구분한다.
light.set_actor_rotation(
    unreal.MathLibrary.find_look_at_rotation(
        light.get_actor_location(), unreal.Vector(0, 0, 120)
    ),
    False,
)
component = light.get_component_by_class(unreal.RectLightComponent)
component.set_mobility(unreal.ComponentMobility.MOVABLE)
component.set_intensity_units(unreal.LightUnits.LUMENS)
component.set_intensity(6000)
component.set_editor_properties({"source_width": 400.0, "source_height": 300.0})
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
assert unreal.get_editor_subsystem(unreal.LevelEditorSubsystem).save_current_level()
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "status": "passed" if all(c["passed"] for c in checks) else "failed",
    "checks": checks,
    "sandbox_caches": "Preserved; no sandbox deletion performed.",
}
(root / "Evidence/case15-reset-validation.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-verify-ai-roundtrip-py"></a>

### lab_verify_ai_roundtrip.py

```python
# 파일 역할: 완성 결과를 실제 값과 비교하는 검증 작업. 생성 코드와 검사 코드를 구분한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/AITools/

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, unreal
from pathlib import Path

root = Path(unreal.Paths.project_dir()).resolve()
# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 편집 중인 월드를 얻는다. 게임 실행 월드와 다르므로 대상을 혼동하지 않는다.
world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world()
checks = []


# 함수 check: 이름은 check이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: name, value, actual 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
def check(name, value, actual=None):
    checks.append({"name": name, "passed": bool(value), "actual": actual})


check("Fresh process reopens saved AI workflow map", world.get_name() == "FL_15_AIWorkflow")
# JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
check(
    "No proposal sandbox remains active after restart",
    not json.loads(unreal.FeatureLabRuntimeLibrary.manage_lab_sandbox("inspect", "", []))[
        "active"
    ],
)
for name in ["MI_LabAIApproved", "MI_LabAIRejected"]:
    instance = unreal.load_asset("/Game/FeatureLab/AITools/" + name)
    value = unreal.MaterialEditingLibrary.get_material_instance_vector_parameter_value(
        instance, "ReviewColor"
    )
    # 차이의 부호를 없애 크기만 비교한다. 오차 허용 범위 검사에 자주 사용한다.
    check(
        name + " reset persists after restart",
        max(abs(v - 0.2) for v in [value.r, value.g, value.b]) < 1e-5,
    )
# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
actors = unreal.get_editor_subsystem(unreal.EditorActorSubsystem)
# 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
camera = next(
    a for a in actors.get_all_level_actors() if a.get_actor_label() == "FL15_ReviewCamera"
)
# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
unreal.get_editor_subsystem(unreal.LevelEditorSubsystem).pilot_level_actor(camera)
# JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
capture = json.loads(
    unreal.FeatureLabRuntimeLibrary.capture_lab_viewport("case15-reopened.png")
)
check("Reopened AI workbench produces actual GPU viewport", capture.get("saved"), capture)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "status": "passed" if all(c["passed"] for c in checks) else "failed",
    "checks": checks,
}
(root / "Evidence/case15-roundtrip-validation.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-source-mutablesample-featurelabsandbox-cpp"></a>

### FeatureLabSandbox.cpp

```cpp
// 파일 역할: 15번 원본과 격리된 편집 공간의 진입·선택 반영·복귀
// 클래스=작업 종류, 객체=실제 한 개, 포인터(* 또는 TObjectPtr)=다른 객체를 가리키는 참조.
// nullptr은 대상 없음, bool은 참/거짓, TArray는 순서 있는 목록, FString은 문자열이다.
// WITH_EDITOR 구간은 에디터 빌드에서만 사용하는 코드다. 원본과의 토큰 비교 결과는 code-validation.json에 기록한다.

#include "FeatureLabRuntime.h"
#include "Dom/JsonObject.h"
#include "Serialization/JsonSerializer.h"
#include "Misc/Paths.h"
#include "Misc/App.h"
#include "Misc/PackageName.h"
// 빌드 조건에 따라 포함할 코드를 고른다. 게임 실행 중의 if 조건과 달리 빌드할 때 구분한다.
#if WITH_EDITOR
#include "Editor.h"
#include "IFileSandboxCoreModule.h"
#include "ISandboxManager.h"
#include "ISandboxInstance.h"
#include "Types/Manager/NewSandboxArgs.h"
#include "Types/Sandbox/PersistArgs.h"
#include "Types/EBreakBehavior.h"
#include "Data/SandboxMetaData.h"
#endif

// 【함수 역할】편집기 전용 격리 작업을 제한된 동작과 경로로 수행한다. enter·persist·leave가 같은 뜻이 아니므로 선택 반영과 원본 복귀를 구분한다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
FString UFeatureLabRuntimeLibrary::ManageLabSandbox(const FString &Operation, const FString &Name,
                                                    const TArray<FString> &Assets)
{
    TSharedRef<FJsonObject> Json = MakeShared<FJsonObject>();
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    Json->SetStringField(TEXT("operation"), Operation);
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    Json->SetBoolField(TEXT("success"), false);
// 빌드 조건에 따라 포함할 코드를 고른다. 게임 실행 중의 if 조건과 달리 빌드할 때 구분한다.
#if WITH_EDITOR
    using namespace UE::FileSandboxCore;
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (FString(FApp::GetProjectName()) != TEXT("EpicFeatureLab") ||
        (GEditor && GEditor->PlayWorld))
        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
        Json->SetStringField(
            TEXT("error"), TEXT("Only the owned EpicFeatureLab editor outside PIE is permitted."));
    else
    {
        ISandboxManager &Manager = IFileSandboxCoreModule::Get().GetSandboxManager();
        ISandboxInstance *Current = Manager.GetActiveSandboxInstance();
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (Current && !Current->GetInitialMetaData().Name.StartsWith(TEXT("FL15_")))
            // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
            Json->SetStringField(TEXT("error"),
                                 TEXT("A sandbox outside this demonstration is already active."));
        else if (Operation == TEXT("create"))
        {
            bool SafeName = Name.StartsWith(TEXT("FL15_")) && Name.Len() < 80;
            // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
            for (TCHAR C : Name)
                SafeName &= FChar::IsAlnum(C) || C == TEXT('_');
            // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
            if (!SafeName || Current)
                // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
                Json->SetStringField(
                    TEXT("error"), TEXT("A unique FL15_ name and no active sandbox are required."));
            else
            {
                FNewSandboxArgs Args(
                    Name,
                    TEXT(
                        "Owned AI material proposals: selective approval and original-file preservation."));
                auto Created = Manager.CreateNewSandbox(Args);
                // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
                Json->SetBoolField(TEXT("success"), Created.HasValue());
            }
        }
        else if (Operation == TEXT("persist"))
        {
            TArray<FString> Files;
            bool Valid = Current && Assets.Num() > 0;
            // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
            for (const FString &Asset : Assets)
            {
                Valid &= Asset.StartsWith(TEXT("/Game/FeatureLab/AITools/")) &&
                         !Asset.Contains(TEXT("..")) && FPackageName::IsValidLongPackageName(Asset);
                Files.Add(FPaths::ConvertRelativePathToFull(FPackageName::LongPackageNameToFilename(
                    Asset, FPackageName::GetAssetPackageExtension())));
            }
            // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
            if (!Valid)
                // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
                Json->SetStringField(TEXT("error"),
                                     TEXT("Only named owned AITools assets can be persisted."));
            else
            {
                FPersistArgs Args;
                Args.Files = Files;
                Args.bShouldMakeWritableIfNoSourceControl = true;
                auto Result = Current->PersistSandbox(Args);
                // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
                Json->SetBoolField(TEXT("success"),
                                   Result.PersistStatus == EPersistStatus::Success);
                // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
                Json->SetNumberField(TEXT("requested_files"), Files.Num());
            }
        }
        else if (Operation == TEXT("leave"))
            // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
            Json->SetBoolField(TEXT("success"), Manager.LeaveSandbox().IsSuccess());
        else if (Operation == TEXT("inspect"))
            // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
            Json->SetBoolField(TEXT("success"), true);
        else
            // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
            Json->SetStringField(TEXT("error"), TEXT("Unknown operation."));
        Current = Manager.GetActiveSandboxInstance();
        // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
        Json->SetBoolField(TEXT("active"), Current != nullptr);
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (Current)
        {
            // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
            Json->SetStringField(TEXT("name"), Current->GetInitialMetaData().Name);
            // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
            Json->SetStringField(TEXT("root"), Current->GetRootDirectory());
            TArray<TSharedPtr<FJsonValue>> Changes;
            Current->EnumerateFileChanges([&](const FSandboxedFileChangeInfo &Info) {
                auto Entry = MakeShared<FJsonObject>();
                // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
                Entry->SetStringField(TEXT("path"), Info.Path);
                // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
                Entry->SetNumberField(TEXT("action"), static_cast<int32>(Info.Action));
                Changes.Add(MakeShared<FJsonValueObject>(Entry));
                // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
                return EBreakBehavior::Continue;
            });
            Json->SetArrayField(TEXT("changes"), Changes);
        }
    }
#else
    // 이름이 붙은 측정값을 JSON 결과에 넣는다. 화면용 게임 로직과 검증 기록을 구분한다.
    Json->SetStringField(TEXT("error"), TEXT("Sandbox authoring is an editor workflow."));
#endif
    FString Out;
    auto Writer = TJsonWriterFactory<>::Create(&Out);
    FJsonSerializer::Serialize(Json, Writer);
    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return Out;
}
```
