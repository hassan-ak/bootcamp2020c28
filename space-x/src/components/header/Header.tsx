// Imports
// React Imports
import React, { useState } from 'react';
// Material UI Imports
import { IconButton, Menu, MenuItem, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
// Images Imports
import logo from '../../asserts/images/logo.png';
import { Link } from 'react-router-dom';

// Styles Definations for Header
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    headerBackground: {
        backgroundColor: 'black',
    },
    menu: {
        backgroundColor: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: '20px',
    },
    menuElement: {
        position: 'relative',
        top: '30%',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    menuButton: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
        },
    },
    menuIcon: {
        position: 'relative',
        color: 'white',
        top: '30%',
    },
    menuPaper: {
        backgroundColor: "black",
        border: 'none'
    },
    menuList: {
        color: 'white',
        marginBottom: '10px'
    },
}));

// Header Function
export default function Header() {
    //  useStyles
    const classes = useStyles();
    //  For Controling menu button click
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    //  Header Function Return
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.headerBackground}>
                <Toolbar>
                    <Grid container spacing={2}>
                        {/* App Logo */}
                        <Grid item xs={2}>
                            <Link to="/" className="">
                                <IconButton
                                    edge="start"
                                    aria-label="SpaceX">
                                    <img src={logo} alt="logo" />
                                </IconButton>
                            </Link>
                        </Grid>
                        {/* Menu Entries */}
                        <Grid item xs={7} className={classes.menu}>
                            <Grid item xs={3}>
                                <Link to="launches" className="link">
                                    <Typography variant="h6" className={classes.menuElement}>
                                        Launches
                                    </Typography>
                                </Link>
                            </Grid>
                            <Grid item xs={3}>
                            <Link to="launches/succeeded" className="link">
                                <Typography variant="h6" className={classes.menuElement}>
                                    Succeeded
                                </Typography>
                            </Link>
                            </Grid>
                            <Grid item xs={3}>
                            <Link to="launches/failed" className="link">
                                <Typography variant="h6" className={classes.menuElement}>
                                    Failed
                                </Typography>
                            </Link>
                            </Grid>
                            <Grid item xs={3}>
                            <Link to="launches/up-comming" className="link">
                                <Typography variant="h6" className={classes.menuElement}>
                                    Up-Comming
                                </Typography>
                            </Link>
                            </Grid>
                        </Grid>
                        {/* Menu Bar */}
                        <Grid item xs={2} className={classes.menuButton}>
                            <IconButton
                                aria-label="more"
                                aria-controls="long-menu"
                                aria-haspopup="true"
                                onClick={handleClick}
                            >
                                <MenuIcon className={classes.menuIcon} />
                            </IconButton>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                                classes={{ paper: classes.menuPaper }}
                            >
                                <MenuItem onClick={handleClose} className={classes.menuList}>Launches</MenuItem>
                                <MenuItem onClick={handleClose} className={classes.menuList}>Succeeded</MenuItem>
                                <MenuItem onClick={handleClose} className={classes.menuList}>Failed</MenuItem>
                                <MenuItem onClick={handleClose} className={classes.menuList}>Up-Comming</MenuItem>
                            </Menu>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}
