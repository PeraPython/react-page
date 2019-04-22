import React, { Component } from 'react';
import Header from './layout/js/Header';
import Main from './layout/js/Main';
import Footer from './layout/js/Footer';
import logo from './image001.png';
import './App.css';

class App extends Component {
  render() {
    return (
        <React.Fragment>
          <img src={logo} alt="logo" id="logo" />
          <div className="App">
            <Header />
            <Main />
            <Footer />
          </div>
        </React.Fragment>
    )
  };
}

export default App;
