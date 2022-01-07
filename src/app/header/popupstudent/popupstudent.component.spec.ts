import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupstudentComponent } from './popupstudent.component';

describe('PopupstudentComponent', () => {
  let component: PopupstudentComponent;
  let fixture: ComponentFixture<PopupstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupstudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
