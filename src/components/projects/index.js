import React from 'react'
import PomodoroClock from './pomodoro'
import Calculator from './calculator'
import DrumMachine606 from './drum606'
import RandomQuoteMachine from './randomQuoteMachine'


const ProjectsPart2 = (params) => {
  return (
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
  )
}

export default ProjectsPart2