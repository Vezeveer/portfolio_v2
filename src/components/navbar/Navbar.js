import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import './navbar.css'

function NavbarMain() {
  return (
    <div>
      <Navbar className="mainNav text-light" bg="pink" expand="lg">
        <Navbar.Brand className="d-inline text-left text-light" href="#home">EP</Navbar.Brand>
        <Navbar.Toggle className="d-inline text-left" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="txtNav" href="#home-dsk">Home</Nav.Link>
            <Nav.Link className="txtNav" href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link className="txtNav" href="#about">About</Nav.Link>
            <Nav.Link className="txtNav" href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="container nav-desktop">
        <nav className="mt-5 navlinks">
          <a></a>
          <a className="active" href="#home-dsk">HOME</a>
          <a href="#portfolio">PORTFOLIO</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </div>
    </div>
  )
}

export default NavbarMain