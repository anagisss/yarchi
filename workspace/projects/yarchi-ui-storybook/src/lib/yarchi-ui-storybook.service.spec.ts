import { TestBed } from '@angular/core/testing';

import { YarchiUiStorybookService } from './yarchi-ui-storybook.service';

describe('YarchiUiStorybookService', () => {
  let service: YarchiUiStorybookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YarchiUiStorybookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
