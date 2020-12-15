/**
 * Have to thank https://github.com/pmndrs/react-three-fiber for this exercise
 * as it was able to adapt the showcase to our need
 */

import React, { useEffect, useMemo, useRef } from "react";
import { Box } from "@material-ui/core";
import * as THREE from "three";
import { Canvas, useFrame } from "react-three-fiber";
import exerciseStyles from "./BoxesExercise.module.scss";
import useGlobalColors from "../../hooks/useGlobalColors/useGlobalColors";
import { RGBColor } from "../../contexts/SettingsContext/SettingsContext";

/**
 * Number of geometry boxes to be created
 */
export const number = 10;

/**
 * Utility threejs object
 */
const tempObject = new THREE.Object3D();

/**
 * Utility threejs color
 */
const tempColor = new THREE.Color();

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
 * BoxesExercise content component props type
 */
type ContentProps = {
  colors: [string, string];
};

/**
 * BoxesExercise content component
 * @param colors - a set of 2 rgb strings to be used as colors for threejs shapes
 */
export const Content: React.FC<ContentProps> = ({ colors: [leftLenseColor, rightLenseColor] }) => {
  const thousandColors = useMemo(
    () =>
      new Array(1000)
        .fill(null)
        .map(() => [leftLenseColor, rightLenseColor][Math.floor(Math.random() * 2)]),
    [leftLenseColor, rightLenseColor],
  );
  const colorArray = useMemo(
    () =>
      Float32Array.from(
        new Array(1000).fill(null).flatMap((_, i) => tempColor.set(thousandColors[i]).toArray()),
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const ref = useRef<any>();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    ref.current!.rotation.x = Math.sin(time / 4);
    ref.current!.rotation.y = Math.sin(time / 2);
    let i = 0;
    for (let x = 0; x < 10; x += 1)
      for (let y = 0; y < 10; y += 1)
        for (let z = 0; z < 10; z += 1) {
          i += 1;
          const id = i;
          tempObject.position.set(5 - x, 5 - y, 5 - z);
          tempObject.rotation.y =
            Math.sin(x / 4 + time) + Math.sin(y / 4 + time) + Math.sin(z / 4 + time);
          tempObject.rotation.z = tempObject.rotation.y * 2;
          tempObject.scale.set(1, 1, 1);
          tempObject.updateMatrix();
          ref.current!.setMatrixAt(id, tempObject.matrix);
        }
    ref.current!.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[null as any, null as any, 1000]}>
      <boxBufferGeometry attach="geometry" args={[0.7, 0.7, 0.7]}>
        <instancedBufferAttribute attachObject={["attributes", "color"]} args={[colorArray, 3]} />
      </boxBufferGeometry>
      <meshPhongMaterial attach="material" vertexColors={THREE.VertexColors as any} />
    </instancedMesh>
  );
};

/**
 * BoxesExercise threejs lights component
 */
export const Lights: React.FC = () => {
  return (
    <group>
      <ambientLight />
      <pointLight position={[150, 150, 150]} intensity={0.55} />
    </group>
  );
};

/**
 * BoxesExercise component props type
 */
export type BoxesExerciseProps = {
  colors: [RGBColor, RGBColor];
};

/**
 * BoxesExercise component
 * @param leftLense - RGBColor object of left lense color
 * @param rightLense - RGBColor object of right lense color
 */
const BoxesExercise: React.FC<BoxesExerciseProps> = ({ colors: [leftLense, rightLense] }) => {
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
    <Box className={exerciseStyles.boxes_exercise__container}>
      <Canvas shadowMap camera={{ position: [0, 0, 15], fov: 100, near: 5, far: 20 }}>
        <Lights />
        <Content colors={[leftLenseRGBString, rightLenseRGBString]} />
      </Canvas>
    </Box>
  );
};

export default BoxesExercise;
