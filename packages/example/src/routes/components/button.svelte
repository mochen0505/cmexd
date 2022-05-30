<script>
  import { Button } from '@cmexd/button';
</script>

<style>
</style>

<Button
  class="demo-button"
  type="primary"
  on:click={() => {console.log(123)}}
>
  Button
</Button>

<Button
  class="demo-button"
  type="primary"
  on:click={() => {console.log(123)}}
  loading={true}
  disabled={false}
>
  Button
</Button>
