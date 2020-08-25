import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormArray,Validators, FormGroup} from "@angular/forms";
import { from } from 'rxjs';
import {passwordValidator} from './shared/passwordValidator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  registerForm:FormGroup;

  constructor(private registerF:FormBuilder) { }

  get UserName(){
    return this.registerForm.get('username');
  }

  get email(){
      return this.registerForm.get('email');
  }

  get alternateEmails(){
    return this.registerForm.get('alternateEmails') as FormArray;
  }

  get Address(){
    return this.registerForm['controls'].address['controls'];
  }

  addAlternateEmail(){
    this.alternateEmails.push(this.registerF.control(''));
  }

ngOnInit(): void {
  this.registerForm =this.registerF.group({
    username:['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
    password:[''],
    c_password:[false],
    email :[''],
    subscribe:[''],
    address:this.registerF.group({
      city:['',[Validators.required]],
      state:['',[Validators.required]],
      postal_code:['',[Validators.required]],
    }),
    alternateEmails:this.registerF.array([])
  },
  {validators:passwordValidator}
  );
  this.registerForm.get('subscribe').valueChanges
  .subscribe(checkValue=>{
    const email=this.registerForm.get('email');
    if(checkValue){
      email.setValidators(Validators.required);
    }else{
      email.clearValidators();
    }
    email.updateValueAndValidity();
  })

}
 // registerForm = new FormGroup({
  //  username : new FormControl('kiru'),
  //  password :new FormControl(''),
  //  c_password :new FormControl(''),
   // address :new FormGroup({
   //   city :new FormControl(''),
    //  state :new FormControl(''),
   //   postal_code :new FormControl('')
   // })
 // });
  

  loadApiData(){
    this.registerForm.patchValue({
      username : "kirusha",
      password : 121212,
      c_password :2423434,
      //address : {
       // city :'jaffna',
       // state :'srilanka',
       // postal_code :10
   // }
  });
}

onSubmit(){
  console.log(this.registerForm.value);
  
}
 }

