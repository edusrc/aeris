import { TestBed } from '@angular/core/testing';

import { ConsolePort } from './console.port';

describe('ConsolePort', () => {
  let service: ConsolePort;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsolePort);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
