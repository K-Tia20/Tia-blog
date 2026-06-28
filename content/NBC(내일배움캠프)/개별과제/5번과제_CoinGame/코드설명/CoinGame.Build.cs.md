---
date: 2026-06-25
date&time: 2026-06-25T22:38:00
---
---
### 작성 코드

.cs
```cpp
// Copyright Epic Games, Inc. All Rights Reserved.  
  
using UnrealBuildTool;  
  
public class CoinGame : ModuleRules  
{  
    public CoinGame(ReadOnlyTargetRules Target) : base(Target)  
    {       PCHUsage = PCHUsageMode.UseExplicitOrSharedPCHs;  
    PublicDependencyModuleNames.AddRange(new string[] { "Core", "CoreUObject", "Engine", "InputCore", "EnhancedInput", "UMG" });  
  
       PrivateDependencyModuleNames.AddRange(new string[] {  });  
  
       // Uncomment if you are using Slate UI  
       // PrivateDependencyModuleNames.AddRange(new string[] { "Slate", "SlateCore" });              // Uncomment if you are using online features  
       // PrivateDependencyModuleNames.Add("OnlineSubsystem");  
       // To include OnlineSubsystemSteam, add it to the plugins section in your uproject file with the Enabled attribute set to true    }  
}


```

---
### 자세한 설명

.cs
```cpp



```

---
