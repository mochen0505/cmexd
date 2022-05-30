const button = `
<script>
	import {Button} from '@cmexd/button'
</script>

<Button
  class="demo-button"
  type="primary"
  on:click={() => {console.log(123)}}
  loading={true}
  disabled={false}
>
  Button
</Button>
`

export default button
