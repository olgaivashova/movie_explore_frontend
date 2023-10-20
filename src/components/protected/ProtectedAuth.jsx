import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedAuth() {
  const user = useContext(CurrentUserContext);
  return user.isLoggedIn ? <Navigate to="/" replace/> : <Outlet/>
}
