import React, {useState, useContext } from "react";
import { TopNav, Footer } from "../../components";
import { Button, Typography, Card, CardContent, Grid, Container } from "@material-ui/core";
import { TransactionContext } from "../../../context/TransactionContext";
import { shortenAddress } from "../../../utilities/shortAddress";

import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import useStyles from "./styles";


const Input = ({placeholder, name, type, value, handleChange}) =>
(
    <input 
    style={{
    marginTop: "3%",
    width:"97%",
    borderRadius: "10px",
    height: 40,
    backgroundColor:"transparent",
    border: "none",
    color:"orange",
}}
    
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(event) => handleChange(event, name)}
    />
);
  
const Transaction = () => {
    const classes = useStyles();
    const { CurrentAccount, formData, setFormData, handleChange, sendTransaction} = useContext(TransactionContext);
    

    const handleSubmit = (event) => {
        const { sender, amount, title, message } = formData;
    
        event.preventDefault();
    
        if (!sender || !amount || !title || !message) return;
    
        sendTransaction();
      };

    return (
        <Container maxWidth="xl">
            <TopNav />

            <Typography className={classes.heading} variant="h3">Enjoy our fast, secured and convenient service!!</Typography>
            
            <Grid container >
                <Grid item xs = {6}>
                    <Card className={classes.card} >
                        <CardContent>
                            <Typography variant="h6" style={{color: "orange", fontFamily: "'Merriweather', serif",}}> MasterEth<BsInfoCircle style={{float: "right", fontSize: "23"}} /></Typography>
                        </CardContent>
                        <CardContent>
                            <Typography variant="h5">
                                {shortenAddress(CurrentAccount)}
                            </Typography>
                        </CardContent> 
                        <CardContent>
                            <SiEthereum style={{fontSize: "35", marginTop: 30, color: "orange"}} />
                        </CardContent>
                    </Card>
                </Grid>
                <div className={classes.formWrapper} >
                    <Input 
                         handleChange={handleChange}
                         placeholder="Receiver"
                         name="receiver"
                         type="text" 
                     />
                     <Input
                        handleChange={handleChange}
                        placeholder="Amount (ETH)"
                        name="amount"
                        type="number"
                        
                     />
                     <Input
                        handleChange={handleChange}
                        placeholder="Transaction Title"
                        name="title"
                        type="text"
                     />
                     <Input
                        handleChange={handleChange} 
                        placeholder="Message to Receiver"
                        name="message"
                        type="message"
                     />
                     
                     <Button 
                     className={classes.submitButton}
                     type="button"
                     onClick={handleSubmit}
                     >
                         Confirm Transaction
                     </Button>
                </div>
                
            </Grid>

            <Footer />
        </Container>
    );
}

export default Transaction;