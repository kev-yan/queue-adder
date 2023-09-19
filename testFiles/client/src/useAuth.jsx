import {useState, useEffect} from 'react'
import axios from "axios"

//axios.defaults.port = 5173;
export default function useAuth(code){
    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setRefreshToken] = useState();
    const [expiresIn, setExpiresIn] = useState();

    useEffect(() => {
        axios.post('/login', {
            code,
        }).then(res => {
            console.log(res.data)
        })
        .catch(()=>
            console.log('broken')
        )
    },[code])
}
