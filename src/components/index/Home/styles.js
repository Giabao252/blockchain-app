import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    introPara: {
        marginTop: "10%",
        fontFamily: "'Merriweather', serif",
        textDecorationColor: "gradient"
    },
    subPara: {
        marginTop: "3%",
        fontFamily: "'Work Sans', sans-serif"
    },
    connectButton: {
        marginTop: "3%",
        color: "black",
        backgroundColor: "orange",
        justifySelf: "center",
        width: 450,
        borderRadius: "25px",
        "&:hover": {
            backgroundColor: "gold"
        }
    },
    metamask: {
        marginTop: "10%",
    },
    aboutMetamask: {
        textAlign: "center",
    },
    title: {
        fontFamily: "'Merriweather', serif"
    },
    subMeta: {
        fontFamily: "'Work Sans', sans-serif",
    },
    guide: {
        marginTop: "3%",
        listStyle: "none",
        marginLeft: "10%"
    },
    
    link: {
        color: "orange",
    },
    logo: {
        marginLeft: "5%"
    },
//this is the feature section 

    features: {
        marginTop: "10%",
        textAlign: "center",   
    },
    box: {
        borderStyle: "ridge",
        borderColor: "white",
        borderRadius: "25px",
        marginLeft: theme.spacing(8)
    }

}))