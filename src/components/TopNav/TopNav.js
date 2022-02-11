import React from "react";
import cryptonite from "../../Cryptonite.png";
import { Link } from "react-router-dom";
import useStyles from "./styles";

function PopUp() {
    document.getElementsByClassName("popup-content").classList.toggle("show");
}


const TopNav = () => {
    const classes = useStyles();

    return (
        <div className={classes.navbar}>
            <img src={cryptonite} alt="Cryptonite Logo"></img>

            <ul className={classes.nav_elements}>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/transaction">Transaction</Link>
                </li>
                <li className= {classes.popup_menu}>
                    <button onClick={PopUp()} className={classes.popup_button}>NFT</button>
                    <div className={classes.popup_content}>
                        <Link to="/Create-NFT">Create NFT</Link>
                        <Link to="/Marketplace-NFT">Marketplace</Link>
                    </div>
                </li>
            </ul>
        </div>
    )
    
}

//Menu close if user clicks outside
window.onclick = function(event) {
    if (!event.taget.matches('.popup_button')) {
        var PopUps = document.getElementsByClassName("popup_content");
        var i;
        for (i = 0; i < PopUps.length; i++) {
            var open_menu = PopUps[i];
            if (open_menu.classList.contains("show")) {
                open_menu.classList.remove("show");
            }
        } 
    }
};

export default TopNav;