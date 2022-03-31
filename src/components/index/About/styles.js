import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    author: {
        textAlign: "center",
        marginTop: "3%",
        
    },
    myPhoto: {
        position: "relative",
        width: "30%",
        borderRadius: "15px",
        marginTop: theme.spacing(3),
    },
    aboutMe: {
        marginTop: theme.spacing(4),
    }
}))