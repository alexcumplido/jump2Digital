import React from "react";
import { createRoot } from "react-dom/client";
import { CardSection } from "./components/cardSection/CardSection.jsx";

function App() {
  return <CardSection />;
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
