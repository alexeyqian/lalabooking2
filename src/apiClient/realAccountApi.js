import axios from 'axios';
import {authHeader} from '../utils/authHeader';

class AccountApi {

  static register(user) {
    return axios.post('/api/v1/register', user);
  }

  static login(username, password) {
    return axios.post('/api/v1/login', {username, password});
  }

  static changePassword(password, newPassword) {
    return axios.post('/api/v1/users/changePassword',
      {password, newPassword},
      {headers: authHeader()});
  }

  static loadProfile() {
    return axios.get('/api/v1/users/profile',
      {headers: authHeader()});
  }

  static updateProfile(user) {
    return axios.post('/api/v1/users/profile',
      {user},
      {headers: authHeader()});
  }

}

export default AccountApi;


