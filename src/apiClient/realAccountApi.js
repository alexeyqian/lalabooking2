import axios from 'axios';

class AccountApi {

  static register(user) {

    return axios.post('/api/v1/register', user);
      /*.then(function (response) {
        if (response.data.status === 'success') {
          const newUser = {id: response.data.newId, username: user.username, token: response.data.token};
          localStorage.setItem('user', JSON.stringify(newUser));
          return newUser;
        }
        else
          throw 'cannot register.';
      })
      .catch(function (error) {
        //console.log(error);
        throw error;
      });*/
  }

}

export default AccountApi;


