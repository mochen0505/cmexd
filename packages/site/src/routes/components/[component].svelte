<script>
    import { page } from '$app/stores';
    import Repl from '../../repl';

    let repl
    let comp
    let Comp

    $: updateComponent($page.params)

    async function updateComponent(params) {
      if (params.component) {
        const component = params.component
        comp = (await import(`../../docs/${component}/${component}.js`)).default;
        Comp = (await import(`../../docs/${component}/${component}.md`)).default;
        await repl.set({
          components: [
            {
              name: 'App',
              type: 'svelte',
              source: comp
            }
          ]
        });
      }
    }
</script>

<main>
    <div class='md-part'>
        <svelte:component this={Comp}/>
    </div>
    <Repl bind:this={repl} orientation="rows" />
</main>

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
