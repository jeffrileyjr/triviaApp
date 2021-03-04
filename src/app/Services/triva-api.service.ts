import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../models/question';
import { map } from "rxjs/operators";
import {shuffleArray, getRndInteger } from './util';

@Injectable({
  providedIn: 'root'
})
export class TrivaAPIService {
 
  questionSet1;
  questionSet2;
  questionSet3;
  questionSet4;
  questionSet5;


  constructor(private http: HttpClient) { }



   async getQuestions1()  {
    let category = getRndInteger(9, 33);
    const endpoint = `https://opentdb.com/api.php?amount=5&category=${category}&type=multiple`;
    const data = await (await fetch(endpoint)).json();
    // const data =  (await response).json();
    // console.log(data)
    const questions = data.results.map((question: Question) =>(
        {
            ...question,
            answers: shuffleArray([...question.incorrect_answers, question.correct_answer]),
        }
    ));
    console.log(questions);
    this.questionSet1 = questions;
  }
  async getQuestions2()  {
    let category = getRndInteger(9, 33);
    const endpoint = `https://opentdb.com/api.php?amount=5&category=${category}&type=multiple`;
    const data = await (await fetch(endpoint)).json();
    // const data =  (await response).json();
    // console.log(data)
    const questions = data.results.map((question: Question) =>(
        {
            ...question,
            answers: shuffleArray([...question.incorrect_answers, question.correct_answer]),
        }
    ));
    console.log(questions)
    return this.questionSet2 = questions;
  }
  async getQuestions3()  {
    let category = getRndInteger(9, 33);
    const endpoint = `https://opentdb.com/api.php?amount=5&category=${category}&type=multiple`;
    const data = await (await fetch(endpoint)).json();
    // const data =  (await response).json();
    // console.log(data)
    const questions = data.results.map((question: Question) =>(
        {
            ...question,
            answers: shuffleArray([...question.incorrect_answers, question.correct_answer]),
        }
    ));
    console.log(questions)
    return this.questionSet3 = questions;
  }
  async getQuestions4()  {
    let category = getRndInteger(9, 33);
    const endpoint = `https://opentdb.com/api.php?amount=5&category=${category}&type=multiple`;
    const data = await (await fetch(endpoint)).json();
    // const data =  (await response).json();
    // console.log(data)
    const questions = data.results.map((question: Question) =>(
        {
            ...question,
            answers: shuffleArray([...question.incorrect_answers, question.correct_answer]),
        }
    ));
    console.log(questions)
    return this.questionSet4 = questions;
  }
  async getQuestions5()  {
    let category = getRndInteger(9, 33);
    const endpoint = `https://opentdb.com/api.php?amount=5&category=${category}&type=multiple`;
    const data = await (await fetch(endpoint)).json();
    // const data =  (await response).json();
    // console.log(data)
    const questions = data.results.map((question: Question) =>(
        {
            ...question,
            answers: shuffleArray([...question.incorrect_answers, question.correct_answer]),
        }
    ));
    console.log(questions)
    return this.questionSet5 = questions;
  }

}
