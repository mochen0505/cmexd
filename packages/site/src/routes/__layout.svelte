<script>
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    import logo from '../img/logo.png';
    import github from '../img/github.png';
    import '../repl/style/code.css';
    import '../repl/style/base.css';

    const menu = [
      'icon', 'button', 'switch', 'modal', 'drawer', 'tabs'
    ];

    let currentComponent;

    $: currentComponent = $page.params.component;

    function handleRedirect (comp) {
      goto(`/components/${comp}`)
    }

    function handleRedirectToGithub() {
      goto('https://github.com/mochen0505/cmexd')
    }

    function handleRedirectToHome() {
      goto('/')
    }

    function getMenuName(name) {
      return name.slice(0, 1).toUpperCase() + name.slice(1)
    }
</script>

<style>
  .app-top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 40px;
    height: 44px;
    background: #003fe6;
  }
  .logo {
    height: 100%;
    cursor: pointer;
  }
  .content {
      position: relative;
      display: flex;
      height: calc(100vh - 64px);
  }
  .content-left {
    width: 300px;
    box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.05);
  }
  nav {
    display: flex;
    flex-direction: column;
    margin: 0;
    border-radius: 12px;
    padding: 20px 12px 0;
    min-width: 180px;
  }

  .asset-ul {
    margin: 0;
    padding: 0;
  }
  .asset-ul > li {
    padding: 12px 28px;
  }
  li {
    margin-bottom: 14px;
    list-style: none;
    font-weight: 500;
  }
  li a {
    display: block;
    font-size: 16px;
    font-weight: 700;
    color: #676b72;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
  }
  .active {
    border-radius: 8px;
    background: rgba(0, 63, 230, 0.05);
  }
  li a:hover,
  .active a {
    color: #003fe6;
    text-decoration: none;
  }
  .content-right {
    flex: 1;
  }
</style>

<div class="app-top-bar">
  <img class="logo" src={logo} alt="Logo" on:click={handleRedirectToHome} />
  <img class="logo" src={github} alt="github" on:click={handleRedirectToGithub}>
</div>

<div class="content">
  <div class="content-left">
    <nav>
      <ul class="asset-ul ml4">
        {#each menu as item}
          <li class:active={currentComponent === item} on:click={() => handleRedirect(item)}>
            <a>{getMenuName(item)}</a>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
  <div class="content-right">
    <main>
      <slot/>
    </main>
  </div>
</div>

