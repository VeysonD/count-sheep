import auth0 from 'auth0-js';

// auth0 = 'chicken';
// console.log('what is auth0:', auth0);
// console.log('what is auth0:', JSON.stringify(auth0));

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'fdash4.auth0.com',
    clientID: 'vyuTKtLAfvmH8mptYzrgE9vp8KSLH9pf',
    redirectUri: 'http://localhost:7711/auth/callback',
    audience: 'https://fdash4.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}
