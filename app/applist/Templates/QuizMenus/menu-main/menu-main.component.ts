import { Component, OnInit, Input } from '@angular/core';
import {ServiceCl} from 'src/app/applist/Services/services.component'
import {QuizNew,QuestionNew,AnswerNew
,ButtonNew
,QuizItemNew} from 'src/app/applist/Models/POCOnew.component';

import {ModelContainerNew,FactoryNew} from 'src/app/applist/Models/initsNew.component';

import {HttpService} from 'src/app/applist/Services/http.service';

@Component({
  selector: 'app-menu-main',
  templateUrl: './menu-main.component.html',
  styleUrls: ['./menu-main.component.css']
})
export class MenuMainComponent implements OnInit {

  @Input() _quizItems:QuizItemNew;
  @Input() _buttonsQuiz:ButtonNew[];
  @Input() editButtons_:ButtonNew[];

  _editItem:QuizItemNew;

  constructor(private hs_:HttpService){

    ServiceCl.log(["Constructor: " + this.constructor.name]);
  }

  ngOnInit(){

    ModelContainerNew.Init();
    this._quizItems=ModelContainerNew.QuizesPassed;
    this.hs_.nodesPassed_=this._quizItems;
    console.log(JSON.stringify(this._quizItems));
    ModelContainerNew.nodeEdit.subscribe(s=>{
      this._editItem=ModelContainerNew.nodeSelected;
      ServiceCl.log(["nodeEdit received by " + this.constructor.name
        ,this._editItem
      ]);
    });

    ModelContainerNew.nodeCopy.subscribe(s=>{
      this._editItem=ModelContainerNew.nodeSelected;
      ServiceCl.log(["nodeCopy received by " + this.constructor.name
        ,this._editItem
      ]);
    });

    ServiceCl.log(["Inited: " + this.constructor.name,this._quizItems,this._buttonsQuiz]);
  }

  Post(str_:string){
    this.hs_.addQuiz(str_,ModelContainerNew.QuizesPassed).subscribe((s:QuizItemNew)=>{
      ServiceCl.log(["Post received: " + str_,this.constructor.name,s]);
    });

    ServiceCl.log(["Post: " + str_,this.constructor.name,ModelContainerNew.QuizesPassed]);
  }
  Get(str_:string){

    this.hs_.getQuiz(str_).subscribe((s:QuizItemNew)=>{
      let r2=FactoryNew.cloneByKey(s);
      ModelContainerNew.QuizesPassed=r2;
      this._quizItems=ModelContainerNew.QuizesPassed;
      ServiceCl.log(["Get received: ",this._quizItems,r2,s]);
    })

    ServiceCl.log(["Get: " + str_,this.constructor.name, ModelContainerNew.QuizesPassed]);
  }

}
