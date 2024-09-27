import React, { useContext } from "react";
import propTypes from "prop-types";
import { GlobalContext } from "../contexts/GlobalContext";

export default function Material(props) {
const {dispatch} = useContext(GlobalContext)
const selectAtom = () => {
    console.log(props.content)
    dispatch({type:"setCurrentAtom",payload:{fileName:props.name,fileContent:props.content}})
}
  return (
    <div className="material">
      <button className="material-button" onClick={selectAtom}>{props.name}</button>
    </div>
  );
}
// Validation of my props types
Material.propTypes = {
  name: propTypes.string,
};
