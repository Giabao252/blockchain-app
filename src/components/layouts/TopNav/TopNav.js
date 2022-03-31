import React, { useContext} from "react";
import Cryptonite from "../../../assets/Cryptonite.png"
import {AppBar, Toolbar, Button, Container, Menu, MenuItem, Typography } from "@material-ui/core"
import { Link } from "react-router-dom";
import { TransactionContext } from "../../../context/TransactionContext";
import { shortenAddress } from "../../../utilities/shortAddress";

import useStyles from "./styles"

const TopNav = () => {
    const classes = useStyles();

    const { connectWallet, CurrentAccount } = useContext(TransactionContext);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleSubmit = () => {
        connectWallet();
    }

    return (
        <AppBar className={classes.navbar} position="static" maxWidth="xl" >
            <Container maxWidth="xl"> 
                <Toolbar>
                    <Link to="/">
                        <img src={Cryptonite} className={classes.image} alt="HomeLogo" />
                    </Link>

                    <div className="nav_wrapper">
                        <Link to="/about" className={classes.links}>
                            About
                        </Link>

                        <Link to="/transaction" className={classes.links}>
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
                            <MenuItem className={classes.NFT} component={Link} to="/create-NFT" >
                                Create NFT
                            </MenuItem>
                            <MenuItem className={classes.NFT} component={Link} to="/marketplace" >
                                Marketplace
                            </MenuItem>
                        </Menu>
                        
                        <div className={classes.loginButton}>
                            { CurrentAccount ? (
                                <Button className={classes.button} >
                                    {shortenAddress(CurrentAccount)}
                                </Button>
                                ): 
                                (
                                <Button className={classes.button} onClick={handleSubmit}>Connect</Button>
                                )
                            }

                              
                        </div>
                        

                    </div>
                </Toolbar>
                
            </Container>
        </AppBar>
    );
}
export default TopNav;