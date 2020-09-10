const baseURL = 'api/'


export default {
  getApiData(path) {
    return fetch(baseURL + path)
    .then(res => res.json())
  }
}