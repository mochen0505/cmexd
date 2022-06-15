<script>
  import { setContext } from 'svelte';

  let className = '';
  export {className as class};

  setContext('tabs', true);
</script>

<ul class={className}>
  <slot />
</ul>
