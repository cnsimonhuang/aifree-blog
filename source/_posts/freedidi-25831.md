---
title: 老旧电脑也能跑 1250 亿参数大模型？开源神器 Strata 让本地部署更进一步！
date: 2026-10-26 12:00:00
cover: /images/freedidi-25831/img01.webp
tags:
- 转载
- 零度博客
- Strata
---

> **转载声明**：本文转载自 **零度博客**（作者：零度解说），原文链接：[https://www.freedidi.com/25831.html](https://www.freedidi.com/25831.html)，原文发表于 2026-10-26。版权归原作者所有，转载仅作分享学习。

本地部署超强开源大模型的时代，正在加速到来！最近，GitHub 上一款名为 Strata 的开源模型部署工具引起了不少关注。它的一大亮点是尝试通过显存、系统内存与硬盘的协同调度，让硬件配置有限的普通电脑也有机会运行高达 1250 亿参数（125B） 的超大语言模型。即使你的显卡只有 8GB 显存，也不一定意味着你只能使用小参数模型，本地运行大模型的硬件门槛有望进一步降低。 

![](/images/freedidi-25831/img01.webp)

那么，Strata 是如何实现这一目标的？它的基本思路是将模型权重分层存放和加载：部分数据放入显存，其余数据则利用系统内存，必要时还可以借助硬盘空间，从而突破显存容量的部分限制。比如在使用相同模型相同的提示词下，Strata 的速度比 llama.cpp 快了将近4倍，面对这样的大模型，这个速度差距还是相当明显的！

![](/images/freedidi-25831/img02.webp)

接下来，我们就来看看 Strata 的工作原理、部署方法，以及普通电脑究竟能否流畅运行超大参数模型。

# 本地部署

### 一、下载开源的 Strata项目

Strata 下载地址：【**[点击前往](https://github.com/Niko1221/Strata/releases/tag/v0.2.6)**】或 【**[网盘下载](https://pan.quark.cn/s/5e33e4f34a6e)**】、【**[备用下载](https://git.cloudeop.com/repo.php?id=48f75c83)**】

下载后直接打开进行安装，它会根据你的电脑硬件，帮你挑选最适合你的模型，还有相应的部署环境，无论你是N卡、A卡、mac、Linux 等系统都是可以的！

![](/images/freedidi-25831/img03.webp)

## 视频演示：

### 二、 Strata 加载本地模型

如果你之前已经下载过开源模型，那么Strata可以直接将其载入，只需点击左侧的：模型- 管理模型 – 使用本地GGUF格式的模型，将其加载进去即可！

![](/images/freedidi-25831/img04.webp)

同时它也自带监控面板：

![](/images/freedidi-25831/img05.webp)
---

*作者：零度解说 ｜ 发布于零度博客，2026-10-26 ｜ 原文链接：[https://www.freedidi.com/25831.html](https://www.freedidi.com/25831.html)*
