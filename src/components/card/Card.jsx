import { useState } from "react";
import { List } from "../list/List.jsx";
import { Button } from "../button/Button.jsx";
import { Modal } from "../modal/Modal.jsx";

export function Card({ data }) {
  const [modal, setModal] = useState(false);
  const { logo, type, cost, period, benefits, buttonText } = data;
  const toggleModal = () => setModal(!modal);

  return (
    <>
      <article>
        <div className="card__logo">
          <img src={logo} alt="Card logo" />
        </div>
        <div className="card__intro">
          <p>{type}</p>
          <p>{cost}</p>
          <p>{period}</p>
        </div>
        <List data={benefits} />
        <Button handleClick={toggleModal} data={buttonText} />
      </article>
      {modal ? (
        <Modal>
          <p>
            Thanks for your interest in <span>{type}</span> plan. Write your
            email and we will reach you soon.
          </p>
          <Button handleClick={toggleModal} data={"Close"} />
        </Modal>
      ) : null}
    </>
  );
}
