import React, { Component } from 'react';
import Auth from '../../../server/auth/auth';

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

  componentDidMount() {
    // const auth = new Auth();
    // auth.login();
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
