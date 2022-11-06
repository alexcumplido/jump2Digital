import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export function Modal({ children }) {
  const elementReference = useRef(null);
  if (!elementReference.current) {
    elementReference.current = document.createElement("div");
  }
  useEffect(function () {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elementReference.current);

    return function () {
      modalRoot.removeChild(elementReference.current);
    };
  }, []);
  return createPortal(<>{children}</>, elementReference.current);
}
