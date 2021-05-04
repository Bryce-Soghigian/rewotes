import React from "react";
import propTypes from "prop-types";

export default function Material(props) {
  return (
    <div className="material">
      <button className="material-button">{props.name}</button>
    </div>
  );
}
// Validation of my props types
Material.propTypes = {
  name: propTypes.string,
};
