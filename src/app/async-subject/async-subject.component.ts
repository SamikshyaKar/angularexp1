import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.css']
})
export class AsyncSubjectComponent implements OnInit {
myobs:any;

  constructor() {
  
   }

  ngOnInit(): void {
    this.myobs= new AsyncSubject();
    this.myobs.next("1");
    this.myobs.next("2");
    this.myobs.complete();
    this.myobs.subscribe(
(val:any)=>{console.log("Sub_1_"+val);},
(err:any)=>{console.log("Sub_1_"+err);},
()=>{console.log("Subject Completed");}

    )
  }

}
