# AGENTS.md

## 构建验证

- 本仓库的构建验证请走 `pnpm generate:github_pages` 命令，是纯静态构建（`nuxt generate` + `github_pages` preset，产物拷贝到 `github_pages/` 目录）。
- 不要用 `pnpm build`（SSR server 产物）做验证。

## 部署

- GitHub Actions 只在 push 到 `release` 分支时触发部署（master 合入不会自动部署）。
- **Reviewer 全部 PR 合入后，请直接推送 master 至 release 触发自动部署**：`git push origin master:release`。
