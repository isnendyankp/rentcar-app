import React from "react";
import '../styles/searchingres.css'

function Carcard (props) 
{
    const { image, carName, carPrice } = props

    function handleClick(e) {
        e.preventDefault();
        window.location.href='/rentpackage'
        console.log(props);
     }
    return (
        <div class="carCard">
            <img src={image} className="carImage" alt="" />
            <div className="car-detail">
            <p className="carName">{carName}</p>
            <p className="carPrice"><b>{'Rp. ' + carPrice + ' / hari'}</b></p>
            <p><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, expedita. Iure sit numquam quidem libero.</b></p>
            </div>
            <button id="selectBtn" onClick={handleClick}>
                  <b>Pilih Mobil</b>
            </button>
        </div>
    )
}

export default Carcard;
