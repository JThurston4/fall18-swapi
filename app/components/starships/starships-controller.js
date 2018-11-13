import StarshipsService from "./starships-service.js";

let _starshipsService = new StarshipsService
function _draw() {

  // create a template
  let dataTemplate = ''
  let actionsTemplate = ''
  let categoriesTemplate = ['Characters', 'Starships', 'Planets']


  //build action buttons
  if (_starshipsService.prev) {
    actionsTemplate += `<button onclick="app.controllers.starshipsController.getStarships('${_starshipsService.prev}')">Prev</button>`
  }
  if (_starshipsService.next) {
    actionsTemplate += `<button onclick="app.controllers.starshipsController.getStarships('${_starshipsService.next}')">Next</button>`
  }

  _starshipsService.starships.forEach(element => {
    dataTemplate += `<div class="starship">${element.name}</div>`
  })

  // set elements with appropriate data
  document.getElementById("category-title").innerText = "Starships"
  document.getElementById("category-actions").innerHTML = actionsTemplate
  document.getElementById("category-data").innerHTML = dataTemplate
}

function _drawError(error) {
  console.log("Some Error occured", error)
}


export default class StarshipsController {
  constructor() {

  }

  getStarships(url) {
    _starshipsService.getStarships(_draw, _drawError, url)

  }
}