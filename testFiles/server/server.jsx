const express = require('express');
const spotifyWebApi = require('spotfiy-web-api-node');

const app = express();

const spotifyApi = new spotifyWebApi({
    redirectUri: 'http://localhost:5173',
    clientId: '0792a98f3e364fd9859e0c3e06ed485c',
    clientSecret: 'c8d2c7017ff74f63bc2fd101136fbd20'
});

app.post('./login', function(req, res) => {
    const code = req.body.code

    spotifyApi.authorizationCodeGrant(code).then(
        function(data) {
          console.log('The token expires in ' + data.body['expires_in']);
          console.log('The access token is ' + data.body['access_token']);
          console.log('The refresh token is ' + data.body['refresh_token']);
      
          // Set the access token on the API object to use it in later calls
          spotifyApi.setAccessToken(data.body['access_token']);
          spotifyApi.setRefreshToken(data.body['refresh_token']);
        },
        function(err) {
          console.log('Something went wrong!', err);
        }
      );
});
