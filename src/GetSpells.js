// GetSpells.js

import React, { Component } from 'react';
import axios from 'axios';


class GetSpells extends Component {

    constructor(){
        super();
        this.state = {
            spellInfo: '',
            charClass: []
        }
    }

    componentDidMount(){ 
        axios({
            url: this.props.url,
            method: 'GET',
            responseType: 'json',
        }).then( (response) => {
            this.setState({
                spellInfo: response.data,
                charClass: [response.data.classes]
            });
            for (let i = 0; i > this.state.charClass.length; i++){
                console.log(i)
            }
        })
    }

    render(){
        return(
            <div className="spellBox">
                <div onClick={this.props.closeWindow}>
                    <p>X</p>
                </div>
                <h2>{this.state.spellInfo.name}</h2>
                <h3>Level {this.state.spellInfo.level}</h3>
                

                <p>Materials needed: {this.state.spellInfo.material}</p>
                <p>{this.state.spellInfo.desc}</p>
                <p>{this.state.spellInfo.higher_level}</p>
            </div>       
        )                         
    }
}

export default GetSpells;
