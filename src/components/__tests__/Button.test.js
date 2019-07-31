import React from "react";
import { shallow } from "enzyme";
import Button from "../Button";

let wrapper;
let text;
let onClick;

describe("<Button />", () => {
    beforeEach(() => {
        text = "text";
        onClick = jest.fn();
        wrapper = shallow(<Button text={text} onClick={onClick} />);
    });

    test("should render with text", () => {
        expect(wrapper.text()).toBe(text);
    });

    test("should fire the callback on the onClick event", () => {
        wrapper.simulate("click");
        expect(onClick).toHaveBeenCalled();
    });
});
