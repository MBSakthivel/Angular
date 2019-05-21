import { Component, OnInit } from '@angular/core';
import { LocalService } from '../../services/local.service';

@Component({
  selector: 'app-consumeservice',
  templateUrl: './consumeservice.component.html',
  styleUrls: ['./consumeservice.component.css']
})
export class ConsumeserviceComponent implements OnInit {

  constructor(private local:LocalService) {   
    console.log(this.local.mypi);
    console.log(this.local.welcome);
    console.log(this.local.score);
    this.local.score.push(99);
    console.log(this.local.score);
  }

  ngOnInit() {
    console.log(this.local.mypi);
    console.log(this.local.welcome);
    console.log(this.local.score);
    this.local.score.push(99);
    console.log(this.local.score);
  }

}
