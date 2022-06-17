<script lang="ts">
  import classNames from 'classnames';
  import { Loading } from '@cmexd/icon';

  let className = '';
  export {className as class};
  /**
   * Button type
   * @type {"primary" | "reverse" | "default" | "text"}
   */
  export let type = 'primary';
  /**
   * Button size
   * @type {"large" | "medium" | "small"}
   */
  export let size = 'medium';
  /**
   * Button mode
   * @type {"day" | "night"}
   */
  export let mode = 'day';
  export let loading = false;
  export let disabled = false;

  let classes;

  $: classes = classNames(
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

  .text {
    border-color: transparent;
    background: transparent;
    color: var(--blue-main-day);
  }

  .text-night {
    border-color: transparent;
    background: transparent;
    color: var(--blue-main-night);
  }

  .text:hover {
    color: var(--blue-hover-day);
  }

  .text-night:hover {
    color: var(--blue-hover-night);
  }

  .text:active {
    color: var(--blue-click-day);
  }

  .text-night:active {
    color: var(--blue-click-night);
  }

  .text:disabled,
  .text-night:disabled {
    color: #9fa3ab;
    pointer-events: none;
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
    border-color: var(--blue-hover-day);
    background: var(--blue-hover-day);
  }

  .primary-night:hover {
    border-color: var(--blue-hover-night);
    background: var(--blue-hover-night);
  }

  .primary:active {
    border-color: var(--blue-click-day);
    background: var(--blue-click-day);
  }

  .primary-night:active {
    border-color: var(--blue-click-night);
    background: var(--blue-click-night);
  }

  .primary:disabled,
  .primary-night:disabled,
  .reverse:disabled,
  .reverse-night:disabled {
    border-color: #e9ecef;
    background: #e9ecef;
    color: #9fa3ab;
    pointer-events: none;
  }

  .reverse {
    border-color: var(--blue-main-day);
    background: transparent;
    color: var(--blue-main-day);
  }

  .reverse-night {
    border-color: var(--blue-main-night);
    background: transparent;
    color: var(--blue-main-night);
  }

  .reverse:hover {
    border-color: var(--blue-hover-day);
    color: var(--blue-hover-day);
  }

  .reverse-night:hover {
    border-color: var(--blue-hover-night);
    color: var(--blue-hover-night);
  }

  .reverse:active {
    border-color: var(--blue-click-day);
    color: var(--blue-click-day);
  }

  .reverse-night:active {
    border-color: var(--blue-click-night);
    color: var(--blue-click-night);
  }

  .default,
  .default-night {
    border-color: #e9ecef;
    background: #fff;
    color: #010612;
  }

  .default:hover,
  .default-night:hover {
    background: #f2f3f6;
  }

  .default:active,
  .default-night:active {
    background: #f2f3f6;
  }

  .default:disabled,
  .default-night:disabled {
    border-color: #dbdfe7;
    background: #e9ecef;
    color: #9fa3ab;
    pointer-events: none;
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
  {...$$restProps}
  on:click
>
  {#if loading}
    <Loading />
  {/if}
  <slot />
</button>
