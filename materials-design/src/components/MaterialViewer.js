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

export default function MaterialViewer(props) {
  const myMesh = React.useRef();

  return (
    <div id="canvas-container">
      <Canvas>
        {props.atoms.map((atom) => {
          return (
            <mesh
              key={atom.index}
              ref={myMesh}
              position={[atom.x, atom.y, atom.z]}
            >
              <sphereGeometry
                args={[props.crystalScale, 32, 32]}
              />
              <meshBasicMaterial color="hotpink" />
            </mesh>
          );
        })}
      </Canvas>
    </div>
  );
}
