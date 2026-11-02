
> **한 줄 요약:** 엔진 안에서 캐릭터 뼈와 포즈를 제어하는 애니메이션 도구  
> **핵심 장면:** 팔을 들어 손을 흔드는 포즈와 동작 제작  
> **기준 버전:** Unreal Engine 5.8 (2026년 11월 기준)

## 1. Control Rig은 무엇인가요?

3D 캐릭터 안에는 관절과 뼈대가 있습니다. Control Rig는 그 뼈대에 손잡이처럼 사용할 컨트롤을 달아, 언리얼 엔진 안에서 자세를 만들고 애니메이션으로 기록하게 해 줍니다.

캐릭터의 팔과 다리를 조절하는 손잡이를 만들어 에디터 안에서 자세를 고치고 키프레임으로 움직임을 기록합니다.

### 알아두면 쉬운 용어

- **FK:** 관절을 차례로 회전해 자세를 만드는 방식
- **IK:** 손이나 발의 위치를 지정해 관절을 계산하는 방식

## 2. 어떻게 활용할 수 있나요?

대표적으로 **컷신·캐릭터 포즈·동작 보정** 같은 작업에 활용됩니다.

NPC가 인사하며 팔을 들어 손을 흔드는 2초짜리 애니메이션을 시퀀서에서 만들 수 있습니다.

## 3. 실제 기술 화면과 참고 이미지

![Control Rig 실제 기술 시연 참고 이미지](https://img.edc-cdn.net/imgproxy/ZcJMtMSnbBHrCvgGLRXP9K8BVqcJIOSrw2XAIz39_tk/filename%3Asocialmedia.png/resizing_type%3Afill/width%3A1200/height%3A630/aHR0cHM6Ly9kMWl2N2RiNDR5aGd4bi5jbG91ZGZyb250Lm5ldC9kb2N1bWVudGF0aW9uL2ltYWdlcy8xZDMzZmY1MS0zYzM0LTRhNDAtYjIxOC0xMzE3MzE1MzcxMTgvc29jaWFsbWVkaWEucG5n)

*이미지 설명: Epic 공식 Control Rig 에디터 인터페이스.*

원본·기술 설명: [Control Rig 에픽게임즈 공식 문서](https://dev.epicgames.com/documentation/unreal-engine/how-to-create-control-rigs-in-unreal-engine)

> **이미지 이용 안내:** 위 사진은 공개된 제품·에디터 화면의 외부 이미지 링크입니다. 일부는 에픽 공식 자료가 아닌 외부 출처이며, 블로그 플랫폼에서 표시되지 않을 수 있습니다. 게시 전 이미지 링크와 사용 권한을 확인하고, 가능하면 직접 촬영한 에디터 스크린샷으로 교체하세요.

## 4. 언리얼 엔진에서 직접 만들어 보기

**이번에 만들 결과:** 팔을 들어 손을 흔드는 포즈와 동작 제작.

**준비물:** Epic Games Launcher, Unreal Engine 5.8, 저장 공간이 충분한 테스트 프로젝트, 기술에 맞는 기본 메시 또는 샘플 에셋.

### 단계별 진행

1. 기본 마네킹 등 **Skeletal Mesh**가 있는 프로젝트를 준비합니다.
2. 콘텐츠 브라우저에서 스켈레탈 메시를 **우클릭 → Create → Control Rig**를 선택합니다.
3. 생성된 `..._CtrlRig` 에셋을 더블클릭해 **Control Rig Editor**를 엽니다.
4. 왼쪽 **Rig Hierarchy**에서 손·팔·다리 등 뼈의 구조를 확인합니다.
5. 간단한 테스트로 손목 또는 팔 컨트롤을 만들고, 필요한 경우 **FK/IK** 컨트롤을 설정합니다.
6. 컨트롤을 이동·회전해 팔이 자연스럽게 올라가는지 살펴봅니다.
7. 레벨에 캐릭터를 두고 **Level Sequence(Sequencer)**를 만들어 캐릭터와 Control Rig 트랙을 추가합니다.
8. 0초에는 기본 자세, 1초에는 손을 든 자세, 2초에는 손을 내린 자세로 키프레임을 기록합니다.
9. 재생 버튼으로 움직임을 확인하고 어색한 관절 회전을 수정합니다.

### 진행 중 무엇이 달라지는지 확인해 보세요

0초, 1초, 2초에 서로 다른 팔 자세를 넣은 뒤 Sequencer 타임라인을 재생해 움직임을 확인합니다.

## 5. 완성 결과 확인하기

다음 항목을 확인하면 **Control Rig**이 제대로 적용됐는지 판단하는 데 도움이 됩니다.

- [ ] Rig Hierarchy에 캐릭터의 뼈대가 표시되는가?
- [ ] 컨트롤을 움직이면 의도한 관절이 반응하는가?
- [ ] Sequencer의 키프레임으로 손 흔들기 동작이 재생되는가?

## 6. 자주 막히는 부분과 해결 방법

**Q. 컨트롤을 움직여도 팔이 움직이지 않아요**

컨트롤과 뼈 연결, Forward Solve 그래프를 확인합니다.

**Q. 관절이 이상하게 꺾여요**

FK/IK 방식과 회전축, 목표 위치를 점검합니다.

**Q. 초보자에게 리그 제작이 어려워요**

이미 완성된 샘플 Control Rig에서 포즈를 바꾸는 실습부터 시작합니다.

## 7. 화면별 이미지 구성 예시

블로그에 실제 실습 화면을 넣는다면 아래 순서가 자연스럽습니다.

1. **사진 1 — 캐릭터 스켈레탈 메시**
2. **사진 2 — Control Rig Editor와 뼈대**
3. **사진 3 — Sequencer 키프레임 화면**
4. **사진 4 — 팔을 들어 인사하는 최종 동작**

각 사진 아래에는 “어떤 메뉴를 눌렀고, 화면에서 무엇이 달라졌는지”를 한두 문장으로 적으면 처음 보는 분도 훨씬 쉽게 따라올 수 있습니다.

## 8. 마지막으로 알아둘 점

FK는 관절을 차례로 회전시키는 방식, IK는 손·발의 목표 위치를 지정해 관절을 계산하는 방식입니다. 처음에는 이미 컨트롤이 구성된 샘플 리그로 포즈를 수정하는 것이 더 쉽습니다.

정리하면 **Control Rig**은(는) 엔진 안에서 캐릭터 뼈와 포즈를 제어하는 애니메이션 도구 기술입니다. 처음에는 모든 옵션을 이해하려고 하기보다 하나의 작은 장면에서 변화를 확인하는 것이 중요합니다.

---

### 참고 자료

- [Epic Games — Control Rig 공식 설명 및 사용법](https://dev.epicgames.com/documentation/unreal-engine/how-to-create-control-rigs-in-unreal-engine)
- [Epic Games — 언리얼 엔진 5.8 릴리스 노트](https://dev.epicgames.com/documentation/unreal-engine/unreal-engine-5-8-release-notes)

*작성 기준: 2026년 11월 / Unreal Engine 5.8. 본문은 공식 자료를 바탕으로 정리한 학습용 가이드입니다. 작성자의 실습 완료나 직접 촬영을 뜻하지 않으며 메뉴·플러그인 구성은 프로젝트에 따라 달라질 수 있습니다.*
