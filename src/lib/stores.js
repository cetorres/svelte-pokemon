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

export const pagination = writable({page: 1, offset: 0, limit: 24, searchText: ''});