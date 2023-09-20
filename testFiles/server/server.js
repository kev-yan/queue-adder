const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
//const spotifyWebApi = require('spotfiy-web-api-node');
const SpotifyWebApi = require('spotify-web-api-node');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.listen(port, () =>
  console.log(`port = ${port}`)
)


app.post('/api/token', (req, res) => {
  const code = req.body.code;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:5173',
    clientId: '0792a98f3e364fd9859e0c3e06ed485c',
    clientSecret: 'c8d2c7017ff74f63bc2fd101136fbd20',
  });

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
      console.log('got past')
      console.log(err);
      res.sendStatus(400);
    });
});
 

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