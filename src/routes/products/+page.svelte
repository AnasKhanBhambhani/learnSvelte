<script>
  export let data;
  const products = data.products;
  const { username } = data.parentData;
</script>

<h1>{data.title} for {username}</h1>
{#each products as product}
  <h1>{product.name}</h1>
  <h4>{product.category}</h4>
  <hr />
{/each}
