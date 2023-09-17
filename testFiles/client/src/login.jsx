import React from "react"
import { Container } from "react-bootstrap"


const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=0792a98f3e364fd9859e0c3e06ed485c&response_type=code&redirect_uri=http://localhost:5173&scope=streaming%20user-read-email%20user-read-private%20user-modify-playback-state%20user-read-playback-state%20user-read-recently-played"

export default function Login(){
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <a className = "btn btn-success btn-lg" href={AUTH_URL}>
                Login with Spotify
            </a>
        </Container>
    )
}

/*
user-modify-playback-state
user-read-playback-state
streaming
user-read-email
user-read-private
*/