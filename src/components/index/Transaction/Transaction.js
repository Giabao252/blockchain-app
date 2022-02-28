import React, {useState, useContext } from "react";
import { TopNav, Footer } from "../../components";
import {TextField, Button, Typography, Card, CardContent, Grid, Container } from "@material-ui/core";
import { TransactionContext } from "../../../context/TransactionContext";
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
        onChange={(event) => handleChange(event, name)}
        />
    }
    */
    
    const { connectWallet, CurrentAccount, formData, setFormData} = useContext(TransactionContext);

    const [amount, setAmount] = useState("");
    const [valueError, setValueError] = useState("");
    const [address, setAddress] = useState("");
    const [message, setMessage] = useState("");
    const [title, setTitle] = useState("")
    const [addressError, setAddressError] = useState(false);
    const [titleError, setTitleError] = useState(false);

    
    const handleSubmit = (event) => {
        event.preventDefault()
        if (address === '') {
            setAddressError(true);
        }
        if (amount === '') { //Value with capital V is for the ETH amount
            setValueError(true);
        }
        if (title === '') {
            setTitleError(true);
        }
        if (address && amount && title && message) {
            console.log(address, amount, title, message)
        }
    }


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
                                {shortenAddress(CurrentAccount)}
                            </Typography>
                        </CardContent> 
                        <CardContent>
                            <SiEthereum style={{fontSize: "35", marginTop: 30, color: "orange"}} />
                        </CardContent>
                    </Card>
                </Grid>
                <form className={classes.formWrapper} onSubmit={handleSubmit}>
                    <TextField
                         className={classes.fill} 
                         onChange={(event) => setAddress(event.target.value)} 
                         color="secondary" 
                         label="Address To"  
                         name="addressTo"
                         type="text" 
                         variant="standard" 
                         required
                     />
                    <TextField
                        className={classes.fill} 
                        onChange={(event) => setAmount(event.target.value)}
                        color="secondary" 
                        label="Amount (ETH)" 
                        type="number" 
                        variant="standard" 
                        required
                     />
                    <TextField
                        className={classes.fill} 
                        onChange={(event) => setTitle(event.target.value)}
                        color="secondary" 
                        label="Transaction Title"
                        type="text" 
                        variant="standard" 
                        required
                    />
                    <TextField
                        className={classes.fill} 
                        onChange={(event) => setMessage(event.target.value)}
                        color="secondary"
                        label="Message to Receiver"
                        type="text" 
                        variant="standard" 
                    />
                    <Button
                     className={classes.sendTransaction}  
                     type="submit"
                     >
                        Send ETH
                    </Button>
                </form>
            </Grid>

            <Footer />
        </Container>
    );
}

export default Transaction;