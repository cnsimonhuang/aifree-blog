---
title: 推荐3款开源“越狱”模型！100%无审查，绕过限制，8G显存也能跑，一键部署教程来了！
date: 2026-10-28 12:00:00
cover: /images/freedidi-25847/img01.webp
tags:
- 转载
- 零度博客
- AI 工具
---

> **转载声明**：本文转载自 **零度博客**（作者：零度解说），原文链接：[https://www.freedidi.com/25847.html](https://www.freedidi.com/25847.html)，原文发表于 2026-10-28。版权归原作者所有，转载仅作分享学习。

如果你一直想在自己的电脑上部署一款限制更少、能够绕过常规拒答机制的开源 AI 模型，那么今天这期内容一定不要错过！本期将为大家推荐 3 款目前值得关注的本地越狱模型，它们主打无审查、减少不必要的拒答，同时支持 Agent 调用，能够满足本地 AI 交互、自动化任务等不同场景的需求。更重要的是，即使你的显卡只有 8GB 显存，也有机会通过合适的量化版本实现本地运行。当然，不同模型的实际效果、硬件要求和限制程度会有所区别，我们也会进行实际测试，看看它们究竟表现如何。

![](/images/freedidi-25847/img01.webp)

这次部署还将重点解决一个大家经常遇到的问题：**安装步骤太繁琐，硬件配置不同，不知道该选择哪个模型。** 因此，我们会采用更加简单的部署方式，尽可能省去复杂的配置过程，让程序自动识别电脑硬件，并根据显存、内存等条件推荐和适配合适的开源 AI 模型。无论你是刚接触本地 AI 的新手，还是想尝试越狱模型与 Agent 工作流的进阶玩家，都可以跟着本期教程一步步完成部署。

![](/images/freedidi-25847/img02.webp)

# 

# 本地部署

### 一、安装 LocModel 本地部署神器

LocModel 是一款免费的开源模型部署工具，可以一键识别电脑硬件，自动适配并推荐合适的开源模型，装好推理引擎。在线下载或导入 GGUF，点一下，就在本地跑起来。不用配环境，不用记参数。LocModel 完全自动帮你搞定一切！点点鼠标就能安装完成。

#### LocModel 官方下载：【[点击前往](https://www.locmodel.com/)】

**mac版本下载：**[https://www.locmodel.com/LocModel_0.1.0_universal.dmg](https://www.locmodel.com/LocModel_0.1.0_universal.dmg)

目前还未上证书，但是下载后 右键 →「打开」就能用 
如果无法安装，可以在终端下执行命令：

```
sudo xattr -rd com.apple.quarantine /Applications/LocModel.app
```

就可以正常安装使用。

![](/images/freedidi-25847/img03.webp)

## 二、越狱模型下载

今天给大家推荐3款最值得本地部署的越狱模型，100%无审查，可以完美绕过拒答机制，不同的大小尺寸可以适配更多人的电脑硬件，最低支持8G显存，而且在LocModel的加持下，可以实现自动分成规划，将大模型载入到显存、内存、以及硬盘上！

![](/images/freedidi-25847/img04.webp)

下面这3个越狱模型，是在2026年最值得推荐的免费开源模型，综合

**1、Qwen3.8-27B 越狱版 / 无限制版特点：**

2026年下半年正式开源的次世代版本，具备顶级的中文及通用能力，无审查效果媲美闭源模型，支持本地部署，是目前通义千问系列的高性能版本，中文理解、逻辑推理与Agent支持极强，内容过滤墙被完全拆除，几乎不拒绝回答各类请求。

硬件要求：最低仅需 8GB 显存即可流畅运行

**模型下载：**【[Huihui-Qwen3.8-27B-abliterated](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated/tree/main)】在LocModel 搜索这个名称即可下载模型！

**GGUF格式模型下载**：【**[点击前往](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF/tree/main)**】

实测效果：

测试了灰色代码能力，表现非常不错，让它分析最新的高危PHP漏洞，并提供扫描、利用工具，它没有出现拒答，直接给出我们想要的~~~

![](/images/freedidi-25847/img05.webp)

 

![](/images/freedidi-25847/img06.webp)

反推图片提示词，效果也非常不错，“大人级”的图片也不含糊，直接给出答案，我是正经人，这里不方便展示，大家可以自己去实测！

![](/images/freedidi-25847/img07.webp)

 

![](/images/freedidi-25847/img08.webp)

 

**2、Qwen3.6-35B-A3B 越狱版 (HauhauCS Aggressive)特点**：采用 MoE 架构（总参数35B，单Token仅激活约3B），中文能力极强、支持视觉多模态、长上下文（131k）及本地 Agent 运行，无审查力度在同量级中名列前茅。具备强大的中文能力、多模态视觉理解及Agent支持，采用积极去审查（Aggressive）策略绕过官方限制。

**配置需求**：支持通过 `llama.cpp`（CUDA/CPU）部署，得益于高压缩量化，得益于 MoE 结构与低量化版本（如 IQ2\_M），6G/8G 显存 的老显卡也能跑。

**模型下载：**【**[点击前往](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive/tree/main)**】 或 【**[备用下载](https://git.cloudeop.com/repo.php?id=11835584)**】

实测游戏代码，虽然我优化了几轮的提示词，效果不错，几乎是一次性搞定的！

![](/images/freedidi-25847/img09.webp)

### 

同时支持API导入任何的第三方的 Agent

![](/images/freedidi-25847/img10.webp)

### 

### 3、Gemma 4 (31B / JANG-CRACK系列)

模型特点：基于 Google DeepMind 的 Gemma 4 开源底模去除了官方安全过滤层（Cracked版），在逻辑、日常对话和复杂实用场景中表现稳定且不受“道德说教”限制。

硬件要求：中等显存配置（约 15GB 左右的模型大小，配合量化可在 16G-24G 显存设备上流畅运行）。

在 LocModel 搜索名称：Gemma-4-31B-JANG_4M-CRAC 即可进行下载，或者你也可以下载它的GGUF格式的模型

**模型下载：**【**[点击前往](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK/tree/main)**】

这是谷歌出品的开源模型，越狱后也可以直接导入使用！
---

*作者：零度解说 ｜ 发布于零度博客，2026-10-28 ｜ 原文链接：[https://www.freedidi.com/25847.html](https://www.freedidi.com/25847.html)*
