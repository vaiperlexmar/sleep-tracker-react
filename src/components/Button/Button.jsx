import React from "react";

export default function Button({ text, img, className, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {text}
      {img ? <img src={img} /> : null}
    </button>
  );
}
