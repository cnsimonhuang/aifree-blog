---
title: ComfyUI + MiniMax H3：一张照片生成 360° 环绕视频！免费本地部署，附工作流！
date: 2026-10-16 12:00:00
cover: /images/freedidi-25755/img01.webp
tags:
- 转载
- 零度博客
- MiniMax
---

> **转载声明**：本文转载自 **零度博客**（作者：零度解说），原文链接：[https://www.freedidi.com/25755.html](https://www.freedidi.com/25755.html)，原文发表于 2026-10-16。版权归原作者所有，转载仅作分享学习。

最近，MiniMax H3 又带来了一个非常有趣的玩法！借助专门的 **MiniMax H3 360° 环绕 LoRA 模型**，我们只需要提供一张静态照片，就能生成围绕人物或物体进行 360° 环绕拍摄的视频！

![](/images/freedidi-25755/img01.webp)

仿佛使用专业摄影设备拍摄了一圈，轻松实现无死角的视觉展示！本期零度解说将带大家使用 **ComfyUI 在本地免费部署这款模型**，从环境配置、模型下载到工作流导入与实际生成，手把手教你完成整个流程，并附上完整工作流，让你也能轻松上手体验 AI 视频生成的魅力。接下来我们就给大家演示下整个部署过程！

# 部署教程

## 

## 一、安装新版ComfyUI

### 官方下载：【[**点击前往**](https://comfy.org/download/)】

下载后直接双击进行安装，在安装的时候选择本地部署，不要选择云端

![](/images/freedidi-25755/img02.webp)

注意：如果你在中国大陆，安装的过程会提示你是否安装镜像加速，为了以后能更快下载开源模型，推荐启用镜像加速！

![](/images/freedidi-25755/img03.webp)

## 

## 

## 二、下载模型（共 5 个文件）

### 1、Loras 模型 ：【**[点击前往](https://get.cloudeop.com/d/loras.html)**】

### 2、Diffusion 模型 ：【**[点击前往](https://get.cloudeop.com/d/diffusion.html)**】

### 3、Text 文本编码器 ：【**[点击前往](https://get.cloudeop.com/d/text.html)**】

### 4、Vae 模型 ：

### （1）.int8_convrot：【**[点击前往](https://get.cloudeop.com/d/vae-int8_convrot.html)**】

### （2）.fp32（可以生成声音）：【**[点击前往](https://get.cloudeop.com/d/vae-fp32.html)**】

## 模型文件下载与存放路径

下载所需模型文件后，请按照下表将文件放入对应的 ComfyUI 目录中。

模型文件
存放路径

`minimax_h3_fl2va_pruned_int8_convrot.safetensors`
`ComfyUI/models/diffusion_models/`

`qwen3vl_32b_minimax_h3_nvfp4_awq.safetensors`
`ComfyUI/models/text_encoders/`

`minimax_h3_video_vae_int8_convrot.safetensors`
`ComfyUI/models/vae/`

`minimax_h3_audio_vae_fp32.safetensors`
`ComfyUI/models/vae/`

`minimax_h3_flf2v_lora_v1.safetensors`（360° 环绕 LoRA）
`ComfyUI/models/loras/`

| | |
| --- | --- |
| | |
| | |
| | |
| | |
| | |

注意： 如果你的 ComfyUI 安装在其他目录，请将以上路径替换为实际安装路径。模型文件放置完成后，如果 ComfyUI 没有自动识别新模型，可以尝试重启 ComfyUI，再在对应的模型选择节点中加载。

## 三、下载工作流

1、支持单张照片：【**[点击下载](https://pan.cloudeop.com/s/72975FE1767D60A0)**】

2、支持2张图片（首尾帧）：【**[点击下载](https://pan.cloudeop.com/s/824CAF1603F2846A)**】

![](/images/freedidi-25755/img04.webp)

提示词使用默认的即可，一般不用修改，当然如果你有特殊需求的话，那么你可以自定义更改任何你需要的提示词！

**单张提示词：**

```
One frozen instant. Only the camera moves. In a continuous 360 orbit. Preserve every person and object in exactly the same world position, orientation, shape and pose throughout the shot. Airborne objects remain suspended at the captured height and angle: no wobbling, shaking, spinning, drifting, falling or continued action. Keep faces, hands, clothing, liquids and the background motionless while retaining their natural appearance. Camera parallax is the only source of apparent movement. No cuts, zoom, morphing or added objects.
```

如果你需要通过2张图片生成首尾帧相连的视频，那么务必使用下方的提示词，生成效果会更好。

**双张提示词：**

```
One frozen instant. Only the camera moves. In a continuous 360 orbit. Preserve every person and object in exactly the same world position, orientation, shape and pose throughout the shot. Airborne objects remain suspended at the captured height and angle: no wobbling, shaking, spinning, drifting, falling or continued action. Keep faces, hands, clothing, liquids and the background motionless while retaining their natural appearance. Camera parallax is the only source of apparent movement. No cuts, zoom, morphing or added objects.The outfit gradually changes during the orbit.
```
---

*作者：零度解说 ｜ 发布于零度博客，2026-10-16 ｜ 原文链接：[https://www.freedidi.com/25755.html](https://www.freedidi.com/25755.html)*
