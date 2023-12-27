import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YarchiCoreComponent } from './yarchi-core.component';

describe('YarchiCoreComponent', () => {
  let component: YarchiCoreComponent;
  let fixture: ComponentFixture<YarchiCoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YarchiCoreComponent]
    });
    fixture = TestBed.createComponent(YarchiCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
