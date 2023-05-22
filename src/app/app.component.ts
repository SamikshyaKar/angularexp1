import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DeliverstatusService } from './deliverstatus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'RxjxProj';
  myobservables:any;
  ordertrackstatus:any;
 
  constructor(private service:DeliverstatusService) {
    this.myobservables= new Observable((observer)=>{
      console.log("observer starts");
      observer.next("1");
      observer.next("2");
      observer.next("3");
      observer.next("4");
      observer.next("5");
    })  

    }
  ngOnInit(): void {

    console.log("1 Subscriber");
   this.myobservables.subscribe((data: any)=>{
   console.log(data)});

   console.log("subscriber 2");
   this.myobservables.subscribe((data: any)=>{
    console.log(data)});

    this.service.orderstatus().subscribe((status)=>{this.ordertrackstatus=status;},
    (error)=>{this.ordertrackstatus=error},()=>{this.ordertrackstatus="Press for new Order"}
    )  ; 
    
  }

  }
 



