
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-ahorcado-dibujar',
//   standalone: true,
//   imports: [],
//   templateUrl: './ahorcado-dibujar.component.html',
//   styleUrl: './ahorcado-dibujar.component.css'
// })
// export class AhorcadoDibujarComponent {

// }

import { Component,  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges, } from '@angular/core';

@Component({
  selector: 'app-ahorcado-dibujar',
  standalone: true,
  imports: [],
  templateUrl: './ahorcado-dibujar.component.html',
  styleUrls: ['./ahorcado-dibujar.component.css']
})
export class AhorcadoDibujarComponent implements OnInit, OnChanges{
  @Input() guesses: string[] = [];
  @Input() question: string = '';
  @Output() gameFinished = new EventEmitter<{ mistakesRemaining: number, success: boolean }>();
  MAX_MISTAKES = 7;
  mistakesRemaining;
  success: boolean = false;
  constructor() {
    this.mistakesRemaining = this.MAX_MISTAKES;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes?.['question']?.currentValue &&
      changes?.['question'].currentValue !== changes?.['question'].previousValue
    ) {
      this.mistakesRemaining = this.MAX_MISTAKES;
      this.success = false;
    }
    const guessesCurrentValue = changes?.['guesses']?.currentValue;
    if (
      guessesCurrentValue &&
      guessesCurrentValue.length &&
      guessesCurrentValue !== changes['guesses'].previousValue
    ) {
      const char = [...guessesCurrentValue].pop();
      this.checkGuess(char);
    }
  }

  checkGuess(letter: string) {
    let didWin = true;
    this.mistakesRemaining -= this.wasGuessAMistake(letter);
    for (let i = 0; i < this.question.length; i++) {
      if (
        !this.guesses.find(
          (guess) => guess.toLowerCase() === this.question[i].toLowerCase()
        )
      ) {
        //aca donde debo de pasarle el dato si gano o perdio
        didWin = false;
        break;
      }
    }
    this.success = didWin;
    if (this.success || this.mistakesRemaining === 0) {
      this.gameFinished.emit({ mistakesRemaining: this.mistakesRemaining, success: this.success });
    }
  }

  wasGuessAMistake(letter: string) {
    for (let i = 0; i < this.question.length; i++) {
      if (this.question[i].toLowerCase() === letter.toLowerCase()) {
        return 0;
      }
    }
    return 1;
  }

  ngOnInit(): void {}

}
