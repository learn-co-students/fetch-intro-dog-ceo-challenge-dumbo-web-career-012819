// console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

const dogImageDiv = document.querySelector('#dog-image-container');
const dogBreedUl = document.querySelector('ul#dog-breeds');
const seletcTag =  document.querySelector('select#breed-dropdown');

const addDogToHtml = (url) => {
  const divTag = document.createElement('div');
  divTag.style= "padding:20px;"
  const imgTag = document.createElement('img');
  imgTag.style.width = "50p";
  imgTag.style.height = "50";

  imgTag.src = url;
  divTag.append(imgTag)
  document.querySelector('#dog-image-container').prepend(divTag);
}

const addDogBreedToUl = (breed) => {
  const liTag = document.createElement('li');
  liTag.innerText = breed.toUpperCase();
  document.querySelector('#dog-breeds').append(liTag);

};

const getImageUrls = () => {
  fetch(imgUrl)
  .then(response => response.json())
  .then(parsedResponse => parsedResponse.message.forEach(url => addDogToHtml(url)))
};

const getDogBreeds = () => {
  return fetch(breedUrl)
  .then(response => response.json())
};

document.addEventListener('DOMContentLoaded', () => {
  getImageUrls();
  getDogBreeds()
  .then(parsedResponse => Object.keys(parsedResponse.message).forEach(breed => addDogBreedToUl(breed)));

  document.querySelector('#breed-dropdown').addEventListener('change', (event) =>{
    document.querySelector('ul#dog-breeds').innerHTML = "";
    getDogBreeds()
    .then(parsedResponse => Object.keys(parsedResponse.message).forEach(breed =>
      breed.startsWith(event.target.value) ? addDogBreedToUl(breed) : true )
    );
  });
});

document.addEventListener('click', (event) => {

  if (event.target.tagName === 'LI'){
    const redLi = document.querySelector('li.red')
    redLi ? redLi.className  = "" : false;
    event.target.className = "red";
  }


});
