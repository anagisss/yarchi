import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YarchiControlsComponent } from './yarchi-controls.component';

describe('YarchiControlsComponent', () => {
  let component: YarchiControlsComponent;
  let fixture: ComponentFixture<YarchiControlsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YarchiControlsComponent]
    });
    fixture = TestBed.createComponent(YarchiControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
