<script>
  import { Tabs, TabPane } from '@cmexd/tabs';

  function handleTabChange(e) {
    console.log(e.detail)
  }

</script>

<Tabs on:change={handleTabChange}>
  <TabPane tabId="1" active>
    <span slot="tab">
      tab slot
    </span>
    content 1
  </TabPane>
  <TabPane tabId="2" tab="tab2" disabled>
    content 2
  </TabPane>
  <TabPane tabId="3" tab="tab3">
    content 3
  </TabPane>
</Tabs>
