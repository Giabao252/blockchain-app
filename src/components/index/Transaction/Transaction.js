import React, { useContext } from "react";
import { TopNav, Footer } from "../../components";
import {TextField, Button, Typography, Card, CardContent, Grid, Container } from "@material-ui/core";
//import { TransactionContext } from "../../../context/TransactionContext";
import { shortenAddress } from "../../../utilities/shortAddress";

import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import useStyles from "./styles";


const Transaction = () => {
    const classes = useStyles();
    /*
    const Status = () => {
        const {currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading} = useContext(TransactionContext);
    }
*/
    return (
        <Container maxWidth="xl">
            <TopNav />
            
            <Grid container >
                <Grid item xs = {6}>
                    <Card className={classes.card} >
                        <CardContent>
                            <Typography variant="h6" style={{color: "orange", fontFamily: "'Merriweather', serif",}}> MasterEth<BsInfoCircle style={{float: "right", fontSize: "23"}} /></Typography>
                        </CardContent>
                        <CardContent>
                            <Typography variant="h7">
                                shortenAddress
                            </Typography>
                        </CardContent> 
                        <CardContent>
                            <SiEthereum style={{fontSize: "35", marginTop: 30, color: "orange"}} />
                        </CardContent>
                    </Card>
                </Grid>
                <form className={classes.formWrapper}>
                    <TextField className={classes.fill} label="Address To" variant="standard" />
                    <TextField className={classes.fill} label="Amount (ETH)" variant="standard" />
                    <TextField className={classes.fill} label="Transaction Title" variant="standard" />
                    <TextField className={classes.fill} label="Message to Receiver" variant="standard" />
                    <Button>

                    </Button>
                </form>
            </Grid>

            <Footer />
        </Container>
    );
}

export default Transaction;