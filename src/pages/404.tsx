import React, { useEffect } from "react";
import { navigate } from "gatsby";

const NotFoundPage: React.FC = () => {
  useEffect(() => {
    navigate("/");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default NotFoundPage;
