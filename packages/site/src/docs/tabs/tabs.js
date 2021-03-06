const tabs = `
<script>
  import { Tabs, TabPane } from '@cmexd/tabs';

  function handleTabChange(e) {
    console.log(e.detail)
  }

</script>

<Tabs class="my-tabs" on:change={handleTabChange}>
  <TabPane tabId="1" tab="tab1" active>
    content 1
  </TabPane>
  <TabPane tabId="2" tab="tab2">
    content 2
  </TabPane>
  <TabPane tabId="3" tab="tab3">
    content 3
  </TabPane>
</Tabs>
`

export default tabs
