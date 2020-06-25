// Info.js

import React, { Component, Fragment } from 'react';

class Info extends Component {

    render(){
        return(
            <Fragment>
                <div className="spellBox">
                    <section>
                        <h2>{this.props.name}</h2>          
                        <p>Materials needed: {this.props.material}</p>
                        <p>{this.props.desc}</p>
                        <p>{this.props.higher}</p>
                    </section>
                </div>     
            </Fragment>
        )                         
    }      
}

export default Info;