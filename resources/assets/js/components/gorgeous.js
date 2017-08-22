import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Gorgeous extends Component {
  constructor () {
    super()
    this.state = { opinion: false }
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Am i gorgeous?</h4>
        </div>
        <div className="card-block">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-success"
              onClick={() => this.setState({ opinion: 'yes' })}>yes</button>
            <button type="button" className="btn btn-danger"
              onClick={() => this.setState({ opinion: 'no' })}>no</button>
          </div>
          <p className="card-text">{reaction(this.state.opinion)}</p>
        </div>
      </div>
    )
  }
}

function reaction (opinion) {
  if (!opinion) return 'hm? 😙'
  if (opinion === 'yes') return 'well thank you. 😊'
  return 'how mean! 😢'
}

document.addEventListener('DOMContentLoaded', function(){ 
  if (document.getElementById('gorgeous')) {
    ReactDOM.render(<Gorgeous />, document.getElementById('gorgeous'));
  }
}, false);
