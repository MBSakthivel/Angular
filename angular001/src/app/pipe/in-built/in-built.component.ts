import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-in-built',
  templateUrl: './in-built.component.html',
  styleUrls: ['./in-built.component.css']
})
export class InBuiltComponent implements OnInit {
  location= "Chennai";
  money=88;
  birthDate=new Date();
  friends=['A',"B","C"]
  scores =[99,98,97,5,8];
  constructor() { }

  ngOnInit() {
  }

}
