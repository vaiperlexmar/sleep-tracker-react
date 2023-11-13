import React, { useState } from "react";
import Splash from "./components/Splash";

function App() {
  const [openedSignUp, setOpenedSignUp] = useState(false);

  function handleSignUpClick() {
    setOpenedSignUp(!openedSignUp);
  }

  return (
    <div>
      <Splash onSignUpClick={handleSignUpClick} />
    </div>
  );
}

export default App;
