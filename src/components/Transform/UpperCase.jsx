import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";

export default function UpperCase() {
    const transform = useSelector((state) => state);

    return (
        <Grid container>
            {transform.upperCase !== undefined && (
                <Grid item>
                    <h3>Upper Case : {transform.upperCase}</h3>
                </Grid>
            )}
        </Grid>
    );
}
