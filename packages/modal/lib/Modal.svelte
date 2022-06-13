<script>
  import { tick, onMount, onDestroy, createEventDispatcher } from "svelte";
  import { fade, scale } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { IconFont } from "@cmexd/icon";
  import enableScroll from "./utils/enableScroll";

  let className = '';
  export {className as class};
  export let visible = false;
  export let width = 620;
  export let closeByEsc = true;
  export let beforeClose = () => true;

  const dispatch = createEventDispatcher();

  let attrs = {};
  let mounted = false;
  let elm;

  $: {
    const { visible, width, closeByEsc, beforeClose, ...other } = $$props;
    attrs = other;
  }
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
    dispatch("close");
  }
</script>

<style>
  .modal-mask {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 30;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .modal {
    position: relative;
    z-index: 40;
    max-height: calc(100vh - 3em);
    border-radius: 12px;
    font-size: 14px;
    font-weight: 400;
    background: #fff;
    overflow: auto;
  }
  .modal:focus {
    outline: none;
  }
  .modal::-moz-focus-inner {
    border: 0;
  }
  .modal:-moz-focusring {
    outline: none;
  }
  .modal :global(.close-icon) {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 20px;
    height: 20px;
    fill: #9fa3ab;
    cursor: pointer;
  }
</style>

<svelte:window on:keydown={onKey} on:popstate={onPopstate} />

{#if visible}
  <div
    transition:fade={{ duration: 100 }}
    class="modal-mask"
  >
    <div
      in:scale={{ duration: 100, easing: quintOut }}
      class={`modal ${className}`}
      style={`width: ${width}px`}
      tabindex="-1"
      bind:this={elm}
      {...attrs}
    >
      <IconFont class="close-icon" type="icon-close" on:click={handleModalClose}/>
      <div style="padding: 24px">
        <slot />
      </div>
    </div>
  </div>
{/if}
