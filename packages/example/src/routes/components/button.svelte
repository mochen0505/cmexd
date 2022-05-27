<script>
  import { Button } from '@cmexd/button';
</script>

<style>
  main {
    display: flex;
    height: calc(100vh - 64px);
  }
  .md-part {
    width: 100%;
    padding: 40px;
    border-right: 1px solid rgba(0, 0, 0, 0.12);
  }
</style>

<main>
  <div class="md-part">
    <Button
      label='Button'
      primary
      on:click={() => {console.log(123)}}
    />
  </div>
</main>
