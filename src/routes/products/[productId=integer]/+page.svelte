<script>
  import { page } from "$app/state";

  export let data;
  let title = data.title;
  let product = data.products;
</script>

<h1>{title}</h1>
<div style="border: 2px solid black;">
  <h1>name: {product.name}</h1>
  <p>price: {product.price}</p>
  <p>brand: {product.brand}</p>
  <p>stock: {product.stock}</p>
</div>
