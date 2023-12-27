import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YarchiUiStorybookComponent } from './yarchi-ui-storybook.component';

describe('YarchiUiStorybookComponent', () => {
  let component: YarchiUiStorybookComponent;
  let fixture: ComponentFixture<YarchiUiStorybookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YarchiUiStorybookComponent]
    });
    fixture = TestBed.createComponent(YarchiUiStorybookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
