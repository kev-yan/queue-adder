const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const SpotifyWebApi = require('spotify-web-api-node');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.listen(port, () =>
  console.log(`port = ${port}`)
)


app.post('/login/', (req, res) => {
  const code = req.body.code;

  var credentials = {
    clientId: '0792a98f3e364fd9859e0c3e06ed485c',
    clientSecret: 'c8d2c7017ff74f63bc2fd101136fbd20',
    redirectUri: 'http://localhost:5173/login/'
  }
  //var spotifyApi = new SpotifyWebApi(credentials);
  const redirectUri = 'http://localhost:3000/login/'; //has to be the 3000 port because 5173 will throw a 404 error
  const clientId = '0792a98f3e364fd9859e0c3e06ed485c';
  const clientSecret = 'c8d2c7017ff74f63bc2fd101136fbd20';

  var spotifyApi = new SpotifyWebApi({
    redirect_uri: redirectUri,
    clientSecret: clientSecret,
    clientId: clientId
  });

  spotifyApi.authorizationCodeGrant(code).then(
    function(data) {
      console.log('The token expires in ' + data.body['expires_in']);
      console.log('The access token is ' + data.body['access_token']);
      console.log('The refresh token is ' + data.body['refresh_token']);
  
      // Set the access token on the API object to use it in later calls
      spotifyApi.setAccessToken(data.body['access_token']);
      spotifyApi.setRefreshToken(data.body['refresh_token']);
      spotifyApi.setExpiresToken(data.body['expires_in']);
    },
    function(err) {
      console.log('did not get past');
      
      console.log(redirectUri);
      console.log(err);
    }
  );
});

/*
  spotifyApi.authorizationCodeGrant(code)
    .then(data => {
      // Send the token data as a JSON response

      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch(err => {
      console.log('got past');
      console.log(err);
      res.sendStatus(400);
    });
});
 */

/*
app.post('./login', (req, res) =>{
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
      redirectUri: 'http://localhost:5173',
      clientId: '0792a98f3e364fd9859e0c3e06ed485c',
      clientSecret: 'c8d2c7017ff74f63bc2fd101136fbd20'
    });

    spotifyApi.authorizationCodeGrant(code)
      .then(
        res.json({
          accessToken: data.body.accessToken,
          refreshToken: data.body.refreshToken,
          expiresToken: data.body.expiresToken,
        })
)
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    })
});
*/