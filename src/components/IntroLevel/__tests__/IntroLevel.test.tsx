import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Typist from "react-typist";
import { render, waitFor } from "@testing-library/react";
import { IntroLevel, IntroLevelProps } from "../IntroLevel";
import useNavigation from "../../../hooks/useNavigation/useNavigation";
import usePalette from "../../../hooks/usePalette/usePalette";

jest.mock("../../../hooks/useNavigation/useNavigation");
jest.mock("../../../hooks/usePalette/usePalette");

describe("IntroLevel component", () => {
  const defaultProps: IntroLevelProps = {
    hint: (
      <div className="hint">
        hint<b>qwe</b>
      </div>
    ),
  };

  describe("implementation", () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
      // eslint-disable-next-line react/jsx-props-no-spreading
      wrapper = shallow(<IntroLevel {...defaultProps} />);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("uses navigation", () => {
      expect(useNavigation).toBeCalledTimes(1);
    });

    it("uses palette", () => {
      expect(usePalette).toBeCalledTimes(1);
    });

    it("renders provided hint", () => {
      expect(wrapper.find(".hint").length).toEqual(1);
    });

    it("renders Typist component", () => {
      expect(wrapper.find(Typist).length).toBeGreaterThan(0);
    });

    it("renders Typist delays", () => {
      expect(wrapper.find(Typist.Delay).length).toBeGreaterThan(0);
    });
  });

  describe("user behavior", () => {
    let getByTestId: Function;
    let getByText: Function;
    let queryByText: Function;

    beforeEach(() => {
      // eslint-disable-next-line react/jsx-props-no-spreading
      const wrapper = render(<IntroLevel {...defaultProps} />);

      getByTestId = wrapper.getByTestId;
      getByText = wrapper.getByText;
      queryByText = wrapper.queryByText;
    });

    it("shows top hint element", () => {
      expect(getByTestId("intro-level-top-hint")).toBeInTheDocument();
    });

    it("shows bottom hint element", () => {
      expect(getByTestId("intro-level-bottom-hint")).toBeInTheDocument();
    });

    it("doesn't show top hint until it's typed", () => {
      expect(queryByText(/qwe/)).not.toBeInTheDocument();
    });

    it("shows top hint when it's typed", async () => {
      await waitFor(() => expect(getByText(/qwe/)).toBeInTheDocument(), {
        timeout: 5000,
      });
    });

    it("doesn't show bottom hint until it's typed", () => {
      expect(queryByText(/when ready/)).not.toBeInTheDocument();
    });

    it("shows bottom hint when it's typed", async () => {
      await waitFor(() => expect(getByText(/to navigate/)).toBeInTheDocument(), {
        timeout: 5000,
      });
    });
  });
});
