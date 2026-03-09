import { TestBed } from '@angular/core/testing';

import { SyscallPort } from './syscall.port';

describe('SyscallPort', () => {
  let service: SyscallPort;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SyscallPort);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
