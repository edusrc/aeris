import { TestBed } from '@angular/core/testing';

import { NotifyPort } from './notify.port';

describe('NotifyPort', () => {
  let service: NotifyPort;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotifyPort);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
