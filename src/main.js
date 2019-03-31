import React, { Component } from 'react'
import './css/main.css'
import Footer from './components/footer'
import Header from './components/header'
import Portfolio from './components/portfolio'
import Progress from './components/progress'
import PomodoroClock from './components/projects/pomodoro'
import Calculator from './components/projects/calculator'
import Drum606 from './components/projects/drum606'
import RandomQuoteMachine from './components/projects/randomQuoteMachine'
import WordBeater from './components/projects/wordbeater'
import NavbarCustom from './components/navbarCustom'
import ContactForm from './components/contactForm'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


class Temporary extends Component {

  // SOME USEFUL CODE
  // document.addEventListener('click', function (event) {

  //   if (event.target.matches('.modal-open')) {
  //     // Run your code to open a modal
  //   }

  //   if (event.target.matches('.close')) {
  //     // Run your code to close a modal
  //   }

  // }, false);



  render() {
    return (
      <Router>
        <main className="body-container">
          <div id="home"></div>
          <NavbarCustom />
          {/* create better menu button */}
          <Header />

          <section>
            <Switch>
              <Route exact path="/pomodoro" component={PomodoroClock} />
              <Route exact path="/calculator" component={Calculator} />
              <Route exact path="/drum606" component={Drum606} />
              <Route exact path="/randomquotemachine" component={RandomQuoteMachine} />
              <Route exact path="/wordbeater" component={WordBeater} />
            </Switch>
          </section>

          {/* <section className="logos-container">
            <br />
            <br />
            <br />
            <img src="./imgs/HTML5CSS3Logos.svg" style={{ 'width': '128px' }} alt="" />
            <img src="./imgs/androidlogo.png" alt="" />
            <img src="./imgs/reactlogo.svg" className="reactlogo" style={{ 'width': '128px' }} alt="" />
            <img src="./imgs/jslogo.png" alt="" />

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </section> */}

          <div className="body-wrapper">
            <div className="about-body">
              <h3 id="about">About Me</h3>
              <section className="about-wrapper">

              </section>
            </div>


            <div className="js-body">
              <h3 id="projects">JavaScript Projects</h3>
              <section className="p1-wrapper">
                <Link to="/pomodoro">
                  <div className="p1 p1-pomodoro">
                    <div className="p1-bg"></div>
                    <img width="50px" src="/imgs/pomo-clock.jpg" alt="" />
                    <div className="p1-label">Pomodoro</div>
                  </div>
                </Link>
                <Link to="/calculator">
                  <div className="p1 p1-calc">
                    <div className="p1-bg"></div>
                    <img width="50px" src="/imgs/calc-logo.jpg" alt="" />
                    <div className="p1-label">Calculator</div>
                  </div>
                </Link>
                <Link to="/drum606">
                  <div className="p1 p1-drum">
                    <div className="p1-bg"></div>
                    <img width="50px" src="/imgs/Beat-Machine-logo.jpg" alt="" />
                    <div className="p1-label">Drum Machine</div>
                  </div>
                </Link>
                <Link to="/randomquotemachine">
                  <div className="p1 p1-rqm">
                    <div className="p1-bg"></div>
                    <img width="50px" src="/imgs/quotes.png" alt="" />
                    <div className="p1-label">Random Quote Machine</div>
                  </div>
                </Link>
                <Link to="/wordbeater">
                  <div className="p1 p1-wordbeater">
                    <div className="p1-bg"></div>
                    <img width="50px" src="/imgs/wordbeater-logo.jpg" alt="" />
                    <div className="p1-label">Word Beater</div>
                  </div>
                </Link>
                <div className="p1">
                  D3 Barchart
                </div>
                <div className="p1">
                  Markdown Previewer
                </div>
              </section>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />

            <section className="progress-container">
              <h6>Current Level Assumption</h6>
              <Progress name="JavaScript" percent="85" color="#F9F446" />
              <Progress name="CSS" percent="75" />
              <Progress name="React" percent="65" />
              <Progress name="nodeJS" percent="20" />
              <Progress name="Photoshop" percent="60" />
              <Progress name="UI/UX" percent="50" />
            </section>


            <br />
            <br />

            <br />
            <br />
            <h3 id="portfolio" className="text-center">Rough Projects</h3>
            <Portfolio />
          </div>
          <ContactForm />
          <Footer />
        </main>
      </Router>
    )
  }
}

export default Temporary