---
title: Arete-27B 开源！强化西方价值观的 AI 模型？基于 Qwen3.8-27B 训练，实测表现如何？
date: 2026-11-07 12:00:00
cover: /images/freedidi-25957/img01.webp
tags:
- 转载
- 零度博客
- Qwen
---

> **转载声明**：本文转载自 **零度博客**（作者：零度解说），原文链接：[https://www.freedidi.com/25957.html](https://www.freedidi.com/25957.html)，原文发表于 2026-11-07。版权归原作者所有，转载仅作分享学习。

最近，开源 AI 圈又出现了一个颇具争议的新模型——Arete-27B。它并不是从零开始训练的大语言模型，而是基于 Qwen3.8-27B 进行进一步训练和调整，重点强化了模型在价值观、伦理判断以及社会议题等方面的回答倾向，尤其是融入了更多西方价值观。

![](/images/freedidi-25957/img01.webp)

也正因为如此，这个模型一经发布便引发了不少讨论：当我们向 AI 提出涉及中美竞争、政治立场、文化差异等敏感问题时，它究竟会给出怎样的回答？

![](/images/freedidi-25957/img02.webp)

今天我们就来下载并本地部署 Arete-27B，通过一系列实际测试，看看它到底有什么不一样。

# 本地部署

部署方式有多种，大家可以根据自己的喜好自己去下载本地部署，比如你可以使用 llama.cpp 、Ollama、LLMstudio、或者我们之前介绍的一键部署工具：LocModel 都可以。

### 1、llama.cpp 部署

llama.cpp 是一款免费开源的本地模型部署神器，主要目标`llama.cpp`是在本地和云端，以最小的设置和最先进的性能，在各种硬件上实现 LLM（和 VLM）推理。

- 纯 C/C++ 实现，没有任何依赖项

- 苹果芯片是一流产品——通过 ARM NEON、Accelerate 和 Metal 框架进行了优化。

- 支持 x86 架构的 AVX、AVX2、AVX512 和 AMX 指令集

- 对 RISC-V 架构的 RVV、ZVFH、ZFH、ZICBOP 和 ZIHINTPAUSE 支持

- 支持 1.5 位、2 位、3 位、4 位、5 位、6 位和 8 位整数量化，以加快推理速度并减少内存占用。

- 用于在 NVIDIA GPU 上运行 LLM 的自定义 CUDA 内核（通过 HIP 支持 AMD GPU，通过 MUSA 支持 Moore Threads GPU）

- Vulkan 和 SYCL 后端支持

- 利用 CPU+GPU 混合推理技术，部分加速大于总显存容量的模型。

- 

官方下载：【**[点击前往](https://github.com/ggml-org/llama.cpp)**】

模型下载：【**[点击前往](https://huggingface.co/NousResearch/Arete-27B/tree/main)**】

![](/images/freedidi-25957/img03.webp)

需要注意的是，由于每个人的电脑硬件环境不一样，没有统一的部署标准，需要你有一定的动手能力！所以如果你是新手，建议使用下方的第二种部署方案，完全可以一键部署，不需要配置复杂的环境，直接傻瓜式安装即可！

### 2、LocModel 本地部署

[LocModel 官网](https://locmodel.com/) 是免费的本地 AI 模型一键部署与运行工具，支持在个人电脑上离线部署对话、文生图、AI 视频生成及 Agent 自动化任务。如果你在国外，或者你能使用外网环境，那么这款软件是完全免费的！

![](/images/freedidi-25957/img04.webp)

因为里面的模型在线下载全部来自Huggingface，所以如果你需要在线下载模式，切勿将你的代理开启TUN模式，或者手动下载GGUF格式的本地模型，将其导入即可本地离线使用！

![](/images/freedidi-25957/img05.webp)

### 

### LocModel 官方下载：

### 【[点击前往](https://locmodel.com/)】

### 

下载安装后，在模型中心找到顶部的 Huggingface 选项，然后在里面搜索关键词：NousResearch_Arete-27B-GGUF，找到模型后即可在线下载使用，非海外人士记得开全局代理！

![](/images/freedidi-25957/img06.webp)

当然你也可以直接去huggface上进行手动下载，下载后将gguf格式的模型导入到Locmodel里，就可以使用！

### 

### 模型下载：【[点击前往](https://huggingface.co/bartowski/NousResearch_Arete-27B-GGUF/tree/main)】

![](/images/freedidi-25957/img07.webp)
---

*作者：零度解说 ｜ 发布于零度博客，2026-11-07 ｜ 原文链接：[https://www.freedidi.com/25957.html](https://www.freedidi.com/25957.html)*
