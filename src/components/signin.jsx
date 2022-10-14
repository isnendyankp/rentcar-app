import React from "react";
import thumbnail from '../images/Group83.png'

export default function Signin() {
    return(
        <>
        <div className="sign-cont">
        <div className="signform">
            <div className="signbrand" onClick={(e) => {e.preventDefault()
            window.location.href='/'}}></div>
            <h2 id="welcome"><b>Welcome Back!</b></h2>
            <div className="email-form">
                <label htmlFor="email" className="labelsign">Email<sup>*</sup></label><br />
                <input type="email" placeholder="Contoh: johndee@gmail.com" className="inputsign"/>
            </div>
            <div className="pass-form">
                <label htmlFor="password" className="labelsign">Password<sup>*</sup>
                </label><br />
                <input type="password" placeholder="6+ karakter" className="inputsign"/>
            </div>
            <button id='signupBtn'><b>Sign In</b></button>
            <p id="signupq">Don't have an account? <span><a href="/signup" id="linksignup"><b>Sign Up for free</b></a></span></p>
        </div>
        <img id="thumbnail"src={thumbnail} alt=''/>
        </div>
        </>
    )
}