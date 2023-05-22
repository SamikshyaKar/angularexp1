import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-randomobservables',
  templateUrl: './randomobservables.component.html',
  styleUrls: ['./randomobservables.component.css']
})
export class RandomobservablesComponent implements OnInit {
  myobservables:any;
  constructor() { 
    this.myobservables= new Observable((object)=>
    {
      object.next(Math.random())
    });
  }

  ngOnInit(): void {
     console.log(" First Subscriber ");
     this.myobservables.subscribe((data:any)=>{
      console.log(data);
     });

     console.log(" Second  Subscriber ");
     this.myobservables.subscribe((data:any)=>{
      console.log(data);
     });

  }

}
