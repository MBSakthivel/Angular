import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumeserviceComponent } from './consumeservice.component';

describe('ConsumeserviceComponent', () => {
  let component: ConsumeserviceComponent;
  let fixture: ComponentFixture<ConsumeserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumeserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumeserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
