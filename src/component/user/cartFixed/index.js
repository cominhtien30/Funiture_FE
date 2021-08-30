// @flow
import React, { useState } from 'react'
import styles from './cartFixed.style'
import { withTheme } from '@material-ui/core/styles'
import product from '../../../assets/images/products/product.jpg'
import { Typography, TextField } from '@material-ui/core'
import Overlay from '../../../commons/overlay/overlay'

const CartFixed = (props) => {
    const [open, setOpen] = useState(false)
    const classes = styles({ open })
    return (
        <>
            {open ? <Overlay /> : ''}
            <div className={`${classes.box1} ${classes.boxCart}`}>
                <div className="d-flex list-product-cart flex-column  justify-content-between w-100 h-100">
                    {/* hide */}
                    <div
                        className={`d-flex w-100 border-bottom justify-content-end align-items-center p-2  headerCart ${classes.boxShadow}`}
                    ></div>
                    {/*  */}
                    {/* body */}
                    <div className="bodyCart">
                        {/* item product */}
                        <div
                            className="d-flex item-product m-2"
                            style={{
                                borderBottom: `1px solid ${props.theme.palette.primary.line}`,
                            }}
                        >
                            <div className="info d-flex  align-items-center">
                                <img
                                    style={{
                                        height: '88px',
                                        width: '88px',
                                    }}
                                    src={product}
                                    alt=""
                                />
                            </div>
                            <div className="info d-flex justify-content-around align-items-center w-100">
                                <div className="d-flex flex-column">
                                    <Typography
                                        variant="body1"
                                        style={{
                                            fontWeight: 600,
                                        }}
                                    >
                                        name product
                                    </Typography>
                                    <TextField
                                        id="standard-basic"
                                        fullWidth
                                        defaultValue={1}
                                        type="number"
                                        classes={{
                                            root: classes.input,
                                        }}
                                    />
                                </div>
                                <Typography
                                    variant="body2"
                                    style={{
                                        fontWeight: 600,
                                    }}
                                >
                                    20$
                                </Typography>
                                <a href="#">
                                    <i
                                        style={{
                                            color: 'red',
                                            marginTop: '5px',
                                        }}
                                        className="fa fa-times-circle"
                                    ></i>
                                </a>
                            </div>
                        </div>
                        <div
                            className="d-flex item-product m-2"
                            style={{
                                borderBottom: `1px solid ${props.theme.palette.primary.line}`,
                            }}
                        >
                            <div className="info d-flex  align-items-center">
                                <img
                                    style={{
                                        height: '88px',
                                        width: '88px',
                                    }}
                                    src={product}
                                    alt=""
                                />
                            </div>
                            <div className="info d-flex justify-content-around align-items-center w-100">
                                <div className="d-flex flex-column">
                                    <Typography
                                        variant="body1"
                                        style={{
                                            fontWeight: 600,
                                        }}
                                    >
                                        name product
                                    </Typography>
                                    <TextField
                                        id="standard-basic"
                                        fullWidth
                                        defaultValue={1}
                                        type="number"
                                        classes={{
                                            root: classes.input,
                                        }}
                                    />
                                </div>
                                <Typography
                                    variant="body2"
                                    style={{
                                        fontWeight: 600,
                                    }}
                                >
                                    20$
                                </Typography>
                                <a href="#">
                                    <i
                                        style={{
                                            color: 'red',
                                            marginTop: '5px',
                                        }}
                                        className="fa fa-times-circle"
                                    ></i>
                                </a>
                            </div>
                        </div>
                        <div
                            className="d-flex item-product m-2"
                            style={{
                                borderBottom: `1px solid ${props.theme.palette.primary.line}`,
                            }}
                        >
                            <div className="info d-flex  align-items-center">
                                <img
                                    style={{
                                        height: '88px',
                                        width: '88px',
                                    }}
                                    src={product}
                                    alt=""
                                />
                            </div>
                            <div className="info d-flex justify-content-around align-items-center w-100">
                                <div className="d-flex flex-column">
                                    <Typography
                                        variant="body1"
                                        style={{
                                            fontWeight: 600,
                                        }}
                                    >
                                        name product
                                    </Typography>
                                    <TextField
                                        id="standard-basic"
                                        fullWidth
                                        defaultValue={1}
                                        type="number"
                                        classes={{
                                            root: classes.input,
                                        }}
                                    />
                                </div>
                                <Typography
                                    variant="body2"
                                    style={{
                                        fontWeight: 600,
                                    }}
                                >
                                    20$
                                </Typography>
                                <a href="#">
                                    <i
                                        style={{
                                            color: 'red',
                                            marginTop: '5px',
                                        }}
                                        className="fa fa-times-circle"
                                    ></i>
                                </a>
                            </div>
                        </div>
                        <div
                            className="d-flex item-product m-2"
                            style={{
                                borderBottom: `1px solid ${props.theme.palette.primary.line}`,
                            }}
                        >
                            <div className="info d-flex  align-items-center">
                                <img
                                    style={{
                                        height: '88px',
                                        width: '88px',
                                    }}
                                    src={product}
                                    alt=""
                                />
                            </div>
                            <div className="info d-flex justify-content-around align-items-center w-100">
                                <div className="d-flex flex-column">
                                    <Typography
                                        variant="body1"
                                        style={{
                                            fontWeight: 600,
                                        }}
                                    >
                                        name product
                                    </Typography>
                                    <TextField
                                        id="standard-basic"
                                        fullWidth
                                        defaultValue={1}
                                        type="number"
                                        classes={{
                                            root: classes.input,
                                        }}
                                    />
                                </div>
                                <Typography
                                    variant="body2"
                                    style={{
                                        fontWeight: 600,
                                    }}
                                >
                                    20$
                                </Typography>
                                <a href="#">
                                    <i
                                        style={{
                                            color: 'red',
                                            marginTop: '5px',
                                        }}
                                        className="fa fa-times-circle"
                                    ></i>
                                </a>
                            </div>
                        </div>
                        {/* end ---- item ---cart */}
                    </div>
                    <div
                        className={`d-flex w-100 justify-content-center footerCart ${classes.boxShadow}`}
                    >
                        <div className="btn-checkout d-flex  align-items-center">
                            <div className="total">
                                <Typography
                                    variant="title"
                                    style={{
                                        fontWeight: 600,
                                    }}
                                >
                                    name product
                                </Typography>
                            </div>
                            <i className="fa fa-arrow-circle-right"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`${classes.box2} ${classes.boxCart} ${classes.boxShadow}`}
                onClick={() => setOpen(!open)}
            >
                <a
                    style={{
                        lineHeight: '50px',
                        color: `${open ? 'black' : 'white'}`,
                    }}
                    href="#javascript()"
                >
                    {open ? (
                        <i className="fa fa-times"></i>
                    ) : (
                        <i className="fa fa-cart-plus"></i>
                    )}
                </a>
            </div>
        </>
    )
}
export default withTheme(CartFixed)
