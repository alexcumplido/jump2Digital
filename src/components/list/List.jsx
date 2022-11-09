export function List({ data }) {
  return (
    <ul className="card__list">
      {data.map(function (element, idx) {
        return (
          <li
            className={`card__item ${
              element.activated && `card__item--featured`
            }`}
            key={idx}
          >
            <svg
              width="12"
              height="10"
              viewBox="0 0 12 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.00001 7.78L1.22001 5L0.273346 5.94L4.00001 9.66667L12 1.66667L11.06 0.726665L4.00001 7.78Z"
                fill="black"
              />
            </svg>
            {element.text}
          </li>
        );
      })}
    </ul>
  );
}
