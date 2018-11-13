import CharactersService from "./characters-service.js";

let _charactersService = new CharactersService()
function _draw() {

  // create a template
  let dataTemplate = ''
  let actionsTemplate = ''
  let categoriesTemplate = ['Characters', 'Starships', 'Planets']


  //build action buttons
  if (_charactersService.prev) {
    actionsTemplate += `<button onclick="app.controllers.charactersController.getCharacters('${_charactersService.prev}')">Prev</button>`
  }
  if (_charactersService.next) {
    actionsTemplate += `<button onclick="app.controllers.charactersController.getCharacters('${_charactersService.next}')">Next</button>`
  }

  // loop through characters
  _charactersService.characters.forEach(character => {
    dataTemplate += `<div class="character">${character.name}</div>`
  })

  // set elements with appropriate data
  document.getElementById("category-title").innerText = "Characters"
  document.getElementById("category-actions").innerHTML = actionsTemplate
  document.getElementById("category-data").innerHTML = dataTemplate
}

function _drawError(error) {
  console.log("Some Error occured", error)
}



export default class CharactersController {
  constructor() {
    console.log('hello from characters controller')
    // _charactersService.getCharacters(_draw, _drawError)
  }

  getCharacters(url) {
    _charactersService.getCharacters(_draw, _drawError, url)
  }

  getStarships(url) {
    _charactersService.getStarships(_draw, _drawError, url)
  }
}