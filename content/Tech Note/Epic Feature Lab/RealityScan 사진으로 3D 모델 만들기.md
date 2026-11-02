사진 여러 장에서 같은 모양을 찾아 실제 입체 모델로 만드는 과정을 해봤다.
사진을 한 장 붙인 평면 그림과 달리, 옆으로 돌려 볼 수 있는 메시와 표면 색이 함께 나온다.

이번에는 직접 찍은 사진 대신 Epic이 공개한 Small Relief 예제 사진 14장을 썼다. 사진 정렬부터 입체 복원, 면 수 줄이기, 색 입히기, 언리얼 반입까지 연결했다. 새 게임잼 작품에 넣을 에셋을 미리 제작한 작업은 아니며, 별도 연구 프로젝트에서 처리 방식을 확인한 기록이다.

## 먼저 결과부터

![실제 복원된 텍스처 모델](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/RealityScan/03-textured-model.png)

사진 설명: RealityScan에서 실제로 복원하고 텍스처를 입힌 모델이다. 주변 벽과 울퉁불퉁한 가장자리도 남아 있다. 정리된 완제품처럼 보정하지 않고 현재 복원 상태를 담았다.

화면 용어: 3Ds는 3D 장면 보기, Component는 서로 연결된 사진 묶음, Model은 복원된 입체 모델, Color/Texture는 표면 색 또는 텍스처 표시다.

| 확인 항목 | 이번에 확인한 값 |
|---|---|
| 실행 환경 | Windows, RealityScan 2.2, Unreal Engine 5.8.4 |
| 입력 | 공식 Small Relief 예제의 JPG 14장, 각 2816×2112 |
| 언리얼용 출력 | OBJ, MTL, 색상 PNG |
| 표시용 모델 | 꼭짓점 100,001개, 삼각형 199,998개 |
| 언리얼 설정 | Nanite 사용, 텍스처 최대 크기 2048 |
| 재현 범위 | 사진 정렬·복원·단순화·텍스처·내보내기, 별도 언리얼 프로젝트 반입 |

14장은 이 예제의 입력 개수다. 어떤 물체든 14장만 있으면 된다는 뜻은 아니다. 반짝이거나 투명한 표면, 초점이 나간 사진, 서로 겹치는 부분이 적은 사진은 다른 결과가 나올 수 있다.

## 1. 프로그램과 사진 준비

1. Epic Games Launcher의 라이브러리에서 RealityScan을 실행한다. 이번 PC는 프로그램을 K:/EpicResources/Tools/RealityScan_2.2에 보관했다.
2. [공식 다운로드 페이지](https://www.realityscan.com/en-US/download)의 예제 데이터에서 Small Relief를 받는다.
3. 압축을 풀어 Images 폴더 안에 JPG 14장이 있는지 확인한다. 내려받는 압축 파일의 이름은 SmallPlastic이지만, 여기서 사용한 공식 예제는 Small Relief다.
4. 출력 전용 폴더를 따로 만든다. 사진 폴더 안에 내보낸 모델과 임시 파일을 한꺼번에 섞지 않는다.

이번 글의 예시 작업 폴더는 K:/CaptureStudy/RealityScan이다. 그 아래에 Input, Project, Exports를 만든다고 생각하면 된다. Input에는 원본 사진, Project에는 RealityScan 작업 파일, Exports에는 언리얼로 가져갈 결과물을 둔다.

RealityScan 프로젝트를 저장하면 .rsproj 파일 옆에 같은 이름의 데이터 폴더가 생긴다. 이 폴더 안의 .dat는 프로젝트의 복원 자료다. 확장자가 낯설다는 이유로 캐시처럼 지우면 안 된다.

## 2. 사진을 넣고 서로 연결하기

![RealityScan 사진 입력과 작업 화면](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/RealityScan/01-input-workflow.png)

화면 용어: WORKFLOW는 작업 흐름, Inputs는 입력 사진, ALIGNMENT는 사진 위치 맞추기, Images는 개별 이미지 추가, Folder는 폴더째 추가다.

1. 상단 WORKFLOW를 누른다.
2. Images로 사진 14장을 선택하거나 Folder로 사진이 든 폴더를 선택한다.
3. 왼쪽 Inputs에 사진이 들어왔는지 확인한다. 이번 입력은 IMG_3472부터 IMG_3485까지다.
4. Align Images를 누른다. 단축키는 F6이다.
5. 처리가 끝나면 왼쪽에 Component가 생겼는지 확인한다.

정렬은 사진의 순서를 바꾸는 기능이 아니다. 같은 무늬가 여러 사진에서 어디에 보이는지 비교해서, 사진을 찍은 카메라 위치와 물체의 대략적인 형태를 찾는 단계다.

![사진 정렬 뒤 점 구름과 구성 요소](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/RealityScan/02-alignment-pointcloud.png)

화면 용어: Component는 연결된 사진 묶음, Point Cloud는 점으로 표현한 형태, Cameras는 추정된 카메라 위치, Reconstruction Region은 입체 복원을 계산할 범위다.

이 단계의 점들은 완성된 표면이 아니다. 화면에 점이 보인다고 바로 게임용 모델이 만들어진 것은 아니다. 사진이 여러 Component로 나뉘었다면 가장 큰 묶음을 먼저 선택하고, 빠진 사진이 없는지 확인한다.

## 3. 입체 표면 만들기

1. 왼쪽에서 사용할 Component를 선택한다.
2. 복원 영역 상자를 확인한다. 주변이 너무 많이 들어오면 Reconstruction Region을 조절한다.
3. Normal Detail로 모델을 계산한다. 단축키는 F7이다.
4. 왼쪽 Component 아래에 모델이 추가되는지 확인한다.
5. 먼저 높은 해상도로 복원한 결과를 저장한다. 표시용으로 줄인 모델과 구분하려고 이번에는 High라는 이름을 붙였다.

여기서 메시라는 말이 나온다. 작은 삼각형들을 이어 붙여 만든 입체 표면이라고 생각하면 된다. 삼각형이 많으면 형태를 세밀하게 담을 수 있지만, 파일 크기와 처리 부담도 늘어난다.

## 4. 면 수 줄이고 표면 색 입히기

1. 높은 해상도의 모델을 선택한다.
2. Simplify에서 목표 삼각형 수를 200,000으로 정하고 실행한다.
3. 줄인 모델의 이름을 Display로 바꿔 원본과 구분한다.
4. Texture를 계산한다. 단축키는 F9이다.
5. 3D 보기의 VIEW 탭에서 Color/Texture를 눌러 실제 색이 보이는지 확인한다.

![실제 복원된 텍스처 모델](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/RealityScan/03-textured-model.png)

화면 용어: Simplify는 표면을 이루는 면 수 줄이기, Texture는 사진에서 가져온 표면 색, Vertices는 꼭짓점 표시, Solid는 단색 표면 표시, Color/Texture는 색이 적용된 표면 표시다.

목표를 200,000으로 줬지만 실제 결과는 199,998개였다. 목표 값과 결과가 정확히 같아야 하는 것은 아니다. 줄인 다음에는 얇은 가장자리나 튀어나온 부분이 지나치게 뭉개지지 않았는지도 함께 본다.

## 5. OBJ로 내보내기

1. 언리얼로 보낼 Display 모델을 선택한다.
2. Export에서 메시 내보내기를 선택한다.
3. OBJ 형식으로 저장한다.
4. 같은 폴더에 OBJ, MTL, 색상 PNG가 함께 생겼는지 확인한다.
5. 모델이 회색으로만 보이면 색상 PNG와 MTL이 빠지거나 서로 다른 폴더로 옮겨지지 않았는지 먼저 살펴본다.

OBJ는 입체 모양, MTL은 어떤 표면 자료를 사용할지 적힌 연결 정보, PNG는 실제 색 이미지다. 세 파일을 한 묶음으로 보관한다. 함께 만들어진 .rsInfo는 RealityScan의 내보내기 정보를 담으므로 원본 작업을 이어갈 계획이면 같이 보관한다.

## 6. 언리얼에 가져와서 확인하기

원래 EpicFeatureLab의 제외 자료를 다시 활성화하지 않고, EpicCaptureStudy라는 별도 프로젝트로 읽어 왔다. 복원 결과 원본은 이동하거나 덮어쓰지 않았다.

1. 언리얼에서 Content Browser를 열고 Study/Scan 폴더를 만든다.
2. Import를 눌러 내보낸 OBJ를 선택한다.
3. Static Mesh로 가져오고, 재질과 텍스처 가져오기를 켠다. 이번 재현 스크립트는 같은 설정을 FbxFactory로 지정했다. OBJ도 이 가져오기 경로로 처리했다.
4. 가져온 Static Mesh를 더블 클릭한다.
5. Nanite Settings에서 Enable Nanite Support를 켜고 적용한다.
6. Collision 표시를 켜서 물체를 막아 줄 단순 충돌 형상이 있는지 확인한다.
7. 텍스처를 열고 Maximum Texture Size를 2048로 제한한다. 원본 PNG 자체를 지우거나 해상도를 덮어쓴 것은 아니다.

![언리얼에서 확인한 복원 모델](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/RealityScan/04-unreal-imported-scene.png)

화면 용어: Static Mesh는 모양이 고정된 입체 에셋, Nanite는 많은 삼각형을 효율적으로 표시하는 언리얼 기능, Collision은 캐릭터나 물체가 통과하지 못하게 하는 충돌 판정, Material은 표면의 색과 빛 반응, Maximum Texture Size는 사용할 최대 텍스처 크기다.

![Static Mesh 편집기의 Nanite와 충돌 확인](Tech%20Note/Epic%20Feature%20Lab/%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC%EB%AA%A8%EC%9D%8C/RealityScan/05-static-mesh-nanite.png)

화면 용어: Details는 선택한 대상의 설정, Nanite Settings는 Nanite 사용 설정, Simple Collision은 단순한 충돌 형상, Convex Collision은 볼록한 덩어리로 만든 충돌 형상이다.

사진의 추가 용어: Nanite Enabled는 Nanite 사용 중, Nanite Triangles는 해당 메시의 삼각형 수, Nanite Vertices는 언리얼이 빌드한 꼭짓점 수, GPU Memory는 그래픽 메모리 사용 정보, Fallback은 대체 표시용 메시, UV Channels는 표면 이미지 좌표의 묶음, Num Collision Primitives는 충돌 형상 개수, Estimated Compressed Disk Size는 압축된 메시 자료의 예상 저장 크기다. 전체 프로젝트 용량을 뜻하지 않는다.

사진의 Nanite Vertices는 119,885로 나온다. 원본 OBJ의 100,001개와 다른 이유는 가져오기·빌드 과정에서 표면 좌표와 법선 경계 등에 따라 꼭짓점이 나뉠 수 있기 때문이다. 원본 파일의 꼭짓점 수와 엔진이 표시용으로 빌드한 수를 같은 값으로 보지 않는다. 별도 연구 프로젝트에서는 볼록 충돌 형상 1개를 확인했다.

불규칙한 석조 표면 전체에 정밀 충돌을 걸면 게임에서는 오히려 불편할 수 있다. 실제 작품에서 사용할 때는 플레이어가 닿을 부분과 배경으로만 보이는 부분을 나눠 생각해야 한다.

## 7. 자동 처리에 사용한 전체 명령

위의 버튼 작업은 아래 명령 파일로도 실행했다. Input, Project, Exports 경로를 본인 폴더에 맞게 바꾸고, .rscmd 파일로 저장한다. 줄마다 RealityScan에 시킬 작업 하나가 적혀 있다.

```text
# 새 프로젝트를 만든다. 기존 작업 파일을 여는 명령이 아니다.
-newScene
# 하위 폴더 안의 사진까지 함께 찾는다.
-set "appIncSubdirs=true"
-addFolder "K:/CaptureStudy/RealityScan/Input"
# 사진에서 같은 무늬를 찾아 카메라 위치를 맞춘다.
-align
# 사진이 가장 많이 연결된 묶음을 선택한다.
-selectMaximalComponent
# 입체 복원을 계산할 영역을 자동으로 정한다.
-setReconstructionRegionAuto
-save "K:/CaptureStudy/RealityScan/Project/SmallRelief.rsproj"
# 일반 해상도의 입체 표면을 만들고 원본 이름을 붙인다.
-calculateNormalModel
-renameSelectedModel "FeatureLabRelief_High"
-save
# 언리얼에 가져갈 표시용 모델의 면 수를 약 20만 개로 줄인다.
-simplify 200000
-renameSelectedModel "FeatureLabRelief_Display"
# 입력 사진에서 표면 색을 만들어 입힌다.
-calculateTexture
-save
# 모양·재질 연결·색상 이미지를 출력 폴더에 저장한다.
-exportSelectedModel "K:/CaptureStudy/RealityScan/Exports/FeatureLabRelief.obj"
-quit

```

명령을 실행할 때는 RealityScan 실행 파일에 execRSCMD와 명령 파일 경로를 전달한다. 프로그램 경로는 설치한 위치에 따라 달라진다.

```powershell
& 'K:/EpicResources/Tools/RealityScan_2.2/RealityScan.exe' -execRSCMD 'K:/CaptureStudy/RealityScan/run_scan.rscmd'
```

원본 프로젝트를 열어 둔 상태에서 같은 출력 경로로 다시 실행하지 않는다. 반복 실험은 Project와 Exports 폴더를 새로 만들어 진행한다.

## 8. 언리얼 반입에 사용한 전체 Python 코드

이 코드는 버튼 작업을 반복할 때 쓰는 방식이다. 시스템 Python이 아니라 **언리얼 안의 Python**에서 실행한다. Edit → Plugins에서 Python Editor Script Plugin과 Editor Scripting Utilities를 켜고 재시작한 뒤, Tools → Execute Python Script로 저장한 .py 파일을 선택한다.

코드 상단 SOURCE를 자신의 OBJ 경로로 바꾸면 된다. 새 프로젝트에서 실행하며, 이미 같은 이름의 Study/Scan 에셋이나 검사 맵이 있으면 중단하도록 했다. 기존 에셋을 몰래 교체하지 않기 위해서다. 다른 작업이 열려 있다면 먼저 저장한다. 코드가 새 검사 맵을 열고 바닥·모델·조명·카메라까지 배치한다.

```python
"""복원한 OBJ를 언리얼의 별도 폴더로 가져와 Nanite와 충돌을 확인한다."""
from pathlib import Path
import unreal

# 본인의 OBJ 경로로 바꾼다. MTL과 색상 PNG도 같은 폴더에 둔다.
SOURCE = Path("K:/CaptureStudy/RealityScan/Exports/FeatureLabRelief.obj")
FOLDER = "/Game/Study/Scan"
MAP = "/Game/Study/ScanInspection"
if not SOURCE.is_file():
    raise RuntimeError("OBJ 파일을 찾지 못했다. SOURCE 경로를 확인한다.")
library = unreal.EditorAssetLibrary
if library.does_directory_exist(FOLDER):
    raise RuntimeError("결과 폴더가 이미 있다. FOLDER를 새 이름으로 바꾼다.")
if library.does_asset_exist(MAP):
    raise RuntimeError("검사 맵이 이미 있다. MAP에 새 이름을 지정한다.")
library.make_directory(FOLDER)

# 한 번의 가져오기 작업에 원본 위치와 저장 위치를 지정한다.
task = unreal.AssetImportTask()
task.set_editor_property("filename", str(SOURCE))
task.set_editor_property("destination_path", FOLDER)
task.set_editor_property("automated", True)
task.set_editor_property("save", True)
task.set_editor_property("replace_existing", False)

# 이 가져오기 경로는 OBJ도 처리한다.
# 움직이는 캐릭터가 아니라 고정된 물체이므로 Static Mesh로 지정한다.
options = unreal.FbxImportUI()
options.set_editor_property("import_mesh", True)
options.set_editor_property("import_as_skeletal", False)
options.set_editor_property("import_materials", True)
options.set_editor_property("import_textures", True)
options.set_editor_property("mesh_type_to_import",
                            unreal.FBXImportType.FBXIT_STATIC_MESH)
mesh_options = options.get_editor_property("static_mesh_import_data")
mesh_options.set_editor_property("combine_meshes", True)
mesh_options.set_editor_property("auto_generate_collision", True)
task.set_editor_property("options", options)
task.set_editor_property("factory", unreal.FbxFactory())
unreal.AssetToolsHelpers.get_asset_tools().import_asset_tasks([task])

# 결과에 메시·재질·텍스처가 함께 생길 수 있어, 그중 실제 메시를 찾는다.
objects = [library.load_asset(path) for path in task.imported_object_paths]
meshes = [obj for obj in objects if isinstance(obj, unreal.StaticMesh)]
if not meshes:
    raise RuntimeError("입체 메시가 생성되지 않았다. 가져오기 로그를 확인한다.")
mesh = meshes[0]
subsystem = unreal.get_editor_subsystem(unreal.StaticMeshEditorSubsystem)

# Nanite를 켜고 다시 빌드한다. 원본 OBJ를 수정하는 작업은 아니다.
nanite = subsystem.get_nanite_settings(mesh)
nanite.set_editor_property("enabled", True)
subsystem.set_nanite_settings(mesh, nanite, True)

# 화면에서 사용할 최대 텍스처 크기를 2048로 제한한다.
# 사진 원본이나 내보낸 PNG 파일을 덮어쓰지는 않는다.
for path in library.list_assets(FOLDER, True, False):
    obj = library.load_asset(path)
    if isinstance(obj, unreal.Texture2D):
        obj.set_editor_property("max_texture_size", 2048)
    library.save_loaded_asset(obj, False)

# 단순 충돌과 볼록 충돌을 모두 세어, 이미 충돌이 있는지 확인한다.
simple = subsystem.get_simple_collision_count(mesh)
convex = subsystem.get_convex_collision_count(mesh)
if simple + convex == 0:
    # 아무 충돌도 없을 때만 26방향 평면으로 둘러싼 단순 충돌을 하나 만든다.
    subsystem.add_simple_collisions(mesh, unreal.ScriptCollisionShapeType.NDOP26)
library.save_loaded_asset(mesh, False)
unreal.log("메시: " + mesh.get_path_name())
unreal.log("Nanite 사용: " + str(subsystem.get_nanite_settings(mesh).enabled))
unreal.log("단순 충돌 수: " + str(subsystem.get_simple_collision_count(mesh)))
unreal.log("볼록 충돌 수: " + str(subsystem.get_convex_collision_count(mesh)))

# 3D 검사 장면도 만든다. 원래 열어 둔 맵에 물체를 추가하지 않는다.
# 실행하기 전 다른 맵의 개인 작업을 저장하고, 별도 실험 프로젝트에서 사용한다.
levels = unreal.get_editor_subsystem(unreal.LevelEditorSubsystem)
if not levels.new_level(MAP):
    raise RuntimeError("새 검사 맵을 만들지 못했다.")
actors = unreal.get_editor_subsystem(unreal.EditorActorSubsystem)

# 원본 모델의 단위가 무엇이든, 가장 긴 변이 220cm가 되도록 표시한다.
# 실제 물체를 정확한 크기로 측정한 결과는 아니다.
bounds = mesh.get_bounding_box()
size = bounds.max - bounds.min
scale = 220.0 / max(size.x, size.y, size.z)
center = (bounds.min + bounds.max) * 0.5
position = unreal.Vector(-center.x * scale, -center.y * scale,
                         -bounds.min.z * scale)
model = actors.spawn_actor_from_class(unreal.StaticMeshActor, position)
model.static_mesh_component.set_static_mesh(mesh)
model.set_actor_scale3d(unreal.Vector(scale, scale, scale))
model.set_actor_label("RealityScan_14Photos_199998Triangles")

# 바닥은 엔진 기본 큐브를 넓게 늘린 것이다. 높이를 내려 모델 아래에 둔다.
floor = actors.spawn_actor_from_class(unreal.StaticMeshActor,
                                      unreal.Vector(0, 0, -55))
floor.static_mesh_component.set_static_mesh(
    library.load_asset("/Engine/BasicShapes/Cube"))
floor.set_actor_scale3d(unreal.Vector(8, 8, 1))

# 서로 반대쪽에서 비추는 검사 조명을 만든다.
# 주 조명 우선순위를 다르게 줘 두 방향광의 우선순위 경고를 피한다.
for index, rotation in enumerate([unreal.Rotator(-40, -35, 0),
                                   unreal.Rotator(-20, 145, 0)]):
    light = actors.spawn_actor_from_class(unreal.DirectionalLight,
                                         unreal.Vector(0, 0, 400), rotation)
    light.light_component.set_mobility(unreal.ComponentMobility.MOVABLE)
    light.light_component.set_editor_property("intensity", 5.0)
    light.light_component.set_editor_property("forward_shading_priority", index)
actors.spawn_actor_from_class(unreal.SkyLight, unreal.Vector(0, 0, 400))

# 무늬가 있는 앞면을 바라보는 편집기 카메라를 지정한다.
camera = unreal.Vector(270, 300, 220)
look_at = unreal.Vector(0, 0, 100)
unreal.EditorLevelLibrary.set_level_viewport_camera_info(
    camera, unreal.MathLibrary.find_look_at_rotation(camera, look_at))
levels.save_current_level()
# 결과 에셋을 바로 열어 표면·Nanite·충돌을 눈으로 확인한다.
unreal.get_editor_subsystem(unreal.AssetEditorSubsystem).open_editor_for_assets([mesh])

```

## 9. 이번에 확인한 범위와 보관할 자료

사진 14장으로 시작해 텍스처가 있는 OBJ를 만들었고, 그 결과를 언리얼의 별도 연구 프로젝트에 반입했다. 이번 표면에는 주변 벽과 거친 가장자리가 남아 있다. 바로 납품할 게임 에셋을 완성했다거나, 모든 물체에서 같은 품질을 얻었다고 볼 수는 없다.

| 자료 | 무엇인가 | 지금 처리 |
|---|---|---|
| RealityScan 설치 폴더 | 프로그램 실행에 필요한 파일 | 보관 |
| 내려받은 예제 압축 | 같은 사진을 다시 풀 때 쓸 원본 | 보관 후 필요 여부 판단 |
| Input 사진 | 복원을 다시 계산할 때 필요한 입력 | 보관 |
| .rsproj와 같은 이름의 데이터 폴더 | 프로젝트와 복원 자료 | 함께 보관 |
| OBJ·MTL·색상 PNG·rsInfo | 내보낸 모델과 연결 정보 | 함께 보관 |
| 별도 임시 캐시 | 계산 중 다시 만들 수 있는 중간 자료 | 프로젝트 재열기 확인 후 나중에 판단 |

**이번에는 삭제하지 않았다.** 예전에 보류해 둔 RealityScan 자료 정리는 이 글과 복원 결과를 확인한 다음에 할 일로 남겨 뒀다.

참고: [RealityScan 공식 다운로드와 예제](https://www.realityscan.com/en-US/download), [RealityScan 공식 CLI 안내](https://rshelp.capturingreality.com/en-US/tutorials/commandline.htm).
