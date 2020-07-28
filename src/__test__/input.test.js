import React from "react";
import { Formik } from "formik";
import { render } from "@testing-library/react";
import { Input } from "../components";

describe("<Input />", () => {
    it("should render without error", async () => {
        const { container } = render(
            <Formik initialValues={{ characters: "" }}>
                <Input label="Character" name="characters" />
            </Formik>
        );

        const input = container.querySelector("input");

        expect(input).not.toBeNull();
    });
});
