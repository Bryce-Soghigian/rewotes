import React from "react";
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
      <Materials />
    </div>
  );
}
