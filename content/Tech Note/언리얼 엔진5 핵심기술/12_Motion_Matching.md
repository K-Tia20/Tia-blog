
> **한 줄 요약:** 움직임 상황과 잘 맞는 애니메이션 포즈를 데이터베이스에서 선택  
> **핵심 장면:** 걷다가 급회전할 때 어울리는 동작을 자동 선택  
> **기준 버전:** Unreal Engine 5.8 (2026년 11월 기준)

## 1. Motion Matching은 무엇인가요?

캐릭터가 앞으로 뛰다가 왼쪽으로 꺾을 때, 미리 정한 단순 전환만 하는 대신 현재 자세와 앞으로 가려는 방향을 비교해 가장 적합한 움직임을 찾습니다. 좋은 애니메이션 데이터가 준비돼 있을수록 선택의 폭이 넓어집니다.

달리기 애니메이션 하나를 계속 반복하는 대신 현재 자세와 앞으로의 움직임을 분석해 알맞은 포즈를 찾아냅니다. 자연스러운 이동을 위해 충분한 원본 애니메이션이 중요합니다.

### 알아두면 쉬운 용어

- **Pose Search:** 동작 데이터베이스에서 적절한 포즈를 검색하는 기술
- **Trajectory:** 캐릭터의 이동 경로와 앞으로 갈 방향 정보

## 2. 어떻게 활용할 수 있나요?

대표적으로 **3인칭 액션·달리기·방향 전환** 같은 작업에 활용됩니다.

캐릭터가 빠르게 뛰다가 뒤로 돌아설 때 미끄러지는 듯한 동작을 줄이기 위해 여러 방향 전환 애니메이션 중 맞는 포즈를 선택할 수 있습니다.

## 3. 실제 기술 화면과 참고 이미지

![Motion Matching 실제 기술 시연 참고 이미지](https://media.fab.com/image_previews/gallery_images/fa7f3864-444b-443b-ba27-980bc4ddc34c/5231ccb3-c17b-4bbe-ab93-570fd08bada8.png)

*이미지 설명: Epic의 Game Animation Sample 실제 시연 이미지.*

원본·기술 설명: [Motion Matching 에픽게임즈 공식 문서](https://dev.epicgames.com/documentation/unreal-engine/motion-matching-in-unreal-engine)

> **이미지 이용 안내:** 위 사진은 공개된 제품·에디터 화면의 외부 이미지 링크입니다. 일부는 에픽 공식 자료가 아닌 외부 출처이며, 블로그 플랫폼에서 표시되지 않을 수 있습니다. 게시 전 이미지 링크와 사용 권한을 확인하고, 가능하면 직접 촬영한 에디터 스크린샷으로 교체하세요.

## 4. 언리얼 엔진에서 직접 만들어 보기

**이번에 만들 결과:** 걷다가 급회전할 때 어울리는 동작을 자동 선택.

**준비물:** Epic Games Launcher, Unreal Engine 5.8, 저장 공간이 충분한 테스트 프로젝트, 기술에 맞는 기본 메시 또는 샘플 에셋.

### 단계별 진행

1. 캐릭터와 걷기·달리기·회전 애니메이션이 있는 프로젝트를 준비합니다. 가장 쉬운 방법은 Epic의 **Game Animation Sample**을 참고하는 것입니다.
2. **편집 → 플러그인**에서 **Pose Search**를 활성화하고 재시작합니다.
3. 콘텐츠 브라우저에서 **Animation → Motion Matching → Pose Search Schema**를 생성하고 사용할 스켈레톤을 선택합니다.
4. Schema의 **Trajectory**와 **Pose** 채널을 확인해 어떤 정보를 비교하는지 이해합니다.
5. **Pose Search Database** 에셋을 생성하고 앞서 만든 Schema를 지정합니다.
6. 데이터베이스에 걷기·달리기·정지·회전 애니메이션을 넣습니다. 애니메이션 리타깃과 스켈레톤 호환을 확인합니다.
7. 캐릭터의 **Animation Blueprint**에서 **Motion Matching** 노드를 추가하고 데이터베이스를 연결합니다.
8. **Pose History** 노드를 거쳐 Output Pose로 연결하고 궤적 생성 등 필요한 옵션을 켭니다.
9. 컴파일 후 플레이하면서 시작·정지·급회전을 시험하고 선택된 포즈를 디버깅합니다.

### 진행 중 무엇이 달라지는지 확인해 보세요

기본적인 블렌드 전환과 Motion Matching 적용 후 급정지·급회전 장면을 같은 조작으로 비교해 봅니다.

## 5. 완성 결과 확인하기

다음 항목을 확인하면 **Motion Matching**이 제대로 적용됐는지 판단하는 데 도움이 됩니다.

- [ ] Pose Search Schema와 Database에 같은 스켈레톤의 애니메이션을 넣었는가?
- [ ] Animation Blueprint의 Motion Matching 노드가 Database와 연결됐는가?
- [ ] 시작·정지·회전의 포즈 전환이 자연스러운가?

## 6. 자주 막히는 부분과 해결 방법

**Q. 애니메이션이 끊겨요**

데이터베이스에 필요한 시작·정지·회전 애니메이션이 있는지 확인합니다.

**Q. 포즈가 엉뚱하게 선택돼요**

Schema의 Trajectory/Pose 채널과 입력 데이터를 살펴봅니다.

**Q. 준비 과정이 너무 복잡해요**

Epic Game Animation Sample로 먼저 동작을 확인하고 구성요소를 역으로 살펴봅니다.

## 7. 화면별 이미지 구성 예시

블로그에 실제 실습 화면을 넣는다면 아래 순서가 자연스럽습니다.

1. **사진 1 — Game Animation Sample 캐릭터 이동**
2. **사진 2 — Pose Search Schema 설정**
3. **사진 3 — Database 애니메이션 목록**
4. **사진 4 — Animation Blueprint 노드 연결**

각 사진 아래에는 “어떤 메뉴를 눌렀고, 화면에서 무엇이 달라졌는지”를 한두 문장으로 적으면 처음 보는 분도 훨씬 쉽게 따라올 수 있습니다.

## 8. 마지막으로 알아둘 점

애니메이션이 부족하면 전환이 어색할 수 있습니다. **Motion Matching은 애니메이션을 자동으로 만들어 주는 도구가 아니라, 주어진 애니메이션 중 적절한 포즈를 찾는 시스템**입니다.

정리하면 **Motion Matching**은(는) 움직임 상황과 잘 맞는 애니메이션 포즈를 데이터베이스에서 선택 기술입니다. 처음에는 모든 옵션을 이해하려고 하기보다 하나의 작은 장면에서 변화를 확인하는 것이 중요합니다.

---

### 참고 자료

- [Epic Games — Motion Matching 공식 설명 및 사용법](https://dev.epicgames.com/documentation/unreal-engine/motion-matching-in-unreal-engine)
- [Epic Games — 언리얼 엔진 5.8 릴리스 노트](https://dev.epicgames.com/documentation/unreal-engine/unreal-engine-5-8-release-notes)

*작성 기준: 2026년 11월 / Unreal Engine 5.8. 본문은 공식 자료를 바탕으로 정리한 학습용 가이드입니다. 작성자의 실습 완료나 직접 촬영을 뜻하지 않으며 메뉴·플러그인 구성은 프로젝트에 따라 달라질 수 있습니다.*
