import React from "react";
import PropTypes from "prop-types";
import "normalize.css";
import { Box } from "@material-ui/core";
import styles from "./Layout.module.scss";
import Seo from "../Seo/Seo";
import Navigation from "../Navigation";
import FullscreenContainer from "../FullscreenContainer/FullscreenContainer";
import useGlobalBackground from "../../hooks/useGlobalColors/useGlobalColors";

/**
 * Layout component props type
 */
type LayoutProps = {
  children: React.ReactNode;
};

/**
 * Layout component
 * @param children - to be rendered inside main section of layout
 */
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [[bgRGBColor], [fontRGBColor]] = useGlobalBackground();
  const bgColor = `rgb(${bgRGBColor.r}, ${bgRGBColor.g}, ${bgRGBColor.b})`;
  const color = `rgb(${fontRGBColor.r}, ${fontRGBColor.g}, ${fontRGBColor.b})`;

  return (
    <FullscreenContainer style={{ backgroundColor: bgColor }} className={styles.layout__container}>
      <Seo />
      <main data-testid="layout-content" className={styles.layout__main}>
        {children}
      </main>
      <Box className={styles.layout__navigation}>
        <Navigation color={color} bgColor={bgColor} />
      </Box>
    </FullscreenContainer>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
