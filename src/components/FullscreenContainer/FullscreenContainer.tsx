import React from "react";
import styles from "./FullscreenContainer.module.scss";

type FullscreenContainerProps = {
  children: React.ReactNode;
  style?: { [key: string]: string };
  className?: string;
};

const FullscreenContainer: React.FC<FullscreenContainerProps> = ({
  children,
  className,
  style,
}) => {
  return (
    <div style={style} className={`${styles.fullscreen_container} ${className || ""}`}>
      {children}
    </div>
  );
};

export default FullscreenContainer;
