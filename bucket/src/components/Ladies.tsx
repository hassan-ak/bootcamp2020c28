import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from "react-redux"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// Images Imports
import { makeStyles } from '@material-ui/core/styles';



interface ProductItem {
    id: number
    name: string
    brand: string
    gender: string
    category: string
    price: number
    is_in_inventory: boolean
    items_left: number
    imageURL: string
    slug: string
    added?: boolean
}

const useStyles = makeStyles((theme) => ({
    gentsButton: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        textDecoration: "none",
    },
    cartButton: {
        backgroundColor: "rgba(40, 196, 26, 0.781)",
        textDecoration: "none",
        color:'white'
    },
}));

export const Ladies = () => {
    //  useStyles
    const classes = useStyles();
    const products = useSelector((state: ProductItem[]) => state)
    return (
        <div className="storeContainer">
            <h2 className="productsHeading">Ladies</h2>
            <Grid container className="storeGrid">
                {products.map(
                    (product, i) => product.gender === "WOMEN" && (
                        <Grid key={i} item xs={10} md={3} component={Card} className="storeCard productsCardL">
                            <CardContent className="sCard">
                                <p className="productsName"><strong>{product.name}</strong></p>
                                <div className="pIDiv">
                                    <img src={product.imageURL} className="storeImage productsImage" alt="failed" />
                                </div>
                                <p className="productsPrice"><strong>${product.price}</strong></p>
                                <div className="productButtons">
                                    <Button
                                        variant="contained"
                                        className={classes.gentsButton}
                                    >
                                        Details
                                    </Button>
                                    <Button
                                        variant="contained"
                                        className={classes.cartButton}
                                        
                                    >
                                        <ShoppingCartIcon/>
                                    </Button>
                                </div>
                                
                            </CardContent>
                        </Grid>
                    )
                )}
            </Grid>
        </div>
    )
}