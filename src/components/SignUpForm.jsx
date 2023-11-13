import React from "react";
import WhiteContainer from "./WhiteContainer";
import Button from "./Button/Button";
import personImg from "../assets/person.svg";
import keyImg from "../assets/key.svg";

export default function SignUpForm({ onBackArrowClick, onLoginClick }) {
  return (
    <WhiteContainer>
      <header>
        <h1 className="mb-12 grid grid-cols-3 gap-4 text-center font-serif text-4xl font-bold">
          <Button onClick={onBackArrowClick}>
            <span className="material-symbols-outlined">arrow_back</span>
          </Button>
          <span>Sign Up</span>
        </h1>
      </header>
      <form action="#" className="text-center">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
          className="mb-4 w-3/4 rounded-3xl bg-scroll bg-no-repeat pl-10"
          required
          style={{
            backgroundImage: `url(${personImg})`,
            backgroundPositionX: "calc(100% - 98%)",
          }}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          className="mb-4 w-3/4 rounded-3xl bg-scroll bg-no-repeat pl-10"
          required
          style={{
            backgroundImage: `url(${keyImg})`,
            backgroundPositionX: "calc(100% - 98%)",
          }}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="repeat the password"
          className="mb-8 w-3/4 rounded-3xl bg-scroll bg-no-repeat pl-10"
          required
          style={{
            backgroundImage: `url(${keyImg})`,
            backgroundPositionX: "calc(100% - 98%)",
          }}
        />
        <Button
          text={"Create a new account"}
          className={
            "btn m-auto mb-8 border-2 border-solid border-purple-500 bg-purple-500 text-white transition-all hover:bg-white hover:text-black"
          }
        />
      </form>
      <p className="text-center">
        You have an account? Let's{" "}
        <a
          href="#"
          className="text-purple-500 transition-all hover:text-purple-700"
          onClick={onLoginClick}
        >
          login
        </a>
      </p>
    </WhiteContainer>
  );
}
