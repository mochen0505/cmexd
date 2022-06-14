<script lang="ts">
  import {onMount, createEventDispatcher} from 'svelte'

  let className = '';
  export {className as class};
  export let type

  const dispatch = createEventDispatcher();

  onMount(() => {
    import('./iconfont/iconfont').then(icon => {})
  })

  function handleIconClick() {
    dispatch('click')
  }
</script>

<style>
  .icon {
    width: 48px;
    height: 48px;
  }
</style>

<svg class={`icon ${className}`} aria-hidden="true" on:click={handleIconClick}>
  <use xlink:href={`#${type}`}></use>
</svg>
