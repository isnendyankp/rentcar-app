import React from "react";
import Footer from './footer';
import '../styles/searching.css'
import Navbar from "../components/navbar";
import Carfilter from "./carfilter";
import Brandsearch from "../components/branddesc-search";


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