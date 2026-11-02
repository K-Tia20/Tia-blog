
> **한 줄 요약:** 규칙을 정해 나무·바위 등 환경 물체를 자동으로 생성·배치  
> **핵심 장면:** 넓은 땅에 나무와 돌을 한번에 배치  
> **기준 버전:** Unreal Engine 5.8 (2026년 11월 기준)

## 1. PCG은 무엇인가요?

숲을 만들 때 나무 500그루를 손으로 심는 대신, 「어디에 얼마나 촘촘하게 배치할지」 규칙을 만드는 방식입니다. PCG는 샘플링한 위치에 점을 만들고 각 점에 에셋을 생성합니다.

숲 전체를 직접 배치하기보다 “평평한 곳에 나무를 흩뿌리고 일정 거리만큼 띄운다”라는 규칙을 만들어 결과를 생성합니다. 규칙 하나만 바꿔도 넓은 지역을 다시 구성할 수 있습니다.

### 알아두면 쉬운 용어

- **그래프:** 노드를 선으로 이어 동작 규칙을 만드는 구조
- **시드(Seed):** 랜덤 배치 결과를 재현하는 숫자

## 2. 어떻게 활용할 수 있나요?

대표적으로 **숲·도시 소품·길가 돌·자연 생태계** 같은 작업에 활용됩니다.

오픈 월드 길가에는 나무가 적고 언덕 위에는 나무가 많은 배치 규칙을 만들면 한 번에 자연스러운 환경을 제작할 수 있습니다.

## 3. 실제 기술 화면과 참고 이미지

![PCG 실제 기술 시연 참고 이미지](https://img.edc-cdn.net/imgproxy/_joVxV2uWTPL-PdRkEXLUoLPpe5hvNhS5jf62hsynTY/filename%3Apcg-graph-editor.png/resizing_type%3Afit/width%3A0/height%3A0/aHR0cHM6Ly9kMWl2N2RiNDR5aGd4bi5jbG91ZGZyb250Lm5ldC9kb2N1bWVudGF0aW9uL2ltYWdlcy82YjY5YjI3Yy0xNWUxLTQ2NjEtYmM5OS1kOWE2Mjg0ZjVmNTMvcGNnLWdyYXBoLWVkaXRvci5wbmc)

*이미지 설명: Epic 공식 PCG 그래프 에디터 화면.*

원본·기술 설명: [PCG 에픽게임즈 공식 문서](https://dev.epicgames.com/documentation/unreal-engine/procedural-content-generation-framework-in-unreal-engine)

> **이미지 이용 안내:** 위 사진은 공개된 제품·에디터 화면의 외부 이미지 링크입니다. 일부는 에픽 공식 자료가 아닌 외부 출처이며, 블로그 플랫폼에서 표시되지 않을 수 있습니다. 게시 전 이미지 링크와 사용 권한을 확인하고, 가능하면 직접 촬영한 에디터 스크린샷으로 교체하세요.

## 4. 언리얼 엔진에서 직접 만들어 보기

**이번에 만들 결과:** 넓은 땅에 나무와 돌을 한번에 배치.

**준비물:** Epic Games Launcher, Unreal Engine 5.8, 저장 공간이 충분한 테스트 프로젝트, 기술에 맞는 기본 메시 또는 샘플 에셋.

### 단계별 진행

1. **편집 → 플러그인**에서 `Procedural Content Generation Framework` 또는 `PCG`를 확인하고 필요한 경우 활성화합니다.
2. 바닥용 Landscape 또는 넓은 Static Mesh를 준비하고 나무·바위 메시도 준비합니다.
3. 콘텐츠 브라우저에서 **PCG Graph** 에셋을 새로 만듭니다.
4. 레벨에 **PCG Volume**을 배치하고 바닥 위를 덮도록 크기를 조절합니다.
5. PCG Volume에 **PCG Component** 또는 PCG Graph 연결 항목이 표시되는지 확인하고 만든 그래프를 지정합니다.
6. 그래프에서 **Get Landscape Data / World Ray Hit Query / Surface Sampler**처럼 배치 표면에서 점을 얻는 입력을 구성합니다. 사용하는 지형 종류에 맞는 노드를 선택합니다.
7. 점 데이터를 **Transform Points**로 보내 회전·크기 랜덤을 적용합니다.
8. **Static Mesh Spawner**에서 나무 메시를 지정하고 최종 출력에 연결합니다.
9. Generate를 실행하거나 자동 생성 결과를 확인하고 점의 밀도·랜덤 시드를 바꿔 재생성합니다.
10. 바위용 분기를 추가하되 식생과 겹치지 않도록 필터를 두고 결과를 비교합니다.

### 진행 중 무엇이 달라지는지 확인해 보세요

PCG Volume 범위와 그래프의 점 밀도를 바꿔 보면서 나무 개수가 실제로 변하는지 확인합니다.

## 5. 완성 결과 확인하기

다음 항목을 확인하면 **PCG**이 제대로 적용됐는지 판단하는 데 도움이 됩니다.

- [ ] PCG Volume이 바닥을 충분히 덮는가?
- [ ] 그래프의 점 데이터가 Static Mesh Spawner까지 연결되는가?
- [ ] 밀도 또는 랜덤 시드를 바꾸면 배치가 갱신되는가?

## 6. 자주 막히는 부분과 해결 방법

**Q. 나무가 한 그루도 안 나와요**

볼륨 크기, 표면 샘플링 노드, 메시 지정과 Generate 실행 여부를 확인합니다.

**Q. 나무가 공중에 떠요**

표면 프로젝션과 레이캐스트 설정, 오프셋을 확인합니다.

**Q. 너무 촘촘해요**

샘플링 밀도와 스케일 범위를 낮춥니다.

## 7. 화면별 이미지 구성 예시

블로그에 실제 실습 화면을 넣는다면 아래 순서가 자연스럽습니다.

1. **사진 1 — 빈 지형과 PCG Volume**
2. **사진 2 — PCG Graph 노드 연결**
3. **사진 3 — 소수 나무 생성 결과**
4. **사진 4 — 밀도 변경 후 숲 결과**

각 사진 아래에는 “어떤 메뉴를 눌렀고, 화면에서 무엇이 달라졌는지”를 한두 문장으로 적으면 처음 보는 분도 훨씬 쉽게 따라올 수 있습니다.

## 8. 마지막으로 알아둘 점

초보자에게 가장 중요한 구분은 **PVE가 나무 모양을 만드는 도구**, **PCG가 나무를 배치하는 도구**라는 것입니다. PCG 그래프의 노드 이름과 입력 방식은 프로젝트 구성에 따라 조금씩 다릅니다.

정리하면 **PCG**은(는) 규칙을 정해 나무·바위 등 환경 물체를 자동으로 생성·배치 기술입니다. 처음에는 모든 옵션을 이해하려고 하기보다 하나의 작은 장면에서 변화를 확인하는 것이 중요합니다.

---

### 참고 자료

- [Epic Games — PCG 공식 설명 및 사용법](https://dev.epicgames.com/documentation/unreal-engine/procedural-content-generation-framework-in-unreal-engine)
- [Epic Games — 언리얼 엔진 5.8 릴리스 노트](https://dev.epicgames.com/documentation/unreal-engine/unreal-engine-5-8-release-notes)

*작성 기준: 2026년 11월 / Unreal Engine 5.8. 본문은 공식 자료를 바탕으로 정리한 학습용 가이드입니다. 작성자의 실습 완료나 직접 촬영을 뜻하지 않으며 메뉴·플러그인 구성은 프로젝트에 따라 달라질 수 있습니다.*
