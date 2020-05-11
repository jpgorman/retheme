import * as React from "react";
import { render as renderDOM } from "react-dom";

import App from "./App";

const render = () => {
  const rootElement = document.getElementById("root");
  renderDOM(<App />, rootElement);
}

render()
