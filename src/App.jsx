import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Cardsection } from "./components/cardsection/Cardsection.jsx";

function App() {
  return (
    <StrictMode>
      <Cardsection />
    </StrictMode>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
