import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exec } from './exec';

describe('Exec', () => {
  let component: Exec;
  let fixture: ComponentFixture<Exec>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exec]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exec);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
