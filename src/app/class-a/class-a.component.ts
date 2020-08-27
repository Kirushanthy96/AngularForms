import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-class-a',
  templateUrl: './class-a.component.html',
  styleUrls: ['./class-a.component.css']
})
export class ClassAComponent implements OnInit {

  constructor(private router:ActivatedRoute,private route:Router) { }


  AStudentList :object[]=[
  {id:1,name:"Roja"},
  {id:2,name:"Vijay"},
  {id:3,name:"Manasa"},
  {id:4,name:"ratha"},
  ];

  ngOnInit(): void {
  }

  ClassA(id){
    this.route.navigate(['classa',id],{relativeTo:this.router});
  }

}
