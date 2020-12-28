// Imports
// React Imports
import React from "react";
// Enzyme imports
import { shallow } from "enzyme";
// Component Imports
import { Home } from "./Home";

describe("check Home component renders", () => {
    let container:any;
    beforeEach(() => (container = shallow(<Home/>)))
    it("should render a <div />", () => {
        expect(container.find("div").length).toEqual(1)
    });
})