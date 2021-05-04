import React from "react";
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
  return (
    <div>
      <Nav />
      <ImportModal />
      <div className="start">
        <Materials />
        <MaterialViewer />
      </div>
    </div>
  );
}
