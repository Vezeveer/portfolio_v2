import React from 'react'
import NavbarMain from '../navbar/Navbar'
import './header.css'

const Home = () => {
  return (
    <div>
      <header id="home-dsk" className="header-container">
        <NavbarMain />

        <img className="gradient" src="./imgs/gradient-sunny.svg" />
        <img className="left-part" src="./imgs/left-part.jpg" />
        <img className="right-part" src="./imgs/right-part.jpg" />
        <div className="logo-position d-flex justify-content-center align-items-center">
          <div className="logo-container">
            <h4>Hi, I'm</h4>
            <img className="ep-logo" src="./imgs/ep_logo.svg" />
            <h4>And I am A Web Developer</h4>
          </div>
        </div>

      </header>
      <div className="illumin-lines">
        <div className="line-right"></div>
      </div>
    </div>
  )
}

export default Home