import React from "react";
import {FiImage} from 'react-icons/fi'
import '../styles/pdf.css'

export default function Pdf() {
    return(
        <>
        <div className="pdf-cont">
            <i><FiImage fill="white"/></i><span id="pdfview">PDF Viewer</span>
        </div>
        </>
    )
}