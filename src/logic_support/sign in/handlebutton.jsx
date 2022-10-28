import { useState } from "react";
import Validate from "./validatein";

export default function Handlebutton() {
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

            if (resp.status > 299 || resp.status < 200) {
                throw new Error('not found')
            }
        } catch (err) {
            console.log(err)
        }
    }
    const[errors, setErrors] = useState({});
    const [submitted, setSubmited] = useState(false);

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
    return {handleChange, handleSubmit, values, errors, submitted}
}