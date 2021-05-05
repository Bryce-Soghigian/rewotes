export const initialState = {
  showImportModal: false,
  materials: [],
  currentAtom: null,
  currentStructure: {
    structureName: "Silicon FCC",
    atoms: [
      { element: "Si", x: "0.000000000", y: "0.000000000", z: "0.000000000" },
      { element: "Si", x: "0.250000000", y: "0.250000000", z: "0.250000000" },
    ],
    crystalScale: 0.09,
    crystalGeometry: [
      ["3.348920000", "0.000000000", "1.933500000"],
      ["1.116307000", "3.157392000", "1.933500000"],
      ["0.000000000", "0.000000000", "3.867000000"],
    ],
  },
};

export const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "importFile":
      const materials = state.materials;
      materials.push(action.payload);
      console.log(action.payload.fileContent);

      return {
        ...state,
        materials: materials,
        showImportModal: !state.showImportModal,
      };

    case "showImportModal":
      return {
        ...state,
        showImportModal: !state.showImportModal,
      };
    default:
      return { ...state };
  }
};
