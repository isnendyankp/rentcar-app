import React , {useState, useEffect} from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import '../styles/payconfirm.css'
import {MdKeyboardBackspace} from 'react-icons/md'
import {FiCopy} from 'react-icons/fi'
// import {AiOutlineCheck} from 'react-icons/ai';
import Tab from "./payinstruction";

export default function Confirm() {
    const [payment, setPayment, paymentRef] = useState([23, 59, 59]);

    useEffect(() => {
        setInterval(() => {
          let [hour, minute, second] = paymentRef.current;
    
          if (second === 0) {
            minute = minute - 1;
            second = 60;
          }
    
          if (minute === 0) {
            if (second === 0) {
              hour = hour - 1;
              minute = 59;
              second = 60;
            } else {
              hour = hour - 1;
              minute = 59;
            }
          }
    
          second -= 1;
          setPayment([hour, minute, second]);
        }, 1000);
      }, [paymentRef, setPayment]);

    return(
        <>
        <NavBar />
        <div className="head">
            <a href="/payment" id="paylink"><MdKeyboardBackspace size={27}/><span id="type">BCA Transfer</span></a>
            <p id="orderid">Order ID: 86754231</p>
        </div>
        <div className="first-row">
        <div className="countdown-cont">
            <div className="deadlinedesc">
            <h6><b>Selesaikan Pembayaran Sebelum</b></h6>
            <p>Rabu, 19 Mei 2022 jam 13.00 WIB</p>
            </div>
            <div className="countdown">
            <h6>
              <span className="time">
                {payment[0] < 10 ? `0${payment[0]}` : payment[0]}
              </span>
              <span>:</span>
              <span className="time">
                {payment[1] < 10 ? `0${payment[1]}` : payment[1]}
              </span>
              <span>:</span>
              <span className="time">
                {payment[2] < 10 ? `0${payment[2]}` : payment[2]}
              </span>
            </h6>
            </div>
            </div>
            <div className="confirmation">
                <p id="instruction">Klik konfirmasi pembayaran untuk mempercepat proses pengecekan</p>
                <button id="confirmBtn">Konfirmasi Pembayaran</button>
            </div>
        </div>
        <div className="transfer">
              <p><b>Lakukan Transfer Ke</b></p>
              <div className="transferid">
                <button id='selectedbank' disabled>BCA</button>
                <p id="selectedmethod">BCA Transfer</p>
                </div>
                <p id="transferid">a.n Binar Car Rental</p>
                <div className="input-cont">
                    <div className="Number-cont">
                      <label htmlFor="accnumber">Nomor Rekening</label><br />
                      <input type="text" value='54104257877' className='Number' disabled/><i className="icon"><FiCopy/></i> 
                    </div>
                    <div className="Price-cont">
                    <label htmlFor="totalprice">Total Bayar</label><br />
                    <input type="text" value='Car price' className='Number' disabled/><i className="icon"><FiCopy/></i> 
                    </div>
                  </div>
            </div>
            <Tab />
        <Footer />
        </>
    )
}