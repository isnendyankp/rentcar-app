import React from "react";
import './App.css';
import Navbar from './navbar';
import Branddesc from './branddesc';
import Servicedesc from './servicedesc';
import Whyus from './whyus';
import Testimony from './testimony';
import Rentbanner from './rentbanner';
import Faq from './faq';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.css';

function Landingpage() {
    return (
      <div className="Landpage">
      <Navbar />
      <Branddesc />
      <Servicedesc />
      <Whyus />
      <Testimony />
      <Rentbanner />
      <Faq />
      <Footer />
    </div>
    );
  }
  export default Landingpage;