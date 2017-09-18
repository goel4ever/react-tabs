import React, { Component } from 'react';
import FaAutomobile from 'react-icons/lib/fa/automobile';
import FaBed from 'react-icons/lib/fa/bed';
import FaPlane from 'react-icons/lib/fa/plane';
import FaSpaceShuttle from 'react-icons/lib/fa/space-shuttle';
import Tabs from './tabs/Tabs'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const flag = true;
    let tabData = [
        {
          label: <FaAutomobile />,
          content: 'Something to do with Car'
        },
        {
          label: <FaBed />,
          content: 'Something to do with Stay'
        },
        {
          label: <FaPlane />,
          content: 'Something to do with Flight'
        },
        {
          label: <FaSpaceShuttle />,
          content: 'Something to do with Space'
        }
    ];

    return (
      flag ? 
      <Tabs data={tabData} />
      :
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
