import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFormstatusComponent } from './edit-formstatus.component';

describe('EditFormstatusComponent', () => {
  let component: EditFormstatusComponent;
  let fixture: ComponentFixture<EditFormstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFormstatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFormstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
