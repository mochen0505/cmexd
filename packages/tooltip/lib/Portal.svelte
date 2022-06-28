<script>
  import { onMount, onDestroy } from 'svelte';

  export let zIndex;

  let ref;
  let portal;

  onMount(() => {
    portal = document.createElement('div');
    portal.style.zIndex = zIndex;
    document.body.appendChild(portal);
    portal.appendChild(ref);
  });

  onDestroy(() => {
    if (typeof document !== 'undefined') {
      document.body.removeChild(portal);
    }
  });
</script>

<div bind:this={ref} style="z-index: {zIndex}">
  <slot />
</div>
