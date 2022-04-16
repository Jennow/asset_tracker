import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HistoryItem } from 'src/app/model/HistoryItem';

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

  it('should be created', () => {
    let historyItems = [
      {

      }
    ] as HistoryItem[]

    let response = HistoryFormattingService.formatHistoryForLinearChart(historyItems)
  
    // expect(response).toEqual([]);
  });
});
