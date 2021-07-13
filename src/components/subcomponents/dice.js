import React, { Component } from 'react';
//Vishal Nigam


class dice extends Component{

  //Custom random to imitate dice
  customDie(max){
    var result;
    //Random integer between 0 and max -1
    result = Math.floor(Math.random(max));
    //Modifies result to be between 1 and max
    result+=1;
    return result;
  }

  //Rolling dice
  d20(){
    return this.customDie(20);
  }

  d6(){
    return this.customDie(6);
  }

  d4(){
    return this.customDie(4);
  }

  d12(){
    return this.customDie(12);
  }

  d100(){
    this.customDie(100);
  }

}
export function customDie(sides){
  var result;
  //Random integer between 0 and max -1
  result = Math.floor(Math.random() * sides);
  //Modifies result to be between 1 and max

  result+=1;

  console.log("Result: ", result, sides);
  return result;
}

//export default dice;
