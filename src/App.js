import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Stream from './Components/StreamingComponent';
import Home from './Components/HomeComponent';
import Main from './Components/MainComponent';

import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Main/>
      </BrowserRouter>
    );
  }
}

export default App;
