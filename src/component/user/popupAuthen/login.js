// @flow 
import React from 'react';
import styles from "./styles"
import logo from "../../../assets/images/products/product.jpg"
import BtnClose from "./btnClose"
import validationAuth from "../../../utils/validationAuth"
import { useFormik } from 'formik';
import
{
    FormControl,
    Grid,
    TextField,
    Button
} from '@material-ui/core';




const Login = ({ handleSignIn, handleOpenSignUp }) =>
{
    const classes = styles();
    // submib and validation
    const formik = useFormik({
        initialValues: {

            email: '',
            password: '',

        },
        validationSchema: validationAuth,
        onSubmit: values =>
        {
            alert(JSON.stringify(values, null, 2));
        },
    });
    console.log(formik.errors, "values")
    return (<div className={`${classes.root}  `}>
        <div className="popup-auth">
            <Grid container >
                <Grid item xs={6} spacing={3}>
                    <img className="logo-left" src={logo} alt="" />
                </Grid>
                <Grid item xs={6}>
                    <div className={`${classes.form} auth-form`}>
                        <BtnClose handleSignIn={handleSignIn} />
                        <div className="title-form ">
                            Login
                        </div>
                        <div className="info-form ">
                            Login Your Email ID
                        </div>
                        <form action="" className={`form`} onSubmit={formik.handleSubmit}>
                            <FormControl
                                className={`  d-flex justify-content-center align-items-center `}
                                color="secondary"
                            >

                                <TextField
                                    error={formik.errors.email ? true : false}
                                    helperText={formik.errors.email ? formik.errors.email : ""}
                                    name="email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    classes={{ root: classes.input }}
                                    fullWidth
                                    id="standard-adornment-password"
                                    placeholder="email"
                                />
                            </FormControl>
                            <FormControl
                                className={` d-flex justify-content-center align-items-center mt-2`}
                                color="secondary"

                            >
                                <TextField
                                    error={formik.touched.password && formik.errors.password ? true : false}
                                    helperText={formik.touched.password && formik.errors.password ? formik.errors.password : ""}
                                    name="password"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                    placeholder="password"
                                    type="password"
                                    classes={{ root: classes.input }}
                                    fullWidth
                                    id="standard-adornment-password"

                                />
                            </FormControl>
                            <FormControl
                                className={` d-flex justify-content-center align-items-center mt-3`}
                                color="secondary"
                            >
                                <Button variant="contained" color="secondary" fullWidth classes={{
                                    root: classes.btnSubmit
                                }} type="submit">
                                    Login
                                </Button>
                            </FormControl>
                        </form>
                        <div className="text-account ">
                            Do't you have account ?  <a href="#javascript()" onClick={() => handleOpenSignUp(true)}>Register !</a>
                        </div>
                        <div className="row social-auth ">
                            <div className="info-form ">
                                Social Login
                            </div>
                            <div className="buttons-social d-flex justify-content-between mt-2">
                                <Button variant="primary" classes={{
                                    root: classes.btnFacebook
                                }}>
                                    Primary
                                </Button>
                                <Button variant="contained" classes={{
                                    root: classes.btnGoogle
                                }} >
                                    Secondary
                                </Button>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>

    </div>);
};
export default Login