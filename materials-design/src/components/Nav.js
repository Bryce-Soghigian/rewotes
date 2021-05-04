import React, { useContext } from "react";
import { GlobalContext } from "./contexts/GlobalContext";
/**
 * Nav
 * Navbar
 * @returns
 */
export default function Nav() {
  const { dispatch } = useContext(GlobalContext);
  const showImportModal = () => {
    dispatch({ type: "showImportModal" });
  };
  return (
    <div className="nav-container">
      <button className="nav-item" onClick={showImportModal}>
        Import Material
      </button>
    </div>
  );
}
