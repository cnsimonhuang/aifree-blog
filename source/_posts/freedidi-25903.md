---
title: GPU 算力解锁！开源 GPU-UNLOCK 一键解除显卡限制，让本地 AI 大模型运行速度大幅提升！
date: 2026-11-03 12:00:00
cover: /images/freedidi-25903/img01.webp
tags:
- 转载
- 零度博客
- GPU
---

> **转载声明**：本文转载自 **零度博客**（作者：零度解说），原文链接：[https://www.freedidi.com/25903.html](https://www.freedidi.com/25903.html)，原文发表于 2026-11-03。版权归原作者所有，转载仅作分享学习。

你有没有想过，自己电脑里的 NVIDIA 显卡，可能并没有发挥出全部性能？尤其是在本地部署 AI 大模型时，显卡的算力表现直接决定了模型的推理速度和使用体验。

![](/images/freedidi-25903/img01.webp)

最近，一个名为 **GPU-UNLOCK** 的开源项目引起了我的注意，它尝试通过解除显卡的部分性能限制，释放更多 GPU 算力，让本地运行大模型变得更加高效。更重要的是，它提供了相对简单的自动化操作方式，不需要复杂的手动配置。如果你也喜欢在自己的电脑上折腾本地 AI、大语言模型，那么这个工具值得一试！

# 

# 安装教程

### 一、下载 GPU-UNLOCK 显卡解锁器

**1、Windows 版：【[点击前往](https://github.com/windows-GPU-UNLOCK/Windows-GPU-UNLOCK)】 或 【[备用下载](https://pan.quark.cn/s/20467ac0f394)】2、Linux 版：【[点击前往](https://github.com/Zagitta/gpu-unlock#how-to-install)】 或 【[备用下载](https://pan.quark.cn/s/2d4f96d89d17)】**

 

#### 支持的GPU

版本
显卡
状况

（RTX 30）
RTX 3050、3060、3060 Ti、3070、3070 Ti、3080、3080 Ti、3090、3090 Ti 以及 RTX 3070/3080 笔记本电脑 GPU
稳定，100+ 用户报告

（RTX 40）
RTX 4060、4060 Ti、4070、4070 SUPER、4070 Ti、4070 Ti SUPER、4080、4080 SUPER、4090、4090 D、RTX 4050/4060 笔记本电脑显卡
实验

（RTX 20）
RTX 2060、2060 SUPER、2070、2070 SUPER、2080、2080 SUPER、2080 Ti、Titan RTX
实验

Blackwell（RTX 50）

不支持

| | | |
| --- | --- | --- |
| | | |
| | | |
| | | |
| | | |

 

注意：目前在Windows系统上主要支持30系显卡，如果想获得更广泛的解锁支持，推荐使用Linux系统

![](/images/freedidi-25903/img02.webp)

## 

## 

## 你将获得什么

张量核心频率翻倍。具体提升幅度取决于你的工作负载中有多少是 FP16/BF16/TF32 矩阵运算，以及显卡是否有足够的性能余量来运行这些运算。

稠密矩阵乘法（FP32 累积，股票功率限制）：

卡片
BF16之前
BF16 之后
获得

RTX 3060 12 GB
27 TFLOPS
51 TFLOPS
+87%

RTX 3060 Ti
37 TFLOPS
68 TFLOPS
+82%

RTX 3070
40 TFLOPS
72 TFLOPS
+81%

RTX 3080 10 GB
65 TFLOPS
113 TFLOPS
+73%

RTX 3090
75 TFLOPS
125 TFLOPS
+65%

RTX 3090 Ti (450 W)
88 TFLOPS
157 TFLOPS
+80%

RTX 4070 Ti
81 TFLOPS
150 TFLOPS
+84%

RTX 4080
104 TFLOPS
193 TFLOPS
+87%

RTX 4090
165 TFLOPS
329 TFLOPS
+100%（MMA峰值速率）

| | | | |
| --- | --- | --- | --- |
| | | | |
| | | | |
| | | | |
| | | | |
| | | | |
| | | | |
| | | | |
| | | | |
| | | | |

RTX 4090 的功耗先于张量核心耗尽，因此，在默认功耗限制下，大容量 GEMM 内存的增益远低于峰值速率所显示的增益。

实际工作负载：

工作量
典型加速

LLM 预填充/提示处理，FP16/BF16 或 AWQ/GPTQ（vLLM、PyTorch、Transformers）
+25–55%

到达第一个代币的时间
降低 25-30%

LoRA 和 BF16 中的全面微调
+25–50%

图像生成，FP16/BF16（ComfyUI 中的 SDXL、SD 1.5、Krea、DiT 模型）
+30–55%

视频生成，BF16 计算（WAN 2.2）
+15-20%

FlashAttention / SDPA 内核
+50–60%

llama.cpp / 带有量化 GGUF 的 Ollama
0-15%，主要在长上下文中

LLM解码/令牌生成（内存密集型）
无变化

INT8、FP8 和 INT4 型号
无变化

游戏和FP32 CUDA
无变化

| | |
| --- | --- |
| | |
| | |
| | |
| | |
| | |
| | |
| | |
| | |
| | |
| | |

前后输出结果完全相同，只有速度有所变化。这些数据来自 用户提交的[兼容性报告，您可以在报告中找到完整的基准测试详情并发布您自己的测试结果。](https://github.com/Zagitta/gpu-unlock/issues)

### 二、安装 Python 环境

官方要求是安装 Python 3.10 或更高版本，如果你电脑上已经安装了python环境，可以直接跳过第2个步骤，如果没安装，需要通过下方的链接来进行下载下必备的环境。

**Python 官方下载：【[点击前往](https://www.python.org/downloads/release/python-3148/)】**

进入后选择对应的版本，Windows 推荐选择x64位的版本

![](/images/freedidi-25903/img03.webp)

注意：安装的时候务必勾选这里面的2个选项，否则后面可能会出错！

![](/images/freedidi-25903/img04.webp)

 

### 三、下载 LocModel 本地模型部署工具

LocModel 是一款免费的开源模型加载软件，安装后可以自动识别你的硬件，推荐最合适的开源模型，装好推理引擎。支持在线下载或导入 GGUF，点一下，就在本地跑起来。现在，它也学会了画图、生成视频和替你动手的Agent。

**LocModel 官方下载：[https://locmodel.com](https://locmodel.com) **

 

![](/images/freedidi-25903/img05.webp)

 

**一键解锁（检测）命令：**

```
# 1. 切换当前 PowerShell 窗口编码为 UTF-8
chcp 65001
$OutputEncoding = [System.Text.Encoding]::UTF8
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
[Console]::InputEncoding = [System.Text.Encoding]::UTF8

# 2. 重新运行兼容性收集脚本
python -I .\tools\collect_compatibility.py
```

此操作会打印硬件/驱动程序信息；不会解锁、更改设置或上传任何内容。**`not-assessed`这些信息`can_unlock: false`均属正常。**请从输出中删除个人信息，然后将审核后的文本粘贴到[兼容性报告](https://github.com/impacifist/Windows-GPU-UNLOCK/issues/new?template=compatibility.yml)中。请勿附加固件或原始转储文件。

如果上面的命令执行后顺利通过，那么就可以执行下一步了

## 解锁启动

启动路径
显示和输入
指示

**内部无显示**
适用于B650M/3090FE或B660M/3070Ti/3090Ti配置；显示器连接在 RTX 显卡上；可临时移除显示器；启动过程中无需按 T/U/Enter。
[内部无显示指南](https://github.com/windows-GPU-UNLOCK/Windows-GPU-UNLOCK/blob/main/docs/HEADLESS.en.md)

【[点击下载](https://pan.quark.cn/s/6b9b0acb932d)】

**无显示 USB 启动**
适用于已报告的RTX3060/3090Ti等配置：使用特定配置文件的封装程序，并将其子文件放在一个 FAT32 格式的 USB U 盘中。
[无显示USB 指南](https://github.com/windows-GPU-UNLOCK/Windows-GPU-UNLOCK/blob/main/docs/HEADLESS-USB.en.md)

【[点击下载](https://pan.quark.cn/s/30cd110dc85d)】

内置AMD显示

手动/自动
使用原始的B650M配置文件；保留主板/核显的显示输出：手动变体需要按U键。
[现有内部显示指南](https://github.com/windows-GPU-UNLOCK/Windows-GPU-UNLOCK/blob/main/docs/INTERNAL-BOOT.en.md)

【[点击下载](https://pan.quark.cn/s/0ff4291321fc)】

传统 USB 启动
使用原始的 AMD/核显(iGPU)显示配置文件；按一次 U 键， 
随后通过Boot Override（启动覆盖）直接进入Windows，无需重启
[传统 USB 指南](https://github.com/windows-GPU-UNLOCK/Windows-GPU-UNLOCK/blob/main/docs/GUIDE.en.md)

【[点击下载](https://pan.quark.cn/s/849c08cb79f8)】

| | | |
| --- | --- | --- |
| | | |
| | | |
| | | |
| | | |

X870、B660-PLUS 和 H610M 未连接到USB 接口`Configure.ps1`；`Headless.ps1`请参考 USB 指南。虽然可以为前两个配置构建 USB 软件包，但其内部启动记录并未验证这些 USB 路径。传统的 USB EFI 仍然依赖于 AMD 显示设备。`USB → Windows`仅靠 BIOS 优先级无法实现直接切换。

## 

## 内部无头快速启动

 

**此示例适用于默认的 B650M / RTX 3090 FE 配置。**对于 B660M，请`-HardwareProfile b660m-3070ti`按照[兼容性](https://github.com/windows-GPU-UNLOCK/Windows-GPU-UNLOCK/blob/main/docs/COMPATIBILITY.en.md)说明在配置和构建中进行选择。X870 使用单独的 USB 接口。

更改启动设置前，请阅读[完整指南和恢复步骤](https://github.com/windows-GPU-UNLOCK/Windows-GPU-UNLOCK/blob/main/docs/HEADLESS.en.md)。请使用完全受支持的硬件，禁用安全启动，确保 C 盘已完全解密且 BitLocker 保护已关闭，并连接键盘。这些工具不会禁用加密。

保留**现有的 Windows ESP 分区和恢复分区。准备一个****至少 1 GiB 的**独立 GPT FAT32 EFI 系统分区，盘符例如 U:。工具不会创建、缩小、删除或格式化分区。普通的 FAT32 数据分区并非所需的 ESP 分区。

您需要 Python 3.9+、clang/lld-link **20.1.8**、已锁定的仓库依赖项以及五个本地获取的[固件资源](https://github.com/windows-GPU-UNLOCK/Windows-GPU-UNLOCK/blob/main/docs/ASSETS.en.md)。主机集成测试还需要 MSVC/Windows SDK 和私有 fixtures。

从存储库根目录下的管理员 PowerShell 中：

```
# Replace the GUID and tool paths with your own values.
.\internal-boot\Configure.ps1 -UnlockDriveLetter U `
 -WindowsEspGuid 'YOUR-WINDOWS-ESP-GUID'
.\research\headless\build-unlock.ps1 `
 -Clang 'C:\TOOLS\LLVM20\bin\clang.exe' `
 -LldLink 'C:\TOOLS\LLVM20\bin\lld-link.exe'

# Stage and append a separate F8 test entry; retain existing boot priority.
.\internal-boot\Headless.ps1 -Assets '.\assets' -Register
```

如果没有操作开关，`Headless.ps1 -Assets '.\assets'`则只会暂存文件。配置和构建不会注册启动项。

- 

保存工作并完全关机。在已测试的华硕固件中，选择 **F8 → GPU 无头解锁 – 实验版**。

- 

**等待片刻，不要按 T、U 或 Enter 键。**五秒内首次按下 Esc 键会跳过释放和解锁步骤，直接启动 Windows。

- 

移除 RTX GOP 时屏幕会变黑。子程序尝试一次后，包装器会直接启动 Windows。请勿在解锁和 Windows 启动之间重置。确认显示恢复并[进行测量](https://github.com/windows-GPU-UNLOCK/Windows-GPU-UNLOCK/blob/main/docs/BENCHMARK.en.md)。

- 

只有在 F8 测试成功后，才能启用默认自动启动：

```
.\internal-boot\Headless.ps1 -EnableAutomatic -ConfirmedSuccess
```

该明确操作会将无头模式启动优先，Windows 启动管理器次之，并禁用 Windows 快速启动。仅进行测试注册则不会。发布此版本不会更改研究用 PC 当前的默认启动选项。

**两个 Esc 窗口有所不同：**初始的 Esc 窗口会在不松开的情况下启动 Windows；而稍后出现的三秒钟的子 Esc 窗口则是在松开 Esc 键后弹出，并会取消启动。它不会恢复显示或继续进入 Windows。如果失败或 Windows 无法启动，请完全关闭电源，然后选择**F8 → Windows 启动管理器**。

```
.\internal-boot\Headless.ps1 -RestoreWindowsFirst
```

Windows 优先恢复功能独立于实验性 EFI/构建组件，即使没有保存的状态也能正常工作。恢复之前的快速启动设置需要该状态；请保留该状态和备份。[恢复详情](https://github.com/windows-GPU-UNLOCK/Windows-GPU-UNLOCK/blob/main/docs/HEADLESS.en.md#recovery)。

只要你的显卡在解锁的范围内，那么就可以实现一键解锁GPU的算力，让你的显卡跑本地大模型的算力免费提升将近50%左右！

亲测：解锁后跑 BF16的 Z-Image Turbo 文生图 模型 ，我的12G的RTX3060的生成速度可以提升将近一半左右，效果立竿见影！

![](/images/freedidi-25903/img06.webp)

当然我们可以跑F16的Qwen 3.5 9B 模型，它的效果可能没有文生图片模型那么明显，但是也是有一定的加速效果的。

开源模型下载：【**[点击前往](https://huggingface.co/unsloth/Qwen3.5-9B-GGUF/tree/main)**】 或 【**[备用下载](https://git.cloudeop.com/repo.php?id=c939b817)**】

如果你显存比较小，建议选择更小的模型，否则可能会爆显存或速度不够快~

### Linux 系统下解锁步骤

开源项目：https://github.com/Zagitta/gpu-unlock#how-to-install

执行下方的命令：

```
git clone https://github.com/Zagitta/gpu-unlock
cd gpu-unlock
make install
```

然后将其添加`gpu_unlock.targets=all`到内核命令行，并保留现有选项：

- **GRUB（Debian/Ubuntu/Mint）：**将其添加到 中`GRUB_CMDLINE_LINUX_DEFAULT` ，`/etc/default/grub`然后运行`sudo update-grub`。

- **GRUB（Arch/CachyOS）：**进行相同的编辑，然后运行 `sudo grub-mkconfig -o /boot/grub/grub.cfg`。

- **Fedora/RHEL：**运行 `sudo grubby --update-kernel=ALL --args="gpu_unlock.targets=all"`。

- **systemd-boot：**将其添加到`options`启动项中的行（`bootctl status`显示其位置）。

- **UKI / 生成的条目：**将其添加到`/etc/kernel/cmdline`并重新生成您的启动映像/条目（例如，`sudo mkinitcpio -P`对于 mkinitcpio UKI）。
---

*作者：零度解说 ｜ 发布于零度博客，2026-11-03 ｜ 原文链接：[https://www.freedidi.com/25903.html](https://www.freedidi.com/25903.html)*
