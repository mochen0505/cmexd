<script>
  import { getContext, onMount } from 'svelte';
  import classNames from "classnames";

  let className = '';
  export { className as class };
  export let tab = undefined;
  export let tabId = undefined;
  export let active = false;

  const tabs = getContext('tabs');
  const { gutter, activeTabId, setActiveTab } = getContext('tabContent');

  let tabOpen = active;
  let classes;

  $: classes = classNames(
    'tab-item',
    {
      active: tabOpen,
    }
  )

  $: classesContent = classNames(
    className,
    'tab-content',
    {
      show: tabOpen,
    }
  )

  $: if ($activeTabId !== undefined) {
    tabOpen = $activeTabId === tabId;
  }

  onMount(() => {
    if (active) {
      setActiveTab(tabId);
    }
  });

</script>

<style>
  li {
    position: relative;
    line-height: 28px;
    font-size: 14px;
    font-weight: 500;
    color: #676b72;
    cursor: pointer;
    list-style: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -user-select: none;
  }
  .active {
    font-weight: 600;
    color: #000;
  }
  .active:after {
    display: block;
    position: absolute;
    bottom: -1px;
    width: 100%;
    height: 3px;
    content: '';
    background: #003fe6;
  }
  .tab-content {
    display: none;
  }
  .show {
    display: block;
  }
</style>

{#if tabs}
  <li class={classes} style={`margin-right: ${gutter}px`}>
    <div on:click={() => setActiveTab(tabId)}>
      {#if tab}
        {tab}
      {/if}
      <slot name="tab" />
    </div>
  </li>
{:else}
  <div class={classesContent}>
    <slot />
  </div>
{/if}
