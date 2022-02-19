import { Container, Typography, Grid, Button } from "@material-ui/core";
import React from "react";
import { TopNav, Footer } from "../../components";
import useStyles from "./styles";
import { Link } from "react-router-dom";         
     

import Metamask from "../../../assets/metamask.png"
import { Payment } from "@material-ui/icons";
import { LocalGroceryStoreOutlined } from "@material-ui/icons";
import { RestoreOutlined } from "@material-ui/icons";

const Home = () => {
    const classes = useStyles();

    const connectWallet = () => {

    }

    return (
        <Container maxWidth="xl">
                <TopNav />

            <Grid item xs={6}>
                    <div className={classes.welcome}>
                        <Typography variant="h3" className={classes.introPara}>Ethereum anywhere, for anyone</Typography>
                        <Typography variant="subtitle1" className={classes.subPara}>Explore the evergrowing world of Ethereum and NFTs with Cryptonite</Typography>

                        <Button
                        onClick={connectWallet}
                        className={classes.connectButton}>
                             Connect to Metamask
                        </Button>
                    </div>
            </Grid>

            <Grid container spacing={5} className={classes.metamask}>
                <Grid xs={9}>
                    <div className={classes.aboutMetamask}>
                        <Typography variant="h4" className={classes.title}>You need to install MetaMask to use this website</Typography>
                        <Typography variant="subtitle1" className={classes.subMeta}>
                            MetaMask is a software cryptocurrency wallet used to interact with the Ethereum blockchain. It allows users to access their Ethereum wallet through a browser extension or mobile app, which can then be used to interact with decentralized applications
                        </Typography>
                    </div>
                        <ul className={classes.guide}>
                            <li><Typography style={{fontFamily: "'Work Sans', sans-serif"}}>Step 1: Click <Link to="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en" className={classes.link}>here</Link> to install MetaMask on your device, then pin it on the extensions bar</Typography></li>
                            <li><Typography style={{fontFamily: "'Work Sans', sans-serif"}}>Step 2: Create your account and change the network to Ropsten (default is Mainnet)</Typography></li>
                            <li><Typography style={{fontFamily: "'Work Sans', sans-serif"}}>Step 3: Go to <Link to="https://faucet.dimensions.network" className={classes.link}>Ropsten Network Faucet</Link> to get yourself free test ETH (test networks can be unstable, so just be patient a bit)</Typography></li>
                            <li><Typography style={{fontFamily: "'Work Sans', sans-serif"}}>Step 4: Reload website, click Connect MetaMask and enjoy</Typography></li>
                        </ul>
                </Grid>
                <Grid item xs={3}>
                    <img src={Metamask} className={classes.logo} alt="MetamaskLogo" />
                </Grid>
            </Grid>

            <Grid className={classes.features}>
                <Typography variant="h4" style={{fontFamily: "'Merriweather', serif"}}>Features</Typography>
                
                <Grid container style={{marginTop: "3%", marginBottom: "10%"}} >
                    <Grid item xs={3} className={classes.box}>
                        <Payment />
                        <Typography variant="h6">ETH Transactions</Typography>
                        <Typography variant="subtitle1" style={{fontFamily: "'Work Sans', sans-serif"}}>
                            Send & receive ETH easily
                        </Typography>
                    </Grid>
                    <Grid item xs={3} className={classes.box}>
                        <LocalGroceryStoreOutlined />
                        <Typography variant="h6">NFT marketplace</Typography>
                            <Typography variant="subtitle1" style={{fontFamily: "'Work Sans', sans-serif"}}>
                                Create your own NFTs, sell on our marketplace, or buy with ETH
                            </Typography>
                    </Grid>
                    <Grid item xs={3} className={classes.box}>
                        <RestoreOutlined />
                        <Typography variant="h6">Transaction history</Typography>
                            <Typography variant="subtitle1" style={{fontFamily: "'Work Sans', sans-serif"}}>
                                See all transactions made across the platform 
                            </Typography>
                    </Grid>
                </Grid>
            </Grid>


            <Grid>
                <Footer />
            </Grid>
        </Container>
    );
}
export default Home