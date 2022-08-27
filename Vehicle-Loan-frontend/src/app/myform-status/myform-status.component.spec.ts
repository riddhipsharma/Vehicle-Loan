import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyformStatusComponent } from './myform-status.component';

describe('MyformStatusComponent', () => {
  let component: MyformStatusComponent;
  let fixture: ComponentFixture<MyformStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyformStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyformStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
