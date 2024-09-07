# 网页内容总结Chrome扩展

## 项目简介

这是一个Chrome浏览器扩展,可以使用本地部署的ollama服务中的qwen2模型来总结当前网页的内容。该扩展提供了一个简单的用户界面,允许用户一键获取网页内容的摘要。

## 功能特点

- 一键总结当前网页内容
- 使用本地部署的ollama服务和qwen2模型
- 实时显示生成的摘要
- 简洁美观的用户界面

## 技术栈

- HTML5
- CSS3
- JavaScript
- Chrome Extension API
- Ollama API

## 项目结构

```
extension/
  ├── manifest.json
  ├── popup.html
  ├── popup.js
  ├── content.js
  ├── background.js
  └── styles.css
```

- `manifest.json`: 扩展的配置文件
- `popup.html`: 扩展的弹出窗口HTML
- `popup.js`: 处理弹出窗口交互的JavaScript
- `content.js`: 与网页内容交互的内容脚本
- `background.js`: 后台脚本,处理与ollama服务的通信
- `styles.css`: 弹出窗口的样式表



## 安装说明

1. 确保您已经在本地部署了ollama服务,并加载了qwen2模型。
2. 克隆或下载本项目到本地。
3. 打开Chrome浏览器,进入扩展管理页面(chrome://extensions/)。
4. 启用"开发者模式"。
5. 点击"加载已解压的扩展程序",选择项目目录。

## 使用方法

1. 点击Chrome工具栏中的扩展图标打开弹出窗口。
2. 在您想要总结的网页上,点击"总结内容"按钮。
3. 等待几秒钟,摘要将会显示在弹出窗口中。

## 注意事项

- 确保ollama服务在本地11434端口运行。
- 网页内容的长度可能会影响摘要生成的时间。
- 某些网站可能会限制内容抓取,可能导致摘要生成失败。
