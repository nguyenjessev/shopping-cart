<script>
  import { base } from '$app/paths';
  import bicycle from '$lib/images/bg-bicycle.jpg';
</script>

<main class="homepage">
  <header>
    <h1>Go faster.</h1>
    <p>Conquer the toughest climbs and fastest descents with ease.</p>
    <a href="{base}/shop">Shop the collection ></a>
    <img src={bicycle} alt="Bicycle" />
  </header>
</main>

<style>
  .homepage {
    padding: 2rem;
  }

  header {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 4rem;
    margin-bottom: 0;
  }

  img {
    margin-top: -12%;
    max-width: 100%;
    min-width: 600px;
    z-index: -1;
  }

  a {
    color: hsl(207, 100%, 70%);
    text-decoration: none;
  }
</style>
