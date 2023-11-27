import React, { useState } from "react";
import Splash from "./components/Splash";
import SignUpForm from "./components/SignUpForm";
import Login from "./components/Login";
import { AuthProvider } from "./context/AuthContext";
import { Route, Routes, useLocation } from "react-router-dom";
import Entries from "./components/Entries";
import PrivateRoute from "./components/PrivateRoute";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App() {
  const location = useLocation();
  const isEntriesPage = location.pathname === "/";

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div
        className={`${isEntriesPage ? "main-page" : "sign-up"}`}
        style={{ backgroundImage: `url("./src/assets/splash-bg.jpg")` }}
      >
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
      </div>
    </LocalizationProvider>
  );
}

export default App;
