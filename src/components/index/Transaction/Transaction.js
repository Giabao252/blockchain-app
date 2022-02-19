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
    const TextField = ({label, name, type, value, handle}) => {
        <TextField 
        label={label}
        type={type}
        step="0.0001"
        value={value}
        onHandle={(event) => handle(event, name)}
        />
    }
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
                                shortenedAddress
                            </Typography>
                        </CardContent> 
                        <CardContent>
                            <SiEthereum style={{fontSize: "35", marginTop: 30, color: "orange"}} />
                        </CardContent>
                    </Card>
                </Grid>
                <form className={classes.formWrapper}>
                    <TextField className={classes.fill} label="Address To" name="addressTo" type="text" variant="standard" />
                    <TextField className={classes.fill} label="Amount (ETH)" name="amount" type="number" variant="standard" />
                    <TextField className={classes.fill} label="Transaction Title" name="title" type="text" variant="standard" />
                    <TextField className={classes.fill} label="Message to Receiver" name="message" type="text" variant="standard" />
                    <Button className={classes.sendTransaction} >
                        Send ETH
                    </Button>
                </form>
            </Grid>

            <Footer />
        </Container>
    );
}

export default Transaction;