import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-observablefromarray',
  templateUrl: './observablefromarray.component.html',
  styleUrls: ['./observablefromarray.component.css']
})
export class ObservablefromarrayComponent implements OnInit {
  myobservables:any;
  constructor() { 
var array1=[1,2,3,4,5,6,7,8];
var array2=['A','B','C'];
this.myobservables=of(array1,array2);

  }

  ngOnInit(): void {
    this.myobservables.subscribe((data:any)=>{
console.log(data);
    })
  }

}
