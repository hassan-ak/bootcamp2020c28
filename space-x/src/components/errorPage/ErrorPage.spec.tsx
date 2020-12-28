// Imports
// React Imports
import React from "react";
// Enzyme imports
import { shallow } from "enzyme";
// Component Imports
import { ErrorPage } from "./ErrorPage";

describe("check ErrorPage component renders", () => {
    let container:any;
    beforeEach(() => (container = shallow(<ErrorPage/>)))
    it("should render 3 <div />", () => {
        expect(container.find("div").length).toEqual(3)
    });
    it("should render 1 <p />", () => {
        expect(container.find("p").length).toEqual(1)
    });
    it("should render 1 <strong />", () => {
        expect(container.find("strong").length).toEqual(1)
    });
})