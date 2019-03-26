import React, { Component } from 'react'
import './index.css'
import { Link } from 'react-router-dom'

class PomodoroClock extends Component {

  state = {
    funtime: 300,
    session: 1500,
    playPause: false,
    time: 1500,
    counting: false,
    label: 'session',
    funtimeInSession: false
  }

  reset = () => {
    clearInterval(this.countDown)
    document.getElementById('beep').load()
    this.setState({
      funtime: 300,
      session: 1500,
      playPause: false,
      time: 1500,
      counting: false,
      label: 'session',
      funtimeInSession: false
    })
  }

  // INCASE i need to experiment
  // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  // var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  // var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  // var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  beep = () => {
    document.getElementById('beep').play()
  }

  counting = () => {
    this.setState({
      counting: true
    })
    this.countDown = setInterval(() => {
      let { funtimeInSession } = this.state
      let { time } = this.state
      let { funtime } = this.state
      let { session } = this.state
      this.setState({
        time: time - 1
      })
      if (time === 0 && !funtimeInSession) {
        this.setState({
          label: 'break',
          time: funtime,
          funtimeInSession: true
        })
        this.beep()
      }
      else if (time === 0 && funtimeInSession) {
        this.setState({
          label: 'session',
          time: session,
          funtimeInSession: false
        })
        this.beep()
      }
    }, 1000)
  }

  notCounting = () => {
    this.setState({
      counting: false
    })
    clearInterval(this.countDown)
  }

  handleCount = () => {
    !this.state.counting ?
      this.counting()
      :
      this.notCounting()
  }

  handleBreakIncrement = () => {
    const { funtime } = this.state
    if (!this.state.counting) {
      this.setState({
        funtime: funtime < 3600 ? funtime + 60 : funtime
      })
    }
  }
  handleBreakDecrement = () => {
    const { funtime } = this.state
    if (!this.state.counting) {
      this.setState({
        funtime: funtime > 60 ? funtime - 60 : funtime
      })
    }
  }
  handleSessionIncrement = () => {
    const { session } = this.state
    if (!this.state.counting) {
      this.setState({
        session: session < 3600 ? session + 60 : session,
        time: session < 3600 ? session + 60 : session
      })
    }
  }
  handleSessionDecrement = () => {
    const { session } = this.state
    if (!this.state.counting) {
      this.setState({
        session: session > 60 ? session - 60 : session,
        time: session > 60 ? session - 60 : session
      })
    }
  }


  render() {

    const minutes = (Math.floor((this.state.time) / 60)).toLocaleString(undefined, { minimumIntegerDigits: 2 })
    const seconds = (this.state.time % 60).toLocaleString(undefined, { minimumIntegerDigits: 2 });
    const funtime = this.state.funtime / 60
    const session = this.state.session / 60

    return (
      <div className="pomodoroContainer">
        <div className="pomodoroBGBlur"></div>
        <div className="pomodoro">
          <div className="col-12 text-center pt-4">
            <h1>
              Pomodoro Clock
            </h1>
            <audio id="beep" src="./media/analog-watch-alarm_daniel-simion.mp3"></audio>
          </div>
          <div className="row text-center">
            <div className="col-6">
              <h4 id="break-label">
                Break Length</h4>
              <div className="row m-0 d-flex justify-content-center">
                <button onClick={this.handleBreakDecrement} id="break-decrement" className="pBtn">
                  V</button>
                <h4 id="break-length" className="col-3 pInner">
                  {funtime}
                </h4>
                <button style={{ 'transform': 'rotate(180deg)' }} onClick={this.handleBreakIncrement} id="break-increment" className="pBtn">
                  V</button>
              </div>
            </div>
            <div className="col-6">
              <h4 id="session-label">
                Session Length</h4>
              <div className="row m-0 d-flex justify-content-center">
                <button onClick={this.handleSessionDecrement} id="session-decrement" className="pBtn">
                  V</button>
                <h4 id="session-length" className="col-3 pInner">
                  {session}
                </h4>
                <button style={{ 'transform': 'rotate(180deg)' }} onClick={this.handleSessionIncrement} id="session-increment" className="pBtn">
                  V</button>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <h4 id="timer-label">{this.state.label}</h4>
            <h1 id="time-left">{minutes}:{seconds}</h1>
          </div>
          <div className="text-center">
            <button onClick={this.handleCount} id="start_stop" className="pBtnLower pBtnPlayPause">|| ></button>
            <button onClick={this.reset} id="reset" className="pBtnLower pBtnReset">reset</button>
          </div>
          <p className="text-center mt-3 pb-4">
            <button onClick={this.reset} className="pBtnLower pBtnExit"><Link className="pBtnLink" to="/">EXIT</Link></button>
          </p>
        </div>
      </div>
    )
  }
}

export default PomodoroClock