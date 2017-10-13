import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/style.css';
import testImage from '../assets/test.png';

export default class Hello extends Component {
  render() {
    return(
      <div>
      Hello World
        <img src = { testImage } alt='Commander Keen'/>
      </div>
    );
  }
}

render (<Hello />, document.getElementById('app'));
