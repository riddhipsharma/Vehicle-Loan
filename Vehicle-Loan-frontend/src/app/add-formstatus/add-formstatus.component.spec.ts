import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormstatusComponent } from './add-formstatus.component';

describe('AddFormstatusComponent', () => {
  let component: AddFormstatusComponent;
  let fixture: ComponentFixture<AddFormstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFormstatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFormstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
