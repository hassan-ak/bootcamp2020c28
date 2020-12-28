// Imports
// React Imports
import React from "react";
// Enzyme imports
import { shallow } from "enzyme";
// Component Imports
import Footer from "./Footer";

describe("check Footer component renders", () => {
    let container:any;
    beforeEach(() => (container = shallow(<Footer/>)))
    it("should render a <div />", () => {
        expect(container.find("div").length).toEqual(1)
    });
})