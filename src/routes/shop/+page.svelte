<script>
  import ProductTile from './ProductTile.svelte';
  import { products, bagItems } from '$lib/stores.js';

  const addToCart = (product) => {
    bagItems.update((bag) => {
      if (!bag.has(product)) bag.set(product, 0);

      bag.set(product, bag.get(product) + 1);

      return bag;
    });
  };
</script>

<div class="container">
  <div class="product-grid">
    {#each $products as product}
      <ProductTile {...product} on:addToCart={() => addToCart(product)} />
    {/each}
  </div>
</div>

<style>
  .container {
    background: radial-gradient(hsl(0, 0%, 70%) 10%, hsl(0, 0%, 88%) 10%);
    background-size: 2vmin 2vmin;
    flex-grow: 1;
    overflow: scroll;
    padding: 8vmin 4vmin;
  }

  .product-grid {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-items: center;
    margin: 0 auto;
    max-width: 1200px;
  }
</style>
