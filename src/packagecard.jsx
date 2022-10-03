import React from "react";
import users from './images/fi_users.png'
import './package.css'

function Carpack (props) 
{
    const { image, carName, carCat, carPrice } = props

    return (
        <div class="carCard">
            <img src={image} className="carImage" alt="" />
            <div className="car-detail">
            <p className="carName">{carName}</p>
            <img src={users} alt="" />
            <p className="categorycar">{carCat}</p>
            <p id='total'>Total</p>
            <p className="carPrice2"><b>{'Rp. ' + carPrice}</b></p>
            </div>
        </div>
    )
}

export default Carpack;