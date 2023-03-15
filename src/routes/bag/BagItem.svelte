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

  const increment = (item) => {
    bagItems.update((bag) => {
      bag.set(item, bag.get(item) + 1);

      return bag;
    });
  };

  const decrement = (item) => {
    bagItems.update((bag) => {
      if (bag.get(item) <= 1) {
        bag.delete(item);
      } else {
        bag.set(item, bag.get(item) - 1);
      }

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
      <button class="quantity-control" on:click={increment(product)}
        ><i class="fa-solid fa-angle-up" /></button
      >
      <div class="quantity">x{$bagItems.get(product)}</div>
      <button class="quantity-control" on:click={decrement(product)}
        ><i class="fa-solid fa-angle-down" /></button
      >
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
    background-color: transparent;
    border: none;
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
