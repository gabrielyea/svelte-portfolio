<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	/** @type {number} */
	export let delay;
	/** @type {any} */
	export let data;

	onMount(() => {
		setTimeout(() => {
			ready = true;
		}, delay * 1000);
	});

	$: ready = false;
</script>

{#if ready}
<a href="/project/{data}">
	<div class="bg-pink-500 project rounded-md" transition:fade>
		<p>
			{data}
		</p>
	</div>
</a>
{/if}

<style>
	.project {
		display: block;
		width: 250px;
		height: 250px;
	}
	.project:hover {
		animation: pulse 0.2s infinite alternate ease-in-out;
	}

	@keyframes pulse {
		0% {
			filter: hue-rotate(0deg);
			scale: 1;
		}
		100% {
			filter: hue-rotate(-90deg);
			scale: 1.05;
		}
	}
</style>
