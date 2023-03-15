<script>
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import { bagItems } from '$lib/stores.js';
</script>

<nav>
  <ul class="pages">
    <li class:selected={$page.route.id === '/'}>
      <a href="{base}/" class="nav-link">Home</a>
    </li>
    <li class:selected={$page.route.id === '/shop'}>
      <a href="{base}/shop" class="nav-link">Shop</a>
    </li>
  </ul>
  <div class="bag-link-container" class:selected={$page.route.id === '/bag'}>
    <a href="{base}/bag" class="nav-link bag">
      {#if $bagItems.size}
        <div class="bag-counter">{$bagItems.size}</div>
      {/if}
      <i class="fa-solid fa-bag-shopping" />
    </a>
  </div>
</nav>

<style>
  nav {
    background: hsl(207, 95%, 8%);
    color: white;
    display: flex;
    font-size: 1.2rem;
    height: 8vmin;
    justify-content: space-between;
    padding: 0 2rem;
  }

  nav a {
    color: inherit;
    text-decoration: none;
  }

  .pages {
    display: flex;
    gap: 1rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .pages > li,
  .bag-link-container {
    position: relative;
  }

  .nav-link {
    align-items: center;
    display: flex;
    height: 100%;
    padding: 0 1rem;
  }

  .selected::before {
    border-top: 2px solid white;
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
  }

  .bag {
    display: flex;
    gap: 1rem;
    position: relative;
  }

  .bag-counter {
    background-color: hsl(0, 80%, 50%);
    border-radius: 100px;
    bottom: 10%;
    display: grid;
    font-size: 0.6rem;
    height: 1.2rem;
    left: 10%;
    min-width: 1.2rem;
    padding: 0.2rem;
    place-items: center;
    position: absolute;
  }
</style>
