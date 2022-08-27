import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticularAppformComponent } from './particular-appform.component';

describe('ParticularAppformComponent', () => {
  let component: ParticularAppformComponent;
  let fixture: ComponentFixture<ParticularAppformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticularAppformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticularAppformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
