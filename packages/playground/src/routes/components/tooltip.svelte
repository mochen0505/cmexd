<script>
  import { Tooltip } from '@cmexd/tooltip';
  import { Button } from '@cmexd/button';
</script>

<Button id="test">hover</Button>
<Tooltip target="test" placement="bottom">
  hover to show the tooltip
</Tooltip>

<Button id="test1">click</Button>
<Tooltip target="test1" placement="right" trigger="click">
  <div>click to show the tooltip</div>
</Tooltip>
