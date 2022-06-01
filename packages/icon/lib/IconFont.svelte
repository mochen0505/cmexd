<script>
  import './iconfont/iconfont'

  let className = '';
  export {className as class};
  export let type
</script>

<style>
  .icon {
    width: 48px;
    height: 48px;
  }
</style>

<svg class="{className} icon" aria-hidden="true">
  <use xlink:href={`#${type}`}></use>
</svg>
