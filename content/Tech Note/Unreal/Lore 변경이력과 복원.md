

언리얼에서 Save를 누르면 현재 상태를 파일에 남긴다. 하지만 잘못 고친 뒤 저장해 버렸을 때 며칠 전 상태를 꺼내는 기능과는 다르다. 이번에는 텍스트 코드와 큰 바이너리 에셋을 함께 관리할 로컬 Lore 저장소를 구성했다.

Lore는 이번 프로젝트에서 **에디터 밖의 도구**로 사용했다. 에디터에 존재하지 않는 Lore 버튼이나 블루프린트 노드를 만들어 설명하지 않는다. 원격 서버와 공동 작업 동기화는 검증 범위에 없다.

## 파일을 먼저 구분하기

텍스트 파일은 사람이 글자로 읽을 수 있는 코드와 설정이다. `.uasset` 같은 바이너리 파일은 에디터가 읽는 전용 자료다. 코드만 저장하고 캐릭터·재질을 빠뜨리면 같은 프로젝트 상태로 돌아오기 어렵다.

최종 복원점에는 Content의 **6,625개 파일, 12,252,113,226바이트**와 관련 소스·설정·검증 자료를 포함했다. 약 12.25GB라는 십진 용량이며, Windows에서 표시하는 GiB와는 단위가 다르다.

![실제 검증 기록에서 정리한 Lore 흐름](Tech%20Note/Unreal/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/17/workflow.svg)

**참고 — 사진과 작업에 나온 영어 이름**

| 영어 표시 | 한국어 뜻과 쓰임 |
|---|---|
| `Lore` | 프로젝트 파일의 변경 이력과 복원을 다루는 도구. |
| `stage --scan` | 변경한 파일을 찾아 이번 저장 대상에 모으기. |
| `commit / revision` | 하나의 이력으로 저장 / 저장한 이력의 번호. |
| `repository status` | 저장소의 현재 상태 확인. |
| `repository verify` | 저장소 자료의 무결성 검사. |
| `restore / compare` | 이전 상태 복원 / 내용 비교. |
| `offline / hash` | 외부 서버 없이 로컬에서 처리 / 파일 내용을 비교하는 요약값. |


*에디터 스크린샷이 아니라 이 프로젝트의 검증 기록을 옮긴 설명용 도식이다.*

## 저장소와 브랜치, 커밋 이해하기

저장소(Repository)는 변경 이력을 관리하는 자료 묶음이다. 브랜치(Branch)는 다른 실험을 따로 진행할 작업 갈래다. 커밋(Commit)은 되돌아갈 수 있도록 이름과 함께 남긴 한 시점의 기록이다.

이번에는 `codex/feature-lab-proof` 갈래에서 텍스트와 바이너리 변경을 기록하고, 복구를 확인한 뒤 main으로 돌아와 합치는 흐름을 시험했다. 이름의 codex는 이 실험에서 쓴 브랜치 이름의 일부다.

## 실행 순서를 읽는 방법

프로젝트 안의 `ExternalWorkflows/LoreRuntime/lore.exe`가 실제 도구다. [Save-FeatureLabIntegrationCheckpoint.ps1](#source-setup-save-featurelabintegrationcheckpoint-ps1)은 이 프로젝트의 보관 대상과 용량을 확인하고 다음을 실행하는 전체 스크립트다.

```text
파일 목록 검사 → 오프라인 stage → commit → 저장소 상태 조회 → 무결성 검증
```

stage는 다음 기록에 넣을 파일을 준비하는 단계다. commit은 준비한 변경을 하나의 이력으로 남긴다. 무결성 검증은 저장된 자료가 저장소 규칙에 맞는지 확인한다.

이 스크립트는 고정된 프로젝트 경로를 사용하는 원본이다. 다른 PC에서는 주석 설명본의 경로 변수를 먼저 바꿔야 한다. 파일 이름만 복사한 뒤 더블클릭하면 어느 폴더를 보관할지 자동으로 알아내는 도구가 아니다.

## 복구됐다는 것을 확인한 방법

시험용 바이너리를 바꾼 뒤 되돌리고 SHA-256 값을 비교했다. SHA-256은 내용이 같으면 같은 값이 나오는 파일 지문이다. 파일 이름과 용량이 같아도 내용이 다를 수 있어 사용했다.

원래 애니메이션 파일의 해시는 변경 전후 같았다. 브랜치 전환, 병합 후에도 저장소 무결성 검증을 통과했다. 병합은 다른 갈래의 변경을 현재 갈래에 합치는 작업이다. 이때 텍스트처럼 바이너리 에셋의 내부 내용을 사람이 줄 단위로 합칠 수 있다고 가정하지 않았다.

## 마지막 복원점과 보존한 자료

최종 통합 결과의 복원점은 **revision 16**이다. 저장소 무결성 검증도 통과했다. 이후 블로그용 캡처와 주석 자료 제작은 별도 작업이므로, ‘revision 16에 이후의 모든 블로그 파일까지 들어 있다’는 뜻은 아니다.

RealityScan과 전신 마커리스 모캡 자료의 보존 요청도 따로 기록했다. 복원점이 완성됐다는 이유로 관련 설치·입력·캐시를 삭제하지 않았다.

실제 흐름을 다시 확인하려면 프로젝트의 `Evidence/case17-lore-workflow.json`, 최종 보관 상태는 `Evidence/case17-integration-checkpoint.json`을 읽는다. 이 글의 도식은 해당 기록을 설명한 것이며 원격 백업이 생겼다는 표시는 아니다.

<!-- korean-ui-explanations -->


<a id="code-index"></a>

## 이 장면을 만든 코드

아래는 제작과 검증에 사용한 전체 코드에 한국어 주석을 더한 설명본이다. `.py`는 언리얼 에디터에서 실행하는 제작·검사 코드, `.cpp`와 `.h`는 프로젝트에 넣어 빌드하는 코드다. 파일마다 첫 주석에 역할과 입력 조건을 적었다.


<a id="source-setup-save-featurelabintegrationcheckpoint-ps1"></a>

### Save-FeatureLabIntegrationCheckpoint.ps1

```powershell
# [읽는 방법] $이름은 변수, =는 값 저장, -eq/-ne는 비교다.
# 경로 확인 → 선행 결과 검사 → 실제 명령 실행 → 종료 코드 검사 → JSON 기록 순서로 읽는다.
# |는 앞 명령의 결과를 다음 명령에 보내는 파이프다. Get-Content는 읽기, Set-Content는 파일에 쓰기다.
# 아래 실행 명령·인자·분기 순서는 원본 그대로이며 설명 줄만 추가했다.

# PowerShell 명령이 실패하면 멈추도록 정한다. 뒤의 작업이 성공한 것처럼 계속 진행되는 일을 막는다.
$ErrorActionPreference='Stop'
# 이번 작업 대상 프로젝트의 절대 경로다. 다른 PC에서는 이 경로부터 실제 위치로 바꿔야 한다.
$labRoot='C:\Users\20ori\UnrealProjects\EpicFeatureLab'
# 조건을 검사한다. throw는 현재 작업을 오류로 중단하고, exit는 스크립트 실행을 끝낸다.
if ((Resolve-Path -LiteralPath $labRoot).Path -ne $labRoot) { throw 'Unexpected project root' }
$labLore=Join-Path $labRoot 'ExternalWorkflows\LoreRuntime\lore.exe'
$labReportPath=Join-Path $labRoot 'Evidence\case17-integration-checkpoint.json'
$labLog=Join-Path $labRoot 'Evidence\case17-integration-checkpoint.log'
$labContent=Get-ChildItem -LiteralPath (Join-Path $labRoot 'Content') -Recurse -File | Measure-Object Length -Sum
# 조건을 검사한다. throw는 현재 작업을 오류로 중단하고, exit는 스크립트 실행을 끝낸다.
if ((Get-PSDrive C).Free -lt ($labContent.Sum+30GB)) { throw 'Insufficient room for the local source checkpoint' }
# 체크포인트에 포함할 프로젝트 상대 경로 목록이다. 컴퓨터의 모든 파일을 자동으로 수집하는 명령이 아니다.
$labPaths=@('Content','Config','Source','Scripts','Documentation','ExternalWorkflows/CaptureInputs','ExternalWorkflows/ClothInputs','ExternalWorkflows/DigitalHuman','EpicFeatureLab.uproject','README.md')
$labJson=Get-ChildItem -LiteralPath (Join-Path $labRoot 'Evidence') -Filter '*.json' -File | Where-Object { $_.Name -match '^(case|integration)' -and $_.Name -ne 'case17-integration-checkpoint.json' }
$labPaths+=@($labJson | ForEach-Object { 'Evidence/'+$_.Name })
$labScope=Get-Content -LiteralPath (Join-Path $labRoot 'Documentation\feature-scope.json') -Raw | ConvertFrom-Json
# 범위표에서 실제 로컬 검증 상태인 그룹 번호만 추린다. 제공 상태만 조사한 19번을 실행 구현으로 세지 않는다.
$labVerifiedGroups=@($labScope.groups | Where-Object status -eq 'verified_local_workflow' | ForEach-Object id)
# 보존 요청 상태를 읽는다. 이 파일은 삭제를 수행하는 스크립트가 아니며 보존 조건이 깨지면 중단한다.
$labHold=Get-Content -LiteralPath (Join-Path $labRoot 'Documentation\completion-actions.json') -Raw | ConvertFrom-Json
# 조건을 검사한다. throw는 현재 작업을 오류로 중단하고, exit는 스크립트 실행을 끝낸다.
if (-not $labHold.deletion_hold -or $labHold.automatic_deletion_authorized) { throw 'The preservation hold must remain active' }
# 검사·실행 결과를 묶는 보고서다. 프로그램 실행 명령과 결과 보고서를 만드는 명령은 따로 읽는다.
$labReport=[ordered]@{status='staging';offline=$true;content_files=$labContent.Count;content_bytes=$labContent.Sum;evidence_json_files=$labJson.Count;verified_groups=$labVerifiedGroups;preservation_hold_unchanged=$true;started_at=(Get-Date).ToString('o')}
$labReport | ConvertTo-Json -Depth 5 | Set-Content -LiteralPath $labReportPath -Encoding UTF8
# 현재 작업 폴더를 기억한 뒤 프로젝트 폴더로 이동한다. finally의 Pop-Location에서 원래 위치로 돌아온다.
Push-Location -LiteralPath $labRoot
# 실패할 수 있는 작업을 묶는다. 오류가 나면 catch에서 실패 정보를 적고 finally에서 정리한다.
try {
    # 로컬 Lore 명령을 오프라인으로 실행한다. stage=변경 모으기, commit=이력 저장, status=상태 확인, verify=저장소 무결성 검사다. 각각의 종료 코드를 바로 뒤에서 확인한다.
    & $labLore stage --scan @labPaths --offline -P *> $labLog
    # 바로 전에 실행한 외부 프로그램의 종료 코드를 읽는다. 0은 정상 종료이며 0이 아니면 실패 원인을 로그에서 찾아야 한다.
    if ($LASTEXITCODE -ne 0) { throw 'Lore staging failed; inspect the checkpoint log' }
    $labReport.status='committing'
    $labReport | ConvertTo-Json -Depth 5 | Set-Content -LiteralPath $labReportPath -Encoding UTF8
    # 현재 검증한 그룹 목록을 커밋 설명으로 만든다. 커밋은 복원할 기준 시점을 저장하는 작업이다.
    $labCommitMessage='Checkpoint verified Epic feature groups: '+($labVerifiedGroups -join ', ')
    # 로컬 Lore 명령을 오프라인으로 실행한다. stage=변경 모으기, commit=이력 저장, status=상태 확인, verify=저장소 무결성 검사다. 각각의 종료 코드를 바로 뒤에서 확인한다.
    & $labLore commit $labCommitMessage --offline -P *>> $labLog
    # 바로 전에 실행한 외부 프로그램의 종료 코드를 읽는다. 0은 정상 종료이며 0이 아니면 실패 원인을 로그에서 찾아야 한다.
    if ($LASTEXITCODE -ne 0) { throw 'Lore checkpoint commit failed' }
    # 로컬 Lore 명령을 오프라인으로 실행한다. stage=변경 모으기, commit=이력 저장, status=상태 확인, verify=저장소 무결성 검사다. 각각의 종료 코드를 바로 뒤에서 확인한다.
    $labReport.repository_state=(& $labLore repository status --offline -P 2>&1 | Out-String).Trim()
    # 바로 전에 실행한 외부 프로그램의 종료 코드를 읽는다. 0은 정상 종료이며 0이 아니면 실패 원인을 로그에서 찾아야 한다.
    if ($LASTEXITCODE -ne 0) { throw 'Lore status failed after checkpoint' }
    # 로컬 Lore 명령을 오프라인으로 실행한다. stage=변경 모으기, commit=이력 저장, status=상태 확인, verify=저장소 무결성 검사다. 각각의 종료 코드를 바로 뒤에서 확인한다.
    $labReport.verification=(& $labLore repository verify --offline -P 2>&1 | Out-String).Trim()
    # 바로 전에 실행한 외부 프로그램의 종료 코드를 읽는다. 0은 정상 종료이며 0이 아니면 실패 원인을 로그에서 찾아야 한다.
    if ($LASTEXITCODE -ne 0) { throw 'Lore repository verification failed' }
    $labReport.status='checkpoint_committed_verified'
# 위 작업이 실패했을 때 실행한다. 실패 원인을 보고서에 남기며 성공 상태로 덮지 않는다.
} catch {
    $labReport.status='failed'
    $labReport.error=$_.Exception.Message
# 성공과 실패 모두 마지막에 실행한다. 종료 시간과 현재 보고서 상태를 남긴다.
} finally {
    # 앞에서 기억한 작업 폴더로 복귀한다. 프로젝트 파일을 이동하는 명령이 아니다.
    Pop-Location
    $labReport.finished_at=(Get-Date).ToString('o')
    $labReport | ConvertTo-Json -Depth 5 | Set-Content -LiteralPath $labReportPath -Encoding UTF8
}
$labReport | ConvertTo-Json -Depth 5
```
