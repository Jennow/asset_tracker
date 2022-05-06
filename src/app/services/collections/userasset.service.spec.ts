import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { UserassetService } from './userasset.service';

describe('UserassetService', () => {
  let service: UserassetService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler]
    });
    service = TestBed.inject(UserassetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
