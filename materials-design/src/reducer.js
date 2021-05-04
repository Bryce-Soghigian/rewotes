export const initialState = {
  showImportModal: false,
  materials:[],
  currentAtom:null
};
export const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "importFile":
      let materials = state.materials
      materials.push(action.payload)
      return {
        ...state,
        materials:materials,
        showImportModal: !state.showImportModal
      }

    case "showImportModal":
      return {
        ...state,
        showImportModal: !state.showImportModal,
      };
    default:
      return { ...state };
  }
};
