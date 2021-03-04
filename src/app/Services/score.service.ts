import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  choices: any[] = [];
  answers: any[] = [];
  correctAnswers: any[] = [];
  score: number = 0;

  constructor() { }

  collectChoicesAnswers(choice, answer) {
    this.choices.push(choice);
    this.answers.push(answer);
  }

  scoreQuiz() {
    for (let i = 0; i < this.answers.length; i++) {
      if (this.choices[i] === this.answers[i]) {
        this.correctAnswers.push(this.choices[i]);
        this.score++;
      }
    }
    console.log(`the score is: ${this.score}`)
    return this.score;
  }

}
