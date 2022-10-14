import React from "react";
import '../styles/navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';


function NavBar() {
    return(
        <>
        <header className="nav-container">
        <div className="navbarBrand" onClick={(e) => {e.preventDefault()
        window.location.href='/'}}></div>
        {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3">
          <Container>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='toggle'/>

            <Navbar.Offcanvas className='half-canvas'
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <b>BCR</b>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="link justify-content-end gap-4 me-5 flex-grow-1 pe-3">
                  <Nav.Link href="#service" smooth>Our Services</Nav.Link>
                  <Nav.Link href="#whyus" smooth>Why Us</Nav.Link>
                  <Nav.Link href="#testimony" smooth>Testimony</Nav.Link>
                  <Nav.Link href="#faq" smooth>FAQ</Nav.Link>
                  <button id="regisBtn" onClick={(e) => {e.preventDefault()
                  window.location.href='/signup'}}><b>Register</b></button>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
        </header>
        
        </>
    )
}

export default NavBar;