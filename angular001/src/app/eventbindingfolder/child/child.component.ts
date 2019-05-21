import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() sendname;
  @Output() nameUpdated =new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  updateName = function () {
    this.nameUpdated.emit(this.sendname);
  }

}
