import CharactersController from "./components/characters/characters-controller.js";
import StarshipsController from "./components/starships/starships-controller.js";

class App {
  constructor() {
    this.controllers = {
      charactersController: new CharactersController(),
      starshipsController: new StarshipsController()
    }
  }
}


window.app = new App()

console.log("The app is up and running")
