# HBuilderX-cli

一个便捷的 HBuilderX 命令行工具包装器，让您可以通过 npm scripts 轻松使用 HBuilderX 的各种功能。

## 📋 功能特性

- 🚀 **多平台开发**：支持 Web、Android、iOS、HarmonyOS、小程序、QuickApp 等平台
- 🔧 **日志查看**：实时查看各平台的运行日志
- 🧪 **测试支持**：运行自动化测试
- ⚡ **快速启动**：通过简单的 npm 命令快速启动开发环境
- 🎯 **配置化**：所有命令配置集中管理，易于扩展

## 🛠️ 安装

### 本地安装

```bash
npm install @dcloudio/hbuilderx-cli --save-dev
```

## 🚀 快速开始

### 1. 环境准备

确保您已经安装了 **HBuilderX 4.87 或更高版本**。HBuilderX-cli 会自动检测已启动的 HBuilderX 进程。

> **⚠️ 版本要求**：本工具需要 HBuilderX 4.87 及以上版本，低于此版本将无法正常使用。

## 📖 命令使用

### 开发命令 (uni-launch)

#### Web 平台

```bash
# 使用默认浏览器
npm run dev:web

# 使用 Chrome 浏览器
npm run dev:web -- --browser Chrome

# 只编译不运行
npm run dev:web -- --compile true
```

#### Android 平台

```bash
# 使用默认设备
npm run dev:app-android

# 指定设备
npm run dev:app-android -- --serial emulator-5554

# 使用自定义基座
npm run dev:app-android -- --playground custom

# 显示原生日志
npm run dev:app-android -- --native-log true

# 编译错误后继续运行
npm run dev:app-android -- --continue-on-error true
```

#### iOS 平台

```bash
# 真机开发
npm run dev:app-ios -- --iosTarget device

# 模拟器开发
npm run dev:app-ios -- --iosTarget simulator

# 指定设备
npm run dev:app-ios -- --serial iPhone-15-Pro
```

#### 小程序平台

```bash
# 微信小程序（带运行时日志）
npm run dev:mp-weixin -- --runtime-log true

# 支付宝小程序
npm run dev:mp-alipay -- --runtime-log true

# 抖音小程序
npm run dev:mp-toutiao -- --runtime-log true
```

### 日志查看命令 (uni-logcat)

```bash
# 查看 Web 日志
npm run logcat:web

# 查看 Android 日志
npm run logcat:app-android -- --serial emulator-5554

# 查看 iOS 日志
npm run logcat:app-ios -- --iosTarget device

# 查看小程序日志
npm run logcat:mp-weixin
```

### 测试命令 (uni-test)

> **⚠️ 重要提示**：使用测试功能前，需要先在 HBuilderX 中安装 [uni-app 自动化测试插件](https://ext.dcloud.net.cn/plugin?id=5708)

#### 安装测试插件

1. 打开 HBuilderX
2. 访问 [插件页面](https://ext.dcloud.net.cn/plugin?id=5708)
3. 点击 **下载插件并导入 HBuilderX**

#### 测试命令使用

```bash
# Web 测试（支持 Chrome、Safari、Firefox，默认为 Chrome）
npm run test:web -- --testcaseFile tests/login.test.js
npm run test:web -- --browser Chrome --testcaseFile tests/login.test.js
npm run test:web -- --browser Safari --testcaseFile tests/login.test.js
npm run test:web -- --browser Firefox --testcaseFile tests/login.test.js

# Android 测试
npm run test:app-android -- --device_id emulator-5554

# iOS 测试（仅支持模拟器）
npm run test:app-ios -- --device_id iPhone-15-Pro
```

**测试平台限制说明：**

- **iOS 平台**：仅支持模拟器测试，不支持真机测试
- **Web 平台**：支持 Chrome、Safari、Firefox 浏览器，默认为 Chrome
- **Android 平台**：支持真机和模拟器测试
- **HarmonyOS 平台**：支持真机和模拟器测试

## ⚙️ 环境配置

### 自动检测（推荐）

HBuilderX-cli 会自动检测已启动的 HBuilderX 进程，无需额外配置。

### 手动配置

如果自动检测失败，可以设置环境变量：

#### macOS/Linux

```bash
export HBUILDERX_CLI_PATH="/Applications/HBuilderX.app/Contents/MacOS/cli"
```

#### Windows

```cmd
set HBUILDERX_CLI_PATH="C:\Program Files\HBuilderX\cli.exe"
```

## 🔍 故障排除

### 常见问题

#### 1. 找不到 HBuilderX

```bash
# 确保 HBuilderX 已启动
# 或设置环境变量
export HBUILDERX_CLI_PATH="/path/to/hbuilderx/cli"
```

#### 2. HBuilderX 版本过低

如果遇到命令执行错误，请检查 HBuilderX 版本：

```bash
# 检查 HBuilderX 版本
cli --version
```

本工具需要 **HBuilderX 4.87 或更高版本**，请更新到最新版本。

## 📚 更多信息

- [HBuilderX 官方文档](https://hx.dcloud.net.cn/cli/README)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来帮助改进这个项目。

### 添加新命令

1. 在 `scripts/command-config.js` 中添加配置
2. 更新 `COMMAND_CONFIG.md` 文档
3. 提交 Pull Request

## 📄 许可证

MIT License

## 🙏 致谢

感谢 DCloud 团队提供的 HBuilderX 和 uni-app 框架。
