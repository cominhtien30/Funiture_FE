// @flow 
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import styles from "./styles"
//import FacebookLogin from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import FacebookIcon from '@material-ui/icons/Facebook';
import
{
    FormControl,
    Grid,
    TextField,
    Button
} from '@material-ui/core';

const btnFacebook = () =>
{
    const classes = styles();
    const componentClicked = () =>
    {
        console.log("Đã Click Vào nè", "click")
    }
    const responseFacebook = (res) =>
    {
        console.log(res, "click")
    }

    return <FacebookLogin
        appId={process.env.APP_FACEBOOK}
        // autoLoad
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
        render={renderProps => (
            <Button classes={{
                root: classes.btnFacebook
            }}
                cookie={true}
                onClick={renderProps.onClick}
                startIcon={<FacebookIcon />}
            >
                With Facebook
            </Button>
        )}
    />

};

export default btnFacebook