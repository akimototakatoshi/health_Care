import React from "react";
import * as ReactDOM from "react-dom/client";
import Src from "./Src";

const rootElement = document.getElementById("example") ;
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);
root.render(
    <React.StrictMode>
      <Src/>
    </React.StrictMode>
);
