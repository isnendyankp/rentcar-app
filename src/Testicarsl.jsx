import React, { Component } from "react";
import Slider from "react-slick"
import './App.css';
import './carousel.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import photo1 from './images/img_photo.png'
import rate from './images/Rate.png'
import photo2 from './images/img_photo2.png'

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", background: "black", flexDirection:'row' }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

export default class Carouselsec extends Component {
  render() {
    const settings = {
      mobileFirst:true,
      infinite: true,
      speed: 500,
      autoplay:true,
      slidesToShow: 2,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 376,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite:true,
          }
        },
        ]};
    return (
      <div className="slider-cont">
        <Slider {...settings}>
        <div className="crsl-cont">
        <div className="crsl-item">
             <div className="img-cont" id='item1'>
                 <img src={photo1} alt="" className='photo' />
                 <div className="caro-content">
                     <img src={rate} alt="" id='star'/>
                     <p id="review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur temporibus beatae error velit laudantium natus.</p>
                     <p id="reviewer">John Dee 32, Bromo</p>
                 </div>
             </div>
             </div>
             </div>
             <div className="crsl-cont">
        <div className="crsl-item">
             <div className="img-cont" id='item1'>
                 <img src={photo1} alt="" className='photo' />
                 <div className="caro-content">
                     <img src={rate} alt="" id='star'/>
                     <p id="review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur temporibus beatae error velit laudantium natus.</p>
                     <p id="reviewer">John Dee 32, Bromo</p>
                 </div>
             </div>
             </div>
             </div>
             <div className="crsl-cont">
        <div className="crsl-item">
             <div className="img-cont" id='item2'>
                 <img src={photo2} alt="" className='photo' />
                 <div className="caro-content">
                     <img src={rate} alt="" id="star"/>
                     <p id="review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur temporibus beatae error velit laudantium natus.</p>
                     <p id="reviewer">John Dee 32, Bromo</p>
                 </div>
             </div>
             </div>
             </div>
             <div className="crsl-cont">
        <div className="crsl-item">
             <div className="img-cont" id='item2'>
                 <img src={photo2} alt="" className='photo' />
                 <div className="caro-content">
                     <img src={rate} alt="" id="star"/>
                     <p id="review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur temporibus beatae error velit laudantium natus.</p>
                     <p id="reviewer">John Dee 32, Bromo</p>
                 </div>
             </div>
             </div>
             </div>
        </Slider>
      </div>
    );
  }
}