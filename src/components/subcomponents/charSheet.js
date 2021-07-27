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

      level: 1,

      //Dependent stats
      carryCap: null,
      proficiency: null,
      speed: null,
      passPerception: null,
      passInsight: null,
      curHP: 0,
      tempHP: 0,

      //Other stats
      inspiration: null,
      skills[]: null,

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

  generateDerivativeStats(){
    var armorClass = 10;
    var passivePerception = 10;
    var passiveInsight = 10;

  }

  addSkill(skill){
    var temp = this.state.skills;
    temp.push(skill);
    this.setState({skills: temp});
  }

  skills(){
    skillList = this.state.skills;
    skillRender[];
    for(let skill of skillList){
      skillRender.push(<li key={skill}>{skill} +2</li>);
    }
    this.setState({skills: skillRender};
      // Add way to input skills, and display them in a variable manner
      // (probably with a custom render object)
  }

  characterTraits(){
    return(
      <div>
      //Name, level, class, Paragon path, Epic destiny, total XP,
      //Race, Size, Age, Sex, Height, Weight, Alignment, Deity
      <input type="text" name='nameIn' onChange={this.handleChange}/>
      <input list="Alignment" name='alignmentIn' onChange={this.handleClick}/>

      <datalist id="Alignment">
        <option value="Lawful Good">
        <option value="Neutral Good">
        <option value="Chaotic Good">
        <option value="Lawful Neutral">
        <option value="True Neutral">
        <option value="Chaotic Neutral">
        <option value="Lawful Evil">
        <option value="Neutral Evil">
        <option value="Chaotic Evil">
      </datalist>
      </div>
    );
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
            <button name='d20' onClick={this.handleStatRolls}>d20</button>
            <button name='4d6dl' onClick={this.handleStatRolls}>4d6 drop lowest</button>
            </div>
            : <div/>
          }
          </div>
      </div>
        <div>
        <p>Strength: {this.state.str}</p>
        <p>Dexterity: {this.state.dex}</p>
        <p>Constitution: {this.state.con}</p>
        <p>Intelligence: {this.state.int}</p>
        <p>Wisdom: {this.state.wis}</p>
        <p>Charisma: {this.state.cha}</p>
        </div>
    </div>
  );
  }

}

export default charSheet;
