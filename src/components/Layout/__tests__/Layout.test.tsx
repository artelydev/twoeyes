import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Layout from "../Layout";
import Seo from "../../Seo/Seo";
import Navigation from "../../Navigation/Navigation";
import FullscreenContainer from "../../FullscreenContainer/FullscreenContainer";
import useGlobalColors from "../../../hooks/useGlobalColors/useGlobalColors";

jest.mock("../../../hooks/useGlobalColors/useGlobalColors");

describe("Layout component", () => {
  describe("implementation", () => {
    let wrapper: ShallowWrapper;

    const FakeComponent: React.ComponentType = jest.fn();

    beforeEach(() => {
      wrapper = shallow(
        <Layout>
          <FakeComponent />
        </Layout>,
      );
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("renders fake component as a child", () => {
      expect(wrapper.find(FakeComponent).length).toEqual(1);
    });

    it("renders fullscreen container", () => {
      expect(wrapper.find(FullscreenContainer).length).toEqual(1);
    });

    it("renders seo component", () => {
      expect(wrapper.find(Seo).length).toEqual(1);
    });

    it("renders navigation component", () => {
      expect(wrapper.find(Navigation).length).toEqual(1);
    });

    it("uses global colors", () => {
      expect(useGlobalColors).toBeCalledTimes(1);
    });
  });
});
