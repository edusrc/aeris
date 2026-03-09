import { TestBed } from '@angular/core/testing';

import { FileSaverAdapter } from './file-saver.adapter';

describe('FileSaverAdapter', () => {
  let service: FileSaverAdapter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileSaverAdapter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
