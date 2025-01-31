<script>
  export let data;
  import { page } from "$app/state";
  import Footer from "../lib/components/footer.svelte";
  import Header from "../lib/components/header.svelte";
</script>

<h1>{data.username}</h1>
<p>{page.data.notification}</p>
<Header />
<slot />
<Footer />
