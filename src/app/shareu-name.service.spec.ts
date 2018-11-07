import { TestBed, inject } from '@angular/core/testing';

import { ShareuNameService } from './shareu-name.service';

describe('ShareuNameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShareuNameService]
    });
  });

  it('should be created', inject([ShareuNameService], (service: ShareuNameService) => {
    expect(service).toBeTruthy();
  }));
});
