import React from "react";

export default function WhiteContainer({ children }) {
  return (
    <div className="w-1/3 rounded-md bg-slate-100 bg-opacity-90 p-10 drop-shadow-2xl">
      {children}
    </div>
  );
}
