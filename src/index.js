console.log('%c HI', 'color: firebrick')

let breedUl = document.getElementById("dog-breeds");
const dogDiv = document.getElementById("dog-image-container");
const letterDropDown = document.getElementById("breed-dropdown")
let breedArray = [];

const fetchAPI = () => {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(response => response.json())
        .then((dogs) => {
            dogs.message.forEach((dog) => {
                dogDiv.innerHTML += listDogs(dog);
            })
        })
}
const listDogs = (dog) => {
    return `<img src="${dog}">`;
}
fetchAPI()
//-------breeds
const fetchBreeds = () => {
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then((breeds) => {
            Object.keys(breeds.message).forEach(breed => {
                breedArray.push(breed);
                breedUl.innerHTML += listBreeds(breed);
            })


        })
}
const listBreeds = (breed) => {
    return `<div><li class="breeds">${breed}</li></div>`
}
fetchBreeds()

//-------- change changeColor

breedUl.addEventListener('click', (event) => {
    if (event.target.className === "breeds") {
        event.target.style.color = "gold"
    }
})

//----------- dropdown
// get value of dropdown, get any element that begins with that letter.
letterDropDown.addEventListener('change', (event) => {
    breedUl.innerHTML = ""
    const value = event.target.value;

    const startsWithLetter = breedArray.filter((breed) =>
        breed.startsWith(value));
    startsWithLetter.forEach((breed) => {
        breedUl.innerHTML += listBreeds(breed);

    });
})