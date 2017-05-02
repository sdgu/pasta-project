import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSubmissionComponent } from './item-submission.component';

describe('ItemSubmissionComponent', () => {
  let component: ItemSubmissionComponent;
  let fixture: ComponentFixture<ItemSubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemSubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
