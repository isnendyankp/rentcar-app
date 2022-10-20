import React from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import Status from "./status";
import {MdKeyboardBackspace} from 'react-icons/md'
import '../styles/ticket.css'
import {BsCheckCircle} from 'react-icons/bs'
import {FiDownload} from 'react-icons/fi'
import Pdf from "./pdf";

export default function Ticket() {
    return(
        <>
        <NavBar />
        <div className="headt">
            <div className="headert">
            <p id="pay"><span><a href='/payment/confirm' id='packBtn'><MdKeyboardBackspace size={27}/>
            </a></span><b>Ticket</b></p>
            <p id="order">Order ID: xxxxxxxx</p>
            </div>
            
            <Status 
                current={['current', 'current', 'current']}/>
        </div>
        <div className="succeed">
            <BsCheckCircle size={60} 
            style={{ fill: 'white', background:'green', borderRadius:'50%', border:'2px solid green'}}/>
        </div>
        <div className="succeed-text">
            <p><b>Pembayaran Berhasil!</b></p>
            <p id="invoice">Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
        </div>
        <div className="invoice-cont">
            <div className="texts">
            <p><b>Invoice</b></p>
            <p><span>*</span> no invoice</p>
            </div>
            <button id="downloadBtn"><i><FiDownload size={18}/></i><b id="unduh">Unduh</b></button>
        </div>
        <Pdf />
        <Footer />
        </>
    )
}