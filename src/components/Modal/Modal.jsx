import React from "react";
import WhiteContainer from "../WhiteContainer";
import Button from "../Button/Button";

export default function Modal({ active, setActive }) {
  return (
    <div
      className="modal text-center"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
    >
      <WhiteContainer>
        <h1 className="mb-6  font-serif text-4xl font-bold">
          Make a new entry
        </h1>
        <p className="mb-2 text-lg">Choose a date 📅</p>
        <p className="text-lg">Choose a sleep time 💤</p>
        <p className="text-lg">Choose a wake time 🌄</p>

        <Button
          text={"Submit"}
          className="btn m-auto border-2 border-solid border-purple-500 bg-purple-500 text-white transition-all hover:bg-white hover:text-black"
        />
      </WhiteContainer>
    </div>
  );
}
