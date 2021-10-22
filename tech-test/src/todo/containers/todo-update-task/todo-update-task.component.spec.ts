import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoUpdateTaskComponent } from './todo-update-task.component';

describe('TodoUpdateTaskComponent', () => {
  let component: TodoUpdateTaskComponent;
  let fixture: ComponentFixture<TodoUpdateTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoUpdateTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoUpdateTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
