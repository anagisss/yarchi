import { TestBed } from '@angular/core/testing';

import { YarchiControlsService } from './yarchi-controls.service';

describe('YarchiControlsService', () => {
  let service: YarchiControlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YarchiControlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
