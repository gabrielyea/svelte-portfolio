<script>
	import { onMount } from 'svelte';
	import { flip } from 'svelte/animate';
	import { circIn, elasticInOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';
	import Project from '$lib/Project.svelte';

	const waitTime = 3;

	onMount(async () => {
		setTimeout(() => {
			ready = true;
			startPresentation();
		}, 500 * waitTime);
	});

	$: ready = false;

	let projects = [1, 2, 3, 4];

	/**  @type{any} */
	let tempContainer = [];

	const addProject = () => {
		tempContainer = [...tempContainer, tempContainer.length + 1];
	};

	const delay = async () => new Promise((resolve) => setTimeout(resolve, 1000));
	async function startPresentation() {
		for (let i = 0; i < projects.length; i += 1) {
			addProject();
			await delay();
		}
	}

	const [send, rec] = crossfade({
		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;
			return {
				duration: 1000,
				easing: elasticInOut,
				css: (t) => `
        transform: ${transform} scale(${t});
        opacity: ${t};
        `
			};
		}
	});
</script>

{#if ready}
	<div class="flex gap-4 m-8">
		{#each tempContainer as project (project)}
			<div in:rec={{ key: project }} out:send={{ key: project }} animate:flip>
				<Project delay={0} data={project} />
			</div>
		{/each}
	</div>
{/if}
