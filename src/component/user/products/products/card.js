// @flow 
import React from 'react';
import styles from './product.style';
import { withTheme } from '@material-ui/core/styles';
import proImg from "../../../../assets/images/products/product.jpg"
import
{
    Box,
    FormControl,
    Select,
    InputLabel,
    InputBase,
    Grid,
    TextField,
    Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography
} from '@material-ui/core';



const Products = ({ addToCart }) =>
{
    const classes = styles()
    return (<>
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={proImg}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="subtitle1" noWrap component="h2">
                        Fabric Sofa Sets
                    </Typography>
                    <Typography align="justify" variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions classes={{
                root: classes.CardActions
            }}>
                <Typography variant="button" noWrap={true} color="primary" >
                    400.$
                </Typography>
                <Button onClick={() => addToCart({ id: 1, name: "Funiture", quantity: 1, price: 20, image: "a", color: "#fff" })}>
                    Add To Cart
                </Button>
            </CardActions>
        </Card>

    </>);
};
export default withTheme(Products)