<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="content">
	<h1>About this app</h1>

	<p>
		This is a demo <a href='https://svelte.dev'>Svelte</a> app to show Pokemon information from the <a href='https://pokeapi.co/' target='_target'>PokéAPI</a> site.
	</p>
	
</div>

<style>
	.content {
		text-align: center;
	}
</style>
