import React from "react";
import { render, screen } from "@testing-library/react";
import { AlternateCase } from "../components";
import { useSelector } from "react-redux";

jest.mock("react-redux", () => ({
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
}));

describe("<AlternateCase />", () => {
    it("should render without error", async () => {
        useSelector.mockImplementation((selector) =>
            selector({
                upperCase: "makan",
                alternateCase: "mAkAn",
            })
        );
        const { container } = render(<AlternateCase />);

        expect(container).toMatchSnapshot();
    });
});
