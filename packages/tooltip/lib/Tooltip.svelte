<script>
  import { onDestroy, onMount } from 'svelte';
  import {fade} from 'svelte/transition';
  import classNames from "classnames";
  import { createPopper } from '@popperjs/core';
  import Portal from './Portal.svelte';

  let className = '';
  export { className as class };
  export let target = '';
  export let placement = 'bottom';
  export let zIndex;
  /**
   * Trigger type
   * @type {"hover" | "click"}
   */
  export let trigger = 'hover';
  export let isFade = true;
  export let offset = [0, 8];
  export let padding = 0;

  let hover = false;
  let click = false;
  let popperInstance;
  let targetEl;
  let tooltipEl;
  let classes;

  $: classes = classNames(
    className,
    'tooltip',
  );

  $: {
    if ((click || hover) && tooltipEl) {
      popperInstance = createPopper(targetEl, tooltipEl, {
        placement,
        modifiers: [
          {
            name: 'offset',
            options: {offset},
          },
          {
            name: 'preventOverflow',
            options: {
              altAxis: true,
              padding: padding,
            },
          }
        ]
      });
    } else if (popperInstance) {
      popperInstance.destroy();
      popperInstance = undefined;
    }
  }

  $: if (target) {
    removeListeners();
    addListeners();
  }

  onMount(() => {
    addListeners()
  });
  onDestroy(() => {
    removeListeners()
  });

  function addListeners() {

    if (target == null || target.length === 0) {
      targetEl = null;
      return;
    }
    try {
      if (target instanceof HTMLElement) {
        targetEl = target;
      }
    } catch (e) {
      // fails on SSR
    }

    if (targetEl == null) {
      try {
        targetEl = document.querySelector(`#${target}`);
      }
      catch (e) {
        // fails on SSR
      }
    }

    if (targetEl && trigger === 'hover') {
      targetEl.addEventListener('mouseover', open);
      targetEl.addEventListener('mouseleave', close);
      targetEl.addEventListener('focus', open);
      targetEl.addEventListener('blur', close);
    }

    if (targetEl && trigger === 'click') {
      targetEl.addEventListener('click', toggle);
    }
  }

  function removeListeners() {
    if (targetEl && trigger === 'hover') {
      targetEl.removeEventListener('mouseover', open);
      targetEl.removeEventListener('mouseleave', close);
      targetEl.removeEventListener('focus', open);
      targetEl.removeEventListener('blur', close);
      targetEl.removeEventListener('mouseover', toggle);
    }

    if (targetEl && trigger === 'click') {
      targetEl.removeEventListener('click', toggle);
    }
  }

  function open() {
    hover = true
  }

  function close() {
    hover = false
  }

  function toggle() {
    click = !click;
  }

</script>

<style>
  .tooltip{
    border-radius: 8px;
    padding: 8px 10px 10px 8px;
    line-height: 20px;
    max-width: 450px;
    background: #000;
    color: #fff;
    font-size: 14px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
  }
  .arrow,
  .arrow2 {
    position: absolute;
    width: 8px;
    height: 8px;
  }
  .arrow2 {
    content: '';
    transform: rotate(45deg);
    background: #000;
  }
  .tooltip[data-popper-placement^='top'] > .arrow {
    bottom: -4px;
  }
  .tooltip[data-popper-placement^='bottom'] > .arrow {
    top: -4px;
  }
  .tooltip[data-popper-placement^='left'] > .arrow {
    right: -4px;
  }
  .tooltip[data-popper-placement^='right'] > .arrow {
    left: -4px;
  }
  .tooltip[data-popper-placement^='bottom'] {
    position: absolute;
    margin-top: 10px;
  }
  .tooltip[data-popper-placement^='top'] {
    position: absolute;
    display: flex;
    justify-content: center;
    margin-top: 10px;
    border-radius: 8px;
  }
  .content{
    padding: 8px 10px 10px 8px;
  }
</style>

{#if click || hover}
  <svelte:component this={Portal} zIndex={zIndex}>
    <div
      class={classes}
      bind:this={tooltipEl}
      role="tooltip"
      data-popper-placement={placement}
      in:fade={isFade ? {} : {delay: 0, duration: 0}}
      style="z-index: {zIndex}"
      {...$$restProps}
    >
      <div class="arrow" data-popper-arrow>
        <div class="arrow2"></div>
      </div>
      <div class="content">
        <slot />
      </div>
    </div>
  </svelte:component>
{/if}
