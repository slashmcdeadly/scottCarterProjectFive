// LevelButtons.js

import React, { Component } from 'react';

class LevelButtons extends Component {
    render(){
        return(
            <div className="spellLevel">
              <button onClick={this.props.storeLevel} disabled={this.props.alsoDisabled} value="0">0</button>
              <button onClick={this.props.storeLevel} disabled={this.props.alsoDisabled} value="1">1</button>
              <button onClick={this.props.storeLevel} disabled={this.props.alsoDisabled} value="2">2</button>
              <button onClick={this.props.storeLevel} disabled={this.props.alsoDisabled} value="3">3</button>
              <button onClick={this.props.storeLevel} disabled={this.props.alsoDisabled} value="4">4</button>
              <button onClick={this.props.storeLevel} disabled={this.props.alsoDisabled} value="5">5</button>
              <button onClick={this.props.storeLevel} disabled={this.props.alsoDisabled} value="6">6</button>
              <button onClick={this.props.storeLevel} disabled={this.props.alsoDisabled} value="7">7</button>
              <button onClick={this.props.storeLevel} disabled={this.props.alsoDisabled} value="8">8</button>
              <button onClick={this.props.storeLevel} disabled={this.props.alsoDisabled} value="9">9</button>
            </div>
        )
    }
}

export default LevelButtons;