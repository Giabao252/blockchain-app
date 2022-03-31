import React, { useContext } from "react";
import { TransactionContext } from "../../../context/TransactionContext";
import dummyData from "../../../utilities/dummydata";

import { Container, Grid, Typography, Card } from "@material-ui/core";
import useStyles from "./styles";

const TransactionRecord = ({ receiver, sender, timestamp, title, message }) => {
    const classes = useStyles();

    return 
} 

const Transactions = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="xl">
            <Typography variant="h4" className={classes.heading}>Transaction Records</Typography>
            <div className={classes.transactions}>
                { dummyData.map((transaction, i) => (
                    <TransactionRecord key={i} {...transaction} />
                )) }
            </div>
        </Container>
    );
}

export default Transactions;