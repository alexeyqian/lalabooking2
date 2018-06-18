import delay from './delay';

class AccountApi {
  static register(user) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign({}, user, {id:1001}));
      }, delay);
    });
  }

  static login(username, password){
    return new Promise((resolve) => {
      setTimeout(() => {
        if(username == 'alexey' && password == 'hello')
          resolve({authenticated: true, token: 'abcdefg'});
        else
          reject("username or password not match");
      }, delay);
    });
  }

}

export default AccountApi;
