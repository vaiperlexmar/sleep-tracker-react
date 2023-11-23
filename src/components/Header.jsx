import React, { useState } from "react";
import Button from "./Button/Button";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/splash");
    } catch {
      setError("Failed to logout");
    }
  }

  return (
    <header className="">
      <nav>
        <ul>
          <li>
            <Link to="#">Dashboard</Link>
            <Link to="#">About</Link>
            <Link to="#">Entries</Link>
            <Button
              text={"Log Out"}
              onClick={handleLogout}
              className={
                "btn m-auto mb-8 border-2 border-solid border-purple-500 bg-purple-500 text-white transition-all hover:bg-white hover:text-black"
              }
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}
