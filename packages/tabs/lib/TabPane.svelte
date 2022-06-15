<script>
  import { getContext, onMount } from 'svelte';

  let className = '';
  export { className as class };
  export let tab = undefined;
  export let tabId = undefined;
  export let active = false;
  export let disabled = false;

  const tabs = getContext('tabs');
  const { activeTabId, setActiveTab } = getContext('tabContent');

  let tabOpen = active;

  $: if ($activeTabId !== undefined) {
    tabOpen = $activeTabId === tabId;
  }

  onMount(() => {
    if (active) {
      setActiveTab(tabId);
    }
  });

</script>

{#if tabs}
  <li class={className}>
    <div on:click={() => setActiveTab(tabId)}>
      {#if tab}
        {tab}
      {/if}
      <slot name="tab" />
    </div>
  </li>
{:else}
  <div class={className}>
    <slot />
  </div>
{/if}
