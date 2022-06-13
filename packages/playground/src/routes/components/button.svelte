<script>
  import { Button } from '@cmexd/button';

  let loading = false

  function handleLoading() {
    loading = true;
  }

</script>

<Button
  class="demo-button"
  type="text"
  on:click={() => {console.log(123)}}
>
  Button
</Button>

<Button
  class="demo-button"
  type="reverse"
  on:click={() => {console.log(123)}}
  disabled={false}
>
  Button
</Button>

<Button
  class="demo-button"
  type="primary"
  mode="night"
  on:click={() => {console.log(123)}}
>
  Button
</Button>

<Button
  class="demo-button"
  type="primary"
  on:click={handleLoading}
  loading={loading}
>
  Button
</Button>
