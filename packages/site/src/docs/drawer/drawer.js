const drawer = `
<script>
  import { Button } from '@cmexd/button';
  import { Drawer } from '@cmexd/drawer';

  let visible = false
  let btnWrap;

  function showModal() {
    visible = true
  }

  function handleModalClose() {
    visible = false
  }

</script>

<div bind:this={btnWrap}>
  <Button
    class="demo-button"
    type="primary"
    on:click={showModal}
  >
    Show Drawer
  </Button>
</div>

<Drawer
  {visible}
  container={btnWrap}
  on:close={handleModalClose}
>
  test
</Drawer>

`

export default drawer
