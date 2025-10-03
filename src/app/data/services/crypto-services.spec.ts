import { TestBed } from '@angular/core/testing';

import { CryptoServices } from './crypto-services';

describe('CryptoServices', () => {
  let service: CryptoServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptoServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
