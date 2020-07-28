import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";

export default function AlternateCase() {
    const transform = useSelector((state) => state);

    return (
        <Grid>
            {transform.alternateCase !== undefined && (
                <Grid item>
                    <h3>Alternate Case : {transform.alternateCase}</h3>
                </Grid>
            )}
        </Grid>
    );
}
