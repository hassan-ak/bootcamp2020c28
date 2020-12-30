import React from 'react'
// Material Ui Imports
import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// Images Imports
import home from '../../asserts/images/home.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'black',
        marginTop:'100px',
        marginBottom:'100px'
    },
    componentGrid: {
        backgroundColor:'black',
        padding:'20px'
    },
    startButton: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
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
                    <Grid item xs={8} md={5} component={Card} className={classes.componentGrid}> 
                        <CardContent>
                            <img src={home} className="homeImage" alt="spaceX"/>
                        </CardContent>
                    </Grid>
                    <Grid item xs={8} md={5} component={Card} className={classes.componentGrid}> 
                        <CardContent className="homeContent">
                            <Typography variant= "h2" align = "center" gutterBottom >
                                SpaceX
                            </Typography>
                            <Typography variant= "h6" gutterBottom className="homeDetail" >
                                SpaceX is an American aerospace manufacturer and space transportation services company. It was founded to reduce space transportation costs for colonization of Mars.
                            </Typography>
                            <Link to="launches" className=" buttonLink">
                            <Button
                                variant="contained"
                                className={classes.startButton}
                            >
                                Launches
                            </Button>
                            </Link>
                        </CardContent>
                    </Grid>
            </Grid>
        </div>
    )
}
