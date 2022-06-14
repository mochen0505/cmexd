# Events

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| on:open | 打开抽屉回调 | function | (event) => void |
| on:close | 关闭抽屉回调 | function | (event) => void |

<br>
<br>

# Properties

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| class | 类名 | string | - |
| visible | 显隐 | boolean | false |
| width | 宽度 | number | 500 |
| direction | 弹出方向 | right/left | right |
| closeByEsc | 按esc关闭modal | boolean | true |
| beforeClose | 关闭抽屉之前的回调 | function | () => true |
