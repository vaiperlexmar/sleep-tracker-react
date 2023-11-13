import React, { useState } from "react";
import Splash from "./components/Splash";
import SignUpForm from "./components/SignUpForm";
import Login from "./components/Login";

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
      {authPage}
    </div>
  );
}

export default App;
