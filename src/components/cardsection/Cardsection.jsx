import { useState } from "react";
import { data } from "../../data.js";
import { Card } from "../card/Card.jsx";
import { Form } from "../form/Form.jsx";
import { Button } from "../button/Button.jsx";
import { Modal } from "../modal/Modal.jsx";

export function Cardsection() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  return (
    <section className="container-standard card-section">
      {data.map(function (element, idx) {
        return <Card key={idx} data={element} toggleModal={toggleModal} />;
      })}
      {modal ? (
        <Modal>
          <Form />
          <Button
            handleClick={toggleModal}
            className={"modal__button flex-center"}
            textButton={"X"}
          />
        </Modal>
      ) : null}
    </section>
  );
}
