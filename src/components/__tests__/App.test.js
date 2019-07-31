import React from "react";
import { shallow } from "enzyme";
import App from "../../App";

describe("<App />", () => {
    test("the handleChange method should increment the count state", () => {
        const wrapper = shallow(<App />);
        const instance = wrapper.instance();

        instance.handleChange();
        expect(wrapper.state("count")).toBe(1);
    });
});
