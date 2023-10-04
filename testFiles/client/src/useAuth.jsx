import {useState, useEffect} from 'react'
//import axios from 'axios'
//import fetch from 'node-fetch'

//axios.defaults.port = 5173;
export default function useAuth(code){
    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setRefreshToken] = useState();
    const [expiresIn, setExpiresIn] = useState();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await fetch('http://localhost:3000/login/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ code }),
            });
    
            if (res.ok) {
              const newData = await res.json();
              setAccessToken(newData.accessToken);
              setRefreshToken(newData.refreshToken);
              setExpiresIn(newData.expiresIn);
            } else {
              console.error('Failed to fetch data:', res.statusText);
            }
          } catch (error) {
            console.error('Error:', error);
            console.log('shit is wrong')
          }
        };
    
        fetchData();
        //console.log('got past fetch data');
        console.log(accessToken, ' here');
        return accessToken; //Testing to see if I am able to get a single token from the three
      }, [code]);
    /*
    useEffect(() => {
        axios.post('http://localhost:5173/login', {
            code,
        }).then(res => {
            console.log(res.data)
        })
        .catch(()=>
            console.log(res.data)
        )
    },[code])
    */
}
