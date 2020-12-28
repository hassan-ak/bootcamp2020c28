// Imports
// React Imports
import React from "react";
// Enzyme imports
import { shallow } from "enzyme";
// Component Imports
import Header from "./Header";

describe("check Header component renders", () => {
    let container:any;
    beforeEach(() => (container = shallow(<Header/>)))
    it("should render a <div />", () => {
        expect(container.find("div").length).toEqual(1)
    });
})