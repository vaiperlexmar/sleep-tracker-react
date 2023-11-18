import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import WhiteContainer from "./WhiteContainer";
import Button from "./Button/Button";
import personImg from "../assets/person.svg";
import keyImg from "../assets/key.svg";

export default function SignUpForm({ onBackArrowClick, onLoginClick }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      console.error(error);
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <WhiteContainer>
      <header>
        <h1 className="mb-12 grid grid-cols-3 gap-4 text-center font-serif text-4xl font-bold">
          <Button onClick={onBackArrowClick}>
            <span className="material-symbols-outlined">arrow_back</span>
          </Button>
          <span>Sign Up</span>
        </h1>

        <p className="text-center">
          {error && <span className=" text-red-600 ">{error}</span>}
        </p>
      </header>
      <form onSubmit={handleSubmit} className="text-center">
        <input
          type="email"
          ref={emailRef}
          name="email"
          id="email"
          placeholder="email"
          className="mb-4 w-3/4 rounded-3xl bg-scroll bg-no-repeat pl-10"
          required
          style={{
            backgroundImage: `url(${personImg})`,
            backgroundPositionX: "calc(100% - 98%)",
          }}
        />
        <input
          type="password"
          ref={passwordRef}
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
          ref={passwordConfirmRef}
          name="password"
          id="password-confirm"
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
          disable={loading}
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
