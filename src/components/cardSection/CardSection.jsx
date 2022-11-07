import { useState } from "react";
import { data } from "../../data.js";
import { Card } from "../card/Card.jsx";
import { Button } from "../button/Button.jsx";
import { Modal } from "../modal/Modal.jsx";

export function CardSection() {
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
              Thanks for your interest! Enter an email and we will reach you.
            </p>
            <label htmlFor="email">
              Email
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                onChange={handleChange}
                value={input.value}
                required
              />
            </label>
            <input className="modal__submit" type="submit" value="Send" />
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
