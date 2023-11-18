import React, { useState } from "react";
import Splash from "./components/Splash";
import SignUpForm from "./components/SignUpForm";
import Login from "./components/Login";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [openedSignUp, setOpenedSignUp] = useState(false);
  const [openedLogin, setOpenedLogin] = useState(false);

  function handleSignUpClick() {
    if (openedLogin) {
      setOpenedLogin(false);
      setOpenedSignUp(true);
    }
    setOpenedSignUp(!openedSignUp);
  }

  function handleLoginClick() {
    if (openedSignUp) {
      setOpenedSignUp(false);
      setOpenedLogin(true);
    }
    setOpenedLogin(!openedLogin);
  }

  let authPage;
  if (openedSignUp) {
    authPage = (
      <SignUpForm
        onBackArrowClick={handleSignUpClick}
        onLoginClick={handleLoginClick}
      />
    );
  } else if (openedLogin) {
    authPage = (
      <Login
        onBackArrowClick={handleLoginClick}
        onSignUpClick={handleSignUpClick}
      />
    );
  } else {
    authPage = (
      <Splash
        onSignUpClick={handleSignUpClick}
        onLoginClick={handleLoginClick}
      />
    );
  }

  return (
    <div
      className="flex h-screen items-center justify-center bg-cover bg-no-repeat "
      style={{ backgroundImage: `url("./src/assets/splash-bg.jpg")` }}
    >
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<Splash />} />
            {/* <Route exact path="/splash" element={<Splash />} /> */}
            <Route path="/signup" element={<SignUpForm />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
