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

const fetchPokemon = () => {
  // requestPokemon((pokemon) => {
  //   appendPokemon(pokemon);
  // })

  fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then(response => {
      console.log(response.json().then((data) => {
        appendPokemon(data.name, data.sprites.front_default)
      }))
    })
};

// const requestPokemon = (callback) => {
//   setTimeout(() => {
//     callback('Rattata');
//   }, 1000)
// };

window.onload = fetchPokemon();