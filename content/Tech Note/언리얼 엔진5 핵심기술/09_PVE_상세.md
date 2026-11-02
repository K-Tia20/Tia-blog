
> **한 줄 요약:** 나무와 잎을 규칙에 따라 직접 생성하는 식생 편집기  
> **핵심 장면:** 나뭇가지가 뻗고 잎이 달리는 나무 제작  
> **기준 버전:** Unreal Engine 5.8 (2026년 11월 기준)

## 1. PVE은 무엇인가요?

PVE는 나무를 단순히 맵에 심는 것이 아니라, **줄기와 가지가 자라는 규칙**부터 설계해 식물 에셋 자체를 만듭니다. 5.8의 핵심은 Grower 노드를 이용한 성장 계산입니다.

PCG가 “나무를 어디에 심을까?”라는 질문에 가깝다면, PVE는 “나무 줄기와 가지가 어떤 모양으로 자랄까?”를 다룹니다.

### 알아두면 쉬운 용어

- **Grower:** 나무나 식물의 가지가 자라는 구조를 생성하는 노드
- **Export:** 그래프 결과를 실제 사용 가능한 에셋으로 내보내는 과정

## 2. 어떻게 활용할 수 있나요?

대표적으로 **숲의 나무·관목·판타지 식물** 같은 작업에 활용됩니다.

굽은 나무, 커다란 왕관 모양의 수관, 바위를 피해 자란 가지 등을 규칙과 편집으로 표현할 수 있습니다.

## 3. 실제 기술 화면과 참고 이미지

![PVE 실제 기술 시연 참고 이미지](https://img.edc-cdn.net/imgproxy/mJcCoPYdsNJ8qsbP-fXPhRSU_CWDfsf9eQAW4T1C5R8/filename%3Athumbnail.jpg/resizing_type%3Afill/width%3A800/height%3A422/aHR0cHM6Ly9kMWl2N2RiNDR5aGd4bi5jbG91ZGZyb250Lm5ldC92aWRlby90aHVtYm5haWxzLzRiMDAyYmJmLTJlMGItNDQ2NS1iZGRkLWNhYzQyMjIyZjM5MS90aHVtYm5haWwuanBn)

*이미지 설명: Epic 공식 PVE 소개에 나타난 식생 그래프(5.7 이미지, 5.8 UI와 다를 수 있음).*

원본·기술 설명: [PVE 에픽게임즈 공식 문서](https://dev.epicgames.com/documentation/unreal-engine/procedural-vegetation-editor-pve-in-unreal-engine)

> **이미지 이용 안내:** 위 사진은 공개된 제품·에디터 화면의 외부 이미지 링크입니다. 일부는 에픽 공식 자료가 아닌 외부 출처이며, 블로그 플랫폼에서 표시되지 않을 수 있습니다. 게시 전 이미지 링크와 사용 권한을 확인하고, 가능하면 직접 촬영한 에디터 스크린샷으로 교체하세요.

## 4. 언리얼 엔진에서 직접 만들어 보기

**이번에 만들 결과:** 나뭇가지가 뻗고 잎이 달리는 나무 제작.

**준비물:** Epic Games Launcher, Unreal Engine 5.8, 저장 공간이 충분한 테스트 프로젝트, 기술에 맞는 기본 메시 또는 샘플 에셋.

> ⚠️ **실험 기능:** 이 기술은 UE 5.8에서 Experimental 단계입니다. 프로젝트 백업을 만든 뒤 테스트 프로젝트에서 실습하는 것을 권장합니다.

### 단계별 진행

1. UE 5.8 테스트 프로젝트를 만들고 **Edit → Plugins**에서 **Procedural Vegetation Editor**를 활성화한 뒤 재시작합니다.
2. 콘텐츠 브라우저 빈 곳에서 **Foliage → Procedural Vegetation → Procedural Vegetation Graph**를 생성합니다.
3. 처음에는 제공되는 샘플 그래프를 선택하거나 새 그래프를 열어 기본 노드 흐름을 이해합니다.
4. **Grower** 노드를 추가하고 줄기와 가지가 성장하는 규칙을 설정합니다.
5. **Cycles**, 분기 각도(Phyllotaxy), 길이와 성장 확률 등을 조금씩 변경하며 형태를 확인합니다.
6. 필요에 따라 **Manual Edit**로 가지를 다듬고, **Mesh Builder**로 줄기·가지 메시를 만듭니다.
7. **Foliage Palette / Foliage Distributor**로 잎 에셋을 배치합니다.
8. **Export** 노드 또는 공식 베이크 흐름으로 실제 렌더링 가능한 에셋을 생성합니다. **그래프 출력 자체를 월드에 바로 드래그하지 않습니다.**
9. 익스포트된 식생 에셋을 레벨에 놓고 Nanite 및 바람 관련 동작을 확인합니다.

### 진행 중 무엇이 달라지는지 확인해 보세요

Grower 설정을 조절해 가지 수가 적은 나무와 가지가 풍성한 나무를 비교합니다. 최종 결과는 Export된 에셋을 레벨에 배치해 확인합니다.

## 5. 완성 결과 확인하기

다음 항목을 확인하면 **PVE**이 제대로 적용됐는지 판단하는 데 도움이 됩니다.

- [ ] PVE 그래프에 Grower·Mesh Builder·Foliage 노드가 연결됐는가?
- [ ] 가지 구조가 미리보기에서 바뀌는가?
- [ ] Export한 에셋이 레벨에서 정상 렌더링되는가?

## 6. 자주 막히는 부분과 해결 방법

**Q. 5.7 튜토리얼 예제를 열 수 없어요**

PVE 5.7 에셋은 5.8과 호환되지 않는다고 공식 문서가 안내합니다.

**Q. 그래프가 보이는데 레벨에 넣을 수 없어요**

그래프 자체가 아니라 Export로 생성한 렌더링 에셋을 배치합니다.

**Q. 잎이 보이지 않아요**

Foliage Palette/Distributor 연결과 출력 설정을 확인합니다.

## 7. 화면별 이미지 구성 예시

블로그에 실제 실습 화면을 넣는다면 아래 순서가 자연스럽습니다.

1. **사진 1 — 실험 플러그인 활성화**
2. **사진 2 — Grower 기반 그래프**
3. **사진 3 — 줄기/가지 미리보기**
4. **사진 4 — 잎이 적용된 최종 나무**

각 사진 아래에는 “어떤 메뉴를 눌렀고, 화면에서 무엇이 달라졌는지”를 한두 문장으로 적으면 처음 보는 분도 훨씬 쉽게 따라올 수 있습니다.

## 8. 마지막으로 알아둘 점

PVE는 5.8에서도 **실험 단계**입니다. **5.7의 PVE 에셋은 5.8과 호환되지 않는다**는 공식 경고가 있으므로, 5.7 튜토리얼의 프리셋 로더를 그대로 따라 하지 마세요.

정리하면 **PVE**은(는) 나무와 잎을 규칙에 따라 직접 생성하는 식생 편집기 기술입니다. 처음에는 모든 옵션을 이해하려고 하기보다 하나의 작은 장면에서 변화를 확인하는 것이 중요합니다.

---

### 참고 자료

- [Epic Games — PVE 공식 설명 및 사용법](https://dev.epicgames.com/documentation/unreal-engine/procedural-vegetation-editor-pve-in-unreal-engine)
- [Epic Games — 언리얼 엔진 5.8 릴리스 노트](https://dev.epicgames.com/documentation/unreal-engine/unreal-engine-5-8-release-notes)

*작성 기준: 2026년 11월 / Unreal Engine 5.8. 본문은 공식 자료를 바탕으로 정리한 학습용 가이드입니다. 작성자의 실습 완료나 직접 촬영을 뜻하지 않으며 메뉴·플러그인 구성은 프로젝트에 따라 달라질 수 있습니다.*
