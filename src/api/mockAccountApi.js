import delay from './delay';

class AccountApi {
  static register(user) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign({}, user, {id: 1001}));
      }, delay);
    });
  }

  static login(username, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username == 'alexeyqian@gmail.com' && password == 'hello'){
          const user = {
            id: '1001',
            username: username,
            token: 'xxx'
            // other info
          };
          resolve(user);
        }
        else
          reject("username or password not match");
      }, delay);
    });
  }

  static logout() {
    return new Promise((resolve) => {
      setTimeout(() => {
        localStorage.setItem('user', null);
        resolve();
      }, delay);
    });
  }

}

export default AccountApi;
