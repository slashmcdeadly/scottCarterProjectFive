import React, { Component, Fragment } from 'react';
import axios from 'axios';
import ClassButtons from './ClassButtons';
import LevelButtons from './LevelButtons';
import Info from './Info'
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      spells: [],
      charClass: '',
      isShowing: false,
      isAlsoShowing: false,
      spellBoxShowing: false,
      disabled: false,
      alsoDisabled: false,
      spellInfo: [],
      name: '',
      materials: '',
      description: '',
      higherLevel: '',
      changingText: 'Choose a Character Class and Spell Level to see the spells for that class and spell level. Click on the spell name to show spell info!',
      levelDisplay: ''
    }
  }


  handleClick = (charClass) => {
    charClass = charClass.target.value;
    this.setState({
      charClass,
      isShowing: true,
      disabled: true
    })     
  }

  storeLevel = (event) => {
    this.setState({
      isAlsoShowing: true,
      levelDisplay: "Level " + event.target.value,
      // alsoDisabled: true,
    })
    // call the api with the button value as part of the search
    axios({
      url: "https://www.dnd5eapi.co/api/classes/" + this.state.charClass + "/levels/" + event.target.value +"/spells/",
      method: 'GET',
      responseType: 'json',
    }).then( (spells) => {
      spells = spells.data.results;
      this.setState({
        spells,
        changingText: this.state.charClass,
      })
    })
  }

  spellInfo = (e) => {
    axios({
        url: "https://www.dnd5eapi.co" + e.target.value,
        method: 'GET',
        responseType: 'json',
    }).then( (spell) => {
        const spellName = spell.data;
        this.setState({
            spellInfo: spellName,
            name: spellName.name,
            materials: spellName.material,
            description: spellName['desc'],
            higherLevel: spellName['higher_level'],
            spellBoxShowing: true
        });
    })
  }

  reset = () => {
    window.location.reload();
  }

  render(){
    return (
      <div className="App">
        <main className="wrapper flexContainer">
          <section className="instructions">
            <h1>Spell Compendium</h1>
            <h3>{this.state.changingText}</h3>
            <h4>{this.state.levelDisplay}</h4>

            
            { this.state.spellBoxShowing ? 
              (<Info name={this.state.name} material={this.state.materials} desc={this.state.description} higher={this.state.higherLevel}/>):null }
           
            <button className="reset" onClick={this.reset}>Find Another Spell</button>

          </section>
          <section className="options ">
            <div className="levelClass">
              <ClassButtons handleClick={this.handleClick} disabled={this.state.disabled}/>

              { this.state.isShowing ? 
              <LevelButtons storeLevel={this.storeLevel} alsoDisabled={this.state.alsoDisabled}/>:null }
            </div>

            <div className="spells">
              { this.state.isAlsoShowing ?
              (this.state.spells.map( (spell, index) => {
                return (
                  <Fragment key={index}>
                    <button onClick={this.spellInfo} value={spell.url} >{spell.name}</button>         
                  </Fragment>
                )
              })):null
              }
            </div>
          </section>
        </main>
        
        <footer>This site was made by <a href="https://scottcarterdev.com">Scott Carter</a></footer>
      </div>
    );
  }
}

export default App;
