<script>
  import {createEventDispatcher} from 'svelte';
  import classNames from 'classnames';

  let className = '';
  export {className as class};
  /**
   * Button mode
   * @type {"day" | "night"}
   */
  export let mode = 'day';
  export let disabled = false;
  export let checked = false;

  const dispatch = createEventDispatcher();

  let classes;

  $: classes = classNames(
    className,
    {
      switch: mode !== 'night',
      [`switch-${mode}`]: mode === 'night',
      checked,
      disabled,
    }
  )

</script>

<style>
  .switch,
  .switch-night {
    position: relative;
    display: inline-block;
    width: 42px;
  }
  .wrap {
    display: block;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
  }
  .inner {
    display: block;
    margin-left: -100%;
    width: 200%;
    transition: margin 0.3s ease-in 0s;
  }
  .inner:before,
  .inner:after {
    display: block;
    box-sizing: border-box;
    float: left;
    width: 50%;
    height: 20px;
    padding: 0;
    line-height: 20px;
    font-size: 12px;
    color: white;
  }
  .inner:before {
    content: ' ';
    padding-left: 10px;
  }
  .switch .inner:before {
    background: var(--blue-main-day);
  }
  .switch-night .inner:before {
    background: var(--blue-main-night);
  }
  .inner:after {
    content: ' ';
    padding-right: 10px;
    text-align: right;
    background: #fff;
  }
  .circle {
    position: absolute;
    top: 2px;
    bottom: 0;
    right: 22px;
    display: block;
    border: 1px solid #ccc;
    border-radius: 50px;
    width: 16px;
    height: 16px;
    background: #ccc;
    transition: all 0.3s ease-in 0s;
  }
  .switch.checked .inner,
  .switch-night.checked .inner {
    margin-left: 0;
  }
  .switch.checked .circle,
  .switch-night.checked .circle {
    right: 2px;
    border: 1px solid #fff;
    background: #fff;
  }
  .switch.disabled {
    pointer-events: none;
    opacity: 0.4;
  }
</style>

<span
  class={classes}
  {...$$restProps}
  on:mousedown={(e) => e.stopPropagation()}
  on:click={() => dispatch('change')}
>
  <span class="wrap">
    <span class="inner"></span>
    <span class="circle"></span>
  </span>
</span>
