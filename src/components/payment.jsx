import React from "react";
import NavBar from '../components/navbar'
import Footer from "./footer";
import {MdKeyboardBackspace} from 'react-icons/md'
import {IoIosArrowUp} from 'react-icons/io'
import '../styles/payment.css'
import User from '../images/fi_users.png'
import Status from "./status";

export default function Payment() {

    return(
        <>
        <NavBar />
        <div className="heads">
            <div className="headers">
            <p id="pay"><span><a href='/rentpackage' id='packBtn'><MdKeyboardBackspace size={27}/>
            </a></span><b>Pembayaran</b></p>
            </div>
            <Status 
            current={['current', 'num', 'num']}/>
        </div>
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
        <div className="paydetail">
            <div className="paydesc">
            <p id="chosencar"><b>(Selected car)</b></p>
            <p id="cap"><span><img src={User} alt='' id="capimg"/></span>6-8 orang</p>
            <div className="total">
                Total<span id="arrow"><IoIosArrowUp size={27}/></span><span id="priceval">(Price)</span>
            </div>
            <p id="price"><b>Harga</b></p>
            <ul>
                <li>Sewa Mobil Rp.500.000 x 7 Hari<span id="priceval2">(Price)</span></li>
                </ul>
                <p><b>Biaya Lainnya</b></p>
                <ul>
                    <li>Pajak<span className="include">Termasuk</span></li>
                    <li>Biaya makan sopir<span className="include2">Termasuk</span></li>
                </ul>
                <div className="notincluded">
                    <b>Belum Termasuk</b>
                    <ul>
                        <li>Bensin</li>
                        <li>Tol dan parkir</li>
                    </ul>
                    </div>
                    <div className="line2"></div>
                    <p id="sum"><b>Total</b><span>(Price)</span></p>
        </div>
        <button id="payBtn" onClick={(e) => {
            e.preventDefault(); window.location.href='/payment/confirm'
        }}>Bayar</button>
        </div>
        </div>
        <Footer />
        </>
    )
}
