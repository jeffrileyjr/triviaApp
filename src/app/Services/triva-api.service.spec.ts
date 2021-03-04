import { TestBed } from '@angular/core/testing';

import { TrivaAPIService } from './triva-api.service';

describe('TrivaAPIService', () => {
  let service: TrivaAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrivaAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
