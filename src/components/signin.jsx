import React from "react";
import thumbnail from '../images/Group83.png'
import Handlebutton from "../logic_support/sign in/handlebutton";
import '../styles/sign.css'

export default function Signin(submit) {

    const {handleChange, handleSubmit, errors, values, submitted} = Handlebutton(submit);

    return(
        <>
        <div className="sign-cont">
        <div className="signform">
        {Object.keys(errors).length === 0 && submitted ? (<div className="success">
       <div className='signinsuccess'>Signed In successfully!</div>
       </div>):(<p id="null"></p>)}
            <div className="signbrand" onClick={(e) => {e.preventDefault()
            window.location.href='/'}}></div>
            <h2 id="welcome"><b>Welcome Back!</b></h2>
            <div className="email-form">
                <label htmlFor="email" className="labelsign">Email<sup>*</sup></label><br />
                <input type="email" placeholder="Contoh: johndee@gmail.com" className="inputsign" onChange={handleChange} value={values.email}
                name='email'/>
                {errors.email && <p className="error"><span><sup>*</sup>{errors.email}</span></p>}
            </div>
            <div className="pass-form">
                <label htmlFor="password" className="labelsign">Password<sup>*</sup>
                </label><br />
                <input type="password" placeholder="6+ karakter" className="inputsign" onChange={handleChange} value={values.password}
                name='password'/>
                {errors.password && <p className="error"><span><sup>*</sup>{errors.password}</span></p>}
            </div>
            {!submitted && <button id='signupBtn' onClick={handleSubmit}><b>Sign In</b></button>}
            {submitted && <button id='signupBtn' onClick={handleSubmit}><b>Sign In</b></button>}
            {Object.keys(errors).length === 0 && submitted ? (<div className="success">
            <button id="uptoin"onClick={(e) => {
                    e.preventDefault()
                    window.location.href='/'
                }}><b>Rent a Car!</b></button>
                </div>):(<p id="null"></p>)}
            
            <p id="signupq">Don't have an account? <span><a href="/signup" id="linksignup"><b>Sign Up for free</b></a></span></p>
        </div>
        <img id="thumbnail"src={thumbnail} alt=''/>
        </div>
        </>
    )
}