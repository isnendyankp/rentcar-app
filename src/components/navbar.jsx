import React from "react";
import '../styles/navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import avatar from '../images/avatar.jpeg'
import Handlebutton from "../logic_support/sign in/handlebutton";
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  const loggedin = Handlebutton()
  const {logout} = Handlebutton()
  
  let details = localStorage.getItem('userDetails');
  let user = JSON.parse(details);
  
  
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
                  {loggedin ? (<div className="showuser">
                    <img src={avatar} alt="user avatar" id='userava'/>
                    <NavDropdown
                      id="nav-dropdown-dark-example"
                      title={user.fullname}
                      menuVariant="dark"
                    >
                      <NavDropdown.Item><button id="logout" onClick={logout}>Logout</button></NavDropdown.Item>
                    </NavDropdown>
                  </div>):
                  (<button id="regisBtn" onClick={(e) => {e.preventDefault()
                   window.location.href='/signup'}}><b>Register</b></button>)}
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