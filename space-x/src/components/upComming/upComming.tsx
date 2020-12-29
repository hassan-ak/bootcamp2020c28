import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useLaunchesQuery } from '../../generated/graphql';
import noImage from '../../asserts/images/noImage.png';

export const UpComming = () => {
    const { data, error, loading } = useLaunchesQuery();
    if (loading) {
        return (<div className="launchesList">
            <div className="slLoading">
                <div className="loading">
                    <div className="loader"></div>
                </div>
            </div>
        </div>
        )
    }
    if (error || !data) {
        return (<div className="launchesList">
            <div className="slLoading">
                <div className="loading">
                    <h4>There is some network Error</h4>
                    <h4>Try Again Later</h4>
                </div>
            </div>
        </div>
        )
    }
    return (
        <div className="launchesList">
            <h3>Up-Comming Space X Launches</h3>
            <div className="launchesContainer">
                <Grid container className="launchesGrid">
                    {!!data.launches && data.launches.map(
                        (launch, i) => !!launch && !launch.upcoming === false && (
                            <Grid key={i} item xs={10} md={6} component={Card} className="card">
                                {console.log(launch)}
                                <CardContent className="slCard">
                                    <Typography variant="h4" className="slCardText" align="center" gutterBottom >
                                        {launch.mission_name}
                                    </Typography>
                                    <div className="imageDiv">
                                        {(launch.links?.flickr_images)?.length && launch.links?.flickr_images[1] ?
                                            <img src={launch.links?.flickr_images[1]} className="cardImage" alt="succeeded" />
                                            : <img src={noImage} className="cardImage" alt="succeeded" />}
                                    </div>
                                    <div className="cardDetails">
                                        <Typography variant="h6" className="slCardText" align="center" gutterBottom >
                                            Flight No. : {launch.flight_number}
                                        </Typography>
                                    </div>
                                    <Button
                                        variant="contained"
                                        className="startButton"
                                    >
                                        Details
                                    </Button>
                                </CardContent>
                            </Grid>
                        )
                    )}
                </Grid>
            </div>
        </div>
    )
}