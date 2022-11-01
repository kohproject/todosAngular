import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskblockComponent } from './taskblock.component';

describe('TaskblockComponent', () => {
  let component: TaskblockComponent;
  let fixture: ComponentFixture<TaskblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskblockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
