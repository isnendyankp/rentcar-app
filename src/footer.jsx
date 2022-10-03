import React from "react";
import facebook from './images/icon_facebook.png'
import twitter from './images/icon_twitter.png'
import instagram from './images/icon_instagram.png'
import twitch from './images/icon_twitch.png'
import mail from './images/icon_mail.png'
function Footer() {
    return (
        <>
        <footer className="footer">
            <div className="address">
                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
            </div>
            <div className="Menu">
            <a src="#" href="/" id="footer-item">Our Services</a>
            <a src="#" href="/" id="footer-item">Why Us</a>
            <a src="#" href="/" id="footer-item">Testimonial</a>
            <a src="#" href="/" id="footer-item">FAQ</a>
            </div>
            <div className="connect-item">
                <p id="connect">Connect with us</p>
                <div className="connect-icon">
                    <img src={facebook} alt="" id="f-icons"/>
                    <img src={instagram} alt="" id="f-icons"/>
                    <img src={twitter} alt="" id="f-icons"/>
                    <img src={mail} alt="" id="f-icons"/>
                    <img src={twitch} alt="" id="f-icons"/>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright Binar 2022</p>
                <div className="navbarBrand" id="footer-brand"></div>
            </div>
        </footer>
        </>
    )
}

export default Footer;