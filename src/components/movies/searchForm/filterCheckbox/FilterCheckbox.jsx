import React, { useState } from "react";
import "./FilterCheckbox.css";

export default function FilterCheckbox() {
  const [checked, setChecked] = useState(false);

  function changeCheckbox() {
    setChecked(!checked);
  }
  return (
    <div className="checkbox">
      <label className="checkbox__switch">
        <input
          type="checkbox"
          role="switch"
          value=""
          checked={checked}
          onChange={changeCheckbox}
          name="checkbox"
        />
        <span className="checkbox__slider"></span>
      </label>
      <span className="checkbox__title">Короткометражки</span>
    </div>
  );
}
