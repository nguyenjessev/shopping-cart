<script>
  import { bagItems } from '$lib/stores.js';

  export let product;

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const removeItem = (item) => {
    bagItems.update((bag) => {
      bag.delete(item);

      return bag;
    });
  };
</script>

<div class="bag-item-row">
  <div class="img-container">
    <img src={product.image} alt={product.name} class="product-image" />
  </div>
  <div class="product-info">
    <div>
      <h3 class="product-name">{product.name}</h3>
      <div class="product-price">{formatter.format(product.price)}</div>
      <button class="remove-bag-item" on:click={removeItem(product)}
        >Remove</button
      >
    </div>
    <div class="quantity-controls">
      <div class="quantity-control"><i class="fa-solid fa-angle-up" /></div>
      <div class="quantity">x{$bagItems.get(product)}</div>
      <div class="quantity-control"><i class="fa-solid fa-angle-down" /></div>
    </div>
  </div>
</div>

<style>
  .bag-item-row {
    background-color: hsl(0, 0%, 94%);
    border: 1px solid hsl(0, 0%, 90%);
    border-radius: 10px;
    display: flex;
    max-height: 100px;
    overflow: hidden;
  }

  .img-container {
    max-height: inherit;
    max-width: 100px;
  }

  .product-image {
    max-height: 100%;
    max-width: 100%;
  }

  .product-info {
    align-items: center;
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    padding: 1rem;
  }

  .product-name {
    margin: 0;
  }

  .remove-bag-item {
    background-color: transparent;
    border: none;
    color: hsl(0, 80%, 50%);
    font-size: 0.7rem;
    padding: 0;
  }

  .remove-bag-item:hover {
    color: hsl(0, 90%, 40%);
    cursor: pointer;
  }

  .quantity-controls {
    align-self: stretch;
    display: flex;
    flex-direction: column;
  }

  .quantity-controls > * {
    flex-grow: 1;
  }

  .quantity-control {
    color: hsl(210, 80%, 50%);
  }

  .quantity-control:hover {
    color: hsl(210, 90%, 40%);
    cursor: pointer;
  }
</style>
