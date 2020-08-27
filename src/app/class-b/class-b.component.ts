import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-class-b',
  templateUrl: './class-b.component.html',
  styleUrls: ['./class-b.component.css']
})
export class ClassBComponent implements OnInit {

  constructor(private router:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
  }
  BStudentList :object[]=[
    {id:1,name:"meena"},
    {id:2,name:"vetri"},
    {id:3,name:"Ajith"},
    {id:4,name:"Dhoni"},
    ];
 
  ClassB(id){
    this.route.navigate(['classb',id],{relativeTo:this.router});
  }

}
