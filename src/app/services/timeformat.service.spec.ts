import { TestBed } from '@angular/core/testing';

import { TimeformatService } from './timeformat.service';

describe('TimeformatService', () => {
  let service: TimeformatService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimeformatService]
    });
    service = TestBed.inject(TimeformatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
