import React, { Component } from 'react';

import '../../css/style.css';
import testImage from '../../assets/test.png';

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   loggedIn: false
    // };
    this.testFunction = this.testFunction.bind(this);
  }

  testFunction() {
    // this.setState({
    //   loggedIn: true
    // });
    console.log(this.props);
  }
  render() {
    return (
      <div>
        Hello World
        <img src={testImage} alt="Commander Keen" />
      </div>
    );
  }
}

export default App;
