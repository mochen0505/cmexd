<script lang="ts">
  import { Loading } from '@cmexd/icon';

  let className = '';
  export {className as class};
  export let minWidth = '';
  export let type = 'default';
  export let size = 'normal';
  export let target = '_self';
  export let href = null;
  export let download = undefined;
  export let disabled = false;
  export let loading = false;
</script>

<style>
  button:focus,
  a:focus {
    outline: 0;
  }
  button,
  a {
    display: inline-block;
    border: solid 1px;
    border-radius: 2px;
    padding: 0 32px;
    line-height: 48px;
    cursor: pointer;
    text-align: center;
  }
  .p024 {
    padding: 0 24px;
  }
  .small {
    padding: 0 16px;
    line-height: 32px;
  }
  button + button {
    margin-left: 24px;
  }
  .small + .small {
    margin-left: 12px;
  }
  button :global(svg) {
    display: inline-block;
    vertical-align: middle;
    -webkit-animation: loading-circle 1s infinite linear;
    animation: loading-circle 1s infinite linear;
    transform: scale(0);
    transition: transform 3s linear;
  }
  .default {
    border-color: #ccc;
    background: transparent;
    color: #383838;
  }
  .default:hover {
    border-color: #003fe6;
    color: #003fe6;
  }
  .dark {
    border-color: #e5e5e5;
    background: transparent;
    color: #fff;
  }
  .dark:hover {
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
  .common {
    border-color: #dbdfe7;
    background: #fff;
    color: #003fe6;
  }
  .common:hover {
    border-color: #003fe6;
    background: #003fe6;
    color: #fff;
  }
  .primary {
    border-color: #003fe6;
    background: #003fe6;
    color: #fff;
  }
  .warning {
    border-color: #ebaf1a;
    background: #ebaf1a;
    color: #fff;
  }
  .danger {
    border-color: #dc4a45;
    background: #dc4a45;
    color: #fff;
  }
  .white {
    border-color: #fff;
    background: #fff;
    color: #003fe6;
  }
  .golden {
    border-color: #f0bb89;
    background: linear-gradient(135deg, #fde3ca 0%, #f0bb89 100%);
    color: #12192a;
  }
  .primary:hover,
  .warning:hover,
  .danger:hover {
    opacity: 0.8;
  }
  .primary:disabled,
  .warning:disabled,
  .danger:disabled {
    opacity: 0.4;
  }
  a.disabled,
  button:disabled {
    pointer-events: none;
    opacity: 0.4;
  }
  @keyframes loading-circle {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>

{#if href}
  <a
    class:disabled={disabled || loading}
    {download}
    {href}
    {target}
    class="{className} f14"
    class:loading
    class:small={size === 'small'}
    class:default={type === 'default'}
    class:text={type === 'text'}
    class:common={type === 'common'}
    class:primary={type === 'primary'}
    class:warning={type === 'warning'}
    class:danger={type === 'danger'}
    class:golden={type === 'golden'}
    class:dark={type === 'dark'}
    class:white={type === 'white'}
    style="min-width: {minWidth ? minWidth : 'auto'}"
    on:click
  >
    <slot />
  </a>
{:else}
  <button
    disabled={disabled || loading}
    class="f14 {className}"
    class:loading
    class:small={size === 'small'}
    class:default={type === 'default'}
    class:text={type === 'text'}
    class:common={type === 'common'}
    class:primary={type === 'primary'}
    class:warning={type === 'warning'}
    class:danger={type === 'danger'}
    class:golden={type === 'golden'}
    class:dark={type === 'dark'}
    class:white={type === 'white'}
    style="min-width: {minWidth ? minWidth : 'auto'}"
    on:click
  >
    {#if loading}
      <Loading />
    {/if}
    <slot />
  </button>
{/if}
