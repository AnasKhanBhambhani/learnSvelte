<script>
  let abc = "test";
  let iable = [1, 2, 3, 4, 5];
</script>

<h1>check</h1>
{#each iable as number}
  <h1>{number}</h1>
{/each}
{#if abc === "test"}
  <h1>hello abc</h1>
{/if}
