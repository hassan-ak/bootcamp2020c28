import React from 'react'
// Material Ui Imports
import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// Images Imports
import home from '../asserts/images/home.png';
import { Link } from 'react-router-dom';

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
        width: "100%" 
    },
}));
export const Home = () => {
    //  useStyles
    const classes = useStyles();

    return (
        <div className="homeContainer">
            <Grid container className={classes.mainGrid}>
                    <Grid item xs={8} md={5} component={Card} className={classes.componentGrid} elevation={0}> 
                        <CardContent>
                            <img src={home} className="homeImage" alt="shoeStore"/>
                        </CardContent>
                    </Grid>
                    <Grid item xs={8} md={5} component={Card} className={classes.componentGrid} elevation={0}> 
                        <CardContent className="homeContent">
                            <Typography variant= "h2" align = "center" gutterBottom className="title">
                                Shoe Store
                            </Typography>
                            <Typography variant= "h6" gutterBottom className="homeDetail" >
                                Finest Shoes you can find online.
                            </Typography>
                            <Link to="store" className="homeLink">
                                <Button
                                    variant="contained"
                                    className={classes.startButton}
                                >
                                    Store
                                </Button>
                            </Link>
                        </CardContent>
                    </Grid>
            </Grid>
        </div>
    )
}