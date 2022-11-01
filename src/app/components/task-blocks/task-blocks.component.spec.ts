import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskBlocksComponent } from './task-blocks.component';

describe('TaskBlocksComponent', () => {
  let component: TaskBlocksComponent;
  let fixture: ComponentFixture<TaskBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskBlocksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
