import React from 'react';
import { useLaunchInfoQuery } from '../../generated/graphql';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import noImage from '../../asserts/images/noImage.png';
import { Card } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    details: {
        padding: theme.spacing(2),
        textAlign: 'justify',
        color: "white",
        marginLeft: "20px",
        marginRight: "20px",
        backgroundColor: 'black',
    },
    productsRoot: {
        maxWidth: 300,
        maxHeight: 300,
        minHeight: 300,
        margin: 10,
        backgroundColor:"black"
    },
}));

export const Launch = () => {
    const classes = useStyles();
    const { data, error, loading } = useLaunchInfoQuery({ variables: { id: "14" } });
    if (loading) {
        return (<div className="launchPage">
            <div className="slLoading">
                <div className="loading">
                    <div className="loader"></div>
                </div>
            </div>
        </div>
        )
    }
    if (error || !data) {
        return (<div className="launchPage">
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
        <div className="launchPage">
            <div className="launchLogoDiv">
                {!!data.launch && data.launch.links?.mission_patch_small ?
                    <img src={data.launch.links?.mission_patch_small} className="launchLogo" alt="spaceX" />
                    : <img src={noImage} className="launchLogo" alt="spaceX" />}
            </div>
            <div>
                {!!data.launch && data.launch.mission_name ?
                    <h2>{data.launch.mission_name}</h2>
                    : <h2>Name Un-known</h2>}
            </div>
            <div className={classes.root}>
                <Grid container spacing={3} >
                    <Grid item xs={12}>
                        {!!data.launch && data.launch.details ?
                            <Paper className={classes.details}>{data.launch.details}</Paper>
                            : <Paper className={classes.details}>Launch Details Not Available</Paper>}
                    </Grid>
                </Grid>
            </div>
            <div className="tableDiv">
                <table >
                    <thead>
                        <tr><th colSpan={3}>Launch Details</th></tr>
                    </thead>
                    <thead>
                        <tr>
                            <th>Serial No.</th>
                            <th>Title</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><th>01</th><td>Flight No.</td>{!!data.launch && data.launch.details ? <td>{data.launch.flight_number}</td> : <td></td>}</tr>
                        <tr><th>02</th><td>Year</td>{!!data.launch && data.launch.launch_year ? <td>{data.launch.launch_year}</td> : <td></td>}</tr>
                        <tr><th>03</th><td>Date</td>{!!data.launch && data.launch.launch_date_local ? <td>{data.launch.launch_date_local.substr(5, 5)}</td> : <td></td>}</tr>
                        <tr><th>04</th><td>Time</td>{!!data.launch && data.launch.launch_date_local ? <td>{data.launch.launch_date_local.substr(11, 8)}</td> : <td></td>}</tr>
                        <tr><th>05</th><td>Site</td>{!!data.launch && data.launch.launch_site?.site_name ? <td>{data.launch.launch_site.site_name}</td> : <td></td>}</tr>
                        <tr><th>06</th><td>Ship</td>{!!data.launch && data.launch.ships ? <td>{data.launch.ships}</td> : <td></td>}</tr>
                        <tr><th>07</th><td>Missile</td>{!!data.launch && data.launch.rocket?.rocket_name ? <td>{data.launch.rocket.rocket_name}</td> : <td></td>}</tr>
                        <tr><th>08</th><td>Status</td>
                            {!!data.launch ? data.launch.launch_success === true ? <td className="green">Succeeded</td>
                                : data.launch.launch_success === false ? <td className="red">Failed</td>
                                    : data.launch.upcoming === true ? <td className="yellow">Up-Comming</td>
                                        : <td></td>
                                : <td></td>
                            }
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                {!!data.launch?.links && data.launch.links.flickr_images &&
                    <div className="productsGridContainer">
                        <Grid container direction="row" justify="center" alignItems="center" className="productsGrid">
                            {data.launch.links.flickr_images.map((image, i) =>
                                image ?
                                    <Grid key={i} xl={3} lg={3} md={4} sm={6} xs={12} spacing={3}>
                                        <Card className={classes.productsRoot}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    alt="Contemplative Reptile"
                                                    height="260"
                                                    image={image}
                                                />
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                : null
                            )}
                        </Grid>
                    </div>
                }
            </div>
        </div>
    )
}


