import React from "react";
import { useSelector } from "react-redux";
import { Grid, Container } from "@material-ui/core";

export default function Transform() {
    const transform = useSelector((state) => state);

    return (
        <Container>
            {transform.upperCase !== undefined && (
                <React.Fragment>
                    <Grid container>
                        <Grid item>
                            <h3>UpperCase : {transform.upperCase}</h3>
                        </Grid>
                    </Grid>
                    <Grid>
                        <Grid item>
                            <h3>AlternateCase : {transform.alternateCase}</h3>
                        </Grid>
                    </Grid>
                </React.Fragment>
            )}
        </Container>
    );
}
