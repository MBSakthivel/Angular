import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  simpleForm: any;
  constructor() { }

  ngOnInit() {
    this.simpleForm = new FormGroup({
      fname: new FormControl("obb", Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.pattern('^[a-zA-Z]+$')
      ])),
      lname: new FormControl("", this.customLengthValidator),
      hobby: new FormControl()
    });
  }


  saveData = function (something) {
    console.log(something);
  }

  customLengthValidator = function (control) {
    console.log(control);
    if (control.value.length < 4) {
      return { 'lname': true };
    }
  }


}
