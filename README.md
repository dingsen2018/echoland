# Echoland 回声地

课程展示型移动端前端 Demo。

## 当前结构

- `shell.html`: App 外壳，包含移动端容器、底部 4 Tab、Tab 切换逻辑和全局配色。
- `tabs/`: 四个 Tab 的页面片段。当前只保留首页 Logo/地址，其它页面为空，方便后续分工填充。
- `assets/icons/`: 项目内图标资源，包含底部导航默认态/点击态和首页 Logo。
- `scripts/build.js`: 将 `shell.html` 与 `tabs/` 片段拼装成 `echoland.html`。
- `echoland.html`: 可直接打开的最终预览文件。

## 构建

```bash
node scripts/build.js
```

## 分支建议

- `feat/tab-home`: 首页与活动详情。
- `feat/tab-route`: AI 路线。
- `feat/tab-community-mine`: 社区与我的。

每个分支尽量只修改自己负责的 `tabs/` 文件。需要改外壳、图标、全局配色时，先和组内确认。
