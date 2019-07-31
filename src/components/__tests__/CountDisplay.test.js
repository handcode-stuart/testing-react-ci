import React from "react";
import { shallow } from "enzyme";
import CountDisplay from "../CountDisplay";

let wrapper;
let count;

describe("<CountDisplay />", () => {
    beforeEach(() => {
        count = 1;
        wrapper = shallow(<CountDisplay count={count} />);
    });

    test("should render the given count prop", () => {
        expect(wrapper.text()).toBe(`${count}`);
    });
});
