<script context='module' lang='ts'>
	import { getPokemonById } from '$lib/api';
  import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ params }) => {
		const pokemon = await getPokemonById(params.id);
		return {
			props: {
				pokemon
			}
		}
	}
</script>

<script lang='ts'>
	export let pokemon;
</script>

<svelte:head>
	<title>Pokemon: {pokemon.name}</title>
</svelte:head>

<h1 class='title capitalize'>
  <img src={pokemon.image} alt={pokemon.name} /> {pokemon.name}
</h1>

<div class='details-container'>
	<h3>Stats</h3>
	<table>
		<tr>
			<th>Name</th>
			<th>Base</th>
			<th>Effort</th>
		</tr>
		{#each pokemon.pokemon_v2_pokemonstats as stat}
		<tr>
			<td class='capitalize'>{ stat.pokemon_v2_stat.name }</td>
			<td>{ stat.base_stat }</td>
			<td>{ stat.effort }</td>
		</tr>
		{/each}
	</table>
</div>

<div class='details-container'>
	<h3>Abilities</h3>
	<table>
		<tr>
			<th>Name</th>
		</tr>
		{#each pokemon.pokemon_v2_pokemonabilities as ability}
		<tr>
			<td class='capitalize'>{ ability.pokemon_v2_ability.name }</td>
		</tr>
		{/each}
	</table>
</div>

<style>
.capitalize {
	text-transform: capitalize;
}
.title img {
	vertical-align: middle;
}
.details-container {
	text-align: center;
}
table {
	text-align: left;
	margin: auto;
  width: 70%;
	border-collapse: collapse;
}
table, th, td {
  border: 1px solid rgb(165, 165, 165);
	padding: 6px;
}
th {
  background-color: rgb(255, 202, 162);
}
</style>