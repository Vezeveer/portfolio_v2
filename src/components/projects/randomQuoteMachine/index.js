import React, { Component } from 'react';
import './index.css'

class RandomQuoteMachine extends Component {
  state = {
    quote: '',
    author: '',
    colors: [
      'primary', 'secondary', 'success', 'danger', 'warning', 'info'
    ],
    currentColor: 'primary'
  }
  getQuote = () => {
    fetch("https://api.myjson.com/bins/l8o22")
      .then(res => res.json())
      .then((data) => {
        const quote = data.quotes[Math.floor(Math.random() * 100)];
        this.setState({
          author: quote.author,
          quote: quote.quote
        });
      });

  }
  handleClick = () => {
    this.getQuote()
    this.colorChange()
  }
  componentDidMount() {
    this.getQuote()
    this.colorChange()
  }
  colorChange = () => {
    const color = this.state.colors[Math.floor(Math.random() * 5)]
    this.setState({
      currentColor: color
    })
  }
  render() {
    return (
      <div className="quote-container d-flex justify-content-center align-items-center">
        <div id="quote-box" className={"col-md-8 card bg-" + this.state.currentColor}>
          <div className="card-body text-center">
            <p id="text" className="blockquote card-text text-quote"><span id="span-qt">"</span>{this.state.quote}
            </p>
            <p id="author" className="text-right card-subtitle">- {this.state.author}</p>
            <a className="btn" href="twitter.com/intent/tweet" id="tweet-quote">tweet this!</a>
            <button id="new-quote" onClick={this.handleClick} className="btn btn-primary">Next Quote</button>
          </div>
        </div>
      </div>
    )
  }
}

export default RandomQuoteMachine