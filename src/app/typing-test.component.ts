import { Component } from '@angular/core';
import { RandomWordsComponent } from './random-words/random-words.component';

@Component({
  selector: 'typing-test',
  templateUrl: './typing-test.component.html',
  styleUrls: ['./typing-test.component.css']
})
export class TypingTest {

  constructor() {
    this.word = new RandomWordsComponent().generateWords();
    this.counter = 0;
  }

  isTimerOn = false;
  isTestFinished = false;


  word:string;
  counter:number;


  analyzeResults() {
    this.isTestFinished = true;
    return this.counter;
  }

  changeWord() {
    var oldWord = this.word;
    this.word = new RandomWordsComponent().generateWords();
    if (this.word != oldWord && this.word != undefined) {
      return true;
    } else {
      return false;
    }
  }

  verifyTypedWord() {
    var letter = String($('#input').val());
    if (letter) {
      if (this.word == letter) {
        this.changeWord();
        $('#input').val("");
        this.counter++;
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  startTimer() {
    this.counter = 0;
    this.isTestFinished = false;
    this.isTimerOn = true;

    var obj = this;
    var i = 60;

    var timer = setInterval(function() {
      $('#timer').text(i);
      i--;
      if (i == 0) {
        obj.isTimerOn = false;
        obj.isTestFinished = true;
      }
    }, 1000);

    setTimeout(function() {
      clearInterval(timer);
    }, 61000);

    return true;
  }

}
