import { List } from "../list/List.jsx";

export function Card({ data }) {
  const { logo, type, cost, period, benefits, buttonText } = data;
  return (
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
      <button>{buttonText}</button>
    </article>
  );
}
