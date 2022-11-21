<script>
	import { navigating } from '$app/stores';
	import NavBar from '$lib/NavBar.svelte';
  import '../app.css'
</script>

{#if $navigating}
	<h1>Loading</h1>
{/if}

<NavBar />

<main class="flex">
  <slot />
</main>
