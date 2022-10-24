import {useState} from "react";
import Validate from "./signupvalid";


export default function Handlebutton() {
    const [value, setValue] = useState({
        fullname:'',
        email:'',
        password:''
    })

    const[errors, setErrors] = useState({});
    const [submitted, setSubmited] = useState(false);

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(Validate(value));
        setSubmited(true)
    };

    return {handleChange, handleSubmit, value, errors, submitted};
}