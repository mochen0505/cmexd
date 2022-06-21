const modal = `
<script>
  import { Button } from '@cmexd/button';
  import { Modal } from '@cmexd/modal';

  let visible = false;
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
    Show Modal
  </Button>
</div>

<Modal
  {visible}
  container={btnWrap}
  on:close={handleModalClose}
>
  test
</Modal>

`

export default modal
