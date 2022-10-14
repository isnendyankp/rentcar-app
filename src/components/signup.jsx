import React from "react";
import thumbnail from '../images/Group83.png'
import '../styles/sign.css'

export default function Signup() {
    return(
        <>
        <div className="sign-cont">
        <div className="signform">
            <div className="signbrand" onClick={(e) => {e.preventDefault()
            window.location.href='/'}}></div>
            <h2 id="title"><b>Sign Up</b></h2>
            <div className="name-form">
                <label htmlFor="name" className="labelsign">Name<sup>*</sup></label><br />
                <input type="text" placeholder="Nama Lengkap" className="inputsign"/>
            </div>
            <div className="email-form">
                <label htmlFor="email" className="labelsign">Email<sup>*</sup></label><br />
                <input type="email" placeholder="Contoh: johndee@gmail.com" className="inputsign"/>
            </div>
            <div className="pass-form">
                <label htmlFor="password" className="labelsign">Password<sup>*</sup>
                </label><br />
                <input type="password" placeholder="6+ karakter" className="inputsign"/>
            </div>
            <button id='signupBtn'><b>Sign Up</b></button>
            <p id="signupq">Already have an account? <span><a href="/signin" id="linksignin"><b>Sign In here</b></a></span></p>
        </div>
        <img id="thumbnail"src={thumbnail} alt=''/>
        </div>
        </>
    )
}