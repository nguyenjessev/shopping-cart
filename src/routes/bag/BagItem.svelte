<script>
  import { bagItems } from '$lib/stores.js';

  export let product;
</script>

<div>
  {product.name}
</div>

<div>
  {$bagItems.get(product)}
</div>
