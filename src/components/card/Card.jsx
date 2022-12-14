import { List } from "../list/List.jsx";
import { Button } from "../button/Button.jsx";

export function Card({ data, toggleModal }) {
  const { logo, type, cost, period, featured, benefits, buttonText } = data;
  return (
    <article className={`card ${featured && `card--featured`}`}>
      <div className="card__logo">
        <img className="card__image" src={logo} alt="Card logo" />
      </div>
      <div className="card__intro">
        <p>{type}</p>
        <p>{cost}</p>
        <p>{period}</p>
      </div>
      <List data={benefits} />
      <Button
        handleClick={toggleModal}
        className={`card__button flex-center
        ${featured && `card__button--featured`}`}
        textButton={buttonText}
      />
    </article>
  );
}
