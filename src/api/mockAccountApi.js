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

/*

function handleResponse(response) {
  return response.json().then(data => {
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        location.reload(true);
      }

      const error = (data && data.error) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

function login(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({username, password})
  };

  return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
    .then(handleResponse)
    .then(user => {
      // login successful if there's a jwt token in the response
      if (user.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
      }

      return user;
    });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}

function getById(id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function register(user) {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(user)
  };

  return fetch(`${config.apiUrl}/users/register`, requestOptions).then(handleResponse);
}

function update(user) {
  const requestOptions = {
    method: 'PUT',
    headers: {...authHeader(), 'Content-Type': 'application/json'},
    body: JSON.stringify(user)
  };

  return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse);
  ;
}

*/

export default AccountApi;


