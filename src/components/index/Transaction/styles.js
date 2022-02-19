import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    formWrapper: {
        color: "white",
        alignSelf: "center",
        borderRadius: "15px",
        marginTop: "7%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "24rem",
        width: "40%"
    },
    fill: {
        width: 300,
        marginTop: theme.spacing(3),

    },

    card: {
        marginTop: "23%",
        width: 400,
        height: 220,
        borderRadius: "10px",
        background: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(30px)",
        border: "2px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 0 80px rgba(0, 0, 0, 0.2)",
        overflow: "hidden"
    },
    sendTransaction: {
        marginTop: "5%",
        color: "black",
        backgroundColor: "orange",
        justifySelf: "center",
        width: 320,
        borderRadius: "25px",
        "&:hover": {
            backgroundColor: "gold"
        }
    }

}))