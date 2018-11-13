
// @ts-ignore
let shipAPI = axios.create({
  baseURL: "https://swapi.co/api/starships/"
})

let _starships = []
let nextUrl = ""
let prevUrl = ""


export default class StarshipsService {
  constructor() {

  }

  get starships() {
    return _starships
  }

  get next() {
    return nextUrl
  }

  get prev() {
    return prevUrl
  }

  getStarships(success, fail, url = '') {
    shipAPI.get(url)
      .then(element => {
        _starships = element.data.results
        nextUrl = element.data.next
        prevUrl = element.data.previous
        console.log(element)
        success()
      })
      .catch(error => {
        fail(error)
        console.log(error)
      })
  }
}