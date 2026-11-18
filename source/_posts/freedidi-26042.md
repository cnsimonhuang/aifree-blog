---
title: MiniMax H3-Image 正式开源！原生1600万像素，文生图+图片编辑二合一，免费本地部署，效果不错！
date: 2026-11-15 12:00:00
cover: /images/freedidi-26042/img01.webp
tags:
- 转载
- 零度博客
- MiniMax
---

> **转载声明**：本文转载自 **零度博客**（作者：零度解说），原文链接：[https://www.freedidi.com/26042.html](https://www.freedidi.com/26042.html)，原文发表于 2026-11-15。版权归原作者所有，转载仅作分享学习。

就在前两天，MiniMax 正式开源发布了全新的图像生成模型 **MiniMax-H3-Image**！这次的更新可以说相当有看点，首先，它支持原生直出高达 **1600 万像素**的高清图片。注意，这里说的是原生生成，并不是像我们平时使用 ComfyUI 那样，先生成一张低分辨率图片，再通过超分辨率模型进行放大，因此能够更好地保留画面细节和纹理。同时，它还将文生图和图像编辑整合到了同一个模型中，最多可以同时输入 16 张参考图片，完成一次图片生成或编辑任务，据官方展示，整个过程最快只需要 10 秒左右！

![](/images/freedidi-26042/img01.webp)

更重要的是，**MiniMax-H3-Image 采用开源权重的方式发布**，这意味着我们不必依赖官方在线平台，也不需要购买昂贵的 API 服务，任何人都可以免费下载模型，在自己的电脑上进行本地部署和使用。

当然，相信很多老司机最关心的还是它的图片生成限制问题，尤其是 NSFW 内容。根据目前的实际测试，它在这方面的限制相对宽松，能够生成一些尺度更大的图片，给创作带来了更多自由度。

![](/images/freedidi-26042/img02.webp)

具体效果这里就不方便展示了，感兴趣的朋友可以自己部署体验。接下来，我们就一步一步带大家看看，如何在自己的电脑上免费部署 MiniMax-H3-Image，真正实现本地生成、免费使用！

 

# 部署教程：

## 一、LocModel 一键本地部署

LocModel 是一款面向普通用户和 AI 爱好者的本地 AI 部署与运行工具，非常适合新手！简单来说，它希望解决一个问题：以前想在自己的电脑上运行开源 AI 模型，需要安装 Python、配置 CUDA、下载各种依赖、修改启动参数，甚至还要折腾 ComfyUI、Ollama、llama.cpp 等工具。

LocModel 把这些复杂操作整合到了一个桌面软件中，让用户不需要掌握复杂的命令行，也能在自己的电脑上部署和运行开源 AI 模型。它并不只是一个大模型聊天软件，而是逐渐发展成集 大语言模型、AI 图片生成、AI 视频生成和 Agent 智能体 于一体的本地 AI 工作平台。

#### LocModel 官方下载：[https://locmodel.com](https://locmodel.com)

![](/images/freedidi-26042/img03.webp)

下载安装Locmodel后，在模型中心，找到里面的 搜索Huggingface 选项，然后在里面搜索模型的关键词：MiniMax-H3-Image，就可以在线下载了，需要注意的是，如果你不在海外，需要自己解决外网环境，因为模型是来自国外的模型开源平台，需要魔法上网才能下载！

![](/images/freedidi-26042/img04.webp)

当然 Locmodel 不仅可以本地生成图片，编辑图片，也可以通过图片生成视频，效果非常不错！不再需要你配置任何的复杂环境，在上面通过鼠标点击，就能轻松一键生成你需要的图片、视频内容，完全不受限！

![](/images/freedidi-26042/img05.webp)

## 二、ComfyUI 本地部署

当然如果你有一定的手动能力，希望可以做到更精细的控制，那么可以使用ComfyUI 客户端，它是一款开源的本地 AI 图像、视频生成工具，最大的特点就是采用了节点式工作流（Node-Based Workflow）。用户可以通过连接不同的功能节点，自由组合模型、提示词、图片输入、采样器、超分辨率等组件，搭建属于自己的 AI 生成工作流。

### 1、ComfyUI 官方下载：【**[点击前往](https://comfy.org/download/)**】

### 

![](/images/freedidi-26042/img06.webp)

### 

### 

### 开源模型下载

**1、MiniMax-H3-Image 主模型 【[点击前往](https://huggingface.co/Comfy-Org/MiniMax-H3-Image/tree/main/diffusion_models)】 或 ****【[网盘下载](https://pan.quark.cn/s/defcdd512bfa)】、【[备用下载](https://git.cloudeop.com/repo.php?id=4bab681b)】**

里面有3个不同的模型，分别支持8G、12G、16G以上的显存，大家可以根据自己的需求进行下载，或者全部下载下都可以，下载以后将其放入diffusion_models文件夹

![](/images/freedidi-26042/img07.webp)

**2、VAE 编解码 ：【[点击前往](https://huggingface.co/Comfy-Org/MiniMax-H3-Image/tree/main/vae)】、或 【[网盘下载](https://pan.quark.cn/s/cb248c9b4c63)】**

 

vae总共就1个文件，下载后将其放入到vae文件夹下

![](/images/freedidi-26042/img08.webp)

**3、文本编码器：【[点击前往](https://huggingface.co/Comfy-Org/MiniMax-H3-Image/tree/main/text_encoders)】、或 【[网盘下载](https://git.cloudeop.com/repo.php?id=517d1b52)】**

文本编码器同样有3个，分别支持我们后面的3个不同版本的工作流，建议根据自己的需要进行下载

![](/images/freedidi-26042/img09.webp)

### 工作流下载

minimax-h3-image的工作流总共有3个，分别支持8G、12G、16G 及以上的显存，可以说已经照顾了觉大部分人的电脑配置了，哪怕你只要8g左右的显存，也可以轻松本地部署运行！

**工作流下载：【[点击前往](https://huggingface.co/vyrekai/minimax-h3-image-comfyui-workflows/tree/main)】**

![](/images/freedidi-26042/img10.webp)

上面的数值就代表对应的显存大小，选择适合自己的工作流即可，下载后将其拖入到ComfyUI客户端就可以本地免费、自由、完全不受限制的使用！

# 视频教程：

## 三、Google Colab 云端部署

Google Colab 就是谷歌提供的一个免费在线编程工具，你打开浏览器就能直接写代码、跑程序，还能免费借用它的高性能电脑（包括显卡）来做AI实验或处理大数据，完全不用自己装软件或买昂贵设备！

**云端一键部署Minimax H3 image 模型：【[点击前往](https://drive.google.com/file/u/0/d/1QfXKKbwQ0LfXgviy_3HOitk0Qd-5sSNX/edit)】**

注意，它需要 Google 授权才可以使用，进入会进入到如下界面，访问权限选择：编辑者 ，然后申请权限，通过就可以免费在 Google 云服务器上使用免费的云GPU了，速度也非常快！

![](/images/freedidi-26042/img11.webp)

![](/images/freedidi-26042/img12.webp)
---

*作者：零度解说 ｜ 发布于零度博客，2026-11-15 ｜ 原文链接：[https://www.freedidi.com/26042.html](https://www.freedidi.com/26042.html)*
