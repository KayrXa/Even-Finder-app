import React, {Fragment, Component} from 'react';
import './App.css';
import Navbar from './Component/layout/Navbar';

class App extends Component {
  render(){
    const loading = false;
    const name = "Admin";
    return (
      <div className="App">
        <Navbar></Navbar>
          Event Finder app
          <h2>{loading ? <h3>loading</h3> : <h1>Hi {name}</h1> }</h2>
      </div>

    );
  }

}

export default App;
