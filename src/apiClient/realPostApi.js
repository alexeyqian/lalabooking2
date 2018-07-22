import axios from 'axios';

class PostApi {

  static search(query) {
    return axios.post('/api/v1/posts', query);
  }

  static getById(id) {
    return axios.get('/api/v1/posts', id);
  }
}

export default PostApi;


