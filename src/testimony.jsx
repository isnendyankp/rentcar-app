import React from "react";
import Carousel from "./Testicarsl";

function Testimony() {
    return (
        <>
        <div className="testicont">
        <div className="testtext">
            <p id="testtitle">Testimonial</p>
            <p id="testdesc">Berbagai review positif dari para pelanggan kami</p>
        </div>
            <Carousel />
        </div>
        </>
    )
}

export default Testimony;