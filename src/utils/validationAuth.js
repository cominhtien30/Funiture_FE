import * as Yup from 'yup';
const validationSchema = Yup.object({
    fullname: Yup
        .string('Enter your fullname')
        .required('fullname is required'),
    email: Yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: Yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    repassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
})
export default validationSchema