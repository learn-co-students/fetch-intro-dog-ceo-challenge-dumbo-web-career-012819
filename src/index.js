console.log('%c HI', 'color: firebrick')

const divTag = document.getElementById('dog-image-container');
const ulTag = document.getElementById('dog-breeds');
const selectTag = document.getElementById('breed-dropdown');

//trying the make it DRY
// const addDogs = (parsedResponse) => {return `<li>
//     <img width="200" src="${parsedResponse}"
// </li>`;
// }
function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())
    .then(parsedResponse => {
         //console.log(parsedResponse.message)
        parsedResponse.message.forEach(dog => {
            divTag.innerHTML += `<div><img width "200" src="${dog}"></div>`
        })
    })

fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then((parsedResponse) => {
        //console.log((Object.keys(parsedResponse.message)))
        Object.keys(parsedResponse.message).forEach(function(breed) {
            ulTag.innerHTML += `<li>${breed}</li>`
        })
    })

ulTag.addEventListener('click', function(event) {
    debugger
    if (event.target.tagName === 'LI') {
        event.target.style.color = getRandomColor();
    }
})

selectTag.addEventListener('click', function(event) {
    console.log(event.target.children)
})
