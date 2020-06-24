import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Spells from './Spells'
import './App.css';
import ClassButtons from './ClassButtons';
import LevelButtons from './LevelButtons'

class App extends Component {

  constructor(){
    super();
    this.state = {
      spells: [],
      charClass: '',
      isShowing: false,
      isAlsoShowing: false,
      disabled: false,
      alsoDisabled: false,
    }
  }


  handleClick = (charClass) => {
    // toggle the isShowing
    charClass = charClass.target.value;
    this.setState({
      charClass,
      isShowing: this.state.isShowing ? false : true,
      disabled: true
    })     
  }

  storeLevel = (event) => {
    this.setState({
      level: event.target.value,
      isAlsoShowing: this.state.isAlsoShowing ? false : true,
      alsoDisabled: true,
    })
    // call the api with the button value as part of the search
    axios({
      url: "https://www.dnd5eapi.co/api/classes/" + this.state.charClass + "/levels/" + event.target.value +"/spells/",
      method: 'GET',
      responseType: 'json',
    }).then( (spells) => {
      spells = spells.data.results;
      this.setState({
        spells
      })
    })
  }

  reset = () => {
    window.location.reload();
  }

  render(){
    return (
      <div className="App">
        <h1>Spell Compendium</h1>
        <section className="options wrapper">
          <ClassButtons handleClick={this.handleClick} disabled={this.state.disabled}/>

          { this.state.isShowing ? 
          
            <LevelButtons storeLevel={this.storeLevel} alsoDisabled={this.state.alsoDisabled}/>:null }

          <div className="spells wrapper">
            { this.state.isAlsoShowing ?
            (this.state.spells.map( (spell, index) => {
              return (
                <Fragment key={index}>
                  {
                    <Spells active={this.state.active} name={spell.name} url={spell.url} level={this.state.level} reset={this.reset}/>
                  }
                </Fragment>
              )
            })):null
            }
          </div>
        </section>
      </div>
    );
  }
}

export default App;
