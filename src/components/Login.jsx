import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import WhiteContainer from "./WhiteContainer";
import Button from "./Button/Button";
import personImg from "../assets/person.svg";
import keyImg from "../assets/key.svg";
import { Link } from "react-router-dom";

export default function Login({ onBackArrowClick, onSignUpClick }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to login in");
    }
    setLoading(false);
  }

  return (
    <WhiteContainer>
      <header>
        <h1 className="mb-12 grid grid-cols-3 gap-4 text-center font-serif text-4xl font-bold">
          <Link to="/splash">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <span>Login</span>
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
          className="mb-8 w-3/4 rounded-3xl bg-scroll bg-no-repeat pl-10"
          required
          style={{
            backgroundImage: `url(${keyImg})`,
            backgroundPositionX: "calc(100% - 98%)",
          }}
        />
        <Button
          text={"Log In"}
          disable={loading}
          className={
            "btn m-auto mb-8 border-2 border-solid border-purple-500 bg-purple-500 text-white transition-all hover:bg-white hover:text-black"
          }
        />
      </form>

      <p className="mb-4 text-center">
        <a
          href="#"
          className="text-purple-500 transition-all hover:text-purple-700"
        >
          Forgot Password?
        </a>
      </p>

      <p className="text-center">
        Don't have an account yet?{" "}
        <Link
          to="/signup"
          className="cursor-pointer text-purple-500 transition-all hover:text-purple-700"
        >
          Let's sign up here
        </Link>
      </p>
    </WhiteContainer>
  );
}
