import React, { Component } from 'react'
import './Temporary.css'
import Footer from './footer'
import Header from './header'
import Portfolio from './portfolio'
import ProjectsPart2 from './projects'

class Temporary extends Component {
  render() {
    return (
      <main>
        <Header />
        <br />
        <br />
        <br />
        <h3 className="text-center">Portfolio Part 1</h3>
        <br />
        <br />
        <br />
        <ProjectsPart2 />
        <h3 id="portfolio">Portfolio Part 2</h3>
        <Portfolio />
        <Footer />
      </main>
    )
  }
}

export default Temporary