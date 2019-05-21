import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { setClassMetadata } from '@angular/core/src/render3';

@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.css'],
  animations: [
    trigger('doAnimateText', [
      state('start', style({ color: 'brown',transform:'scale(1)',letterSpacing:"5px" })),
      state('end', style({ color: 'pink',transform:'scale(1)' })),
      transition('start<->end', animate('2000ms ease-in'))
    ])
  ]
})
export class AnimateComponent implements OnInit {
  currentState = 'start';

  constructor() { }

  ngOnInit() {
  }

  doAnimate = function () {
    this.currentState = this.currentState === 'start' ? 'end' : 'start';
  }

}
