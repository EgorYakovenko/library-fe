export default function BorrowedCheckBox({ checked, handleCheckboxChange }) {
  return (
    <div>
      <label htmlFor="myCheckbox">Книга в наявності?</label>
      <input
        type="checkbox"
        id="myCheckbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <p>{checked ? "Позичена" : "В наявности"}</p>
    </div>
  );
}
