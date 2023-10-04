import { useState } from "react";
import flag from "../../../images/flag_saveButton.svg";
import close from "../../../images/close-icon_optimized.png";
import "./SaveButton.css";

export default function SaveButton({ name }) {
  const [isSaved, setIsSaved] = useState(false);
  function toggleSave() {
    setIsSaved(!isSaved);
  }

  return (
    <div className="card-button">
      <button
        className={`card-button__save-circle ${
          isSaved ? "card-button__save-circle_active" : ""
        }`}
        type="button"
        onClick={toggleSave}
      >
        {name === "saved" ? (
          <img
            className="card-button__close-icon"
            src={close}
            alt="кнопка-крестик"
          />
        ) : (
          <img
            className="card-button__save-flag"
            src={flag}
            alt="флажок в круге"
          />
        )}
      </button>
    </div>
  );
}
