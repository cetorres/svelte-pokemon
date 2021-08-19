export const searchPokemonByName = async (name = '', offset = 0, limit = 18) => {  
  const query = `
    query samplePokeAPIquery {
      pokemon_v2_pokemon(offset: ${offset}, limit: ${limit}, where: {name: {_ilike: "%${name}%"}}) {
        id
        name
      }
    }
  `;
  const json = await fetchPokemonsGQ(query);
  const results = json.data ? addImages(json.data.pokemon_v2_pokemon) : [];
  return results;
}

export const getPokemonById = async (id) => {
  const query = `
    query samplePokeAPIquery {
      pokemon_v2_pokemon_by_pk(id: ${id}) {
        id
        name
        pokemon_v2_pokemonabilities {
          pokemon_v2_ability {
            name
            id
          }
        }
        pokemon_v2_pokemonstats {
          base_stat
          effort
          pokemon_v2_stat {
            name
          }
        }
      }
    }
  `;
  const json = await fetchPokemonsGQ(query);
  const results = json.data ? addImage(json.data.pokemon_v2_pokemon_by_pk) : {};
  return results;
}

const fetchPokemonsGQ = async (query) => {
  const url = 'https://beta.pokeapi.co/graphql/v1beta';
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Method-Used': 'graphiql'
    },
    body: JSON.stringify({ query })
  });
  const json = await res.json();
  return json;
}

const addImages = (results) => {
  const pokemonWithImages = results.map((data) => {
    return addImage(data);
  });
  return pokemonWithImages;
}

const addImage = (data) => {
  return {
    ...data,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`
  };
}