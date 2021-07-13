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
      // charSheet : CharSheet,
      showOptions : "false",

    };

  }

  handleChange = (userInput) => {
    this.setState({ [userInput.target.name]: userInput.target.value });
  };

  handleClick = () =>{
    if(this.state.showOptions == "true"){
      this.setState({showOptions: "false"});
    }
    else{
      this.setState({showOptions: "true"});
    }

  }

  rollStatsInOrder = (type) =>{
    switch (type) {
      case '3d6':
        // CharSheet.setStat('str');
        break;
      default:

    }
  }

  render(){
    return(
    <div>
      <div>
        <p>Character Sheet</p>
      </div>
        <div>
        <button onClick = {this.handleClick}>{this.state.showOptions == 'true' ? 'Hide options' : 'Roll for Stats' }</button>
        <button>{this.state.showOptions == 'true' ? '3d6' : ''}</button>
        <button>{this.state.showOptions == 'true' ? 'd20' : ''}</button>
        <button>{this.state.showOptions == 'true' ? '4d6 drop lowest' : ''}</button>
        </div>
      <div>
        <CharSheet/>
      </div>
    </div>
    );
  }

}

export default pcStats;
