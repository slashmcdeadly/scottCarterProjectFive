//GetUrl.js

import React, { Component, Fragment } from 'react';
import axios from 'axios';
import './App.css';
import GetUrl from './GetUrl';


class Spells extends Component {

  constructor(){
    super();
    this.state = {
      spells: [],
    }
  }


  componentDidMount(){
    axios({
      url: 'https://www.dnd5eapi.co/api/spells',
      method: 'GET',
      responseType: 'json',
    }).then( (response) => {
      console.log(response);
      this.setState({
        spells: response.data.results,
      })
    })
  }

  

  // handleClick = (e) => {
  //     console.log(e.target.innerText)
  // }


  render(){
    return (
        <Fragment>

            {
            this.state.spells.map( (spell, index) => {
                return(
                <Fragment key={index}>
                    <GetUrl url={spell.url} value={spell.url} name={spell.name}/>
                </Fragment>
                )
            })
            }

        </Fragment>
    )
  }
}

export default Spells;