/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react";
import AppProviders from "./src/components/AppProviders.tsx";
import "./src/App.scss";

// highlight-start
// eslint-disable-next-line
export const wrapRootElement = ({ element }) => <AppProviders>{element}</AppProviders>;

export const onServiceWorkerUpdateReady = () => {
  // eslint-disable-next-line no-undef
  if (window.confirm("twoeyes just received an update. Do you want to sync your app?")) {
    // eslint-disable-next-line no-undef
    window.location.reload();
  }
};

// highlight-end
