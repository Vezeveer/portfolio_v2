import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import './navbar.css'

function NavbarMain() {
  return (
    <div>
      <Navbar className="mainNav text-light" bg="pink" expand="lg">
        <Navbar.Toggle className="toggle-btn-custom d-inline text-left" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="txtNav" href="#home-dsk">Home</Nav.Link>
            <Nav.Link className="txtNav" href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link className="txtNav" href="#about">About</Nav.Link>
            <Nav.Link className="txtNav" href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>


    </div>
  )
}

export default NavbarMain