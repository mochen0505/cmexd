<script>
  import { setContext } from 'svelte';

  setContext('tabs', true);
</script>

<style>
  .tab-header {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
  }
</style>

<ul class="tab-header">
  <slot />
</ul>
