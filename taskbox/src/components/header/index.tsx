// Imports
// React Imports
import React from 'react';
// Material UI Imports
import { IconButton, Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AssignmentIcon from '@material-ui/icons/Assignment';
// Types Imports
import {HeaderProps} from '../../interfaces/App.interface'
// Styles Imports
import './header.css';


const Header: React.FC<HeaderProps> = ({varient}) => {
    // check for styling based on varient
    const color = varient === "transparent" || varient === "elevatedTransparent" ? "transparent" : "colored";
    const elevation = varient === "transparent" ? 0 : 1;
    //  Header Function Return
    return (
        <div className="root">
            <AppBar position="static" elevation={elevation}>
                <Toolbar className={color}>
                    <IconButton
                        edge="start"
                        aria-label="Shoe Store">
                        <AssignmentIcon />
                    </IconButton>
                    <Typography variant="h5">
                        TaskBox
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;
