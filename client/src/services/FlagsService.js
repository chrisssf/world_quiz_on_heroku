// const baseURL = 'http://localhost:3000/api/flags'
const baseURL = 'api/flags/'

export default {
  getFlags() {
    return fetch(baseURL)
      .then(res => res.json())
  }
}
