import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import useNavigation from "../../hooks/useNavigation/useNavigation";
import IndexPage from "../index";
import Seo from "../../components/Seo/Seo";
import Layout from "../../components/Layout/Layout";

jest.mock("../../hooks/useNavigation/useNavigation");

describe("IndexPage component", () => {
  describe("implementation", () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
      wrapper = shallow(<IndexPage />);
    });

    it("utilizes useNavigation hook", () => {
      expect(useNavigation).toHaveBeenCalledTimes(1);
    });

    it("renders SEO component", () => {
      expect(wrapper.find(Seo).length).toEqual(1);
    });

    it("renders layout component", () => {
      expect(wrapper.find(Layout).length).toEqual(1);
    });
  });
});
