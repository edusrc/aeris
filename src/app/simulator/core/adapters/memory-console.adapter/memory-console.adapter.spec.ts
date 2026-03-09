import { TestBed } from '@angular/core/testing';

import { MemoryConsoleAdapter } from './memory-console.adapter';

describe('MemoryConsoleAdapter', () => {
  let service: MemoryConsoleAdapter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemoryConsoleAdapter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
