<script lang='ts'>
  export let pokemon;
</script>

<div class='pokemon-item'>
  <a href={`pokemon/${pokemon.id}`}>
    <p><img src={pokemon.image} alt={pokemon.name} /></p>
    <p class='name'>{pokemon.name}</p>
  </a>
</div>

<style>
	.pokemon-item {
		padding: 2rem;
		text-align: center;
		cursor: pointer;
	}

	.name {
		text-transform: capitalize;
	}
</style>