# Events

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| on:open | 打开弹窗回调 | function | (event) => void |
| on:close | 关闭弹窗回调 | function | (event) => void |

<br>
<br>

# Properties

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| class | 类名 | string | - |
| visible | 显隐 | boolean | false |
| width | 宽度 | number | 620 |
| closeByEsc | 按esc关闭modal | boolean | true |
| container | modal挂载节点 | HTMLElement | document.body |
| beforeClose | 关闭弹窗之前的回调 | function | () => true |
