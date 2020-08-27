import React from "react";
import * as gatsby from "gatsby";
import GatsbyImage from "gatsby-image";
import { shallow, ShallowWrapper } from "enzyme";
import Image from "../Image";

jest.mock("gatsby");

describe("Image component", () => {
  describe("implementation", () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
      wrapper = shallow(<Image path="eye.png" />);
    });

    it("utilizes gatsby useStaticQuery", () => {
      expect(gatsby.useStaticQuery).toHaveBeenCalledTimes(1);

      expect(gatsby.useStaticQuery).toHaveBeenCalledWith(gatsby.graphql`
        query {
          placeholderImage: file(relativePath: { eq: "eye.png") {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `);
    });

    it("renders GatsbyImage component", () => {
      expect(wrapper.find(GatsbyImage).length).toEqual(1);
    });
  });
});
