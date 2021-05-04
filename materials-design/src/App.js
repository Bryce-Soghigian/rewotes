import React, { useReducer } from "react";
import { GlobalContext } from "./components/contexts/GlobalContext";
import Router from "./components/Router";
import { reducer, initialState } from "./reducer";
import "./App.css";
/**
 * App.js
 * @returns
 */
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <div>
        <Router />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
