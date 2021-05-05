import React, { useContext } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import propTypes from "prop-types";
import { GlobalContext } from "./contexts/GlobalContext";
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
  const { state } = useContext(GlobalContext);
  const myMesh = React.useRef();

  return (
    <div id="canvas-container">
      <Canvas>
        {state.currentStructure.atoms.map((atom) => {
          console.log(atom, "atom pog");
          return (
            <mesh
              key={atom.element}
              ref={myMesh}
              position={[atom.x, atom.y, atom.z]}
            >
              <sphereGeometry
                args={[state.currentStructure.crystalScale, 32, 32]}
              />
              <meshBasicMaterial color="hotpink" />
            </mesh>
          );
        })}
      </Canvas>
    </div>
  );
}
