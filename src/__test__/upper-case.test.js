import React from "react";
import { render, screen } from "@testing-library/react";
import { UpperCase } from "../components";
import { useSelector } from "react-redux";

jest.mock("react-redux", () => ({
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
}));

describe("<UpperCase />", () => {
    it("should render without error", async () => {
        useSelector.mockImplementation((selector) =>
            selector({
                upperCase: "makan",
                alternateCase: "mAkAn",
            })
        );
        const { container } = render(<UpperCase />);

        expect(container).toMatchSnapshot();
    });
});
