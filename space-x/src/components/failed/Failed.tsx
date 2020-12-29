import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useLaunchesQuery } from '../../generated/graphql';
import noImage from '../../asserts/images/noImage.png';

export const Failed = () => {
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
            <h3>Failed Space X Launches</h3>
            <div className="launchesContainer">
                <Grid container className="launchesGrid">
                    {!!data.launches && data.launches.map(
                        (launch, i) => !!launch && launch.launch_success === false && (
                            <Grid key={i} item xs={10} md={3} component={Card} className="card">
                                <CardContent className="slCard">
                                    <Typography variant="h4" className="slCardText" align="center" gutterBottom >
                                        {launch.mission_name}
                                    </Typography>
                                    <div className="imageDiv">
                                        {(launch.links?.mission_patch_small)?.length && launch.links?.mission_patch_small ?
                                            <img src={launch.links?.mission_patch_small} className="cardImage" alt="succeeded" />
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