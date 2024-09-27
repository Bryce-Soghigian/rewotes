import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import MaterialViewer from "../MaterialViewer";
import Nav from "../Nav";
import ImportModal from "./ImportModal/ImportModal";
import Materials from "./Materials";

/**
 * Home
 * Home route
 * @returns
 */
export default function Home() {
  const {state} = useContext(GlobalContext)
  return (
    <div>
      <Nav />
      <ImportModal />
      <div className="start">
        <Materials />
        <MaterialViewer atoms={state.currentStructure.atoms} lattice={state.currentStructure.latticeMatrix} crystalScale={state.currentStructure.crystalScale}/>
      </div>
    </div>
  );
}
