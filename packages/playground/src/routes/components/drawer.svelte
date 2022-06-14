<script>
  import { Button } from '@cmexd/button';
  import { Drawer } from '@cmexd/drawer';

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
  Show Drawer
</Button>

<Drawer
  {visible}
  on:close={handleModalClose}
>
  test
</Drawer>
