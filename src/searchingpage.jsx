import React from "react";
import Branddesc from './branddesc';
import Footer from './footer';
import './searching.css'
import Navbar from "./navbar";

function Searching() {
    return (
        <>
        <div className="searching">
        <Navbar />
        <Branddesc />
        <Footer />
        </div>
        </>
    )
}

export default Searching;