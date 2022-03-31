import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
	createContainer: {
        margin: "auto",
        background: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(30px)",
        borderRadius: "17px",
        textAlign: "center",
        width: "70%",
        padding: 40,
        marginTop: "6%",
    },
    formWrapper: {
        marginTop: "3%",
        display: "flex",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    submitBtn: {
        width: "100%",
        borderRadius: "10px",
        backgroundColor: "orange",
        marginTop: "7%",
    },

    NFTcard: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "90%",
        height: "90%",
    }
}))