import React from "react";
import "./buttonbox.css"

export default function ButtonBox({ children }) {
    return (
        <div className="button-box mb-5">
            {children}
        </div>
    );
}