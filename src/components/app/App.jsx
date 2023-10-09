import "./App.css";
import Header from "../header/Header";
import Main from "../main/Main";
import Movies from "../movies/Movies";
import NotFoundError from "../notFoundError/NotFoundError";
import Register from "../register/Register";
import Login from "../login/Login";
import Profile from "../profile/Profile";
import SavedMovies from "../savedMovies/SavedMovies.";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../footer/Footer";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className="app">
      <div className="app__content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header name="main" />
                <Main />
                <Footer />
              </>
            }
          />
          <Route
            path="/movies"
            element={
              <>
                <Header loggedIn={loggedIn} />
                <Movies />
                <Footer />
              </>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <>
                <Header loggedIn={loggedIn} />
                <SavedMovies />
                <Footer />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <Header loggedIn={loggedIn} />
                <Profile />
              </>
            }
          />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="*" element={<NotFoundError />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
