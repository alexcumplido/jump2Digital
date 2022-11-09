export function Input({ inputType, inputValue, inputHandle, className }) {
  return (
    <label htmlFor={inputType}>
      {inputType}
      <input
        className={className}
        type={inputType}
        id={inputType}
        name={inputType}
        onChange={inputHandle}
        value={inputValue}
        placeholder="example@gmail.com"
        required
      />
    </label>
  );
}
