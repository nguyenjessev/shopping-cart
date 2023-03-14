<script>
  import ProductTile from './ProductTile.svelte';

  const products = [
    {
      name: 'Model One',
      price: 9999.99,
      image: 'https://via.placeholder.com/400?text=Model+One',
      id: Symbol('Model One'),
    },
    {
      name: 'Model Two',
      price: 5999.99,
      image: 'https://via.placeholder.com/400?text=Model+Two',
      id: Symbol('Model Two'),
    },
    {
      name: 'Model Three',
      price: 7999.99,
      image: 'https://via.placeholder.com/400?text=Model+Three',
      id: Symbol('Model Three'),
    },
    {
      name: 'Model Four',
      price: 12999.99,
      image: 'https://via.placeholder.com/400?text=Model+Four',
      id: Symbol('Model Four'),
    },
    {
      name: 'Model Five',
      price: 1999.99,
      image: 'https://via.placeholder.com/400?text=Model+Five',
      id: Symbol('Model Five'),
    },
    {
      name: 'Model Six',
      price: 999.99,
      image: 'https://via.placeholder.com/400?text=Model+Six',
      id: Symbol('Model Six'),
    },
    {
      name: 'Model Seven',
      price: 2499.99,
      image: 'https://via.placeholder.com/400?text=Model+Seven',
      id: Symbol('Model Seven'),
    },
  ];

  const addToCart = (product) => {
    alert(product);
  };
</script>

<div class="container">
  <div class="product-grid">
    {#each products as product}
      <ProductTile {...product} on:addToCart={() => addToCart(product)} />
    {/each}
  </div>
</div>

<style>
  .container {
    background: radial-gradient(hsl(0, 0%, 70%) 10%, hsl(0, 0%, 88%) 10%);
    background-size: 2vmin 2vmin;
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
