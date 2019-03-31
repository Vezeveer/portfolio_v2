import React from 'react'
import NavbarMain from '../navbar/Navbar'
import './header.css'

const Home = () => {
  return (
    <div>
      <header id="home-dsk" className="header-container">
        <NavbarMain />
        <img className="left-part" src="./imgs/left-part.jpg" alt="" />
        <img className="right-part" src="./imgs/right-part.jpg" alt="" />
        <div className="logo-lvl-1">
          <div className="logo-lvl-2">
            <h4>Hi, I'm</h4>
            <img className="ep-logo" src="./imgs/ep_logo.svg" alt="logo" />
            <h4>And I am A Web Developer</h4>
          </div>
        </div>
        <div className="h-bg"></div>
      </header>
      <div className="illumin-lines">
        <div className="line-right"></div>
      </div>
    </div>
  )
}

export default Home