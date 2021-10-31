import React, { Component } from 'react';
// import logo from './logo.svg';
import logo from './Standard_Chartered_(2021).svg.png';
import './App.css';
import digismart from './DigiSmart.png';
import platinum from './Platinum.png';
import gold from './Gold.png';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="logo" alt="logo" />
          <h2 id="h2">Welcome to Standard Chartered</h2>
        </div>
        <p className="App-intro">
          These are the range of products we offers.
        </p>
        <div id="demo" className="carousel slide" data-ride="carousel">
            <ul className="carousel-indicators">
              <li data-target="#demo" data-slide-to="0" className="active"></li>
              <li data-target="#demo" data-slide-to="1"></li>
              <li data-target="#demo" data-slide-to="2"></li>
            </ul>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={digismart} alt="DigiSmart"></img>
            </div>
            <div className="carousel-item">
              <img src={platinum} alt="Platinum"></img>
            </div>
            <div className="carousel-item">
              <img src={gold} alt="Gold"></img>
            </div>
          </div>
            <a className="carousel-control-prev" href="#demo" data-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
              <span className="carousel-control-next-icon"></span>
            </a>
        </div>
        
      </div>
    );
  }
}

export default App;
