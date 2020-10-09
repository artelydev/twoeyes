import React, { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import Seo from "../components/Seo/Seo";
import useNavigation from "../hooks/useNavigation/useNavigation";

/**
 * Index page component
 */
const IndexPage: React.FC = () => {
  const [CurrentLevel, nextLevel, previousLevel, resetLevels] = useNavigation();

  useEffect(() => {
    const enableNavigation = ({ keyCode }: KeyboardEvent) => {
      switch (keyCode) {
        case 13:
        case 39:
          return nextLevel();
        case 37:
          return previousLevel();
        case 8:
          return resetLevels();
        default:
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          return () => {};
      }
    };

    document.addEventListener("keydown", enableNavigation, false);

    return () => {
      document.removeEventListener("keydown", enableNavigation, false);
    };
  }, [nextLevel, previousLevel, resetLevels]);

  return (
    <Layout>
      <Seo />
      {CurrentLevel}
    </Layout>
  );
};

export default IndexPage;
