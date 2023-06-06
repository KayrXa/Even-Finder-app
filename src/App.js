import React, {Fragment, Component} from 'react';
import './App.css';
import Navbar from './Component/layout/Navbar';
import Events from './Component/events/Events';

class App extends Component {
  render(){
    const loading = false;
    const name = "Admin";
    return (
      <div className="App">
        
        <Navbar />
        Event Finder app
          {loading ? <h3>loading</h3> : <h1>Hi {name}</h1> }
        <div className='container'> 
          <Events /> 
        </div>
       
        

      </div>

    );
  }

}

export default App;
