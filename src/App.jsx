import React, { useState } from "react";
import Splash from "./components/Splash";
import SignUpForm from "./components/SignUpForm";
import Login from "./components/Login";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Entries from "./components/Entries";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div
      className="flex h-screen items-center justify-center bg-cover bg-no-repeat "
      style={{ backgroundImage: `url("./src/assets/splash-bg.jpg")` }}
    >
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<PrivateRoute />}>
              <Route exact path="/" element={<Entries />} />
            </Route>
            <Route path="/splash" element={<Splash />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
