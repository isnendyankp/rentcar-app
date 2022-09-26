import React from "react";
import icon1 from './icon_complete.png'
import icon2 from './icon_price.png'
import icon3 from './icon_24hrs.png'
import icon4 from './icon_professional.png'




function Whyus() {
    return (
        <>
        <div className="why-cont">
            <div>
            <p id="whytitle">Why Us?</p>
            <p id="whydesc">Mengapa harus pilih Binar Car Rental?</p>
            </div>
            <div className="cardcont">
                <div id="card1" className="icons">
                    <img src={icon1} alt='' />
                    <p id="cardtitle">Mobil Lengkap</p>
                    <p id="carddesc">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                </div>
                <div id="card2" className="icons">
                    <img src={icon2} alt='' />
                    <p id="cardtitle">Harga Murah</p>
                    <p id="carddesc">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                </div>
                <div id="card3" className="icons">
                    <img src={icon3} alt='' />
                    <p id="cardtitle">Layanan 24 Jam</p>
                    <p id="carddesc">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                </div>
                <div id="card4" className="icons">
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