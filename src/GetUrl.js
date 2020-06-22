// GetUrl.js

import React, { Component, Fragment } from 'react';
// import axios from 'axios';
import GetSpells from "./GetSpells";
import './App.css';
// import Spells from './Spells';


class GetUrl extends Component {

  constructor(){
    super();
    this.state = {
      url: '',
      isShowing: false
    }
  }

  handleClick = (e) => {
    //   console.log(e.target.value);
      this.setState({
          url: "https://www.dnd5eapi.co" + e.target.value,
          isShowing: this.state.isShowing ? false : true
      })
    }

  closeWindow = () => {
    this.setState({
      isShowing: this.state.isShowing ? false : true
    })
  }


    render(){
        return (
            <Fragment>
                <button onClick={this.handleClick} value={this.props.value}>{this.props.name}</button>
                {
                  this.state.isShowing ? <GetSpells url={this.state.url} closeWindow={this.closeWindow}/>: null
                }

            </Fragment>
        )
    }
}


export default GetUrl;