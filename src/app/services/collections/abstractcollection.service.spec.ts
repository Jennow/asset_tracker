import { TestBed } from '@angular/core/testing';

import { AbstractCollectionService } from './abstractcollection.service';

describe('CollectionService', () => {
  let service: AbstractCollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbstractCollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
