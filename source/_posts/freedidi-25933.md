---
title: Kimi K3.1 Pro 正式发布！3万亿参数开源大模型，Locmodel 一键部署教程！完全免费
date: 2026-11-05 12:00:00
cover: /images/freedidi-25933/img01.webp
tags:
- 转载
- 零度博客
- Kimi
---

> **转载声明**：本文转载自 **零度博客**（作者：零度解说），原文链接：[https://www.freedidi.com/25933.html](https://www.freedidi.com/25933.html)，原文发表于 2026-11-05。版权归原作者所有，转载仅作分享学习。

就在昨晚凌晨，Moonshot AI 正式发布并开源了全新的 **Kimi K3.1 Pro** 模型！这次可谓是放出了一个重磅大招，模型总参数规模达到了惊人的 **3 万亿（3T）**，并且已经开放 Hugging Face 下载，任何开发者都可以获取模型权重，在自己的本地或服务器上进行部署和使用。

![](/images/freedidi-25933/img01.webp)

**Kimi K3.1 Pro 是一个原生多模态智能体模型**，不仅具备强大的语言理解和推理能力，还针对代码编程、3D 内容创作、金融研究、事实准确性以及复杂智能体任务进行了全面增强。作为一款拥有 3T 参数规模的开源大模型，它的发布无疑又给开源 AI 社区带来了一个重量级选手。

![](/images/freedidi-25933/img02.webp)

那么，这么庞大的模型究竟需要什么样的硬件才能运行？普通用户又该如何快速部署和体验？接下来，我们就使用最简单的方式，通过 **Locmodel** 来加载和运行 Kimi K3.1 Pro，一步步带大家完成整个部署过程。

# 部署教程

**1、下载安装 Locmodel **

目前最新发布的 LocModel 2.1.0 可以自动识别显卡与硬件，推荐合适的开源模型，一键安装 llama.cpp 推理引擎；支持在线下载与 GGUF 导入，显存不足时自动分层到内存和硬盘。现已加入本地 AI 画图、视频生成与 Agent 本地调用，支持 Windows、macOS 与 Linux，

**官方下载：[https://locmodel.com](https://locmodel.com)**

![](/images/freedidi-25933/img03.webp)

安装以后，无论是在线下载开源 Kimi K3 模型, 还是你自己手动导入你下载好的模型，都是可以的，需要注意的是，如果你不在海外，务必提前做好魔法上网，因为在线下载的模型都是直连Huggingface的，没有外网你无法下载。

用于Kimi K3.1 的模型非常大，普通电脑安装不下，但是LocModel 2.1.0支持内存、硬盘分层加载模型，这次我就是用硬盘硬抗的

![](/images/freedidi-25933/img04.webp)

居然真的可以在本地把开源的 Kimi K3 大模型运行起来了，当然了，速度那是相当感人！！

![](/images/freedidi-25933/img05.webp)

## **Kimi K3.1 开源模型huggingface下载：【[点击前往](https://huggingface.co/moonshotai/Kimi-K3.1-Pro)】**

当然目前的GGUF格式的Kimi K3.1 还没出来，应该出教程后很快就会发布，Kimi K3 到时已经发布了！

**Kimi K3 GGUF 格式模型：**【**[点击下载](https://huggingface.co/unsloth/Kimi-K3-GGUF/tree/main)**】

![](/images/freedidi-25933/img06.webp)

 

## 提示词：

**微景观**

```
Create a realistic creekside miniature webpage with flowing water passing between stones and natural gravel and grasses along the bank. Let users rotate the view and disturb the water to create ripples. Emphasize convincing water and stone rather than a cartoon style.
```

![](/images/freedidi-25933/img07.webp)

**1、射击游戏：**

```
Create a science-fiction expedition through floating ruins. An engineer starts at the Cirrus Reach turbine site to trace a lost signal, using an automatic rifle, sprint, jump and weapon skills to survive three guard waves, restore the turbine and collect coil tokens. Include destinations, growth, collections and story episodes, with room for future cooperative or wind-trial modes. Use original clouds, sail-like machinery and blue-green energy.
```

![](/images/freedidi-25933/img08.webp)

在线游玩：【**[点击前往](https://vwqqgcdvyw7og.ok.kimi.link/)**】

**2、汽车提示词：**

```
Create a relaxed free-driving game in Port Morrow. Drive a courier wagon, complete three neighborhood errands and recover a missing dispatch satchel. Use arrows or WASD, Space handbrake, Shift boost, E exit, C camera and M map. Include cash, vehicle health, a garage and free roaming, with sea air, old tram wires, dock signs and original radio shaping an easygoing afternoon.
```

![](/images/freedidi-25933/img09.webp)

**在线游玩：【[点击前往](https://6bzysssnzdvx2.ok.kimi.link/)】3D台球 提示词：**

```
Use Three.js and Rapier to build CLUB No.9, a first-person 3D billiards web game. Include realistic ball collisions and pockets, mouse-controlled aiming, charged shots, free practice and shot-by-shot replay. Provide Chinese and English interface options with clear keyboard and mouse
```

![](/images/freedidi-25933/img10.webp)

**在线游玩：【[点击前往](https://club-no9-billiards.ok.kimi.link/)】**
---

*作者：零度解说 ｜ 发布于零度博客，2026-11-05 ｜ 原文链接：[https://www.freedidi.com/25933.html](https://www.freedidi.com/25933.html)*
