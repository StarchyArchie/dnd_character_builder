import React, { Component } from 'react';
import {customDie} from './dice';
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

      //Functional variables
      showOptions : "false",
    }
}

  handleStatRolls = (userInput) => {
    this.setStatsInOrder(userInput.target.name);
  };

  handleClick = () =>{
    if(this.state.showOptions == "true"){
      this.setState({showOptions: "false"});
    }
    else{
      this.setState({showOptions: "true"});
    }

  }

  roll(numDice, diceSides, dropLowest){
    var result = 0;
    if(dropLowest){
      var rolls;
      rolls = new Array(numDice);
      for(var i=0; i<numDice; i++){
        let diceRoll = customDie(diceSides);
        result+=diceRoll;
        rolls[i] = diceRoll;
      }
      //Find smallest array element (lowest roll)
      var temp = rolls[0];
      for(var j=0; j<rolls.length; j++){
        if(temp<rolls[j]){
          temp = rolls[j];
        }
      }
      //Subtract lowest roll from result
      result = result - temp;
    }
    else{
      for(i=0; i<numDice; i++){
        result= result + customDie(diceSides);
        console.log("Result (charSheet): ", result);
      }
    }
    return result;
  }

  //Change an individual stat by the given value
  setStat(val, stat){
    var temp = 0;
    switch (stat) {
      case "str":
        this.setState({str: val});
        return this.state.str;

      case "dex":
      this.setState({dex: val});
        return this.state.dex;

      case "con":
      this.setState({con: val});
        return this.state.con;

      case "int":
        this.setState({int: val});
        return this.state.int;

      case "wis":
        this.setState({wis: val});
        return this.state.wis;

      case "cha":
        this.setState({cha: val});
        return this.state.cha;

      default:
      alert("Error: Invalid stat.");
      return null;

    }
  }

  setStatsInOrder(type){
    var dice = 0;
    var sides = 0;
    var dl = false;
    switch (type) {
      case '3d6':
        dice = 3;
        sides = 6;
        break;
      case '4d6dl':
        dice = 4;
        sides = 6;
        dl = true;
        break;
      case 'd20':
        dice = 1;
        sides = 20;
        break;
      default:
        dice = 3;
        sides = 6;
        dl = false;
    }
    console.log("dice: "+ dice+ " sides: "+ sides+" dl: "+dl);
   this.setStat(this.roll(dice, sides, dl), 'str');
   this.setStat(this.roll(dice, sides, dl), 'dex');
   this.setStat(this.roll(dice, sides, dl), 'con');
   this.setStat(this.roll(dice, sides, dl), 'int');
   this.setStat(this.roll(dice, sides, dl), 'wis');
   this.setStat(this.roll(dice, sides, dl), 'cha');
  }


  render(){
    return(
    <div>
      <div>
      <button onClick = {this.handleClick}>{this.state.showOptions == 'true' ? 'Hide options' : 'Roll for Stats' }</button>
          <div>
          {this.state.showOptions == 'true' ?
            <div>
            <button name='3d6' onClick={this.handleStatRolls}>3d6</button>
            <button>d20</button>
            <button>4d6 drop lowest</button>
            </div>
            : <div/>
          }
          </div>
      </div>
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
