---
title: Windows 11（26H2）Tiny11 精简版！打造更轻量、更流畅的系统，下载与制作教程！
date: 2026-10-22 12:00:00
cover: /images/freedidi-25801/img01.webp
tags:
- 转载
- 零度博客
- Windows 11
---

> **转载声明**：本文转载自 **零度博客**（作者：零度解说），原文链接：[https://www.freedidi.com/25801.html](https://www.freedidi.com/25801.html)，原文发表于 2026-10-22。版权归原作者所有，转载仅作分享学习。

Windows 11 虽然拥有丰富的功能，但预装应用程序较多，部分后台服务和进程也会占用系统资源。如果你希望获得一个更加轻量、简洁的 Windows 11 系统，那么 Tiny11 值得一试。它可以帮助用户精简大量不必要的预装组件，减少系统冗余，让 Windows 11 更加清爽。无论你使用的是台式机、笔记本电脑，还是虚拟机，都可以根据自己的需求打造更精简的系统环境。

![](/images/freedidi-25801/img01.webp)

本文将介绍全新 Windows 11 26H2 Tiny11 的下载与制作方法，手把手教你如何利用相关工具，从原版 Windows 安装镜像开始，自定义精简系统、移除不需要的预装应用，并生成适合自己使用的 Tiny11 安装镜像。如果你想减少系统占用、简化安装流程，或者为虚拟机打造一个更加精简的 Windows 环境，可以跟着本文的步骤一步步操作。

# 设置步骤

## **1、下载 Tiny11 Builder （构建器）**

首先第一步，我们需要下载这款开源的系统构建器，Tiny11 Builder （构建器），它是由国外的开发者NT大佬编写的开源程序，相比以往的Powershell 下操作，这款搭载 WinUI3 的全新 Tiny11，可以更方便的帮助您构建速度更快，体积更小、可高度自定义的Windows 11 26H2 ISO 系统安装包！

### **Tiny11 Builder下载：【[点击前往](https://github.com/ntdevlabs/tiny11builder)】**

![](/images/freedidi-25801/img02.webp)

下载解压打开后，里面有3个模式选项，分别是：Tiny11、Tiny11 Core、Custom，那么该如何选择呢？下方的有各自版本的说明，根据下方各个版本的说明来进行选择你需要的模式。

## 选择你的配置

模式
它的作用

Tiny11
移除捆绑应用和不需要的功能，同时保留更新、Defender 和恢复功能。

Tiny11 Core
进一步精简，移除服务和恢复支持，并禁用 Defender。

Custom
选择要删除或保留的单个应用、组件、功能和服务。

| | |
| --- | --- |
| | |
| | |
| | |

Turbo 模式可加快图像处理速度。中断的构建可以在图像提交或压缩后从已保存的进度恢复。核心和组件存储的移除会自动使用旧版 Windows 安装程序。

## 2、获取官方正版 Windows 11 26H2

虽然 Tiny11 Builder 构建器上自带了ISO系统镜像下载，但是考虑到用户来自全球各地，为了更方便的构建 Windows 11（26H2）Tiny11 精简版，建议大家直接去微软的官方下载站进行下载。

### Windows 11 26H2 正版下载
1.中文简体版：【[点击前往](https://www.microsoft.com/zh-cn/software-download/windows11)】
2.中文繁体版：【[点击前往](https://www.microsoft.com/zh-tw/software-download/windows11)】
3.英文版下载：【[点击前往](https://www.microsoft.com/en-us/software-download/windows11)】

 

建议选择专业版，功能更全面更强，适合大多数用户使用！构建完成以后，Windows 11（26H2）Tiny11 相比原版足足小了3G左右，非常轻量，而且常用的核心功能都有，不用担心兼容性问题。

![](/images/freedidi-25801/img03.webp)

![](/images/freedidi-25801/img04.webp)

当然如果你需要给多台电脑进行安装Windows 11（26H2）Tiny11 系统，那么建议通过U盘制作工具：Rufus 来制作一个系统安装盘，在给多台电脑安装系统的时候会更加方便快捷！

### Rufus 下载：【**[点击前往](https://rufus.ie/)**】

![](/images/freedidi-25801/img05.webp)

安装以后如何激活呢？我们可以使用KMS 方式进行激活，命令如下：

管理员身份运行CMD，并依次输入下方的命令：

```
slmgr.vbs /upk

slmgr /ipk W269N-WFGWX-YVC9B-4J6C9-T83GX

slmgr /skms kms.loli.best

slmgr /ato
```

如果你使用了不同版本的Windows 11，那么可以在微软官方获取相应的激活密钥

# **视频教程：**

![](/images/freedidi-25801/img06.webp)

更多官方密钥获取：[https://learn.microsoft.com/en-us/windows-server/get-started/kms-client-activation-keys?tabs=windows1110ltsc%2Cwindows81%2Cserver2025%2Cversion1803](https://learn.microsoft.com/en-us/windows-server/get-started/kms-client-activation-keys?tabs=windows1110ltsc%2Cwindows81%2Cserver2025%2Cversion1803)
---

*作者：零度解说 ｜ 发布于零度博客，2026-10-22 ｜ 原文链接：[https://www.freedidi.com/25801.html](https://www.freedidi.com/25801.html)*
