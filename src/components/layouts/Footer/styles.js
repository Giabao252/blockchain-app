import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    footer_wrapper: {
        position: "static",
        textAlign: "center",
        marginTop: "10%"
    },
    image: {
        width: 300,
    },
    contact: {
        marginTop: "-3%",
        marginBottom: "2%"
    },
    links: {
        textDecoration: "none",
        color: "white",
        marginLeft: theme.spacing(3),
    },
    copyright: {
        marginTop: "2%",
        fontFamily: "'Playfair Display', serif"
    }
}))