<script>
  import Navbar from './Navbar.svelte';
  import './styles.css';
</script>

<div class="container">
  <header>
    <Navbar />
  </header>

  <slot />
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
  }
</style>
