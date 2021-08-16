// @flow 
import React from 'react';




const btnClose = ({ handleSignIn }) =>
{
    return (
        <div className="close-form align-self-end" onClick={() => handleSignIn(false)}>
            <a href="#javascript()"><i className="fa fa-times"></i></a>
        </div>
    );
};
export default btnClose