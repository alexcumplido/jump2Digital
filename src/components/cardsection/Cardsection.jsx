import { useState } from "react";
import { data } from "../../data.js";
import { Card } from "../card/Card.jsx";
import { Input } from "../input/Input.jsx";
import { Button } from "../button/Button.jsx";
import { Modal } from "../modal/Modal.jsx";

export function Cardsection() {
  const [modal, setModal] = useState(false);
  const [input, setInput] = useState({ value: "" });
  const handleChange = (event) => setInput({ value: event.target.value });
  const toggleModal = () => setModal(!modal);

  return (
    <section className="container-standard card-section">
      {data.map(function (element, idx) {
        return <Card key={idx} data={element} toggleModal={toggleModal} />;
      })}
      {modal ? (
        <Modal>
          <form className="modal__form">
            <p>
              Thanks for your interest! Enter an email and we will reach you
            </p>
            <Input
              inputType={"email"}
              inputValue={input.value}
              inputHandle={handleChange}
              className={"modal__input"}
            />
            <input type="submit" value="Send" className="modal__submit" />
          </form>
          <Button
            className={"modal__button flex-center"}
            handleClick={toggleModal}
            data={"X"}
          />
        </Modal>
      ) : null}
    </section>
  );
}
