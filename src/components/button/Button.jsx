export function Button({ className, data, handleClick }) {
  return (
    <button className={className} onClick={handleClick}>
      {data}
    </button>
  );
}
