import { useState } from "react";
import { Input } from "../input/Input.jsx";

export function Form() {
  const [input, setInput] = useState({ value: "" });
  const handleChange = (event) => setInput({ value: event.target.value });
  return (
    <form className="modal__form">
      <p>Thanks for your interest! Enter an email and we will reach you</p>
      <Input
        inputType={"email"}
        inputValue={input.value}
        inputHandle={handleChange}
        className={"modal__input"}
        placeholder={"example@gmail.com"}
      />
      <input type="submit" value="Send" className="modal__submit" />
    </form>
  );
}
