import React from "react";
import useStyles from './styles';
import { TopNav, Footer } from "../../components";
import {Container, Typography} from '@material-ui/core';

import Me from "../../../assets/Myself.jpg";

const About = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="xl">
            <TopNav />
            <div className={classes.author}>
                <Typography variant="h3">Author</Typography>
                <img src={Me} className={classes.myPhoto} alt="MyPhoto" />
                <Typography className={classes.aboutMe}>
                    I'm a Computer Science and Software Engineering student at Denison University. Having a passion for technology, particularly blockchain, I came up with this platform for Crypto & NFT enthusiasts to experience trading and blockchain-based sales with test network ETHEREUM  
                </Typography>
            </div>
            <Footer />
        </Container>
    )

} 

export default About;