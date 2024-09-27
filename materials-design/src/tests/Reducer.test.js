// here we will go through and write tests for all of the cases in our reducer
import { initialState } from "../reducer";
import { expect } from "chai";

describe("Test Suite For Root Reducer", () => {
  it("initial state is of a valid shape", () => {
    expect(initialState).to.have.all.keys(
      "showImportModal",
      "materials",
      "currentAtom",
      "currentStructure"
    );
  });
});
