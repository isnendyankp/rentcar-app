import React from "react";
import icon1 from './images/icon_complete.png'
import icon2 from './images/icon_price.png'
import icon3 from './images/icon_24hrs.png'
import icon4 from './images/icon_professional.png'
import './App.css'

function Whyus() {
    return (
        <>
        <div className="why-cont" id="whyus">
            <div className="text-cont">
            <p id="whytitle">Why Us?</p>
            <p id="whydesc">Mengapa harus pilih Binar Car Rental?</p>
            </div>
            <div className="cardcont">
                <div className="icons">
                    <img src={icon1} alt='' />
                    <p id="cardtitle">Mobil Lengkap</p>
                    <p id="carddesc">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                </div>
                <div className="icons">
                    <img src={icon2} alt='' />
                    <p id="cardtitle">Harga Murah</p>
                    <p id="carddesc">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                </div>
                <div className="icons">
                    <img src={icon3} alt='' />
                    <p id="cardtitle">Layanan 24 Jam</p>
                    <p id="carddesc">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                </div>
                <div className="icons">
                    <img src={icon4} alt='' />
                    <p id="cardtitle">Sopir Profesional</p>
                    <p id="carddesc">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Whyus;