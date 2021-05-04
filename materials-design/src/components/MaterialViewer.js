import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import propTypes from "prop-types";
const AnimateFrame = (props) => {
  useFrame(({ clock }) => {
    props.meshRef.current.rotation.x += 0.31;
  });
  return null;
};
AnimateFrame.propTypes = {
  meshRef: propTypes.oneOfType([
    propTypes.func,
    propTypes.shape({ current: propTypes.any }),
  ]),
};

export default function MaterialViewer() {
  const myMesh = React.useRef();
  return (
    <div id="canvas-container">
      <Canvas>
        <mesh ref={myMesh}>
          <boxGeometry />
          <meshBasicMaterial color={"#ff0000"} />
        </mesh>
        <AnimateFrame meshRef={myMesh} />
      </Canvas>
    </div>
  );
}
