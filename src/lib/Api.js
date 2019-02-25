import axios from 'axios';

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://ironbeer-api.herokuapp.com/beers',
    })
  }

  getAllBeers() {
    return this.api.get('/all')
      .then((data) => data);
  }

  getBeer(id) {
    return this.api.get(`/single/${id}`);
  }

  getRandomBeer() {
    return this.api.get('/random/');
  }

  createPhone(body) {
    return this.api.post('/new', body);
  }

  deletePhone(query) {
    return this.api.delete(`/search?q=${query}`);
  }
}

const apiSingleton = new Api();

export default apiSingleton;