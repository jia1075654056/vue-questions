## Chrome 浏览器无法打开 vue3 的抽屉组件

### 问题描述

在 Chrome 浏览器低版本（如 70.0.3538.77）下，无法打开 vue3 的抽屉组件。控制台无报错，此时查询抽屉的 css 样式，发现有一个 `inset: 0` 的属性没生效，导致抽屉组件无法正常显示。

### 解决方案

inset: 0 实际是 left: 0, right: 0, top: 0, bottom: 0 的简写，因此可以将其修改为 left: 0, right: 0, top: 0, bottom: 0 即可解决兼容性问题。因为是在打包时自动处理的，所以需要加入打包配置，禁止 css 代码转化。
 `build` 并在打包配置中增加 `cssTarget` 属性，值为浏览器版本数组。

### 打包配置

在 vite.config.js 文件中加入以下配置：

```
// 在配置项中
{
  build: {
    cssTarget: ['chrome58', 'firefox57', 'edge16', 'safari11', 'opera44'],
  }
}
```
