import { TestBed } from '@angular/core/testing';

import { HexManagerService } from './hex-manager.service';

describe('HexManagerService', () => {
  let service: HexManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HexManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
