import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../questions.service';
import { ClansScoreService } from '../../clans-score.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss'
})
export class QuestionsComponent implements OnInit {

  public currentQuestion: any;
  public clanScore: any;
  public maxScore!: number;
  public numberOfQuestions: number = 0;
  public answersGiven: number = 0;

  constructor(private questions: QuestionsService, private clan: ClansScoreService){  }

  ngOnInit(): void {
    this.currentQuestion = this.questions.getRandomQuestion();
    this.clan.clanScore$.subscribe(v => this.clanScore = v);
    this.clan.maxScoreValue$.subscribe(v => this.maxScore = v);
    this.numberOfQuestions = this.questions.questions.length;
  }

  selectAnswer(answer: any){
    this.clan.applyQuestionScore(this.currentQuestion.clans, answer.points);
    this.questions.closeQuestion();
    this.answersGiven++;

    if(this.questions.questions.length > 0) {
      this.currentQuestion = this.questions.getRandomQuestion();
    } else {
      console.log('end of questionnaire')
    }
  }

  sortClans(arr: any[]) {
    return arr.sort((a, b) => {
      if(a.score > b.score) { return -1 }
      if(a.score < b.score) { return 1 }
      return 0
    });
  }
}
