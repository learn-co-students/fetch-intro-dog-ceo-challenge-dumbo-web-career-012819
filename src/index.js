console.log('%c HI', 'color: firebrick')

/********************************************
--------------- GLOBAL VARIABLES ------------
*********************************************/
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const imageDiv = document.querySelector('div#dog-image-container');
const ulTag = document.querySelector('ul');
const selectTag = document.querySelector('select');
const dogBreeds = [];

/********************************************
------------------ FUNCTIONS ----------------
*********************************************/
function fetchImages() {
  return fetch(imgUrl)
  .then(response => response.json())
  .then(function(dogImagesObj) {
    const dogUrls = dogImagesObj.message

    dogUrls.forEach(function(dogImageUrl) {
      let imageTag = document.createElement('img');

      imageTag.src = dogImageUrl;
      imageDiv.append(imageTag);
    })
  })
}

function fetchBreeds() {
  return fetch(breedUrl)
    .then(response => response.json())
    .then(function(dogBreedsRes) {
      const dogBreedsObj = dogBreedsRes.message

      for (let breed in dogBreedsObj) {
        const liTag = document.createElement('li');

        liTag.innerText = breed;
        ulTag.append(liTag);
        dogBreeds.push(breed);
      }

    })
}

function filterDogs(selectValue) {
  return dogBreeds.filter(breed => breed[0] === selectValue);
}

/********************************************
---------------- EVENT LISTENERS ------------
*********************************************/
document.addEventListener('DOMContentLoaded', function(e) {
  fetchImages();
  fetchBreeds();
});

ulTag.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.style.backgroundColor = "coral";
  }
});

selectTag.addEventListener('change', function(e) {
  ulTag.innerHTML = '';

  filterDogs(this.value).forEach(function(breed) {
    const liTag = document.createElement('li');

    liTag.innerText = breed;
    ulTag.append(liTag);
  });
})
