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
        if (username == 'alexeyqian@gmail.com' && password == 'hello') {
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

  static changePassword(username, password, newPassword) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (username == 'alexeyqian@gmail.com' && password == 'hello') {
            password = newPassword;
            //alert('password changed success.');
            resolve(true);
          }
          else
            reject("username or password not match");
        }, delay);
      }
    );
  }

  static logout() {
    return new Promise((resolve) => {
      setTimeout(() => {
        localStorage.setItem('user', null);
        resolve();
      }, delay);
    });
  }

  static loadProfile(username) {
    return new Promise((resolve) => {
        setTimeout(() => {
          const user = {
            username: username,
            firstName: 'Alexey',
            lastName: 'Qian',
            mobile: '512.375.9498'
          };

          resolve(user);
        }, delay);
      }
    );
  }

  static updateProfile(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
          let oldUser = {}; // load from server
          oldUser.firstName = user.firstName;
          resolve(true);
        }, delay);
      }
    );
  }

}

export default AccountApi;


