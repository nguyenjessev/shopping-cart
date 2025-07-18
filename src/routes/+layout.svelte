<script>
  import Navbar from './Navbar.svelte';
  import '$lib/styles.css';
</script>

<svelte:head>
  <script
    src="https://kit.fontawesome.com/a5c020bdad.js"
    crossorigin="anonymous"
  ></script>
</svelte:head>

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
    height: 100vh;
    height: 100dvh;
    overflow: hidden;
  }
</style>
