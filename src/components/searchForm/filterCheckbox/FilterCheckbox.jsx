import "./FilterCheckbox.css";

export default function FilterCheckbox({onCheckbox, isSwitched, isDisabled}) {
  return (
    <div className="checkbox">
      <label className="checkbox__switch">
        <input
          name="checkbox"
          type="checkbox"
          role="switch"
          value=""
          checked={isSwitched}
          onChange={onCheckbox}
          disabled={isDisabled}
        />
        <span className="checkbox__slider"></span>
      </label>
      <span className="checkbox__title">Короткометражки</span>
    </div>
  );
}
