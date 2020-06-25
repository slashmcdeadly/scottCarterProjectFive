import React, { Component, Fragment } from "react";
import axios from "axios";
import ClassButtons from "./ClassButtons";
import LevelButtons from "./LevelButtons";
import Info from "./Info";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      spells: [],
      charClass: "",
      isShowing: false,
      isAlsoShowing: false,
      spellBoxShowing: false,
      resetShowing: false,
      disabled: false,
      name: "",
      materials: "",
      description: "",
      count: 0,
      higherLevel: "",
      changingText:
        "Choose a Dungeons and Dragons 5th Edition Character Class and Spell Level to see the spells for that class and spell level. Click on the spell name to show spell info!",
      levelDisplay: "",
    };
  }
  // change document title
  componentWillMount() {
    document.title = "Spell Compendium";
  }

  // set the state for the character class to used in an axios call
  handleClick = (charClass) => {
    charClass = charClass.target.value;
    this.setState({
      charClass,
      isShowing: true, //show level buttons
      disabled: true, //disable the buttons to hide them
    });
  };
  // store the level value to be used in axios call
  storeLevel = (event) => {
    this.setState({
      isAlsoShowing: true,
      levelDisplay: "Level " + event.target.value,
      resetShowing: true,
    });
    // call the api with the button values as part of the search
    axios({
      url:
        "https://www.dnd5eapi.co/api/classes/" +
        this.state.charClass +
        "/levels/" +
        event.target.value +
        "/spells/",
      method: "GET",
      responseType: "json",
    }).then((spells) => {
      // set states to
      this.setState({
        spells: spells.data.results,
        changingText: this.state.charClass, //display class
        count: spells.data.count, //get number of spells to display 'no spells' when there's no spells
      });
    });
  };

  // makes an api call using the specific spell url as a partametes
  spellInfo = (e) => {
    window.scroll({ top: 0 });
    axios({
      url: "https://www.dnd5eapi.co" + e.target.value,
      method: "GET",
      responseType: "json",
    }).then((spell) => {
      const spellName = spell.data;
      this.setState({
        // this set all the states for the spellbox
        name: spellName.name,
        materials: spellName.material,
        description: spellName["desc"],
        higherLevel: spellName["higher_level"],
        spellBoxShowing: true,
      });
    });
  };

  // reloads the page to change the class
  reset = () => {
    window.location.reload();
  };

  render() {
    return (
      <div className="App">
        <main className="wrapper flexContainer">
          <section className="instructions">
            {/* site info */}
            <h1>Spell Compendium</h1>
            <h3>{this.state.changingText}</h3>
            <h4>{this.state.levelDisplay}</h4>

            {/* spell info */}
            {this.state.spellBoxShowing ? (
              <Info
                name={this.state.name}
                material={this.state.materials}
                desc={this.state.description}
                higher={this.state.higherLevel}
              />
            ) : null}

            {/* reset button */}
            {this.state.resetShowing ? (
              <button className="reset" onClick={this.reset}>
                Change Class
              </button>
            ) : null}
          </section>
          <section className="options ">
            <div className="levelClass">
              {/* Class buttons */}
              <ClassButtons
                handleClick={this.handleClick}
                disabled={this.state.disabled}
              />

              {/* level buttons */}
              {this.state.isShowing ? (
                <LevelButtons storeLevel={this.storeLevel} />
              ) : null}
            </div>

            <div className="spells">
              {/* spell buttons */}
              {this.state.isAlsoShowing
                ? // map out the spells and display them
                  this.state.spells.map((spell, index) => {
                    return (
                      <Fragment key={index}>
                        <button onClick={this.spellInfo} value={spell.url}>
                          {spell.name}
                        </button>
                      </Fragment>
                    );
                  })
                : null}
              {/* no spells display */}
              {this.state.count === 0 && this.state.isAlsoShowing ? (
                <h2>NO SPELLS</h2>
              ) : null}
            </div>
          </section>
        </main>
        {/* footer */}
        <footer>
          This site was made by{" "}
          <a href="https://scottcarterdev.com">Scott Carter</a>
        </footer>
      </div>
    );
  }
}

export default App;
