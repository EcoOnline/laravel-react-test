import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/navbar'
import Main from './views/main'
import About from './views/about'

export default function App () {
  return (
    <Router>
      <div>
        <Navbar app />
        <div className="row justify-content-center p-5">
          <Route exact path="/" component={Main}/>
          <Route path="/about" component={About}/>
        </div>
      </div>
    </Router>
  )
}

document.addEventListener('DOMContentLoaded', function(){
  if (document.getElementById('app')) {
      ReactDOM.render(<App />, document.getElementById('app'));
  }
}, false);
