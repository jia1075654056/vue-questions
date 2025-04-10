# onBeforeUnmount 和 onUnmounted 钩子

## 1. onBeforeUnmount 钩子

`onBeforeUnmount` 在组件实例被卸载之前调用，此时组件实例仍然完全可用。适用于需要在组件销毁前立即停止某些副作用的场景。

### 具体场景

1. 清理前的准备工作：在组件卸载前执行一些准备工作
2. 取消未完成的异步操作：如取消正在进行的 API 请求
3. 保存状态：在组件卸载前保存当前状态到 store 或 localStorage 等
4. 验证是否可以卸载：在某些情况下检查是否允许组件卸载

## 2. onUnmounted 钩子

`onUnmounted` 在组件实例被卸载之后调用，此时组件实例已经被完全销毁，不再可用。适用于需要在组件销毁后执行某些清理工作的场景。

### 具体场景

1. 清理工作：清除定时器、事件监听器等
2. 释放资源：释放手动创建的 DOM 元素或其他资源
3. 断开连接：断开 WebSocket 连接或其他持久连接
4. 清理第三方库实例：销毁图表、地图等第三方库创建的实例
