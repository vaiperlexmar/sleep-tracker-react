import React from "react";
import googleIcon from "../assets/Google_ G _Logo.svg";
import Button from "./Button/Button";

export default function Splash({ onSignUpClick }) {
  return (
    // Приветственная надпись
    // Карусель с бенефитами

    // Блок с аунтификацией
    // Гугл аунтефикая
    // Кнопка на форму регистрации с формой

    <div
      className="flex h-screen items-center justify-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url("./src/assets/splash-bg.jpg")` }}
    >
      <div className="w-1/3 rounded-md bg-slate-100 bg-opacity-90 p-10 drop-shadow-2xl">
        <h1 className="mb-3 text-center font-serif text-4xl font-bold">
          Hello, It's Sleepify😴
        </h1>
        <p className="mb-5 text-center font-sans text-lg">
          I can help you improve the deliberateness of your sleep
        </p>

        <div className="mb-4 flex items-center gap-4">
          <Button
            className="btn bg-purple-500 border-solid border-purple-500 text-white transition-all border-2 hover:bg-white hover:text-black"
            text={"Sign Up"}
            onClick={onSignUpClick}
          />
          <Button
            className="btn gap-2 border-2 border-solid border-purple-500 transition-all hover:bg-white "
            text={"Sign Up with"}
            img={googleIcon}
          />
        </div>

        <p className="text-center">
          If you already registred, you can use{" "}
          <a
            href="#"
            className="text-purple-500 transition-all hover:text-purple-700"
          >
            login
          </a>
        </p>
      </div>
    </div>
  );
}
