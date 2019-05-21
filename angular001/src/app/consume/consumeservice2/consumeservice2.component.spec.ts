import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Consumeservice2Component } from './consumeservice2.component';

describe('Consumeservice2Component', () => {
  let component: Consumeservice2Component;
  let fixture: ComponentFixture<Consumeservice2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Consumeservice2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Consumeservice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
