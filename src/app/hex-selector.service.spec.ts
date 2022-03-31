import { TestBed } from '@angular/core/testing';

import { HexSelectorService } from './hex-selector.service';

describe('HexSelectorService', () => {
  let service: HexSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HexSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
