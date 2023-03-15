<script>
  import { bagItems } from '$lib/stores.js';
  import BagItem from './BagItem.svelte';
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
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
  }
</style>
