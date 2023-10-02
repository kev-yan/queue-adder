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
            const res = await fetch('http://localhost:5173/login/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ code }),
            });
    
            if (res.ok) {
              const data = await res.json();
              setAccessToken(data.accessToken)
              setRefreshToken(data.refreshToken)
              setExpiresIn(data.expiresIn)
            } else {
              console.error('Failed to fetch data:', res.statusText);
            }
          } catch (error) {
            console.error('Error:', error);
            console.log('shit is wrong')
          }
        };
    
        fetchData();
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
