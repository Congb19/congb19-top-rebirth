# AGENTS.md

## 构建验证

- 本仓库的构建验证请走 `pnpm generate:github_pages` 命令，是纯静态构建（`nuxt generate` + `github_pages` preset，产物拷贝到 `github_pages/` 目录）。
- 不要用 `pnpm build`（SSR server 产物）做验证。
