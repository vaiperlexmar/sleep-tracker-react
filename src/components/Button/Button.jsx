import React from "react";

export default function Button({
  text,
  img,
  className,
  onClick,
  children,
  type,
}) {
  return (
    <button className={className} onClick={onClick} type={type}>
      {text}
      {children}
      {img ? <img src={img} /> : null}
    </button>
  );
}
