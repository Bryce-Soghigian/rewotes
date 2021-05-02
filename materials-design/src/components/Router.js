import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home/Home";

/**
 * Router
 * React-router config
 * @returns
 */
export default function Router() {
  return (
    <div>
      <Route exact path="/" component={Home} />
    </div>
  );
}
