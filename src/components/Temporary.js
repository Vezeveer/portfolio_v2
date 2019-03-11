import React, { Component } from 'react'
import './Temporary.css'
import PomodoroClock from './projects/pomodoro'
import Calculator from './projects/calculator'
import DrumMachine606 from './projects/drum606'
import RandomQuoteMachine from './projects/randomQuoteMachine'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

class Temporary extends Component {

  toggleChange = () => {
    console.log('toggled')
    let menuContainer = document.querySelector('.menu-container');
    let menuBarsC = document.querySelector('.menu-bars-container');
    menuBarsC.classList.toggle("change");
    menuContainer.classList.toggle("change-menu");
    console.log(menuContainer.classList)
  }

  toggleMenu = () => {
    console.log('clicked')
    let menuLinks = document.querySelectorAll('.lnk');
    for (let i = 0; i < menuLinks.length; i++) {
      menuLinks[i].addEventListener('click', this.toggleChange());
    }
  }

  render() {
    return (
      <main>
        <header id="home-dsk" className="header-container">
          <Navbar className="mainNav" bg="pink" expand="lg">
            <Navbar.Brand href="#home">>></Navbar.Brand>
            <Navbar.Toggle className="navBTN" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link className="txtNav" href="#home-dsk">Home</Nav.Link>
                <Nav.Link className="txtNav" href="#portfolio">Portfolio</Nav.Link>
                <Nav.Link className="txtNav" href="#about">About</Nav.Link>
                <Nav.Link className="txtNav" href="#contact">Contact</Nav.Link>

              </Nav>

            </Navbar.Collapse>
          </Navbar>
          <div className="nav-container">

            <nav className="navbar">
              <a></a>
              <a className="active" href="#home-dsk">HOME</a>
              <a href="#portfolio">PORTFOLIO</a>
              <a href="#about">ABOUT</a>
              <a href="#contact">CONTACT</a>
            </nav>
            <div id="menu-container" className="menu-container">
              <ul className="mobile-menu">
                <a className="lnk current" href="#">
                  <li>HOME</li>
                </a>
                <a className="lnk" href="#portfolio">
                  <li>PORTFOLIO</li>
                </a>
                <a className="lnk" href="#about">
                  <li>ABOUT</li>
                </a>
                <a className="lnk" href="#contact">
                  <li>CONTACT</li>
                </a>
              </ul>
              <a className="burger-btn">
                <div className="menu-bars-container" onClick={this.toggleMenu}>
                  <div className="bar1"></div>
                  <div className="bar2"></div>
                  <div className="bar3"></div>
                </div>
              </a>
            </div>
          </div>
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




        <h3 className="text-center">Portfolio Part 1</h3>
        <section>
          <div className="row text-center">
            <div className="col-md-6">
              <h5>Pomodoro Clock | <a target="_blank" href="https://codepen.io/Vezeveer/pen/jJVoem">See Code</a></h5>
              <PomodoroClock />
            </div>
            <br />
            <div className="col-md-6">
              <h5>Calculator | <a target="_blank" href="https://codepen.io/Vezeveer/pen/VRKXBW">See Code</a></h5>
              <Calculator />
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="row text-center">
            <div className="col-md-6">
              <h5>Drum Machine | <a target="_blank" href="https://codepen.io/Vezeveer/pen/drpJpd">See Code</a></h5>
              <DrumMachine606 />
            </div>
            <br />
            <div className="col-md-6">
              <h5>Random Quote Machine | <a target="_blank" href="https://codepen.io/Vezeveer/pen/PLqNrr">See Code</a></h5>
              <RandomQuoteMachine />
            </div>
          </div>
          <div className="text-center mt-5">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <p>See More from Projects 1 at my <a target="_blank" href="https://codepen.io/dashboard/">codepen</a> playground with fcc</p>

            <p>as of creation of this site 15-Feb-2019 - 09-Mar-2019</p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </section>


        <h3 id="portfolio">Portfolio Part 2</h3>
        <section className="row portfolio">
          <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
              <div className="card-body text-center">
                <h5 className="card-title">MooMoo's Postathon</h5>
                <img className="card-img" src="./imgs/blank_project.png" />
                <p className="card-subtitle">A simple site where you sign up to make a post and see updates of your friends posts.</p>
                <p className="card-text card-">Tech: ReactJS, Redux, Firebase</p>
                <a href="#" target="_blank"><img className="card-link" width="24px"
                  src="imgs/github-brands.svg" /></a>
                <a href="http://coolgamer.rf.gd/" target="_blank"><img className="card-link" width="24px"
                  src="imgs/globe-solid.svg" /></a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
              <div className="card-body text-center">
                <h5 className="card-title">El Consos Restaurant</h5>
                <img className="card-img" src="./imgs/elconsos.gif" />
                <p className="card-subtitle">Spent too much time on the mobile js</p>
                <p className="card-text card-">Tech: JS</p>
                <a href="https://github.com/Vezeveer/restuarant_elco" target="_blank"><img className="card-link" width="24px"
                  src="imgs/github-brands.svg" /></a>
                <a href="https://gogo.epizy.com" target="_blank"><img className="card-link" width="24px"
                  src="imgs/globe-solid.svg" /></a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
              <div className="bg-light card-body text-center">
                <h5 className="card-title">My First Site</h5>
                <img className="card-img" src="./imgs/old_site.png" />
                <p className="card-subtitle">Going to remove this soon...</p>
                <p className="card-text card-">Tech: JS</p>
                <a href="https://github.com/Vezeveer/My_first_webpage" target="_blank"><img className="card-link" width="24px"
                  src="imgs/github-brands.svg" /></a>
                <a href="/projects/im_a_developer2/main.html" target="_blank"><img className="card-link"
                  width="24px" src="imgs/globe-solid.svg" /></a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
              <div className="card-body text-center">
                <h5 className="card-title">The Big Five</h5>
                <img className="card-img" src="./imgs/blank_project.png" />
                <p className="card-subtitle">Working on it.</p>
                <p className="card-text card-">Tech: JS | ReactJS</p>
                <a href="https://github.com/Vezeveer/the-big-five" target="_blank"><img className="card-link" width="24px"
                  src="imgs/github-brands.svg" /></a>
                <a href="http://thebigfive.rf.gd" target="_blank"><img className="card-link" width="24px"
                  src="imgs/globe-solid.svg" /></a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
              <div className="card-body text-center">
                <h5 className="card-title">Posts workout</h5>
                <img className="card-img" src="./imgs/blank_project.png" />
                <p className="card-text card-">Tech: React Redux</p>
                <a href="#"><img className="card-link" width="24px"
                  src="imgs/github-brands.svg" /></a>
                <a href="/"><img className="card-link" width="24px" src="imgs/globe-solid.svg" /></a>
              </div>
            </div>
          </div>
        </section>




        <footer id="contact" className="footer">
          <div className="footer-inner">
            <br />
            <a className="resume" href="/pdf/Resume-Final_9-Mar-2019.pdf">My Resume &#8595;</a>
            <div>
              <p>
                Lets build something<br />
                Lets work together<br />
              </p>

            </div>
            <div id="social">
              <a href="https://github.com/Vezeveer" target="_blank"><img className="fill-svg" width="24px"
                src="imgs/github-brands.svg" /></a>
              <a href="https://stackoverflow.com/story/emmanuelpitcher" target="_blank"><img className="fill-svg" width="24px"
                src="imgs/stack-overflow-brands.svg" /></a>
            </div>
            <br />
            <p>
              &copy; 2019 Emmanuel Pitcher | mortalmanny@live.com</p><br />
          </div>
        </footer>
      </main>
    )
  }
}

export default Temporary