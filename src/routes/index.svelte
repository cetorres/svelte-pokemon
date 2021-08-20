<script lang='ts'>
	import PokemonCard from '$lib/PokemonCard.svelte';
	import { pokemon, pagination } from '$lib/stores.js';

	const handleSearch = () => {
		$pagination.offset = 0;
		$pagination.page = 1;
		search();
	}

	const search = () => {
		pokemon.search($pagination.searchText, $pagination.offset, $pagination.limit);
	}

	const changePage = (value) => {
		$pagination.page = $pagination.page + value;
		if ($pagination.page < 1) {
			$pagination.page = 1;
		}
		$pagination.offset = value == 1 ? $pagination.offset + $pagination.limit : $pagination.offset - $pagination.limit;
		if ($pagination.offset < 0) {
			$pagination.offset = 0;
		}
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
		<input type='text' class='search-text' placeholder="search" id='search' bind:value={$pagination.searchText} on:change={handleSearch} />
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
		<button on:click={() => changePage(-1)} disabled={$pagination.page==1}>Previous</button>
		Page: {$pagination.page}
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
