---
id: 1
date: 2026-01-10
path: /blog/1
---

# 在主站中搭建博客能力

这是基于 Nuxt Content 搭建的个人博客！主站全面重置后，拥有了接入 Nuxt Content 的能力！

基于 Nuxt 4 + Nuxt UI 4 + Nuxt Content，搭一个小小博客。
原因有不少，比如旧版博客使用 docsify 直接渲染 md，但是放在现在看，UI 已经显得有点老旧了。同时，可以再次缩减一下 DNS 解析，个人网站一个就差不多得了。回想起学编程的最初，搞了三个网站（一个博客站一个文档站一个主站），但是内容非常空洞，技术框架非常粗糙。

且不说后面会不会再更新内容部分，但搭建功能的过程还是有点意思的，所以可以搞一下。

## 配置

使用 node v24 自带的 sqlite，不用额外安装数据库能力：

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  // ...其他配置
  content: {
    experimental: { sqliteConnector: 'native' }
  }
});
```

定义数据集 collections，自动收集一级目录下的 markdown 文件，使用 zod 解析元数据：

```ts
// content.config.ts
import { defineContentConfig, defineCollection } from '@nuxt/content';
import { z } from 'zod';

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
      schema: z.object({
        date: z.string()
      })
    })
  }
});
```
