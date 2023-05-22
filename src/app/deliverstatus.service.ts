import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeliverstatusService {

  constructor() { }

  orderstatus(){

    const deliverystatus= new Observable((trackorder)=>{trackorder.next("Order Created");
   setTimeout(() => {
    trackorder.next("order processing");
   }, 3000); 
  //  setTimeout(() => {
  //   trackorder.error(new Error("Order cant be processes !!"));
  //  }, 5000);
   setTimeout(() => {
    trackorder.next("order confirmed");
   }, 6000);
  setTimeout(() => {
    trackorder.next("out for delivery");
  }, 9000);
  setTimeout(() => {
    trackorder.next("order delivered");  
  }, 12000);

  setTimeout(() => {
    trackorder.complete()
  }, 14000);    
  
                                                                                     });

       return deliverystatus;                                                                              
  }
}
