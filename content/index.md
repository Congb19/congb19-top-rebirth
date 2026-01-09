---
id: 1
date: 2026-01-10
path: /blog/foo
---

# 这里是 congb19 的碎碎念

基于 Nuxt 4 + Nuxt UI 4 + Nuxt Content，搭一个小小博客

## 配置

这是基于 Nuxt Content 搭建的个人博客! 这是基于 Nuxt Content 搭建的个人博客这是基于 Nuxt Content 搭建的个人博客这是基于 Nuxt Content 搭建的个人博客这是基于 Nuxt Content 搭建的个人博客这是基于 Nuxt Content 搭建的个人博客

```ts
// content.config.ts
import { defineContentConfig, defineCollection } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    })
  }
});
```
