import React, { useContext, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

export default function ImportModal() {
  const { state, dispatch } = useContext(GlobalContext);
  const [errorState, setErrorState] = useState("");
  const [fileState, setFileState] = useState(null);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileState(file);
  };
  const submitMaterial = () => {
    if (fileState === null) {
      setErrorState("please add a file");
      return;
    }
    const reader = new FileReader();
    reader.readAsText(fileState);
    reader.onload = () => {
      console.log(reader.result, "CONTENT");
      dispatch({
        type: "importFile",
        payload: { fileName: fileState.name, fileContent: reader.result },
      });
      setFileState(null);
    };
    reader.onerror = () => {
      console.log("file error", reader.error);
    };
  };
  const closeModal = () => {
    if (errorState !== "") {
      setErrorState("");
    }
    dispatch({ type: "showImportModal" });
  };

  if (state.showImportModal === true) {
    return (
      <div className="modal">
        <p className="error">{errorState}</p>
        <input
          className="input-file"
          type="file"
          name="import"
          onChange={handleFileChange}
        />
        <div className="start">
          <button className="close-button" onClick={closeModal}>
            Close
          </button>
          <button onClick={submitMaterial}>Submit</button>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}
