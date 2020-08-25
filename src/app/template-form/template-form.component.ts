import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import { from } from 'rxjs';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  topics=['Angular','React','java'];
  topicHasError=true;
  submitted=false;

  userModel= new User('kiru','Jkiru96@gmail.com',2333123213,'default','morning',false);
  
  constructor() { }

  ngOnInit(): void {

  }
  validateTopic(value){
    if(value==='default')
    {
      this.topicHasError=true;
    }else{
      this.topicHasError=false;
    }
  }
  onSubmit(userForm){
       console.log(userForm);
  
  }
  
}
  
