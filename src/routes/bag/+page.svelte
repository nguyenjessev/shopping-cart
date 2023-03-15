<script>
  import { bagItems, bagSubtotal } from '$lib/stores.js';
  import BagItem from './BagItem.svelte';

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
</script>

<div class="container">
  <div class="content">
    <h1>Bag</h1>
    <div class="bag-items">
      {#if !$bagItems.size}
        Your bag is currently empty.
      {:else}
        {#each [...$bagItems] as bagItem}
          <BagItem product={bagItem[0]} />
        {/each}
        <div class="bag-footer">
          <div class="subtotal">
            <strong>Subtotal:</strong>
            {formatter.format($bagSubtotal)}
          </div>
          <button class="checkout-btn">Checkout</button>
        </div>
      {/if}
    </div>
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

  .content {
    color: black;
    margin: 0 auto;
    max-width: 600px;
  }

  .bag-items {
    background: hsl(40, 50%, 95%);
    border: 1px solid hsl(207, 95%, 8%);
    border-radius: 10px;
    box-shadow: -8px 8px 20px -8px hsl(207, 95%, 8%);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
  }

  .bag-footer {
    align-items: center;
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
  }

  .checkout-btn {
    background-color: hsl(210, 80%, 50%);
    border: none;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    padding: 1rem 2rem;
  }

  .checkout-btn:hover {
    background-color: hsl(210, 90%, 40%);
    cursor: pointer;
  }
</style>
