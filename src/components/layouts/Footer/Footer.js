import React from "react";
import { Container, Typography } from "@material-ui/core";
import Cryptonite from "../../../assets/Cryptonite.png";
import useStyles from "./styles";
import Link from "@material-ui/core/Link";
import { Facebook, LinkedIn, Mail, GitHub, Instagram } from "@material-ui/icons";


const Footer = () => {
    const classes = useStyles();

    return (
        <Container className={classes.footer_wrapper} maxWidth="xl">
            <img src={Cryptonite} className={classes.image} alt="FooterLogo"/>
            <Typography className={classes.contact}>Contact me</Typography>
            <div>
                <Link href="https://www.facebook.com/profile.php?id=100035791500312" style={{color: "white", textDecoration: "none"}}>
                    <Facebook />
                </Link>
                <Link href="https://www.instagram.com/billybigboy_06/" className={classes.links}>
                    <Instagram />
                </Link>
                <Link href="https://www.linkedin.com/in/bao-luu-180983217/" className={classes.links}>
                    <LinkedIn />
                </Link>
                <Link href="luugiabaoluu24@gmail.com" className={classes.links}>
                    <Mail />
                </Link>
            </div>
            <Typography className={classes.copyright}> Luu Gia Bao © 2022 Cryptonite</Typography>
        </Container>
    );
}

export default Footer