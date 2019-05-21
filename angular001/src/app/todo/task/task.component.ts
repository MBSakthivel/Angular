import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  task = []
  todo="";
  saveToDo = function (somthing) {
    console.log(somthing);
    this.task.push(somthing.value.todo);
    console.log(this.task);
    this.todo="";
  }
  taskCompleted=function(taskcounter){
console.log(taskcounter);
this.task.splice(taskcounter,1);
  }

  constructor() { }

  ngOnInit() {
  }

}
