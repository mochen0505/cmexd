<script>
    import { goto } from '$app/navigation';
    import TopAppBar, { Row, Section } from '@smui/top-app-bar';
    import Drawer, { Content, AppContent } from '@smui/drawer';
    import List, { Item } from '@smui/list';
    import '@smui/top-app-bar/bare.css'
    import '@smui/drawer/bare.css'
    import '@smui/list/bare.css'
    import '@smui/icon-button/bare.css'

    function handleRedirect (comp) {
        goto(`/components/${comp}`)
    }
</script>

<style>
    .drawer-container {
        position: relative;
        display: flex;
        height: calc(100vh - 64px);
    }
</style>

<TopAppBar variant="static">
    <Row>
        <Section>
            <h1>CMEX DESIGN</h1>
        </Section>
        <Section align="end" toolbar>
            123
        </Section>
    </Row>
</TopAppBar>

<div class="drawer-container">
    <Drawer>
        <Content>
            <List>
                <Item on:click={() => handleRedirect('button')}>
                    <h4>Button</h4>
                </Item>
            </List>
        </Content>
    </Drawer>
    <AppContent style="flex: 1">
        <main>
            <slot/>
        </main>
    </AppContent>
</div>

