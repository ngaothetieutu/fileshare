import { Component, OnInit,Input } from '@angular/core';
import {ServiceCl,Service_} from 'app/app7/Services/services.component'
import {Test,NodeCollection,ModelContainer,Quiz,Question,editButtons,editNewButtons,Button} from 'app/app7/Models/inits.component'

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.css']
})
export class MenuEditComponent implements OnInit {
  cName:string;
  test: boolean;

  nodeToEdit_:NodeCollection;
  editButtons_:Button;

  constructor(private service:Service_){
    //service.test=false;
    //ServiceCl.toLog=true;
    this.test=service.test;
    this.cName=this.constructor.name;
    this.editButtons_ = new editButtons();
    ServiceCl.log(['Constructor : ' + this.constructor.name, this.editButtons_,this.nodeToEdit_])
  }
  ngOnInit(){

    ModelContainer.nodeAdded.subscribe(s=>{
      ServiceCl.log(['nodeAdded Received : ' + this.constructor.name,s])
      this.editButtons_=new editNewButtons();
      this.nodeToEdit_=ModelContainer.nodeToEdit;
      ServiceCl.log(['nodeToEdit_ :',this.nodeToEdit_])
    })

    ModelContainer.nodeEmitted.subscribe(s=>{
      ServiceCl.log(['Received nodeEmitted : ' + this.constructor.name, this.editButtons_,this.nodeToEdit_])
      ServiceCl.log([this.constructor.name+" NodeEmitted: ",s])
      this.editButtons_ = new editButtons();
      this.nodeToEdit_=ModelContainer.nodeToEdit;
    });

    ModelContainer.nodeSavedNew.subscribe(s=>{
        ServiceCl.log([this.constructor.name + " nodeSave: ",s])
        this.nodeToEdit_=null;
    });
    ModelContainer.nodeSaved.subscribe(s=>{
        ServiceCl.log([this.constructor.name + " nodeSave: ",s])
    
    });
  }

  nodeSave(n_:NodeCollection){
    ModelContainer.nodeSave(n_);
    ServiceCl.log([this.constructor.name + " nodeSave: ",n_])

  }
}
