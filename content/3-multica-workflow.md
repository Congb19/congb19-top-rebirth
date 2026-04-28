---
id: 3
date: 2026-04-28
path: /blog/3
---

# 使用 Multica 构建小型项目团队协作工作流

> 纯本地部署，不依赖任何第三方云服务，人 + Agent 协作完成项目开发。

## 为什么选择 Self-Host

过去一年多，我一直在探索如何更好地使用 AI Agent 辅助开发。直接调用 LLM API 往往缺乏任务管理能力，而一些在线平台虽然功能完整，但对数据隐私有顾虑或希望完全自控。

**Multica Self-Host** 恰好满足了我的需求：本地部署、无依赖第三方、任务管理 + Agent 协作一站式解决。

## 快速部署

使用 Docker 一键启动，最小化配置：

```bash
docker run -d \
  --name multica \
  -p 3000:3000 \
  -v multica-data:/data \
  multica/multica
```

首次登录时，由于是本地部署，验证码会直接输出在 Docker 容器日志中，找到对应验证码完成验证即可进入。

## 配置 Runtime 与 Agent

部署完成后，需要为团队配置专属的 Agent 角色。我根据实际工作流，配置了三个核心角色：

- **coder-1**：负责代码开发
- **pm-1**：负责需求分析和文档编写
- **pro-1**：负责技术方案设计和 Code Review

![Agent 配置示例](/imgs/agentsetting1.png)

每个 Agent 都有明确的职责分工，通过 Issue 流转实现任务接力。

## 开发流程

### 1. 需求发起

在看板中创建 Issue，描述需求背景、验收标准等。Agent 领取后会认领到自己的 Worklist 中。

![看板视图](/imgs/kanban1.png)

### 2. Agent 开工

Agent 领取 Issue 后，开始分析需求、编写代码或文档。每一步操作都会更新 Issue 状态，保持全程可追溯。

![Agent 工作状态](/imgs/working1.png)

### 3. 任务完成

Agent 完成任务后，会自动将 Issue 状态流转至 **In Review**，同时在 Inbox 中生成未读提醒，通知人类进行复核。

![Inbox 通知](/imgs/inbox.png)

### 4. Review 与合入

由技术专家 Agent（pro-1）进行 Code Review。Review 通过后，Agent 会自动合入代码。

![Review 与合入](/imgs/reviewmerge1.png)

合入成功后，GitHub PR 上会有明确标识，便于追溯哪些变更由 Agent 完成。

![PR 合入成功](/imgs/mergesuccessfully1.png)

## 进阶能力

### 自动任务（Autopilot）

除了人工触发，Multica 还支持配置**定时自动任务**：

- 产品经理定时总结当日工作，发送日报
- 技术专家每隔一定时间自动检视开启中的 PR
- 任何重复性的人工操作，都可以考虑交由 Autopilot 处理

### 探索中

当前我仍在实践中探索更多场景，包括：

- 多 Agent 协作的更复杂任务拆解
- 与现有 CI/CD 流程的深度集成
- 私有知识库的 RAG 接入

---

整体使用下来，Multica Self-Host 提供了一个**轻量但完整**的团队协作方案。如果你也在寻找可以完全自控的 AI Agent 工作流平台，不妨一试。
