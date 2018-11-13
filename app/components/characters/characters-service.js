// @ts-ignore
let charactersAPI = axios.create({
  baseURL: "https://swapi.co/api/people/"
})

let _starships = []
let _characters = []
let nextUrl = ""
let prevUrl = ""

export default class CharactersService {
  constructor() {
    console.log("hello from Characters Service")
  }

  get characters() {
    return _characters
  }

  get next() {
    return nextUrl
  }

  get prev() {
    return prevUrl
  }

  getCharacters(success, fail, url = '') {
    charactersAPI.get(url)
      .then(res => {
        _characters = res.data.results
        nextUrl = res.data.next
        prevUrl = res.data.previous
        console.log(res.data.results)
        success()
      })
      .catch(error => {
        fail(error)
        console.log(error)
      })
  }
}