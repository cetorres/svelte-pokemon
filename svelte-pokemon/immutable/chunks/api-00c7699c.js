var c=Object.defineProperty,_=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var r=(e,o,t)=>o in e?c(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,m=(e,o)=>{for(var t in o||(o={}))d.call(o,t)&&r(e,t,o[t]);if(a)for(var t of a(o))y.call(o,t)&&r(e,t,o[t]);return e},p=(e,o)=>_(e,u(o));const P=async(e="",o=0,t=18)=>{const n=`
    query samplePokeAPIquery {
      pokemon_v2_pokemon(offset: ${o}, limit: ${t}, where: {name: {_ilike: "%${e}%"}}) {
        id
        name
      }
    }
  `,s=await i(n);return s.data?l(s.data.pokemon_v2_pokemon):[]},b=async e=>{const o=`
    query samplePokeAPIquery {
      pokemon_v2_pokemon_by_pk(id: ${e}) {
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
  `,t=await i(o);return t.data?k(t.data.pokemon_v2_pokemon_by_pk):{}},i=async e=>await(await fetch("https://beta.pokeapi.co/graphql/v1beta",{method:"POST",headers:{"Content-Type":"application/json","X-Method-Used":"graphiql"},body:JSON.stringify({query:e})})).json(),l=e=>e.map(t=>k(t)),k=e=>p(m({},e),{image:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${e.id}.png`});export{b as g,P as s};
