import React from "react";
import { createRoot } from "react-dom/client";
import { Cardsection } from "./components/cardsection/Cardsection.jsx";

function App() {
  return <Cardsection />;
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
