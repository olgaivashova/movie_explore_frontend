import "./App.css";
import { useEffect, useState } from "react";
import {
  useNavigate,
  Route,
  Routes,
} from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Main from "../main/Main";
import NotFoundError from "../notFoundError/NotFoundError";
import Register from "../register/Register";
import Login from "../login/Login";
import mainApi from "../../utils/MainApi";
import authApi from "../../utils/AuthApi";
import ProtectedRoute from "../protected/ProtectedRoute";
import Movies from "../movies/Movies";
import SavedMovies from "../savedMovies/SavedMovies";
import ProtectedAuth from "../protected/ProtectedAuth";
import Profile from "../profile/Profile";

function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    isLoggedIn: !!localStorage.getItem("jwt")
  });
  const [savedMovies, setSavedMovies] = useState([]);
  const [beatMovies, setBeatMovies] = useState([]);

  function handleLoginSubmit(email, password) {
    return authApi.signin(email, password)
      .then(({token}) => {
        localStorage.setItem("jwt", token);
        mainApi.setToken(token)
        return mainApi.getUserInfo()
      })
      .then(({name, email}) => {
        setCurrentUser(() => ({name, email, isLoggedIn: true}));
        mainApi.getMovies().then(res => setSavedMovies(res)).catch(err => console.error(err));
        navigate("/movies", {replace: true});
      });
  }

  function handleRegistration(name, email, password) {
    return authApi.signup(name, email, password).then(() => handleLoginSubmit(email, password));
  }

  useEffect(() => {
    if (localStorage.jwt) {
      mainApi.setToken(localStorage.jwt);
      mainApi.getUserInfo()
        .then(({name, email}) => {
          setCurrentUser(() => ({name, email, isLoggedIn: true}));
        })
        .catch((err) => console.error(err));
      mainApi.getMovies().then(res => setSavedMovies(res)).catch(err => console.error(err));
    }
  }, []);

  function signout() {
    localStorage.clear();
    setCurrentUser(() => ({name: "", email: "", isLoggedIn: false}));
    setSavedMovies([]);
    setBeatMovies([]);
    navigate("/", {replace: true});
  }

  return (
    <div className="app">
      <div className="app__content">
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route element={<ProtectedRoute/>}>
              <Route
                path="/movies"
                element={<Movies
                  savedMovies={savedMovies}
                  setSavedMovies={setSavedMovies}
                  beatMovies={beatMovies}
                  setBeatMovies={setBeatMovies}
                />}
              />
              <Route
                path="/saved-movies"
                element={<SavedMovies
                  savedMovies={savedMovies}
                  setSavedMovies={setSavedMovies}
                  beatMovies={beatMovies}
                  setBeatMovies={setBeatMovies}
                />}
              />
              <Route path="/profile" element={<Profile signout={signout} setCurrentUser={setCurrentUser}/>}/>
            </Route>
            <Route element={<ProtectedAuth/>}>
              <Route path="/signup" element={<Register handleSignup={handleRegistration}/>}/>
              <Route path="/signin" element={<Login handleSignin={handleLoginSubmit}/>}/>
            </Route>
            <Route path="*" element={<NotFoundError/>}/>
          </Routes>
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
