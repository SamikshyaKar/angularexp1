import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject-component',
  templateUrl: './subject-component.component.html',
  styleUrls: ['./subject-component.component.css']
})
export class SubjectComponentComponent implements OnInit {
myobservables:any;
  constructor() {
this.myobservables= new Subject();


   }

  ngOnInit(): void {
    console.log(" First Subscriber ");
    this.myobservables.subscribe((data:any)=>{
     console.log(data);
    });
    this.myobservables.next(Math.random());
    console.log(" Second  Subscriber ");
    this.myobservables.subscribe((data:any)=>{
     console.log(data);
    });
    this.myobservables.next(Math.random());
    console.log(" Third  Subscriber ");
    this.myobservables.subscribe((data:any)=>{
     console.log(data);
    });
    this.myobservables.next(Math.random());
    console.log(" Fourth  Subscriber ");
    this.myobservables.subscribe((data:any)=>{
     console.log(data);
    });

  }

}
