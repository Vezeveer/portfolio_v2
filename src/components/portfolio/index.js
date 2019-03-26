import React from 'react'
import './portfolio.css'

const Portfolio = () => {
  return (
    <div className="portfolioContainer">
      <section className="row portfolio">
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">MooMoo's Postathon</h5>
              <img className="card-img" src="./imgs/blank_project.png" alt="" />
              <p className="card-subtitle">A simple site where you sign up to make a post and see updates of your friends posts.</p>
              <p className="card-text card-">Tech: ReactJS, Redux, Firebase</p>
              <a href="/" target="_blank"><img className="card-link" width="24px"
                src="imgs/github-brands.svg" alt="" /></a>
              <a href="http://coolgamer.rf.gd/" target="_blank" rel="noopener noreferrer"><img className="card-link" width="24px"
                src="imgs/globe-solid.svg" alt="" /></a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">El Consos Restaurant</h5>
              <img className="card-img" src="./imgs/elconsos.gif" alt="" />
              <p className="card-subtitle">Spent too much time on the mobile js</p>
              <p className="card-text card-">Tech: JS</p>
              <a href="https://github.com/Vezeveer/restuarant_elco" target="_blank" rel="noopener noreferrer"><img className="card-link" width="24px"
                src="imgs/github-brands.svg" alt="" /></a>
              <a href="https://gogo.epizy.com" target="_blank" rel="noopener noreferrer"><img className="card-link" width="24px"
                src="imgs/globe-solid.svg" alt="" /></a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
          <div className="card">
            <div className="bg-light card-body text-center">
              <h5 className="card-title">My First Site</h5>
              <img className="card-img" src="./imgs/old_site.png" alt="" />
              <p className="card-subtitle">Going to remove this soon...</p>
              <p className="card-text card-">Tech: JS</p>
              <a href="https://github.com/Vezeveer/My_first_webpage" target="_blank" rel="noopener noreferrer"><img className="card-link" width="24px"
                src="imgs/github-brands.svg" alt="" /></a>
              <a href="/projects/im_a_developer2/main.html" target="_blank"><img className="card-link"
                width="24px" src="imgs/globe-solid.svg" alt="" /></a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">The Big Five</h5>
              <img className="card-img" src="./imgs/blank_project.png" alt="" />
              <p className="card-subtitle">Working on it.</p>
              <p className="card-text card-">Tech: JS | ReactJS</p>
              <a href="https://github.com/Vezeveer/the-big-five" target="_blank" rel="noopener noreferrer"><img className="card-link" width="24px"
                src="imgs/github-brands.svg" alt="" /></a>
              <a href="http://thebigfive.rf.gd" target="_blank" rel="noopener noreferrer"><img className="card-link" width="24px"
                src="imgs/globe-solid.svg" alt="" /></a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">Posts workout</h5>
              <img className="card-img" src="./imgs/blank_project.png" alt="" />
              <p className="card-text card-">Tech: React Redux</p>
              <a href="/"><img className="card-link" width="24px"
                src="imgs/github-brands.svg" alt="" /></a>
              <a href="/"><img className="card-link" width="24px" src="imgs/globe-solid.svg" alt="" /></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio