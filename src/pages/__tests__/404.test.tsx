import React from "react";
import { mount } from "enzyme";
import * as gatsby from "gatsby";
import NotFoundPage from "../404";

jest.mock("gatsby");

describe("NotFound page component", () => {
  describe("implementation", () => {
    beforeEach(() => {
      // jest.spyOn(gatsby, "navigate");
      mount(<NotFoundPage />);
    });

    it("redirects to the home page", async () => {
      expect(gatsby.navigate as jest.Mock).toHaveBeenCalledTimes(1);
      expect(gatsby.navigate as jest.Mock).toHaveBeenCalledWith("/");
    });
  });
});
