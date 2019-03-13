console.log('%c HI', 'color: firebrick')

// const imgUrl = fetch("https://dog.ceo/api/breeds/image/random/4")
//   .then((response) => {return response.json})
//   .then((parsedResponse) => {
//     return parsedResponse
//   })



document.addEventListener("DOMContentLoaded", function(event){
  const imgUlr = fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(function(response){return response.json()})
  .then(function(json){
      json.message.forEach(function(img){
        console.log(json)
        let ulTag = document.querySelector("ul")
        ulTag.innerHTML += `<li><img src=${img}></li>`
      })
    })
})

document.addEventListener("DOMContentLoaded", function(event){
  const imgUlr = fetch("https://dog.ceo/api/breeds/list/all")
  .then(function(response){return response.json()})
  .then(function(json){
      let dogBreeds = json.message
      let ulTag = document.querySelector("ul")
      for (let key in dogBreeds){
        if (dogBreeds[key].length === 0){
          ulTag.innerHTML += `<li>${key}</li>`
        }
        else {
          let breedArray = []
          for (let dog of dogBreeds[key]){
            breedArray.push(dog)
          }
          ulTag.innerHTML += `<li>${key}:
          ${breedArray.join(", ")}</li>`
        }
      }
    })
})

let ulTag = document.querySelector("ul")

ulTag.addEventListener("click", function(event){
  if (event.target.tagName === "LI"){
    event.target.style.backgroundColor = 'green';
  }
})

let selectTag = document.querySelector('select')

selectTag.addEventListener("click", function(event){
  let lis = document.querySelectorAll("li")
  if (event.target.value === "a"){
    for (let liTag of lis){
      if (liTag.innerHTML[0] != "a"){
        liTag.style.display = "none"
      }
      else {
        liTag.style.display = "block"
      }
    }
  }
  else if (event.target.value === "b"){
    for (let liTag of lis){
      if (liTag.innerHTML[0] != "b"){
        liTag.style.display = "none"
      }
      else {
        liTag.style.display = "block"
      }
    }
  }
  else if (event.target.value === "c"){
    for (let liTag of lis){
      if (liTag.innerHTML[0] != "c"){
        liTag.style.display = "none"
      }
      else {
        liTag.style.display = "block"
      }
    }
  }
  else if (event.target.value === "d"){
    for (let liTag of lis){
      if (liTag.innerHTML[0] != "d"){
        liTag.style.display = "none"
      }
      else {
        liTag.style.display = "block"
      }
    }
  }

})
