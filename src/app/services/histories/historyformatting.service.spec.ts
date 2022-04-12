import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { HistoryFormattingService } from './historyformatting.service';

describe('HistoryService', () => {
  let service: HistoryFormattingService
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(HistoryFormattingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
