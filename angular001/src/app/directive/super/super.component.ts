import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-super',
  templateUrl: './super.component.html',
  styleUrls: ['./super.component.css']
})
export class SuperComponent implements OnInit {
  
  friends = ["A", "B", "C", "D"];
  locations = [
    {
      city: "Chennai",
      code: "01"
    },
    {
      city: "Mumbai",
      code: "02"
    }
  ];
  display: boolean = true;
  checkOne: boolean = true;
  check = "INFY1";
  constructor() { }

  ngOnInit() {
  }
  playHideandseek = function () {
    console.log("fucntion called");
    this.display = this.display ? false : true;
  }
  displayAnyOne = function () {
    console.log("ssdsd");
    this.checkOne = this.checkOne ? false : true;
  }
}
