import "./Popup.css";

export default function Popup({ children, isOpen, onClose }) {
  return (
    <div className={`popup ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <button
          className="popup__close-icon"
          type="button"
          onClick={onClose}
        ></button>
        {children}
      </div>
    </div>
  );
}
