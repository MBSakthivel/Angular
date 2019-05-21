import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoWithReactiveFormComponent } from './todo-with-reactive-form.component';

describe('TodoWithReactiveFormComponent', () => {
  let component: TodoWithReactiveFormComponent;
  let fixture: ComponentFixture<TodoWithReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoWithReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoWithReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
