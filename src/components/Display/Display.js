import React from "react";
import "./display.css"

export default function Display({ children }) {
    return (
        <div className="display d-flex align-items-end justify-content-end mt-5">
            <p className="mr-12">{ children }</p>
        </div>
    );
}