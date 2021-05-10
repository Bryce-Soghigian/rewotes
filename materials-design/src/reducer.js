import { element } from "prop-types";
import { Atom } from "./utils/main";

export const initialState = {
  showImportModal: false,
  materials: [],
  currentAtom: null,
  currentStructure: {
    structureName: "Silicon FCC",
    atoms: [
      { element: "Si", x: "0.000000000", y: "0.000000000", z: "0.000000000",index:0 },
      { element: "Si", x: "0.250000000", y: "0.250000000", z: "0.250000000",index:1 },
    ],
    crystalScale: 0.09,
    latticeMatrix: [
      ["3.348920000", "0.000000000", "1.933500000"],
      ["1.116307000", "3.157392000", "1.933500000"],
      ["0.000000000", "0.000000000", "3.867000000"],
    ],
  },
};

export const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "setCurrentAtom":
      //Goal parse file data
      const currentAtomData = {}
      function splitLines(t) { return t.split(/\r\n|\r|\n/); }
      let fileContent = splitLines(action.payload.fileContent)
      currentAtomData.structureName = fileContent[0]
      currentAtomData.crystalScale = fileContent[1] * 0.1
       
      const latticeMatrix = []
      const findNumbers = (arr) => {
        let output = []
        for(let i =0 ;i<arr.length;i++){
          if(typeof(Number(arr[i])) === "number"){
            output.push(arr[i].trim())
          }
        }
        return output
      }
      const greaterThanK = (str, k) => {
        const output = []
        for(let i = 0;i<str.length;i++){
          if(str[i].length > k){
            output.push(str[i])
          }
        }
        return output
      }
      const rowOne = fileContent[2].trim().split(" ")
      const rowTwo = fileContent[3].trim().split(" ")
      const rowThree = fileContent[4].trim().split(" ")
      latticeMatrix.push(findNumbers(rowOne))
      latticeMatrix.push(findNumbers(rowTwo))
      latticeMatrix.push(findNumbers(rowThree))
      currentAtomData.latticeMatrix = latticeMatrix
      //
      
      const atoms = []

      if(fileContent[7] !== "direct"){
        let elementName = null
        elementName="unknown"
        for(let i = 7;i<fileContent.length;i++){
          const atomCoords = fileContent[i].trim().split(" ")//x y z
          const newAtom = new Atom(element, atomCoords[0],atomCoords[1],atomCoords[2],i)
          atoms.push(newAtom)
        }
      }else{
        for(let i = 8;i<fileContent.length;i++){
          let atomCoords = fileContent[i].trim().split(" ")//x y z
          const newCoords = greaterThanK(atomCoords,1)
          const newAtom = new Atom(newCoords[3], newCoords[0],newCoords[1],newCoords[2],i)
          atoms.push(newAtom)
        }
      }
      currentAtomData.atoms = atoms
      return {
        ...state,
        currentStructure: currentAtomData
      }
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
