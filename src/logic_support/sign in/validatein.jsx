export default function Validate(values) {
    let errors = {};

    if(!values.email) {
        errors.email = 'This field is required'
    };

    if(!values.email) {
        errors.email = 'This field is required'
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = 'email is invalid'
    } ;

    if(!values.password) {
        errors.password = 'This field is required'
    } else if(values.password.length < 6) {
        errors.password = 'Password must contain at least six characters'
    } else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/.test(values.password)){
        errors.password = 'Password is invalid'
    };

    return errors;

}

