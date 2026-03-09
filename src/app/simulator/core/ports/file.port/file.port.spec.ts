import { TestBed } from '@angular/core/testing';

import { FilePort } from './file.port';

describe('FilePort', () => {
  let service: FilePort;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilePort);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
