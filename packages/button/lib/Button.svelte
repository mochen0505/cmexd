<script lang="ts">
  import classNames from 'classnames';
  import { Loading } from '@cmexd/icon';
  import Style from "./Style.svelte";

  let className = '';
  export {className as class};
  export let type = 'primary'; // primary/default/ghost/text
  export let size = 'medium'; // large/medium/small
  export let mode = 'day'; // day/night
  export let loading = false;
  export let disabled = false;

  const classes = classNames(
    className,
    {
      [`${type}`]: type && mode !== 'night',
      [`${type}-${mode}`]: mode === 'night',
      [`${size}`]: size,
      loading: loading && !disabled,
    }
  )
</script>

<style>
  button {
    border: 1px solid;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    outline: none;
  }

  .loading {
    pointer-events: none;
    opacity: 0.4;
  }

  .primary {
    border-color: var(--blue-main-day);
    background: var(--blue-main-day);
    color: #fff;
  }

  .primary-night {
    border-color: var(--blue-main-night);
    background: var(--blue-main-night);
    color: #fff;
  }

  .primary:hover {
    border-color: #3365ff;
    background: #3365ff;
  }

  .primary:active {
    background: #0023d1;
  }

  .primary:disabled {
    border-color: #e9ecef;
    background: #e9ecef;
    color: #9fa3ab;
    pointer-events: none;
  }

  .default,
  .ghost {
    border-color: #e9ecef;
    background: #fff;
    color: #010612;
  }

  .default:hover {
    background: #f2f3f6;
  }

  .default:active {
    background: #f2f3f6;
  }

  .default:disabled,
  .ghost:disabled {
    border-color: #dbdfe7;
    background: #e9ecef;
    color: #9fa3ab;
    pointer-events: none;
  }

  .ghost:hover {
    border-color: #003fe6;
    color: #003fe6;
  }

  .ghost:active {
    border-color: #003fe6;
    color: #003fe6;
  }

  .text {
    border-color: transparent;
    background: transparent;
    color: #003fe6;
  }

  .text:hover {
    opacity: 0.8;
  }

  .text:disabled {
    pointer-events: none;
    opacity: 0.4;
  }

  .large {
    min-width: 120px;
    height: 48px;
    padding: 0 24px;
    line-height: 24px;
    font-size: 16px;
    font-weight: 500;
  }

  .medium {
    min-width: 80px;
    height: 40px;
    padding: 0 20px;
    line-height: 20px;
    font-size: 14px;
    font-weight: 500;
  }

  .small {
    min-width: 70px;
    height: 34px;
    padding: 0 16px;
    line-height: 20px;
    font-size: 14px;
    font-weight: 500;
  }
</style>

<button
  {disabled}
  class="{classes}"
  on:click
>
  {#if loading}
    <Loading />
  {/if}
  <slot />
</button>
