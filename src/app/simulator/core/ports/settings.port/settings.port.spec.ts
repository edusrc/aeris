import { TestBed } from '@angular/core/testing';

import { SettingsPort } from './settings.port';

describe('SettingsPort', () => {
  let service: SettingsPort;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettingsPort);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
