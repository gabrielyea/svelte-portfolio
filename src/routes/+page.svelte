<script>
	import { navigating } from '$app/stores';
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicIn } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	import Projects from '$lib/Projects.svelte';

	onMount(() => {
		filled.set(1);
    filledDelay.set(1);
	});

	const filled = tweened(0, {
		duration: 1000,
		easing: cubicIn
	});

  const filledDelay = tweened(0, {
    duration: 1000,
    easing: cubicIn,
    delay: 1000
  });

</script>

<div class="flex flex-col justify-center items-center w-screen">
  <div style="opacity: {$filled};"
    class="flex flex-col
    mt-40 border-t-4
    border-t-pink-500
    rounded-md
    w-max
  ">
    <div
      style="width: {$filled * 100}%"
      class="
      flex
      flex-col
      text-9xl
      bg-clip-text text-transparent
      bg-gradient-to-r
      from-blue-400
      to-red-500"
    >
      <h1 class="p-4">Welcome!!</h1>
    </div>
  </div>

  <div style="opacity: {$filledDelay};">
    <p class="text-white text-5xl"> Check out some of my projects! </p>
  </div>

  <Projects />
</div>


<style>
</style>
