import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
name="Angular";
  constructor() { }

  ngOnInit() {
  }

  getNameUpdate=function(event){
    console.log(event);
    this.name=event;
  }

}
