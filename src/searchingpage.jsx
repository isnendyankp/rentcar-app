import React from "react";
import Footer from './footer';
import './searching.css'
import Navbar from "./navbar";
import Carfilter from "./carfilter";
import Brandsearch from "./branddesc-search";


function Searching() {
    return (
        <>
        <div className="searching">
        <Navbar />
        <Brandsearch />
        <Carfilter />
        <Footer />
        </div>
        </>
    )
}

export default Searching;