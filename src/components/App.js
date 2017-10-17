import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import LaunderingTargetList from './LaunderingTargetList'
import LaunderingTargetSearch from "./LaunderingTargetSearch";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'All'
    }
  }

  setSearchTerm = (title) => {
    this.setState({title});

  };


  render() {
    const {title} = this.state;
    return (
      <div>
        <LaunderingTargetSearch setSearchTerm={this.setSearchTerm} title={title}/>
        <LaunderingTargetList />
      </div>
    )
  }
}

export default App;
