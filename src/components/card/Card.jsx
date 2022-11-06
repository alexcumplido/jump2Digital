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
      <ul className="card__list">
        {benefits.map(function (element, idx) {
          return <li key={idx}>{element.text}</li>;
        })}
      </ul>
      <button>{buttonText}</button>
    </article>
  );
}
