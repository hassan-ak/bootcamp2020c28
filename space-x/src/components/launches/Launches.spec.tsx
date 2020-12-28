// Imports
// React Imports
import React from "react";
// Enzyme imports
import { shallow } from "enzyme";
// Component Imports
import { Launches } from "./Launches";

describe("check LAunches component renders", () => {
    let container:any;
    beforeEach(() => (container = shallow(<Launches/>)))
    it("should render a <div />", () => {
        expect(container.find("div").length).toEqual(1)
    });
})