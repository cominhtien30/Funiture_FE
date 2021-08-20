import * as Yup from 'yup';
export const validationLogin = Yup.object({
    email: Yup
        .string('Enter your email')
        .min(4, 'Account should be of minimum 4 characters length')
        // .email('Enter a valid email')
        .required('Email is required'),
    password: Yup
        .string('Enter your password')
        .min(4, 'Password should be of minimum 4 characters length')
        .required('Password is required'),
})
export const validationRegister = Yup.object({
    fullname: Yup
        .string('Enter your fullname')
        .min(3, 'Name should be of minimum 3 characters length')
        .required('fullname is required'),
    email: Yup
        .string('Enter your email')
        .min(4, 'Account should be of minimum 4 characters length')
        .required('Account is required'),
    password: Yup
        .string('Enter your password')
        .min(4, 'Password should be of minimum 4 characters length')
        .required('Password is required'),
    repassword: Yup
        .string()

        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Password is required'),
})
