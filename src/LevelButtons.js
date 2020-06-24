// LevelButtons.js

import React, { Component } from 'react';

class LevelButtons extends Component {
    render(){
        return(
            <div className="spellLevel">
              <button onClick={this.props.storeLevel} disabled={this.props.alsoDisabled} value="0">Level 0</button>
              <button onClick={this.props.storeLevel} disabled={this.props.alsoDisabled} value="1">Level 1</button>
              <button onClick={this.props.storeLevel} disabled={this.props.alsoDisabled} value="2">Level 2</button>
              <button onClick={this.props.storeLevel} disabled={this.props.alsoDisabled} value="3">Level 3</button>
              <button onClick={this.props.storeLevel} disabled={this.props.alsoDisabled} value="4">Level 4</button>
              <button onClick={this.props.storeLevel} disabled={this.props.alsoDisabled} value="5">Level 5</button>
              <button onClick={this.props.storeLevel} disabled={this.props.alsoDisabled} value="6">Level 6</button>
              <button onClick={this.props.storeLevel} disabled={this.props.alsoDisabled} value="7">Level 7</button>
              <button onClick={this.props.storeLevel} disabled={this.props.alsoDisabled} value="8">Level 8</button>
              <button onClick={this.props.storeLevel} disabled={this.props.alsoDisabled} value="9">Level 9</button>
            </div>
        )
    }
}

export default LevelButtons;