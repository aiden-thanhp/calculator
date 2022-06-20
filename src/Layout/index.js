import React from "react";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import { BasicCalculator } from "../routes";

export default function Layout() {

    return (
        <div>
            <Header />
            <div className="container-fluid">
                <Routes>
                    <Route path="/" element={<BasicCalculator />} />
                </Routes>
            </div>
        </div>
    )
}