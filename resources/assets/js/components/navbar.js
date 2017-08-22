import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link as RouterLink } from 'react-router-dom'

export default function Navbar ({ app }) {
  if (app) Link = RouterLink
  return (
    <ul className="nav">
      <li className="nav-item">
        <Link className="nav-link active" to="/">Main</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
    </ul>
  )
}

function Link (props) {
  return <a {...props} href={props.to}>{props.children}</a>
}

document.addEventListener('DOMContentLoaded', function(){
  if (document.getElementById('navbar')) {
      ReactDOM.render(<Navbar />, document.getElementById('navbar'));
  }
}, false);
