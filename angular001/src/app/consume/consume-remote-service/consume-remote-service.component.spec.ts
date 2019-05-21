import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumeRemoteServiceComponent } from './consume-remote-service.component';

describe('ConsumeRemoteServiceComponent', () => {
  let component: ConsumeRemoteServiceComponent;
  let fixture: ComponentFixture<ConsumeRemoteServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumeRemoteServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumeRemoteServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
