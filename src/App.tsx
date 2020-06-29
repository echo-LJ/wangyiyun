import React from 'react';
import Router from './router/Router';
import './App.css';

class App extends React.Component {
  public componentDidMount():void {
    // 
  }
  public render() {
    return (
      <div className="App">
        <Router />
        {/* {Router} */}
      </div>
    );
  }
}

export default App;
