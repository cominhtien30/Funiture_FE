// @flow 
import React from 'react';
import styles from './color.style';
import { withTheme } from '@material-ui/core/styles';
import
{
    Box,
    FormControl,
    Select,
    InputLabel,
    InputBase,
    Grid,
    TextField
} from '@material-ui/core';




const color = (props) =>
{
    const classes = styles()
    return (<>
        <div className={`${classes.root} row lineBottom filter-color mb-4 mt-3`}>
            <div className="title-filter">
                Colors:
            </div>
            <div className="list-color row d-flex justify-content-star mt-4">
                <div className="col-3">
                    <div className="item-color"><i className="fa fa-check"></i></div>
                </div>
                <div className="col-3">
                    <div className="item-color"><i className="fa fa-check"></i></div>
                </div>
                <div className="col-3">
                    <div className="item-color"><i className="fa fa-check"></i></div>
                </div>
                <div className="col-3">
                    <div className="item-color
                    "><i className="fa fa-check"></i></div>
                </div>
                <div className="col-3">
                    <div className="item-color"><i className="fa fa-check"></i></div>
                </div>
                <div className="col-3">
                    <div className="item-color active"><i className="fa fa-check"></i></div>
                </div>
                <div className="col-3">
                    <div className="item-color"><i className="fa fa-check"></i></div>
                </div>
                <div className="col-3">
                    <div className="item-color active"><i className="fa fa-check"></i></div>
                </div>
            </div>
        </div>
    </>);
};
export default withTheme(color)