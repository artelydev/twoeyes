import React from "react";
import Layout from "../components/Layout/Layout";
import Seo from "../components/Seo/Seo";
import useNavigation from "../hooks/useNavigation/useNavigation";

/**
 * Index page component
 */
const IndexPage: React.FC = () => {
  const [CurrentLevel] = useNavigation();

  return (
    <Layout>
      <Seo />
      {CurrentLevel}
    </Layout>
  );
};

export default IndexPage;
