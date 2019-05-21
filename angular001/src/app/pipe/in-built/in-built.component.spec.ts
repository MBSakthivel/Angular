import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InBuiltComponent } from './in-built.component';

describe('InBuiltComponent', () => {
  let component: InBuiltComponent;
  let fixture: ComponentFixture<InBuiltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InBuiltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InBuiltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
