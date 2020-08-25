import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { Helmet } from "react-helmet";
import Seo from "../Seo";

describe("Seo component", () => {
  describe("implementation", () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
      wrapper = shallow(<Seo />);
    });

    it("renders react helmet component", () => {
      expect(wrapper.find(Helmet).length).toEqual(1);
    });
  });
});
