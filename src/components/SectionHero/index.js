import React from "react";
import { Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CarImage from "../../assets/image/img_car.png";
import "./index.css";

const Hero = () => {
  var isHidden = false;
  const navigate = useNavigate();
  const locationCarDetail = useLocation();

  function handleSearch() {
    const token = localStorage.getItem("userIn");
    if (token) {
      navigate(`/cars`);
    } else navigate(`/login?redirectFrom=/cars`);
  }

  return (
    <div>
      <section className="hero-section">
        <div className="hero-flex hero-content">
          <div className="hero-title">
            <h1>Sewa & Rental Mobil Terbaik di kawasan Jawa Timur</h1>
            <p>
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            <div
              className="hero-button"
              hidden={
                locationCarDetail.pathname !== "/cars" ? isHidden : !isHidden
              }
            >
              <Button variant="success" onClick={handleSearch}>
                Mulai Sewa Mobil
              </Button>
            </div>
          </div>
        </div>
        <div className="hero-flex hero-image">
          <img src={CarImage} alt="img-car" width="100%" height="auto" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
