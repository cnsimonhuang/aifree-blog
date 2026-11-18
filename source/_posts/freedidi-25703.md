---
title: 彻底清理 Windows 11 的预装软件，让系统变得更加干净、清爽！
date: 2026-10-09 12:00:00
cover: /images/freedidi-25703/img01.webp
tags:
- 转载
- 零度博客
- Windows 11
---

> **转载声明**：本文转载自 **零度博客**（作者：零度解说），原文链接：[https://www.freedidi.com/25703.html](https://www.freedidi.com/25703.html)，原文发表于 2026-10-09。版权归原作者所有，转载仅作分享学习。

Windows 11 虽然带来了更加现代化的界面和丰富的功能，但系统中预装的软件也越来越多，不仅占用磁盘空间，还有不少应用是我们日常根本用不到的。更让人头疼的是，有些预装软件即使手动卸载，过一段时间也可能再次出现。

![](/images/freedidi-25703/img01.webp)

本文将教大家如何通过 Windows 自带命令和实用软件来实现清理，批量卸载不需要的预装软件，让系统更加干净、清爽，同时避免误删重要的系统组件。

 

**第 1步：查看系统内置的预装应用**

```
Get-AppxProvisionedPackage -Online | Format-Table PackageName
```

![](/images/freedidi-25703/img02.webp)

取消微软预装安装包，防止系统回装：

```
Remove-AppxProvisionedPackage -Online -PackageName "这里粘贴完整PackageName"
```

当然上面的命令`Remove-AppxProvisionedPackage` 只是把它从系统的“预配列表”里拿掉，作用是**以后新建的用户不会再自动装上它**，大版本更新时也不容易被重新铺回来。**已经装在现有账户里的那份不会被卸载**，开始菜单里照样还在。

所以要彻底删除，需要两条一起执行，完成正式卸载：

```
# 1. 卸载所有现有用户已安装的副本
Get-AppxPackage -AllUsers *BingNews* | Remove-AppxPackage -AllUsers

# 2. 删除预配包，防止新用户/更新后回装
Get-AppxProvisionedPackage -Online | Where-Object DisplayName -like "*BingNews*" | Remove-AppxProvisionedPackage -Online
```

因为Windows 的预装应用分两层。`AppxPackage` 是已经装给某个用户的；`AppxProvisionedPackage` 是系统镜像里的“种子”，新用户登录或某些大版本更新时会再装一遍。**只删第一层就会出现“删了又回来”**，要彻底清除，两层都要删。

![](/images/freedidi-25703/img03.webp)

### 

### 第 2步：卸载工具

当然上面的方法对新手来说，操作过程完全命令端执行有点不方便，所以接下来我们介绍另外一种更简单的方法，就是提供可视化的操作工具实现类似的效果，这是一款德国出品的免费软件，可以剔除微软强加在系统里的预装软件！

## 卸载工具下载：【**[点击前往](https://www.oo-software.com/en/ooappbuster)**】或 【[备用下载](https://pan.cloudeop.com/s/846A95F13799C954)】

![](/images/freedidi-25703/img04.webp)

### 【零度同款】TDM Fast 下载器：【**[点击下载](https://activate.tdmfast.com/aff.php?c=F92639)**】

[

![](/images/freedidi-25703/img05.gif)

](https://activate.tdmfast.com/aff.php?c=F92639)

### 

### 第 3步：用 winget 卸载非 Appx 的预装软件

有些预装软件（比如 OneDrive）不是 Appx 包，用 winget 处理：

```
winget list # 查看全部已装软件
winget uninstall Microsoft.OneDrive # 卸载 OneDrive
```

### 

### 第 4 步：一键批量清理脚本（推荐）

把要删的包名放进列表，三层一起删。可以按需增减：

```
$apps = @(
 "Microsoft.BingNews", "Microsoft.BingWeather", "Microsoft.BingSearch",
 "Microsoft.GetHelp", "Microsoft.Getstarted",
 "Microsoft.MicrosoftSolitaireCollection", "Microsoft.MicrosoftOfficeHub",
 "Microsoft.People", "Microsoft.PowerAutomateDesktop", "Microsoft.Todos",
 "Microsoft.WindowsFeedbackHub", "Microsoft.WindowsMaps",
 "Microsoft.ZuneMusic", "Microsoft.ZuneVideo",
 "Microsoft.YourPhone", "Microsoft.WindowsAlarms",
 "Microsoft.WindowsSoundRecorder", "Microsoft.549981C3F5F10", # Cortana
 "Microsoft.GamingApp", "Microsoft.XboxGamingOverlay",
 "Microsoft.XboxSpeechToTextOverlay", "Microsoft.Xbox.TCUI",
 "Microsoft.OutlookForWindows", "Microsoft.Windows.DevHome",
 "Microsoft.Copilot", "MSTeams", "MicrosoftTeams",
 "Clipchamp.Clipchamp", "MicrosoftCorporationII.QuickAssist",
 "MicrosoftCorporationII.MicrosoftFamily"
)

foreach ($app in $apps) {
 Write-Host "正在移除: $app" -ForegroundColor Cyan
 Get-AppxPackage -AllUsers -Name $app -ErrorAction SilentlyContinue |
 Remove-AppxPackage -AllUsers -ErrorAction SilentlyContinue
 Get-AppxProvisionedPackage -Online |
 Where-Object DisplayName -eq $app |
 Remove-AppxProvisionedPackage -Online -ErrorAction SilentlyContinue | Out-Null
}
Write-Host "完成，建议重启。" -ForegroundColor Green
```

![](/images/freedidi-25703/img06.webp)

### 

当然有人会问，可不可以使用常规的卸载软件将其卸载呢？删除是可以的，但是如果Windows 更新后之前卸载的预装应用就会死灰复燃，重新装回来，除非你禁止 Windows 的更新！

但是 Windows 11 的更新有“自愈”机制（`WaaSMedicSvc` 修复服务 + 计划任务），**只停一个服务往往几天后又自己恢复**。要彻底禁止，需要“策略 + 服务 + 计划任务”多层一起处理。下面从温和到彻底排列，都在**管理员 PowerShell** 里执行。

**方法 1：把“暂停更新”延长到 10 年（最简单，可随时恢复）**

```
Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\WindowsUpdate\UX\Settings" -Name "FlightSettingsMaxPauseDays" -Value 3650 -Type DWord
```

但是部分较新的 24H2/25H2 版本上，这个键对界面不再生效。这时可以跳过界面，**直接把暂停到期时间写进注册表**：

```
$s = "HKLM:\SOFTWARE\Microsoft\WindowsUpdate\UX\Settings"
$start = (Get-Date).ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ssZ")
$end = "2036-01-01T00:00:00Z" # 暂停到这个日期，可自行修改

Set-ItemProperty -Path $s -Name "PauseUpdatesStartTime" -Value $start
Set-ItemProperty -Path $s -Name "PauseUpdatesExpiryTime" -Value $end
Set-ItemProperty -Path $s -Name "PauseFeatureUpdatesStartTime" -Value $start
Set-ItemProperty -Path $s -Name "PauseFeatureUpdatesEndTime" -Value $end
Set-ItemProperty -Path $s -Name "PauseQualityUpdatesStartTime" -Value $start
Set-ItemProperty -Path $s -Name "PauseQualityUpdatesEndTime" -Value $end
```

以管理员身份在Powershell里执行命令即可！

![](/images/freedidi-25703/img07.webp)

执行禁止更新命令以后，我们就可以在Windows 更新中心看到，暂停更新将会终止到2036年也就是10年以后

![](/images/freedidi-25703/img08.webp)

同时我们也可以使用一键禁止更新工具，来实现一样的效果，这个工具我们之前介绍过

> 

[一键禁止 Windows 自动更新程序 v1.8](https://www.freedidi.com/13175.html)

 

## **下载链接：【[点击下载](https://github.com/Hudrig0/Windows-Update-Blocker)】、或备用**【[**打包下载**](https://pan.cloudeop.com/s/3A91F9C45D9EAE6A)】

这个新功能实际上对大多数用户来说非常方便。如果您想控制更新过程，您可以禁用 Windows 更新服务。这需要您打开服务管理器，找到服务并更改其启动参数和状态。然后，每当您希望操作系统检查更新时，您都必须再次启用该服务（这看起来并不那么容易）。

![](/images/freedidi-25703/img09.png)

Windows Update Blocker 是一款免费软件，它可以帮助您完全禁用或启用 Windows 系统上的自动更新，只需单击按钮即可。此实用程序是便携式的，这意味着您不再需要执行安装过程，并且移除后硬盘上不会留下任何残留物。如果您将程序文件放置到外部数据设备，则可以随身携带 Windows Update Blocker 并在您接触的任何计算机上使用它，只要配置正确，并且不想冒险让更新搞乱他们的系统。此实用程序就是为这样的人准备的。

**怎么运行的**

下载后，将 Windows Update Blocker 解压到所需位置，然后运行它

![](/images/freedidi-25703/img10.png)

服务状态图标将显示您的 Windows 更新服务状态，如果您想阻止自动 Windows 更新，请选择“禁用服务”并单击“立即应用”按钮，保护服务设置可以防止不受控制的更改（推荐）。
---

*作者：零度解说 ｜ 发布于零度博客，2026-10-09 ｜ 原文链接：[https://www.freedidi.com/25703.html](https://www.freedidi.com/25703.html)*
