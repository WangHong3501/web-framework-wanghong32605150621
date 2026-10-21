# ch04-dynamic-slots｜第 4 章实验台

WEB 前端框架技术（203051）· 第 04 课（4.1—4.5）：动态组件 · KeepAlive · 插槽 · 自定义指令。

## 运行

```bat
cd /d D:\web-framework-wanghong32605150621\notes-app\lab04\ch04-dynamic-slots
npm install
npm run dev
```

构建预览：

```bat
npm run build
npm run preview
```

## 目录

```text
ch04-dynamic-slots/
├── src/
│   ├── App.vue                 ← 实验台：锚点菜单 + 七个 section（全部已挂载）
│   ├── style.css               ← 课程设计令牌（复制自 ch03-components）
│   ├── main.js
│   └── experiments/
│       ├── 01-dynamic/         ← 4.1.1—4.1.2 动态组件
│       ├── 02-keepalive/       ← 4.1.3 + 4.2 KeepAlive 与缓存生命周期
│       ├── 03-slot-basic/      ← 4.3.1—4.3.2 默认插槽 + 后备内容
│       ├── 04-named-slot/      ← 4.3.3 具名插槽
│       ├── 05-scoped-slot/     ← 4.3.4 作用域插槽
│       ├── 06-resume/          ← 4.4 案例：我的简历
│       └── 07-directive/       ← 4.5 自定义指令
├── index.html
├── package.json
└── vite.config.js
```

## 小实验与计划组件

| 目录 | 计划组件 | 知识点 | 状态 |
|---|---|---|---|
| `01-dynamic` | `MyLeft.vue`、`MyRight.vue`、`DynamicLab.vue` | 4.1.1—4.1.2 | 已完成 |
| `02-keepalive` | `MyLeft.vue`、`MyRight.vue`、`KeepAliveLab.vue` | 4.1.3 + 4.2 | 已完成 |
| `03-slot-basic` | `AddressCard.vue`、`SlotBasicLab.vue` | 4.3.1—4.3.2 | 已完成 |
| `04-named-slot` | `InfoCard.vue`、`NamedSlotLab.vue` | 4.3.3 | 已完成 |
| `05-scoped-slot` | `ScoreList.vue`、`ScopedSlotLab.vue` | 4.3.4 | 已完成 |
| `06-resume` | `MyResume.vue`、`ResumeLab.vue` | 4.4 | 已完成 |
| `07-directive` | `MyInput01.vue`、`MyInput02.vue`、`DirectiveLab.vue` | 4.5 | 已完成 |

> 全部 7 个小实验已完成并挂到 `App.vue`，构建与浏览器交互验证通过。
>
> 验收截图：`screenshots/ch04-01-dynamic.png`、`ch04-02-keepalive.png`、`ch04-03-include.png`、`ch04-06-scoped-slot.png`、`ch04-08-directive.png`。
