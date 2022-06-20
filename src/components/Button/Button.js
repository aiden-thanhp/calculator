import React from "react";
import "./button.css"

export default function Button({ onClick, value }) {
  function classify(value) {
    const secondaryButtons = [
      ["7", "8", "9", "×"],
      ["4", "5", "6", "-"],
      ["1", "2", "3", "+"],
      ["±", "0", ".", "÷"]
    ];

    if (secondaryButtons.flat().includes(value)) return "btn btn-secondary mt-2 py-10 px-24";
    else if (value === "=") return "btn btn-primary mt-2 py-10 px-24";
    else return "btn btn-light mt-2 py-10 px-24";
  }

  return (
    <button
      key={value}
      className={classify(value)}
      onClick={onClick}
    >
      {value}
    </button>
  );
}