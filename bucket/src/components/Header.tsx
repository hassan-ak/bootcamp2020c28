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
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
// Images Imports
import logo from '../asserts/images/logo.png';

// Styles Definations for Header
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: "10px"
    },
    headerBackground: {
        backgroundColor: '#1D2521',
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
    cartIcon: {
        position: 'relative',
        color: 'white',
        top: '20%',
    },
    menuPaper: {
        backgroundColor: "#1D2521",
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
                            <Link to="/" className="homeLink">
                                <IconButton
                                    edge="start"
                                    aria-label="Shoe Store">
                                    <img src={logo} alt="logo" className="headerImage" />
                                </IconButton>
                            </Link>
                        </Grid>
                        {/* Menu Entries */}
                        <Grid item xs={7} className={classes.menu}>
                            <Grid item xs={3}>
                                <Link to="/" className="homeLink">
                                    <Typography variant="h6" className={classes.menuElement}>
                                        Home
                                    </Typography>
                                </Link>
                            </Grid>
                            <Grid item xs={3}>
                                <Link to="about" className="homeLink">
                                    <Typography variant="h6" className={classes.menuElement}>
                                        About
                                    </Typography>
                                </Link>
                            </Grid>
                            <Grid item xs={3}>
                            <Link to="store" className="homeLink">
                                    <Typography variant="h6" className={classes.menuElement}>
                                        Store
                                    </Typography>
                                </Link>
                            </Grid>
                            <Grid item xs={3}>
                                <Link to="contact" className="homeLink">
                                    <Typography variant="h6" className={classes.menuElement}>
                                        Contact us
                                    </Typography>
                                </Link>
                            </Grid>
                            <Grid item xs={2}>
                                <Link to="cart" className="homeLink">
                                    <IconButton edge="end" className={classes.cartIcon}>
                                        <ShoppingCartIcon />
                                    </IconButton>
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
                                <Link to="home" className="homeLink">
                                    <MenuItem onClick={handleClose} className={classes.menuList}>Home</MenuItem>
                                </Link>
                                <Link to="about" className="homeLink">
                                    <MenuItem onClick={handleClose} className={classes.menuList}>About</MenuItem>
                                </Link>
                                <Link to="store" className="homeLink">
                                    <MenuItem onClick={handleClose} className={classes.menuList}>Store</MenuItem>
                                </Link>
                                <Link to="contact" className="homeLink">
                                    <MenuItem onClick={handleClose} className={classes.menuList}>Contact us</MenuItem>
                                </Link>
                            </Menu>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}