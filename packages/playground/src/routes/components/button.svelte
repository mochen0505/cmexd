<script>
  import { Button } from '@cmexd/button';
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
  type="ghost"
  on:click={() => {console.log(123)}}
  disabled={false}
>
  Button
</Button>

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
>
  Button
</Button>
