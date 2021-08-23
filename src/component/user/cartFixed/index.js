// @flow
import React, { useState } from 'react'
import styles from './cartFixed.style'
import { withTheme } from '@material-ui/core/styles'
import product from '../../../assets/images/products/product.jpg'
import { Typography, Grid, TextField, Box } from '@material-ui/core'

const CartFixed = (props) => {
    const [open, setOpen] = useState(false)
    const classes = styles({ open })
    return (
        <>
            <Box
                borderColor="primary.main"
                border={1}
                borderLeft="none"
                width="220px"
                position="fixed"
                top="50%"
                left="0"
                bgcolor="primary.line"
                zIndex={props.theme.zIndex.tooltip}
                classes={{
                    root: classes.box1,
                }}
            >
                <div className="d-flex list-product-cart flex-column mt-4 w-100">
                    {/* hide */}
                    <a
                        href="#javascript()"
                        style={{
                            position: 'absolute',
                            top: '5%',
                            right: '3%',
                            color: 'red',
                        }}
                        onClick={() => setOpen(false)}
                    >
                        <i className="fa fa-minus-circle"></i>
                    </a>
                    {/*  */}
                    <div
                        className="d-flex item-product flex-wrap"
                        style={{
                            borderBottom: `1px solid ${props.theme.palette.primary.line}`,
                            padding: '10px 0',
                        }}
                    >
                        <div className="info d-flex  align-items-start">
                            <Typography
                                variant="subtitle1"
                                style={{
                                    marginLeft: '8px',
                                    fontWeight: 600,
                                }}
                            >
                                name product
                            </Typography>
                        </div>
                        <div className="info d-flex justify-content-around align-items-center w-100">
                            <img
                                style={{
                                    height: '36px',
                                    width: '68px',
                                }}
                                src={product}
                                alt=""
                            />
                            <TextField
                                id="standard-basic"
                                fullWidth
                                defaultValue={1}
                                type="number"
                                classes={{
                                    root: classes.input,
                                }}
                            />
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

                    <Grid container>
                        <Grid
                            container
                            justifyContent="space-around"
                            alignItems="center"
                        >
                            <Typography variant="subtitle1">
                                cart Total
                            </Typography>
                            <Typography variant="body1">
                                200.000 VND
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
            </Box>
            <Box
                borderColor="primary.main"
                border={1}
                borderLeft="none"
                width="40px"
                height="50px"
                position="fixed"
                top="50%"
                left="0"
                bgcolor="primary.line"
                zIndex={props.theme.zIndex.tooltip}
                classes={{
                    root: classes.box2,
                }}
                onClick={() => setOpen(true)}
            >
                <a
                    style={{
                        lineHeight: '50px',
                    }}
                    href="#javascript()"
                >
                    <i className="fa fa-chevron-circle-right"></i>
                </a>
            </Box>
        </>
    )
}
export default withTheme(CartFixed)
