import { Component, OnInit } from '@angular/core';
import { STRING_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-alpha-dice',
  templateUrl: './alpha-dice.component.html',
  styleUrls: ['./alpha-dice.component.scss']
})
export class AlphaDiceComponent implements OnInit {

  letter = '';

  constructor() { }

  ngOnInit() {
  }

  rollDice() {
    const baseChar = ('A').charCodeAt(0);
    const charVal = Math.floor(Math.random() * 26);

    this.letter = String.fromCharCode(baseChar + charVal);
  }

}
