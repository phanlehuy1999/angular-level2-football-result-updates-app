import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesBoardComponent } from './updates-board.component';

describe('UpdatesBoardComponent', () => {
  let component: UpdatesBoardComponent;
  let fixture: ComponentFixture<UpdatesBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatesBoardComponent]
    });
    fixture = TestBed.createComponent(UpdatesBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
