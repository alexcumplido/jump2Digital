import { useState } from "react";
import { data } from "../../data.js";
import { Card } from "../card/Card.jsx";
import { Button } from "../button/Button.jsx";
import { Modal } from "../modal/Modal.jsx";

export function CardSection() {
  const [modal, setModal] = useState(false);
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
          <Button handleClick={toggleModal} data={"Close"} />
        </Modal>
      ) : null}
    </section>
  );
}
