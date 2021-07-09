import React, { Component } from 'react';
//Vishal Nigam


class dice extends Component{

  //Custom random to imitate dice
  diceRand(max){
    var result;
    //Random integer between 0 and max -1
    result = Math.floor(Math.random(max));
    //Modifies result to be between 1 and max
    result+=1;
    return result;
  }

  //Rolling dice
  d20(){
    return diceRand(20);
  }

  d6(){
    return diceRand(6);
  }

  d4(){
    return diceRand(4);
  }

  d12(){
    return diceRand(12);
  }

  d100(){
    diceRand(100);
  }

  //Dice with a cusotom number of sides.
  customDie(sides){
    return diceRand(sides);
  }

}
