console.log('%c HI', 'color: firebrick');

const ulTag = document.getElementById('dog-breeds');
const divTag = document.getElementById('dog-image-container');
const selectTag = document.querySelector('select');
const allDogs = [];


document.addEventListener('DOMContentLoaded', function(event){

  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response){
      return response.json();
    }).then(function(json){
      json.message.forEach(function(dogImg) {
        divTag.innerHTML += `<img src="${dogImg}">`;
      })
    })

  fetch("https://dog.ceo/api/breeds/list/all")
    .then(function(response){
      return response.json();
    }).then(function(json){
      const dogObject = json.message;
      let breed;
      for (breed in dogObject) {
        ulTag.innerHTML += `<li>${breed}</li>`
        allDogs.push(breed);
      }
    })

})

ulTag.addEventListener('click', function(event){
  if (event.target.tagName === 'LI') {
    event.target.style.background = "aqua";
  }
})

selectTag.onchange = function () {
  const selection = selectTag.value;

  const filteredDogs = allDogs.filter(dog => {
    if (selection === "All Dogs") {
      return allDogs;
    }
    return dog[0] === selection;
  })

  ulTag.innerHTML = "";

  filteredDogs.forEach(function(breed){
    ulTag.innerHTML += `<li>${breed}</li>`
  })
}
