

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const breedUl = document.querySelector('#dog-breeds')
const dogTag = document.querySelector('#dog-image-container')
const dropDown = document.querySelector('#breed-dropdown')
let breedList = []

document.addEventListener('DOMContentLoaded', () => {
  fetchDogs()
  fetchBreeds()
})

function fetchBreeds(){
  fetch(breedUrl)
    .then((response) => {
      return response.json()
    })
    .then((parsedResponse) => {
      Object.keys(parsedResponse.message).forEach((breed) => {
        breedList.push(breed)
        return renderBreed(breed)
      })
    })
}



function fetchDogs(){
  fetch('https://dog.ceo/api/breeds/image/random/4')
    .then((response) => {
      return response.json()
    })
    .then((parsedResponse) => {
      parsedResponse.message.forEach((image) => {
        return renderImg(image)
      })
    })
}

function renderImg(parsedImageUrl) {

  dogTag.innerHTML += `<li><img src="${parsedImageUrl}" alt=""></li>`
}


function renderBreed(breed){
  breedUl.innerHTML += `<li>${breed}</li>`
}

breedUl.addEventListener('click', function(e) {
  if (e.target.tagName === "LI") {
    e.target.style.color ='#44f1de'
  }
})

dropDown.addEventListener('change', (e) => {
  breedUl.innerHTML = ''

  breedList.filter((breed) => {

    return breed[0] === e.target.value
  })
  .forEach((letterBreed) => {

    return renderBreed(letterBreed)
  })
})
