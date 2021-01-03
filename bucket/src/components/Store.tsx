// Imports
// React Imports
import React from 'react';
// Material Ui Imports
import { Button, Card, CardContent, Grid } from '@material-ui/core';
// Images Imports
import { makeStyles } from '@material-ui/core/styles';
import gents from '../asserts/images/gents.png';
import ladies from '../asserts/images/ladies.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    gentsButton: {
        marginTop: "10px",
        background: 'linear-gradient(45deg, #53ff7e 30%, #6d6bfe 90%)',
        textDecoration: "none",
        width: "100%"
    },
    ladiesButton: {
        marginTop: "10px",
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        textDecoration: "none",
        width: "100%"
    },
}));

// Products Page
export const Store = () => {
    //  useStyles
    const classes = useStyles();
    return (
        <div className="storeContainer">
            <Grid container className="storeGrid">
                {/* Gents */}
                <Grid item xs={10} md={3} component={Card} className="storeCard">
                    <CardContent className="sCard">
                        <img src={gents} className="storeImage" alt="failed" />
                        <Link to="gents" className="homeLink">
                            <Button
                                variant="contained"
                                className={classes.gentsButton}
                            >
                                Gents
                            </Button>
                        </Link>
                    </CardContent>
                </Grid>
                <Grid item xs={10} md={3} component={Card} className="storeCard">
                    <CardContent className="sCard">
                        <img src={ladies} className="storeImage" alt="upcomming" />
                        <Link to="ladies" className="homeLink">
                            <Button
                                variant="contained"
                                className={classes.ladiesButton}
                            >
                                Ladies
                            </Button>
                        </Link>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}