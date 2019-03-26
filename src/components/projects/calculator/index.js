import React, { Component } from 'react'
import './index.css'
import { Link } from 'react-router-dom'

const operation = /[-*/+]/
const checkEndOfOp = /[-*/+]$/

class Calculator extends Component {
  state = {
    input: 0,
    expr: 0,
    evaluated: false,
    operated: false,
    prevOp: ''
  }

  reset = () => {
    this.setState({
      input: 0,
      expr: 0,
      evaluated: false,
      operated: false,
      prevOp: ''
    })
  }

  operation = (opera) => {
    let cache = this.state.input.toString().concat(opera);
    let prevExpr = this.state.expr;
    this.setState({
      expr: (this.state.evaluated ? cache :
        this.state.operated ? prevExpr.slice(0, -1) + opera :
          this.state.expr === '0' ? cache :
            this.state.expr + cache),
      input: opera,
      evaluated: false,
      operated: true
    })
  }

  equals = (e) => {
    const evaluate = eval;
    this.setState({
      input: evaluate(this.state.expr + this.state.input),
      expr: this.state.expr + this.state.input,
      evaluated: true
    })
  }

  handleDecimal = (dec) => {
    if (!/[.]/g.test(this.state.input.toString())) {
      this.setState({
        input: this.state.input + dec
      })
    }
  }

  handleClick = (e) => {
    const button = e.target.innerHTML;
    this.setState({
      input: this.state.input === '0' ? button :
        operation.test(this.state.input) ? button :
          checkEndOfOp.test(this.state.expr) &&
            !/[.]/g.test(this.state.input) ? this.state.input + button :
            /[0-9]/.test(button) ? this.state.input + button :
              this.state.input,
      operated: false
    })
    if (operation.test(button)) {
      this.operation(button)
    }
    switch (e.target.id) {
      case 'clear':
        this.reset();
        break;
      case 'equals':
        this.equals();
        break;
      case 'decimal':
        this.handleDecimal(e.target.innerHTML);
        break;
      default:
        break;
    }
  }

  handleChange = (e) => {
    e.target.value = this.state.expr
  }

  render() {
    return (
      <div className="calculatorContainer">
        <div id="calculator">
          <div id="screen">
            <input onChange={this.handleChange} className="col-12 text-right text-danger" id="info" value={this.state.expr} />
            <input onChange={this.handleChange} className="col-12 text-right text-warning" id="displayCalc" value={this.state.input} />
          </div>
          <div className="row m-0">
            <button className="col-3 calcBtn btn-danger" onClick={this.handleClick} id="clear">C</button>
            <button className="col-3 calcBtn" onClick={this.handleClick} id="divide">/</button>
            <button className="col-3 calcBtn" onClick={this.handleClick} id="multiply">*</button>
            <button className="col-3 calcBtn" onClick={this.handleClick} id="subtract">-</button>
          </div>

          <div className="col-12 row p-0 m-0">
            <div className="col-9 row p-0 m-0">
              <div className=" col-12 row m-0 p-0">
                <button className="col-4 calcBtn" onClick={this.handleClick} id="seven">7</button>
                <button className="col-4 calcBtn" onClick={this.handleClick} id="eight">8</button>
                <button className="col-4 calcBtn" onClick={this.handleClick} id="nine">9</button>
              </div>
              <div className="col-12 row p-0 m-0">
                <button className="col-4 calcBtn" onClick={this.handleClick} id="four">4</button>
                <button className="col-4 calcBtn" onClick={this.handleClick} id="five">5</button>
                <button className="col-4 calcBtn" onClick={this.handleClick} id="six">6</button>
              </div>
            </div>
            <div className="col-3 row p-0 m-0">
              <button className="col-12 p-0 m-0 plus" onClick={this.handleClick} id="add">+</button>
            </div>
          </div>

          <div className="col-12 row p-0 m-0">
            <div className="col-9 row p-0 m-0">
              <div className=" col-12 row m-0 p-0">
                <button className="col-4 calcBtn" onClick={this.handleClick} id="three">3</button>
                <button className="col-4 calcBtn" onClick={this.handleClick} id="two">2</button>
                <button className="col-4 calcBtn" onClick={this.handleClick} id="one">1</button>
              </div>
              <div className="col-12 row p-0 m-0">
                <button className="col-8 calcBtn" onClick={this.handleClick} id="zero">0</button>
                <button className="col-4 calcBtn" onClick={this.handleClick} id="decimal">.</button>
              </div>
            </div>
            <div className="col-3 row p-0 m-0">
              <button className="col-12 p-0 m-0 plus" onClick={this.handleClick} id="equals">=</button>
            </div>
          </div>
          <div className="text-center mt-3 pb-4">
            <button className="calcExitBtn btn-danger"><Link to="/">EXIT</Link></button>
          </div>
        </div>
      </div>
    )
  }
}

export default Calculator