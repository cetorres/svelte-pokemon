<script lang='ts'>
	import PokemonCard from '$lib/PokemonCard.svelte';
	import { pokemon } from '$lib/stores.js';

	let searchText;
	let offset = 0;
	let limit = 18;
	let page = 1;

	const handleSearch = () => {
		offset = 0;
		page = 1;
		search();
	}

	const search = () => {
		pokemon.search(searchText, offset, limit);
	}

	const changePage = (value) => {
		page = page + value;
		if (page < 1) page = 1;
		offset = value == 1 ? offset + limit : offset - limit;
		if (offset < 0) offset = 0;
		search();
	}

	search();
</script>

<svelte:head>
	<title>Svelte Pokédex</title>
</svelte:head>

<section>
	<h1>
		Svelte Pokédex
	</h1>

	<div class='search'>
		<input type='text' class='search-text' placeholder="search" id='search' bind:value={searchText} on:change={handleSearch} />
	</div>

	<div class='pokemon-list'>
		{#each $pokemon as item}
			<PokemonCard pokemon={item} />
		{/each}		
	</div>

	{#if $pokemon.length == 0}
		<div class='error'>
			No pokemon found.
		</div>
	{/if}

	<div class='pagination-container'>
		<button on:click={() => changePage(-1)} disabled={page==1}>Previous</button>
		Page: {page}
		<button on:click={() => changePage(1)} disabled={$pokemon.length == 0}>Next</button>
	</div>
</section>

<style>
	.search {
		text-align: center;
	}

	.search-text {
		width: 80%;
		height: 36px;
		font-size: 22px;
		padding: 8px 18px 8px 18px;
		border-radius: 24px;
		border: 0;
	}

	.search-text:focus {
		outline: none;
	}

	.pokemon-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.error {
		text-align: center;
		font-size: 24px;
		margin: var(--column-margin-top) auto 0 auto;
		margin-bottom: 60px;
	}

	.pagination-container {
		text-align: center;
	}
</style>
