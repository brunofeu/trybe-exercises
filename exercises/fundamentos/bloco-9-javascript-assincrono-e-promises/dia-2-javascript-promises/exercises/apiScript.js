// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => inputJoke(data.joke));
};

const inputJoke = (joke) => {
  const jokeContainer = document.getElementById('jokeContainer');
  const randomJoke = document.createElement('p');
  randomJoke.innerHTML = joke;
  jokeContainer.appendChild(randomJoke)
}



window.onload = () => fetchJoke();