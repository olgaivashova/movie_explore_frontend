import "./Tooltip.css";
import success from "../../images/success.png";
import Popup from "../tooltip/popup/Popup";
import { useLocation } from "react-router-dom";

function InfoPopup({
  isSuccess,
  successRegistration,
  successUpdate,
  isOpen,
  onClose,
}) {
  const { pathname } = useLocation();
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <div className="popup__form">
        <img
          className="popup__success-image"
          src={success}
          alt="знак успешной регистрации"
        />
        <p className="popup__success-text">
          {pathname === "/profile" ? successUpdate : successRegistration}
        </p>
      </div>
    </Popup>
  );
}

export default InfoPopup;
