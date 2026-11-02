

에디터에서 잘 열리는 장면도 실행 파일로 만들면 다른 문제가 드러난다. 참조가 빠진 맵, 에디터 전용 자료, 일찍 로드되는 시퀀스, 생성되지 않은 지형 구역이 이번 통합 과정에서 실제로 문제를 일으켰다.

마지막 작업은 18개 실행 맵과 한국어 목록을 묶고, Windows 실행본에서 직접 항목을 눌러 다시 확인하는 일이었다. 제작 도구 자체를 게임 실행 파일에 모두 넣는 작업과는 다르다.

![통합 실험 목록](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/20/result.png)

**참고 — 사진과 작업에 나온 영어 이름**

| 영어 표시 | 한국어 뜻과 쓰임 |
|---|---|
| `MetaHuman Creator / Animator` | 인물 제작 / 음성 등에서 얼굴 연기 생성 |
| `Control Rig / Skeletal Editor / Direct Mesh Controls` | 리그 계산 / 뼈·스킨 편집 / 메시를 직접 집어 제어 |
| `Physics / Dynamics` | 두 가지 리그 물리 계산 방식 |
| `GASP / Motion Matching / Mover` | 공식 애니메이션 샘플 / 자세 검색 / 이동 처리 |
| `UAF / AnimGen` | 애니메이션 실행 연결 / 학습·생성형 애니메이션 |
| `Mutable` | 외형 조합을 바꿔 메시를 생성하는 기능 |
| `MetaHuman Crowds / Mass` | 인물 군중 조립 / 많은 개체의 실제 관리 |
| `Standalone / PC D3D SM6` | 단독 실행 세션 / PC Direct3D·SM6 그래픽 경로 |


## 목록과 실행 장면 연결하기

시작 맵은 `FL_Hub`로 정했다. 목록에는 1–19번을 유지하되 6번의 두 실험을 따로 표시해 **20개 항목**이 있다. 실행 맵은 18개다. 외부 Lore 안내와 19번 제약 안내는 가짜 실행 맵을 만들지 않고 설명을 표시한다.

F10으로 목록을 열 때는 게임을 잠시 멈추고 마우스 커서를 표시한다. 닫으면 이전 입력과 재생 상태로 돌아간다. 게임 HUD가 목록 제목에 겹치지 않도록 디버그 메시지 표시도 복구 가능한 방식으로 전환했다.

전체 메뉴 코드는 [FeatureLabNavigation.cpp](#source-source-mutablesample-featurelabnavigation-cpp)와 [헤더](#source-source-mutablesample-featurelabnavigation-h)에 있다. UMG는 언리얼의 화면 UI 시스템이다. 이 메뉴의 실제 위젯 구성도 해당 C++ 코드에 들어 있다.

## 굽기와 패키징은 무슨 뜻인가

**Build**는 C++ 코드를 실행 가능한 프로그램으로 만드는 단계다. **Cook**은 에셋을 대상 플랫폼에서 쓸 형태로 준비하는 단계다. **Stage**는 실행에 필요한 파일을 모으는 단계이고, **Package**는 배포할 실행본으로 묶는 과정이다.

원본 `.uasset`을 모두 탐색기로 옆에 복사한다고 완성 게임이 되지는 않는다. 어떤 맵과 자료를 굽기에 넣을지 정하고 실제 참조가 포함됐는지 확인해야 한다.

## 에디터에서 확인할 설정

1. **Edit → Project Settings**를 연다.
2. **Maps & Modes**에서 Editor Startup Map과 Game Default Map이 `FL_Hub`인지 확인한다.
3. **Packaging**의 맵 목록을 확인한다. 이번 실행 맵은 18개다.
4. Windows의 RHI와 셰이더 대상을 확인한다. 최종 실행본은 **DirectX 12·Shader Model 6**용이다.
5. 필요한 에셋과 맵을 저장한다. 실행 중이면 **■ Stop**을 누른다.
6. 아래 전체 스크립트의 경로와 결과 폴더를 읽은 뒤 패키징을 실행한다.

![통합 프로젝트를 확인하는 실제 에디터](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/20/settings.png)

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
| `Maps & Modes` | 기본 맵과 게임 모드 설정. |
| `Editor Startup Map` | 에디터를 켰을 때 처음 열 맵. |
| `Game Default Map` | 게임 실행 시 기본으로 열 맵. |
| `GameMode / Selected GameMode` | 게임 규칙 기본 클래스 / 선택한 게임 모드의 설정. |
| `Packaging` | 실행 파일과 실행용 콘텐츠를 묶는 설정. |
| `Build / Cook / Stage / Package` | 코드 빌드 / 실행용 에셋 변환 / 결과 파일 모으기 / 배포본으로 묶기. |
| `List of maps to include` | 실행용 변환에 포함할 맵 목록. |
| `Default RHI / DirectX 12` | 기본 그래픽 API / 이번 Windows 실행본의 그래픽 API. |
| `Shader Model 6 / SM6` | 이번 프로젝트가 대상으로 삼은 셰이더 기능 수준. |
| `Development` | 개발·검사용 빌드 구성. |
| `FL_Hub` | 실험 목록을 여는 시작 맵의 프로젝트 파일 이름. |
| `NetMode: Standalone` | 네트워크 상대 없이 한 실행 세션으로 돌리는 미리보기 상태. |
| `PC D3D SM6` | PC용 Direct3D·SM6 경로로 실행 중이라는 창 제목 표시. |


이번에는 [Package-FeatureLab.ps1](#source-setup-package-featurelab-ps1)로 BuildCookRun을 실행했다. 스크립트에 맵 목록, DX12·SM6 프로젝트 설정, 로그와 출력 폴더를 연결했다. 다른 PC에서 사용하려면 고정된 경로부터 수정해야 한다.

## 시퀀스를 너무 일찍 불러와 시작부터 충돌한 문제

처음에는 네이티브 클래스 기본 객체의 생성자에서 리뷰 시퀀스를 불러왔다. 클래스 기본 객체는 개별 게임 액터가 아니라 클래스의 기본 설정을 가진 객체다. 엔진 초기화 도중 필요한 Actor locator 등록이 끝나기 전에 시퀀스가 로드되면서 실행본이 시작할 때 충돌했다.

수정 뒤에는 게임 월드가 준비되고 16번 맵이 시작된 시점에 시퀀스를 불러왔다. 생성자에서 하는 설정과 게임 시작 후 할 작업을 나눠야 한다는 사례다. 시퀀스가 Cook에서 빠지지 않도록 별도의 명시적 에셋 참조도 유지했다.

## 패키지에서 다시 찾은 문제들

| 문제 | 수정 |
|---|---|
| 10번이 조작 없는 이전 PCG 맵으로 이동 | 실제 조작 맵 `FL_10_ProceduralEnvironment`로 연결 수정. |
| 동굴 지형이 실행본에서 없음 | Mesh Partition 컴파일 구역을 생성하고 다시 Cook. |
| 군중 R 초기화 때 충돌 | Mass 처리 중 파괴하지 않고 요청을 지연 처리. |
| 군중 에디터 전용 템플릿 오류 | 해당 소유 컬렉션의 Cook에서만 편집기 전용 대상을 제외. |
| SM5 재질 데이터 오류 | 프로젝트 대상을 SM6로 고정하고 전체 재Cook. |
| Mutable 의상 사이에 원본 몸 표시 | 원본 Pawn의 모든 시각용 메시를 숨기고 포즈 계산 유지. |
| 망토·AI 비교·영상 제목의 화면 잘림 | 카메라와 F10 버튼 위치 조정 후 재검사. |

## ‘파일이 생겼다’ 다음에 한 검사

IOStore 컨테이너 목록에서 정식 맵 18개와 리뷰 시퀀스가 실제로 포함됐는지 확인했다. IOStore는 패키지 콘텐츠를 담는 저장 형식이다. 최종 컨테이너에는 SM5 셰이더 자료가 없었다.

이어 실제 Windows 창에서 모든 목록 항목을 방문했다. 입력 후 화면 변화와 초기화를 확인했고, 수정 뒤에는 관련 항목을 다시 실행했다. 최종 검증 실행 로그의 오류 항목은 0건이었다. 이것은 확인한 실행 경로의 기록이지 모든 가능한 입력 조합에서 오류가 없다는 보증은 아니다.

최종 출력은 `Builds/WindowsFeatureLab/EpicFeatureLab.exe`, 폴더 전체는 약 5.30GiB다. 함께 있는 파일이 필요하므로 폴더 전체를 보관한다. 원본과 검증 자료의 Lore 복원점은 revision 16에 남겼다.

패키징 전 프로젝트 설정을 맞춘 코드와 실제 검사 자료는 [작업 파일 목록](#code-index)의 20번에 연결했다. 블로그용 주석 설명본은 원본 실행 코드를 바꾸지 않았는지 별도로 비교한 결과도 함께 제공한다.


## 편집 화면을 더 자세히 보기

![프로젝트 설정 창의 범주와 검색창 위치](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/20/settings-entry.png)

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
| `Maps & Modes` | 기본 맵과 게임 모드 설정. |
| `Editor Startup Map` | 에디터를 켰을 때 처음 열 맵. |
| `Game Default Map` | 게임 실행 시 기본으로 열 맵. |
| `GameMode / Selected GameMode` | 게임 규칙 기본 클래스 / 선택한 게임 모드의 설정. |
| `Packaging` | 실행 파일과 실행용 콘텐츠를 묶는 설정. |
| `Build / Cook / Stage / Package` | 코드 빌드 / 실행용 에셋 변환 / 결과 파일 모으기 / 배포본으로 묶기. |
| `List of maps to include` | 실행용 변환에 포함할 맵 목록. |
| `Default RHI / DirectX 12` | 기본 그래픽 API / 이번 Windows 실행본의 그래픽 API. |
| `Shader Model 6 / SM6` | 이번 프로젝트가 대상으로 삼은 셰이더 기능 수준. |
| `Development` | 개발·검사용 빌드 구성. |
| `FL_Hub` | 실험 목록을 여는 시작 맵의 프로젝트 파일 이름. |
| `NetMode: Standalone` | 네트워크 상대 없이 한 실행 세션으로 돌리는 미리보기 상태. |
| `PC D3D SM6` | PC용 Direct3D·SM6 경로로 실행 중이라는 창 제목 표시. |



<!-- korean-ui-explanations -->


<a id="code-index"></a>

## 이 장면을 만든 코드

아래는 제작과 검증에 사용한 전체 코드에 한국어 주석을 더한 설명본이다. `.py`는 언리얼 에디터에서 실행하는 제작·검사 코드, `.cpp`와 `.h`는 프로젝트에 넣어 빌드하는 코드다. 파일마다 첫 주석에 역할과 입력 조건을 적었다.


<a id="source-lab-feature-lab-migrate-conflicts-py"></a>

### feature_lab_migrate_conflicts.py

```python
# 파일 역할: EpicFeatureLab의 feature_lab_migrate_conflicts 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/
#   /Game/FeatureLabImports/GASP/

"""Move only conflicting GASP assets in the new laboratory; preserve all references."""

import json
import traceback
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

# ROOT: 프로젝트 루트 경로. 결과 파일을 어느 프로젝트에 쓰는지 정하는 기준이다.
ROOT = Path(unreal.Paths.project_dir()).resolve()
if ROOT.name != "EpicFeatureLab":
    raise RuntimeError("Namespace migration is restricted to the new EpicFeatureLab project")
output = ROOT / "Evidence" / "namespace-migration.json"
# 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다. JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
try:
    # JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
    entries = json.loads(
        (ROOT / "Scripts" / "Lab" / "migration_conflicts.json").read_text(encoding="utf-8-sig")
    )
    registry = unreal.AssetRegistryHelpers.get_asset_registry()
    registry.search_all_assets(True)
    renames, referencers, records = [], set(), []
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 entry의 값이 매번 바뀐다. 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
    for entry in entries:
        if entry["same"]:
            continue
        old = "/Game/" + str(Path(entry["relative"]).with_suffix("")).replace("\\", "/")
        new = "/Game/FeatureLabImports/GASP/" + old.removeprefix("/Game/")
        already_moved = unreal.EditorAssetLibrary.does_asset_exist(new)
        # 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
        asset = unreal.EditorAssetLibrary.load_asset(new if already_moved else old)
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not asset
        if not asset:
            raise RuntimeError("Source asset did not load: " + old)
        refs = unreal.EditorAssetLibrary.find_package_referencers_for_asset(
            new if already_moved else old, True
        )
        referencers.update(refs)
        parent, name = new.rsplit("/", 1)
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not already_moved 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
        if not already_moved:
            # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
            renames.append(
                unreal.AssetRenameData(asset=asset, new_package_path=parent, new_name=name)
            )
        records.append({"old": old, "new": new, "referencers_before": list(refs)})
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: renames and (not unreal.AssetToolsHelpers.get_asset_tools().rename_assets(renames))
    if renames and not unreal.AssetToolsHelpers.get_asset_tools().rename_assets(renames):
        raise RuntimeError("AssetTools namespace migration failed")
    saved = []
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 path의 값이 매번 바뀐다. 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    for path in sorted(referencers):
        if path.startswith("/Game/") and unreal.EditorAssetLibrary.does_asset_exist(path):
            # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not unreal.EditorAssetLibrary.save_asset(path, False) 지정한 에셋의 현재 내용을 파일로 저장한다.
            if not unreal.EditorAssetLibrary.save_asset(path, False):
                raise RuntimeError("Failed to persist updated reference package: " + path)
            # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
            saved.append(path)
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 item의 값이 매번 바뀐다. 지정한 에셋의 현재 내용을 파일로 저장한다.
    for item in records:
        if not unreal.EditorAssetLibrary.save_asset(item["new"], False):
            raise RuntimeError("Renamed asset did not save: " + item["new"])
        old_file = ROOT / "Content" / (item["old"].removeprefix("/Game/") + ".uasset")
        item["old_path_vacated"] = not old_file.exists()
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: old_file.exists()
        if old_file.exists():
            raise RuntimeError(
                "Old collision file remains; inspect it before merging: " + item["old"]
            )
    result = {
        "passed": True,
        "project": str(ROOT),
        "renamed": records,
        "saved_referencer_packages": saved,
    }
except Exception:
    result = {"passed": False, "error": traceback.format_exc(), "project": str(ROOT)}
output.write_text(json.dumps(result, indent=2, ensure_ascii=False), encoding="utf-8")
# Python의 사전·목록을 JSON 문자열로 바꾼다. 저장 전 직렬화 단계다.
print(
    "FEATURE_LAB_NAMESPACE_MIGRATION "
    + json.dumps({"passed": result["passed"], "report": str(output)})
)
```

<a id="source-lab-feature-lab-probe-py"></a>

### feature_lab_probe.py

```python
# 파일 역할: EpicFeatureLab의 feature_lab_probe 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/Blueprints/SandboxCharacter_Mover
#   /Game/Blueprints/ABP_GenericRetarget
#   /Game/Lobby/CO/CO_CustomizableCharacter
#   /Game/Lobby/Instances/COI_Cyborg
#   /Game/MetaHumans/MH_ToolTest
#   /Game/MetaHumans/Assembled/MH_MCP_Test/BP_MH_MCP_Test

import json
import traceback
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
if root.name != "EpicFeatureLab":
    raise RuntimeError("Probe is restricted to EpicFeatureLab")
result = {"project": str(root), "engine": unreal.SystemLibrary.get_engine_version()}
# 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다.
try:
    keywords = (
        "MetaHuman",
        "AnimGen",
        "UAF",
        "AnimNext",
        "PCG",
        "MeshPartition",
        "MeshTerrain",
        "Vegetation",
        "Toon",
        "DirectMesh",
        "Cloth",
        "Dataflow",
        "MovieGraph",
        "LiveLink",
        "ControlRigPhysics",
        "ControlRigDynamics",
        "Sandbox",
    )
    result["types"] = {
        key: [name for name in dir(unreal) if key.lower() in name.lower()] for key in keywords
    }
    registry = unreal.AssetRegistryHelpers.get_asset_registry()
    registry.search_all_assets(True)
    wanted = (
        "World",
        "ControlRigBlueprint",
        "Dataflow",
        "ChaosClothAsset",
        "PCGGraph",
        "MeshPartitionDefinition",
        "ProceduralVegetation",
        "AnimNextModule",
        "UAF",
        "AnimGen",
        "MetaHumanCharacter",
        "MetaHumanPerformance",
        "MovieGraph",
        "Toon",
        "LiveLinkPreset",
    )
    assets = []
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 mount의 값이 매번 바뀐다. 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    for mount in (
        "/Game",
        "/AnimGenExample",
        "/DirectMeshControl",
        "/ProceduralVegetationEditor",
        "/MetaHumanCrowd",
        "/MeshTerrainMode",
        "/ChaosClothAsset",
        "/PerformanceCaptureWorkflow",
    ):
        # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 asset의 값이 매번 바뀐다. 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
        for asset in registry.get_assets_by_path(mount, True):
            kind = str(asset.asset_class_path.asset_name)
            # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: any((word.lower() in kind.lower() for word in wanted)) 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
            if any(word.lower() in kind.lower() for word in wanted):
                assets.append({"path": str(asset.package_name), "class": kind})
    result["assets"] = assets
    required = {
        "gasp_mover": "/Game/Blueprints/SandboxCharacter_Mover",
        "gasp_retarget": "/Game/Blueprints/ABP_GenericRetarget",
        "mutable_object": "/Game/Lobby/CO/CO_CustomizableCharacter",
        "mutable_instance": "/Game/Lobby/Instances/COI_Cyborg",
        "metahuman_character": "/Game/MetaHumans/MH_ToolTest",
        "metahuman_assembled": "/Game/MetaHumans/Assembled/MH_MCP_Test/BP_MH_MCP_Test",
    }
    result["loads"] = {}
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 (key, path)의 값이 매번 바뀐다. 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
    for key, path in required.items():
        # 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
        obj = unreal.EditorAssetLibrary.load_asset(path)
        result["loads"][key] = {
            "requested": path,
            "loaded": bool(obj),
            "class": obj.get_class().get_name() if obj else None,
        }
    result["passed"] = all(
        result["loads"][key]["loaded"]
        for key in (
            "gasp_mover",
            "mutable_instance",
            "metahuman_character",
            "metahuman_assembled",
        )
    )
except Exception:
    result["passed"] = False
    result["error"] = traceback.format_exc()
(root / "Evidence" / "api-inventory.json").write_text(
    json.dumps(result, indent=2, ensure_ascii=False), encoding="utf-8"
)
# Python의 사전·목록을 JSON 문자열로 바꾼다. 저장 전 직렬화 단계다.
print(
    "FEATURE_LAB_PROBE "
    + json.dumps(
        {
            "passed": result["passed"],
            "loads": result.get("loads"),
            "assets": len(result.get("assets", [])),
        }
    )
)
```

<a id="source-lab-lab-api-dump-py"></a>

### lab_api_dump.py

```python
# 파일 역할: EpicFeatureLab의 lab_api_dump 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

import json
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
assert root.name == "EpicFeatureLab"
names = "PCGGraph PCGComponent PCGCreatePointsGridSettings PCGStaticMeshSpawnerSettings PCGMeshSelectorWeighted PCGMeshSelectorWeightedEntry PCGStaticMeshSpawnerEntry PCGTransformPointsSettings MetaHumanCharacterEditorSubsystem MetaHumanCollection MetaHumanCollectionEditorPipeline MetaHumanPerformance MetaHumanPerformanceFactoryNew ProceduralVegetation ProceduralVegetationGraph ProceduralVegetationGraphInstance MeshPartition MeshPartitionDefinition MeshPartitionEditorComponent MovieGraphConfig MovieGraphGlobalOutputSettingNode MovieGraphImageSequenceOutputNode_PNG MovieGraphDeferredRenderPassNode MoviePipelineQueueSubsystem DirectMeshControlComponent ToonProfile ToonProfileFactory MaterialExpressionSubstrateToonBSDF UAFComponent UAFAnimGraph UAFSystemFactory AnimGenController AnimGenAutoEncoder ControlRigBlueprint ToolMenus ToolMenuEntryScript".split()
base = set(dir(unreal.Object))
rows = {}
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 name의 값이 매번 바뀐다.
for name in names:
    cls = getattr(unreal, name, None)
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: cls is None
    if cls is None:
        rows[name] = {"available": False}
        continue
    rows[name] = {
        "available": True,
        "doc": cls.__doc__ or "",
        "methods": {
            key: getattr(cls, key).__doc__ or ""
            for key in dir(cls)
            if not key.startswith("_") and key not in base
        },
    }
rows["type_search"] = {
    key: [name for name in dir(unreal) if key.lower() in name.lower()]
    for key in (
        "RigUnit_Physics",
        "RigUnit_Dynamics",
        "RigPhysics",
        "AnimNextComponent",
        "SceneGraph",
        "Verse",
        "PCGMesh",
        "MovieGraph",
        "Vegetation",
    )
}
(root / "Evidence" / "builder-api.json").write_text(
    json.dumps(rows, indent=2), encoding="utf-8"
)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "saved": str(root / "Evidence" / "builder-api.json"),
    "available_classes": [name for name in names if rows[name]["available"]],
    "missing_classes": [name for name in names if not rows[name]["available"]],
}
```

<a id="source-lab-lab-bind-uaf-output-py"></a>

### lab_bind_uaf_output.py

```python
# 파일 역할: EpicFeatureLab의 lab_bind_uaf_output 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir()).resolve()
assert root.name == "EpicFeatureLab"
# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert world
actor = unreal.GameplayStatics.get_all_actors_of_class(world, unreal.FeatureLabUAFActor)[0]
mesh = actor.get_editor_property("UAFMesh")
before = mesh.get_editor_property("bEnableAnimation")
mesh.set_editor_property("bEnableAnimation", False)
actor.restart_playback()
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 bEnableAnimation이다.
RESULT = {
    "animation_evaluation_before": before,
    "animation_evaluation_after": mesh.get_editor_property("bEnableAnimation"),
    "input_applied": actor.get_editor_property("bLastInputApplied"),
}
```

<a id="source-lab-lab-build-native-scenes-py"></a>

### lab_build_native_scenes.py

```python
# 파일 역할: 에셋·그래프·장면을 구성하는 제작 작업. 이미 있는 원본을 대상으로 재실행해도 되는지 가드 조건부터 읽는다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Maps/FL_07_MutableMover
#   /Game/FeatureLab/Maps/FL_02_Performance
#   /Game/FeatureLab/Capture/AS_AudioSpeech_MH58_Face
#   /Game/FeatureLab/Capture/FeatureLabSpeech
#   /Game/Blueprints/GM_Sandbox
#   /Game/Lobby/Instances/COI_Cyborg
#   /Game/Lobby/Instances/COI_Weapon
#   /Game/Blueprints/RetargetedCharacters/ABP_GenericRetarget

import json
import traceback
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

# ROOT: 프로젝트 루트 경로. 결과 파일을 어느 프로젝트에 쓰는지 정하는 기준이다.
ROOT = Path(unreal.Paths.project_dir()).resolve()
assert ROOT.name == "EpicFeatureLab"
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
assert not unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# LIB: 에디터 에셋 작업에 사용할 API 묶음이다.
LIB = unreal.EditorAssetLibrary
# EDITOR: 레벨·뷰포트 편집 작업 관리자다. 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
EDITOR = unreal.get_editor_subsystem(unreal.LevelEditorSubsystem)
# ACTORS: 현재 편집 장면의 액터를 조회·배치하는 관리자다. 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
ACTORS = unreal.get_editor_subsystem(unreal.EditorActorSubsystem)
REPORT = {"status": "building", "visual_validation": "pending"}


# 함수 owned_actor: 이름은 owned_actor이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: cls, label, location 지정한 클래스의 실제 액터를 편집 장면에 만든다. 에셋 파일 생성과는 다르다.
def owned_actor(cls, label, location=unreal.Vector()):
    # 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
    matches = [
        actor for actor in ACTORS.get_all_level_actors() if actor.get_actor_label() == label
    ]
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: matches
    if matches:
        # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
        assert len(matches) == 1 and isinstance(matches[0], cls)
        # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
        return matches[0]
    # 지정한 클래스의 실제 액터를 편집 장면에 만든다. 에셋 파일 생성과는 다르다.
    actor = ACTORS.spawn_actor_from_class(cls, location)
    actor.set_actor_label(label)
    actor.tags = ["FeatureLab_Owned"]
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return actor


# 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다. 작업할 맵을 연다. 현재 맵과 다른 맵이므로 실행 중인 PIE를 먼저 끝내는지 확인한다.
try:
    assert EDITOR.load_level("/Game/FeatureLab/Maps/FL_02_Performance")
    # 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
    hero = next(
        actor
        for actor in ACTORS.get_all_level_actors()
        if actor.get_class().get_name().startswith("BP_MH_MCP_Test")
    )
    # 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
    camera = next(
        actor
        for actor in ACTORS.get_all_level_actors()
        if actor.get_actor_label() == "FL02_FaceInspectionCamera"
    )
    cine = camera.get_cine_camera_component()
    focus = cine.get_editor_property("focus_settings")
    focus.set_editor_property("focus_method", unreal.CameraFocusMethod.MANUAL)
    focus.set_editor_property("manual_focus_distance", 250.0)
    cine.set_editor_property("focus_settings", focus)
    cine.set_editor_property("current_aperture", 5.6)
    playback = owned_actor(unreal.FeatureLabFacePlayback, "FL02_PlaybackController")
    playback.set_editor_property("performer", hero)
    playback.set_editor_property("inspection_camera", camera)
    # 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 facial_animation이다.
    playback.set_editor_property(
        "facial_animation", LIB.load_asset("/Game/FeatureLab/Capture/AS_AudioSpeech_MH58_Face")
    )
    # 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 speech이다.
    playback.set_editor_property(
        "speech", LIB.load_asset("/Game/FeatureLab/Capture/FeatureLabSpeech")
    )
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert EDITOR.save_current_level()
    REPORT["face_controller"] = playback.get_path_name()
    # Release all old-world wrappers before a world change. Never duplicate a
    # loaded World through EditorAssetLibrary; create the fixture as a new map.
    # hero에 기준값 None을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
    hero = camera = cine = playback = focus = None
    import gc

    gc.collect()
    target = "/Game/FeatureLab/Maps/FL_07_MutableMover"
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not LIB.does_asset_exist(target) 작업할 맵을 연다. 현재 맵과 다른 맵이므로 실행 중인 PIE를 먼저 끝내는지 확인한다.
    if not LIB.does_asset_exist(target):
        assert EDITOR.new_level(target), "Could not create the owned Mutable/Mover fixture"
    else:
        # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 작업할 맵을 연다. 현재 맵과 다른 맵이므로 실행 중인 PIE를 먼저 끝내는지 확인한다.
        assert EDITOR.load_level(target)
    # world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 편집 중인 월드를 얻는다. 게임 실행 월드와 다르므로 대상을 혼동하지 않는다.
    world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world()
    # 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 default_game_mode이다.
    world.get_world_settings().set_editor_property(
        "default_game_mode", LIB.load_blueprint_class("/Game/Blueprints/GM_Sandbox")
    )
    floor = owned_actor(unreal.StaticMeshActor, "FL07_Floor", unreal.Vector(-800, -600, -50))
    floor.static_mesh_component.set_static_mesh(LIB.load_asset("/Engine/BasicShapes/Cube"))
    floor.set_actor_scale3d(unreal.Vector(35, 35, 1))
    floor.static_mesh_component.set_collision_profile_name("BlockAll")
    # 액터 방향을 바꾼다. 위치 이동과 구분한다.
    owned_actor(
        unreal.PlayerStart, "FL07_PlayerStart", unreal.Vector(-800, 0, 95)
    ).set_actor_rotation(unreal.Rotator(0, -90, 0), False)
    # 액터 방향을 바꾼다. 위치 이동과 구분한다.
    owned_actor(
        unreal.DirectionalLight, "FL07_Sun", unreal.Vector(0, 0, 1000)
    ).set_actor_rotation(unreal.Rotator(-40, -35, 0), False)
    owned_actor(unreal.SkyLight, "FL07_Sky", unreal.Vector(0, 0, 500))
    owned_actor(unreal.SkyAtmosphere, "FL07_Atmosphere")
    controller = owned_actor(unreal.FeatureLabMutableController, "FL07_MutableMoverController")
    # 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 character_template이다.
    controller.set_editor_property(
        "character_template", LIB.load_asset("/Game/Lobby/Instances/COI_Cyborg")
    )
    # 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 weapon_template이다.
    controller.set_editor_property(
        "weapon_template", LIB.load_asset("/Game/Lobby/Instances/COI_Weapon")
    )
    # 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다. 여기서 다루는 속성은 retarget_animation_class이다.
    controller.set_editor_property(
        "retarget_animation_class",
        LIB.load_blueprint_class("/Game/Blueprints/RetargetedCharacters/ABP_GenericRetarget"),
    )
    controller.body.set_editor_property("component_tags", ["RTG_UEFN_to_Metahuman_nrw"])
    publisher = owned_actor(unreal.FeatureLabLiveLinkSource, "FL16_DigitalAnimationPublisher")
    publisher.set_editor_property("subject_name", "FeatureLab_Body")
    publisher.set_editor_property("source_component_name", "SkeletalMesh")
    wall = owned_actor(
        unreal.StaticMeshActor, "FL07_CollisionTestWall", unreal.Vector(-800, -800, 100)
    )
    wall.static_mesh_component.set_static_mesh(LIB.load_asset("/Engine/BasicShapes/Cube"))
    wall.set_actor_scale3d(unreal.Vector(8, 0.5, 2))
    wall.static_mesh_component.set_collision_profile_name("BlockAll")
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 (label, location, scale)의 값이 매번 바뀐다. 액터 위치를 바꾼다. 별도 이동 시뮬레이션이 소유한 상태까지 자동 초기화되는지는 확인해야 한다.
    for label, location, scale in [
        ("FL07_CollisionTestWall", (-800, -700, 100), (15, 0.5, 2)),
        ("FL07_WallNorth", (-800, 700, 100), (15, 0.5, 2)),
        ("FL07_WallEast", (-100, 0, 100), (0.5, 15, 2)),
        ("FL07_WallWest", (-1500, 0, 100), (0.5, 15, 2)),
    ]:
        barrier = owned_actor(unreal.StaticMeshActor, label, unreal.Vector(*location))
        # 액터 위치를 바꾼다. 별도 이동 시뮬레이션이 소유한 상태까지 자동 초기화되는지는 확인해야 한다.
        barrier.set_actor_location(unreal.Vector(*location), False, True)
        # 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
        barrier.static_mesh_component.set_static_mesh(
            LIB.load_asset("/Engine/BasicShapes/Cube")
        )
        barrier.set_actor_scale3d(unreal.Vector(*scale))
        barrier.static_mesh_component.set_collision_profile_name("BlockAll")
        barrier.tags = ["FeatureLab_07", "FeatureLab_CollisionWall"]
    sign = owned_actor(
        unreal.TextRenderActor, "FL07_ControlInstructions", unreal.Vector(-1100, -100, 250)
    )
    text = sign.get_component_by_class(unreal.TextRenderComponent)
    text.set_text(
        "07 | Mutable + Motion Matching + Mover\n1 Outfit | 2 Body | 3 Color | 4 Weapon | R Reset\nWASD Move | Space Jump | Wall: collision check\n16 | Live Link subject: FeatureLab_Body"
    )
    text.set_world_size(24)
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert EDITOR.save_current_level()
    REPORT.update(
        status="authored",
        mutable_map=target,
        mutable_controller=controller.get_path_name(),
        publisher=publisher.get_path_name(),
        collision_wall=wall.get_path_name(),
        remaining=[
            "native face controls runtime test",
            "Mutable retarget/collision runtime test",
            "Live Link Hub receive/record verification",
            "visual inspection",
        ],
    )
except Exception:
    REPORT.update(status="failed", error=traceback.format_exc())
(ROOT / "Evidence" / "native-scenes-build.json").write_text(
    json.dumps(REPORT, indent=2), encoding="utf-8"
)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = REPORT
```

<a id="source-lab-lab-build-navigation-hub-py"></a>

### lab_build_navigation_hub.py

```python
# 파일 역할: 에셋·그래프·장면을 구성하는 제작 작업. 이미 있는 원본을 대상으로 재실행해도 되는지 가드 조건부터 읽는다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Maps/FL_Hub
#   /Game/FeatureLab/Cinematics/LS_LabDigitalReview
#   /Game/FeatureLab/Runtime/PAL_LabRuntime
#   /Game/FeatureLab/Runtime

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, unreal
from pathlib import Path

root = Path(unreal.Paths.project_dir()).resolve()
assert root.name == "EpicFeatureLab"
# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
editor = unreal.get_editor_subsystem(unreal.LevelEditorSubsystem)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
assert not unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert not unreal.TakeRecorderBlueprintLibrary.is_recording()
path = "/Game/FeatureLab/Maps/FL_Hub"
lib = unreal.EditorAssetLibrary
assets = unreal.AssetToolsHelpers.get_asset_tools()
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: lib.does_asset_exist(path) 작업할 맵을 연다. 현재 맵과 다른 맵이므로 실행 중인 PIE를 먼저 끝내는지 확인한다.
if lib.does_asset_exist(path):
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 작업할 맵을 연다. 현재 맵과 다른 맵이므로 실행 중인 PIE를 먼저 끝내는지 확인한다.
    assert editor.load_level(path)
else:
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert editor.new_level(path)
# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 편집 중인 월드를 얻는다. 게임 실행 월드와 다르므로 대상을 혼동하지 않는다.
world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world()
world.get_world_settings().set_editor_property("default_game_mode", unreal.GameModeBase)
# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
actors = unreal.get_editor_subsystem(unreal.EditorActorSubsystem)
# 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
nav = next(
    (a for a in actors.get_all_level_actors() if isinstance(a, unreal.FeatureLabNavigator)),
    None,
)
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not nav 지정한 클래스의 실제 액터를 편집 장면에 만든다. 에셋 파일 생성과는 다르다.
if not nav:
    # 지정한 클래스의 실제 액터를 편집 장면에 만든다. 에셋 파일 생성과는 다르다.
    nav = actors.spawn_actor_from_class(unreal.FeatureLabNavigator, unreal.Vector(0, 0, 0))
    nav.set_actor_label("FL_Navigator")
    nav.tags = ["FeatureLab_Owned", "FeatureLab_Navigation"]
review = unreal.load_asset("/Game/FeatureLab/Cinematics/LS_LabDigitalReview")
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert review
nav.set_editor_property("review_sequence", review)
# 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
start = next(
    (a for a in actors.get_all_level_actors() if isinstance(a, unreal.PlayerStart)), None
)
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not start 지정한 클래스의 실제 액터를 편집 장면에 만든다. 에셋 파일 생성과는 다르다.
if not start:
    # 지정한 클래스의 실제 액터를 편집 장면에 만든다. 에셋 파일 생성과는 다르다.
    start = actors.spawn_actor_from_class(unreal.PlayerStart, unreal.Vector(0, 0, 300))
    start.set_actor_label("FL_HubStart")
label = unreal.load_asset("/Game/FeatureLab/Runtime/PAL_LabRuntime")
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not label 지정한 경로·이름·종류로 새 에셋을 만든다. 같은 이름의 원본이 있는지 검사하는 코드와 함께 읽는다.
if not label:
    # 지정한 경로·이름·종류로 새 에셋을 만든다. 같은 이름의 원본이 있는지 검사하는 코드와 함께 읽는다.
    label = assets.create_asset(
        "PAL_LabRuntime", "/Game/FeatureLab/Runtime", unreal.PrimaryAssetLabel, None
    )
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert label
rules = label.get_editor_property("rules")
rules.set_editor_property("cook_rule", unreal.PrimaryAssetCookRule.ALWAYS_COOK)
label.set_editor_property("rules", rules)
label.set_editor_property("explicit_assets", [review])
label.set_editor_property("is_runtime_label", True)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
assert lib.save_loaded_asset(label, False)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert editor.save_all_dirty_levels()
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "status": "navigation_hub_saved",
    "map": path,
    "navigator": nav.get_path_name(),
    "review_sequence": review.get_path_name(),
    "runtime_cook_label": label.get_path_name(),
    "purpose": "One entry point for the original numbered experiments; editor and external workflows keep explicit scope labels.",
}
(root / "Evidence/integration-navigation-authoring.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-cycle-terrain-view-py"></a>

### lab_cycle_terrain_view.py

```python
# 파일 역할: EpicFeatureLab의 lab_cycle_terrain_view 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, unreal

# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert world
walker = next(
    a for a in unreal.ObjectIterator(unreal.FeatureLabTerrainWalker) if a.get_world() == world
)
walker.cycle_view()
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
RESULT = json.loads(walker.capture_movement())
```

<a id="source-lab-lab-dump-authoring-api-py"></a>

### lab_dump_authoring_api.py

```python
# 파일 역할: EpicFeatureLab의 lab_dump_authoring_api 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
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
classes = [
    "SkeletonModifier",
    "SkinWeightModifier",
    "ControlRigBlueprintFactory",
    "ControlRigBlueprint",
    "RigVMController",
    "GeometryScript_AssetUtils",
    "GeometryScript_Transformations",
    "GeometryScript_NewAssetUtils",
    "MetaHumanCharacterBodyConstraint",
    "MetaHumanCharacterFitToVerticesParams",
    "BodyConformSolveSettings",
]
base = set(dir(unreal.Object))
report = {}
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 name의 값이 매번 바뀐다.
for name in classes:
    cls = getattr(unreal, name, None)
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: cls is None
    if cls is None:
        report[name] = {"available": False}
        continue
    methods = {}
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 member의 값이 매번 바뀐다.
    for member in dir(cls):
        if member.startswith("_") or member in base:
            continue
        value = getattr(cls, member)
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: callable(value)
        if callable(value):
            methods[member] = value.__doc__ or ""
    report[name] = {"available": True, "doc": cls.__doc__ or "", "methods": methods}
(ROOT / "Evidence" / "authoring-api.json").write_text(
    json.dumps(report, indent=2), encoding="utf-8"
)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    name: {"available": entry["available"], "methods": list(entry.get("methods", {}))}
    for name, entry in report.items()
}
```

<a id="source-lab-lab-exclude-capture-workflows-py"></a>

### lab_exclude_capture_workflows.py

```python
# 파일 역할: EpicFeatureLab의 lab_exclude_capture_workflows 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Scan
#   /Game/FeatureLab/Maps/FL_18_Scan
#   /Game/FeatureLab/Maps/FL_02_Performance
#   /Game/FeatureLab/Capture/AS_AudioSpeech_MH58_Face

"""Archive owned RealityScan outputs, then remove their active Unreal packages."""

import hashlib
import json
import shutil
import traceback
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

# ROOT: 프로젝트 루트 경로. 결과 파일을 어느 프로젝트에 쓰는지 정하는 기준이다.
ROOT = Path(unreal.Paths.project_dir()).resolve()
assert ROOT == Path(r"C:\Users\20ori\UnrealProjects\EpicFeatureLab").resolve()
policy_path = ROOT / "Documentation" / "completion-actions.json"
if policy_path.is_file() and json.loads(policy_path.read_text(encoding="utf-8-sig")).get(
    "deletion_hold", False
):
    raise RuntimeError(
        "User requested preservation. Do not delete or move these workflows; remind the user after the main project is complete."
    )
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
assert not unreal.get_editor_subsystem(
    unreal.UnrealEditorSubsystem
).get_game_world(), "Stop PIE before changing assets"
ARCHIVE = ROOT / "Archive" / "ScopeExclusions-20261101" / "RealityScan"
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert ARCHIVE.resolve().is_relative_to(ROOT)
# LIB: 에디터 에셋 작업에 사용할 API 묶음이다.
LIB = unreal.EditorAssetLibrary
SCAN = "/Game/FeatureLab/Scan"
MAP = "/Game/FeatureLab/Maps/FL_18_Scan"
OUT = ROOT / "Evidence" / "scope-exclusions-20261101.json"
# REPORT: 이번 작업의 입력·측정·성공 여부를 모을 기록용 사전이다. 게임의 실행 상태 자체와는 다르다.
REPORT = {
    "status": "checking",
    "excluded_features": ["RealityScan", "Markerless Motion Capture"],
    "installed_software_removed": False,
    "archive": str(ARCHIVE),
    "backups": [],
}
manifest = ARCHIVE / "archive-manifest.json"
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: manifest.is_file() JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
if manifest.is_file():
    REPORT["backups"] = json.loads(manifest.read_text(encoding="utf-8")).get("backups", [])


# 함수 sha: 이름은 sha이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: path 바이트 내용의 지문을 계산한다. 파일 이름이 같다는 검사보다 내용 비교에 가깝다.
def sha(path):
    # 바이트 내용의 지문을 계산한다. 파일 이름이 같다는 검사보다 내용 비교에 가깝다.
    value = hashlib.sha256()
    with path.open("rb") as stream:
        for block in iter(lambda: stream.read(1024 * 1024), b""):
            value.update(block)
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return value.hexdigest()


# 함수 owned: 이름은 owned이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: path
def owned(path):
    resolved = path.resolve()
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert resolved.is_relative_to(ROOT), str(path)
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return resolved


# 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다.
try:
    registry = unreal.AssetRegistryHelpers.get_asset_registry()
    packages = {str(asset.package_name) for asset in registry.get_assets_by_path(SCAN, True)}
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: LIB.does_asset_exist(MAP)
    if LIB.does_asset_exist(MAP):
        packages.add(MAP)
    options = unreal.AssetRegistryDependencyOptions(
        include_hard_package_references=True, include_soft_package_references=True
    )
    refs = {
        package: [str(ref) for ref in registry.get_referencers(package, options)]
        for package in packages
    }
    external = {
        package: [ref for ref in values if ref not in packages]
        for package, values in refs.items()
    }
    external = {package: values for package, values in external.items() if values}
    REPORT["referencers"] = refs
    assert not external, "Active assets still reference scan outputs: " + str(external)
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 package의 값이 매번 바뀐다. 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
    for package in sorted(packages):
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: package != MAP 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
        if package != MAP:
            # 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
            asset = LIB.load_asset(package)
            # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
            assert asset and LIB.save_loaded_asset(asset, False), package
    source_folder = owned(ROOT / "Content" / "FeatureLab" / "Scan")
    sources = list(source_folder.rglob("*")) if source_folder.is_dir() else []
    sources += list((ROOT / "Content" / "FeatureLab" / "Maps").glob("FL_18_Scan.*"))
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 source의 값이 매번 바뀐다.
    for source in sources:
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not source.is_file()
        if not source.is_file():
            continue
        source = owned(source)
        target = owned(ARCHIVE / source.relative_to(ROOT))
        target.parent.mkdir(parents=True, exist_ok=True)
        digest = sha(source)
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: target.exists()
        if target.exists():
            # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
            assert (
                sha(target) == digest
            ), "Preserved backup differs; refusing to overwrite: " + str(target)
        else:
            shutil.copy2(source, target)
        assert sha(target) == digest, "Backup verification failed"
        record = {
            "original": str(source.relative_to(ROOT)),
            "archive": str(target.relative_to(ROOT)),
            "sha256": digest,
            "bytes": source.stat().st_size,
        }
        REPORT["backups"] = [
            r for r in REPORT["backups"] if r["original"] != record["original"]
        ] + [record]
    # Write a recoverable manifest before removing any active packages.
    ARCHIVE.mkdir(parents=True, exist_ok=True)
    (ARCHIVE / "archive-manifest.json").write_text(
        json.dumps(REPORT, indent=2, ensure_ascii=False), encoding="utf-8"
    )
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: LIB.does_asset_exist(MAP)
    if LIB.does_asset_exist(MAP):
        assert LIB.delete_asset(MAP), "Scan map removal failed"
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: LIB.does_directory_exist(SCAN)
    if LIB.does_directory_exist(SCAN):
        assert LIB.delete_directory(SCAN), "Scan content removal failed"
    # World deletion can unregister the asset yet leave the .umap on disk.
    # Remove only that exact, hash-verified backed-up map file if it remains.
    map_file = owned(ROOT / "Content" / "FeatureLab" / "Maps" / "FL_18_Scan.umap")
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: map_file.is_file()
    if map_file.is_file():
        map_backup = owned(ARCHIVE / map_file.relative_to(ROOT))
        # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
        assert map_backup.is_file() and sha(map_backup) == sha(
            map_file
        ), "Map must match the preserved backup"
        map_file.unlink()
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert not map_file.exists()
    # 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
    assert not source_folder.exists() or not any(
        p.is_file() for p in source_folder.rglob("*")
    ), "Scan content files remain"
    moved = []
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 relative의 값이 매번 바뀐다.
    for relative in [
        Path("ExternalWorkflows/RealityScan"),
        Path("Scripts/Lab/lab_import_scan.py"),
        Path("Scripts/Lab/lab_scan_collision.py"),
    ]:
        source = owned(ROOT / relative)
        target = owned(ARCHIVE / relative)
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: source.exists() 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
        if source.exists():
            assert not target.exists(), "Archive target already exists: " + str(target)
            target.parent.mkdir(parents=True, exist_ok=True)
            shutil.move(str(source), str(target))
            # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
            moved.append(str(relative))
    REPORT.update(
        status="passed",
        active_scan_map_removed=True,
        active_scan_packages_removed=True,
        archived_workflows=moved,
        remaining_face_map=LIB.does_asset_exist("/Game/FeatureLab/Maps/FL_02_Performance"),
        remaining_face_animation=LIB.does_asset_exist(
            "/Game/FeatureLab/Capture/AS_AudioSpeech_MH58_Face"
        ),
    )
except Exception:
    REPORT.update(status="failed", error=traceback.format_exc())
OUT.write_text(json.dumps(REPORT, indent=2, ensure_ascii=False), encoding="utf-8")
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = REPORT
```

<a id="source-lab-lab-focus-puppet-face-py"></a>

### lab_focus_puppet_face.py

```python
# 파일 역할: EpicFeatureLab의 lab_focus_puppet_face 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal
from pathlib import Path

assert Path(unreal.Paths.project_dir()).resolve().name == "EpicFeatureLab"
location = unreal.Vector(0, 160, 165)
rotation = unreal.MathLibrary.find_look_at_rotation(location, unreal.Vector(0, 0, 165))
unreal.EditorLevelLibrary.set_level_viewport_camera_info(location, rotation)
unreal.LevelSequenceEditorBlueprintLibrary.set_current_time(0)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "camera_rotation": rotation.export_text(),
    "frame": unreal.LevelSequenceEditorBlueprintLibrary.get_current_time(),
}
```

<a id="source-lab-lab-focus-vegetation-input-py"></a>

### lab_focus_vegetation_input.py

```python
# 파일 역할: EpicFeatureLab의 lab_focus_vegetation_input 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert world
pc = unreal.GameplayStatics.get_player_controller(world, 0)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert pc
unreal.WidgetBlueprintLibrary.set_input_mode_game_only(pc, True)
RESULT = {"game_input_focused": True}
```

<a id="source-lab-lab-get-capture-stage-py"></a>

### lab_get_capture_stage.py

```python
# 파일 역할: EpicFeatureLab의 lab_get_capture_stage 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

# 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
stage = next(
    a
    for a in unreal.get_editor_subsystem(unreal.EditorActorSubsystem).get_all_level_actors()
    if a.get_actor_label() == "FL16_VirtualCaptureStage"
)
RESULT = {"stage": stage.get_path_name(), "class": stage.get_class().get_path_name()}
```

<a id="source-lab-lab-inspect-audio-mood-py"></a>

### lab_inspect_audio_mood.py

```python
# 파일 역할: 현재 에셋·객체·실행 상태를 읽어 기록하는 관찰 작업.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Capture/MHP_AudioSpeech

from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

assert Path(unreal.Paths.project_dir()).resolve().name == "EpicFeatureLab"
performance = unreal.load_asset("/Game/FeatureLab/Capture/MHP_AudioSpeech")
settings = performance.get_editor_property("AudioDrivenAnimationSolveOverrides")
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 bRealtimeAudio이다.
RESULT = {
    "settings_type": type(settings).__name__,
    "settings": settings.export_text(),
    "realtime": performance.get_editor_property("bRealtimeAudio"),
    "members": [n for n in dir(settings) if not n.startswith("_")],
}
```

<a id="source-lab-lab-inspect-character-skin-settings-py"></a>

### lab_inspect_character_skin_settings.py

```python
# 파일 역할: 현재 에셋·객체·실행 상태를 읽어 기록하는 관찰 작업.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Characters/

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

rows = []
for name in ["MHC_LabFictional", "MHC_LabDigitalBody"]:
    character = unreal.load_asset("/Game/FeatureLab/Characters/" + name)
    skin = character.get_editor_property("skin_settings")
    rows.append({"character": name, "skin_settings": skin.export_text()})
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = rows
```

<a id="source-lab-lab-inspect-cloth-nodes-py"></a>

### lab_inspect_cloth_nodes.py

```python
# 파일 역할: 현재 에셋·객체·실행 상태를 읽어 기록하는 관찰 작업.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Cloth/CA_LabCape

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

# 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 dataflow_asset이다.
graph = (
    unreal.load_asset("/Game/FeatureLab/Cloth/CA_LabCape")
    .get_editor_property("dataflow_instance")
    .get_editor_property("dataflow_asset")
)
assert graph, "Cloth graph must survive asset save and reload"
# 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 nodes이다.
try:
    nodes = list(graph.get_editor_property("nodes"))
except Exception:
    nodes = [
        o
        for o in unreal.ObjectIterator()
        if o
        and unreal.Object.get_class(o)
        and unreal.Object.get_class(o).get_name() == "DataflowEdNode"
        and unreal.Object.get_path_name(o).startswith(
            (graph.get_path_name() + ":", graph.get_path_name() + ".")
        )
    ]
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "graph": graph.get_path_name(),
    "nodes": [{"refPath": n.get_path_name()} for n in nodes],
}
```

<a id="source-lab-lab-inspect-cloth-visibility-py"></a>

### lab_inspect_cloth_visibility.py

```python
# 파일 역할: 현재 에셋·객체·실행 상태를 읽어 기록하는 관찰 작업.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
RESULT = {"components": []}
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 actor의 값이 매번 바뀐다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 cape이다.
for actor in unreal.GameplayStatics.get_all_actors_of_class(world, unreal.FeatureLabClothActor):
    cloth = actor.get_editor_property("cape")
    row = {"actor": actor.get_name(), "flags": {}, "materials": []}
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 name의 값이 매번 바뀐다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다.
    for name in [
        "visible",
        "hidden_in_game",
        "render_in_main_pass",
        "use_attached_parent_as_pose_component",
        "bind_to_leader_component",
        "enable_simulation",
        "bounds_scale",
        "forced_lod_model",
    ]:
        # 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다.
        try:
            row["flags"][name] = cloth.get_editor_property(name)
        except Exception as error:
            row["flags"][name] = str(error)
    row["is_visible"] = cloth.is_visible()
    bounds = unreal.SystemLibrary.get_component_bounds(cloth)
    row["bounds"] = [str(x) for x in bounds]
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 i의 값이 매번 바뀐다. 반복에 쓸 정수 순서를 만든다. 끝 값은 포함되지 않는다.
    for i in range(cloth.get_num_materials()):
        material = cloth.get_material(i)
        row["materials"].append(
            {
                "material": material.get_path_name() if material else None,
                "two_sided": (
                    material.get_editor_property("two_sided")
                    if isinstance(material, unreal.Material)
                    else None
                ),
            }
        )
    RESULT["components"].append(row)
```

<a id="source-lab-lab-inspect-editable-skin-parameters-py"></a>

### lab_inspect_editable_skin_parameters.py

```python
# 파일 역할: 현재 에셋·객체·실행 상태를 읽어 기록하는 관찰 작업.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

rows = []
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 material의 값이 매번 바뀐다. 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
for material in unreal.ObjectIterator(unreal.MaterialInstanceDynamic):
    if "MID_MI_Skin_Head_UI_LOD0_Editable" not in material.get_name():
        continue
    textures = []
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 name의 값이 매번 바뀐다. 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    for name in unreal.MaterialEditingLibrary.get_texture_parameter_names(material):
        texture = material.get_texture_parameter_value(name)
        # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: texture 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
        if texture:
            textures.append({"parameter": str(name), "texture": texture.get_path_name()})
    rows.append({"material": material.get_path_name(), "textures": textures})
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = rows
```

<a id="source-lab-lab-inspect-face-orientation-py"></a>

### lab_inspect_face_orientation.py

```python
# 파일 역할: 현재 에셋·객체·실행 상태를 읽어 기록하는 관찰 작업.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert world
controller = unreal.GameplayStatics.get_all_actors_of_class(
    world, unreal.FeatureLabFacePlayback
)[0]
face = controller.get_face()
# 반복에 쓸 정수 순서를 만든다. 끝 값은 포함되지 않는다.
names = [str(face.get_bone_name(i)) for i in range(face.get_num_bones())]
selected = [name for name in names if any(token in name.lower() for token in ["nose", "ear"])][
    :35
]


# 함수 vec: 이름은 vec이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다. 입력 이름: v
def vec(v):
    # 이 함수의 결과를 돌려주고 함수 실행을 끝낸다.
    return [v.x, v.y, v.z]


# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "actor_rotation": str(controller.performer.get_actor_rotation()),
    "face_rotation": str(face.get_world_rotation()),
    "landmarks": {name: vec(face.get_socket_location(name)) for name in selected},
    "camera": vec(controller.inspection_camera.get_actor_location()),
}
```

<a id="source-lab-lab-inspect-navigation-py"></a>

### lab_inspect_navigation.py

```python
# 파일 역할: 현재 에셋·객체·실행 상태를 읽어 기록하는 관찰 작업.
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
actors = unreal.GameplayStatics.get_all_actors_of_class(world, unreal.FeatureLabNavigator)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
RESULT = {
    "navigators": [json.loads(a.capture_navigation()) for a in actors],
    "game_paused": unreal.GameplayStatics.is_game_paused(world),
}
Path(unreal.Paths.project_dir(), "Evidence/integration-navigation-state.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
```

<a id="source-lab-lab-inspect-pcg-props-py"></a>

### lab_inspect_pcg_props.py

```python
# 파일 역할: 현재 에셋·객체·실행 상태를 읽어 기록하는 관찰 작업.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/Showcase/Global/DemoRoom/Meshes/

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

RESULT = {"meshes": []}
for name in ["SM_Tile_10MPillar_B", "SM_Pipe", "SM_Splitter_Wall"]:
    path = "/Game/Showcase/Global/DemoRoom/Meshes/" + name
    # 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
    mesh = unreal.load_asset(path)
    box = mesh.get_bounding_box()
    RESULT["meshes"].append(
        {
            "asset": path,
            "min": list(box.min.to_tuple()),
            "max": list(box.max.to_tuple()),
            "materials": [
                (
                    s.get_editor_property("material_interface").get_path_name()
                    if s.get_editor_property("material_interface")
                    else None
                )
                for s in mesh.get_editor_property("static_materials")
            ],
        }
    )
```

<a id="source-lab-lab-inspect-saved-movie-jobs-py"></a>

### lab_inspect_saved_movie_jobs.py

```python
# 파일 역할: 현재 에셋·객체·실행 상태를 읽어 기록하는 관찰 작업.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Cinematics/MRQ_LabDigitalPerformance

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

q = unreal.load_asset("/Game/FeatureLab/Cinematics/MRQ_LabDigitalPerformance")
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "jobs": [
        {
            "name": str(j.job_name),
            "sequence": j.sequence.export_text(),
            "graph": j.get_graph_preset().get_path_name(),
        }
        for j in q.get_jobs()
    ]
}
```

<a id="source-lab-lab-inventory-feature-examples-py"></a>

### lab_inventory_feature_examples.py

```python
# 파일 역할: EpicFeatureLab의 lab_inventory_feature_examples 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
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
registry = unreal.AssetRegistryHelpers.get_asset_registry()
prefixes = (
    "/AnimGenExample/",
    "/UAF",
    "/MeshTerrain",
    "/ProceduralVegetation",
    "/ChaosCloth",
    "/Dataflow",
    "/DirectMesh",
    "/MetaHumanCrowd",
    "/MovieRenderPipeline/",
)
rows = []
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 asset의 값이 매번 바뀐다.
for asset in registry.get_all_assets(True):
    path = str(asset.package_name)
    kind = str(asset.asset_class_path.asset_name)
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: path.startswith(prefixes) and (kind == 'World' or any((s in kind for s in ['Graph', 'Dataflow', 'ClothAsset', 'MetaHumanCollection', 'PartitionDefinition', 'Ani 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    if path.startswith(prefixes) and (
        kind == "World"
        or any(
            s in kind
            for s in [
                "Graph",
                "Dataflow",
                "ClothAsset",
                "MetaHumanCollection",
                "PartitionDefinition",
                "AnimGenController",
            ]
        )
    ):
        rows.append({"path": path, "class": kind})
types = {
    key: [name for name in dir(unreal) if key.lower() in name.lower()][:100]
    for key in [
        "SkeletonModifier",
        "SkinWeight",
        "DirectMesh",
        "MetaHumanConform",
        "MeshPartition",
        "Terrain",
        "HierarchyAddPhysics",
        "HierarchyAddRigid",
        "UAF",
    ]
}
physics = []
# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: world 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 physics_asset_override이다.
if world:
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 actor의 값이 매번 바뀐다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 physics_asset_override이다.
    for actor in unreal.GameplayStatics.get_all_actors_of_class(world, unreal.Actor):
        if "CharacterActor" not in actor.get_name() and "WeaponActor" not in actor.get_name():
            continue
        # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 component의 값이 매번 바뀐다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 physics_asset_override이다.
        for component in actor.get_components_by_class(unreal.SkeletalMeshComponent):
            mesh = component.get_skeletal_mesh_asset()
            override = component.get_editor_property("physics_asset_override")
            asset = override or (mesh.get_editor_property("physics_asset") if mesh else None)
            # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
            physics.append(
                {
                    "actor": actor.get_name(),
                    "component": component.get_name(),
                    "mesh": mesh.get_path_name() if mesh else None,
                    "effective_physics": asset.get_path_name() if asset else None,
                    "collision_enabled": str(component.get_collision_enabled()),
                }
            )
report = {"examples": rows, "types": types, "mutable_component_physics": physics}
(ROOT / "Evidence" / "feature-examples-inventory.json").write_text(
    json.dumps(report, indent=2), encoding="utf-8"
)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "examples": rows[:60],
    "types": {key: value for key, value in types.items() if key != "UAF"},
    "uaf_type_count": len(types["UAF"]),
    "mutable_component_physics": physics,
}
```

<a id="source-lab-lab-lit-crowd-py"></a>

### lab_lit_crowd.py

```python
# 파일 역할: EpicFeatureLab의 lab_lit_crowd 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert world
unreal.SystemLibrary.execute_console_command(world, "viewmode lit")
RESULT = {"viewmode": "lit"}
```

<a id="source-lab-lab-near-crowd-view-py"></a>

### lab_near_crowd_view.py

```python
# 파일 역할: EpicFeatureLab의 lab_near_crowd_view 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert world
controller = unreal.GameplayStatics.get_all_actors_of_class(
    world, unreal.FeatureLabCrowdController
)[0]
controller.cycle_camera()
RESULT = {"view": "Next configured inspection camera"}
```

<a id="source-lab-lab-observe-vegetation-wind-py"></a>

### lab_observe_vegetation_wind.py

```python
# 파일 역할: EpicFeatureLab의 lab_observe_vegetation_wind 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, unreal
from pathlib import Path

root = Path(unreal.Paths.project_dir()).resolve()
# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert world
controller = next(
    a for a in unreal.ObjectIterator(unreal.FeatureLabVegetationActor) if a.get_world() == world
)
# JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
command = json.loads(
    (root / "Scripts/Lab/vegetation-observation-command.json").read_text(encoding="utf-8-sig")
)
controller.set_wind(float(command["amplitude"]))
if "override" in command:
    unreal.SystemLibrary.execute_console_command(
        world, "DynamicWind.OverrideAmplitude " + str(command["override"])
    )
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
RESULT = json.loads(controller.capture_vegetation())
```

<a id="source-lab-lab-open-ai-context-py"></a>

### lab_open_ai_context.py

```python
# 파일 역할: EpicFeatureLab의 lab_open_ai_context 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Materials/M_LabToonInk

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

asset = unreal.load_asset("/Game/FeatureLab/Materials/M_LabToonInk")
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert asset
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
RESULT = {
    "opened": unreal.get_editor_subsystem(unreal.AssetEditorSubsystem).open_editor_for_assets(
        [asset]
    ),
    "asset": asset.get_path_name(),
}
```

<a id="source-lab-lab-open-crowd-character-py"></a>

### lab_open_crowd_character.py

```python
# 파일 역할: EpicFeatureLab의 lab_open_crowd_character 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Characters/MHC_LabFictional

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

character = unreal.load_asset("/Game/FeatureLab/Characters/MHC_LabFictional")
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 has_high_resolution_textures이다.
RESULT = {
    "opened": unreal.get_editor_subsystem(unreal.AssetEditorSubsystem).open_editor_for_assets(
        [character]
    ),
    "has_high_resolution_textures": character.get_editor_property(
        "has_high_resolution_textures"
    ),
}
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

<a id="source-lab-lab-peek-lighting-py"></a>

### lab_peek_lighting.py

```python
# 파일 역할: 현재 에셋·객체·실행 상태를 읽어 기록하는 관찰 작업.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, unreal

# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
world = (
    unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
    or unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world()
)
controller = next(
    a for a in unreal.ObjectIterator(unreal.FeatureLabLightingActor) if a.get_world() == world
)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
RESULT = json.loads(controller.capture_lighting())
RESULT["rendering"] = json.loads(unreal.FeatureLabRuntimeLibrary.inspect_lab_rendering())
```

<a id="source-lab-lab-peek-terrain-walker-py"></a>

### lab_peek_terrain_walker.py

```python
# 파일 역할: 현재 에셋·객체·실행 상태를 읽어 기록하는 관찰 작업.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, unreal

# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert world
walker = next(
    a for a in unreal.ObjectIterator(unreal.FeatureLabTerrainWalker) if a.get_world() == world
)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
RESULT = json.loads(walker.capture_movement())
```

<a id="source-lab-lab-peek-vegetation-py"></a>

### lab_peek_vegetation.py

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
controller = next(
    a for a in unreal.ObjectIterator(unreal.FeatureLabVegetationActor) if a.get_world() == world
)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
RESULT = json.loads(controller.capture_vegetation())
```

<a id="source-lab-lab-prepare-cloth-material-usage-py"></a>

### lab_prepare_cloth_material_usage.py

```python
# 파일 역할: EpicFeatureLab의 lab_prepare_cloth_material_usage 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Cloth/M_LabCapeFabric

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

material = unreal.load_asset("/Game/FeatureLab/Cloth/M_LabCapeFabric")
rows = []
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 usage의 값이 매번 바뀐다. 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
for usage in [
    unreal.MaterialUsage.MATUSAGE_SKELETAL_MESH,
    unreal.MaterialUsage.MATUSAGE_CLOTHING,
]:
    value = unreal.MaterialEditingLibrary.set_material_usage(material, usage)
    rows.append({"usage": str(usage), "return_value": value})
unreal.MaterialEditingLibrary.recompile_material(material)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 메모리에서 편집한 에셋을 실제 파일에 저장한다. Play 중의 임시 상태 저장과 구분한다.
assert unreal.EditorAssetLibrary.save_loaded_asset(material, False)
RESULT = {"material": material.get_path_name(), "usages": rows}
```

<a id="source-lab-lab-prepare-puppet-evaluation-py"></a>

### lab_prepare_puppet_evaluation.py

```python
# 파일 역할: EpicFeatureLab의 lab_prepare_puppet_evaluation 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal
from pathlib import Path

assert Path(unreal.Paths.project_dir()).resolve().name == "EpicFeatureLab"
# 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
body = next(
    a
    for a in unreal.get_editor_subsystem(unreal.EditorActorSubsystem).get_all_level_actors()
    if a.get_actor_label() == "FL03_AuthoredPuppet"
).skeletal_mesh_component
body.set_update_animation_in_editor(True)
body.clear_morph_targets()
unreal.LevelSequenceEditorBlueprintLibrary.set_current_time(0)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
assert unreal.get_editor_subsystem(unreal.LevelEditorSubsystem).save_current_level()
RESULT = {"editor_animation_update": True, "manual_morph_overrides_cleared": True}
```

<a id="source-lab-lab-preview-cloth-material-py"></a>

### lab_preview_cloth_material.py

```python
# 파일 역할: EpicFeatureLab의 lab_preview_cloth_material 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Cloth/M_LabCapeFabric

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

material = unreal.load_asset("/Game/FeatureLab/Cloth/M_LabCapeFabric")
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert material
# count에 기준값 0을 저장한다. 뒤에서 이 이름을 읽을 때 사용할 값이다.
count = 0
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 world의 값이 매번 바뀐다. 편집 중인 월드를 얻는다. 게임 실행 월드와 다르므로 대상을 혼동하지 않는다.
for world in [
    unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world(),
    unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world(),
]:
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not world
    if not world:
        continue
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 actor의 값이 매번 바뀐다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 cape이다.
    for actor in unreal.GameplayStatics.get_all_actors_of_class(
        world, unreal.FeatureLabClothActor
    ):
        actor.get_editor_property("cape").set_material(0, material)
        count += 1
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 two_sided이다.
RESULT = {
    "status": "material_preview_assigned",
    "components": count,
    "two_sided": material.get_editor_property("two_sided"),
}
```

<a id="source-lab-lab-probe-mutable-active-color-py"></a>

### lab_probe_mutable_active_color.py

```python
# 파일 역할: EpicFeatureLab의 lab_probe_mutable_active_color 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
actor = unreal.GameplayStatics.get_all_actors_of_class(
    world, unreal.FeatureLabMutableController
)[0]
instance = actor.get_character_instance()
changed = []
for name in ["Color Cloth and Shoes", "Scifi Base Color", "Shoes Color 1", "Shoes Color 2"]:
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: instance.contains_vector_parameter(name) 여러 목록의 같은 위치 항목을 묶어 순서대로 비교한다.
    if instance.contains_vector_parameter(name):
        color = instance.get_vector_parameter_selected_option(name)
        for field, value in zip(["X", "Y", "Z", "W"], [0.08, 0.2, 0.8, 1.0]):
            # 언리얼 객체의 속성을 바꾼다. 첫 인자는 속성 이름, 다음 인자는 새 값이다.
            color.set_editor_property(field, value)
        instance.set_vector_parameter_selected_option(name, color)
        # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
        changed.append(name)
instance.update_skeletal_mesh_async(True, True)
RESULT = {"changed": changed, "updates_before_completion": actor.character_updates}
```

<a id="source-lab-lab-publish-digital-body-skin-py"></a>

### lab_publish_digital_body_skin.py

```python
# 파일 역할: EpicFeatureLab의 lab_publish_digital_body_skin 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

import runpy
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

data = runpy.run_path(
    str(Path(unreal.Paths.project_dir()) / "Scripts/Lab/lab_run_skin_publish.py"),
    init_globals={"SKIN_CHARACTER": "MHC_LabDigitalBody"},
)
RESULT = data["RESULT"]
```

<a id="source-lab-lab-quit-for-cook-py"></a>

### lab_quit_for_cook.py

```python
# 파일 역할: EpicFeatureLab의 lab_quit_for_cook 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, unreal
from pathlib import Path

root = Path(unreal.Paths.project_dir()).resolve()
assert root.name == "EpicFeatureLab"
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
assert not unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert not unreal.TakeRecorderBlueprintLibrary.is_recording()
dirty = list(unreal.EditorLoadingAndSavingUtils.get_dirty_content_packages()) + list(
    unreal.EditorLoadingAndSavingUtils.get_dirty_map_packages()
)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "status": "safe_to_close" if not dirty else "dirty_packages_require_review",
    "dirty": [p.get_path_name() for p in dirty],
    "reason": "Release editor memory while the owned Windows cooker runs; authored work is already saved.",
}
(root / "Evidence/integration-editor-memory-release.json").write_text(
    json.dumps(RESULT, indent=2), encoding="utf-8"
)
# 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: not dirty
if not dirty:
    unreal.SystemLibrary.quit_editor()
```

<a id="source-lab-lab-rebuild-digital-body-skin-py"></a>

### lab_rebuild_digital_body_skin.py

```python
# 파일 역할: 에셋·그래프·장면을 구성하는 제작 작업. 이미 있는 원본을 대상으로 재실행해도 되는지 가드 조건부터 읽는다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

import runpy
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

data = runpy.run_path(
    str(Path(unreal.Paths.project_dir()) / "Scripts/Lab/lab_rebuild_character_skin.py"),
    init_globals={"SKIN_CHARACTER": "MHC_LabDigitalBody"},
)
RESULT = data["RESULT"]
```

<a id="source-lab-lab-refresh-puppet-curve-binding-py"></a>

### lab_refresh_puppet_curve_binding.py

```python
# 파일 역할: EpicFeatureLab의 lab_refresh_puppet_curve_binding 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Rigging/CR_LabPuppet
#   /Game/FeatureLab/Rigging/LS_PuppetExpressions

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal
from pathlib import Path

assert Path(unreal.Paths.project_dir()).resolve().name == "EpicFeatureLab"
unreal.LevelSequenceEditorBlueprintLibrary.close_level_sequence()
# 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
body = next(
    a
    for a in unreal.get_editor_subsystem(unreal.EditorActorSubsystem).get_all_level_actors()
    if a.get_actor_label() == "FL03_AuthoredPuppet"
).skeletal_mesh_component
mesh = body.get_skeletal_mesh_asset()
body.set_skeletal_mesh_asset(None)
body.set_skeletal_mesh_asset(mesh)
body.set_update_animation_in_editor(True)
body.set_allow_anim_curve_evaluation(True)
body.set_disable_anim_curves(False)
body.clear_morph_targets()
blueprint = unreal.load_asset("/Game/FeatureLab/Rigging/CR_LabPuppet")
blueprint.recompile_vm()
sequence = unreal.load_asset("/Game/FeatureLab/Rigging/LS_PuppetExpressions")
unreal.LevelSequenceEditorBlueprintLibrary.open_level_sequence(sequence)
unreal.LevelSequenceEditorBlueprintLibrary.set_current_time(0)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "rebound_mesh_after_morph_metadata_registration": True,
    "allow_curves": body.get_allowed_anim_curve_evaluate(),
    "disable_curves": body.get_disable_anim_curves(),
}
```

<a id="source-lab-lab-regenerate-meshterrain-editor-pcg-py"></a>

### lab_regenerate_meshterrain_editor_pcg.py

```python
# 파일 역할: EpicFeatureLab의 lab_regenerate_meshterrain_editor_pcg 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Terrain/PCG_LabTerrainSurface

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
assert not unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 이미 존재하는 언리얼 에셋을 메모리로 읽는다. 새 파일을 만드는 호출은 아니다.
component = unreal.FeatureLabRuntimeLibrary.create_lab_terrain_pcg(
    unreal.EditorAssetLibrary.load_asset("/Game/FeatureLab/Terrain/PCG_LabTerrainSurface")
)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert component
RESULT = {"status": "editor_surface_regeneration_requested"}
```

<a id="source-lab-lab-reset-meshterrain-py"></a>

### lab_reset_meshterrain.py

```python
# 파일 역할: 실험에서 바꾼 상태를 기준으로 복구하는 작업.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

# 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
terrain = next(
    a
    for a in unreal.get_editor_subsystem(unreal.EditorActorSubsystem).get_all_level_actors()
    if isinstance(a, unreal.MeshPartition)
)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert unreal.FeatureLabRuntimeLibrary.set_lab_mesh_terrain_variant(terrain, 0)
RESULT = {"status": "baseline_rebuild_requested"}
```

<a id="source-lab-lab-run-skin-publish-py"></a>

### lab_run_skin_publish.py

```python
# 파일 역할: EpicFeatureLab의 lab_run_skin_publish 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

import runpy, traceback
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

root = Path(unreal.Paths.project_dir())
# 아래 작업의 오류를 뒤의 except에서 기록하거나 처리한다. 성공했다는 뜻으로 오류를 숨기는 구간은 아니다.
try:
    # RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
    RESULT = runpy.run_path(
        str(root / "Scripts/Lab/lab_publish_character_skin.py"),
        init_globals={"SKIN_CHARACTER": globals().get("SKIN_CHARACTER", "MHC_LabFictional")},
    )["RESULT"]
except Exception:
    RESULT = {"status": "failed", "error": traceback.format_exc()}
```

<a id="source-lab-lab-save-digital-source-py"></a>

### lab_save_digital_source.py

```python
# 파일 역할: EpicFeatureLab의 lab_save_digital_source 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import json, unreal

# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
actors = unreal.get_editor_subsystem(unreal.EditorActorSubsystem)
# 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
publisher = next(
    a for a in actors.get_all_level_actors() if isinstance(a, unreal.FeatureLabLiveLinkSource)
)
publisher.set_editor_property("bPublishInEditor", False)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
assert unreal.get_editor_subsystem(unreal.LevelEditorSubsystem).save_current_level()
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "saved": True,
    "source_mode": "Independent digital-animation process, allowing editor-side capture and replay without PIE world conflicts.",
}
```

<a id="source-lab-lab-set-meshterrain-variant3-py"></a>

### lab_set_meshterrain_variant3.py

```python
# 파일 역할: EpicFeatureLab의 lab_set_meshterrain_variant3 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

# 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
terrain = next(
    a
    for a in unreal.get_editor_subsystem(unreal.EditorActorSubsystem).get_all_level_actors()
    if isinstance(a, unreal.MeshPartition)
)
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert unreal.FeatureLabRuntimeLibrary.set_lab_mesh_terrain_variant(terrain, 3)
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "status": "variant3_rebuild_requested",
    "variant": "Overhang disabled, cave remains open",
}
```

<a id="source-lab-lab-set-pcg-saved-variant-py"></a>

### lab_set_pcg_saved_variant.py

```python
# 파일 역할: EpicFeatureLab의 lab_set_pcg_saved_variant 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

import json
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
assert not unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
actor = next(
    a
    for a in unreal.get_editor_subsystem(unreal.EditorActorSubsystem).get_all_level_actors()
    if isinstance(a, unreal.FeatureLabPCGActor)
)
# JSON 문자열을 Python 사전·목록으로 읽는다. 데이터 형식을 해석하는 단계다.
state = json.loads(actor.capture_distribution())
assert state["stage"] == 0 and not state["pending"]
if not state["dense"]:
    actor.toggle_density()
if not state["spline_bent"]:
    actor.toggle_spline()
RESULT = {"status": "saved_variant_requested", "dense": True, "spline_bent": True}
```

<a id="source-lab-lab-start-crowd-build-py"></a>

### lab_start_crowd_build.py

```python
# 파일 역할: 에셋·그래프·장면을 구성하는 제작 작업. 이미 있는 원본을 대상으로 재실행해도 되는지 가드 조건부터 읽는다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.
# 이 파일이 참조하는 주요 에셋:
#   /Game/FeatureLab/Crowds/MC_LabCrowd

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

collection = unreal.load_asset("/Game/FeatureLab/Crowds/MC_LabCrowd")
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert collection
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = {
    "build_accepted": unreal.FeatureLabRuntimeLibrary.build_lab_crowd_collection(collection)
}
```

<a id="source-lab-lab-test-cloth-parent-pose-py"></a>

### lab_test_cloth_parent_pose.py

```python
# 파일 역할: 완성 결과를 실제 값과 비교하는 검증 작업. 생성 코드와 검사 코드를 구분한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
rows = []
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 actor의 값이 매번 바뀐다. 객체에 실제 저장된 속성을 읽는다. 괄호 안 문자열이 속성 이름이다. 여기서 다루는 속성은 cape이다.
for actor in unreal.GameplayStatics.get_all_actors_of_class(world, unreal.FeatureLabClothActor):
    cloth = actor.get_editor_property("cape")
    cloth.set_leader_pose_component(None, True)
    cloth.recreate_cloth_simulation_proxy()
    # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    rows.append(actor.get_name())
RESULT = {"status": "using_native_attached_parent_pose", "actors": rows}
```

<a id="source-lab-lab-test-pcg-editor-py"></a>

### lab_test_pcg_editor.py

```python
# 파일 역할: 완성 결과를 실제 값과 비교하는 검증 작업. 생성 코드와 검사 코드를 구분한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

import runpy
from pathlib import Path
# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다.
RESULT = runpy.run_path(
    str(Path(unreal.Paths.project_dir()) / "Scripts/Lab/lab_test_pcg_runtime.py"),
    init_globals={"PCG_TEST_MODE": "editor"},
)["RESULT"]
```

<a id="source-lab-lab-tune-crowd-lighting-py"></a>

### lab_tune_crowd_lighting.py

```python
# 파일 역할: EpicFeatureLab의 lab_tune_crowd_lighting 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
assert not unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
editor = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem)
assert editor.get_editor_world().get_name() == "FL_08_MetaHumanCrowd"
# 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
actors = unreal.get_editor_subsystem(unreal.EditorActorSubsystem)
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 (name, position, intensity)의 값이 매번 바뀐다. 액터 방향을 바꾼다. 위치 이동과 구분한다.
for name, position, intensity in [
    ("FrontFill", (0, -2000, 1400), 5000),
    ("BackFill", (0, 2200, 1600), 2500),
]:
    # 현재 편집 레벨의 액터 목록을 가져온다. 모든 프로젝트 에셋 목록을 가져오는 것은 아니다.
    matches = [
        a for a in actors.get_all_level_actors() if a.get_actor_label() == "FL08_" + name
    ]
    # 지정한 클래스의 실제 액터를 편집 장면에 만든다. 에셋 파일 생성과는 다르다.
    light = (
        matches[0]
        if matches
        else actors.spawn_actor_from_class(unreal.RectLight, unreal.Vector(*position))
    )
    light.set_actor_label("FL08_" + name)
    light.tags = ["FeatureLab_Owned", "FeatureLab_08"]
    # 액터 방향을 바꾼다. 위치 이동과 구분한다.
    light.set_actor_rotation(
        unreal.MathLibrary.find_look_at_rotation(
            light.get_actor_location(), unreal.Vector(0, 0, 100)
        ),
        False,
    )
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
# RESULT: MCP가 작업 완료 뒤 읽어 갈 반환 정보다. 에디터가 제공하는 작업 관리자를 얻는다. 뒤의 클래스 이름이 어떤 관리자를 요청하는지 나타낸다.
RESULT = {
    "saved": unreal.get_editor_subsystem(unreal.LevelEditorSubsystem).save_current_level(),
    "changes": "Soft fill lights for readable skin in the crowd laboratory",
}
```

<a id="source-lab-lab-tune-face-lights-py"></a>

### lab_tune_face_lights.py

```python
# 파일 역할: EpicFeatureLab의 lab_tune_face_lights 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert world
intensities = {"FL02_Key": 30.0, "FL02_Fill": 10.0, "FL02_Rim": 20.0}
rows = []
# 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 actor의 값이 매번 바뀐다.
for actor in unreal.GameplayStatics.get_all_actors_of_class(world, unreal.RectLight):
    label = actor.get_actor_label()
    # 다음 조건을 만족하는 경우에만 아래 구간을 실행한다: label in intensities 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    if label in intensities:
        component = actor.get_component_by_class(unreal.RectLightComponent)
        component.set_intensity(intensities[label])
        # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
        rows.append(
            {
                "label": label,
                "intensity": intensities[label],
                "units": str(component.get_editor_property("intensity_units")),
            }
        )
RESULT = {"runtime_only": True, "lights": rows}
```

<a id="source-lab-lab-unlit-crowd-py"></a>

### lab_unlit_crowd.py

```python
# 파일 역할: EpicFeatureLab의 lab_unlit_crowd 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

# 사용할 모듈을 가져온다. unreal은 실행 중인 언리얼 에디터 API이며 일반 Python 콘솔에 같은 환경이 자동으로 생기지는 않는다.
import unreal

# world: 현재 작업 대상 월드다. 편집 월드인지 PIE 월드인지 얻는 호출을 확인한다. 게임 실행 월드를 얻는다. PIE가 없으면 객체가 없을 수 있어 None 검사가 필요하다.
world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_game_world()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert world
unreal.SystemLibrary.execute_console_command(world, "viewmode unlit")
RESULT = {"viewmode": "unlit for base color diagnosis"}
```

<a id="source-setup-package-featurelab-ps1"></a>

### Package-FeatureLab.ps1

```powershell
# [읽는 방법] $이름은 변수, =는 값 저장, -eq/-ne는 비교다.
# 경로 확인 → 선행 결과 검사 → 실제 명령 실행 → 종료 코드 검사 → JSON 기록 순서로 읽는다.
# |는 앞 명령의 결과를 다음 명령에 보내는 파이프다. Get-Content는 읽기, Set-Content는 파일에 쓰기다.
# 아래 실행 명령·인자·분기 순서는 원본 그대로이며 설명 줄만 추가했다.

# 실행할 때 받을 선택값을 선언한다. switch는 켜기/끄기 옵션이며, string은 글자 값이다. 옵션을 생략했을 때의 기본값도 이 줄에서 정한다.
param([switch]$SkipCook)
# PowerShell 명령이 실패하면 멈추도록 정한다. 뒤의 작업이 성공한 것처럼 계속 진행되는 일을 막는다.
$ErrorActionPreference='Stop'
# 외부 프로그램의 종료 코드는 아래 LASTEXITCODE로 직접 검사한다. 이 설정 자체가 외부 프로그램을 성공시키지는 않는다.
$PSNativeCommandUseErrorActionPreference=$false
# 이번 작업 대상 프로젝트의 절대 경로다. 다른 PC에서는 이 경로부터 실제 위치로 바꿔야 한다.
$labRoot='C:\Users\20ori\UnrealProjects\EpicFeatureLab'
# 조건을 검사한다. throw는 현재 작업을 오류로 중단하고, exit는 스크립트 실행을 끝낸다.
if((Resolve-Path -LiteralPath $labRoot).Path -ne $labRoot){throw 'Unexpected lab root'}
# 엔진에 전달할 .uproject 파일 위치다. 프로젝트 폴더 자체와 파일 경로를 구분한다.
$labProject=Join-Path $labRoot 'EpicFeatureLab.uproject'
# 앞서 검사한 맵 구성 JSON을 읽어 PowerShell 객체로 바꾼다. 필드 이름으로 값에 접근할 수 있다.
$labConfig=Get-Content -LiteralPath (Join-Path $labRoot 'Evidence\integration-runtime-configuration.json') -Raw | ConvertFrom-Json
# 조건을 검사한다. throw는 현재 작업을 오류로 중단하고, exit는 스크립트 실행을 끝낸다.
if($labConfig.status -ne 'configured' -or $labConfig.map_count -ne 18){throw 'Canonical runtime maps must be configured first'}
# 조건을 검사한다. throw는 현재 작업을 오류로 중단하고, exit는 스크립트 실행을 끝낸다.
if((Get-PSDrive C).Free -lt 45GB){throw 'Need 45 GiB free for the first complete package'}
# 패키징한 게임을 모을 출력 폴더다. 원본 Content 폴더를 가리키는 변수가 아니다.
$labArchive=Join-Path $labRoot 'Builds\WindowsFeatureLab'
$labLog=Join-Path $labRoot 'Evidence\integration-windows-package.log'
$labStatusPath=Join-Path $labRoot 'Evidence\integration-windows-package.json'
# 진행 상태와 경로를 이름:값 형태로 기록한다. 뒤에서 JSON으로 저장해 다른 단계가 실제 성공 여부를 확인하게 한다.
$labStatus=[ordered]@{status='packaging';project=$labProject;archive=$labArchive;canonical_maps=$labConfig.canonical_maps;reuse_existing_cooked_assets=[bool]$SkipCook;started_at=(Get-Date).ToString('o');log=$labLog;exit_code=$null;preservation='No capture data, installations or caches are deleted.'}
# 여러 곳에서 부를 작은 작업을 정의한다. 함수 이름을 실제로 호출하기 전에는 본문이 실행되지 않는다.
function Save-LabPackageStatus { $labStatus | ConvertTo-Json -Depth 6 | Set-Content -LiteralPath $labStatusPath -Encoding UTF8 }
Save-LabPackageStatus
# 실패할 수 있는 작업을 묶는다. 오류가 나면 catch에서 실패 정보를 적고 finally에서 정리한다.
try {
    # RunUAT에 전달할 실행 옵션 목록이다. build=컴파일, cook=실행용 에셋 변환, stage=결과 모으기, archive=배포 폴더로 정리하기다.
    $labArguments=@('BuildCookRun',('-project='+$labProject),'-noP4','-platform=Win64','-clientconfig=Development','-build','-cook','-stage','-pak','-iostore','-archive',('-archivedirectory='+$labArchive),('-map='+($labConfig.canonical_maps -join '+')),'-AdditionalCookerOptions=-ddc=InstalledNoZenLocalFallback','-nocompileeditor','-unattended','-utf8output')
    # 조건을 검사한다. throw는 현재 작업을 오류로 중단하고, exit는 스크립트 실행을 끝낸다.
    if($SkipCook){$labArguments+='-skipcook'}
    # 외부 실행 파일을 호출한다. &는 호출 연산자이며 @labArguments는 목록의 각 값을 별도 인자로 전달한다. *>는 모든 출력 기록을 로그 파일에 쓴다.
    & 'C:\Program Files\Epic Games\UE_5.8\Engine\Build\BatchFiles\RunUAT.bat' @labArguments *> $labLog
    # 바로 전에 실행한 외부 프로그램의 종료 코드를 읽는다. 0은 정상 종료이며 0이 아니면 실패 원인을 로그에서 찾아야 한다.
    $labStatus.exit_code=$LASTEXITCODE
    # 바로 전에 실행한 외부 프로그램의 종료 코드를 읽는다. 0은 정상 종료이며 0이 아니면 실패 원인을 로그에서 찾아야 한다.
    if($LASTEXITCODE -ne 0){throw "BuildCookRun failed: $LASTEXITCODE"}
    $labStatus.executables=@(Get-ChildItem -LiteralPath $labArchive -File -Filter 'EpicFeatureLab*.exe' -Recurse | Select-Object -ExpandProperty FullName)
    # 조건을 검사한다. throw는 현재 작업을 오류로 중단하고, exit는 스크립트 실행을 끝낸다.
    if(-not $labStatus.executables.Count){throw 'No packaged game executable was produced'}
    $labStatus.status='packaged'
# 위 작업이 실패했을 때 실행한다. 실패 원인을 보고서에 남기며 성공 상태로 덮지 않는다.
} catch {
    $labStatus.status='failed';$labStatus.error=$_.Exception.Message
# 성공과 실패 모두 마지막에 실행한다. 종료 시간과 현재 보고서 상태를 남긴다.
} finally {
    $labStatus.finished_at=(Get-Date).ToString('o');Save-LabPackageStatus
}
$labStatus | ConvertTo-Json -Depth 6
# 조건을 검사한다. throw는 현재 작업을 오류로 중단하고, exit는 스크립트 실행을 끝낸다.
if($labStatus.status -ne 'packaged'){exit 1}
```

<a id="source-setup-start-featurelabdigitalpublisher-ps1"></a>

### Start-FeatureLabDigitalPublisher.ps1

```powershell
# [읽는 방법] $이름은 변수, =는 값 저장, -eq/-ne는 비교다.
# 경로 확인 → 선행 결과 검사 → 실제 명령 실행 → 종료 코드 검사 → JSON 기록 순서로 읽는다.
# |는 앞 명령의 결과를 다음 명령에 보내는 파이프다. Get-Content는 읽기, Set-Content는 파일에 쓰기다.
# 아래 실행 명령·인자·분기 순서는 원본 그대로이며 설명 줄만 추가했다.

# PowerShell 명령이 실패하면 멈추도록 정한다. 뒤의 작업이 성공한 것처럼 계속 진행되는 일을 막는다.
$ErrorActionPreference='Stop'
# 엔진에 전달할 .uproject 파일 위치다. 프로젝트 폴더 자체와 파일 경로를 구분한다.
$labProject='C:\Users\20ori\UnrealProjects\EpicFeatureLab\EpicFeatureLab.uproject'
# 같은 프로젝트 전용 옵션으로 실행한 송신기만 찾는다. 다른 UnrealEditor-Cmd 작업을 종료하거나 가져오지 않는다.
$labOwned=Get-CimInstance Win32_Process -Filter "Name='UnrealEditor-Cmd.exe'" | Where-Object {$_.CommandLine -like '*-FeatureLabDigitalPublisher*' -and $_.CommandLine -like '*EpicFeatureLab.uproject*'}
# 조건을 검사한다. throw는 현재 작업을 오류로 중단하고, exit는 스크립트 실행을 끝낸다.
if($labOwned){$labOwned | Select-Object ProcessId,CommandLine | ConvertTo-Json;exit}
# 별도 프로세스를 시작한다. FilePath=실행 파일, ArgumentList=전달 값, PassThru=새 프로세스 정보를 받는 옵션이다. 디지털 송신기는 Hidden, 사용자가 볼 게임은 Normal 창으로 실행한다.
$labProcess=Start-Process -FilePath 'C:\Program Files\Epic Games\UE_5.8\Engine\Binaries\Win64\UnrealEditor-Cmd.exe' -ArgumentList @($labProject,'/Game/FeatureLab/Maps/FL_16_DigitalPerformance','-game','-nullrhi','-nosound','-messaging','-unattended','-nosplash','-FeatureLabDigitalPublisher','-DDC=InstalledNoZenLocalFallback','-ExecCmds="t.MaxFPS 30"','-ABSLOG=C:\Users\20ori\UnrealProjects\EpicFeatureLab\Evidence\case16-digital-publisher.log') -WorkingDirectory 'C:\Program Files\Epic Games\UE_5.8\Engine\Binaries\Win64' -WindowStyle Hidden -PassThru
$labResult=[PSCustomObject]@{process_id=$labProcess.Id;project=$labProject;purpose='Independent local digital-animation publisher, CPU animation without a rendered game window';log='Evidence/case16-digital-publisher.log'};$labResult | ConvertTo-Json | Set-Content -LiteralPath (Join-Path $PSScriptRoot 'feature-lab-digital-publisher-process.json') -Encoding utf8;$labResult | ConvertTo-Json
```

<a id="source-setup-start-featurelabplayer-ps1"></a>

### Start-FeatureLabPlayer.ps1

```powershell
# [읽는 방법] $이름은 변수, =는 값 저장, -eq/-ne는 비교다.
# 경로 확인 → 선행 결과 검사 → 실제 명령 실행 → 종료 코드 검사 → JSON 기록 순서로 읽는다.
# |는 앞 명령의 결과를 다음 명령에 보내는 파이프다. Get-Content는 읽기, Set-Content는 파일에 쓰기다.
# 아래 실행 명령·인자·분기 순서는 원본 그대로이며 설명 줄만 추가했다.

# 실행할 때 받을 선택값을 선언한다. switch는 켜기/끄기 옵션이며, string은 글자 값이다. 옵션을 생략했을 때의 기본값도 이 줄에서 정한다.
param([ValidatePattern('^[a-z0-9-]+$')][string]$Stage='integration')
# PowerShell 명령이 실패하면 멈추도록 정한다. 뒤의 작업이 성공한 것처럼 계속 진행되는 일을 막는다.
$ErrorActionPreference='Stop'
# 이번 작업 대상 프로젝트의 절대 경로다. 다른 PC에서는 이 경로부터 실제 위치로 바꿔야 한다.
$labRoot='C:\Users\20ori\UnrealProjects\EpicFeatureLab'
# 진행 상태와 경로를 이름:값 형태로 기록한다. 뒤에서 JSON으로 저장해 다른 단계가 실제 성공 여부를 확인하게 한다.
$labStatus=Get-Content -LiteralPath (Join-Path $labRoot 'Evidence\integration-windows-package.json') -Raw|ConvertFrom-Json
# 조건을 검사한다. throw는 현재 작업을 오류로 중단하고, exit는 스크립트 실행을 끝낸다.
if($labStatus.status -ne 'packaged'){throw 'The complete package must succeed first'}
$labExe=@($labStatus.executables|Where-Object {$_ -notmatch '\\Binaries\\'})[0]
# 조건을 검사한다. throw는 현재 작업을 오류로 중단하고, exit는 스크립트 실행을 끝낸다.
if(-not $labExe -or -not(Test-Path -LiteralPath $labExe)){throw 'Owned packaged executable missing'}
# 이번 패키지 폴더 안의 실행 파일이 이미 떠 있는지 확인한다. 창을 중복 실행하지 않기 위한 검사다.
$labActive=@(Get-CimInstance Win32_Process -Filter "Name='EpicFeatureLab.exe'" | Where-Object {$_.ExecutablePath -and $_.ExecutablePath.StartsWith($labStatus.archive,[StringComparison]::OrdinalIgnoreCase)})
# 조건을 검사한다. throw는 현재 작업을 오류로 중단하고, exit는 스크립트 실행을 끝낸다.
if($labActive.Count){throw 'Owned packaged game is already running; reuse its window'}
$labGameLog=Join-Path $labRoot ('Evidence\packaged-'+$Stage+'.log')
# 별도 프로세스를 시작한다. FilePath=실행 파일, ArgumentList=전달 값, PassThru=새 프로세스 정보를 받는 옵션이다. 디지털 송신기는 Hidden, 사용자가 볼 게임은 Normal 창으로 실행한다.
$labGame=Start-Process -FilePath $labExe -ArgumentList @('-windowed','-ResX=1280','-ResY=720','-ExecCmds="t.MaxFPS 30"',('-ABSLOG="'+$labGameLog+'"')) -WorkingDirectory (Split-Path -Parent $labExe) -WindowStyle Normal -PassThru
# 검사·실행 결과를 묶는 보고서다. 프로그램 실행 명령과 결과 보고서를 만드는 명령은 따로 읽는다.
$labReport=[ordered]@{status='launched';process_id=$labGame.Id;executable=$labExe;log=$labGameLog;started_at=(Get-Date).ToString('o')}
$labReport|ConvertTo-Json|Set-Content -LiteralPath (Join-Path $labRoot 'Evidence\integration-packaged-launch.json') -Encoding UTF8
$labReport|ConvertTo-Json
```

<a id="source-setup-generate-featurelab-ai-speech-py"></a>

### generate_featurelab_ai_speech.py

```python
# 파일 역할: EpicFeatureLab의 generate_featurelab_ai_speech 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

"""Generate the actual neural TTS input locally, outside the engine Python environment."""

import array
import hashlib
import importlib.metadata
import json
import math
import wave
from pathlib import Path
from piper import PiperVoice, SynthesisConfig

ROOT = Path(r"C:\Users\20ori\UnrealProjects\EpicFeatureLab")
MODEL = Path(r"K:\EpicResources\Downloads\NeuralTTS\Piper\en_US-ljspeech-high.onnx")
assert (ROOT / "EpicFeatureLab.uproject").is_file()
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert MODEL.is_file() and MODEL.stat().st_size > 100_000_000
OUTPUT = ROOT / "ExternalWorkflows" / "CaptureInputs" / "FeatureLabAISpeech.wav"
assert not OUTPUT.exists(), "Preserve an existing generated voice input"
OUTPUT.parent.mkdir(parents=True, exist_ok=True)
TEXT = "The signal tower is awake. We found the hidden path, and the bridge is safe. Keep moving, watch the lights, and meet me at the next beacon. This voice was generated by a local neural model."
voice = PiperVoice.load(str(MODEL), use_cuda=False)
with wave.open(str(OUTPUT), "wb") as handle:
    voice.synthesize_wav(TEXT, handle, syn_config=SynthesisConfig(length_scale=1.1))
with wave.open(str(OUTPUT), "rb") as handle:
    frames = handle.getnframes()
    sample_rate = handle.getframerate()
    channels = handle.getnchannels()
    sample_width = handle.getsampwidth()
    pcm = handle.readframes(frames)
samples = array.array("h", pcm)
duration = frames / sample_rate
rms = math.sqrt(sum((x / 32768.0) ** 2 for x in samples) / len(samples))
# 차이의 부호를 없애 크기만 비교한다. 오차 허용 범위 검사에 자주 사용한다.
peak = max(abs(x) for x in samples) / 32768.0
# 검증 조건이다. 조건을 만족하지 않으면 여기서 중단한다. 실패를 무시하고 다음 생성·저장을 이어 가면 잘못된 결과를 정상으로 기록할 수 있다.
assert duration > 10 and channels == 1 and sample_width == 2 and rms > 0.01
OUTPUT.with_suffix(".txt").write_text(TEXT, encoding="utf-8")
# REPORT: 이번 작업의 입력·측정·성공 여부를 모을 기록용 사전이다. 게임의 실행 상태 자체와는 다르다.
REPORT = {
    "status": "neural_voice_generated",
    "engine": "Piper",
    "package_version": importlib.metadata.version("piper-tts"),
    "uses_neural_network": True,
    "local_inference": True,
    "personal_voice_recording_used": False,
    "model": str(MODEL),
    "model_sha256": hashlib.sha256(MODEL.read_bytes()).hexdigest(),
    "output": str(OUTPUT),
    "output_sha256": hashlib.sha256(OUTPUT.read_bytes()).hexdigest(),
    "sample_rate": sample_rate,
    "channels": channels,
    "sample_width_bytes": sample_width,
    "duration_seconds": duration,
    "peak": peak,
    "rms": rms,
    "text": TEXT,
    "source_links": {
        "engine": "https://github.com/OHF-Voice/piper1-gpl",
        "python_api": "https://github.com/OHF-Voice/piper1-gpl/blob/main/docs/API_PYTHON.md",
        "voice_model_card": "https://huggingface.co/rhasspy/piper-voices/raw/main/en/en_US/ljspeech/high/MODEL_CARD",
        "voice_repository": "https://huggingface.co/rhasspy/piper-voices",
    },
    "license_notes": {
        "engine_tool": "GPL-3.0-or-later; isolated authoring tool, not bundled into the Unreal project",
        "voice_repository": "MIT",
        "voice_dataset_per_model_card": "public domain",
    },
}
(ROOT / "Evidence" / "case02-ai-voice-input.json").write_text(
    json.dumps(REPORT, indent=2), encoding="utf-8"
)
# Python의 사전·목록을 JSON 문자열로 바꾼다. 저장 전 직렬화 단계다.
print(
    json.dumps(
        {
            k: REPORT[k]
            for k in [
                "status",
                "package_version",
                "duration_seconds",
                "sample_rate",
                "rms",
                "output",
            ]
        }
    )
)
```

<a id="source-setup-generate-featurelab-cloth-inputs-py"></a>

### generate_featurelab_cloth_inputs.py

```python
# 파일 역할: EpicFeatureLab의 generate_featurelab_cloth_inputs 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
# 실행 환경: 이 파일에서 unreal을 가져온다면 해당 플러그인이 준비된 Unreal Editor 안에서 실행한다.
# 읽는 순서: 입력 경로와 기준값 → 함수 정의 → 실제 호출 → 저장/검사 결과. 함수 정의만 읽었다고 실행된 것은 아니다.
# 문법: = 값 저장, == 같은지 비교, [] 목록/항목 접근, {} 이름:값 사전, None 대상 없음, 들여쓰기 같은 작업 묶음.

import hashlib, json, math
from pathlib import Path

root = Path(__file__).resolve().parent / "ClothInputs"
root.mkdir(exist_ok=True)
reports = []
for name, columns, rows in [("FL09_CapeSim", 25, 33), ("FL09_CapeRender", 49, 65)]:
    lines = ["# FeatureLab authored cape, centimeters, no scan or mocap input", "o " + name]
    vertices = []
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 row의 값이 매번 바뀐다. 반복에 쓸 정수 순서를 만든다. 끝 값은 포함되지 않는다.
    for row in range(rows):
        v = row / (rows - 1)
        half_width = 25 + 35 * v
        # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 column의 값이 매번 바뀐다. 반복에 쓸 정수 순서를 만든다. 끝 값은 포함되지 않는다.
        for column in range(columns):
            u = column / (columns - 1)
            # Cape falls behind a +X-facing puppet. Start without intersecting the torso.
            x = -28 - 7 * v - 3 * math.sin(math.pi * u) * math.sin(math.pi * v)
            y = (u * 2 - 1) * half_width
            z = 137 - 112 * v
            # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
            vertices.append((x, y, z))
            lines.append("v %.6f %.6f %.6f" % (x, y, z))
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 row의 값이 매번 바뀐다. 반복에 쓸 정수 순서를 만든다. 끝 값은 포함되지 않는다.
    for row in range(rows):
        # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 column의 값이 매번 바뀐다. 반복에 쓸 정수 순서를 만든다. 끝 값은 포함되지 않는다.
        for column in range(columns):
            lines.append("vt %.6f %.6f" % (column / (columns - 1), 1 - row / (rows - 1)))
    # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 row의 값이 매번 바뀐다. 반복에 쓸 정수 순서를 만든다. 끝 값은 포함되지 않는다.
    for row in range(rows - 1):
        # 반복 대상에서 하나씩 꺼내 아래 들여쓰기 구간을 실행한다. 반복 변수 column의 값이 매번 바뀐다. 반복에 쓸 정수 순서를 만든다. 끝 값은 포함되지 않는다.
        for column in range(columns - 1):
            a = row * columns + column + 1
            b = a + 1
            c = a + columns
            d = c + 1
            lines.extend(
                [
                    "f %d/%d %d/%d %d/%d" % (a, a, c, c, b, b),
                    "f %d/%d %d/%d %d/%d" % (b, b, c, c, d, d),
                ]
            )
    path = root / (name + ".obj")
    path.write_text("\n".join(lines) + "\n", encoding="ascii")
    # 목록 끝에 항목 하나를 추가한다. 기존 목록을 새 목록으로 바꾸는 연산은 아니다.
    reports.append(
        {
            "name": name,
            "vertices": len(vertices),
            "triangles": 2 * (columns - 1) * (rows - 1),
            "columns": columns,
            "rows": rows,
            "top_anchor_indices": list(range(columns)),
            "sha256": hashlib.sha256(path.read_bytes()).hexdigest(),
            "bounds_min": [min(p[i] for p in vertices) for i in range(3)],
            "bounds_max": [max(p[i] for p in vertices) for i in range(3)],
        }
    )
(root / "cloth-inputs.json").write_text(
    json.dumps(
        {
            "status": "inputs_authored",
            "unit": "centimeters",
            "source": "Procedural garment authored for this lab",
            "meshes": reports,
        },
        indent=2,
    ),
    encoding="utf-8",
)
# Python의 사전·목록을 JSON 문자열로 바꾼다. 저장 전 직렬화 단계다.
print(
    json.dumps(
        {
            "status": "inputs_authored",
            "meshes": [
                {"name": r["name"], "vertices": r["vertices"], "triangles": r["triangles"]}
                for r in reports
            ],
        }
    )
)
```

<a id="source-source-epicfeaturelab-target-cs"></a>

### EpicFeatureLab.Target.cs

```csharp
// .cs는 이 프로젝트에서 게임 로직이 아니라 빌드 규칙을 적는 파일이다.
// {} 안은 같은 규칙 묶음, 문자열 배열은 필요한 모듈 이름 목록이다. 원래 규칙은 유지하고 설명만 추가했다.

// 언리얼 빌드 도구의 자료형을 사용한다. 게임 플레이 코드를 실행하는 using 문은 아니다.
using UnrealBuildTool;

// 빌드 도구가 읽을 규칙 클래스를 선언한다. 파일명과 클래스 이름의 관계를 유지해야 한다.
public class EpicFeatureLabTarget : TargetRules
{
    // 규칙 객체를 만들 때 실행할 생성자다. Target은 현재 빌드 대상의 설정을 담고 base(Target)은 부모 규칙에 그 정보를 넘긴다.
    public EpicFeatureLabTarget(TargetInfo Target) : base(Target)
    {
        // 에디터 없이 실행할 게임 대상이다. 같은 소스라도 Editor 대상과 포함할 모듈이 다를 수 있다.
        Type = TargetType.Game;
        // 이 엔진 버전의 빌드 기본 규칙 집합을 선택한다. 이번 프로젝트는 UE 5.8의 V7을 사용한다.
        DefaultBuildSettings = BuildSettingsVersion.V7;
        // 헤더 포함 순서 규칙을 현재 엔진 기준으로 맞춘다. 다른 엔진 버전에 그대로 옮겨도 빌드된다는 뜻은 아니다.
        IncludeOrderVersion = EngineIncludeOrderVersion.Latest;
        // 이 대상이 빌드할 게임 모듈 이름이다. 프로젝트 이름은 EpicFeatureLab이지만 기존 샘플에서 이어받은 모듈명은 MutableSample이다.
        ExtraModuleNames.Add("MutableSample");
    }
}
```

<a id="source-source-epicfeaturelabeditor-target-cs"></a>

### EpicFeatureLabEditor.Target.cs

```csharp
// .cs는 이 프로젝트에서 게임 로직이 아니라 빌드 규칙을 적는 파일이다.
// {} 안은 같은 규칙 묶음, 문자열 배열은 필요한 모듈 이름 목록이다. 원래 규칙은 유지하고 설명만 추가했다.

// 언리얼 빌드 도구의 자료형을 사용한다. 게임 플레이 코드를 실행하는 using 문은 아니다.
using UnrealBuildTool;

// 빌드 도구가 읽을 규칙 클래스를 선언한다. 파일명과 클래스 이름의 관계를 유지해야 한다.
public class EpicFeatureLabEditorTarget : TargetRules
{
    // 규칙 객체를 만들 때 실행할 생성자다. Target은 현재 빌드 대상의 설정을 담고 base(Target)은 부모 규칙에 그 정보를 넘긴다.
    public EpicFeatureLabEditorTarget(TargetInfo Target) : base(Target)
    {
        // 언리얼 에디터에서 프로젝트를 열 때 사용할 대상이다. 에디터 전용 도구 모듈을 포함할 수 있다.
        Type = TargetType.Editor;
        // 이 엔진 버전의 빌드 기본 규칙 집합을 선택한다. 이번 프로젝트는 UE 5.8의 V7을 사용한다.
        DefaultBuildSettings = BuildSettingsVersion.V7;
        // 헤더 포함 순서 규칙을 현재 엔진 기준으로 맞춘다. 다른 엔진 버전에 그대로 옮겨도 빌드된다는 뜻은 아니다.
        IncludeOrderVersion = EngineIncludeOrderVersion.Latest;
        // 이 대상이 빌드할 게임 모듈 이름이다. 프로젝트 이름은 EpicFeatureLab이지만 기존 샘플에서 이어받은 모듈명은 MutableSample이다.
        ExtraModuleNames.Add("MutableSample");
    }
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

<a id="source-source-mutablesample-infinite-cpp"></a>

### Infinite.cpp

```cpp
// 파일 역할: EpicFeatureLab의 Infinite 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
// 클래스=작업 종류, 객체=실제 한 개, 포인터(* 또는 TObjectPtr)=다른 객체를 가리키는 참조.
// nullptr은 대상 없음, bool은 참/거짓, TArray는 순서 있는 목록, FString은 문자열이다.
// WITH_EDITOR 구간은 에디터 빌드에서만 사용하는 코드다. 원본과의 토큰 비교 결과는 code-validation.json에 기록한다.

// Copyright Epic Games, Inc. All Rights Reserved.

#include "Infinite.h"

#include "Animation/AnimInstance.h"
#include "MuCO/CustomizableObject.h"
#include "MuCO/CustomizableObjectInstanceUsage.h"
#include "MuCO/CustomizableObjectSystem.h"
#include "GameFramework/Pawn.h"
#include "Components/SkeletalMeshComponent.h"
#include "Kismet/GameplayStatics.h"
#include "Engine/World.h"

// 【함수 역할】액터가 게임 월드에서 실행을 시작할 때 엔진이 호출한다. 생성자에서 부품을 만든 뒤 실제 월드·플레이어·입력과 연결하는 초기 준비 단계다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AInfinite::BeginPlay()
{
    // 부모 클래스의 기본 처리를 먼저/함께 실행한다. 자식 클래스의 추가 작업만으로 엔진 기본 동작을 대체하지 않는다.
    Super::BeginPlay();

    UCustomizableObjectSystem *System = UCustomizableObjectSystem::GetInstance();
    System->SetGenerateInstancesWithinRange(true);
    System->SetInstanceGenerationRange(UpdateDistance);

    FTransform Transform;
    // 【함수 역할】이름은 BeginDeferredActorSpawnFromClass이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
    // 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (AActor *Actor = UGameplayStatics::BeginDeferredActorSpawnFromClass(
            GetWorld(), OccluderActor, Transform))
    {
        UGameplayStatics::FinishSpawningActor(Actor, Transform);

        FBox Box = Actor->CalculateComponentsBoundingBoxInLocalSpace();
        OriginalOccluderSize = Box.GetSize();

        Actor->Destroy();
    }

    RandomStream.Initialize(0);
}

// 【함수 역할】레벨 이동이나 실행 종료 때 남은 콜백·참조·임시 상태를 정리한다. 다음 실행에 이전 작업이 남지 않도록 하는 종료 단계다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AInfinite::EndPlay(const EEndPlayReason::Type EndPlayReason)
{
    // 부모 클래스의 기본 처리를 먼저/함께 실행한다. 자식 클래스의 추가 작업만으로 엔진 기본 동작을 대체하지 않는다.
    Super::EndPlay(EndPlayReason);

    UCustomizableObjectSystem *System = UCustomizableObjectSystem::GetInstance();
    System->SetGenerateInstancesWithinRange(false);
}

// 【함수 역할】이름은 IterateRegions이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AInfinite::IterateRegions(const FIntVector2 &StartRegionCoord,
                               const TFunction<bool(FIntVector2, int32)> &VisitRegion)
{
    FIntVector2 Offsets[] = {FIntVector2(0, -1), FIntVector2(-1, 0), FIntVector2(0, 1),
                             FIntVector2(1, 0)};

    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (VisitRegion(StartRegionCoord, 0))
    {
        return;
    }

    const int32 NumRing = FMath::Max(RegionWidthScenery, RegionWidthInstances);
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (int32 RingIndex = 1; RingIndex < NumRing; ++RingIndex)
    {
        const int32 NumRegions = 8 * RingIndex;

        const FIntVector2 Start(RingIndex, RingIndex);
        FIntVector2 LocalRegionCoord = Start;

        // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
        for (int32 RegionIndex = 0; RegionIndex < NumRegions; ++RegionIndex)
        {
            const FIntVector2 RegionCoord = StartRegionCoord + LocalRegionCoord;

            // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
            if (VisitRegion(RegionCoord, RingIndex))
            {
                return;
            }

            LocalRegionCoord += Offsets[RegionIndex / (RingIndex * 2)];
        }
    }
}

// 【함수 역할】이름은 SpawnScenery이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
bool AInfinite::SpawnScenery(const FIntVector2 RegionCoord, const int32 RingIndex)
{
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (RegionWidthScenery > RingIndex)
    {
        FRegionScenery &Region = RegionScenery.FindOrAdd(RegionCoord);

        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (Region.Scenery.IsEmpty())
        {
            const FVector RegionLocation(RegionCoord.X * RegionSize.X, RegionCoord.Y * RegionSize.Y,
                                         0.0);

            // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
            if (PlaneActor)
            {
                FTransform Transform;
                Transform.SetLocation(RegionLocation);
                Transform.SetScale3D(FVector(RegionSize.X, RegionSize.Y, 1.0));

                // 【함수 역할】이름은 BeginDeferredActorSpawnFromClass이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
                // 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
                // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
                if (AActor *Actor = UGameplayStatics::BeginDeferredActorSpawnFromClass(
                        GetWorld(), PlaneActor, Transform))
                {
                    UGameplayStatics::FinishSpawningActor(Actor, Transform);

                    Region.Scenery.Add(Actor);
                }
            }

            // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
            if (OccluderActor)
            {
                // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
                for (int32 OccluderIndex = 0; OccluderIndex < OccludersNum; ++OccluderIndex)
                {
                    const FVector RegionSize3D(RegionSize.X, RegionSize.Y, 1.0);

                    FVector OccluderSize(RandomStream.FRandRange(200.0, 1000.0),
                                         RandomStream.FRandRange(200.0, 1000.0),
                                         RandomStream.RandRange(500.0, 3000.0));

                    FVector Location(RandomStream.GetFraction(), RandomStream.GetFraction(),
                                     OccluderSize.Z * 0.5);
                    Location = RegionLocation + (Location * RegionSize3D - RegionSize3D / 2.0);

                    FTransform Transform;
                    Transform.SetLocation(Location);
                    Transform.SetScale3D(OccluderSize / OriginalOccluderSize);

                    constexpr ESpawnActorCollisionHandlingMethod CollisionHandling =
                        ESpawnActorCollisionHandlingMethod::AdjustIfPossibleButAlwaysSpawn;
                    // 【함수 역할】이름은 BeginDeferredActorSpawnFromClass이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
                    // 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
                    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
                    if (AActor *Actor = UGameplayStatics::BeginDeferredActorSpawnFromClass(
                            GetWorld(), OccluderActor, Transform, CollisionHandling))
                    {
                        UGameplayStatics::FinishSpawningActor(Actor, Transform);

                        Region.Scenery.Add(Actor);
                    }
                }
            }

            // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
            return true;
        }
    }

    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return false;
}

// 【함수 역할】이름은 SpawnInstances이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
bool AInfinite::SpawnInstances(const FIntVector2 RegionCoord, const int32 RingIndex)
{
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (RegionWidthInstances > RingIndex)
    {
        FRegionInstance &Region = RegionInstances.FindOrAdd(RegionCoord);

        const FVector RegionLocation(RegionCoord.X * RegionSize.X, RegionCoord.Y * RegionSize.Y,
                                     0.0);

        bool bInstancesSpawned = false;
        // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
        for (int32 InstanceIndex = 0;
             InstanceIndex < MaxInstancesPerTick && Region.Instances.Num() < InstancesNum;
             ++InstanceIndex)
        {
            const FVector RegionSize3D(RegionSize.X, RegionSize.Y, 0.0);

            FVector Location =
                RegionLocation +
                FVector(RandomStream.RandRange(-RegionSize3D.X / 2, +RegionSize3D.X / 2),
                        RandomStream.RandRange(-RegionSize3D.Y / 2, +RegionSize3D.Y / 2), 0.0);
            FRotator Rotator(0.0, RandomStream.GetFraction() * 360.0, 0.0);

            FTransform Transform;
            Transform.SetLocation(Location);
            Transform.SetRotation(Rotator.Quaternion());

            const TSubclassOf<AInstanceActor> &InstanceActorClass =
                InstanceActors[RandomStream.RandRange(0, InstanceActors.Num() - 1)];
            // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
            if (!InstanceActorClass)
            {
                continue;
            }

            AInstanceActor *InstanceActor = InstanceActorClass.GetDefaultObject();

            UCustomizableObject *Object = InstanceActor->CustomizableObject;
            // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
            if (!InstanceActor->CustomizableObject)
            {
                continue;
            }

            constexpr ESpawnActorCollisionHandlingMethod CollisionHandling =
                ESpawnActorCollisionHandlingMethod::AdjustIfPossibleButAlwaysSpawn;
            // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
            if (AInstanceActor *Actor =
                    // 【함수 역할】이름은 BeginDeferredActorSpawnFromClass이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
                    // 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
                    Cast<AInstanceActor>(UGameplayStatics::BeginDeferredActorSpawnFromClass(
                        GetWorld(), InstanceActorClass, Transform, CollisionHandling)))
            {
                UGameplayStatics::FinishSpawningActor(Actor, Transform);

                UCustomizableObjectInstance *Instance =
                    InstanceActor->CustomizableObject->CreateInstance();
                Instance->SetRandomValuesFromStream(RandomStream);

                Actor->CustomizableObjectInstance = Instance;

                TArray<USkeletalMeshComponent *> Components;

                // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
                for (int32 ComponentIndex = 0; ComponentIndex < Object->GetComponentCount();
                     ++ComponentIndex)
                {
                    FString SkeletalMeshComponentName =
                        FString::Printf(TEXT("Skeletal Mesh Component %d"), ComponentIndex);

                    USkeletalMeshComponent *Component;
                    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
                    if (ComponentIndex == 0)
                    {
                        Component = Cast<USkeletalMeshComponent>(Actor->GetRootComponent());
                        Component->Rename(*SkeletalMeshComponentName);
                    }
                    else
                    {
                        Component = NewObject<USkeletalMeshComponent>(
                            Actor, USkeletalMeshComponent::StaticClass(),
                            FName(*SkeletalMeshComponentName));
                        Component->CreationMethod =
                            EComponentCreationMethod::SimpleConstructionScript;
                        Component->AttachToComponent(
                            Actor->GetRootComponent(),
                            FAttachmentTransformRules::KeepRelativeTransform);
                        Component->RegisterComponent();
                    }

                    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
                    if (!Component)
                    {
                        continue;
                    }

                    const FName &ComponentName = Object->GetComponentName(ComponentIndex);

                    FString CustomizableComponentName = FString::Printf(
                        TEXT("Customizable Object Instance Usage %d"), ComponentIndex);
                    UCustomizableObjectInstanceUsage *Usage =
                        NewObject<UCustomizableObjectInstanceUsage>(
                            Actor, UCustomizableObjectInstanceUsage::StaticClass(),
                            FName(*CustomizableComponentName));
                    Usage->AttachTo(Component);
                    Usage->SetCustomizableObjectInstance(Instance);
                    Usage->SetComponentName(ComponentName);

                    Components.Add(Component);

                    Actor->Usages.Add(Usage);
                }

                // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
                if (!Components.IsEmpty())
                {
                    // Set the animation Instance
                    Components[0]->SetAnimInstanceClass(Actor->Animation);

                    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
                    for (int32 ComponentIndex = 1; ComponentIndex < Components.Num();
                         ++ComponentIndex)
                    {
                        Components[ComponentIndex]->SetLeaderPoseComponent(Components[0]);
                    }
                }

                Region.Instances.Add(Actor);
                bInstancesSpawned = true;
            }
        }

        // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
        return bInstancesSpawned;
    }

    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return false;
}

// 【함수 역할】매 갱신 시점에 상태를 확인하고 동작을 진행한다. DeltaSeconds는 이번 갱신까지 지난 시간이며, 함수가 1초에 정확히 60번 불린다고 가정하지 않는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AInfinite::Tick(float DeltaSeconds)
{
    TRACE_CPUPROFILER_EVENT_SCOPE(AInfinite::Tick)

    // 부모 클래스의 기본 처리를 먼저/함께 실행한다. 자식 클래스의 추가 작업만으로 엔진 기본 동작을 대체하지 않는다.
    Super::Tick(DeltaSeconds);

    UCustomizableObjectSystem *System = UCustomizableObjectSystem::GetInstance();

    AActor *PlayerActor = bBenchmarking ? BenchmarkCamera : PlayerPawn;

    FVector2f PlayerLocation = FVector2f::Zero();
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (PlayerActor)
    {
        FVector Location = PlayerActor->GetActorLocation();
        PlayerLocation = FVector2f(Location.X, Location.Y);

        System->ClearViewCenters();
        System->AddViewCenter(PlayerActor);
    }

    FVector2f CurrentRegionCoordF = (PlayerLocation / RegionSize).RoundToVector();
    FIntVector2 CurrentRegionCoord(CurrentRegionCoordF.X, CurrentRegionCoordF.Y);

    // Destroy Regions
    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (TMap<FIntVector2, FRegionScenery>::TIterator It = RegionScenery.CreateIterator(); It; ++It)
    {
        FRegionScenery &Region = It.Value();

        const int32 DiffX = FMath::Abs(It.Key().X - CurrentRegionCoord.X);
        const int32 DiffY = FMath::Abs(It.Key().Y - CurrentRegionCoord.Y);

        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (DiffX > RegionWidthScenery || DiffY > RegionWidthScenery)
        {
            // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
            for (AActor *Scenery : Region.Scenery)
            {
                Scenery->Destroy();
            }

            It.RemoveCurrent();
        }
    }

    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (TMap<FIntVector2, FRegionInstance>::TIterator It = RegionInstances.CreateIterator(); It;
         ++It)
    {
        FRegionInstance &Region = It.Value();

        const int32 DiffX = FMath::Abs(It.Key().X - CurrentRegionCoord.X);
        const int32 DiffY = FMath::Abs(It.Key().Y - CurrentRegionCoord.Y);

        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (DiffX > RegionWidthInstances || DiffY > RegionWidthInstances)
        {
            // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
            for (const TObjectPtr<AInstanceActor> &Instance : Region.Instances)
            {
                Instance->Destroy();
            }

            It.RemoveCurrent();
        }
    }

    // Spawn Scenary
    IterateRegions(CurrentRegionCoord,
                   [this](const FIntVector2 RegionCoord, const int32 RegionIndex) {
                       // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
                       return SpawnScenery(RegionCoord, RegionIndex);
                   });

    // Spawn Instances
    IterateRegions(CurrentRegionCoord,
                   [this](const FIntVector2 RegionCoord, const int32 RegionIndex) {
                       // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
                       return SpawnInstances(RegionCoord, RegionIndex);
                   });

    // Stats
    InstancesTotal = 0;
    InstancesGenerated = 0;

    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (const TTuple<FIntVector2, FRegionInstance> &Pair : RegionInstances)
    {
        InstancesTotal += Pair.Value.Instances.Num();

        // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
        for (const TObjectPtr<AInstanceActor> &Instance : Pair.Value.Instances)
        {
            InstancesGenerated += Instance->CustomizableObjectInstance->HasAnySkeletalMesh();
        }
    }
}
```

<a id="source-source-mutablesample-infinite-h"></a>

### Infinite.h

```cpp
// 파일 역할: EpicFeatureLab의 Infinite 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
// 클래스=작업 종류, 객체=실제 한 개, 포인터(* 또는 TObjectPtr)=다른 객체를 가리키는 참조.
// nullptr은 대상 없음, bool은 참/거짓, TArray는 순서 있는 목록, FString은 문자열이다.
// WITH_EDITOR 구간은 에디터 빌드에서만 사용하는 코드다. 원본과의 토큰 비교 결과는 code-validation.json에 기록한다.

// Copyright Epic Games, Inc. All Rights Reserved.

#pragma once

#include "Engine/LevelScriptActor.h"

#include "Infinite.generated.h"

class UCustomizableObjectInstanceUsage;
class ASkeletalMeshActor;
class APawn;
class UCustomizableObject;
class UCustomizableObjectInstance;
class UAnimInstance;
class UAnimationSharingSetup;
class USkeleton;

// 아래 클래스 또는 구조체를 언리얼이 인식하도록 선언한다. 일반 C++ 선언에 엔진 등록 정보를 덧붙인 것이다.
UCLASS(BlueprintType)
class AInstanceActor : public AActor
{
    // 언리얼 헤더 도구가 필요한 보조 코드를 연결하는 매크로다. 함수 본문을 직접 작성하는 자리가 아니다.
    GENERATED_BODY()

  public:
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY()
    TArray<TObjectPtr<UCustomizableObjectInstanceUsage>> Usages;

    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, Category = Default)
    TObjectPtr<UCustomizableObject> CustomizableObject = nullptr;

    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, Category = Default)
    TSubclassOf<UAnimInstance> Animation = nullptr;

    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = Default)
    TObjectPtr<UCustomizableObjectInstance> CustomizableObjectInstance = nullptr;
};

// 아래 클래스 또는 구조체를 언리얼이 인식하도록 선언한다. 일반 C++ 선언에 엔진 등록 정보를 덧붙인 것이다.
USTRUCT()
struct FRegionScenery
{
    // 언리얼 헤더 도구가 필요한 보조 코드를 연결하는 매크로다. 함수 본문을 직접 작성하는 자리가 아니다.
    GENERATED_BODY()

    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY()
    TArray<TObjectPtr<AActor>> Scenery;
};

// 아래 클래스 또는 구조체를 언리얼이 인식하도록 선언한다. 일반 C++ 선언에 엔진 등록 정보를 덧붙인 것이다.
USTRUCT()
struct FRegionInstance
{
    // 언리얼 헤더 도구가 필요한 보조 코드를 연결하는 매크로다. 함수 본문을 직접 작성하는 자리가 아니다.
    GENERATED_BODY()

    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY()
    TArray<TObjectPtr<AInstanceActor>> Instances;
};

// 아래 클래스 또는 구조체를 언리얼이 인식하도록 선언한다. 일반 C++ 선언에 엔진 등록 정보를 덧붙인 것이다.
UCLASS()
class AInfinite : public ALevelScriptActor
{
    // 언리얼 헤더 도구가 필요한 보조 코드를 연결하는 매크로다. 함수 본문을 직접 작성하는 자리가 아니다.
    GENERATED_BODY()

  protected:
    // AActor interface
    virtual void BeginPlay() override;
    virtual void EndPlay(const EEndPlayReason::Type EndPlayReason) override;
    virtual void Tick(float DeltaSeconds) override;

  private:
    // Own interface
    void IterateRegions(const FIntVector2 &StartRegionCoord,
                        const TFunction<bool(FIntVector2, int32)> &VisitRegion);

    bool SpawnScenery(const FIntVector2 RegionCoord, const int32 RingIndex);

    bool SpawnInstances(const FIntVector2 RegionCoord, const int32 RingIndex);

  public:
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(BlueprintReadWrite, Category = Infinite)
    bool bBenchmarking = false;

    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = LODManagement)
    float UpdateDistance = 0.0;

    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = Infinite)
    int32 RegionWidthScenery = 3;

    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = Infinite)
    int32 RegionWidthInstances = 5;

    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = Infinite)
    int32 OccludersNum = 1;

    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = Infinite)
    int32 InstancesNum = 8;

    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(BlueprintReadOnly, Category = Stats)
    int32 InstancesTotal = 0;

    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(BlueprintReadOnly, Category = Stats)
    int32 InstancesGenerated = 0;

    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = Infinite)
    int32 MaxRegionPerTick = 1;

    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = Infinite)
    int32 MaxInstancesPerTick = 1;

    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = Infinite)
    FVector2f RegionSize;

    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = LODManagement)
    TObjectPtr<AActor> CentralActor = nullptr;

    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, Category = Infinite)
    TObjectPtr<AActor> BenchmarkCamera = nullptr;

    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, Category = Infinite)
    TObjectPtr<APawn> PlayerPawn = nullptr;

    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, Category = Infinite)
    TSubclassOf<AActor> PlaneActor = nullptr;

    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, Category = Infinite)
    TSubclassOf<AActor> OccluderActor = nullptr;

    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY(EditAnywhere, Category = Infinite)
    TArray<TSubclassOf<AInstanceActor>> InstanceActors;

  private:
    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY()
    TMap<FIntVector2, FRegionScenery> RegionScenery;

    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY()
    TMap<FIntVector2, FRegionInstance> RegionInstances;

    FRandomStream RandomStream;

    FVector OriginalOccluderSize;
};
```

<a id="source-source-mutablesample-mutablesample-build-cs"></a>

### MutableSample.Build.cs

```csharp
// .cs는 이 프로젝트에서 게임 로직이 아니라 빌드 규칙을 적는 파일이다.
// {} 안은 같은 규칙 묶음, 문자열 배열은 필요한 모듈 이름 목록이다. 원래 규칙은 유지하고 설명만 추가했다.

// Copyright Epic Games, Inc. All Rights Reserved.
// 언리얼 빌드 도구의 자료형을 사용한다. 게임 플레이 코드를 실행하는 using 문은 아니다.
using UnrealBuildTool;
// 파일·폴더 경로를 합치는 Path.Combine을 사용하기 위한 선언이다.
using System.IO;

// 빌드 도구가 읽을 규칙 클래스를 선언한다. 파일명과 클래스 이름의 관계를 유지해야 한다.
public class MutableSample : ModuleRules
{
    // 규칙 객체를 만들 때 실행할 생성자다. Target은 현재 빌드 대상의 설정을 담고 base(Target)은 부모 규칙에 그 정보를 넘긴다.
    public MutableSample(ReadOnlyTargetRules Target) : base(Target)
    {
        // 여러 소스가 함께 쓰는 사전 컴파일 헤더 방식을 지정해 반복 컴파일 부담을 줄인다.
        PCHUsage = PCHUsageMode.UseExplicitOrSharedPCHs;
        // 공개 헤더를 사용하는 쪽에도 필요한 의존 모듈을 등록한다. 이름만 적는다고 해당 플러그인의 설치 파일까지 내려받지는 않는다.
        PublicDependencyModuleNames.AddRange(new string[] { "Core", "CoreUObject", "Engine", "InputCore", "ControlRig", "RigVM", "UMG", "SlateCore" });
        // 이 모듈 내부 구현이 사용하는 엔진·플러그인 모듈 목록이다. Cloth, Mass, PCG, UAF 등을 C++에서 호출하는 데 필요하다.
        PrivateDependencyModuleNames.AddRange(new string[] {
            "CustomizableObject", "AnimationSharing", "LiveLinkInterface",
            "LiveLinkMessageBusFramework", "RenderCore", "RHI", "PhysicsCore", "Mover",
            "UAF", "AnimGen", "AnimDatabase", "Learning", "Json", "MetaHumanCharacterPalette", "MetaHumanCrowd", "ChaosClothAsset", "ChaosClothAssetEngine", "ClothingSystemRuntimeInterface", "PCG",
            "MassCore", "MassEntity", "MassSpawner", "MassCommon", "MassLOD", "MassActors", "MassRepresentation", "MassMovement", "MassCrowd", "MassSimulation", "DynamicWind", "Slate", "LevelSequence", "MovieScene", "MovieRenderPipelineCore"
        });
        // 에디터 대상일 때만 아래 개발 도구를 연결한다. 패키지 게임에 에디터 전용 코드를 넣지 않도록 구분한다.
        if (Target.bBuildEditor)
        {
            // 이 모듈 내부 구현이 사용하는 엔진·플러그인 모듈 목록이다. Cloth, Mass, PCG, UAF 등을 C++에서 호출하는 데 필요하다.
            PrivateDependencyModuleNames.AddRange(new string[] {
                "UnrealEd", "MeshDescription", "StaticMeshDescription", "SkeletalMeshDescription",
                "UAF", "UAFUncookedOnly", "RigVMDeveloper", "AssetRegistry", "MetaHumanCharacter", "MetaHumanCharacterEditor", "MeshPartition", "MeshPartitionEditor", "GeometryCore", "GeometryFramework", "ProceduralVegetation", "FileSandboxCore", "MovieRenderPipelineEditor"
            });
            // UE 5.8에서 필요한 내부 헤더 경로를 추가한다. 내부 API 의존 부분이므로 엔진을 올릴 때 이 경로와 타입부터 다시 확인한다.
            PrivateIncludePaths.Add(Path.Combine(EngineDirectory, "Plugins/Experimental/UAF/UAF/Source/UAFUncookedOnly/Internal"));
            // MeshPartition's public compiled-section header exposes this UE 5.8 internal type.
            // UE 5.8에서 필요한 내부 헤더 경로를 추가한다. 내부 API 의존 부분이므로 엔진을 올릴 때 이 경로와 타입부터 다시 확인한다.
            PrivateIncludePaths.Add(Path.Combine(EngineDirectory, "Source/Runtime/Engine/Internal"));
        }
    }
}
```

<a id="source-source-mutablesample-mutablesamplecustomizableactor-cpp"></a>

### MutableSampleCustomizableActor.cpp

```cpp
// 파일 역할: EpicFeatureLab의 MutableSampleCustomizableActor 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
// 클래스=작업 종류, 객체=실제 한 개, 포인터(* 또는 TObjectPtr)=다른 객체를 가리키는 참조.
// nullptr은 대상 없음, bool은 참/거짓, TArray는 순서 있는 목록, FString은 문자열이다.
// WITH_EDITOR 구간은 에디터 빌드에서만 사용하는 코드다. 원본과의 토큰 비교 결과는 code-validation.json에 기록한다.

// Copyright Epic Games, Inc. All Rights Reserved.

#include "MutableSampleCustomizableActor.h"
#include "MuCO/CustomizableObject.h"
#include "MuCO/CustomizableObjectInstance.h"
#include "MuCO/CustomizableSkeletalComponent.h"

#include "Components/SkeletalMeshComponent.h"

// 【함수 역할】입력이나 현재 선택값을 실제 객체의 상태에 반영한다. 값 저장과 화면·물리·애니메이션 갱신 호출을 함께 읽는다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AMutableSampleCustomizableActor::SetAlternateVisualizationMaterial(
    UMaterialInterface *InAlternateVisualizationMaterial)
{
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!InAlternateVisualizationMaterial)
    {
        return;
    }

    AlternateVisualizationMaterial = InAlternateVisualizationMaterial;
}

// 【함수 역할】이름은 EnableAlternateVisualizationMaterial이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AMutableSampleCustomizableActor::EnableAlternateVisualizationMaterial(
    bool bEnableAlternateVisualizationMaterial)
{
    bRemoveAlternateVisualizationMaterial =
        bAlternateVisualizationMaterialEnabled && !bEnableAlternateVisualizationMaterial;
    bAlternateVisualizationMaterialEnabled = bEnableAlternateVisualizationMaterial;

    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (UCustomizableObjectInstance *COInstance = GetInstance())
    {
        // Bind Instance Update delegate to Actor
        COInstance->UpdatedDelegate.AddUniqueDynamic(
            this, &AMutableSampleCustomizableActor::SwitchComponentMaterials);
        SwitchComponentMaterials(COInstance);
    }
}

// 【함수 역할】이후 작업에 사용할 객체나 값을 찾는다. 찾지 못했을 때 빈 참조가 반환될 수 있으므로 호출하는 쪽의 검사도 필요하다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
TArray<USkeletalMeshComponent *> AMutableSampleCustomizableActor::GetActorSkeletalMeshComponents()
{
    TArray<USkeletalMeshComponent *> Components;
    GetComponents(USkeletalMeshComponent::StaticClass(), Components);

    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return MoveTemp(Components);
}

TArray<UCustomizableSkeletalComponent *> AMutableSampleCustomizableActor::
    GetActorCustomizableMeshComponents()
{
    TArray<UCustomizableSkeletalComponent *> Components;
    GetComponents(UCustomizableSkeletalComponent::StaticClass(), Components);

    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return MoveTemp(Components);
}

// 【함수 역할】이름은 SwitchComponentMaterials이다. 아래의 입력 인자, 상태 변경, return을 순서대로 읽는다. 호출 목록 주석은 이 함수가 실제로 연결하는 작업을 보여 준다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
void AMutableSampleCustomizableActor::SwitchComponentMaterials(
    UCustomizableObjectInstance *Instance)
{
    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (!AlternateVisualizationMaterial)
    {
        return;
    }

    // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
    if (bAlternateVisualizationMaterialEnabled || bRemoveAlternateVisualizationMaterial)
    {
        UCustomizableObjectInstance *COInstance = GetInstance();

        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (!COInstance)
        {
            return;
        }

        // TArray<USkeletalMeshComponent*> ActorSkeletalMeshComponents =
        // GetActorSkeletalMeshComponents();
        TArray<FName> ComponentNames = COInstance->GetComponentNames();
        TArray<TObjectPtr<USkeletalMeshComponent>> ActorSkeletalMeshComponents;

        // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
        for (const FName &ComponentName : ComponentNames)
        {
            ActorSkeletalMeshComponents.Add(GetSkeletalMeshComponent(ComponentName));
        }

        UCustomizableObjectSystem *CustomizableObjectSystem =
            UCustomizableObjectSystem::GetInstance();
        check(CustomizableObjectSystem);

        // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
        for (int32 ObjectComponentIndex = 0;
             ObjectComponentIndex < ActorSkeletalMeshComponents.Num(); ++ObjectComponentIndex)
        {
            int32 NumMaterials =
                ActorSkeletalMeshComponents[ObjectComponentIndex]->GetNumMaterials();

            // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
            if (bAlternateVisualizationMaterialEnabled)
            {
                // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
                for (int32 MatIndex = 0; MatIndex < NumMaterials; ++MatIndex)
                {
                    ActorSkeletalMeshComponents[ObjectComponentIndex]->SetMaterial(
                        MatIndex, AlternateVisualizationMaterial);
                }
            }
            else // Remove AlternateVisualizationMaterial
            {
                // check if original materials already overriden
                const TArray<UMaterialInterface *> OverrideMaterials =
                    COInstance->GetSkeletalMeshComponentOverrideMaterials(
                        ActorSkeletalMeshComponents[ObjectComponentIndex]->GetFName());

                // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
                if (OverrideMaterials.Num() > 0)
                {
                    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
                    for (int32 MatIndex = 0; MatIndex < OverrideMaterials.Num(); ++MatIndex)
                    {
                        ActorSkeletalMeshComponents[ObjectComponentIndex]->SetMaterial(
                            MatIndex, OverrideMaterials[MatIndex]);
                    }
                }
                else
                {
                    ActorSkeletalMeshComponents[ObjectComponentIndex]->EmptyOverrideMaterials();
                }

                bRemoveAlternateVisualizationMaterial = false;
            }
        }
    }
}

// 【함수 역할】이후 작업에 사용할 객체나 값을 찾는다. 찾지 못했을 때 빈 참조가 반환될 수 있으므로 호출하는 쪽의 검사도 필요하다.
// 【입력 읽기】괄호 안의 자료형은 값의 종류, 그 뒤 이름은 함수 안에서 사용할 이름이다. void 반환형이면 별도 결과값을 돌려주지 않는다.
UCustomizableObjectInstance *AMutableSampleCustomizableActor::GetInstance()
{
    TArray<UCustomizableSkeletalComponent *> ActorCustomizableSkeletalComponents =
        GetActorCustomizableMeshComponents();

    // 괄호에 적힌 대상들을 순서대로 처리한다. 반복 횟수와 실제 생성·검사 대상이 무엇인지 함께 본다.
    for (const UCustomizableSkeletalComponent *Component : ActorCustomizableSkeletalComponents)
    {
        // 괄호 조건이 참일 때만 다음 작업을 한다. 객체가 있는지 검사하는 조건은 없는 대상을 호출하지 않기 위한 것이다.
        if (UCustomizableObjectInstance *COInstance = Component->GetCustomizableObjectInstance())
        {
            // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
            return COInstance;
        }
    }

    // 이 함수의 결과를 호출한 곳으로 돌려준다. 중간 return이면 아래 작업은 실행하지 않는다.
    return nullptr;
}
```

<a id="source-source-mutablesample-mutablesamplecustomizableactor-h"></a>

### MutableSampleCustomizableActor.h

```cpp
// 파일 역할: EpicFeatureLab의 MutableSampleCustomizableActor 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
// 클래스=작업 종류, 객체=실제 한 개, 포인터(* 또는 TObjectPtr)=다른 객체를 가리키는 참조.
// nullptr은 대상 없음, bool은 참/거짓, TArray는 순서 있는 목록, FString은 문자열이다.
// WITH_EDITOR 구간은 에디터 빌드에서만 사용하는 코드다. 원본과의 토큰 비교 결과는 code-validation.json에 기록한다.

// Copyright Epic Games, Inc. All Rights Reserved.

#pragma once

#include "MuCO/CustomizableSkeletalMeshActor.h"

#include "MutableSampleCustomizableActor.generated.h"

// 아래 클래스 또는 구조체를 언리얼이 인식하도록 선언한다. 일반 C++ 선언에 엔진 등록 정보를 덧붙인 것이다.
UCLASS(MinimalAPI, ClassGroup = CustomizableObject, Blueprintable, ComponentWrapperClass,
       ConversionRoot, meta = (ChildCanTick))
class AMutableSampleCustomizableActor : public ACustomizableSkeletalMeshActor
{
    // 언리얼 헤더 도구가 필요한 보조 코드를 연결하는 매크로다. 함수 본문을 직접 작성하는 자리가 아니다.
    GENERATED_BODY()

    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = MutableSampleCustomizableActor)
    void SetAlternateVisualizationMaterial(UMaterialInterface *InAlternateVisualizationMaterial);

    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION(BlueprintCallable, Category = MutableSampleCustomizableActor)
    void EnableAlternateVisualizationMaterial(bool bEnableAlternateVisualizationMaterial);

    // 아래 함수를 언리얼의 리플렉션 시스템에 노출한다. BlueprintCallable이면 블루프린트에서도 호출할 수 있다.
    UFUNCTION()
    void SwitchComponentMaterials(UCustomizableObjectInstance *Instance);

    /** @return the instance represented in all the actor components. */
    UCustomizableObjectInstance *GetInstance();

    TArray<USkeletalMeshComponent *> GetActorSkeletalMeshComponents();
    TArray<UCustomizableSkeletalComponent *> GetActorCustomizableMeshComponents();

    // 이 멤버를 언리얼의 속성 시스템에 등록한다. 괄호의 편집·블루프린트 노출 옵션은 아래 변수의 사용 범위를 정한다.
    UPROPERTY()
    TObjectPtr<UMaterialInterface> AlternateVisualizationMaterial;

    bool bAlternateVisualizationMaterialEnabled = false;
    bool bRemoveAlternateVisualizationMaterial = false;
};
```

<a id="source-source-mutablesample-mutablesamplegamemodebase-cpp"></a>

### MutableSampleGameModeBase.cpp

```cpp
// 파일 역할: EpicFeatureLab의 MutableSampleGameModeBase 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
// 클래스=작업 종류, 객체=실제 한 개, 포인터(* 또는 TObjectPtr)=다른 객체를 가리키는 참조.
// nullptr은 대상 없음, bool은 참/거짓, TArray는 순서 있는 목록, FString은 문자열이다.
// WITH_EDITOR 구간은 에디터 빌드에서만 사용하는 코드다. 원본과의 토큰 비교 결과는 code-validation.json에 기록한다.

// Copyright Epic Games, Inc. All Rights Reserved.

#include "MutableSampleGameModeBase.h"
```

<a id="source-source-mutablesample-mutablesamplegamemodebase-h"></a>

### MutableSampleGameModeBase.h

```cpp
// 파일 역할: EpicFeatureLab의 MutableSampleGameModeBase 작업. 파일 이름만 보고 실행하지 말고 아래 경로와 API 호출을 먼저 확인한다.
// 클래스=작업 종류, 객체=실제 한 개, 포인터(* 또는 TObjectPtr)=다른 객체를 가리키는 참조.
// nullptr은 대상 없음, bool은 참/거짓, TArray는 순서 있는 목록, FString은 문자열이다.
// WITH_EDITOR 구간은 에디터 빌드에서만 사용하는 코드다. 원본과의 토큰 비교 결과는 code-validation.json에 기록한다.

// Copyright Epic Games, Inc. All Rights Reserved.

#pragma once

#include "CoreMinimal.h"
#include "GameFramework/GameModeBase.h"

#include "MutableSampleGameModeBase.generated.h"

/**
 *
 */
// 아래 클래스 또는 구조체를 언리얼이 인식하도록 선언한다. 일반 C++ 선언에 엔진 등록 정보를 덧붙인 것이다.
UCLASS()
class MUTABLESAMPLE_API AMutableSampleGameModeBase : public AGameModeBase
{
    // 언리얼 헤더 도구가 필요한 보조 코드를 연결하는 매크로다. 함수 본문을 직접 작성하는 자리가 아니다.
    GENERATED_BODY()
};
```


<a id="source-bp-labcrowdgamemode-eventgraph-blueprint-dsl-txt"></a>

### BP_LabCrowdGameMode.EventGraph.blueprint-dsl.txt

```text
(event EventBeginPlay)

(event EventTick (DeltaSeconds))
```


<a id="source-bp-labcrowdgamemode-userconstructionscript-blueprint-dsl-txt"></a>

### BP_LabCrowdGameMode.UserConstructionScript.blueprint-dsl.txt

```text
(fn ConstructionScript ())
```


<a id="source-bp-labviewergamemode-eventgraph-blueprint-dsl-txt"></a>

### BP_LabViewerGameMode.EventGraph.blueprint-dsl.txt

```text
(event EventBeginPlay)

(event EventTick (DeltaSeconds))
```


<a id="source-bp-labviewergamemode-userconstructionscript-blueprint-dsl-txt"></a>

### BP_LabViewerGameMode.UserConstructionScript.blueprint-dsl.txt

```text
(fn ConstructionScript ())
```


<a id="source-gamemode-md"></a>

### GameMode-전체그래프.md


현재 에셋을 Unreal MCP의 read_graph_dsl로 읽은 전체 내용이다. 두 Blueprint 모두 별도 동작 실행선이 없으며, 이벤트 노드를 그려 놓았다는 이유로 구현이라고 소개하지 않는다. 실제 C++ 부모와 실험 액터의 처리를 본문에서 읽는다.

| 내보낸 표현 | 뜻 |
|---|---|
| `(event EventBeginPlay)` | 게임 시작 이벤트 노드. 뒤에 연결한 처리 없음. |
| `(event EventTick (DeltaSeconds))` | 매 프레임 이벤트 노드. DeltaSeconds는 이전 프레임 이후 시간. 뒤에 연결한 처리 없음. |
| `(fn ConstructionScript ())` | 생성·편집 시 구성 스크립트 함수. 이 파일에는 추가 본문 없음. |

텍스트는 노드 로직을 읽기 위한 DSL이며 UObject의 모든 메타데이터를 대신하는 파일은 아니다. 전체 에셋 사본은 직접제작에셋에 있다.

- [BP_LabViewerGameMode.EventGraph](#source-bp-labviewergamemode-eventgraph-blueprint-dsl-txt)
- [BP_LabCrowdGameMode.EventGraph](#source-bp-labcrowdgamemode-eventgraph-blueprint-dsl-txt)
- [BP_LabViewerGameMode.UserConstructionScript](#source-bp-labviewergamemode-userconstructionscript-blueprint-dsl-txt)
- [BP_LabCrowdGameMode.UserConstructionScript](#source-bp-labcrowdgamemode-userconstructionscript-blueprint-dsl-txt)

