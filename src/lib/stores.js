import { writable } from 'svelte/store';
import { searchPokemonByName } from './api';

function pokemonStore() {
  const { subscribe, set } = writable([]);

  return {
		subscribe,
    search: async (name, offset, limit) => set(await searchPokemonByName(name, offset, limit))
	};
}

export const pokemon = pokemonStore();