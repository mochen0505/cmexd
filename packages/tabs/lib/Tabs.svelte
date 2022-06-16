<script>
  import {createEventDispatcher, setContext} from 'svelte';
  import {writable} from 'svelte/store';
  import TabHeader from './TabHeader.svelte';

  const dispatch = createEventDispatcher();

  let className = '';
  export {className as class};
  export let gutter = 30;

  const activeTabId = writable();
  setContext('tabContent', {
    gutter,
    activeTabId,
    setActiveTab: (tabId) => {
      activeTabId.set(tabId);
      dispatch('change', tabId);
    }
  });

</script>

<div class={className} {...$$restProps}>
  <TabHeader>
    <slot/>
  </TabHeader>
  <slot/>
</div>
