import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './login'
import Dashboard from './dashboard'

const code = new URLSearchParams(window.location.search).get('code')

function App() {
  return code ? <Dashboard code={code} /> : <Login />
}

export default App

/*
spotifyApi.getMyRecentlyPlayedTracks({
  limit : 20
}).then(function(data) {
    // Output items
    console.log("Your 20 most recently played tracks are:");
    data.body.items.forEach(item => console.log(item.track));
  }, function(err) {
    console.log('Something went wrong!', err);
  }); */