import React from 'react';
import "./Login.css";
import {loginUrl} from './spotify'; 
// this loginUrl is coming from file spotify.js

function Login() {
    return (
        <div className="login">
            {/* spotify logo */}
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""></img>
            
            {/* login with spotify button */}
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
            {/* https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg */}
            
        </div>
    )
}

export default Login
