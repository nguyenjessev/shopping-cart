<script>
  import { bagItems } from '$lib/stores.js';

  export let product;

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
</script>

<div class="bag-item-row">
  <div class="img-container">
    <img src={product.image} alt={product.name} class="product-image" />
  </div>
  <div class="product-info">
    <div>
      <h3 class="product-name">{product.name}</h3>
      <div class="product-price">{formatter.format(product.price)}</div>
    </div>
    <div class="quantity-controls">Qty: {$bagItems.get(product)}</div>
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
</style>
