import React from "react";
import { createRoot } from "react-dom/client";
import { Card } from "./components/card/Card.jsx";
import { data } from "./data.js";

function App() {
  return (
    <>
      <h1>Rendering</h1>
      {data.map(function (element, idx) {
        return <Card key={idx} data={element} />;
      })}
    </>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
