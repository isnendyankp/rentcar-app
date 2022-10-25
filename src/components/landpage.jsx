import React from "react";
import '../styles/App.css';
import NavBar from './navbar';
import Branddesc from './branddesc';
import Servicedesc from './servicedesc';
import Whyus from './whyus';
import Testimony from './testimony';
import Rentbanner from './rentbanner';
import Faq from './faq';
import Footer from './footer';
import Carouselsec from'./Testicarsl'
import 'bootstrap/dist/css/bootstrap.css';
// import Handlebutton from "../logic_support/sign in/handlebutton";


function Landingpage(submit) {
    return (
      <div className="Landpage">
      <NavBar />
      <Branddesc />
      <Servicedesc />
      <Whyus />
      <Testimony />
      <Carouselsec />
      <Rentbanner />
      <Faq />
      <Footer />
    </div>
    );
  }
  export default Landingpage;