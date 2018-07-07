import axios from 'axios';

class HotelApi {

  static search(query) {
    return axios.post('/api/v1/hotels', query);
  }

  static getById(id) {
    return axios.get('/api/v1/hotels', id);
  }
}

export default HotelApi;


