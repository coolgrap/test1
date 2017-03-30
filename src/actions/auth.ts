import axios from 'axios';

import {
  AUTH_LOGIN,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_SUCCESS,
  AUTH_REGISTER,
  AUTH_REGISTER_FAILURE,
  AUTH_REGISTER_SUCCESS,
} from './ActionTypes';

// const MockAdapter = require('axios-mock-adapter');
// const mock = new MockAdapter(axios);

// authentication

// mock.onPost('/users').reply(200, {
//   users: [
//     { type: 'admin', id: 'admin', pw: 1 },
//     { type: 'operator', id: 'operator', pw: 1 },
//     { type: 'user', id: 'user', pw: 1 },
//   ],
// });

axios.defaults.baseURL = 'http://api.wp.com';

/* LOGIN */
export function loginRequest(email: string, password: string) {
  return (dispatch: Function) => {
    // Inform Login API is starting
    dispatch(login());
    // API REQUEST
    return axios.post('/auth/login', { email, password })
      .then(response => {
        // SUCCEED
        console.log(response);  // tslint:disable-line
        dispatch(loginSuccess(email));
      })
      .catch(error => {
        // FAILED
        console.log(error);  // tslint:disable-line
        // dispatch(loginFailure());

        // for test 로그인 그냥 패스 하도록
        dispatch(loginSuccess(email));
      });
  };
}

export function login() {
  return {
    type: AUTH_LOGIN,
  };
}

export function loginSuccess(email: string) {
  return {
    type: AUTH_LOGIN_SUCCESS,
    email,
  };
}

export function loginFailure() {
  return {
    type: AUTH_LOGIN_FAILURE,
  };
}

/* REGISTER */
export function registerRequest(username: string, password: string) {
  return (dispatch: Function) => {
    dispatch(register());

    return axios.post('/api/account/signup', { username, password })
    .then(response => {
      console.log(response);  // tslint:disable-line
      dispatch(registerSuccess());
    })
    .catch(error => {
      dispatch(registerFailure(error.response.data.code));
    });
  };
}

export function register() {
  return {
    type: AUTH_REGISTER,
  };
}

export function registerSuccess() {
  return {
    type: AUTH_REGISTER_SUCCESS,
  };
}

export function registerFailure(error: Error) {
  return {
    type: AUTH_REGISTER_FAILURE,
    error,
  };
}
