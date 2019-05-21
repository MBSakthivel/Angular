import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms"

@Component({
  selector: 'app-todo-with-reactive-form',
  templateUrl: './todo-with-reactive-form.component.html',
  styleUrls: ['./todo-with-reactive-form.component.css']
})
export class TodoWithReactiveFormComponent implements OnInit {

  todoReactiveForm:any;

  task = []
  constructor() { }

  ngOnInit() {
    this.todoReactiveForm=new FormGroup({
      taskName: new FormControl()
    });

  }
  saveTodo=function(somthing){
    console.log(somthing);
    this.task.push(somthing.value.taskName);
    console.log(this.task);
    somthing.value.taskName="";
  }
  taskCompleted=function(taskcounter){
    console.log(taskcounter);
    this.task.splice(taskcounter,1);
      }
}
