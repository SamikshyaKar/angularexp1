import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behaviouralsubject',
  templateUrl: './behaviouralsubject.component.html',
  styleUrls: ['./behaviouralsubject.component.css']
})
export class BehaviouralsubjectComponent implements OnInit {
myobservables:any;
  constructor() {
this.myobservables= new BehaviorSubject(10);

   }

  ngOnInit(): void {

this.myobservables.subscribe((data:any)=>{console.log(data);});

this.myobservables.subscribe((data:any)=>{console.log("Subscriber_1_"+data);})
this.myobservables.next("1");
this.myobservables.subscribe((data:any)=>{console.log("Subscriber_2_"+data);})
this.myobservables.next("2");
this.myobservables.subscribe((data:any)=>{console.log("Subscriber_3_"+data);})
this.myobservables.next("3")
this.myobservables.subscribe((data:any)=>{console.log("Subscriber_4_"+data);})
this.myobservables.next("4")
this.myobservables.next("5")
this.myobservables.next("6")

this.myobservables.subscribe((data:any)=>{console.log("Subscriber_5_"+data);})
this.myobservables.subscribe((data:any)=>{console.log("Subscriber_6_"+data);})
this.myobservables.subscribe((data:any)=>{console.log("Subscriber_7_"+data);})

  }

}
