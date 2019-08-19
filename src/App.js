import React from 'react';
import reactElectronUpdater from '@jsxeu/core';

import logo from './logo.svg';
import './App.css';
import CustomButton from './components/custom-button/custom-button.component';


class App extends React.Component {
  checkForUpdate = () => {
    this.props.checkForUpdate().subscribe(response=>{
      console.log(response);
    })
  }
 
  download = () => {
    this.props.download().subscribe(response=>{
      console.log(response);
    })
  }
 
  install = () => {
    this.props.install().subscribe(response=>{
      console.log(response);
    })
    this.props.restart();
  }
 
  hasPendingUpdates = () => {
    console.log(this.props.hasPendingUpdates());
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Electron Updater 1.0
          </a>
        </header>
        <div>
        <div>
          <CustomButton onClick={()=>this.checkForUpdate()}>CheckForUpdate</CustomButton>
        
          <CustomButton onClick={()=>this.download()}>Download</CustomButton>
        
          <CustomButton onClick={()=>this.install()}>Install</CustomButton>
        
          <CustomButton onClick={()=>this.hasPendingUpdates()}>HasPendingUpdates</CustomButton>
        </div>
      </div>
      </div>
    );
  }
}
let releaseInfo = {
  user: 'salilvnair',
  repo: 'test-jsxeu',
  appName: 'test-jsxeu'
}
export default reactElectronUpdater(releaseInfo)(App);
