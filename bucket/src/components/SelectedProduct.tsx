import { Card, CardContent, Grid } from '@material-ui/core';
import { Button, Typography } from '@material-ui/core';
import React from 'react'
import { useSelector } from "react-redux"
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

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
    mainGrid: {
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'#1D2521',
    },
    componentGrid: {
        backgroundColor:'#1D2521',
        padding:'20px',
        border:'0'
    },
    startButton: {
        backgroundColor: '#298155',
        textDecoration: "none",
        width: "40%",
        color:"white"
    },
    startButtonnS: {
        backgroundColor: '#812929',
        textDecoration: "none",
        width: "40%",
        color:"white"

    },
}));

export const SelectedProduct = () => {
    //  useStyles
    const classes = useStyles();
    const { slug } = useParams();
    const products = useSelector((state: ProductItem[]) => state)
    const product = products.find((p) => p.slug === slug);
    return (
        <div className="homeContainer">
            <Grid container className={classes.mainGrid}>
                    <Grid item xs={8} md={5} component={Card} className={classes.componentGrid} elevation={0}> 
                        <CardContent>
                            <img src={product?.imageURL} className="homeImage" alt="shoeStore"/>
                        </CardContent>
                    </Grid>
                    <Grid item xs={8} md={5} component={Card} className={classes.componentGrid} elevation={0}> 
                        <CardContent className="homeContent">
                            <Typography variant= "h4" align = "center" gutterBottom className="title">
                                {product?.name}
                            </Typography>
                            <Typography variant= "h5" align = "right" gutterBottom className="title brand">
                                <small>by : </small>{product?.brand}
                            </Typography>
                            <Typography variant= "h6" gutterBottom className="homeDetail" >
                                {product?.category} shoes for {product?.gender}.
                            </Typography>
                            <div className="slButtonsDiv">
                                {product?.is_in_inventory ? 
                                <Button variant="contained" className={classes.startButton}>in Stock</Button>
                                :<Button variant="contained" className={classes.startButtonnS}>out of Stock</Button>}
                                {product?.is_in_inventory ? 
                                <Button variant="contained" className={classes.startButton}>{product.items_left} left</Button>
                                :<Button variant="contained" className={classes.startButtonnS}>out of Stock</Button>}
                            </div>
                            <div className="slButtonsDiv pc">
                                <Button variant="contained" className={classes.startButton}>$ {product?.price}</Button>
                                <Button variant="contained" className={classes.startButton}><ShoppingCartIcon/></Button>
                            </div>                                
                        </CardContent>
                    </Grid>
            </Grid>
        </div>
    )
}
