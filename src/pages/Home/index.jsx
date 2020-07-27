import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FormCharacter, TransformCharacter } from "../../components";

const useStyles = makeStyles(() => ({
    root: {
        fontFamily: "'Handlee', cursive",
    },
}));

export default function Home() {
    const classes = useStyles();

    return (
        <Grid className={classes.root}>
            <Grid container justify={"center"}>
                <Grid item>
                    <h1>Text Transform App</h1>
                </Grid>
            </Grid>
            <Grid container justify={"center"}>
                <Grid item>
                    <FormCharacter />
                </Grid>
            </Grid>
            <Grid container justify={"center"}>
                <Grid item>
                    <TransformCharacter />
                </Grid>
            </Grid>
        </Grid>
    );
}
