<script>
  import { Button } from '@cmexd/button';
  import { Modal } from '@cmexd/modal';

  let visible = false

  function showModal() {
    visible = true
  }

  function handleModalClose() {
    visible = false
  }

</script>

<Button
  class="demo-button"
  type="primary"
  on:click={showModal}
>
  Show Modal
</Button>

<Modal
  {visible}
  on:close={handleModalClose}
>
  test
</Modal>
