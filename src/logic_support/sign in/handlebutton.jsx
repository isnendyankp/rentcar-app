import { useState } from "react";
import Validate from "./validatein";

export default function Handlebutton() {
    const [values, setValues] = useState({
        email:'',
        password:''
    })

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
    };
    return {handleChange, handleSubmit, values, errors, submitted}
}