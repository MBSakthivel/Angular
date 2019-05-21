import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  mypi = 3.14;
  score=[25,36];
  welcome = function () {
    console.log('Angular 7 Service');
  }
  constructor() { }
}
