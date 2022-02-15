import React, {useState, useEffect} from "react";
import Cryptonite from "../../Cryptonite.png"
import {AppBar, Toolbar, Button, Container, Menu, MenuItem } from "@material-ui/core"
import Link from "@material-ui/core/Link";
import useStyles from "./styles"
import { Navigate } from "react-router-dom";

const TopNav = () => {
    const classes = useStyles();

    //User login functions inside the LOGIN BUTTON will be added when doing backend
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <AppBar className={classes.navbar} position="static" >
            <Container maxWidth="xl"> 
                <Toolbar>
                    <img src={Cryptonite} className={classes.image} alt="HomeLogo" />

                    <div className="nav_wrapper">
                        <Link href="/about" className={classes.links}>
                            About
                        </Link>

                        <Link href="/transaction" className={classes.links}>
                            Transaction
                        </Link>
                        <Button 
                        className={classes.popupButton}
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}>
                             NFT
                        </Button>
                        <Menu 
                        className={classes.popupContent}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}>
                            <MenuItem className={classes.NFT} onClick={event => window.location.href="/create-nft"} >
                                Create NFT
                            </MenuItem>
                            <MenuItem className={classes.NFT} onClick={event => window.location.href="/marketplace"} >
                                Marketplace
                            </MenuItem>
                        </Menu>

                        <div className={classes.loginButton}>
                            <Button className={classes.button}  >Login</Button>
                        </div>
                    </div>
                </Toolbar>
                
            </Container>
        </AppBar>
    );
}
export default TopNav;