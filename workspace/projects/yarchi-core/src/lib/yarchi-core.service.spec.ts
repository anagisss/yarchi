import { TestBed } from '@angular/core/testing';

import { YarchiCoreService } from './yarchi-core.service';

describe('YarchiCoreService', () => {
  let service: YarchiCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YarchiCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
