// Spells.js

import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Info from './Info';

class Spells extends Component{

    constructor(){
        super();
        this.state = {
            spellInfo: [],
            name: '',
            materials: '',
            description: '',
            higherLevel: '',
            active: ''
        }
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
                isShowing: this.state.isShowing ? false : true,
                active: this.state.active ? false : true
            });
        })
    }

    closeWindow = () => {
        this.setState({
            isShowing: this.state.isShowing ? false : true
        })   
    }
    
    render(){
        return(
            <Fragment>
                <button onClick={this.spellInfo} value={this.props.url} >{this.props.name}</button>

                <div>
                    { this.state.isShowing ? 
                        (<Info name={this.state.name} material={this.state.materials} desc={this.state.description} higher={this.state.higherLevel} closeWindow={this.closeWindow} reset={this.props.reset}/>):null }
                </div>

            </Fragment>
        )
    }
}

export default Spells;