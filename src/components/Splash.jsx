import React from "react";
import googleIcon from "../assets/Google_ G _Logo.svg";
import Button from "./Button/Button";
import WhiteContainer from "./WhiteContainer";
import { Link } from "react-router-dom";

export default function Splash({ onSignUpClick, onLoginClick }) {
  return (
    <WhiteContainer>
      <h1 className="mb-3 text-center font-serif text-4xl font-bold">
        Hello, It's Sleepify😴
      </h1>
      <p className="mb-5 text-center font-sans text-lg">
        I can help you improve the deliberateness of your sleep
      </p>

      <div className="mb-4 flex items-center gap-4">
        <Link
          to="/signup"
          className="btn cursor-pointer border-2 border-solid border-purple-500 bg-purple-500 text-white transition-all hover:bg-white hover:text-black"
        >
          Sign Up
        </Link>
        <Button
          className="btn gap-2 border-2 border-solid border-purple-500 transition-all hover:bg-white "
          text={"Sign Up with"}
          img={googleIcon}
        />
      </div>

      <p className="text-center">
        If you already registred, you can use{" "}
        <Link
          to="/login"
          className="text-purple-500 transition-all hover:text-purple-700"
        >
          login
        </Link>
      </p>
    </WhiteContainer>
  );
}
