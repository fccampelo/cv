import React, { Component } from 'react';
import { connect }          from "react-redux";

//components
import Main       from './containers/Main';
import Aside      from './components/Aside';
import Curriculum from './components/Curriculum';
class App extends Component {

  render() {
    return (
      <Curriculum>
        <Aside />
        <Main />
      </Curriculum>
    )
  }
}

export default App;

