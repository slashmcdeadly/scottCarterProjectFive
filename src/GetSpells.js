// GetSpells.js

import React, { Component } from 'react';
// import GetUrl from './GetUrl';
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
            // this.state.charClass.filter( (data) => {
            //     return (
            //     data.name === 'Wizard' ? <p>{data.name}</p> : null  
            // )})
            // const classes = [];

            // for (let key in this.state.charClass) {
            //     classes.push({
            //         name: response.data.classes,
            //         id: key
            //     })
            // };
            for (let i = 0; i > this.state.charClass.length; i++){
                console.log(i)
            }

            
        })
    }

    
    render(){
        return(
            <div className="spellBox">
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
