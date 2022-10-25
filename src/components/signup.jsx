import thumbnail from '../images/Group83.png'
import '../styles/sign.css'
import Handlebutton from "../logic_support/signup/handlebutton";

export default function Signup(submitForm) {
    const {handleChange, handleSubmit, errors, value, submitted} = Handlebutton(submitForm);
    
    return(
        <>
        <div className="sign-cont">
        <div className="signform">
        {Object.keys(errors).length === 0 && submitted ? (<div className="success">
                <div className='signupcheck'>Signed Up successfully!</div>
                </div>):(<p id="alertup">Please fill in the form correctly!</p>)}

            <div className="signbrand" onClick={(e) => {e.preventDefault()
            window.location.href='/'}}></div>
            <h2 id="title"><b>Sign Up</b></h2>
            <div className="name-form">
                <label htmlFor="name" className="labelsign">Name<sup>*</sup></label><br />
                <input type="text" className="inputsign" value={value.fullname} name='fullname' onChange={handleChange} placeholder="Nama Lengkap"/>
                {errors.fullname && <p className="error"><span><sup>*</sup>{errors.fullname}</span></p>}
            </div>
            <div className="email-form">
                <label htmlFor="email" className="labelsign">Email<sup>*</sup></label><br />
                <input type="email" className="inputsign" name='email' value={value.email} onChange={handleChange} placeholder="Contoh: johndee@gmail.com"/>
                {errors.email && <p className="error"><span><sup>*</sup>{errors.email}</span></p>}
            </div>
            <div className="pass-form">
                <label htmlFor="password" className="labelsign">Password<sup>*</sup>
                </label><br />
                <input type="password" className="inputsign" name='password' value={value.password} onChange={handleChange} placeholder="6+ karakter" />
                {errors.password && <p className="error"><span><sup>*</sup>{errors.password}</span></p>}
            </div>
            {!submitted && <button id='signupBtn' onClick={handleSubmit}><b>Sign Up</b></button>}
            {submitted && <button id='signupBtn' onClick={handleSubmit}><b>Sign Up</b></button>}
            {Object.keys(errors).length === 0 && submitted ? (<div className="success">
            <button id="uptoin"onClick={(e) => {
                    e.preventDefault()
                    window.location.href='/signin'
                }}><b>Sign In</b></button>
                </div>):(<p id="null"></p>)}
            <p id="signupq">Already have an account? <span><a href="/signin" id="linksignin"><b>Sign In here</b></a></span></p>
        </div>
        <img id="thumbnail"src={thumbnail} alt=''/>
        </div>
        </>
    )
}