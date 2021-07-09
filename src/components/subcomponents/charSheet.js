import React, { Component } from 'react';
//Vishal Nigam

class charSheet extends Component{

  constructor(){
    super();
    this.state = {
      //Basic stats
      str: 0,
      dex: 0,
      con: 0,
      int: 0,
      wis: 0,
      cha: 0,
      ac: 0,

      level: 0,
      //Dependent stats
      carryCap: null,
      proficiency: null,
      inspiration: null,
      speed: null,
      passPerception: null,
      passInsight: null,
      curHP: 0,
      tempHP: 0,
    }
}

  //Change an individual stat by the given value
  setStat(val, stat){
    switch (stat) {
      case "str":
        this.str+=val;
        return this.state.str;

      case "dex":
        this.dex+=val;
        return this.state.dex;

      case "con":
        this.con+=val;
        return this.state.con;

      case "int":
        this.int+=val;
        return this.state.int;

      case "wis":
        this.wis+=val;
        return this.state.wis;

      case "cha":
        this.cha+=val;
        return this.state.cha;

      default:
      alert("Error: Invalid stat.");
      return null;

    }
  }


  render(){
    return(
    <div>
    <p>Strength: {this.state.str}</p>
    <p>Dexterity: {this.state.dex}</p>
    <p>Constitution: {this.state.con}</p>
    <p>Intelligence: {this.state.int}</p>
    <p>Wisdom: {this.state.wis}</p>
    <p>Charisma: {this.state.cha}</p>
    </div>
  );
  }

}

export default charSheet;
