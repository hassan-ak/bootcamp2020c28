// Imports
// React Imports
import React from 'react';
// Material Ui Imports
import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
// Images Imports
import succeeded from '../../asserts/images/succeeded.png';
import failed from '../../asserts/images/failed.png';
import upComming from '../../asserts/images/upcomming.png';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    startButton: {
        marginTop:"10px",
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        textDecoration: "none",
        width: "100%" 
    },
}));

// Products Page
export const Launches = () => {
        //  useStyles
        const classes = useStyles();
    return (
            <div className="launchesContainer">
                <Grid container className="launchesGrid">
                    {/* Gents */}
                    <Grid item xs={10} md={3} component={Card} className="card succeeded">
                        <CardContent className="launchesCard">
                            <img src={succeeded} className="launchesImage" alt="succeeded" />
                            <Link to="succeeded" className=" buttonLink">
                            <Button
                                variant="contained"
                                className={classes.startButton}
                            >
                                Succeeded
                            </Button>
                            </Link>
                        </CardContent>
                    </Grid>
                    <Grid item xs={10} md={3} component={Card} className="card failed">
                        <CardContent className="launchesCard">
                            <img src={failed} className="launchesImage" alt="failed" />
                            <Link to="failed" className=" buttonLink">
                            <Button
                                variant="contained"
                                className={classes.startButton}
                            >
                                Failed
                            </Button>
                            </Link>
                        </CardContent>
                    </Grid>
                    <Grid item xs={10} md={3} component={Card} className="card upComming">
                        <CardContent className="launchesCard">
                            <img src={upComming} className="launchesImage" alt="upcomming" />
                            <Link to="up-comming" className=" buttonLink">
                            <Button
                                variant="contained"
                                className={classes.startButton}
                            >
                                Up-Comming
                            </Button>
                            </Link>
                        </CardContent>
                    </Grid>
                </Grid>
            </div>
    )
}