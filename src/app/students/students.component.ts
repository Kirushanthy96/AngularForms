import { Component, OnInit } from '@angular/core';

import {ActivatedRoute,ParamMap} from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  selected:number;

  constructor(private router:ActivatedRoute) { }

  ngOnInit() {
    this.router.paramMap.subscribe( (params: ParamMap) =>{
      this.selected = +(params.get('id'));
      console.log(this.selected);
    });
  }





}
