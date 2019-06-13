import { TestBed } from '@angular/core/testing';

import { DuplicateFinderService } from './duplicate-finder.service';

describe('DuplicateFinderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DuplicateFinderService = TestBed.get(DuplicateFinderService);
    expect(service).toBeTruthy();
  });
});
