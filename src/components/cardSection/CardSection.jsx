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
    <section className="card__section">
      {data.map(function (element, idx) {
        return <Card key={idx} data={element} toggleModal={toggleModal} />;
      })}
      {modal ? (
        <Modal>
          <p>
            Thanks for your interest. Enter an email and we will reach you soon.
          </p>
          <form>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@gmail.com"
              onChange={handleChange}
              value={input.value}
              required
            />
            <input type="submit" value="Send" />
          </form>
          <Button handleClick={toggleModal} data={"Close"} />
        </Modal>
      ) : null}
    </section>
  );
}
