import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Registers } from './registers';

describe('Registers', () => {
  let component: Registers;
  let fixture: ComponentFixture<Registers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Registers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Registers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
