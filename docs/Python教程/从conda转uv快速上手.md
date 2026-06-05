---
date: 2026-03-04
---

# 从conda转uv快速上手

## uv 是什么

`uv` 是用 Rust 写的 Python 包管理工具，安装速度比 pip/conda 快几十倍。更重要的是，它提供了一套**以项目为中心**的工作流，比 conda 的全局环境模式更干净。

## 安装uv

### windows
```powershell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

### linux

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

### 验证安装
关掉终端重新打开，执行：
```bash
uv --version
```

## 核心理念：忘掉"激活环境"

Conda 的工作流是：`conda activate` → 操作 → `deactivate`，环境是全局的，不跟项目走。

uv 的工作流是：**你只需要待在项目目录里，uv 会自动找到 `.venv`，不需要激活任何东西。** 所有命令直接对当前项目的环境生效。

这是最大的思维转变——从"管理环境"变成"管理项目"。

## 日常工作流（最常用）

一个典型项目的完整生命周期：

### 1. 新建项目

```bash
uv init my-project
cd my-project
```

`uv init` 一步到位：建文件夹、建 `.venv`、生成 `pyproject.toml`（替代 `requirements.txt` 的现代依赖清单）。

### 2. 添加依赖

```bash
uv add requests
uv add pandas numpy matplotlib
```

`uv add` 会安装包，**并且自动写入 `pyproject.toml`**。不需要手动维护依赖文件。

加开发专用的包（不会被打进生产环境）：
```bash
uv add --dev pytest ruff
```

### 3. 运行代码

```bash
uv run python main.py
```

**不需要激活环境。** `uv run` 会自动使用项目的 `.venv`，跑完终端保持干净。

### 4. 锁定依赖

```bash
uv lock
```

生成 `uv.lock` 文件，锁定所有依赖的精确版本。下次别人 clone 项目后 `uv sync` 就能还原完全一致的环境。

### 5. 同步环境

```bash
uv sync
```

根据 `pyproject.toml` 和 `uv.lock` 安装所有依赖。换电脑、拉代码后跑这一条就够了。

---

上面五步就是一个项目的完整流程：`init` → `add` → `run` → `lock` → `sync`。

## 进阶用法

### 万物皆可 `uv run`

`uv run` 不只是跑 Python 脚本，项目里的任何工具都可以：

```bash
uv run python main.py          # 跑脚本
uv run python                   # 进入 Python 交互模式
uv run pytest                   # 跑测试
uv run ruff check .             # 代码检查
uv run jupyter lab              # 启动 Jupyter
```

全部自动使用项目环境，不需要激活。

### 一次性脚本（阅后即焚）

临时跑个脚本，不想建项目：

```bash
uv run --with requests,pandas demo.py
```

uv 会创建临时环境、装包、跑脚本、然后清理掉，不留痕迹。

### 管理 Python 版本

uv 自带 Python 版本管理，不需要额外装 pyenv 之类的工具：

```bash
uv python install 3.12        # 安装指定版本的 Python
uv python list                 # 查看可用的 Python 版本
uv python pin 3.12             # 在当前项目锁定 Python 版本
```

新建项目时直接指定：
```bash
uv init my-project --python 3.12
```

### 用 `uvx` 直接运行 CLI 工具

很多 Python 命令行工具（比如 `ruff`、`black`、`httpie`）可以直接用 `uvx` 运行，不需要安装：

```bash
uvx ruff check .
uvx black .
uvx http GET https://httpbin.org/get
```

`uvx` 会在临时环境里装好工具然后执行，用完即走。

如果某个工具你经常用，可以永久安装到全局：
```bash
uv tool install ruff
```

### 导出 requirements.txt

有些场景还是需要 `requirements.txt`（比如部署到不支持 uv 的环境）：

```bash
uv pip compile pyproject.toml -o requirements.txt
```

## FAQ

### VS Code 找不到正确的 Python 解释器

确保 VS Code 打开的是项目根目录（包含 `.venv` 的那一层），而不是上层文件夹。

- 方法1：`文件 → 打开文件夹`，选项目根目录
- 方法2：终端里 `cd` 到项目根目录，输入 `code .`

### 终端里 conda 环境和 venv 冲突

终端自动开了 conda 环境又开了 venv，手动 `conda deactivate` 太烦。关掉 conda 的自动激活：

```bash
conda config --set auto_activate false
```

### 我还是习惯先 activate 怎么办

可以，但没必要。uv 的 `.venv` 是标准的 Python venv，手动激活完全没问题：

```powershell
# Windows
.venv\Scripts\activate

# Linux/macOS
source .venv/bin/activate
```

只是既然用了 uv，建议适应 `uv run` 的方式，更干净。

### conda 和 uv 命令对照

| 你要做的事 | conda | uv |
| --- | --- | --- |
| 新建项目 | `conda create -n myenv python=3.12` | `uv init my-project --python 3.12` |
| 装包 | `conda install numpy` | `uv add numpy` |
| 跑脚本 | `activate` → `python main.py` | `uv run python main.py` |
| 装开发工具 | `conda install pytest` | `uv add --dev pytest` |
| 导出依赖 | `conda env export > env.yml` | 自动生成 `pyproject.toml` |
| 还原环境 | `conda env create -f env.yml` | `uv sync` |
| 看装了啥 | `conda list` | `uv pip list` |
| 卸载包 | `conda remove numpy` | `uv remove numpy` |
