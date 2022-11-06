export function List({ data }) {
  return (
    <ul className="card__list">
      {data.map(function (element, idx) {
        return <li key={idx}>{element.text}</li>;
      })}
    </ul>
  );
}
