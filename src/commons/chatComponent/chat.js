


// @flow 
import React, { useState, useEffect } from 'react';
import styles from "./chat.style"


const Chat = (props) =>
{
    const classes = styles();

    return (<>
        <div className={`${classes.root} chat`}>
            <div className="icon">
                <i className="fa fa-inbox"></i>
            </div>

        </div>
    </>
    );
};
export default Chat



