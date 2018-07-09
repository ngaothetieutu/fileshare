import { Component, OnInit, Input } from '@angular/core';
import {ServiceCl} from 'src/app/applist/Services/services.component'
import {QuizNew,QuestionNew,AnswerNew
,ButtonNew
,QuizItemNew} from 'src/app/applist/Models/POCOnew.component';

import {ModelContainerNew} from 'src/app/applist/Models/initsNew.component';


@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  @Input() _quizes:QuizItemNew;
  @Input() _questions:QuizItemNew;
  @Input() _answers:QuizItemNew;
  @Input() _buttons:ButtonNew[];

  _quizSelected:QuizNew;
  _questionSelected:QuestionNew;
  _answerSelected:AnswerNew;

  constructor(){
    ServiceCl.log(["Constructor: " + this.constructor.name]);
  }

  ngOnInit(){
    ModelContainerNew.nodeEdit.subscribe(s=>{
      this._quizSelected=ModelContainerNew.quizSelected;
      this._questionSelected=ModelContainerNew.questionSelected;
      this._answerSelected=ModelContainerNew.answerSelected;

      ServiceCl.log(["nodeEdit received by " + this.constructor.name
        ,this._quizSelected
        ,this._questionSelected
        ,this._answerSelected
      ]);
      
    });
    ServiceCl.log(["Inited: " + this.constructor.name,this._quizes,this._buttons]);
  }

}