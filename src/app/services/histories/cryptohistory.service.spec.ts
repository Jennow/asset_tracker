import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ApiService } from '../api.service';

import { CryptohistoryService } from './cryptohistory.service';

describe('CryptohistoryService', () => {
  let service: CryptohistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler, ApiService]
    });
    service = TestBed.inject(CryptohistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
