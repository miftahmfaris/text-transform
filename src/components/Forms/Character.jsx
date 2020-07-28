import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { changeCharacter } from "../../redux/actions";
import { useDispatch } from "react-redux";

const useStyles = makeStyles(() => ({
    field: {
        width: "100%",
    },
    error: {
        color: "red",
        fontStyle: "italic",
        fontWeight: "bold",
    },
    marginBottom: {
        marginBottom: "10px",
    },
}));

const customField = (props) => {
    return <TextField variant="outlined" {...props} />;
};

export default function Character() {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{
                characters: "",
            }}
            validate={(values) => {
                const errors = {};
                if (!values.characters) {
                    errors.characters = "Required";
                } else if (values.characters.match(/[0-9]/)) {
                    errors.characters = "Please don't input number";
                }
                return errors;
            }}
            onSubmit={(values, { resetForm }) => {
                resetForm({ values: "" });
                dispatch(changeCharacter(values));
            }}
        >
            <Form>
                <Grid className={classes.marginBottom}>
                    <Field
                        as={customField}
                        type="text"
                        name="characters"
                        label="Input Characters"
                    />
                    <ErrorMessage
                        name="characters"
                        component="div"
                        className={classes.error}
                    />
                </Grid>
                <Grid>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className={classes.field}
                    >
                        Submit
                    </Button>
                </Grid>
            </Form>
        </Formik>
    );
}
