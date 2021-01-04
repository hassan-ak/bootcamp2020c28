// React Imports
import React from 'react'
// Material UI Imports
import { Container, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useSelector } from "react-redux";
import Paper from '@material-ui/core/Paper';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { store } from "../store/store";
import { remove, removeAll } from "../store/productsSlice";

// Stylig for cart page
const useStyles = makeStyles((theme) => ({
    cRoot: {
        flexGrow: 10,
        marginTop: "10pt",
    },
    cHeading: {
        textTransform: "uppercase",
        fontWeight: "bold",
        marginTop: theme.spacing(4),
        color: "#16af62"
    },
    cTotal: {
        marginBottom: theme.spacing(4),
        color: "white"
    },
    cImg: {
        height: 100,
        width: 135,
        borderRadius: '20px',
        [theme.breakpoints.down('sm')]: {
            height: 50,
            width: 75,
        },
    },
    paper: {
        padding: theme.spacing(.1),
        textAlign: 'center',
        backgroundColor: "#1D2521",
    },
    cartButton: {
        backgroundColor: "rgba(196, 26, 159, 0.781)",
        textDecoration: "none",
        color: 'white'
    },


    cRoot1: {
        border: `1px solid ${theme.palette.grey[400]}`,
        padding: theme.spacing(2),
        backgroundColor: theme.palette.background.paper,
    },
    cHeading1: {
        textTransform: "uppercase",
        fontWeight: "bold",
        marginBottom: theme.spacing(3),
    },
    cRow: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: theme.spacing(1),
    },
    cCheckoutBtn: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        backgroundColor: '#298155',
    },

}));

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



export const Cart = () => {
    // const for using styles
    const classes = useStyles();
    // Cart Content from Cart Context
    const products = useSelector((state: ProductItem[]) => state)
    const product = products.filter((e) => e.added === true)
    // Total Price of Selected products
    const prices = product.map((p) => p.price)
    let totalPrice = 0;
    if (prices.length) {
        totalPrice = prices.reduce((a, b) => a + b);
    }
    let numOfItems = (product.length)

    return (
        <div>
            {/* Cart Page */}
            <Container className={classes.cRoot}>
                <Typography variant="h4" component="h4" className={classes.cHeading}>
                    Your cart
                </Typography>
                <Typography variant="h5" component="h5" className={classes.cTotal}>
                    Total: <strong>${totalPrice + totalPrice * 0.10 + totalPrice * 0.15}</strong>
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={8}>
                        {product.length > 0 ? (
                            product.map((p) => (
                                <Grid container spacing={3}>
                                    <div className="cartListP">
                                        <Grid item xs={4}>
                                            <Paper className={classes.paper} elevation={0}>
                                                <img src={p.imageURL} alt={p.name} className={classes.cImg} />
                                            </Paper>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Paper className={classes.paper} elevation={0}>
                                                <p>$ {p.price}</p>
                                            </Paper>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Paper className={classes.paper} elevation={0}>
                                                <Button
                                                    key={p.id}
                                                    variant="contained"
                                                    className={classes.cartButton}
                                                    onClick={() => store.dispatch(remove(p))}
                                                >
                                                    <DeleteForeverIcon />
                                                </Button>
                                            </Paper>
                                        </Grid>
                                    </div>
                                </Grid>
                            ))
                        ) : (
                                <div style={{ width: "100%", display: "flex", justifyContent: "center", padding: "50px" }}>
                                    <Typography color="error" variant="h3">
                                        Cart is Empty
                                </Typography>
                                </div>
                            )}
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Grid container className={classes.cRoot1}>
                            <Grid item xs={12}>
                                <Typography variant="h5" className={classes.cHeading1}>
                                    Order Summary
                                </Typography>
                            </Grid>
                            <Grid item xs={12} className={classes.cRow}>
                                <Typography variant="button">{numOfItems} items</Typography>
                                <Typography variant="button">${totalPrice}</Typography>
                            </Grid>
                            <Grid item xs={12} className={classes.cRow}>
                                <Typography variant="button">Delivery</Typography>
                                <Typography variant="button">${totalPrice * 0.10}</Typography>
                            </Grid>
                            <Grid item xs={12} className={classes.cRow}>
                                <Typography variant="button">Sales Tax</Typography>
                                <Typography variant="button">${totalPrice * 0.15}</Typography>
                            </Grid>
                            <Grid item xs={12} className={classes.cRow}>
                                <Typography variant="button">Total</Typography>
                                <Typography variant="button">${totalPrice + totalPrice * 0.10 + totalPrice * 0.15}</Typography>
                            </Grid>
                            <Button
                                className={classes.cCheckoutBtn}
                                variant="contained"
                                color="secondary"
                                fullWidth
                                onClick={() => store.dispatch(removeAll())}
                            >
                                Checkout
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}