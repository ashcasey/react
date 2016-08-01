import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="container text-center">
        <div className="center">
          <div className="row bottom">
            <div className="header">Ashley Casey</div>
          </div>
        </div>
          <div className="row">
            <div className="links">
              <a className="link-list" href="https://www.instagram.com/negativelyoptimistic/" target="_blank">Instagram</a>
              <a className="link-list" href="mailto:ashleymcasey@gmail.com">email</a>
              <a className="link-list" href="https://www.linkedin.com/in/ashleymcasey" target="_blank">LinkedIn</a>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
