import React from 'react'
// Material Ui Imports
import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1D2521',
    },
    componentGrid: {
        backgroundColor: '#1D2521',
        padding: '20px',
        border: '0'
    },
    startButton: {
        backgroundColor: '#298155',
        textDecoration: "none",
        width: "100%"
    },
}));

export const Contact = () => {
    //  useStyles
    const classes = useStyles();

    return (
        <div className="homeContainer">
            <Grid container className={classes.mainGrid}>
                <Grid item xs={8} md={8} component={Card} className={classes.componentGrid} elevation={0}>
                    <CardContent className="homeContent">
                        <Typography variant="h5" align="left" gutterBottom className="title">
                            Let's Talk
                            </Typography>
                        <Typography variant="h6" gutterBottom className="homeDetail" >
                            We are here to answer your queries. You can cotact us any time any day you want. We will be available 24/7.
                            </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={5} md={2} component={Card} className={classes.componentGrid} elevation={0}>
                    <Button
                        variant="contained"
                        className={classes.startButton}
                    >
                        Contact Us
                                </Button>
                </Grid>
            </Grid>
        </div>
    )
}
