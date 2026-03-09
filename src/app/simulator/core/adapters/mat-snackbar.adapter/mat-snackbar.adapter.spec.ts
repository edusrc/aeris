import { TestBed } from '@angular/core/testing';

import { MatSnackbarAdapter } from './mat-snackbar.adapter';

describe('MatSnackbarAdapter', () => {
  let service: MatSnackbarAdapter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatSnackbarAdapter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
