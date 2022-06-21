<script>
  import { onMount, onDestroy } from 'svelte';

  export let container;

  let ref;
  let portal;

  onMount(() => {
    portal = document.createElement('div');
    portal.className = 'portal';
    container.appendChild(portal);
    portal.appendChild(ref);
  });

  onDestroy(() => {
    if (typeof container !== 'undefined') {
      container.removeChild(portal);
    }
  });
</script>

<div bind:this={ref} {...$$restProps}>
  <slot />
</div>
