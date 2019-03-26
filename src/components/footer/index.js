import React from 'react';
import './footer.css'

const Footer = (params) => {
  return (
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
          <a href="https://github.com/Vezeveer" target="_blank" rel="noopener noreferrer"><img className="fill-svg" width="24px"
            src="imgs/github-brands.svg" alt="" /></a>
          <a href="https://stackoverflow.com/story/emmanuelpitcher" target="_blank" rel="noopener noreferrer"><img className="fill-svg" width="24px"
            src="imgs/stack-overflow-brands.svg" alt="" /></a>
        </div>
        <br />
        <p>
          &copy; 2019 Emmanuel Pitcher | mortalmanny@live.com</p><br />
      </div>
    </footer>
  )
};

export default Footer