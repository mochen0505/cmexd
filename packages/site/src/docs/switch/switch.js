const switchComponent = `
<script>
  import { Switch } from '@cmexd/switch';

  let checked = false

  function handleChange(e) {
    checked = !checked;
  }

  $: console.log(checked)

</script>

<Switch {checked} on:change={handleChange}/>
`

export default switchComponent
