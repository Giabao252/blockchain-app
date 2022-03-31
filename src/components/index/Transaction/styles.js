import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    heading: {
        fontFamily: "'Merriweather', serif",
        textAlign: "center",
        marginTop: "3%"
    },
    formWrapper: {
        background: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(30px)",
        borderRadius: "15px",
        marginTop: "10%",
        flex: 0.7,
        flexDirection: "column",
        alignItems: "center",
        padding: 20,
        justifyContent: "flex-start",
        alignSelf: "center"
    },
    card: {
        marginTop: "20%",
        width: 400,
        height: 220,
        borderRadius: "10px",
        background: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(30px)",
        border: "2px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 0 80px rgba(0, 0, 0, 0.2)",
        overflow: "hidden"
    },
    submitButton: {
        marginTop: "5%",
        color: "black",
        backgroundColor: "orange",
        justifySelf: "center",
        width: 350,
        borderRadius: "25px",
        "&:hover": {
            backgroundColor: "gold"
        }
    }
}))