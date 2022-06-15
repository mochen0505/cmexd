<script lang="ts">
  import { tick, onMount, onDestroy, createEventDispatcher } from "svelte";
  import { fade, fly } from "svelte/transition";
  import classNames from "classnames";
  import { IconFont } from "@cmexd/icon";

  let className = '';
  export {className as class};
  export let visible = false;
  export let width = 500;
  /**
   * Drawer direction
   * @type {"right" | "left"}
   */
  export let direction = 'right';
  export let closeByEsc = true;
  export let beforeClose = () => true;

  const dispatch = createEventDispatcher();

  let mounted = false;
  let elm;
  let classes;

  $: classes = classNames(
    'drawer',
    className,
    {
      [`${direction}`]: direction,
    }
  )

  $: if (visible) {
    mounted && enableScroll(false);
    onVisible();
  } else {
    mounted && enableScroll(true);
  }

  onMount(async () => {
    await tick();
    mounted = true;
  });
  onDestroy(() => {
    mounted && enableScroll(true);
  });

  function close(params) {
    if (beforeClose()) {
      dispatch("close", params);
      visible = false;
    }
  }
  async function onVisible() {
    await tick();
    if (!elm) return;
    let inputs = elm.querySelectorAll('input:not([type="hidden"])');
    let length = inputs.length;
    let i = 0;
    for (; i < length; i++) {
      if (inputs[i].getAttribute("autofocus")) {
        break;
      }
    }
    i < length ? inputs[i].focus() : length > 0 ? inputs[0].focus() : elm.focus();
    dispatch("open");
  }
  function onKey(e) {
    const esc = "Escape";
    if (e.keyCode === 27 || e.key === esc || e.code === esc) {
      closeByEsc && close(esc);
    }
  }
  function onPopstate() {
    visible = false;
  }

  function handleModalClose() {
    close(null);
  }

  function enableScroll(enable) {
    let isHidden = document.body.style.overflow === 'hidden';

    if (enable && isHidden) {
      let top = Math.abs(parseInt(document.body.style.top));

      document.body.style.cssText = '';
      document.body.removeAttribute('style');
      window.scrollTo(0, top);
    } else if (!enable && !isHidden) {
      document.body.style.top =
        '-' +
        Math.max(
          document.body.scrollTop,
          (document.documentElement && document.documentElement.scrollTop) || 0
        ) +
        'px';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    }
  }
</script>

<style>
  .drawer-mask {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 30;
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 0.3s ease-in;
  }
  .drawer {
    position: fixed;
    z-index: 40;
    height: 100%;
    background: #fff;
    overflow: auto;
    transition: all 0.3s ease-in;
  }
  .drawer:focus {
    outline: none;
  }
  .drawer::-moz-focus-inner {
    border: 0;
  }
  .drawer:-moz-focusring {
    outline: none;
  }
  .drawer :global(.close-icon) {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 20px;
    height: 20px;
    fill: #9fa3ab;
    cursor: pointer;
  }
  .drawer-content {
    padding: 24px
  }
  .left {
    left: 0;
  }
  .right {
    right: 0;
  }
</style>

<svelte:window on:keydown={onKey} on:popstate={onPopstate} />

{#if visible}
  <div
    transition:fade={{ duration: 300 }}
    class="drawer-mask"
  >
    <div
      transition:fly={{x: direction === 'right' ? width : -width, duration: 500}}
      class={classes}
      style={`width: ${width}px`}
      tabindex="-1"
      bind:this={elm}
      {...$$restProps}
    >
      <IconFont class="close-icon" type="icon-close" on:click={handleModalClose}/>
      <div class="drawer-content">
        <slot />
      </div>
    </div>
  </div>
{/if}
