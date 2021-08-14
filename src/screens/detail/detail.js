// @flow 
import React, { useState } from 'react';
import styles from './detail.style';
import { withTheme } from '@material-ui/core/styles';
import NavPages from "../../component/user/navPages/navPage"
import ReactImageMagnify from "react-image-magnify";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import product from "../../assets/images/products/product.jpg"
import product1 from "../../assets/images/slider/slider1.jpg"
import product2 from "../../assets/images/slider/slider2.jpg"
import product3 from "../../assets/images/slider/slider3.jpg"
import Thumbail from "../../component/user/detail/thumbail/listThumbail"
import
{
    Button,
    Typography,
    Grid,
    TextField
} from '@material-ui/core';
import ColorFilter from "../../component/user/products/filter/colors/colors"
import CarouselDetail from "../../component/user/detail/carousel"
import FeatureProducts from "../../component/user/featureProducts/featureProduct"




const Detail = (props) =>
{
    const listImg = [product, product1, product2, product3, product3, product3, product3, product3]
    const classes = styles();

    const [chooseThumbail, setChooseThumbail] = useState(0)
    const [touch, setTouch] = useState(false)
    const changeimg = (index) =>
    {
        setChooseThumbail(index)
    }
    return (<>
        <div className={`${classes.root} container-detail width-layout mt-4 mb-4`}>
            <NavPages />
            <div className="d-flex justify-content-center mb-4">
                <Typography variant="caption">
                    Explore Our Furniture Range
                </Typography>
            </div>
            <Grid container spacing={2} justifyContent="space-between" style={{ overflow: `${touch ? "hidden" : "unset"},`, marginBottom: "10px" }}>
                <Grid item xs={7}>
                    <Grid container style={{ overflow: `${touch ? "unset" : "hidden"}` }} onMouseMove={() => setTouch(true)} onMouseOut={() => setTouch(false)}>
                        <CarouselDetail listImg={listImg} chooseThumbail={chooseThumbail} />
                    </Grid>
                    <Grid container alignItems="center">
                        <span className="m-3" style={{ fontSize: "13px", color: props.theme.palette.primary.bolid }}>Zoom :</span>
                    </Grid>
                    <Grid container spacing={2} alignItems="center" >
                        <Thumbail listImg={listImg} changeimg={changeimg} chooseThumbail={chooseThumbail} />
                    </Grid>
                </Grid>
                <Grid xs={5} item >
                    <div className="detail-info d-flex flex-column justify-content-between h-100">
                        <div className="d-flex info-price justify-content-center ">
                            <span className="text-price ">250.000 VND</span>
                        </div>
                        <div className="d-flex info-product  flex-column justify-content-start align-items-start mt-3 mb-3">
                            <div className="info info-category">Category : <b>Study</b>   </div>
                            <div className="info info-id">Product-id : <b>1ABC2</b> </div>
                        </div>

                        <div className="d-flex info-product flex-column justify-content-start align-items-start mt-3 mb-3">
                            <Grid item xs={8} item >
                                <ColorFilter />
                            </Grid>
                        </div>
                        <div className="d-flex btn-add-cart justify-content-between  mt-3">
                            <Button classes={{
                                root: classes.btnAddCart,
                            }}>
                                Add To Cart
                            </Button>
                            <Button
                                classes={{
                                    root: classes.btnAddCart,
                                    // label: classes.labelAddCart
                                }}
                                endIcon={<FavoriteBorderIcon />}
                            >
                                Add  WishList
                            </Button>
                        </div>

                    </div>
                </Grid>
            </Grid>
            {/* list product noi bat */}
            <FeatureProducts />
        </div>

    </>);
};
export default withTheme(Detail)