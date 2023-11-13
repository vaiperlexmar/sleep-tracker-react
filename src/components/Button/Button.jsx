import React from "react";

export default function Button({ text, img, className, onClick, children }) {
  return (
    <button className={className} onClick={onClick}>
      {text}
      {children}
      {img ? <img src={img} /> : null}
    </button>
  );
}
