import React from "react";
import styles from "./FullscreenContainer.module.scss";

/**
 * Fullscreen container component props
 */
export type FullscreenContainerProps = {
  children: React.ReactNode;
  style?: { [key: string]: string };
  className?: string;
};

/**
 * Fullscreen container component
 * @param children - to be rendered inside fullscreen container
 * @param className - to be passed to a container
 * @param style - to be passed to a container
 */
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
