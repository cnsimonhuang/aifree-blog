---
title: MiniMax H3 被硬砍到 13.7B！生成速度极快，最新开源 HyperFlow H3 Flash ，本地部署实测来了！
date: 2026-11-09 12:00:00
cover: /images/freedidi-25977/img01.webp
tags:
- 转载
- 零度博客
- MiniMax
---

> **转载声明**：本文转载自 **零度博客**（作者：零度解说），原文链接：[https://www.freedidi.com/25977.html](https://www.freedidi.com/25977.html)，原文发表于 2026-11-09。版权归原作者所有，转载仅作分享学习。

最近 AI 视频生成圈又出现了一个相当疯狂的开源项目！有人居然把 31B 参数的 MiniMax H3，通过结构剪枝和低秩分解，硬生生压缩到了 13.7B！它就是 Video Rebirth 团队最新推出的 **HyperFlow H3 Flash**。更夸张的是，这次并不是简单套一层加速 LoRA，而是直接对底层模型架构进行了改造。现在，单张 RTX 4090 就能在本地运行这套模型，不需要传统的 CFG 引导，默认只用 6 步采样，就能生成 1344×768 分辨率的视频，而且还能同步生成 32kHz 立体声音轨！

![](/images/freedidi-25977/img01.webp)

要知道，以前我们在本地部署原版 MiniMax H3，光是 31B 模型权重就需要大约 62GB 显存或内存，生成一段几秒钟的视频往往还需要几十步采样，对普通消费级显卡来说，部署门槛相当高。而 HyperFlow H3 Flash 这次从模型结构、推理方式到量化部署进行了全面优化，不仅将模型规模压缩到了 13.7B，还支持 GGUF 和 INT8 等量化方案，可以直接接入 ComfyUI 工作流，支持文生音画、首尾帧控制以及多图参考等玩法。那么，它究竟是怎么做到的？单张 RTX 4090 实际运行需要多少显存，生成速度又能达到什么水平？今天这期视频，我们就来完整介绍 HyperFlow H3 Flash，并带大家从零开始完成本地部署，最后进行实际生成测试！

# 本地部署

## 一、安装最新 ComfyUI

目前只有v0.44.2 才支持HyperFlow H3 Flash 本地部署，所以如果你之前安装过 ComfyUI 客户端，务必将其升级到最新版才可以！通过下方的链接进行下载后安装，或者在线升级到最新版；

**ComfyUI 官方下载：【[点击前往](https://comfy.org/download/)】**

 

![](/images/freedidi-25977/img02.webp)

 

## 二、安装必备的节点

ComfyUI 必装2个节点：分别是 HyperFlow Flash 和 GGUF 引导器，只需在管理扩展功能里搜索关键词：HyperFlow Flash 和 GGUF 就可以在线下载安装节点，如下图所示：

1、官方 HyperFlow Flash 核心节点，当然如果你想跑速度更快的 INT8 ConvRot 权重，安装社区 INT8 专用加载器！

![](/images/freedidi-25977/img03.webp)

**2、GGUF 引导节点**

![](/images/freedidi-25977/img04.webp)

上面两个节点是必须安装的，缺一不可，否则在后面加载模型的时候，会导致你无法正常加载、运行本地模型！

## 三、下载模型

由于 HyperFlow H3 Flash 仅压缩了主扩散网络，文本编码器和音视频解码器完全沿用原版 MiniMax H3。所以我们需要下载三个必装的模型文件并放入对应目录：

**1、文本编码器 (约 15.7 GB)：**

【**[点击前往](https://get.cloudeop.com/d/15-7-gb.html)**】

放置路径：ComfyUI/models/text_encoders

**2、视频 VAE (约 5.21 GB)：**

【**[点击前往](https://get.cloudeop.com/d/vae-5-21-gb.html)**】

放置路径：ComfyUI/models/vae

**3、音频 VAE (约 605 MB)：**

【**[点击前往](https://get.cloudeop.com/d/vae-605-mb.html)**】

放置路径：ComfyUI/models/vae

**4、主模型权重 （HyperFlow H3 Flash）：**

【**[点击前往](https://get.cloudeop.com/d/hyperflow-h3-flash.html)**】

放置路径：ComfyUI/models/diffusion_models

在开源社区上，HyperFlow H3 Flash 的主模型权重总共有6个，大家可以根据自己的显存大小，选择适合自己的模型版本

![](/images/freedidi-25977/img05.webp)

## 三、下载工作流

目前公开可直接下载的工作量有两套，分别是官方版和INT8社区，如果你的显存16G以内的，建议使用官方版，硬件要求没那么高，如果你的显存是24G及以上的，那么推荐使用更快的INT8社区加速版！

### **1. 官方 GGUF 版工作流（4 套）包含文件与用途**：

- 

`hyperflow_t2v.json`：**文生音视频**

- 

`hyperflow_i2v.json`：**首帧图生音视频**

- 

`hyperflow_flf2v.json`：**首尾帧控制生音视频**

- 

`hyperflow_ref2v.json`：**多图/角色参考生音视频官方版工作流下载 【[点击前往](https://github.com/Video-Rebirth/ComfyUI-HyperFlow-Flash/tree/main/example_workflows)】 或 【[网盘下载](https://pan.cloudeop.com/s/49C5CAB57D0A180D)】**

![](/images/freedidi-25977/img06.webp)

### **2. 社区 INT8 ConvRot 加速版工作流（5 套） 包含文件与用途**：

- 

`hyperflow_int8_t2v.json`：文生音视频（默认 243 帧 / 10.1 秒动作提示词模板）

- 

`hyperflow_int8_t2v_sparse.json`：**带稀疏注意力加速（Model Sparse Attention / `sol-attn`）的文生音视频**（比常规 INT8 再快约 20%，如果不想开稀疏注意力，选中该节点按 `Ctrl+B` 绕过即可）

- 

`hyperflow_int8_i2v.json`：首帧图生音视频（124 帧 / 5.2 秒）

- 

`hyperflow_int8_flf2v.json`：首尾帧生音视频（124 帧 / 5.2 秒）

- 

`hyperflow_int8_ref2v.json`：参考生音视频（需切换为 `ref2va` 权重）

**INT8 社区工作流下载：【[点击前往](https://huggingface.co/BennyDaBall/HyperFlow-H3-Flash-INT8-ComfyUI/tree/main/workflows)】 或 【[网盘下载](https://pan.cloudeop.com/s/EF36629D8FED2E17)】**

![](/images/freedidi-25977/img07.webp)

 

### 3、生成漫剧必备模型

目前市面上的大多数漫剧都是由多图参考生成视频的，剧情可以根据自己的喜好进行添加，图片也可以自己选择，或者通过AI生成！

【**[点击前往](https://get.cloudeop.com/d/p236583.html)**】

放几个首尾帧生成视频的提示词和图片供大家参考

![](/images/freedidi-25977/img08.webp)

![](/images/freedidi-25977/img09.webp)

![](/images/freedidi-25977/img10.webp)
---

*作者：零度解说 ｜ 发布于零度博客，2026-11-09 ｜ 原文链接：[https://www.freedidi.com/25977.html](https://www.freedidi.com/25977.html)*
