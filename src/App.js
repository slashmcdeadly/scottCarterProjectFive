import React, { Component } from 'react';
// import axios from 'axios';
import Spells from './Spells'
import './App.css';


class App extends Component {

  // constructor(){
  //   super();
  //   this.state = {
  //     spells: [],
  //   }
  // }


  render(){
    return (
      <div className="App wrapper">
        <h1>Spell Compendium</h1>
        <div className='spells'>
          <Spells />
        </div>

      </div>
    );
  }
}

export default App;
