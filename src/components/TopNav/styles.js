import { makeStyles } from "@material-ui/core";
import { hover } from "@testing-library/user-event/dist/hover";

export default makeStyles((theme) => ({
    navbar: {
        overflow: "hidden",
        backgroundColor: "transparent",
        alignItems: "center",
    },
    image: {
        cursor: "pointer",
        marginTop:"-1%",
        height: 130
    },
    links: {
        textDecoration: "none",
        listStyle: "none",
        color: "white",
        fontSize: "21px",
        marginLeft: theme.spacing(10),
        "&:hover": {
            textDecoration: "none"
        }
    },
    popupButton: {
        textDecoration: "none",
        listStyle: "none",
        color: "white",
        fontSize: "21px",
        marginLeft: theme.spacing(10), 
    },
    NFT: {
        "&:hover": {
            color: "white",
            backgroundColor: "grey"
        }
    },
    loginButton: {
        float: "right",
        backgroundColor: "#2952e3",
        borderRadius:"50px",
        textDecoration: "none",
        listStyle: "none",
        fontSize: "20px",
        textAlign: "center",
        width: 100,
        marginLeft: theme.spacing(10), 
        marginTop:7
    },
    button: {
        color: "white",
    }
}));