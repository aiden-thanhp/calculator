import React from "react";
import "./buttonbox.css"

//Create a buttonbox to contain all buttons
export default function ButtonBox({ children }) {
    return (
        <div className="button-box mb-5">
            {children}
        </div>
    );
}