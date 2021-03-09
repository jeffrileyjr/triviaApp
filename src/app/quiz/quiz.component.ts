import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Question } from '../models/question';
import { ScoreService } from '../Services/score.service';
import { TrivaAPIService } from '../Services/triva-api.service';
import { UserInfoService } from '../Services/user-info.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  questionSet1;
  questionSet2;
  questionSet3;
  questionSet4;
  questionSet5;
  questionNumber;
  finalScore;
  questionsAnswered: number = 0;
  hideBoard: boolean = true;
  showCat1Quest: boolean = false;
  showCat2Quest: boolean = false;
  showCat3Quest: boolean = false;
  showCat4Quest: boolean = false;
  showCat5Quest: boolean = false;
  hideWelcome: boolean = false;
  target = null;
  username = this.userService.username;

  fetchQuestions = async () => {
    await this.triviaService.getQuestions1();
    await this.triviaService.getQuestions2();
    await this.triviaService.getQuestions3();
    await this.triviaService.getQuestions4();
    await this.triviaService.getQuestions5();
    this.questionSet1 = this.triviaService.questionSet1;
    this.questionSet2 = this.triviaService.questionSet2;
    this.questionSet3 = this.triviaService.questionSet3;
    this.questionSet4 = this.triviaService.questionSet4;
    this.questionSet5 = this.triviaService.questionSet5;
    console.log(this.questionSet1);
  };

  getStarted() {
    this.hideWelcome = !this.hideWelcome;
    this.hideBoard = !this.hideBoard
  }
  showQuestionSeries1(i: number, event) {
    this.showCat1Quest = true;
    this.questionNumber = i;
    event.target.classList.add('disabled')
  }
  showQuestionSeries2(i: number, event) {
    this.showCat2Quest = true;
    this.questionNumber = i;
    event.target.classList.add('disabled')
  }
  showQuestionSeries3(i: number, event) {
    this.showCat3Quest = true;
    this.questionNumber = i;
    event.target.classList.add('disabled')
  }
  showQuestionSeries4(i: number, event) {
    this.showCat4Quest = true;
    this.questionNumber = i;
    event.target.classList.add('disabled')
  }
  showQuestionSeries5(i: number, event) {
    this.showCat5Quest = true;
    this.questionNumber = i;
    event.target.classList.add('disabled')
  }

  logAnswer(choice, answer) {
    this.questionsAnswered++;
    // answer = this.htmlDecode(answer)
    if (this.questionsAnswered < 20) {
      this.scoreService.collectChoicesAnswers(choice, answer);
      this.showCat1Quest = false;
      this.showCat2Quest = false;
      this.showCat3Quest = false;
      this.showCat4Quest = false;
      this.showCat5Quest = false;
      this.target = null;
    } else {
      this.scoreService.collectChoicesAnswers(choice, answer);
      this.scoreService.scoreQuiz();
      this.finalScore = this.scoreService.score;
      this.hideBoard = !this.hideBoard;
      this.showCat1Quest = false;
      this.showCat2Quest = false;
      this.showCat3Quest = false;
      this.showCat4Quest = false;
      this.showCat5Quest = false;
      this.router.navigateByUrl('/results');
    }
  }

  // below is needed to decode the html encoding
  htmlDecode(input: string): string {
    let text = new DOMParser().parseFromString(input, 'text/html');
    return text.documentElement.textContent;
  }

  constructor(
    private triviaService: TrivaAPIService,
    private scoreService: ScoreService,
    private userService: UserInfoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchQuestions();
    this.questionNumber = 0;
  }
}
