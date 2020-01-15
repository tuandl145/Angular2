import { TestBed } from '@angular/core/testing';

import { HeloService } from './helo.service';

describe('HeloService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeloService = TestBed.get(HeloService);
    expect(service).toBeTruthy();
  });
});
