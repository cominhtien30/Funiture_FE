// @flow 
import React from 'react';
import styles from "./styles"
import logo from "../../../assets/images/products/product.jpg"
import
{
    Box,
    FormControl,
    Select,
    InputLabel,
    InputBase,
    Grid,
    TextField,
    Input,
    Button
} from '@material-ui/core';




const Register = (props) =>
{
    const classes = styles();
    return (<div className={`${classes.root}  `}>

        <div className="popup-auth">
            <Grid container >
                <Grid item xs={6} spacing={3}>
                    <img className="logo-left" src={logo} alt="" />
                </Grid>
                <Grid item xs={6}>
                    <div className={`${classes.form} auth-form`}>
                        <div className="close-form align-self-end ">
                            <a href=""><i class="fa fa-times"></i></a>
                        </div>
                        <div className="title-form ">
                            Register
                        </div>
                        <div className="info-form ">
                            Register Your Email ID
                        </div>
                        <form action="" className={` form`}>
                            <FormControl
                                className={`  d-flex justify-content-center align-items-center `}
                                color="secondary"
                            >
                                <InputLabel htmlFor="standard-adornment-password">
                                    Email
                                </InputLabel>
                                <Input
                                    classes={{ root: classes.input }}
                                    fullWidth
                                    id="standard-adornment-password"
                                />
                            </FormControl>
                            <FormControl
                                className={` d-flex justify-content-center align-items-center mt-2`}
                                color="secondary"

                            >
                                <InputLabel htmlFor="standard-adornment-password">
                                    Password
                                </InputLabel>
                                <Input
                                    classes={{ root: classes.input }}
                                    fullWidth
                                    id="standard-adornment-password"
                                // type={values.showPassword ? "text" : "password"}
                                // value={values.password}
                                //onChange={handleChange("password")}
                                // endAdornment={
                                //     <InputAdornment position="end">
                                //         <IconButton
                                //             aria-label="toggle password visibility"
                                //             onClick={handleClickShowPassword}
                                //             onMouseDown={handleMouseDownPassword}
                                //         >
                                //             {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                //         </IconButton>
                                //     </InputAdornment>
                                // }
                                />
                            </FormControl>
                            <FormControl
                                className={` d-flex justify-content-center align-items-center mt-2`}
                                color="secondary"

                            >
                                <InputLabel htmlFor="standard-adornment-password">
                                    Password
                                </InputLabel>
                                <Input
                                    classes={{ root: classes.input }}
                                    fullWidth
                                    id="standard-adornment-password"
                                // type={values.showPassword ? "text" : "password"}
                                // value={values.password}
                                //onChange={handleChange("password")}
                                // endAdornment={
                                //     <InputAdornment position="end">
                                //         <IconButton
                                //             aria-label="toggle password visibility"
                                //             onClick={handleClickShowPassword}
                                //             onMouseDown={handleMouseDownPassword}
                                //         >
                                //             {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                //         </IconButton>
                                //     </InputAdornment>
                                // }
                                />
                            </FormControl>
                            <FormControl
                                className={` d-flex justify-content-center align-items-center mt-3`}
                                color="secondary"
                            >
                                <Button variant="contained" color="secondary" fullWidth>
                                    Register
                                </Button>
                            </FormControl>
                        </form>
                        <div className="text-account">
                            Have an account ?  <a href="">Login now !</a>
                        </div>
                        <div className="row social-auth mt-4">
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
                                }}>
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
export default Register