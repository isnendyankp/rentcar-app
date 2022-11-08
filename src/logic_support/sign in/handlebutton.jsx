import { useState } from "react";
import { useNavigate } from "react-router";
import Validate from "./validatein";
import { Inuser } from "../../components/localstore";

export default function Handlebutton() {
    const navigate = useNavigate()
    const [values, setValues] = useState({
        email:'',
        password:''
    })
    const signin = async () => {
        try {
            const resp = await fetch(`https://bootcamp-rent-car.herokuapp.com/customer/auth/login`, {
                method: 'POST', headers:{'Content-type': 'application/json'}, body: JSON.stringify({
                    ...values
                })   
                
            })
            const result = await resp.json()
            Inuser(JSON.stringify(
                result
            ))
            if (resp.status > 299 || resp.status < 200) {
                throw new Error('not found')
            }
            
        } catch (err) {
            console.log(err)
        }
    }
    const[errors, setErrors] = useState({});
    const [submitted, setSubmited] = useState(false);
    const [loggedin, setLoggedin] = useState(false);

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(Validate(values));
        setSubmited(true)
        signin()
    };

    const rentClick = (e) => {
        e.preventDefault();
        navigate('/')
        setLoggedin(true)
    }
    const logout = (e) => {
        e.preventDefault();
        navigate('/')
        setLoggedin(false)
      }
    return {handleChange, handleSubmit,rentClick, logout, values, errors, submitted, loggedin}
}