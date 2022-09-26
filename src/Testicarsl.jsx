import React, { useState } from 'react';
import './App.css';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import testi1 from './testi1.png'
import testi2 from './secondtesti.jpeg'

function Carousel() {
  let [currImage, setCurrImage] = useState(0);

  
  return (
    <>
    <div className='crsl-cont'>
      <div className='crsl-item'>
        <img src={items[currImage].image} alt="" />
      <div className='controlBtn'>
            <button id='cBtn' name='prev' onClick={() => {setCurrImage(currImage - 1)}}><MdKeyboardArrowLeft /></button>
            <button id='cBtn' name='next' onClick={() => {setCurrImage(currImage + 1)}}><MdKeyboardArrowRight /></button>
          </div>
      </div>

    </div>
    </>
  )
}

const items = [
  {image: testi1},
  {image: testi2},
  {image: testi1}
];

export default Carousel;