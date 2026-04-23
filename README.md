# congb19-top-rebirth

Congb19 的个人门户站点（2025 重生版），基于 Nuxt 3 + Nuxt UI 构建的现代化 SPA 应用。

## 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | [Nuxt 3](https://nuxt.com/) (v4.2.2) |
| UI 组件 | [@nuxt/ui](https://ui.nuxt.com/) v4 |
| 样式 | Tailwind CSS v4 + Heroicons/Material Symbols/MingCute 图标库 |
| 状态管理 | [Pinia](https://pinia.vuejs.org/) + [@pinia/nuxt](https://pinia.vuejs.org/) |
| 内容管理 | [@nuxt/content](https://content.nuxt.com/) (SQLite 本地存储) |
| 工具库 | [VueUse](https://vueuse.org/) + [@vueuse/nuxt](https://vueuse.org/integrations/) |
| 3D 渲染 | [Three.js](https://threejs.org/) |
| 实时通信 | Socket.io (WebSocket 实验支持) |
| 部署方式 | GitHub Pages (静态站点生成) |

## 页面结构

```
app/
├── pages/
│   ├── index.vue       # 首页
│   ├── about/          # 关于页
│   ├── blog/           # 博客列表
│   ├── playground/     # 工具/实验室
│   └── tools/          # 工具集
├── components/
│   ├── blog/           # 博客相关组件
│   └── tools/          # 工具相关组件
├── composables/        # 组合式函数
├── stores/             # Pinia 状态库
└── layouts/            # 布局组件
```

## 开发命令

```bash
# 安装依赖
pnpm install

# 开发模式（热重载）
pnpm dev

# 构建生产版本
pnpm build

# 本地预览
pnpm preview

# 生成静态站点
pnpm generate

# 生成并发布到 GitHub Pages
pnpm generate:github_pages
```

## 部署流程

`generate:github_pages` 命令执行以下操作：

1. 运行 `nuxt generate --preset github_pages` 生成静态文件到 `.output/public`
2. 执行 `build/copy-output-to-github_pages.cjs` 将输出复制到 `github_pages/` 目录
3. 将 `github_pages/` 目录内容推送到 GitHub Pages 分支即可访问

> **注意**：站点采用 SPA 模式（SSR 关闭），所有路由均通过 `index.html` 入口文件配合客户端路由实现。

## 项目特点

- **Nuxt 4 兼容**：使用最新 Nuxt 框架，享受前沿特性
- **系统主题**：自动跟随操作系统深色/浅色模式
- **开发工具**：内置 Nuxt DevTools，便于调试
- **内容驱动**：博客等内容通过 @nuxt/content 管理
- **响应式设计**：基于 Tailwind CSS，适配各种屏幕尺寸

## License

MIT