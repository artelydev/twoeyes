import React from "react";
import { render } from "@testing-library/react";
import Header from "../header";

jest.mock("gatsby");

describe("Header", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<Header siteTitle="Test site title" />);

    expect(getByTestId("header")).toBeInTheDocument();
  });
});
