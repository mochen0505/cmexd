<script>
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    import '@cmexd/style';
    import logo from '../img/logo.png';
    import github from '../img/github.png';
    import '../style/code.css';
    import '../style/base.css';

    let currentComponent;

    $: currentComponent = $page.routeId.split('/')[1];

    function handleRedirect (comp) {
      goto(`/components/${comp}`)
    }

    function handleRedirectToGithub() {
      goto('https://github.com/mochen0505/cmexd')
    }

    function handleRedirectToHome() {
      goto('/')
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
  li .item {
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
  li .item:hover,
  .active .item {
    color: #003fe6;
    text-decoration: none;
  }
  .content-right {
    flex: 1;
  }
  main {
    display: flex;
    height: calc(100vh - 64px);
  }
  .main-content {
    width: 100%;
    padding: 40px;
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
        <li class:active={currentComponent === 'icon'} on:click={() => handleRedirect('icon')}>
          <div class="item">Icon</div>
        </li>
        <li class:active={currentComponent === 'button'} on:click={() => handleRedirect('button')}>
          <div class="item">Button</div>
        </li>
        <li class:active={currentComponent === 'modal'} on:click={() => handleRedirect('modal')}>
          <div class="item">Modal</div>
        </li>
      </ul>
    </nav>
  </div>
  <div class="content-right">
    <main>
      <div class="main-content">
        <slot/>
      </div>
    </main>
  </div>
</div>

