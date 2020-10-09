/**
 * Have to thank https://github.com/pmndrs/react-three-fiber for this exercise
 * as it was able to adapt the showcase to our need
 */

import React, { useEffect, useMemo } from "react";
import { Box } from "@material-ui/core";
import * as THREE from "three";
import { useSprings, a } from "@react-spring/three";
import { Canvas } from "react-three-fiber";
import exerciseStyles from "./Exercise.module.scss";
import useGlobalColors from "../../hooks/useGlobalColors/useGlobalColors";
import { RGBColor } from "../../contexts/SettingsContext/SettingsContext";

/**
 * Number of geometry boxes to be created
 */
export const number = 10;

/**
 * Gets random positional arguments for threejs box
 * @param i - factor number to be used in random computations
 */
export const getRandomPositionalArgs = (i: number) => {
  const r = Math.random();
  return {
    position: [100 - Math.random() * 200, 100 - Math.random() * 200, i * 1.5],
    scale: [5 + r * 5, 5 + r * 5, 1],
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    rotation: [0, 0, THREE.Math.degToRad(Math.round(Math.random()) * 180)],
  };
};

/**
 * Gets random color in an array of 2 rgb strings
 * @param colors - array of 2 rgb strings
 */
export const getRandomColor = (colors: string[]) => ({
  color: colors[Math.round(Math.random())],
});

/**
 * Exercise content component props type
 */
type ContentProps = {
  colors: [string, string];
};

/**
 * Exercise content component
 * @param colors - a set of 2 rgb strings to be used as colors for threejs shapes
 */
export const Content: React.FC<ContentProps> = ({ colors }) => {
  const [spaceSprings, spaceSpringsSet] = useSprings(number, (i: number) => ({
    from: getRandomPositionalArgs(i),
    ...getRandomPositionalArgs(i),
    config: { mass: 20, tension: 150, friction: 50 },
  }));

  const data = useMemo(
    () =>
      new Array(number).fill(undefined).map(() => {
        return {
          color: colors[Math.round(Math.random())],
          args: [5 + Math.random() * 5, 5 + Math.random() * 5, 10],
        };
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const [colorSprings, colorSpringsSet] = useSprings(number, () => ({
    color: colors[Math.round(Math.random())],
  }));

  useEffect(() => {
    setInterval(() => {
      colorSpringsSet((i: number) => ({ ...getRandomColor(colors), delay: i * 40 }));
      spaceSpringsSet((i: number) => ({ ...getRandomPositionalArgs(i), delay: i * 40 }));
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {data.map((d, index) => (
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        // eslint-disable-next-line react/no-array-index-key, react/jsx-props-no-spreading
        <a.mesh key={index} {...spaceSprings[index]} castShadow receiveShadow>
          {/* @ts-ignore */}
          <boxBufferGeometry attach="geometry" args={d.args} />
          <a.meshStandardMaterial
            attach="material"
            color={colorSprings[index].color}
            roughness={0.75}
            metalness={0.5}
          />
        </a.mesh>
      ))}
    </>
  );
};

/**
 * Exercise threejs lights component
 */
export const Lights: React.FC = () => {
  return (
    <group>
      <pointLight intensity={0.3} />
      <ambientLight intensity={2} />
      <spotLight
        castShadow
        intensity={0.2}
        angle={Math.PI / 7}
        position={[150, 150, 250]}
        penumbra={1}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
    </group>
  );
};

/**
 * Exercise component props type
 */
export type ExerciseProps = {
  colors: [RGBColor, RGBColor];
};

/**
 * Exercise component
 * @param leftLense - RGBColor object of left lense color
 * @param rightLense - RGBColor object of right lense color
 */
const Exercise: React.FC<ExerciseProps> = ({ colors: [leftLense, rightLense] }) => {
  const [
    [, setGlobalBackground, resetGlobalBackground],
    [, setGlobalColor, resetGlobalColor],
  ] = useGlobalColors();

  const rightLenseRGBString = `rgb(${rightLense.r}, ${rightLense.g}, ${rightLense.b})`;
  const leftLenseRGBString = `rgb(${leftLense.r}, ${leftLense.g}, ${leftLense.b})`;

  useEffect(() => {
    setGlobalColor({ r: 255, g: 255, b: 255 });
    setGlobalBackground({ r: 0, g: 0, b: 0 });

    return () => {
      resetGlobalBackground();
      resetGlobalColor();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box className={exerciseStyles.exercise__container}>
      <Canvas shadowMap camera={{ position: [0, 0, 100], fov: 100 }}>
        <Lights />
        <Content colors={[leftLenseRGBString, rightLenseRGBString]} />
      </Canvas>
    </Box>
  );
};

export default Exercise;
