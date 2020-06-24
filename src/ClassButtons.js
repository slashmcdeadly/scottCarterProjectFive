// ClassButtons.js

import React, { Component } from 'react';

class ClassButtons extends Component{

    render(){
        return(
            <div className="classButtons">
                <button onClick={this.props.handleClick} disabled={this.props.disabled} value="bard">Bard</button>
                <button onClick={this.props.handleClick} disabled={this.props.disabled} value="cleric">Cleric</button>
                <button onClick={this.props.handleClick} disabled={this.props.disabled} value="druid">Druid</button>
                <button onClick={this.props.handleClick} disabled={this.props.disabled} value="ranger">Ranger</button>
                <button onClick={this.props.handleClick} disabled={this.props.disabled} value="sorcerer">Sorcerer</button>
                <button onClick={this.props.handleClick} disabled={this.props.disabled} value="warlock">Warlock</button>
                <button onClick={this.props.handleClick} disabled={this.props.disabled} value="wizard">Wizard</button>
            </div>
        )
    }
}

export default ClassButtons;