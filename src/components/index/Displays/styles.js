import { makeStyles } from "@material-ui/styles";

export default makeStyles(() => ({
    heading: {
        textAlign: "center",
        fontFamily: "'Merriweather', serif"
    },
    transactions: {
        display: "flex",
        flexWrap: "wrap-reverse",
        flexDirection: "column",
        justifyContent: "center",
    }
    
}))