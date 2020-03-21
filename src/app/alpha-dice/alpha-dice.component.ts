import { Component, OnInit } from '@angular/core';
import { STRING_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-alpha-dice',
  templateUrl: './alpha-dice.component.html',
  styleUrls: ['./alpha-dice.component.scss']
})
export class AlphaDiceComponent implements OnInit {

  selectedLetter = '';

  alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  constructor() { }

  ngOnInit() {
    this.rollDice();
  }

  rollDice() {
    const baseChar = ('A').charCodeAt(0);
    const charVal = Math.floor(Math.random() * 26);

    this.selectedLetter = String.fromCharCode(baseChar + charVal);
  }

  setLetter(letter: string) {
    this.selectedLetter = letter;
  }

}
