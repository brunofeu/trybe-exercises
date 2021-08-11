// API do POKEMON -> https://pokeapi.co/
// Lista dos Pokemons -> https://www.pokemon.com/br/pokedex/

const appendPokemon = (pokemon, uriImagem) => {
  let ul = document.querySelector("ul");

  let li = document.createElement("li");
  let divNome = document.createElement("div");
  let divImagem = document.createElement("div");
  let img = document.createElement("img");

  divNome.innerHTML = pokemon;
  img.src = uriImagem;
  divImagem.appendChild(img);

  li.appendChild(divNome);
  li.appendChild(divImagem);

  ul.appendChild(li);
};

const getPokemon = (pokemon, callback) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(
  (response) => {
    response.json().then((dados) => {
      appendPokemon(dados.name , dados.sprites.front_default);
      callback ? callback() : undefined;
    });
  }
  );
}
const getPokemonPromise = (pokemon) => {
  return new Promise ((resolve, reject) => {
    if(pokemon){
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((response) => {
        response.json().then((dadosPokemon) => {
          appendPokemon(dadosPokemon.name , dadosPokemon.sprites.front_default);
          resolve();
        })
      })
    } else {
      reject('erro: nome pokemon')
    }
    
  })
}


const fetchPokemon = async () => {
  // getPokemon('bulbasaur', getPokemon('rattata', getPokemon('pikachu')))
  try {
  await getPokemonPromise('zubat');
  await getPokemonPromise('rattata');
  await getPokemonPromise('pikachu');
  await getPokemonPromise('charmander');
  await getPokemonPromise('charmeleon');
  await getPokemonPromise('sadsa');
} catch(error) {
  console.log(error)
}
};
// const fetchPokemon = () => {
//   fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur").then((response) => {
//     response.json().then((dados) => {
//       appendPokemon(dados.name, dados.sprites.front_default);
//       fetch("https://pokeapi.co/api/v2/pokemon/ditto").then((response) => {
//         response.json().then((dados) => {
//           appendPokemon(dados.name, dados.sprites.front_default);
//           fetch("https://pokeapi.co/api/v2/pokemon/rattata").then(
//             (response) => {
//               response.json().then((dados) => {
//                 appendPokemon(dados.name, dados.sprites.front_default);
//               });
//             }
//           );
//         });
//       });
//     });
//   });
// };

window.onload = fetchPokemon();
