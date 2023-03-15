<script>
  import { createEventDispatcher } from 'svelte';

  export let name;
  export let price;
  export let image;

  const dispatch = createEventDispatcher();

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const addToCart = () => {
    dispatch('addToCart');
  };
</script>

<div class="tile">
  <img src={image} alt="Product" class="product-img" />
  <div class="card-bottom">
    <div class="product-info">
      <h3 class="product-name">{name}</h3>
      <div class="product-price">{formatter.format(price)}</div>
    </div>
    <button class="add-to-bag-btn" on:click={addToCart}>Add to Bag</button>
  </div>
</div>

<style>
  .tile {
    background: hsl(40, 50%, 95%);
    border: 1px solid hsl(207, 95%, 8%);
    border-radius: 10px;
    box-shadow: -8px 8px 20px -8px hsl(207, 95%, 8%);
    color: black;
    max-width: 100%;
    overflow: hidden;
  }

  .product-img {
    max-width: 100%;
  }

  .card-bottom {
    display: flex;
    justify-content: space-between;
    padding: 2rem;
  }

  .product-name {
    margin: 0;
  }

  .add-to-bag-btn {
    background-color: hsl(210, 80%, 50%);
    border: none;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    padding: 1rem;
  }

  .add-to-bag-btn:hover {
    background-color: hsl(210, 90%, 40%);
    cursor: pointer;
  }
</style>
