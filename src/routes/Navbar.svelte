<script>
  import { page } from '$app/stores';
</script>

<nav>
  <ul class="pages">
    <li class:selected={$page.route.id === '/'}>
      <a href="/" class="nav-link">Home</a>
    </li>
    <li class:selected={$page.route.id === '/shop'}>
      <a href="/shop" class="nav-link">Shop</a>
    </li>
  </ul>
  <div class:selected={$page.route.id === '/bag'}>
    <a href="/bag" class="nav-link bag"
      ><i class="fa-solid fa-bag-shopping" /></a
    >
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
  }

  nav a {
    color: inherit;
    text-decoration: none;
  }

  .pages {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .pages > li {
    position: relative;
  }

  .nav-link {
    align-items: center;
    display: flex;
    height: 100%;
    padding: 0 2rem;
  }

  .selected::before {
    border-top: 2px solid white;
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
  }
</style>
