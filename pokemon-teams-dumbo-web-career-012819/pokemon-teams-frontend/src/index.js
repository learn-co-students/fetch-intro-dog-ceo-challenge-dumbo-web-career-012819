const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

// const pokemonTrainerCard = (trainer) => {
// return`
// <div class="card" data-id="${trainer.id}"><p>${trainer.name}</p>
//   <button data-trainer-id="${trainer.id}">Add Pokemon</button>
//   <ul name="list-pokemon-${trainer.id}">
//   </ul>
// </div>`;
// }

const mainTag = document.querySelector('main');

mainTag.addEventListener('click',(event) => {
    debugger
    console.log(event.target)
});

const tag = document.querySelector('ul');

// fetch(TRAINERS_URL)
// .then(response => response.json())
// .then((trainers) => {
//     trainers.forEach((trainer) => {
//         mainTag.innerHTML += pokemonTrainerCard(trainer)
//          const ulTag = document.getElementsByName('list-pokemon-' + trainer.id)[0]
//
//
//         trainer.pokemons.forEach((pokemon)=> {
//             function pokemonId() {return `<li>${pokemon.nickname} (${pokemon.species}) <button class="release" data-pokemon-id="${pokemon.id}">Release</button></li>`}
//             return ulTag.innerHTML += pokemonId()
//         })
//     })
// })
