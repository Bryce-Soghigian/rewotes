import React, { useReducer } from "react";
import { DispatchContext } from "./components/contexts/DispatchContext";
import { StateContext } from "./components/contexts/StateContext";
import Router from "./components/Router";
import { reducer, initialState } from "./reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={{ dispatch }}>
      <StateContext.Provider value={{ state }}>
        <div>
          <Router />
        </div>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
