import React, { Component } from 'react';
import CharSheet from './subcomponents/charSheet';
//Vishal Nigam

// let globalVars = {
//
// }

class pcStats extends Component{
  constructor(){
    super();
    this.state={

    };

  }

  render(){
    return(
    <div>
      <div>
        <p>Character Sheet</p>
      </div>
      <div>
        <CharSheet/>
      </div>
    </div>
    );
  }

}

export default pcStats;
