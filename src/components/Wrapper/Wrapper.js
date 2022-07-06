import React from "react";
import "./wrapper.css";

//Create a wrapper component to wrap everything in the calculator
export default function Wrapper({ children }) {
    return (
        <div className="wrapper px-3">
            {children}
        </div>
    );
}