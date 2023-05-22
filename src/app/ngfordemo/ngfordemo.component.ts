import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfordemo',
  templateUrl: './ngfordemo.component.html',
  styleUrls: ['./ngfordemo.component.css']
})
export class NgfordemoComponent implements OnInit {

  constructor() {
 
   }

  ngOnInit(): void {
  }
  setArrayFromNumber(i: number) {
    return new Array(i);
  }

  GetNumbersngFor(i: any) {
    return new Array(i);
  }
 

}
