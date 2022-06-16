const tooltip = `
<script>
  import { Tooltip } from '@cmexd/tooltip';
  import { Button } from '@cmexd/button';
</script>

<Button id="test">click</Button>
<Tooltip target="test" placement="right" trigger="click">
  click to show the tooltip
</Tooltip>
`

export default tooltip
