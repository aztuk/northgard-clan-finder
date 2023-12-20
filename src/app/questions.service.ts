import { Injectable } from '@angular/core';
import { QUESTIONS } from './data';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  public questions = QUESTIONS;
  private currentIndex = Math.floor(Math.random() * this.questions.length);

  constructor() {

   }

  closeQuestion(){
    console.log(this.questions, this.currentIndex);
    this.questions.splice(this.currentIndex, 1);

  }
  getRandomQuestion() {
    this.currentIndex = Math.floor(Math.random() * this.questions.length);

    return this.questions[this.currentIndex];
  }
}

