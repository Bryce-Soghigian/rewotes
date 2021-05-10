import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import Material from "./Material";
export default function Materials() {
  const { state } = useContext(GlobalContext);
  let id = 0
  return (
    <div className="materials-list-container">
      <h3 className="materials-header">Imported Materials</h3>
      {state.materials.map((material) => {
        id++
        return <Material name={material.fileName} key={id+2000} content={material.fileContent}/>;
      })}
    </div>
  );
}
