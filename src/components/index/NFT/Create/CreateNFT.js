import React from "react";
import { Container, Grid, Typography, Button, Card} from "@material-ui/core";
import { TopNav, Footer } from "../../../components"; 
import useStyles from "./styles";

const Form = ({placeholder, type, name, value, handleChange}) => (
    <input 
    style={{
        marginTop: "7%",
        width:"97%",
        borderRadius: "10px",
        height: 40,
        backgroundColor:"transparent",
        borderStyle: "solid",
        borderColor: "orange",
        color:"orange",
    }}
    placeholder={placeholder}
    type={type}
    step="0.01"
    value={value}
    onChange={(e) => handleChange(e, name)}
    />
);

const CreateNFT = () => {
    const classes = useStyles();
    

    return (
        <Container maxWidth="xl">
            <TopNav />
            
            <div className={classes.createContainer}>
                <Typography variant="h4" style={{fontFamily: "'Merriweather', serif"}}>Let's create an NFT!</Typography> 

                <Grid container>
                    <Grid item xs={6}>
                        <Card className={classes.NFTcard}>

                        </Card>

                        <input type="file" className={classes.upload} accept="image/jpg, image/png"/>
                    </Grid>
                    
                    <Grid item xs={6}> 
                        <div className={classes.formWrapper}>
                            <Form 
                            placeholder="NFT's Name"
                            type="text"
                            name="NFTname"
                            
                            />
                            <Form 
                            placeholder="Description"
                            type="text"
                            name="description"

                            />
                            <Form
                            placeholder="Value (ETH)"
                            type="number"
                            name="value"

                            />
                            <Button className={classes.submitBtn}>
                                Create
                            </Button>
                        </div>
                        

                    </Grid>
                </Grid>
            </div>
            
            <Footer />
        </Container>
    );

}

export default CreateNFT
