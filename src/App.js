import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './Navbar.js';
class App extends Component {
  render() {
    return (

      <div class='main'>
           <div className='row top'>

                <div className='logo col-md-4'> logo</div>
                <center><div className='header col-md-8'><h1>Welcome</h1></div></center>
                  <Navbar />
           </div>





      </div>
    );
  }
}

export default App;
