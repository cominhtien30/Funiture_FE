// @flow 
import React, { useState } from 'react';
import { withTheme } from '@material-ui/core/styles';
import ProcessStep from "../../component/user/processStep"
import MuiPhoneNumber from "material-ui-phone-number";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import
{
    Button,
    Typography,
    Grid,
    TextField,
    InputBase,
    LinearProgress,
    Box,
    InputLabel,
    FormControl,
} from '@material-ui/core';
import ImagesPayment from '../../component/user/imagesPayment';
import product from "../../assets/images/products/product.jpg"


const Checkout = (props) =>
{




    return (<>
        <div className={` container-checkout width-layout mt-4 mb-4`}>
            <ProcessStep />
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <Box borderColor="primary.bolid" border={1} p={4} height="100%">
                        <Typography variant="caption" gutterBottom>Shipping Address</Typography>
                        <form action="" className="d-flex justify-content-center align-items-center">
                            <div className="d-flex flex-wrap">
                                <TextField fullWidth id="standard-basic" label="email" required margin="normal" />
                                <TextField fullWidth id="standard-basic" label="Address" required margin="normal" />
                                <div className="d-flex justify-content-between w-100">
                                    <TextField id="standard-basic" label="First Name" required margin="normal" />
                                    <TextField id="standard-basic" label="Last Name" required margin="normal" />
                                </div>
                                <MuiPhoneNumber
                                    fullWidth
                                    name="phone"
                                    required
                                    data-cy="user-phone"
                                    margin="normal"
                                    defaultCountry={"vn"}
                                />


                            </div>
                        </form>
                    </Box>
                </Grid>
                <Grid xs={6} item>
                    <Box borderColor="primary.bolid" border={1} p={4} height="100%">
                        <Typography variant="caption" gutterBottom>Order Sumary</Typography>
                        <Grid container justifyContent="space-between" style={{ height: "100%" }}>
                            <div className="d-flex list-product-cart flex-column mt-4 w-100 ">
                                <div className="d-flex item-product justify-content-between align-items-center lineBottom">
                                    <img style={{
                                        height: "46px",
                                        width: "88px"
                                    }} src={product} alt="" />
                                    <div className="info d-flex flex-column align-items-end" >
                                        <Typography variant="subtitle1">
                                            name product
                                        </Typography>
                                        <Typography variant="body1">
                                            quantity : 1
                                        </Typography>
                                        <Typography variant="body1">
                                            Price : 20$
                                        </Typography>
                                    </div>
                                </div>


                            </div>
                            <Grid xs={12} >
                                <Grid container justifyContent="space-between" alignItems="center">
                                    <Typography variant="subtitle1" >
                                        cart Total
                                    </Typography>
                                    <Typography variant="body1" >
                                        200.000 VND
                                    </Typography>
                                </Grid>
                                <Grid container justifyContent="space-between" alignItems="center">
                                    <Typography variant="subtitle1">
                                        Discounts
                                    </Typography>
                                    <Typography variant="body1">
                                        20.000 VND
                                    </Typography>
                                </Grid>
                                <Grid container justifyContent="space-between" alignItems="center">
                                    <Typography variant="subtitle1" >
                                        Delivery Charges
                                    </Typography>
                                    <Typography variant="body1" style={{ color: "green" }}>
                                        Free
                                    </Typography>
                                </Grid>
                                <Grid container justifyContent="space-between" alignItems="center">
                                    <Typography variant="h6">
                                        Total
                                    </Typography>
                                    <Typography variant="h5" >
                                        250.000 VND
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
            <Grid xs={12} container style={{ margin: "20px 0" }}>
                <ImagesPayment />
                <Grid xs={4} item justifyContent="space-around" alignItems="center">
                    <Button size="medium" startIcon={<ArrowBackIosIcon fontSize="small" />} >
                        back
                    </Button>
                    <Button size="medium" >
                        Payment
                    </Button>
                </Grid>
            </Grid>


        </div>
    </>);
};
export default withTheme(Checkout)