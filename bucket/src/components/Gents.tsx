import { Button, Card, CardContent, Grid } from '@material-ui/core';
import React from 'react';
import { useSelector } from "react-redux"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// Images Imports
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';



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
        background: 'linear-gradient(45deg, #53ff7e 30%, #6d6bfe 90%)',
        textDecoration: "none",
    },
    cartButton: {
        backgroundColor: "rgba(40, 196, 26, 0.781)",
        textDecoration: "none",
        color:'white'
    },
}));

export const Gents = () => {
    //  useStyles
    const classes = useStyles();
    const products = useSelector((state: ProductItem[]) => state)
    return (
        <div className="storeContainer">
            <h2 className="productsHeading">Gents</h2>
            <Grid container className="storeGrid">
                {products.map(
                    (product, i) => product.gender === "MEN" && (
                        <Grid key={i} item xs={10} md={3} component={Card} className="storeCard productsCard">
                            <CardContent className="sCard">
                                <p className="productsName"><strong>{product.name}</strong></p>
                                <div className="pIDiv">
                                    <img src={product.imageURL} className="storeImage productsImage" alt="failed" />
                                </div>
                                <p className="productsPrice"><strong>${product.price}</strong></p>
                                <div className="productButtons">
                                <Link to={`/store/gents/${product.slug}`} className="homeLink">
                                    <Button
                                        variant="contained"
                                        className={classes.gentsButton}
                                    >
                                        Details
                                    </Button>
                                </Link>
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