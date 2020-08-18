import React from "react";
import { Box } from "@material-ui/core";
import levelStyles from "../Levels.module.scss";

const Exercise: React.ComponentType = () => {
  return <Box className={levelStyles.level__container}>Levels component</Box>;
};

export default Exercise;
