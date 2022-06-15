<script>
  import {createEventDispatcher, setContext} from 'svelte';
  import {writable} from 'svelte/store';
  import TabHeader from './TabHeader.svelte';

  const dispatch = createEventDispatcher();

  let className = '';
  export {className as class};

  const activeTabId = writable();
  setContext('tabContent', {
    activeTabId,
    setActiveTab: (tabId) => {
      activeTabId.set(tabId);
      dispatch('change', tabId);
    }
  });

</script>

<div {...$$restProps} class={className}>
  <TabHeader>
    <slot/>
  </TabHeader>
  <slot/>
</div>
