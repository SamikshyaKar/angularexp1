import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfordemotoprintnumbers2',
  templateUrl: './ngfordemotoprintnumbers2.component.html',
  styleUrls: ['./ngfordemotoprintnumbers2.component.css']
})
export class Ngfordemotoprintnumbers2Component implements OnInit {
  numbers:Array<any> = [];
  constructor() { 
    this.numbers = Array.from({length:15},(v,k)=>k+1);
  }

  ngOnInit(): void {
  }

}
