import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }


 classA(){
     this.router.navigate(['classa'],{relativeTo:this.route});
  }

  classB(){
      this.router.navigate(['classb'],{relativeTo:this.route});
       
  }

}
