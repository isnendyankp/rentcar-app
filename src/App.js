import "./App.css";
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import NavigationBar from "./components/SectionNavigationBar";
import Services from "./components/SectionServices";
import Products from "./components/SectionProducts";
import Testimonial from "./components/SectionTestimonial";
import Faq from "./components/SectionFaq";
import Footer from "./components/SectionFooter";
import CarList from "./pages/CarList";
import DetailCar from "./pages/DetailCar";
import PaymentCar from "./pages/PaymentCar";
import PayInstruction from "./pages/PayInstuction";
import Ticket from "./pages/Ticket";
import LandingPage from "./pages/LandingPage";
import PublicLogin from "./pages/PublicLogin";
import PublicRegister from "./pages/PublicRegister";
import AdminLogin from "./pages/AdminLogin";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/testi" element={<Testimonial />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/cars" element={<CarList />} />
          <Route path="/cars/:id" element={<DetailCar />} />
          <Route path="/payment/:id" element={<PaymentCar />} />
          <Route path="/payments/:id" element={<PayInstruction />} />
          <Route path="/ticket/:id" element={<Ticket />} />
          <Route path="/login" element={<PublicLogin />} />
          <Route path="/register" element={<PublicRegister />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
