import React from "react";
import NavBar from '../components/navbar'
import Footer from "./footer";
import {MdKeyboardBackspace} from 'react-icons/md'
import '../styles/payment.css'

export default function Payment() {
    return(
        <>
        <NavBar />
        <p id="pay"><span><a href='/rentpackage' id='packBtn'><MdKeyboardBackspace size={27}/>
        </a></span><b>Pembayaran</b></p>
        <div className="pay-cont">
        <p id="titlep"><b>Detail Pesananmu</b></p>
            <div className="details">
            <div className="name-detail">
                <label htmlFor="name" className="labelp">Nama/Tipe mobil</label><br />
                <input type="text" className="inputp" placeholder="Avanza"/>
            </div>
            <div className="capacity">
                <label htmlFor="capacity" className="labelp">Kategori</label><br />
                <input type="text" className="inputp" placeholder="6-8 orang"/>
            </div>
            <div className="startrent">
                <label htmlFor="capacity" className="labelp">Tanggal Mulai Sewa</label><br />
                <input type="text" className="inputp" placeholder="2 Jun 2022"/>
            </div>
            <div className="endrent">
                <label htmlFor="capacity" className="labelp">Tanggal Akhir Sewa</label><br />
                <input type="text" className="inputp" placeholder="8 Jun 2022"/>
                </div>
            </div>
        </div>
        <div className="receipt-cont">
        <div className="transfer-cont">
            <p id="titled"><b>Pilih Bank Transfer</b></p>
            <p id="methdesc">Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking</p>
            <div className="method-cont">
                <button className="bank">BCA</button>
                <p className="method">BCA Transfer</p>
            </div>
            <div className="line1"></div>
            <div className="method-cont2">
                <button className="bank">BRI</button>
                <p className="method">BNI Transfer</p>
            </div>
            <div className="line1"></div>
            <div className="method-cont2">
                <button className="bank">Mandiri</button>
                <p className="method">Mandiri Transfer</p>
            </div>
            <div className="line1"></div>
        </div>
        <div className="paydetail"></div>
        </div>
        <Footer />
        </>
    )
}
